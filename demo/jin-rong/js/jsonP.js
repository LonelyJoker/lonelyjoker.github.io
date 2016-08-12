
var createXHR = (function () {
    if ("XMLHttpRequest" in window) {
        return function () {
            return new XMLHttpRequest();
        }
    }
    if (new ActiveXObject("Microsoft.XMLHTTP")) {
        return function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    if (new ActiveXObject("Msxml2.XMLHTTP")) {
        return function () {
            return new ActiveXObject("Msxml2.XMLHTTP");
        }
    }
    if (new ActiveXObject("Msxml3.XMLHTTP")) {
        return function () {
            return new ActiveXObject("Msxml3.XMLHTTP");
        }
    }
})();
var utils={
    toJSON:function(str){
        return 'JSON' in window?JSON.parse(str):eval('('+str+')');
    },
    ajax:function(url,callback){
        var that=this;
        var xhr=createXHR();
        url+=(/\?/.test(url)?'&':'?')+'_='+Math.random();
        xhr.open('get',url);
        xhr.onreadystatechange=function(){
            if(this.readyState===4&&/^2\d{2}$/.test(this.status)){
                var val=this.responseText;
                val=that.toJSON(val);
                typeof callback==='function'?callback(val):null;
            }
        };
        xhr.send();
    }
};
/*
$(function () {
    $.ajaxSetup({
        type:"post",

        success:function(data){
            $("ul").append("<li>你输入的<b>  "
                + $("#txtNumber").val() + " </b>是<b> "
                + data + " </b></li>");
        }
    });
    $("#btnShow_1").bind("click", function () {
        $.ajax({
            data: { num: $("#txtNumber").val() },
            url: "http://www.imooc.com/data/check.php"
        })
    })
    $("#btnShow_2").bind("click", function () {
        $.ajax({
            data: { num: $("#txtNumber").val() },
            url: "http://www.imooc.com/data/check_f.php"
        });
    })
});*/
