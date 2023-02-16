import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

// .calculator-input {
//     border-color: black;
//     border: ridge;
//     text-align: right;
//     padding-right: 10%;
//     font-weight: bold;
//     font-size: xx-large;
//   }
function Calc() {
    
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [result,setResult]=useState()
    const F1 =(e) => {
        setFirst(e.target.value)
    }
    const F2 =(e) => {
        setSecond(e.target.value)
    }
    const Res=()=>{
            setResult(parseInt(first)+parseInt(second))
    }
    console.log(first, second,result);
    return (

        <div className="calculator" style={{textAlign:"center" }}>
            <div className="calculator-input" >
                <input type='number' onBlur={(e)=> F1(e)} />
                </div>
                <div>
                <input type='number' onBlur={(e)=>F2(e)}/>
                

                
            </div>
            <div className="result"> {result}</div>
            {/* <p>You clicked  times</p> */}
            <button onClick={Res}>
               Add
            </button>
            
        </div>
    );

}

export default Calc;