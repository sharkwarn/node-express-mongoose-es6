import formidable from 'formidable';
import http from 'http';
import util from 'util';
import fs from 'fs'

import config from './../config'
import fileModel from './../model/file';

class fileUpload {
  constructor(){

  }
  async saveFile(req,res){
    const form = new formidable.IncomingForm();

    //设置上传路径
    form.uploadDir = "./uploads";

    form.parse(req,(err,fields,files)=>{
      const {path,name,type,size} = files.fname;
      
      const oldPath = './'+path;
      const newPath = `./uploadfile/${new Date().getTime()}${name}`;
      fs.rename(oldPath,newPath,(err)=>{
        if(err){
          console.log(err);
          return;
        }
      })
      const data = new fileModel({'name':name,'type':type,'path':`${config.url}${newPath.slice(1)}`,'size':size});
      
      data.save();
      data.speak();
      res.send(data);
    })
  }
}

export default new fileUpload();