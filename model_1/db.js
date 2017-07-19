import mongoose from 'mongoose';

const db = mongoose.createConnection(`mongodb://127.0.0.1:27017/book`);

db.once(`open`,(err)=>{
  if(err){
    console.log(err);
    return
  }
  console.log(`连接数据库成功！！！！`)
})
db.once(`error`,(err)=>{
  console.log(`${err.toString()}连接数据库失败！！！！！`)
})

export default db;