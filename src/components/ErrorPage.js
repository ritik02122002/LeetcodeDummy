import { Link,useRouteError } from "react-router-dom";
const ErrorPage=()=>{
    const err=useRouteError();
    return (
        <div className="m-9 p-2">
<h1 className="text-2xl font-bold">Oops!</h1>
<h2 className="text-lg font-semibold">Something went wrong</h2>
<h3 className="text-lg">{err.status + " : "+ err.statusText}</h3>
<Link to="/"><p className="text-gray-600 hover:text-gray-800 hover:shadow-md shadow-gray-600 w-fit">Click here to go to home page</p></Link>

{console.log(err)}
    </div>
    )
}
export default ErrorPage;