const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const express = require("express");
const { getAllblog, getBlogById } = require("../controller/blogController");
const blogRoute = express.Router();

//1.GET 
blogRoute.get("/blogs", getAllblog)

//2.GET
blogRoute.get("/blogs/:blog_id", getBlogById)


module.exports = blogRoute