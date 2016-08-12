window.onload = function() {
	changeCity(); //改变地址
	advertise(); //广告栏	
	showlside(); //楼层切换
	goFloor(); //滚动时楼层改变
	scrollFloor(); //前往指定楼层
	angpao(); //右侧618红包
	backTop(); //回到顶部
	commodity(); //商品分类	
	banner(); //头部轮播图
	toRun(); //618爽购攻略
	switchConv(); //快捷服务
	allautoRun(); //热门轮播图
	allshowCont(); //切换各楼层子项目
	flaunt(); //热门晒单
	bottom618(); //底部618活动
	showFloor(); //伪加载
}

//改变地址
function changeCity() {
	var city = document.getElementById('city');
	var top_l = getByClass('topBar_left', document)[0];
	var send = document.getElementById('send_address');
	var select = send.getElementsByTagName('a');
	top_l.onmouseover = function() {
		send.style.display = 'block';
	}
	top_l.onmouseout = function() {
		send.style.display = 'none';
	}
	for (var i = 0; i < select.length; i++) {
		select[i].onclick = function() {
			for (var j = 0; j < select.length; j++) {
				send.style.display = 'none';
				city.innerHTML = this.innerHTML;
				select[j].className = '';
				this.className = 'address_select';
			}
		}
	}
}

//广告栏
function advertise() {
	var adv = document.getElementById('advertise');
	var btn = document.getElementById('adv_close');
	btn.onclick = function() {
		fadeOut(adv);
		setTimeout(function() {
			adv.style.display = 'none';
		}, 500)
	}
}

//楼层切换
function showlside() {
	$(window).scroll(function() {
		var top = $(document).scrollTop();
		if (top > $("#floor1").offset().top - 300 && top < $("#floor13").offset().top - 300) {
			$("#floor_side").css('display', 'block');
			$("#jd618_btn").css('display', 'block');
		} else {
			$("#floor_side").css('display', 'none');
			$("#jd618_btn").css('display', 'none');
		}
	});
	// 		var target1 = document.getElementById('floor_side');
	// var target2 = document.getElementById('jd618_btn');
	// var top1 = getPosition(document.getElementById("F1")).top;
	// var top2 = getPosition(document.getElementById("F13")).top;
	// if (!!window.attachEvent) //ie浏览器下。
	// {
	// 	window.attachEvent('onscroll', function() {
	// 		if (top2 > document.documentElement.scrollTop > top1) {
	// 			target1.style.display = 'block';
	// 			target2.style.display = 'block';
	// 		} else {
	// 			target1.style.display = 'none';
	// 			target2.style.display = 'none';
	// 		}

	// 	});
	// }
	// if (!!window.addEventListener) //非ie浏览器下
	// {
	// 	window.addEventListener("scroll", function() {
	// 		if (top2 > document.documentElement.scrollTop > top1 || top2 > document.body.scrollTop > top1) {
	// 			target1.style.display = 'block';
	// 			target2.style.display = 'block';
	// 		} else {
	// 			target1.style.display = 'none';
	// 			target2.style.display = 'none';
	// 		}
	// 	});
	// }
}

//定位楼层
function goFloor() {
	// window.onscroll = function() {
	// 	var top = document.body.scrollTop;
	// 	var menus = document.getElementById("floor_side").getElementsByTagName("a");
	// 	var floors = getByClass("floor", document);
	// 	var currentId = "";
	// 	for (var i = 0; i < floors.length; i++) {
	// 		var _floor = floors[i];
	// 		var _floorTop = _floor.offsetTop;
	// 		if (top > _floorTop - 300) {
	// 			currentId = _floor.id
	// 		} else {
	// 			break;
	// 		}
	// 	}
	// 	if (currentId) {
	// 		for (var j = 0; j < menus.length; j++) {
	// 			var _menu = menus[j];
	// 			var _href = _menu.href.split("#");
	// 			if (_href[_href.length - 1] != currentId) {
	// 				return;
	// 			} else {
	// 				_menu.style.display = 'block';
	// 			}
	// 		}
	// 	}
	// }
	$(window).scroll(
		function() {
			var parts = $(document).find(".floor");
			var title = $(document).find(".floor_active");
			var side = $("#floor_side");
			var top = $(document).scrollTop();
			var currentId = "";
			parts.each(function() {
				var m = $(this);
				if (top > m.offset().top - 300) {
					currentId = "#" + m.attr("id");
				} else {
					return false;
				}
			});
			var currentLink = side.find(".aaaa");
			if (currentId && currentLink.attr("href") != currentId) {
				currentLink.eq(0).css('display', 'block');
				currentLink.removeClass("aaaa");
				side.find("[href=" + currentId + "]").eq(0).css('display', 'none');
				side.find("[href=" + currentId + "]").addClass("aaaa");
				var currentIndex = side.find("[href=" + currentId + "]").parent().index();
				title.removeClass("h3_position");
				title.eq(currentIndex).addClass("h3_position");
			}
		}
	);
}

