'use strict';

import CheckCookie from './../prototype/checkCookie';
import db from './../mongodb/db';
import user from './../model/user';
// class demo extends CheckCookie{
//   constructor(){
//     super();
//     this.send = this.send.bind(this);
//   }
//   send(req,res){
//     const Is = this.isUser(req);
//     res.send(Is);
//   }
// }
class register {
  constructor(){
    this.send = this.send.bind(this);
  }
  send(req,res){
    console.log(req.body);
    user.find({id:req.body.id},(err,result)=>{
      if(err){
        res.send(err.toString())
      }
      if(result && result.length == 0 ){
        user.create(req.body,(err)=>{
          if(err){
            res.send(err.toString());
            return;
          }
          res.send('创建用户成功！')
        })
      }else if(result && result.length > 0 ){
        res.send('用户已经存在')
      }else{
        res.send('创建用户失败！！！')
      }
    })
  }
}

export default new register();
