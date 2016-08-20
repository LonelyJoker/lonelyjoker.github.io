
$(window).load(function() {
    
	// 顶部无缝切换
	// 把这部分代码单独抽离出来，从文档最底部引入，可以等文档结构和样式加载完成后，再进行宽度和高度计算
	$iW = $("#pics li").eq(1).outerWidth();
	$iNum = $("#pics li").length;
	
	$("#pics").css("width", $iW*$iNum);		// 2900px
    var iNow = 0;
	var iNow2 = 0;
	var iTimer = null;
	
	/*======== next ========*/
	$("#tab a.next").click(function(){
		
		
		if(iNow == 0){
			$("#pics li:eq(0)").css("position", "static");
			$("#pics").css("left", 0);
			iNow2 = 0;	
		}
		if(iNow == $("#pics li").length-1){
			iNow = 0;
			$("#pics li:eq(0)").css("position", "relative");
			$("#pics li:eq(0)").css("left", $iW*($("#pics li").length));
		}
		else{
			iNow ++;	
		}
		
		iNow2 ++;
		
		$("#pics").stop().animate({"left": -$iW*iNow2 });
		
	});
	
	/*======== prev ========*/
	$("#tab a.prev").click(function(){
		
		if(iNow == $("#pics li").length-1){
			$("#pics li:eq(4)").css("position", "static");
			$("#pics").css("left", -$iW*($("#pics li").length-1));
			iNow2 = $("#pics li").length-1;	
		}
		if(iNow == 0){
			iNow = $("#pics li").length-1;
			$("#pics li:eq(4)").css("position", "relative");
			$("#pics li:eq(4)").css("left", -$iW*($("#pics li").length));
		}
		else{
			iNow --;	
		}
		
		iNow2 --;	
		
		$("#pics").stop().animate({"left": -$iW*iNow2 });
		
		/*console.log("iNow= " + iNow, "iNow2= " + iNow2);*/
		
	});
	
	
	iTimer = setInterval(toRun, 3000);
	
	function toRun(){
		if(iNow == 0){
			$("#pics li:eq(0)").css("position", "static");
			$("#pics").css("left", 0);
			iNow2 = 0;	
		}
		if(iNow == $("#pics li").length-1){
			iNow = 0;
			$("#pics li:eq(0)").css("position", "relative");
			$("#pics li:eq(0)").css("left", $iW*($("#pics li").length));
		}
		else{
			iNow ++;	
		}
		
		iNow2 ++;
		
		$("#pics").stop().animate({"left": -$iW*iNow2 });			
	};	
		
	$("#autoplay").hover(function(){
		clearInterval(iTimer);	
	},function(){
		iTimer = setInterval(toRun,3000);	
	});
	
});