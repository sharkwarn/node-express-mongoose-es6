import mongoose from 'mongoose';

import db from './../mongodb/db';

const userSchema = new mongoose.Schema({
  id        :{type:Number},
  name      :{type:String,default:'小五'},
  age       :{type:Number,default:0},
  sex       :{type:String,default:'110'},
  password  :{type:String,default:'110'},
  phone     :{type:String,default:'110'},
  logo      :{type:String,default:'http://image48.360doc.com/DownloadImg/2011/12/2210/20211680_1.jpg'},
  sign      :{type:String,default:'总有一天我会发财的！！！'},
  birthday  :{type:Number,default:'110000000'}
})

userSchema.methods.find = (callback)=>{
  this.model('user').find({name:'朱良灿'},callback)
}
const userModel = db.model("user",userSchema);


export default userModel;
