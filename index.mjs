import express from'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Register from './routes/register.mjs'

const app=express();

app.use(express.json());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Users:sudhir@1997@bloggersproject.cdtyx.mongodb.net/IncomeTax",{useNewUrlParser: true,  useUnifiedTopology: true }).then((val)=>{console.log("Connected")});

app.use((req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin","*"); 
res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
res.setHeader("Access-Control-Allow-Methods","GET,PUT,PATCH,DELETE,POST");
next();
});

app.use('/register',Register);



// app.post('/',(req,res,next)=>{let jw=jwt.sign({
//     exp: Math.floor(Date.now() / 1000) + (60 * 60),
//     data:req.body.data.email
//   }, 'secret');req.headers['token']=jw;next();},(req,res,next)=>{req.headers['some']=true;console.log(req.headers); next()},(req,res)=>{console.log(req.get('some'));console.log(req.body);res.setHeader('Content-Type','application/json');res.json({value:req.get('token')})});

// app.post('/token',(req,res,next)=>{try{var re=jwt.verify(req.body.headers.Authorization, 'secret');}catch(err){console.log("Undefined")}console.log(re);res.json({value:1234}) })

// app.put('/put',(req,res)=>{console.log(req.body);res.setHeader('Content-Type','application/json');res.json({value:"Its Workng Again Check"})});

// app.delete('/delete',(req,res)=>{console.log(req);res.setHeader('Content-Type','application/json');res.json({value:"Its Workng Again Check"})});




app.listen(3000,()=>{console.log("Restarted")});