function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    /*calc button click event*/
    $btnCal.click(function(){
        //validate if error return;
        if(!validate('#width') || !validate('#height')) return;

        //get value
        var w = Number($width.val()),
            h = Number($height.val());
        //calculate
        var p = roundFractional(w*2 + h*2, 4);
            a = roundFractional(w * h, 10);
        //output
        $perimeter.val(p);
        $area.val(a);
    });
    function validate(field){
        //get DOM error message
        var $data = $(field),
            $msg = $(field + '-validation-message');

        //validate null
        if($data.val() === ''){
            $msg.html('不能为空！')
            $data.select();
            return false
        }

        //validate number
        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
            $msg.html('必须是数值！')
            $data.select();
            return false
        }

        //validate > 0
        if(Number($data.val()) < 0){
            $msg.html('必须大于零！')
            $data.select();
            return false
        }

            //prompt error message
            //return false;
        
        return true;
    }
});