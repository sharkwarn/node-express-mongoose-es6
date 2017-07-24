import user from './user' ;
import upload from './upload';
export default app =>{
  app.use('/user',user);
  app.use('/upload',upload);
}
