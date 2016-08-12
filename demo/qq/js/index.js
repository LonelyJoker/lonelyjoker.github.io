window.onload=function(){
	/**
	 * 帮助选项列表
	 */
	(function option(){
		var oHelp = document.getElementById('help');
		var oMeum = document.getElementById('help_option');
		var aLi = oMeum.getElementsByTagName('li');
		var oHelpClass = oHelp.className;
		var left = oHelp.offsetLeft;
		oHelp.style.left = left + 'px';
		oHelp.onmouseover = over;
		oHelp.onmouseout = out;
		oMeum.onmouseover = over;
		oMeum.onmouseout = out;
		function over(){
			oHelp.className = oHelpClass + ' active';
			oMeum.style.left = left + 'px';
		}
		function out(){
			oHelp.className = oHelpClass;
			oMeum.style.left = -10000 + 'px';
		}
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].onmouseover = function(){
				this.style.background = '#f4f8fc';
			}
			aLi[i].onmouseout = function(){
				this.style.background = 'none';
			}
		}
	})();
	/**
	 * 搜索选项列表
	 */
	(function searchOption(){
		var oSbr = document.getElementById('s_bar');
		var osItem = document.getElementById('s_item');
		var oUl = osItem.getElementsByTagName('ul')[0];
		var oSpan = osItem.getElementsByTagName('span')[0];
		var aLi = oUl.getElementsByTagName('li')
		var oSbrClass = oSbr.className;
		var osItemClass = osItem.className;
		oSbr.onmouseover = function(){
			oSbr.className = oSbr.className + ' active';
		}
		oSbr.onmouseout = function(){
			oSbr.className = oSbrClass;
		}
		osItem.onmouseover = function(){
			osItem.className = osItem.className + ' change_bj';
			oUl.style.display = 'block';
		}
		osItem.onmouseout = function(){
			osItem.className = osItemClass;
			oUl.style.display = 'none';
		}
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].onmouseover = function(){
				this.className = 'chenge';
			}
			aLi[i].onmouseout = function(){
				this.className = '';
			}
			aLi[i].onclick = function(){
				oSpan.innerHTML = this.innerHTML;
				osItem.className = osItemClass;
				oUl.style.display = 'none';
				oSbr.className = oSbrClass;
			}
		}
	})();
	/**
	 * 股票财经区域选项卡
	 */
	(function tab_bond(){
		var oBond = document.getElementById('tab_bond');
		var aLi = oBond.getElementsByTagName('li');
		var aCon = getClass(oBond, 'content');
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].index = i;
			aLi[i].onmouseover = function(){
				for (var n = 0; n < aLi.length; n++) {
					aLi[n].className = '';
					aCon[n].style.display = 'none';
				}
				aCon[this.index].style.display = 'block';
				this.className = 'active';
			}
		}
	})();
	function tab(parent,option,con){
		var oCtab = document.getElementById(parent);
		var oOptin = document.getElementById(option);
		var aCon = getClass(oCtab,con);
		var aLi = oOptin.getElementsByTagName('li');
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].index = i;
			aLi[i].onmouseover = function(){
				for (var n = 0; n < aLi.length; n++) {
					aLi[n].className = '';
					aCon[n].style.display = 'none';
				}
				aCon[this.index].style.display = 'block';
				this.className = 'active';
			}
		}
	}
	tab('c_tab','c_option','content');
	tab('edu_tab','edu_tab_option','content');
	
	var oItem = document.getElementById('item');
	var aLi = oItem.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++){
		if(i%2 == 0){
			aLi[i].style.background = '#f6f9fe';
		}
	}
	
	var oWeibo = document.getElementById('weibo');
	var aCon= getClass(oWeibo,'content');
	for(var i=0;i<aCon.length;i++){
		show(aCon[i]);
	}
	function show(obj){
		var aDl = obj.getElementsByTagName('dl');
		for(var n=0;n<aDl.length;n++){
			aDl[n].onmouseover=function(){
				for (var m = 0; m < aDl.length; m++) {
					aDl[m].className = '';
				}
				this.className = 'active';
			}
			aDl[n].onmouseout = function(){
				for (var m = 0; m < aDl.length; m++) {
					aDl[m].className = '';
				}
				this.className = 'out';
			}
		}
	}
	var oHide = document.getElementById('hide');
	var oPre = document.getElementById('pre');
	var oNext = document.getElementById('next');
	var oUl = oHide.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var iLiW = aLi[0].offsetWidth;
	for(var i=0;i<5;i++){
		var obj = aLi[i].cloneNode(true);
		oUl.appendChild(obj);
	}
	var site = iLiW*5;
	oUl.style.width = aLi.length*iLiW + 'px';
	
	var iNow=0;
	oPre.onclick=function(){
		iNow--;
		if(iNow == -3){
			oUl.style.left = 0 +'px';
			iNow = -1;
		}
		move()
	}
	oNext.onclick=function(){
		iNow++;
		if(iNow == 1){
			oUl.style.left = site-aLi.length*iLiW  +'px';
			iNow = -1;
		}
		move()
	}
	function move(){
		$(oUl).stop().animate({
			left:site*iNow
		})
	}
}



function getClass(oParent,sName){
	var obj = oParent.getElementsByTagName('*');
	var result = [];
	var re = eval('/\\b'+sName+'\\b/g');
	for(var i=0;i<obj.length;i++){
		if(re.test(obj[i].className)){
			result.push(obj[i]);
		}
	}
	return result;
	
}
