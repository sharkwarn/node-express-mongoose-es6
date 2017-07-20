import mongoose from 'mongoose';

import db from './../mongodb/db';

const userSchema = new mongoose.Schema({
  name:{type:String},
  age:{type:Number},
  sex:{type:String},
  passWord:{type:String},
  phone:{type:String}
})

userSchema.methods.find = (callback)=>{
  this.model('user').find({name:'朱良灿'},callback)
}

const userModel = db.model("user",userSchema);


export default userModel;
