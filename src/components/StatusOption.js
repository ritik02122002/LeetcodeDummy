import { useState } from "react";

const StatusOption = (props) => {
    console.log("satusFilter1")
    const setStatus = props.setStatus;
    return (
        
            <select onChange={(e)=>{setStatus(e.target.value)
            }} className="mx-2 border-gray-200 border-2 p-1 focus:outline-none focus:border-gray-400">
            {console.log("satusFilter2")}
                <option value="all">
                    Status
                </option>
                <option value="ac">
                    Solved
                </option>
                <option value="notac">
                    Attempted
                </option>
                <option value="null">
                    Todo
                </option>
            </select>
       
    )
}
export default StatusOption;