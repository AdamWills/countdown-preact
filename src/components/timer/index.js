import { h } from 'preact';
import { useState } from 'preact/hooks';
import Countdown from 'react-countdown';

const Timer = () => {

  const timerStates = {
    start: 'Start',
    active: 'Pause',
    complete: 'Done!'
  };
  const [timerState, setTimerState] = useState(timerStates.start);

  const renderer = ({ api, total }) => {
    const handleActionClick = () => {
      if (timerState === timerStates.start) {
        api.start();
        setTimerState(timerStates.active);
      }
    }
    return (
      <>
      {timerState === timerStates.start &&
        <button class="p-4 bg-blue-700 text-white" onClick={handleActionClick}>
          {timerState}
        </button>
      }
      {timerState === timerStates.active &&
        <div class="text-white text-7xl">
          {total / 1000}
        </div>
      }
      </>
    )
  }
  const handleComplete = () => {
    console.log('TIME IS UP, jerk!')
  }
  return (
    <Countdown
      date={Date.now() + 60000}
      autoStart={false}
      renderer={renderer}
      onComplete={handleComplete}
      intervalDelay={1000}
      precision={1}
    />
  )
}

export default Timer;