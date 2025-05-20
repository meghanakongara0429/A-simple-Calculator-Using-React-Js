import Keypad from "./Keypad"
import './App.css'
import { useState } from "react"
import { getQueriesForElement } from "@testing-library/dom";

function App()
{
  const[num,UpdateNum]=useState("");
  function Evaluate()
  {
    let opv=eval(num)
    UpdateNum(opv)
  }
  function handleClick(input)
  {
    UpdateNum(num+input)

  }
  function handleClear()
  {
    UpdateNum(" ")
  }
  return(
    <div className="container-fluid">
      <div className="in">
      <h2 style={{margin:'23px'}}>Calculator App</h2>
      <input type="text" className="input-box" value={num} onChange={(e)=>UpdateNum(e.target.value)}/>
      <Keypad handleClick={handleClick} Evaluate={Evaluate} handleClear={handleClear}/>
    </div>
    </div>
    
  )
}
export default App