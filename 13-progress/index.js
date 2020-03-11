$(function(){
    var progress=$("progress"),
        num=0,
        i=0;
    $("#start-button").click(function(){
        0===num&&(num=window.setInterval(function(){
            progress.attr("value",i++)
        },100))
    }),
    $("#stop-button").click(function(){
        window.clearInterval(num),num=0
    }),
    $("#reset-button").click(function(){
        progress.attr("value",i=0)
    })
});