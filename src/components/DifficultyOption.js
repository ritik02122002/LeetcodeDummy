import { useState } from "react";

const DifficultyOption = (props) => {
    {console.log("diff filter1")}
    const setDiffLevel = props.setDiffLevel;
    return (
     
            <select onChange={(e)=>{setDiffLevel(e.target.value)
            }} className="mx-2 border-gray-200 border-2 p-1 focus:outline-none focus:border-gray-400">  {console.log("diff filter2")}
                <option value="all" >
                    Difficulty
                </option>
                <option value="easy">
                    Easy
                </option>
                <option value="medium">
                    Medium
                </option>
                <option value="hard">
                    Hard
                </option>
            </select>
       
    )
}
export default DifficultyOption;