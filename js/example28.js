/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var x={};
    var y={id:1};
    var z=x.id||y.id;
    console.log(z); //explainthatx.idisundefined,hence,thevalue
//assignedtozisy.id
    x.id=100;
    z=x.id||y.id;
    console.log(z); //returnsthefirstexpressionevaluatingtotrue
    z=x.id&&y.id; //returnsthelastexpressionifeveryexpressionevaluates
    console.log(z);
});
