import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[isRunning, setIsRunning] = useState(false);
  const [countSeconds, setCountSeconds] = useState(0);

  useEffect(()=>{
    let stopWatch;

    if(isRunning){
      stopWatch= setInterval(()=>{
        setCountSeconds((prevSeconds)=>prevSeconds+1)
      },1000);
    }

    return ()=> clearInterval(stopWatch);
  },[isRunning])

  const timeStart = ()=>{
    setIsRunning((prevIsRunning)=> !prevIsRunning);
  };

  const resetTimer = ()=>{
    setIsRunning(false);
    setCountSeconds(0);
  }

  const countTime = (CountSeconds)=>{
    const minutes = Math.floor(CountSeconds/60);
    const remainingSeconds = countSeconds % 60;

    return `${minutes}:${remainingSeconds < 10 ? "0":""}${remainingSeconds}`
  }




  return (
    <div className="App">
      <h1>StopWatch</h1>
      <p>Time:{countTime(countSeconds)}</p>
      <button onClick={timeStart}>{isRunning? "Stop":"Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
