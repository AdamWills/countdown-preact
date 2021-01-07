import { h } from 'preact';
import { useState } from 'preact/hooks';
import Countdown from 'react-countdown';

const Timer = (props) => {

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
      {timerState === timerStates.complete &&
        <button class="p-4 bg-blue-700 text-white" onClick={props.reset}>
          New Game
        </button>
      }
      </>
    )
  }
  const handleComplete = () => {
    setTimerState(timerStates.complete);
  }

  return (
    <Countdown
      date={Date.now() + 30000}
      autoStart={false}
      renderer={renderer}
      onComplete={handleComplete}
      intervalDelay={1000}
      precision={1}
    />
  )
}

export default Timer;