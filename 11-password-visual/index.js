$(function(){
    var pwd=$("#pwd"),
        txt=$(".pwd-text"),
        eye=$("#eye");
    pwd.on("input",function(){
        txt.val(pwd.val())
    }),
    eye.mouseover(function(){
        txt.css("z-index","10")
    }),
    eye.mouseout(function(){
        txt.css("z-index","-10")
})});