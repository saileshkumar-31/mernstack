const express = require("express");
const app = express();

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get("/abc", (req, res)=>{
    res.send("HELLO WORLD....")
})

//get 
app.get("/Students",async(req, res)=>{
    //1.data form the front end =. no data needed from frontend
    //2. DB logic
    const studentData = await prisma.students.findMany();

    //3. Data to front end
    res.send(studentData);
})