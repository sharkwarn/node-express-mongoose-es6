import mongoose from 'mongoose';
import user from './../model/user';


class login {
  constructor(){
    this.checkUser = this.checkUser.bind(this);
  }
  checkUser(req,res){
    const { id, password } = req.body;
    user.find({'id':id},(err,result)=>{
      if(err){
        res.send("登录失败！")
        return;
      }
      console.log(result);
      if(result.length==0){
        res.send('帐号不存在!');
      }else if(result.length > 1){
        res.send('帐号存在异常！');
      }else if(result.length==1 &&  result[0].password == password){
        res.send('登录成功')
      }
      res.send('登录失败！')
      return;
    })
  }
}
export default new login();
