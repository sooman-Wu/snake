$(function(){
  var shuju=[];
  if(localStorage.shuju){
  	shuju=JSON.parse(localStorage.shuju);
  }else{
  	_.ajax('/php/huoqulianxiren.php',function(data){
  		localStorage.shuju=JSON.Stringify(data);
  	})
  }
});