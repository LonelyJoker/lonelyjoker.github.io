
var animate = {
    linear: function linear(curEle, attr, target, duration, callBack) {
        var times = 0;
        var interval = 15;
        var begin = utils.css(curEle, attr);
        var change = target - begin;
        window.clearTimeout(curEle.timer);
        (function step() {
            window.clearTimeout(curEle.timer);
            times += interval;
            if (times < duration) {
                curEle.style[attr] = times / duration * change + begin + 'px';
            } else {
                curEle.style[attr] = target + 'px';
                window.clearTimeout(curEle.timer);
                if (typeof callBack === 'function') {
                    callBack.call(curEle);
                }
                return;
            }
            window.setTimeout(step, interval);
        })()
    }
}