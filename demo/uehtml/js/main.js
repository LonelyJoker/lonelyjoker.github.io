/*===============================================
  *  Date : 2016 - 04 - 13  22:10
  *===============================================
*/

// 扩展JQ中其他运动形式
//easeIn
//easeOut
//easeBoth
//easeInStrong
//easeOutStrong
//easeBothStrong
//elasticIn
//elasticOut
//elasticBoth
//backIn
//backOut
//backBoth
//bounceIn
//bounceOut
//bounceBoth
$.extend(jQuery.easing , {
	
	easeIn: function(x,t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(x,t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(x,t, b, c, d){  //加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(x,t, b, c, d){  //加加速曲线
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(x,t, b, c, d){  //减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(x,t, b, c, d){  //加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(x,t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(x,t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(x,t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(x,t, b, c, d, s){     //回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(x,t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(x,t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(x,t, b, c, d){    //弹球减振（弹球渐出）
		return c - this['bounceOut'](x,d-t, 0, c, d) + b;
	},       
	bounceOut: function(x,t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(x,t, b, c, d){
		if (t < d/2) {
			return this['bounceIn'](x,t*2, 0, c, d) * 0.5 + b;
		}
		return this['bounceOut'](x,t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
	
});


$(function(){
	
	// 1. 实现 dropDown 按钮效果
	$("#more").mouseover(function(){
		$("#more-menu").css("display","block");
		$("#spanMore").css("WebkitTransform","rotate(180deg)");
		$("#spanMore").css("transform","rotate(180deg)");
		$("#spanMore").css("WebkitTransition",".5s");
		$("#spanMore").css("transition",".5s");
	})
	$("#more").mouseout(function(){
		$("#more-menu").css("display","none");
		$("#spanMore").css("WebkitTransform","rotate(0deg)");
		$("#spanMore").css("transform","rotate(0deg)");
		$("#spanMore").css("WebkitTransition",".5s");
		$("#spanMore").css("transition",".5s");
	})
	
	$("#scale-nav").mouseover(function(){
		$("div.scale-nav-dropDown").css("display","block");	
	})
	$("#scale-nav").mouseout(function(){
		$("div.scale-nav-dropDown").css("display","none");	
	})
	
	// 搜索框缩放显示隐藏
	/*$("#stext").siblings("a").click(function(){ 
		$(this).animate({ "right": "132px" },200);
		$(".black").animate({ "left": "-130px" },200);
		$("#stext").css("display","block").animate({ "width": "130px" },200).focus();
	});*/
	
	
	
	
	  /*A：return false --->In event handler ,prevents default behavior and event bubbing 。
         return false 在事件的处理中，可以阻止默认事件和冒泡事件。
      B：event.preventDefault()---> In event handler ,prevent default event (allows bubbling) 。
         event.preventDefault()在事件的处理中，可以阻止默认事件但是允许冒泡事件的发生。
      C：event.stopPropagation()---> In event handler ,prevent bubbling (allows default behavior).
         event.stopPropagation()在事件的处理中，可以阻止冒泡但是允许默认事件的发生。*/
		 
		 
		 
		 
		 
	// 搜索框缩放显示隐藏
	// 阻止冒泡
	$("#stext").siblings("a").bind("click",function(event){
		$(this).animate({ "right": "132px" },200);
		$(".black").animate({ "left": "-130px" },200);
		$("#stext").css("display","block").animate({ "width": "130px" },200).focus();
		event.stopPropagation();
	});
	
	$(document).click(function(){
		$("#stext").siblings("a").animate({ "right": "0" },200);
		$(".black").animate({ "left": "0" },200);
		$("#stext").animate({ "width": "130px" },200,function(){
			$(this).css("display","none")	
		}).blur();
	});
		
		

	// 利用数组填充色块
	// 添加 transform 缩放动画
	// 注意：层级问题？
	var arrColor = ["#ffffff","#C9F5FF","#CBDEFF","#BFB6FF","#D7B6FF","#EFBFDD","#FFCFC1","#FFE8C5","#FFF6D4","#E2EFC3","#DBDBDB","#67E2FF","#69A1FF","#6A55FF","#A155FF","#E16CB3","#FF835F","#FFC265","#FFE371","#C0E073","#9B9B9B","#0DD1FF","#0F67FF","#1E00FB","#7000FB","#DD1690","#FF3D05","#FF9E0A","#FFD118","#A4DC1C","#4D4D4D","#0091B2","#0042B4","#1300A1","#4800A1","#9C0060","#AC0000","#AF6900","#BB9600","#729F00","#161616","#00586D","#00296E","#0A005D","#2A005D","#560035","#661600","#693F00","#765E00","#405A00"] 

	$("#color ul li a").each(function(i){
		$(this).css("background", arrColor[i]);
		$(this).css("z-Index", 49-i );
	});

	$("#color ul li a").hover(function(){
		$(this).css("transform","scale(1.5)");
	},function(){
		$(this).css("transform","scale(1)");
	});

	
	
	
	// 菜单的固定定位
	// 注意：菜单定位后，菜单本身脱离文档流，下边的内容会自动向上浮动
	// 解决办法：动态设置下边的内容的 marginTop 值
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();	
		if(scrollTop >= 200){
			$("#menu").css("position", "fixed").css("top", "50px");
			$("#main").css("marginTop", "106px");
		}
		else{
			$("#menu").css("position", "static");
			$("#main").css("marginTop", "46px");
		}
	});
	
	
	
	
	// 返回顶部
	$(window).scroll(function(){
		var st = $(window).scrollTop();
		st >= 10 ? $("#returnTop").stop().animate({"bottom": 10},100) : $("#returnTop").stop().animate({"bottom": -100},200);		
	});
	$("#gotop").click(function(){
		$("html,body").stop().animate({"scrollTop": 0},400);	
	});
	

	$("#career").hover(function(){
		$("#career > ul").css("display","block");
		$("#career span.hy").css("WebkitTransform","rotate(180deg)");
		$("#career span.hy").css("transform","rotate(180deg)");
		$("#career span.hy").css("transition",".2s");
	},function(){
		$("#career > ul").css("display","none");
		$("#career span.hy").css("WebkitTransform","rotate(0deg)");
		$("#career span.hy").css("transform","rotate(0deg)");
	});
	

	$("#career ul").find("li").each(function(i){
		$(this).hover(function(){
			$(this).find("ul").css("display","block");
		},function(){
			$(this).find("ul").css("display","none");
		});
	})

	$("#newRec").hover(function(){
		$("#newRec > ul").css("display","block");
		$("#newRec span.hy").css("WebkitTransform","rotate(180deg)");
		$("#newRec span.hy").css("transform","rotate(180deg)");
		$("#newRec span.hy").css("transition",".2s");
	},function(){
		$("#newRec > ul").css("display","none");
		$("#newRec span.hy").css("WebkitTransform","rotate(0deg)");
		$("#newRec span.hy").css("transform","rotate(0deg)");
	});

	$("#color").hover(function(){
		$("#color > ul").css("display","block");
		$("#color span.hy").css("WebkitTransform","rotate(180deg)");
		$("#color span.hy").css("transform","rotate(180deg)");
		$("#color span.hy").css("transition",".2s");
	},function(){
		$("#color > ul").css("display","none");
		$("#color span.hy").css("WebkitTransform","rotate(0deg)");
		$("#color span.hy").css("transform","rotate(0deg)");
	});

	$("#owner").hover(function(){
		$("#owner > ul").css("display","block");
		$("#owner span.hy").css("WebkitTransform","rotate(180deg)");
		$("#owner span.hy").css("transform","rotate(180deg)");
		$("#owner span.hy").css("transition",".2s");
	},function(){
		$("#owner > ul").css("display","none");
		$("#owner span.hy").css("WebkitTransform","rotate(0deg)");
		$("#owner span.hy").css("transform","rotate(0deg)");
	});


	// 广播效果
	// $(selector).animate(styles,speed,easing,callback)
	var $bcUl = $("#menu div.bclist ul");
	var $sPrev = $("#menu div.tab a.slidePrev");
	var $sNext = $("#menu div.tab a.slideNext");
	
	var sNow = 0;
	var $bcliH = $bcUl.find("li").eq(0).height();
	var sTimer = null;
	
	$(".bclist,.tab").mouseover(function(){
		clearInterval(sTimer);
	});	
	
	$(".bclist,.tab").mouseout(function(){
		sTimer = setInterval(function(){
			if(sNow == $bcUl.find("li").length-1){
				sNow = 0;
			}else{
				sNow++;	
			}
			$bcUl.animate({top: -sNow*$bcliH},200,"linear");	
		},3000);
	});	
	
	sTimer = setInterval(function(){
		if(sNow == $bcUl.find("li").length-1){
				sNow = 0;
			}else{
				sNow++;	
			}
		$bcUl.animate({top: -sNow*$bcliH},200,"linear");	
	},3000);	

	$sPrev.click(function(){
		if(sNow == $bcUl.find("li").length-1){
				sNow = 0;
			}else{
				sNow++;	
			}
		$bcUl.animate({top: -sNow*$bcliH},200,"linear");
	});

	$sNext.click(function(){
		if(sNow == 0){
			sNow = $bcUl.find("li").length;		
		}
		sNow--;
		$bcUl.animate({top: -sNow*$bcliH},200,"linear");
	});

	// 动态计算#main的宽度
	/*var $mainW = parseFloat($('#main').css('width'));
	var $nowW = parseFloat($(window).width());
	var $left = ($nowW - $mainW)/2;
	$("#main").css("left","$left" + "px");*/

	/*$("#main div").eq(4).hover(function(){
		$(this).find(".toggledis").css("display","block").css("transform","translateY(-60px)").css("transition",".3s");
	},function(){
		$(this).find(".toggledis").css("transform","translateY(0px)").css("transition",".3s ease");
	});

	$("#main div").eq(5).hover(function(){
		$(this).find(".toggledis").css("display","block").css("transform","translateY(-60px)").css("transition",".3s");
	},function(){
		$(this).find(".toggledis").css("transform","translateY(0px)").css("transition",".3s ease");
	});*/
	
	
	$("#main > div").each(function(index, element) {
        if($(this).find(".toggledis")){
			$(this).hover(function(){
				$(this).find(".toggledis").css("display","block").css("transform","translateY(-60px)").css("transition",".3s");
			}, function(){
				$(this).find(".toggledis").css("transform","translateY(0px)").css("transition",".3s ease");
			});
		}
    });
	
	
	
	// 倒计时、
	var d = h = m = s = 0;
	var iNew = new Date("August 30 2016 14:14:50");
	
	var timer = null;
	timer = setInterval(countTime,1000);
	
	function countTime(){
		
		var iNow = new Date();
		var t = (iNew - iNow)/1000;
		
		d = toTwo(Math.floor(t/86400));
		h = toTwo(Math.floor(t%86400/3600));
		m = toTwo(Math.floor(t%86400%3600/60));
		s = toTwo(Math.floor(t%60));
		
		$(".days").html(d);
		$(".hours").html(h);
		$(".minutes").html(m);
		$(".seconds").html(s);

		if( d == '00' && h == '00' && m == '00' && s == '00' ){
			clearInterval(timer);
			$(".days").html('00');
			$(".hours").html('00');
			$(".minutes").html('00');
			$(".seconds").html('00');	
		}
		
	}
	
	function toTwo(n){
		if(typeof n != "number") return;
		return n < 10 ? "0" + n : "" + n; 		
	}
	
	
	
	
	
	
	// 无缝图片切换
	/*======next======*/
	$(".imacc .slidenext").click(function(){ nextscroll() });

	function nextscroll(){

			var vcon = $(".v_cont ");
			var offset = ($(".v_cont li").width())*-1;			// -540
						
			vcon.stop().animate({left: offset}, 500, "linear", function(){

				 var firstItem = $(".v_cont ul li").first();
				 vcon.find("ul").append(firstItem);
				 $(this).css("left","0px");

				 /*circle()*/
				
			});  
		
	};


	function circle(){
		  
			var currentItem = $(".v_cont ul li").first();
			var currentIndex = currentItem.attr("index");

			$(".circle li").removeClass("circle-cur");
			$(".circle li").eq(currentIndex).addClass("circle-cur");
			
	}

	//setInterval(nextscroll,2000)
	 
	/*======prev======*/
	$(".imacc .slideprev").click(function(){

			var vcon = $(".v_cont ");
			var offset = ($(".v_cont li").width()*-1);

			var lastItem = $(".v_cont ul li").last();
			vcon.find("ul").prepend(lastItem);
			vcon.css("left",offset);
			vcon.animate({left:"0px"}, 500);

	 });
	
});
