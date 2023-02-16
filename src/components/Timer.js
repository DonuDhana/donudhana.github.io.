// import React, { useState } from 'react'

//  function Timer() {
//     const[start,setStart]=useState(60);
//     const[stop, setStop]=useState();
//     // const decr=(s)=>{
//     //     // console.log("in",s)
//     //     if(!s>55){
//     //     console.log("in",s-1)
//     //     setStart(s-1);
//     //     }
//         // console.log(document.getElementById('timer').value,"val");
//     //     setStart(e.target.value-1)
//     //   do {
//     //     setStart(s-1)
//     //     console.log(s);
//     //   } while (s<=0);

//     // }
//   return (
//     <div style={{textAlign:"center"}}>Timer
//     <div>
//         <p id='timer'>{start}</p>
//     </div>
//     <button onClick={()=>setStart(start-1)}> Start </button>
//     <button onClick={()=>setStart(start)}> Stop</button>
//     <button onClick={()=>setStart (60) }>Reset</button>
//     </div>
//   )

// }

import { useState, useRef } from 'react';
//video streamer play,pause date (13.12.2022).
//UI libary  search movie filter, with reset function useref and usestate.
export function Timer() {
  const [counter, setCounter] = useState(60);
  const interval = useRef(null);

  // let interval;
  console.log(interval)
  const clickin = () => {
    interval.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
      console.log(interval, "start");
    }, 1000);
    console.log(interval, "start");
    return () => clearInterval(interval.current);
  };

  // useEffect(() => {
  //   interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // },[]);

  const stop = () => {
    clearInterval(interval.current);
    // console.log(interval, "stop");
  }
  const reset = () => {
    setCounter(60);
    clearInterval(interval.current);

  };

  // const stoptimer= useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter);
  //   }, 10000);

  //   return () => clearInterval(interval);
  // });

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={clickin}> Start </button>
      <button onClick={stop}> Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Timer;
