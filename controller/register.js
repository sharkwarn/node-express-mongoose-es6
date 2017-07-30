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
    //检查参数是否正确，
    let { uid, name, password, sex, phone, } = req.body;
    if( !uid || !name || !password || !sex || !phone){
      res.send({
        'success':false,
        "errMsg":'参数错误',
      })
    }
    user.find({id:uid},(err,result)=>{
      if(err){
        res.send(err.toString())
      }
      if(result && result.length == 0 ){
        user.create(req.body,(err)=>{
          if(err){
            res.send({
              'success':false,
              'errMsg':'参数错误'
            });
            return;
          }
          res.send({
            'success':true,
          })
        })
      }else if(result && result.length > 0 ){
        res.send({
          'success':false,
          'errMsg':'该帐号已经被注册'
        })
      }else{
        res.send({
          'success':false,
          'errMsg':'创建用户失败',
        })
      }
    })
  }
}

export default new register();
