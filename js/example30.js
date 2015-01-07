/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var x={
        val:"hello"
    };
    function changeX(x){
        return x.val.slice(3,5);
    }
    function changeY(x){
        x.val=x.val.slice(3,5);
    }
    console.log(changeX(x));
    changeY(x);
    console.log(x.val);
});
