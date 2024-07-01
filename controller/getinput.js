
const mongoose=require('mongoose');
const ecommodel=require('../Schema/dbschema.js');

const getdata=async (req,res)=>{
	await mongoose.connect('mongodb+srv://adhikaridon45:h8Fnzw2iFKVBEBNG@cluster0.bshxwvd.mongodb.net/')	
	console.log("database connected successfully");
	const data=await ecommodel.find(req.query);
	console.log(data);
	console.log(req.query);
	res.json(data);
}


module.exports=getdata;