//前往指定楼层
function scrollFloor() {
	// $(window).scroll(function() {
	// 		var oTop = $(document).scrollTop();		
	// 	var oParent = $('#floor_side');
	// 	var oLi = oParent.find('li');
	// 	var floors = $('.floor');
	// 	var timer=null;
	// 	oLi.each(function(index) {
	// 		$(this).bind('click', function() {
	// 			oLi.find('a').removeClass('aaaa');
	// 			$(this).find('a').addClass('aaaa');
	// 			timer = setInterval(function() {
	// 				var iTarget = floors.eq(index).offset().top;
	// 				// var iSpeed = oTop > iTarget ? iSpeed = Math.ceil(-oTop / 6) : iSpeed = Math.ceil(oTop / 6);
	// 				var iSpeed = 10;
	// 				document.documentElement.scrollTop = document.body.scrollTop = oTop + iSpeed;
	// 				// oTop += iSpeed;
	// 				if (oTop == iTarget) {
	// 					clearInterval(timer);
	// 				}
	// 			}, 30)
	// 		})
	// 	})
	// })
	var oParent = $('#floor_side');
	var oLi = oParent.find('li');
	var floors = $('.floor');
	oLi.each(function(index) {
			$(this).bind('click', function() {
				oLi.find('a').removeClass('aaaa');
				$(this).find('a').addClass('aaaa');
				var iTarget = floors.eq($(this).index()).offset().top;
				$("body,html").animate({
					scrollTop: iTarget //让body的scrollTop等于pos的top，就实现了滚动 
				}, 1000);
			})
		})
		// window.onscroll = function() {
		// 	var oParent = document.getElementById('floor_side');
		// 	var oLi = oParent.getElementsByTagName('li');
		// 	var floors = getByClass('floor', document);
		// 	var timer;
		// 	for (var i = 0; i < oLi.length; i++) {
		// 		oLi[i].index = i;
		// 		oLi[i].onclick = function() {
		// 			for (var i = 0; i < oLi.length; i++) {
		// 				oLi[i].getElementsByTagName('a').className = '';
		// 			}
		// 			var This = this;
		// 			This.getElementsByTagName('a').className = 'aaaa';
		// 			timer = setInterval(function() {
		// 				var oTop = document.documentElement.scrollTop || document.body.scrollTop;
		// 				var iTarget = getPosition(floors[This.index]).top;
		// 				var iSpeed = oTop > iTarget ? iSpeed = Math.floor(-oTop / 6) : iSpeed = Math.ceil(oTop / 6);
		// 				if (oTop == iTarget) {
		// 					clearInterval(timer);
		// 				} else {
		// 					document.documentElement.scrollTop = document.body.scrollTop = oTop + iSpeed;
		// 				}
		// 			}, 30)
		// 		}
		// 	}
		// }
}

//右侧618红包
function angpao() {
	var btn = document.getElementById('angpao');
	var xian = document.getElementById('xian');
	var item1 = document.getElementById('rain618_item1');
	var item2 = document.getElementById('rain618_item2');
	var angpaocont = document.getElementById('rain618_box');
	var rain618_hide = document.getElementById('rain618_hide');
	var state = true;
	rain618_hide.addEventListener('click', function() {
		move_right(btn, 0);
		move_right(xian, 0);
		move_right(item1, 0);
		move_right(item2, 0);
		move_right(angpaocont, -270);
		state = true;
	});
	btn.onmouseover = function() {
			var This = this;
			if (state) {
				addEventHandler(This, 'click', function() {
					move_left(btn, 270);
					move_left(xian, 270);
					move_left(item1, 270);
					move_left(item2, 270);
					move_left(angpaocont, 0);
					state = false;
				})

			} else {
				addEventHandler(This, 'click', function() {
					move_right(btn, 0);
					move_right(xian, 0);
					move_right(item1, 0);
					move_right(item2, 0);
					move_right(angpaocont, -270);
					state = true;
				})
			}
		}
		//向左出现
	function move_left(obj, itarget) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			var before = parseInt(getStyle(obj, 'right'));
			var speed = 5;
			if (before == itarget) {
				clearInterval(obj.timer);
			} else {
				before += speed;
				obj.style.right = before + "px";
			}
		}, 10)
	}
	//向右消失
	function move_right(obj, itarget) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			var before = parseInt(getStyle(obj, 'right'));
			var speed = -5;
			if (before == itarget) {
				clearInterval(obj.timer);
			} else {
				before += speed;
				obj.style.right = before + "px";
			}
		}, 10)
	}
}

