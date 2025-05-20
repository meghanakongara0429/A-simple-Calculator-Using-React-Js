import './Keypad.css'
function Keypad({handleClick,Evaluate,handleClear})
{
    return(
        <div className="Keypad ">
            <div className="Row">
                <button className="btn btn-outline-info"onClick={()=>{handleClick("7")}}>7</button>
                <button className="btn btn-outline-info" onClick={()=>{handleClick("8")}}>8</button>
                <button className="btn btn-outline-info"onClick={()=>{handleClick("9")}}>9</button>
                <button className="btn btn-outline-info" onClick={()=>{handleClick("/")}}>/</button>
            </div>
            <div className="Row">
                <button className="btn btn-outline-info" onClick={()=>{handleClick("4")}}>4</button>
                <button className="btn btn-outline-info" onClick={()=>{handleClick("5")}}>5</button>
                <button className="btn btn-outline-info"onClick={()=>{handleClick("6")}}>6</button>
                <button className="btn btn-outline-info" onClick={()=>{handleClick("*")}}>*</button>
            </div>
            <div className="Row">
                <button className="btn btn-outline-info " onClick={()=>{handleClick("1")}}>1</button>
                <button className="btn btn-outline-info" onClick={()=>{handleClick("2")}}>2</button>
                <button className="btn btn-outline-info" onClick={()=>{handleClick("3")}}>3</button>
                <button className="btn btn-outline-info"onClick={()=>{handleClick("-")}}>-</button>
            </div>
            <div className="Row">
                <button className="btn btn-outline-info"onClick={()=>{handleClick("0")}}>0</button>
                <button className="btn btn-outline-info"onClick={()=>{ Evaluate()}}>=</button>
                <button className="btn btn-outline-danger"onClick={()=>{handleClear()}}>c</button>
                <button className="btn btn-outline-info" onClick={()=>{handleClick("+")}}>+</button>
            </div>
        </div>
    )
}
export default Keypad