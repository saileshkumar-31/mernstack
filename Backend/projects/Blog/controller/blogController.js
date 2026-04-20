const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const app = express();
const {getAllblogL , getBlogByIdL } = require("../services/blogServices");


app.use(express.json());

const getAllblog =  async (req, res)=>{
    try{
        //1.data form the front end =. no data needed from frontend
    //2. DB logic
    const blog = await getAllblogL();

    //3. Data to front end
    res.status(200).json({
        message:"Data fetched....",
        data: blog
    });

    }catch(error){
        res.status(500).json({
        message:"Internal server error"
    });


    }
}

const getBlogById = async (req, res)=>{
    try{
        //1.data form the front end 
        const {blog_id} = req.params
    //2. DB logic
    const blog = await getBlogByIdL(blog_id);
    //3. Data to front end
    res.status(200).json({
        message:"Data fetched..",
        data: blog
    });

    }catch(error){
        res.status(500).json({
        message:"Internal server error"
    });


    }
    
}
module.exports = {
    getAllblog,
    getBlogById
}