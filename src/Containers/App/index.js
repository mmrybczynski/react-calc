import { useState } from "react";
import DigitButtons from "../../Components/DigitButtons";
function App() {

  const [calc,setCalc] = useState("");
  const [result,setResult] = useState("");
  const ops = ['.','+','-','*','/'];

  const updateCalc = (value) => {
    if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))) {
      return;
    }
    setCalc(calc + value);

    if(!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  return (
    <div className="App">
      <div className="calculator">

        <div className="display">
           {result ? <span>({result})</span> : "" }{ calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button>DEL</button>
        </div>

        <div className="digits">
          <DigitButtons updateCalc={updateCalc}/>
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>

      </div>
      
    </div>
  );
}

export default App;
