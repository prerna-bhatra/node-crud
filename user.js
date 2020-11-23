const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
	fname:
	{
		type:String,
		require:true
	},
	lname:
	{

		type:String,
		require:true
	}
},
{
	timestamps:true
}
);
module.exports=mongoose.model('User',userSchema);





