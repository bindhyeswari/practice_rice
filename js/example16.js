/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var date=new Date();
    var utcStart=new Date(1970,0,1);
    console.log(date);
    console.log(date.toJSON()); //2014-01-29T17:38:00.940Z-ZisforUTC,also
    /*
     Assignment:
     WhatisthedifferencebetweengetFullYearandgetYear
     FamiliarizeyourselfwithallgetmethodsoftheDatedatatype(e.g.getHours())
     WhatarethevarioustoString()methodsforDateandwhatdotheydo?
     */
    console.log(date.valueOf());
    console.log(date-utcStart);
});
