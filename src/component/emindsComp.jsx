import React, { useState } from "react";

export default function EmindsComp() {
  var FAILURE_COEFF = 10;
  var MAX_SERVER_LATENCY = 200;
  const [input, Setinput] = useState("");
//   let nba=[
//     {"name" : "Rahul Ranjan"},
//     {"name" : "Ranjan kumar"},
//     {"name" : "Ujjwal verma"},
//     {"name" : "uttpal sharma"},
//     {"name" : "Kundan gupta"},
//     {"name" : "Papa ji"},    
// ]

  const onChange =(e)=>{
    Setinput(e.target.value)
    getSuggesitions(input)
    }
  const getRemdumBool = (n) => {
    var MAX_Remdum_COEFF = 1000;
    if (n > MAX_Remdum_COEFF) n = MAX_Remdum_COEFF;
    return Math.floor(Math.random() * MAX_Remdum_COEFF) % n === 0;
  };
  const getSuggesitions = (text) => {
    console.log(text);
    var pre = "pre";
    var post = "post";
    var result = [];
    if (getRemdumBool(2)) {
      result.push(pre + text);
    }
    if (getRemdumBool(2)) {
      result.push(text);
    }
    if (getRemdumBool(2)) {
      result.push(text + post);
    }
    if (getRemdumBool(2)) {
      result.push(pre + text + post);
    }
    return new Promise((resolve, reject) => {
      var rendumTimeOut = Math.random() * MAX_SERVER_LATENCY;
      setTimeout(() => {
        if (getRemdumBool(FAILURE_COEFF)) {
          reject();
        } else {
          resolve(result);
        //   debugger
          console.log(result);
        }
      }, rendumTimeOut);
    });
  };
  const data = "hello"
//   debugger
   const getData=getSuggesitions(data)
   console.log(getData);
  return (
      
    <div>
      <input type="Search" onChange={onChange} value={input} />
    </div>
  );
}
