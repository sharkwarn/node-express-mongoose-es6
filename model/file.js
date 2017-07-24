import mongoose from 'mongoose';

import db from './../mongodb/db';

const fileSchema = new mongoose.Schema({
  id:{type:Number},
  name:{type:String},
  type:{type:String},
  path:{type:String},
  createTime:{type:Date},
  size:{type:Number},
})

fileSchema.methods.speak = function(optins,callback){
  console.log(this.name);
}

const fileModel = db.model('file',fileSchema);


const data  = new fileModel({'id':123});


export default fileModel;