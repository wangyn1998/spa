var timerButton = function(config) {
    var cfg = config,                 // 按钮的配置参数
        enabled = cfg.enabled,          // 按钮状态，true 为启用，false 为禁用
        timer,                          // 定时器对象
        i = cfg.duration,               // 按钮被禁用时长，单位秒
        $btn = $('<input class="timer-button" type="button">');
  
    $(cfg.container).append($btn);
  
    if(cfg.enabled) {
      enableBtn();
    } else {
      disableBtn();
    }
  
    function disableBtn() {
        enabled = false;
        $btn.attr('disabled', 'disabled');
        setBtnText();

        timer = window.setInterval(function() {
        i--;
        setBtnText();
        if(i === 0) enableBtn();
        }, 1000);
    }
  
    function enableBtn() {
        enabled = true;
        i = cfg.duration;
        clearInterval(timer);
        setBtnText();
        $btn.removeAttr('disabled');
    }
  
    function setBtnText() {
        var txt = enabled ? cfg.text : cfg.text + ' (' + i + ' s)';
        $btn.val(txt);
    }
  
    $btn.click(function() {
        $btn.trigger('timer-button-click');
        if(cfg.enabled) disableBtn();
    });
  
    return $btn;
};
  // var $timerButton =(function(){
//     var $btn = $('<input class="timer-button" type="button"  disabled/>'),
//         timer;
//         cfg = {
//             container:"body",
//             num:6,
//             title: "同意",

//         }
    
//     function show(config){
//         //1.DOM draw (DOM绘制)
//         $(cfg.container).append($btn);
//         $.extend(cfg,config);
//         num = cfg.num

//         $btn.val(cfg.title + "(" + cfg.num + "s)");

//         timer = setInterval(function(){
//             num--;
//             if(num === 0){
//                 clearInterval(timer);
//                 $btn.val('同意');
//                 $btn.removeAttr('disabled');//去掉禁用属性
//             }else{
//                 $btn.val('同意('+num+'s)');
//             }
//         },1000);
    
//         $btn.click(function(){
//             alert('就知道你会同意的');
//         });
//         //2.event bind(事件绑定)
//     }

    
//     return{
//         show:show
//     }
// }());
//不用page load event
/*封装成对象，有几种方案
1.全局对象
var timerBtn={
    show:function()
}
2.工厂函数，一个函数返回值是一个简单对象
var timerBtn = (function(){
    return{
        show:function(){}
    }
}())
3.构造函数
function TimerBtn(){

}
var tb=new TimerBtn()
*/