//回到顶部
function backTop() {
	var btn = document.getElementById('backTop');
	btn.onclick = function() {
		timer = setInterval(function() {
			var osTop = getScrollTop();
			var ispeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			if (osTop == 0) {
				clearInterval(timer);
			}
		}, 30);
	}
}

//商品分类
function commodity() {
	window.onscroll = function() {
		var main_l = document.getElementById('main_left');
		var item = getByClass('main_item', main_l);
		var ali = main_l.getElementsByTagName('li');
		var alih = ali[0].offsetHeight;
		var htmlScroll = getScrollTop();
		var targetScroll = getPosition(ali[0]).top;
		var addScroll = htmlScroll - targetScroll;
		for (var i = 0; i < ali.length; i++) {
			ali[i].index = i;
			ali[i].onmouseover = function() {
				var This = this;
				if (htmlScroll > targetScroll) {
					item[This.index].style.top = -This.index * alih + addScroll + "px";
				} else {
					item[This.index].style.top = -This.index * alih + "px";
				}
			}
		}
	}
}

//头部轮播图
function banner() {
	var oParent = document.getElementById('banner1');
	var oLi = oParent.getElementsByTagName('li');
	var oPrev = getByClass('previous', oParent)[0];
	var oNext = getByClass('next', oParent)[0];
	var oSelect = getByClass('select_pic', oParent)[0];
	var oSelecta = oSelect.getElementsByTagName('a');
	var iNow = 0;
	var timer = setInterval(next, 3000);

	function showButton() {
		for (var i = 0; i < oSelecta.length; i++) {
			if (oSelecta[i].className == 'selected_pic') {
				oSelecta[i].className = '';
				break;
			}
		}
		oSelecta[iNow].className = 'selected_pic';
	}

	for (var i = 0; i < oSelecta.length; i++) {
		oSelecta[i].onmouseover = function() {
			if (this.className == 'selected_pic') {
				return;
			}
			var myIndex = parseInt(this.getAttribute('index'));
			iNow = myIndex;
			showButton();
			for (var i = 0; i < oLi.length; i++) {
				fadeOut(oLi[i]);
			}
			fadeIn(oLi[iNow]);
		}
	}

	function next() {
		if (iNow == oLi.length - 1) {
			iNow = 0;
		} else {
			iNow++;
		}
		for (var i = 0; i < oLi.length; i++) {
			fadeOut(oLi[i]);
		}
		fadeIn(oLi[iNow]);
		showButton();
	}

	function previous() {
		if (iNow == 0) {
			iNow = oLi.length - 1;
		} else {
			iNow--;
		}
		for (var i = 0; i < oLi.length; i++) {
			fadeOut(oLi[i]);
		}
		fadeIn(oLi[iNow]);
		showButton();
	}
	oParent.onmouseover = oPrev.onmouseover = oNext.onmouseover = function() {
		clearInterval(timer);
	};
	oParent.onmouseout = oPrev.onmouseover = oNext.onmouseout = function() {
		timer = setInterval(next, 3000);
	};
	oPrev.onclick = function() {
		previous();
		showButton();
	};
	oNext.onclick = function() {
		next();
		showButton();
	};
}

//618爽购攻略
function toRun() {
	var oRun = document.getElementById('festival');
	var oUl = oRun.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oPrev = document.getElementById('previous2');
	var oNext = document.getElementById('next2');
	var iNow = 0;
	oUl.innerHTML += oUl.innerHTML;
	oUl.style.width = aLi.length * aLi[0].offsetWidth + 'px';
	oPrev.onclick = function() {
		if (iNow == 0) {
			iNow = aLi.length / 2;
			oUl.style.left = -oUl.offsetWidth / 2 + 'px';
		}
		scrollLeft(oUl, -iNow * aLi[0].offsetWidth, -(iNow - 1) * aLi[0].offsetWidth);
		iNow--;
	};
	oNext.onclick = function() {
		if (iNow == aLi.length / 2) {
			iNow = 0;
			oUl.style.left = 0;
		}
		scrollLeft(oUl, -iNow * aLi[0].offsetWidth, -(iNow + 1) * aLi[0].offsetWidth);
		iNow++;
	};
};

