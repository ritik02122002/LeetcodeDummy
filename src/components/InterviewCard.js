
const InterviewCard = ({ cardData }) => {
    const { company, numParticipants, numPass, numInterview, stage } = cardData;
    return (

        <div className="interview-card border-2 border-black m-4 p-5 w-[300px] rounded-lg hover:shadow-gray-500 hover:shadow-lg" >
            <p style={{fontSize:"16px" , color:"rgb(100, 100, 102)"}}>{stage?.replace("_", " ")}</p>
            {company == null ? <p className="text-xl">Random question set from a real company.</p> : (<>
                <img src={company.imgUrl} className="interview-card-company_logo w-9"></img>
                <h2 className="text-xl font-semibold">{company?.name}</h2>
                <p >{company?.stage?.replace("_", " ")}</p>
                

            </>)}
            <div className="interview-card-quantitative_data text-gray-500 mt-9">
            {numInterview?
            (<p><i className="fa fa-file-text-o"></i> PROBLEM SETS: {numInterview}</p>):(<></>)
            }
            <p><i className="fa fa-user"></i> ATTEMPTED: {numParticipants} TIMES</p>
            <p><i className="fa fa-pie-chart"></i> SUCCESS RATE: {Math.round(numPass*10000/numParticipants)/100}%</p>
            </div>
            <button className="interview-card-btn text-orange-600 border-orange-400 border-2 px-5 py-3 my-4 tracking-widest">
            {company==null?
           "Start":"Premium"}</button>
        </div>
    )
}
export default InterviewCard;