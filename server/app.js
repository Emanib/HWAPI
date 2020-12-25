const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// write your code 
app.get('/user',(req,res)=>{
    res.json({massge: "Welcome int our home", name:req.query.name});
})


app.post('/user/Eman',(req,res)=>{
    res.json({ message:req.body.massage ,name:req.body.name });
    
})
app.get('/user/Eman',(req,res)=>{
    res.json({massge: "Welcome int our Eman"});
})
app.listen(3000,()=>{
    console.log('server running on port3000'); 
 });