//便捷服务
//开
function convenienshow() {
	setTimeout(function() {
		removeClass(document.getElementById('conchild_title'), 'hidetitle');
		removeClass(document.getElementById('convenient_child'), 'hideconven');
		addClass(document.getElementById('conchild_title'), 'showtitle');
		addClass(document.getElementById('convenient_child'), 'showconven');
	}, 300)
}
//关
function convenienhide() {
	removeClass(document.getElementById('conchild_title'), 'showtitle');
	removeClass(document.getElementById('convenient_child'), 'showconven');
	addClass(document.getElementById('conchild_title'), 'hidetitle');
	addClass(document.getElementById('convenient_child'), 'hideconven');
}

//切换便捷内容
function switchConv() {
	var title = document.getElementById('conchild_title');
	var tLi = title.getElementsByTagName('li');
	var cont = document.getElementById('conchild_cont');
	var cLi = cont.children;

	var child_title = document.getElementById('conchild_cont1t');
	var child_tLi = child_title.getElementsByTagName('li');
	var child_cont = document.getElementById('all_form1');
	var child_cLi = child_cont.getElementsByTagName('li');
	var iNow = 0;
	var state = false;
	//主体内容
	for (var i = 0; i < tLi.length; i++) {
		tLi[i].index = i;
		tLi[i].onmouseover = function() {
			for (var i = 0; i < tLi.length; i++) {
				tLi[i].className = "";
			}
			this.className = "active";
			for (var j = 0; j < cLi.length; j++) {
				cLi[j].style.display = "none";
			}
			cLi[this.index].style.display = "block";
		}
	}
	//子内容
	for (var j = 0; j < child_tLi.length; j++) {
		child_tLi[j].index = j;
		child_tLi[j].onmouseover = function() {
			if (!state) {
				for (var i = 0; i < child_tLi.length; i++) {
					child_tLi[i].className = "";
				}
				var This = this;
				This.className = "conchild_cont1tbg";
				var left = setInterval(function() {
					var now = -This.index * child_cLi[0].offsetWidth;
					var old = parseInt(getStyle(child_cont, 'left'));
					var iSpeed = now > old ? iSpeed = 8 : iSpeed = -8;
					if (old == now) {
						state = false;
						clearInterval(left);
					} else {
						state = true;
						old += iSpeed;
						child_cont.style.left = old + "px";
					}
				}, 10)
			}
		}
	}
}

//热门轮播图
function allautoRun() {
	var banner2 = document.getElementById('banner2');
	var banner3 = document.getElementById('banner3');
	var banner4 = document.getElementById('banner4');
	var banner5 = document.getElementById('banner5');
	var banner6 = document.getElementById('banner6');
	var banner7 = document.getElementById('banner7');
	var banner8 = document.getElementById('banner8');
	var banner9 = document.getElementById('banner9');
	var banner10 = document.getElementById('banner10');
	var banner11 = document.getElementById('banner11');
	var banner12 = document.getElementById('banner12');
	var banner13 = document.getElementById('banner13');
	var banner14 = document.getElementById('banner14');

	autoRun(banner2);
	autoRun(banner3);
	autoRun(banner4);
	autoRun(banner5);
	autoRun(banner6);
	autoRun(banner7);
	autoRun(banner8);
	autoRun(banner9);
	autoRun(banner10);
	autoRun(banner11);
	autoRun(banner12);
	autoRun(banner13);
	autoRun(banner14);
}

//切换各楼层子项目
function allshowCont() {
	var floor1 = document.getElementById('floor1');
	var floor2 = document.getElementById('floor2');
	var floor3 = document.getElementById('floor3');
	var floor4 = document.getElementById('floor4');
	var floor5 = document.getElementById('floor5');
	var floor6 = document.getElementById('floor6');
	var floor7 = document.getElementById('floor7');
	var floor8 = document.getElementById('floor8');
	var floor9 = document.getElementById('floor9');
	var floor10 = document.getElementById('floor10');
	var floor11 = document.getElementById('floor11');

	showCont(floor1);
	showCont(floor2);
	showCont(floor3);
	showCont(floor4);
	showCont(floor5);
	showCont(floor6);
	showCont(floor7);
	showCont(floor8);
	showCont(floor9);
	showCont(floor10);
	showCont(floor11);
}

