import React from 'react'
import "./TimerStyle.css"
const Timer = () => {
    var countdownNumberEl = document.getElementById('countdown-number');
    var countdown = 10;
    
    countdownNumberEl.textContent = countdown;
    
    setInterval(function() {
      countdown = --countdown <= 0 ? 10 : countdown;
    
      countdownNumberEl.textContent = countdown;
    }, 1000);  
  return (
<div id="countdown">
  <div id="countdown-number"></div>
  <svg>
    <circle r="18" cx="20" cy="20"></circle>
  </svg>
</div>
  )
}

export default Timer
