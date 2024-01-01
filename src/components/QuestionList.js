import { questionData, PROBLEMS_BASE_URL, ACCEPTED_LOGO, NOT_ACCEPTED_LOGO } from "../constants"
import { useState } from "react"
import SearchBar from "./SearchBar"
import DifficultyOption from "./DifficultyOption"
import ApplyFilter from "./ApplyFilter"
import StatusOption from "./StatusOption"
import QuestionListItem from "./QuestionListItem"


const QuestionList = () => {
    console.log("questionlist1")
    const [qData, setQData] = useState(questionData.problemsetQuestionList.questions);
    const [result, setResult] = useState(questionData.problemsetQuestionList.questions.length)
    const [searchText, setSearchText] = useState("");
    const [diffLevel, setDiffLevel] = useState("all");
    const [status, setStatus] = useState("all");

    return (
        <>
            {console.log("questionlist2")}

            <h1 className="text-center text-2xl p-2 mt-4 mb-2" >Problems:</h1>
            <div className="flex justify-center">
                <StatusOption setStatus={setStatus} />
                <DifficultyOption setDiffLevel={setDiffLevel} />
                <SearchBar setSearchText={setSearchText} searchText={searchText} />
                <ApplyFilter searchText={searchText} diffLevel={diffLevel} status={status} setQData={setQData} setResult={setResult} />
            </div>
            <div className="text-center my-4"><span className="text-center my-3 text-xl">{result}</span><span> Results</span></div>

            <table className="question m-auto">
<thead>
                <tr className="m-2">
                    <th className="text-left text-xl font-semibold m-3 p-2">Status</th>
                    <th className="text-left text-xl font-semibold m-3 p-2">Title</th>
                    <th className="text-left text-xl font-semibold m-3 p-2">Solution</th>
                    <th className="text-left text-xl font-semibold m-3 p-2">Acceptance</th>
                    <th className="text-left text-xl font-semibold m-3 p-2">Difficulty</th>
                    <th className="text-left text-xl font-semibold m-3 p-2">Tags</th>
                </tr>
                </thead>
                <tbody>
                {qData.map(question => {
                    return <QuestionListItem questionsInfo={question} key={question.frontendQuestionId}/>
                })}
                </tbody>
            </table>
        </>
    )

}



export default QuestionList;