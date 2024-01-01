import useNetworkStatus from "../utils/useNetworkStatus";
import OfflineMessage from "./OfflineMessage";
import { discussData } from "../constants";
import { useState } from "react";

const DiscussBanners=({data,isVisible,setIsVisible})=>{
// const [isVisible,setIsVisible]=useState(true);
    return (
        <div className="hover:shadow-inner hover:shadow-gray-600 mt-3 mx-auto p-2 flex justify-between " onClick={()=>{
            if(isVisible)
            setIsVisible(false)
            else
            setIsVisible(true)
            }}>
        <div>
        
        <h3 className="text-xl font-semibold p-1 m-1">{data.title}</h3>
        {isVisible &&
        <h4 className="text-lg p-1 m-1 text-gray-700">{data.description}</h4>
        }
        </div>
        {isVisible?
        <i className="fa fa-angle-up p-1 m-1" ></i>
        :
        <i className="fa fa-angle-down p-1 m-1" ></i>
        }
        </div>
    )
}

const Discuss=()=>{
    const isOnline=useNetworkStatus();
const [bannerVisible,setBannerVisible]=useState("none");
    return(isOnline?(<>
    <div className="bg-gray-900 p-10 outline-gray-900 outline-8">
    <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" className="m-auto h-52 p-10"></img>
    <h3 className="text-white mx-auto text-5xl w-max mt-4">Leetcode Discuss</h3>
    <h4 className="text-white/[0.6] mx-auto text-md w-max m-3">Discuss technical interviews with other Leetcoders.</h4>
    </div>
    <div className="my-10 w-[60%] shadow-md shadow-gray-600 m-auto rounded-md">

{discussData.map((data)=><DiscussBanners data={data} key={data.title} isVisible={bannerVisible==data.slug} setIsVisible={(state)=>{
if(state) setBannerVisible(data.slug)
else
setBannerVisible("none")


}}/>)}
    </div></>):<OfflineMessage/>)
}
export default Discuss;