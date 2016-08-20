var scale = 1/window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale='+scale+',minimum-scale='+scale+',maximum-scale='+scale+',user-scalable=yes" />')

var aFz = document.getElementsByTagName("html")[0];
var fz = document.documentElement.clientWidth / 10;
aFz.style.fontSize = fz + "px";
