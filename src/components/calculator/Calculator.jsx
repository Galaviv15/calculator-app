import React, { useState } from "react";
import "./calculator.css";
import Button from "../button/Button";

function Calculator() {

  const[calc, setCalc] = useState("");
  const[result, setResult] = useState("");

  const[spanStyle, setSpanStyle] = useState(true);

  const operators = ["/", "*", "-", "+", "."];


  function updateCalc(value){
    //prevent a too long expression//
    if(calc.length > 23){
      return;
    }

    //Ensuring first value isn't an operator, and prevent 2 click operators in a row//
    if((operators.includes(value) && calc ==="") ||
       (operators.includes(value) && operators.includes(calc.slice(-1)))) {
        return;
       }

    setCalc(calc + value);

    if(!operators.includes(value)){
      setResult(eval(calc + value).toString());
    }

    if(calc.length > 12){
      setSpanStyle(false);
    }


  }

  function createDigits(){
    let digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(<Button onButtonClick={()=> updateCalc(i.toString())} key={i} content={i}/>)
    }
    return digits;
  }

  function calculateResult(){
    if(calc === ""){
      return;
    }
    setCalc(eval(calc).toString());
  }


  function onClearClick(){
    setCalc("");
    setResult("");
  }

  function onDeleteClick(){
    if(calc === ""){
      return;
    }

    if(calc.length === 1){
      setResult("0");
    }

    const value = calc.slice(0 , -1);
    setCalc(value);
  }



  return (
    <div className="Calculator">
      <div className="display">
        <span className={spanStyle ? "shortExpression" : "longExpression"}>{calc || result || "0"} </span>
      </div>
      <div className="calc-row first">
        <Button onButtonClick={onClearClick} content={"AC"} btnStyle={"btn-clear"} />
        <Button onButtonClick={onDeleteClick} content={"DEL"} btnStyle={"btn-clear"} />
        <Button onButtonClick={()=> updateCalc("/")} content={"÷"} btnStyle={"btn-operator"} />
      </div>
      <div className="calc-row first">
        <Button onButtonClick={()=> updateCalc("1")} content={"1"} btnStyle={"btn-digit"} />
        <Button onButtonClick={()=> updateCalc("2")} content={"2"} btnStyle={"btn-digit"} />
        <Button onButtonClick={()=> updateCalc("3")} content={"3"} btnStyle={"btn-digit"} />
        <Button onButtonClick={()=> updateCalc("*")} content={"x"} btnStyle={"btn-operator"} />
      </div>
      <div className="calc-row second">
        <Button onButtonClick={()=> updateCalc("4")} content={"4"} btnStyle={"btn-digit"} />
        <Button onButtonClick={()=> updateCalc("5")} content={"5"} btnStyle={"btn-digit"} />
        <Button onButtonClick={()=> updateCalc("6")} content={"6"} btnStyle={"btn-digit"} />
        <Button onButtonClick={()=> updateCalc("-")} content={"-"} btnStyle={"btn-operator"} />
      </div>
      <div className="calc-row third">
        <Button onButtonClick={()=> updateCalc("7")} content={"7"} btnStyle={"btn-digit"} />
        <Button onButtonClick={()=> updateCalc("8")} content={"8"} btnStyle={"btn-digit"} />
        <Button onButtonClick={()=> updateCalc("9")} content={"9"} btnStyle={"btn-digit"} />
        <Button onButtonClick={()=> updateCalc("+")} content={"+"} btnStyle={"btn-operator"} />
      </div>
      <div className="calc-row fourth">
        <div>
        <Button onButtonClick={()=> updateCalc("0")} content={"0"} btnStyle={"btn-zero"} />
        </div>
        <div>
        <Button onButtonClick={()=> updateCalc(".")} content={"."} btnStyle={"btn-digit"} />
        <Button onButtonClick={calculateResult} content={"="} btnStyle={"btn-result"} />
        </div>

      </div>
    </div>
  );
}

export default Calculator;
