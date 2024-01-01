import { useParams } from "react-router-dom";
const SpecificProblem=()=>{
   
    const params=useParams();
    return (
        <>
        <h1>Problem number : {params.pno}</h1>
        {console.log(params)}
    </>
    )
}
export default SpecificProblem;