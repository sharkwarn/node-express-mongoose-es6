class CheckCookie {
  constructor(){
    this.isUser =this.isUser.bind(this);
  }
  isUser(req){
    return JSON.stringify(req.cookies);
  }

}
export default CheckCookie;
