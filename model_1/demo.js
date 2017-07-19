import mongoose from 'mongoose';
import db from './db';

const bookSchema = new mongoose.Schema({
  name:{type:String},
  page:{type:Number},
  price:{type:String},
})

const bookModel = db.model('Book',bookSchema);

export default bookModel;
