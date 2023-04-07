var startElement = document.getElementById("btn-start")
var stopElement = document.getElementById("btn-stop")
var resetElement = document.getElementById("btn-reset")

var gio = document.getElementById('gio')
var phut = document.getElementById("phut")
var giay = document.getElementById("giay")


var currentSecond = 0;
var interval = null;
var stt = 0; // 1 run 0 stop



startElement.onclick = function() {
    if(stt == 0) {
        stt = 1; // run
        interval = setInterval(()=>{
            currentSecond++;
            var hrs = Math.floor(currentSecond / 3600);
            var mins = Math.floor((currentSecond % 3600) / 60);
            var secs = Math.floor(currentSecond % 60);
    
            if(`${secs}`.length < 2){
                secs = `0${secs}`
            }
    
            if(`${mins}`.length < 2){
                mins = `0${mins}`
            }
    
            if(`${hrs}`.length < 2){
                hrs = `0${hrs}`
            }
            giay.innerHTML = secs
            phut.innerHTML = mins
            gio.innerHTML = hrs
    
        }, 1000);
    }
}

stopElement.onclick = function() {
    if(stt == 1) {
        stt = 0;
        clearInterval(interval);

    } else {
        stt = 1;
        interval = setInterval(()=>{
            currentSecond++;
            var hrs = Math.floor(currentSecond / 3600);
            var mins = Math.floor((currentSecond % 3600) / 60);
            var secs = Math.floor(currentSecond % 60);
    
            if(`${secs}`.length < 2){
                secs = `0${secs}`
            }
    
            if(`${mins}`.length < 2){
                mins = `0${mins}`
            }
    
            if(`${hrs}`.length < 2){
                hrs = `0${hrs}`
            }
            giay.innerHTML = secs
            phut.innerHTML = mins
            gio.innerHTML = hrs
    
        }, 1000);
    }
    
}

resetElement.onclick = function() {
    stt = 0;
    currentSecond = '00';
    giay.innerHTML = '00';
    phut.innerHTML = '00';
    gio.innerHTML = '00';
    clearInterval(interval);
}

