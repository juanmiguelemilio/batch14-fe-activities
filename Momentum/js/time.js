function initClock() {
    updClock();
    window.setInterval("updClock()" , 1);
}

var currentTime = new Date()
        var hours = currentTime.getHours()
        var minutes = currentTime.getMinutes()
        if (minutes < 10){
            minutes = "0" + minutes
        }
        var time = hours + ":" + minutes;
          
        document.getElementById('time_span').innerHTML = time;