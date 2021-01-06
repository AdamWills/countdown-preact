import { h } from 'preact';
import Countdown from 'react-countdown';

const Timer = () => {

  const renderer = ({ api, formatted }) => {
    const { seconds } = formatted;
    const completed = api.isCompleted();
    return (
      <>
      <div class="text-white text-7xl">{seconds}</div>
      <button class="p-4 bg-blue-700 text-white" onClick={api.start} disabled={api.isStarted() || completed}>
        Start
      </button>
      </>
    )
  }
  return (
    <Countdown date={Date.now() + 60000} autoStart={false} renderer={renderer} />
  )
}

export default Timer;