import { useState } from "react";

function Arr(){
    const fruits=["mango","apple","orange"];
    const [allFruits,setAllFruit] = useState(fruits);
    const [NewFruit,setNewfruit] = useState();
    const deleteFruit = (name)=>{
            //spread operators(...)
            const update= allFruits.filter((data)=> data!=name);
            setAllFruit(update);
    }
    function newFruit(){
        setAllFruit([...allFruits,NewFruit])
    }
    return(
        <>
        <div className="flex">
          <div className="w-full p-2 bg-blue-100">
            <h1 className="text-2xl text-center font-bold mt-2">Add New Fruit</h1>
            <input type="text"
             placeholder="enter new fruit" 
             className="w-full border border-b-blue-300 p-3 rounded-2xl"
              value={NewFruit} onChange={(e)=>setNewfruit(e.target.value)} />
            <button className="w-full border border-b-blue-300 p-3 rounded-2xl bg-blue-600 text-white" onClick={()=>newFruit()}>Add New Fruit</button>
          </div>
          <table className="m-auto py-2 bg-gray-100 w-full">
       <thead>
        <tr className="bg-blue-50">
        <th className="p-2">N<sup>o</sup></th>
        <th className="p-2">fruit Name</th>
        <th className="p-2">Action</th>
        </tr>
        </thead>
        {allFruits.map((fruit,id)=>(
            <tr  >
                <td className="p-2">{id+1}</td>
                <td className="p-2">{fruit}</td>
                <td className="p-2"><button onClick={()=>deleteFruit(fruit)} className="bg-red-400 text-black rounded-l-sm">delete</button></td>
                </tr>
        ))}
        
       </table>
        </div>
       
        </>
    )
}
export default Arr;