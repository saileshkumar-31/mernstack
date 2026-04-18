const express = require('express');
const app = express();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/", (req, res)=>{
    res.send("API is working...")
});

//1. Get
app.get("/products", async (req, res)=>{
    try{
        //1.Data from front end = no data

    //2.DB logic
    const productData = await prisma.products.findMany();

    //3.Data to front end 
    res.status(200).json({
        message:"Data is fetched",
        data:productData
    });

    }catch(error){
        res.send(500).json({
            message:"Internal server error",
            error: error
        });

    }

})

//2.GET 
app.get("/product/:product_id", async (req,res)=>{
    try{
        //1.Data from end
        const{product_id}= req.params

        //2.DB logic
        const productDetailData = await prisma.products.findUnique({
            where:{
                product_id: product_id
            }
        });

        //3.Data to frontend
        res.status(200).json({
            message: " Data fetched",
            data: productDetailData
        });
    }catch(error){
        res.status(500).json({
            message: "Internal server error",
            error: error
        });

    }
});


const PORT = 9000;
app.listen(PORT,()=>{
    console.log("API is working....")
});