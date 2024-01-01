import { useState,useEffect } from "react";
const useFetchCarouselData=()=>{

    const [carData,setCarData]=useState([]);
useEffect(()=>{
        fetch("https://leetcode.com/api/banner/problemset_primary/")           //api for the get request
        .then(response => response.json())
        .then(data => {setCarData(data)});
},[])

return carData;

}

export default useFetchCarouselData;