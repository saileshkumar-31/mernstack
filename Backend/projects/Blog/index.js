const express = require("express");
const app = express();

const {PrismaClient} = require("@prisma/client");
const blogRoute = require("./routes/blogRoutes");
const prisma = new PrismaClient();
const Razorpay = require("razorpay");

app.use(express.json())

const PORT = 8000;

var instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
});

app.listen(PORT, () => {
    console.log("Server is running.... ");
})

app.get("/", (req, res)=>{
    res.send("HELLO WORLD....")
})

app.use("/v1", blogRoute)

app.post("/order", async(req, res)=>{
    try{
        //1.Data from front end
    const amount = req.body;
    //2.DB logic
    const razorpayOrder = await instance.orders.create({
  "amount": amount.amount,
  "currency": "INR",
  "receipt": "receipt#1",
  "partial_payment": false,
  "notes": {
    "key1": "value3",
    "key2": "value2"
  }
})
    //3. Data to front end
    res.send(razorpayOrder);

    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        });
    
}})


   