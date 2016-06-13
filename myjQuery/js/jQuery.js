// (function (){
// 	  var chuli=function(sel){
// 		return '.'+sel;
// 	}
// 	var sel = function(selector){
// 	   if(document.querySelector){
// 	   	selector=chuli(selector);
// 	   	return document.querySelector(selector);
// 	   }
// 	}
// 	 window.$=sel;
// })();


(function(){
	var jQuery=function(selector){
		var els=document.querySelectorAll(selector);
		for(var i=0;i<els.length;i++){
			this[i]=els[i];
		}
		this.length=els.length;
	}
	jQuery.prototype.addClass=function(str){
		for(var i=0;i<this.length;i++){
          this[i].classList.add(str);
		}
	}
	var _s=function(selector){
		return new jQuery(selector);
	}
     window.$=_s;
     console.dir(jQuery)

})();