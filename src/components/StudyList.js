import { studyListData,STUDY_PLAN_BASE_URL } from "../constants"
const StudyListItem = ({ cover, highlight, name, slug }) => {
    console.log("studyListItem1")
    return (
        <a href={ STUDY_PLAN_BASE_URL+ slug}>
          {console.log("studyListItem2")}
            <div className="study-list-items h-24 flex border-gray-500 border-2 m-3 w-80 rounded-md hover:shadow-gray-500 hover:shadow-lg">
                <img src={cover} className=""></img>
                <div>
                    <h4 className="text-md font-semibold mx-2">{name}</h4>
                    <h5 className="text-sm mx-2">{highlight}</h5>
                </div>
            </div>
        </a>
    )
}

const StudyList = () => {
    {console.log("studyList1")}
    return (
        <>
           {console.log("studyList2")}
            <h1 className="text-center text-2xl p-2 mt-4 mb-2">Study List:</h1>
            <div className="study-list flex flex-wrap justify-center">
                {studyListData.map(data => {
                    return <StudyListItem {...data} key={data.name} />
                })
                }
            </div>
        </>)
}

export default StudyList;