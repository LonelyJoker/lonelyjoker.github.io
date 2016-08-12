
(function () {

    function getEle(ele) {
        return document.querySelector(ele);
    }

    function getEleAll(ele) {
        return document.querySelectorAll(ele);
    }
    //顶部菜单
    /*手机图标动画*/
    var mobBank = document.getElementById('mobBank');
    var iPhoneImg = document.getElementById('iPhone_icon');
    var removeLine1 = document.getElementById('removeLine1');
    mobBank.onmouseenter = function () {
        animate.linear(iPhoneImg, 'backgroundPositionY', -32, 200);
        removeLine1.style.borderLeftColor = 'transparent';
    };
    mobBank.onmouseleave = function () {
        animate.linear(iPhoneImg, 'backgroundPositionY', 0, 200);
        removeLine1.style.borderLeftColor = '#e9e9e9';
    };

    var complaints = document.getElementById('complaints');
    var webNav_line = document.getElementById('webNav_line');
    var web_line = document.getElementById('web_line');

    function hidden(curEle, nextCur) {
        curEle.onmouseenter = function () {
            nextCur.style.borderLeftColor = 'transparent';
        };
        curEle.onmouseleave = function () {
            nextCur.style.borderLeftColor = '#e9e9e9';
        };
    }

    hidden(complaints, web_line);
    hidden(webNav_line, web_line);

    //手机金融;
    var mobBank_box = document.getElementById('mobBank_box');
    var mobBank_black = document.getElementById('mobBank_black');
    var complaints_line = document.getElementById('complaints_line');
    var complaints_box = document.getElementById('complaints_box');
    var webNav_box = document.getElementById('webNav_box');


    //鼠标滑过变色
    function mouseBlck(curELe, tarEle) {
        curELe.onmouseover = function () {
            tarEle.style.color = 'black';
        }
        curELe.onmouseout = function () {
            tarEle.style.color = null;
        }
    }

    mouseBlck(mobBank_box, mobBank_black);
    mouseBlck(complaints_box, complaints_line);
    mouseBlck(webNav_box, web_line);
    //鼠标滑过改变透明度
    function mouseOpa(curELe, tarEle, n) {
        curELe.onmouseover = function () {
            tarEle.style.opacity = n;
            tarEle.style.filter = 'alpha(opacity=' + n * 100 + ')';
        };
        curELe.onmouseout = function () {
            tarEle.style.opacity = null;
            tarEle.style.filter = null;
        }
    }

    var sinA = document.getElementById('sinA');
    var sinA_info = document.getElementById('sinA_info');
    var weiXin = document.getElementById('weiXin');
    var weiXin_info = document.getElementById('weiXin_info');
    mouseOpa(sinA_info, sinA, 1);
    mouseOpa(weiXin_info, weiXin, 1);





//搜索框
    var search = getEle('.search>input');
    var searchBtn = getEle('.searchBtn');
    var searchInfo = getEle('.searchInfo');
    var searchText = getEle('#searchText');
    var val=searchText.value;
    document.body.onclick = function (e) {
        e = e || window.event;
        var tar = e.target || e.srcElement;
        if (tar.id === 'searchText') {
            if (!/^ +/.test(val)) {
                searchInfo.style.display = 'block';
            }
        } else if (tar.nodeName == "LI" && tar.parentNode.id === 'searchInfoList') {
            searchInfo.style.display = 'block';
        } else if (tar.className === 'searchInfo_1') {
            searchInfo.style.display = 'block';
        } else {
            searchInfo.style.display = 'none';
        }
    };
    searchText.onkeyup=function(e){
        e=e||window.event;
        if(e.keyCode===13){
            window.open("http://search.jr.jd.com/gs/search?q="+encodeURIComponent(this.value));
        }

        e.preventDefault();
    }
    searchBtn.onclick=function(e) {
        e=e||window.event;
        window.open("http://search.jr.jd.com/gs/search?q="+encodeURIComponent(val));
    }


    //我的资产
    var PerCen = getEle(".PerCen");
    var assetsInfo = getEle(".assetsInfo");
    var PerCen_a = getEle(".PerCen_a");
    assetsInfo.onmouseover = function () {
        PerCen_a.style.backgroundColor = "white";
        PerCen_a.style.borderBottomColor = 'white';
    };
    assetsInfo.onmouseout = function () {
        PerCen_a.style.backgroundColor = null;
        PerCen_a.style.borderBottomColor = '';
    };


    //菜单列表
    var menuList=getEleAll(".ul_display");
    var infoList=getEle('.infoList');

    function display(curELe, tarEle) {


        curELe.onmouseover = function () {
            tarEle.style.color = 'black';
        }
        curELe.onmouseout = function () {
            tarEle.style.color = null;
        }
    }

    //选项卡
    function tabControl(curEle,nextEle,select){
        for(var i=0;i<curEle.length;i++){
            curEle[i].hover=i;
            curEle[i].onmouseover=function(){
                for(var j=0;j<curEle.length;j++){
                    curEle[j].className=nextEle[j].className=null;
                }
                this.className=nextEle[this.hover].className=select;
            }
        }
    }
    var manage_li=getEleAll(".manage_list>a");
    var manage_div=getEleAll(".manage_main_rl>div");
    tabControl(manage_li,manage_div,"select");
    var raisePublic_li=getEleAll(".raisePublic_list>a");
    var raisePublic_div=getEleAll(".raisePublic_main_rl>div");
    tabControl(raisePublic_li,raisePublic_div,"select")
    var whiteBar_li=getEleAll(".whiteBar_list>a");
    var whiteBar_div=getEleAll(".whiteBar_main_rl>div");
    tabControl(whiteBar_li,whiteBar_div,"select");
    var assurance_li=getEleAll(".assurance_list>a");
    var assurance_div=getEleAll(".assurance_main_rl>div");
    tabControl(assurance_li,assurance_div,"select");
    var jdWallet_li=getEleAll(".jdWallet_list>a");
    var jdWallet_div=getEleAll(".jdWallet_main_rl>div");
    tabControl(jdWallet_li,jdWallet_div,"select");

    //合作机构
    var mechanism=getEle(".mechanism");
    var mechanism_box=getEle(".mechanism_box");
    var lis=getEleAll(".mechanism_box>li");
    var btn_fl=getEle("#btn_fl");
    var btn_rl=getEle("#btn_rl");
    mechanism_box.style.left=0+'px';
    function autoMove(offset){
        var newLeft=parseFloat(mechanism_box.style.left)+offset;
        if(newLeft>=0||newLeft<-1260){
            return
        }else{
            animate.linear(mechanism_box, 'left', newLeft, 500);
        }
    }
    btn_fl.onclick=function(){
        autoMove(180);
    };
    btn_rl.onclick=function(){
        autoMove(-180);
    }

})();
