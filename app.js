
import Express from 'express';
import cookieParser from'cookie-parser';



import db from './mongodb/db';
import config from './config';
import router from './routes';
import user from './model/user'

import bodyParser from 'body-parser';


global.app = Express();

//连接socket
import './socket'

//使用cookie中间件；
app.use(cookieParser());
//使用post提交方式
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


//生成一个usermodel模板。。。。。
// user.create({
//   id:1,
//   name:'朱良灿',
//   age:23,
//   sex:'男',
//   password:'123',
//   phone:'110',
//   logo:'http://image48.360doc.com/DownloadImg/2011/12/2210/20211680_1.jpg',
//   sign:'发财了!!!!',
//   birthday:1500560627559
// },(err)=>{
//   if(err){
//     console.log(`插入数据库出错！！！`)
//   }
//   console.log(`插入数据成功！！！！`)
// })
// parse application/json
app.use(bodyParser.json())
//静态文件资源
app.use('/static', Express.static('public'));
app.use('/uploadfile', Express.static('uploadfile'));

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

app.get('/yes',(req,res)=>{
  res.send({
    'login':'true'
  })
})

app.all('*',(req,res)=>{
  res.send(`404 页面没有找到！！！`)
})

app.listen(config.port,(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(`开启服务成功！！！`)
});
