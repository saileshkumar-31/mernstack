const express = require("express");
const app = express();

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
app.use(express.json());

const bcrypt = require("bcrypt");

var jwt = require('jsonwebtoken');

var morgan = require('morgan');

app.use(morgan("dev"));

const PORT = 24000;

const middleware = (req, res, next)=>{
    console.log("This is a middleware");
    next();
}

app.use(middleware);

const middleware2 = (req, res, next)=>{
    console.log("This is a middleware 2");
    next();
}

const authMiddleware = (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        
        const ans = jwt.verify(token, "sd-rooms" , function(err, decoded){
            if(!err){
                req.user = decoded;
                next();
            }else{
                res.status(401).send("Invalid Token");
            }
        }); 
        
        console.log( token, ans);

    }catch(error){
        console.log("Error in auth middleware", error);

    }
}

const RBAC = (ROLE)=>{
    return (req, res, next)=>{
        const {role} = req.user;
        if(role === ROLE){
            next();
        }else{
            res.status(403).json({
                message: "Forbidden: You don't have access to this resource"
            })
        }
        }
}




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get("/", (req, res)=>{
    res.send("HELLO WORLD....")
 })

//1.Register_User
app.post("/register", middleware2, async (req,res)=>{
    try{
        //1. data from the frontend
        const data = req.body;
        //2. DB logic
        const isUserExists = await prisma.users.findUnique({
            where:{
                email_id: data.email_id
            }
        });
        if(isUserExists){
            res.status(400).json({
                message: "User already exists"
            });
        }else{

            const hashedPassword = await bcrypt.hash(data.password,10);


            const newUser = await prisma.users.create({
                data:{
                    email_id: data.email_id,
                    password: hashedPassword,
                    phone_number: data.phone_number,
                    role: data.role,
                }
            })

            const {password, ...datas} = newUser;
        

        //3. data to the frontend
        res.status(200).json({
            message: "User registered successfully",
            data: datas
        });
    }
    }catch(error){
        console.log("Internal Server Error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }   
});


//2.Login_User
app.post("/login", async(req, res)=>{
    //1. data from the frontend
    const data = req.body;
    //2. DB logic
    const isUserExists = await prisma.users.findUnique({
        where:{
            email_id: data.email_id
        }
    });
    if(isUserExists){
        const {password, ...datas} = isUserExists;
        

        bcrypt.compare(data.password, isUserExists.password, (err, result)=>{
            if(result){
                var temp_key = jwt.sign({email_id: isUserExists.email_id, user_id:isUserExists.user_id, role: isUserExists.role},"sd-rooms", {expiresIn: "1h"});

                var main_key = jwt.sign({user_id: isUserExists.user_id, email_id: isUserExists.email_id, role: isUserExists.role}, "sd-main-rooms", {expiresIn: "3h"});

                const datass = {
                    token:{
                        temp_key,
                        main_key
                    }, ...datas
                }


                res.status(200).json({
                    message: "Login successful",
                    data: datass //destructured to remove password from the response                   
                });
            }else{
                res.status(400).json({
                    message: "Invalid credentials"
                });
            }
        })
    }else{
        res.status(400).json({
            message: "User does not exist"
        })
    }
    //3. data to the frontend

});

//3.Refresh_Token
app.post("/refresh", async (req, res)=>{
    //1. data from the frontend
    const data = req.body;
    //2. DB logic
    var decode = jwt.verify(data.main_key, "sd-main-rooms", (err, decoded)=>{
        if(!err){
            const temp_key = jwt.sign({
                email_id: decoded.email_id,
                user_id: decoded.user_id,
                role: decoded.role
            }, "sd-rooms", {expiresIn: "1h"});

            res.status(200).json({
                message: "Token refreshed successfully",
                data:temp_key
            })
        }else{
            res.status(400).json({
                message: "Invalid main token"
            })
        }
    })
    //3. data to the frontend
})

app.get("/users" , async (req, res)=>{
    //1. data from the frontend
    //2. DB logic
    const user = await prisma.users.findMany();

    //3. data to the frontend
    res.send(user);
})

app.get("/user/:user_id" , authMiddleware, RBAC("USER"), async (req, res)=>{
    //1. data from the frontend
    const {user_id} =  req.params;
    //2. DB logic
    const userData = await prisma.users.findUnique({
        where:{
            user_id: user_id
        }
    });

    //3. data to the frontend
    res.send(userData);
})






