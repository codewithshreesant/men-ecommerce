const express=require('express');
const app=express();
const dotenv=require('dotenv');
const dbs=require('./Database/connect');
const input=require('./controller/datainput.js');
const getdatas=require('./controller/getinput.js')

dotenv.config();
const PORT=process.env.PORT || 3000;

dbs();

app.get('/', (req,res)=>{
	res.send("This is home page");
})
app.get('/jeans', getdatas);

app.listen(PORT, ()=>{
	console.log(`The server is listening at PORT ${PORT}`);
})

