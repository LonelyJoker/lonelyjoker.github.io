// JavaScript Document

function getStyle(obj, attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}

function startMove(obj, json, fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var btn = true;
		for(var attr in json){
			var iCur = 0;
			if(attr == "opacity"){
				iCur = Math.round(getStyle(obj, attr)*100);
			}
			else{
				iCur = parseInt(getStyle(obj, attr));	
			}
			var iSpeed = (json[attr]-iCur)/5;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if(iCur != json[attr]){
				btn = false;	
			}
			if(attr == "opacity"){
				obj.style.filter = "alpha(opacity=" + (iCur + iSpeed) + ")";
				obj.style.opacity = (iCur + iSpeed)/100;	
			}
			else{
				obj.style[attr] = iCur + iSpeed + "px";
			}	
		};
		if(btn){ 
			clearInterval(obj.timer);
			fn && fn.call(obj);
		}	
	}, 30);
}

