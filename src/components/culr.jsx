import { useState } from "react";

function Cul(){
const [num1,setNum1] = useState();
const [num2, setNum2] = useState();
// const [answer, setAnswer] = useState(false);
const [result, setResult] = useState();
const add =()=>{
  setResult(parseInt(num1)+parseInt(num2));
}
const sub =()=>{
 setResult(parseInt(num1)-parseInt(num2));
 }
 const div =()=>{
    setResult(parseInt(num1)/parseInt(num2));
 }
 const mult =()=>{
    setResult(parseInt(num1)*parseInt(num2));
 }
    return(
        <>
        <div className="main w-96 border-amber-50">
      <input type="text"className="border-xl w-full" placeholder="enter your age" value={num1} onChange={(e)=>setNum1(e.target.value)} /> <br/>
      <input type="text" className="w-full" placeholder="enter your age" value={num2} onChange={(e)=>setNum2(e.target.value)} /> <br/>
      <button type="button" className="bg-amber-500 px-4 text-white" onClick={()=>add()}>+</button>
      <button type="button" className="bg-blue-500 px-4 text-white" onClick={()=>sub()}>-</button>
      <button type="button" className="bg-green-500 px-4 text-white" onClick={()=>div()}>/</button>
      <button type="button" className="bg-red-500 px-4 text-white" onClick={()=>mult()}>*</button>
      
      <div className="p-8">
        {result&&result}
      </div>
      </div>
      
        </>
    )
}
export default Cul;