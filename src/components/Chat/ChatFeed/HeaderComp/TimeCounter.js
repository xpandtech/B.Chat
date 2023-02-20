import React from 'react'

const TimeCounter = () => {
    var timer = document.getElementById("timer");
var time = 9;
setInterval(function () {
  timer.innerHTML = time;
  time--;
  if (time <= 0) time = 10;
}, 1000);

  return (
    <div className="circleProgress_wrapper">
  <div className="wrapper right">
    <div className="circleProgress rightcircle right_cartoon"></div>
  </div>
  <div className="wrapper left">
    <div className="circleProgress leftcircle left_cartoon"></div>
  </div>
  <span id="timer">10</span>
</div>
  )
}

export default TimeCounter
