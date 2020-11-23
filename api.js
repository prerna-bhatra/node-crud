const express=require('express');
const app=express();
const {userById}=require('./getuser.js')
const User=require("./user")
exports.create=(req,res)=>
{
	console.log(req.body)
	const adduser=new User(req.body)
		adduser.save((err,data)=>
			{
		if(err)
		{
			return res.status(400).json({
				error:'user not createdss'
			});

		}
		res.json({data:data})
	})
}
exports.remove=(req,res)=>
{
	const user=req.params.userId
	console.log(user)
	User.remove({_id:user})
	.exec()	
	.then((data,err)=>
	{
		if(err)
		{
			return res.status(400).json({
				error:'Not Deleted'
			});

		}
		res.json({data:data})
	})
}	
exports.ShowAllUsers=(req,res)=>
{	

	User.find()
	.then((data,err)=>
	{
		if(err)

		{

		}
		console.log(data)
		res.json({data:data})
	})


	
}








































