/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    console.log(false === '');
//Strictequalityoperatorchecksifbothoperandsareofthesame
//datatype
    console.log(false == '');
//Whydoesthiswork?
    var falsy=[undefined,null,0,-0,NaN,''];
    for(var i=0;i<falsy.length;i++){
        console.log('if'+falsy[i]);
        if(falsy[i]){
            console.log('>>EvaluatestoTrue');
        }else{
            console.log('>>EvaluatestoFalse');
        }
    }
    /*
     Assignment:Howdoyouusethe!operator?
     */
});
