'use strict';

import CheckCookie from './../prototype/checkCookie';


class demo extends CheckCookie{
  constructor(){
    super();
    this.send = this.send.bind(this);
  }
  send(req,res){
    const Is = this.isUser(req);
    res.send(Is);
  }
}

export default new demo();
