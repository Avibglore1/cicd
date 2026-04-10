const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.json({message: "Hello CI/CD 🚀"})
})

app.get("/sum", (req,res)=>{
    const {a,b} = req.query;
    const result = Number(a) + Number(b);
    res.json({result})
})

module.exports = app;

if(require.main === module){
    app.listen(3000,()=>{
        console.log(`Server running on port 3000`)
    })
}