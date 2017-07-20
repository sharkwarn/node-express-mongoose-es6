
import Express from 'express';
import cookieParser from'cookie-parser';



import db from './mongodb/db';
import config from './config';
import router from './routes';
import user from './model/user'

const app = Express();

// user.create({name:'朱良灿',age:23,sex:'男',passWord:'123456789',phone:'17610888798'},(err)=>{
//   if(err){
//     console.log(`插入数据库失败！！！`);
//     return;
//   }
//   console.log(`插入数据库成功！！！！`);
// })

// user.find((err,result)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(result);
// })
//使用cookie中间件；
app.use(cookieParser());

//定义请求的公共设置。
app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
});

router(app);

//!!! 可能需要添加的功能。 



app.get('/',(req,res)=>{
  res.send(`hello world!!!`)
})

// bookModel.create({
//   name:'神雕侠侣',
//   page:26859,
//   price:'￥112.99'
// },(err)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log('插入数据成功！！！！')
// })

app.listen(config.port,(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(`开启服务成功！！！`)
});
