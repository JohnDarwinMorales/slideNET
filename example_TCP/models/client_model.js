function User(){
  var id;
  this.name
  this.age;
  var info;
  
  this.getInfo=function(){
    return info; 
  }
  
  this.setInformation=function(answer){
    var str=answer.split(' ');
    this.name=str[0];
    this.age=str[1];
    info={name:this.name,age:this.age};
  }
  
  this.setStringToObject=function(json){
    var obj=JSON.parse(json);
    this.name=obj.name;
    this.age=obj.age;
    info={name:this.name,age:this.age};
  }
  
  this.toStringInfo=function(){
    return JSON.stringify(info);
  }
  
  this.setId=function(_id){
      id=_id;
  }
  
  this.getId=function(){
      return id;
  }
}

User.prototype.toString = function userToString() {
  var ret = 'Name: ' + this.name + ' Age: ' + this.age;
  return ret;
}


exports.user= User;




