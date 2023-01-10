import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./subcomp.css"
const Timer = () => (
  <div className='Time'>
    <CountdownCircleTimer 
    isPlaying
    duration={60}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[60, 45, 30, 10]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
  </div>
)
export default Timer;