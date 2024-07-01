
const mongoose=require('mongoose');
const dotenv=require('dotenv');


const connect=async ()=>{
	await mongoose.connect('mongodb+srv://adhikaridon45:h8Fnzw2iFKVBEBNG@cluster0.bshxwvd.mongodb.net/');
	console.log("connected successfully");
}

module.exports=connect;