//热门晒单
function flaunt() {
	var area = document.getElementById('flaunting');
	var ali = area.getElementsByTagName('li');
	var aliHeight = ali[0].offsetHeight;
	var speed = 30;
	var timer;
	var delay = 2000;
	area.scrollTop = 0;
	area.innerHTML += area.innerHTML;

	function startScroll() {
		timer = setInterval(function() {
			scrollUp();
		}, speed);
		area.scrollTop++;
	}

	function scrollUp() {
		if (area.scrollTop % aliHeight == 0) {
			clearInterval(timer);
			setTimeout(function() {
				startScroll();
			}, delay);
		} else {
			area.scrollTop++;
			if (area.scrollTop >= area.scrollHeight / 2) {
				area.scrollTop = 0;
			}
		}
	}
	setTimeout(function() {
		startScroll();
	}, delay);
	area.onmouseover = function() {
		clearInterval(timer);
	}
	area.onmouseout = function() {
		startScroll();
	}
}

//京东618底栏
function bottom618() {
	var jd618 = document.getElementById('jd_618');
	var btn = getByClass('jd618_btn', jd618)[0];
	var cont = getByClass('jd618_cont', jd618)[0];
	var close = getByClass('jd618_close', jd618)[0];
	var state = true;
	btn.onclick = function() {
		if (state) {
			cont.style.display = 'block';
			jd618.style.background = '#ef194a';
			state = false;
		} else {
			cont.style.display = 'none';
			jd618.style.background = 'transparent';
			state = true;
		}
	}
	close.onclick = function() {
		cont.style.display = 'none';
		jd618.style.background = 'transparent';
		state = true;
	}
}

//滚动显示各楼层
function showFloor() {
	$(window).scroll(function() {
		var top = $(document).scrollTop();
		var floor = $(document).find('.floor');
		floor.each(function() {
			var This = $(this);
			if (top > This.offset().top) {
				This.find('.hide').css('opacity', '1')
				This.find('.loader-wrap').css('opacity', '0');
			}
		})
	})
}

//内容展示
function showCont(obj) {
	var title = getByClass('title', obj)[0];
	var aLi = title.getElementsByTagName('a');
	var wrap = getByClass('floor_itemwrap', obj)[0];
	var wLi = wrap.children;
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onmouseover = function() {
			var This = this;
			var timer = setTimeout(function() {
				clearTimeout(timer);
				for (var i = 0; i < aLi.length; i++) {
					aLi[i].className = '';
				}
				This.className = 'tab_active';
				for (var j = 0; j < wLi.length; j++) {
					wLi[j].style.display = 'none';
				}
				wLi[This.index].style.display = 'block';
			}, 200)
		}
	}
}

//自动滚图
function autoRun(obj) {
	var list = obj.getElementsByTagName('ul')[0];
	var oli = list.getElementsByTagName('li');
	var oliWidth = oli[0].offsetWidth;
	var buttons = getByClass('select_pic', obj)[0].getElementsByTagName('a');
	var next = getByClass('next', obj)[0];
	var prev = getByClass('previous', obj)[0];
	var index = 1;
	var len = oli.length - 2;
	var animated = false;
	var timer;
	list.style.width = oli.length * oliWidth + 'px';

	function showButton() {
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].className == 'selected_pic') {
				buttons[i].className = '';
				break;
			}
		}
		buttons[index - 1].className = 'selected_pic';
	}

	function animate(offset) {
		animated = true;
		var newLeft = parseInt(list.style.left) + offset;
		var time = 220; //位移总时间
		var interval = 10; //位移间隔时间
		var speed = offset / (time / interval); //每次位移量
		// list.style.left = newLeft + offset + 'px';

		function go() {
			//速度小于0，当前left值大于目标值||速度大于0，当前left值小于目标值
			if (speed < 0 && parseInt(list.style.left) > newLeft || speed > 0 && parseInt(list.style.left) < newLeft) {
				list.style.left = parseInt(list.style.left) + speed + 'px';
				setTimeout(function() {
					go();
				}, interval)
			} else {
				animated = false;
				list.style.left = newLeft + 'px';
				//真正的第一张图left= -600，大于它归位到真正的最后一张图
				if (newLeft > -oliWidth) {
					list.style.left = -oliWidth * len + 'px';
				}
				//真正的最后一张图left= -3000，小于它归位到真正的第一张图
				if (newLeft < -oliWidth * len) {
					list.style.left = -(oliWidth) + 'px';
				}
			}

		}
		go();
	}

	function play() {
		timer = setInterval(function() {
			next.onclick();
		}, 3000);
	}

	function stop() {
		clearInterval(timer);
	}

	next.onclick = function() {
		if (index == 4) {
			index = 1;
		} else {
			index += 1;
		}
		showButton();
		if (!animated) {
			animate(-oliWidth);
		}
	}
	prev.onclick = function() {
		if (index == 1) {
			index = 4;
		} else {
			index -= 1;
		}
		showButton();
		if (!animated) {
			animate(oliWidth);
		}
	}

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function() {
			if (this.className == 'selected_pic') {
				return;
			}
			var myIndex = parseInt(this.getAttribute('index'));
			var offset = -oliWidth * (myIndex - index);

			if (!animated) {
				animate(offset);
			}
			index = myIndex;
			showButton();
		}
	}
	obj.onmouseover = stop;
	obj.onmouseout = play;
	play();
}

