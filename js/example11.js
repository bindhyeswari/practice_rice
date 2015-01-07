/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var x=.3;
    var y=.2;
    var z=.1;
    console.log((x-y)===z); //Whatisthereturnvalueforthis?
//Javascriptdoesfloatingpointmathandcanaccurately
//checkforfractionswith1/2,1/4etc,butallother
//decimalslike.1areapproximations
//Refertohttps://en.wikipedia.org/wiki/IEEE_754#Basic_formats
//fortheIEEE754standard
    var currency={
        _val:0,
        get dollars(){returnthis._val/100;},
    set dollars(_inpval){this._val=_inpval*100;},
    get cents(){returnthis._val}
};
x=Object.create(currency);
x.dollars=.3;
y=Object.create(currency);
y.dollars=.2;
z=Object.create(currency);
z.dollars=.1;
console.log((x.cents-y.cents)===z.cents);
//Thismethod,whichavoidsthefloatingpointmathissueisknown
//asthescaledintegermethod
});
