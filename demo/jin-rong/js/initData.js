
function getEle(ele) {
    return document.querySelector(ele);
}

function getEleAll(ele) {
    return document.querySelectorAll(ele);
}
(function(){
    var winH=document.documentElement.clientHeight||document.body.clientHeight;
    var solT=document.documentElement.scrollTop||document.body.scrollTop;
    var main_2=getEle('.main_2').offsetTop;
    if(main_2<(winH+solT)){
        util.ajax("data.json",function(data){
            console.log(data);
        })
    }

















})();