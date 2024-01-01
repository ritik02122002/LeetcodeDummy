import { useState } from "react";
import { questionData } from "../constants";
import { filterDataSearch ,filterDataDiff,filterDataStatus} from "../utils/utils";

const ApplyFilter = (props) => {
    {console.log("apply filter1")}
    const setQData = props.setQData;
    const setResult = props.setResult;
    const searchText = props.searchText;
    const diffLevel = props.diffLevel;
    const status = props.status;

    return (
            <button  className="mx-2 border-gray-200 border-2 p-1 hover:border-gray-700 hover:shadow-md hover:shadow-gray-700 hover:bg-gray-500 hover:text-white" onClick=
                {() => {
                    let data = filterDataSearch(questionData.problemsetQuestionList.questions, searchText)
                    data = filterDataDiff(data, diffLevel);
                    data=filterDataStatus(data,status);
                    setQData(data)
                    setResult(data.length)
                }
                }>
                  {console.log("apply filter2")}
                Apply Filters
            </button>
        
    )
}

export default ApplyFilter;