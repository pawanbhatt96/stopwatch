let isStop = true;
let sec = 0;
let min = 0;
let hour = 0;
function start() {
  if (isStop == true) {
    isStop = false;
    timer();
  }
}
function timer() {
  if (isStop == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hour = parseInt(hour);
    sec++;

    if (sec == 60) {
      sec = 0;
      min++;
    }
    if (min == 60) {
      min = 0;
      hour++;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    startTime.innerHTML = hour +":"+ min +":"+ sec;
     setTimeout("timer()", 10);
    
  }
}
function stop() {
  isStop = true;
}
function reset() {
  isStop = true;
  sec = 0;
  min = 0;
  hour = 0;
  startTime.innerHTML = "00:00:00";
}
