require('dotenv').config()
const cors=require('cors')
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser')
//const api=require('api')
const {create,remove,ShowAllUsers}=require('./api.js');
const {userById}=require('./getuser.js')
const app=express();
const router=express.Router();
const connect = mongoose.connect("mongodb+srv://prerna:Prerna123@cluster0.jokxx.mongodb.net/crud?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors())
app.post("/api/create",create)
app.post("/api/remove/:userId",remove)
app.get("/api/show",ShowAllUsers)
app.param("userId",userById)

const port=process.env.PORT || 8000


app.listen(port,()=>
{
	console.log("port running at "+port);
})