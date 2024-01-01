
import { PROBLEMS_BASE_URL,ACCEPTED_LOGO,NOT_ACCEPTED_LOGO } from "../constants"
const QuestionListItem = (props) => {
    console.log("questionlistitem1")
    const { status, title, titleSlug, acRate, difficulty, topicTags, frontendQuestionId } = props.questionsInfo
    return (
        <>
            {console.log("questionlistitem2")}
            <tr key={frontendQuestionId} className="my-1 mx-2 hover:shadow-sm hover:shadow-gray-600">
            <td className="text-left text-md m-3 p-2">{status == "ac" ? <i className="fa fa-check-circle text-green-600"></i> : (status == "notac" ? <i className='fa fa-times-circle text-red-600'></i>: <></>)}</td>
                <td className="text-left text-md m-3 p-2"><a href={PROBLEMS_BASE_URL + titleSlug}>{frontendQuestionId + ". " + title}</a></td>
                <td className="text-left text-md m-3 p-2 "> <a className=" hover:shadow-gray-600  hover:shadow-inner" href={PROBLEMS_BASE_URL + titleSlug + "/editorial/"}>Solution</a></td>
                <td className="text-left text-md m-3 p-2">{Math.round(acRate)}%</td>
                <td className=
                    {
                        difficulty == "Easy" ? "text-left text-md m-3 p-2 text-green-600 font-semibold" : (difficulty == "Medium" ? "text-left text-md m-3 p-2 text-yellow-500 font-semibold" : "text-left text-md m-3 p-2 text-red-600 font-semibold")
                    
                }>{difficulty}</td>
                <td className="text-left text-md m-3 p-2">{topicTags.map(u => u.name).join(", ")}</td>
            </tr>
        </>
    )

}
export default QuestionListItem;