//按键项目滚动
function scrollLeft(obj, old, now) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var iSpeed = (now - old) / 10;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		if (now == old) {
			clearInterval(obj.timer);
		} else {
			old += iSpeed;
			obj.style.left = old + 'px';
		}
	}, 30);
}

//淡出
function fadeOut(obj) {
	var iCur = getStyle(obj, 'opacity');
	if (iCur == 0) {
		return false;
	}
	clearInterval(obj.timer);
	var value = 100;
	obj.timer = setInterval(function() {
		var speed = -5;
		if (value == 0) {
			state = false;
			clearInterval(obj.tiemr);
		} else {
			state = true;
			value += speed;
			obj.style.opacity = value / 100;
			obj.style.filter = "alpha(opacity:" + value + ")";
		}
	}, 30)
}

//淡入
function fadeIn(obj) {
	var iCur = getStyle(obj, 'opacity');
	if (iCur == 1) {
		return false;
	}
	clearInterval(obj.timer);
	var value = 0;
	obj.timer = setInterval(function() {
		var speed = 5;
		if (value == 100) {
			state = false;
			clearInterval(obj.tiemr);
		} else {
			state = true;
			value += speed;
			obj.style.opacity = value / 100;
			obj.style.filter = "alpha(opacity:" + value + ")";
		}
	}, 30)
}

//获取元素相对于屏幕距离
function getPosition(obj) {
	var left = obj.offsetLeft;
	var top = obj.offsetTop;
	var parent = obj.offsetParent;
	while (parent != null) {
		left += parent.offsetLeft;
		top += parent.offsetTop;
		parent = parent.offsetParent;
	}
	return {
		"left": left,
		"top": top
	};
}

//获取样式
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
};

// 获取类名
function getByClass(sClass, oParent) {
	var aEle = oParent.getElementsByTagName('*');
	var aResult = [];
	var re = new RegExp('\\b' + sClass + '\\b', 'i');
	var i = 0;

	for (i = 0; i < aEle.length; i++) {
		//if(aEle[i].className==sClass)
		//if(aEle[i].className.search(sClass)!=-1)
		if (re.test(aEle[i].className)) {
			aResult.push(aEle[i]);
		}
	}

	return aResult;
}

//获取样式
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		obj.currentStyle;
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

//获取当前滚动高度
function getScrollTop() {
	var scrollTop = 0;
	if (document.documentElement && document.documentElement.scrollTop) {
		scrollTop = document.documentElement.scrollTop;
	} else if (document.body) {
		scrollTop = document.body.scrollTop;
	}
	return scrollTop;
}

//判断类
function hasClass(ele, cls) {
	return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

//追加类
function addClass(ele, cls) {
	if (!this.hasClass(ele, cls)) ele.className += " " + cls;
}

//移除类
function removeClass(ele, cls) {
	if (hasClass(ele, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		ele.className = ele.className.replace(reg, ' ');
	}
}

//兼容性事件监听
function addEventHandler(target, type, func) {
	if (target.addEventListener) {
		target.addEventListener(type, func, false);
	} else if (target.attachEvent) {
		target.attachEvent("on" + type, func);
	} else {
		target["on" + type] = func;
	}
}