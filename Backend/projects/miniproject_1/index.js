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

//1.GET 
app.get("/Students",async(req, res)=>{
    //1.data form the front end =. no data needed from frontend
    //2. DB logic
    const studentData = await prisma.students.findMany();

    //3. Data to front end
    res.send(studentData);
})

//2.GET
app.get("/Student/:roll_no", async(req, res)=>{
    const {roll_no} = req.params;
    const studentData = await prisma.students.findUnique({
        where: {
            roll_no: roll_no
        }
    });
    res.send(studentData);
})


//3.POST
app.use(express.json());
app.post("/Students", async (req, res)=>{
    //1. data from the frontend
    const data = req.body;

    //2. DB logic
    const newStudentData = await prisma.students.create({
        data:{
            roll_no: data.roll_no,
            name: data.name,
            std: data.std,
            gender: data.gender,
            blood_group: data.blood_group
        }
    })

    //3. data to the frontend
    res.send(newStudentData, "Student data created successfully");
})

//4.PUT
app.put("/Students", async (req, res)=>{
    //1. data from the frontend
    const data = req.body;

    //2. DB logic
    const newUpdatedData = await prisma.students.update({
        where:{
            roll_no: data.roll_no
        },
        data:{
            roll_no: data.roll_no,
            name: data.name,
            std: data.std,
            gender: data.gender,
            blood_group: data.blood_group

        }
    })
    //3. data to the frontend
    res.send(newUpdatedData, "Student data updated successfully");
})


//5.DELETE
app.delete("/Students", async (req, res)=>{
    //1. data from the frontend
    const data = req.body;

    //2. DB logic
     await prisma.students.delete({
        where:{
            roll_no: data.roll_no
        },
    })
    //3. data to the frontend
    res.send( "Student data Deleted successfully");
})
