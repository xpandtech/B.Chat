import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 50,
  strokeWidth: 4
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function CountdownTimer() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + daySeconds; // 24 hours countdown timer on every refresh of the page

  const remainingTime = endTime - stratTime;

  return (
    <div className="CountdownTimer">
     
      <CountdownCircleTimer
        {...timerProps}
        className="CountdownCircleTimer"
<<<<<<< Updated upstream
        // colors="#00C642"
        duration={7}
        colors={['#00FF00', '#F7B801', '#FF0000', '#FF0000']}
        colorsTime={[7, 5, 2, 0]}
        durationday ={daySeconds}
=======
        duration={7}
        colors={['#32cd32', '#F7B801', '#dc143c', '#dc143c']}
        colorsTime={[7, 5, 2, 0]}
        durationday={daySeconds}
>>>>>>> Stashed changes
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime(<p6 className="hours">Hours</p6>, getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      
      
    </div>
  );
}
