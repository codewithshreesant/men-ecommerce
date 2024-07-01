
const mongoose=require('mongoose');

const ecomrules=new mongoose.Schema({
	id: {
		type: String,
		require: true
	},

	name: {
		type: String,
		require: true
	},

	price: {
		type: Number,
		require: true
	},

	description: {
		type: String,
		require: true
	},

	img: {
		type: String,
		require: true
	}
})


const ecommodel=mongoose.model('ecommodel', ecomrules);

module.exports=ecommodel;