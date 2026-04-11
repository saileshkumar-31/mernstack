const express = require('express');
const  app = express();
const PORT = 3333;

app.get ("/advc",(req, res)=>{
    res.send("Hello World!!!");
})

app.get("/bus",(req, res)=>{
    res.send("Bus Route 1");
})

app.get("/bus",(req, res)=>{
    res.send("Bus Route 2");
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

