let d = new Date();
let time = d.toLocaleTimeString();


var printTime = setInterval(
    function(){
        console.log(time);
        d = new Date();
        time = d.toLocaleTimeString();
    }, 1000);