const express = require("express");
const app = express();

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());
const PORT = 8000;

//1.GET
app.get("/restaurants", async (req, res)=>{
    //1. data from the frontend =. no data needed from frontend
    //2. DB logic  
    const restaurantData = await prisma.restaurant.findMany(); 
    //3. data to the frontend
    res.send(restaurantData);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

//2.GET
app.get("/restaurant/:id", async (req, res)=>{
    try{
        //1. data from the frontend
        const data = req.params;
        //2. DB logic
        const restaurantDataById = await prisma.restaurant.findUnique({
            where: {
                restaurant_id: data.id}
            });
            if(!restaurantDataById){
                return res.status(404).json({
                    message: "Restaurant not found with the given id"
                })
            }
        //3. data to the frontend
        res.status(200).json({
            message: "Restaurant data by id",
            data: restaurantDataById
        });    

    }catch(error){
        console.log("Internal Server Error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })

    }
});

//3.POST
app.post("/restaurants", async (req, res)=>{
    try{
        //1. data from the frontend
        const data = req.body;
        //2. DB logic
        const newRestaurantData = await prisma.restaurant.create({
            data: {
                name: data.name,
                location: data.location,
                image_url: data.image_url,
                offer: data.offer
            }
        })
        //3. data to the frontend
        res.status(200).json({
            message: "New restaurant created successfully",
            data: newRestaurantData
        })

    }catch(error){
        console.log("Internal Server Error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })

    }
})

//4.PUT
app.put("/restaurant", async (req,res)=>{
    try{
        //1. data from the frontend
        const data = req.body;

        //2. DB logic
        const updatedRestaurantData = await prisma.restaurant.update({
            where:{
                restaurant_id: data.restaurant_id
            },
            data: {
                name: data.name,
                location: data.location,
                image_url: data.image_url,
                offer: data.offer
            }
        })

        //3. data to the frontend
        res.status(200).json({
            message: "Restaurant data updated successfully",
            data: updatedRestaurantData
        })

    }catch(error){
        console.log("Internal Server Error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
})

//5.DELETE
app.delete("/restaurant",async (req,res)=>{
    try{
        //1. data from the frontend
        const data = req.body;

        //2. DB logic
        await prisma.restaurant.delete({
            where:{
                restaurant_id: data.restaurant_id
            }
        })

        //3. data to the frontend
        res.status(200).json({
            message: "Restaurant data deleted successfully"
        })

    }catch(error){
        console.log("Internal Server Error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
})


