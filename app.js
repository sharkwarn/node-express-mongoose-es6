
import Express from 'express';

import bookModel from './model_1/demo.js';


const app = Express();

app.get('/',(req,res)=>{
  res.send(`hello world!!!`)
})

bookModel.create({
  name:'神雕侠侣',
  page:26859,
  price:'￥112.99'
},(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('插入数据成功！！！！')
})

app.listen(5000,(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(`开启服务成功！！！`)
});