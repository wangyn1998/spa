$(function(){
    window.onhashchange = function(){
        var $block = $('.main'),
            strHash = window.location.hash,
            color = strHash.substring(3,strHash.length);
            
        console.log(strHash)
        $block.css({
            'background':color
        })
    }
})