import { carouselData } from "../constants";
import { useEffect, useState } from "react";
import ShimmerUICarousel from "./ShimmerUICarousel";
import useFetchCarouselData from "../utils/useFetchCarouselData";
import CarouselItems from "./CarouselItems";

const Carousel = () => {
    
    const carData=useFetchCarouselData();

    return carData.length==0? <ShimmerUICarousel/>
    :(
        <div className="carousel-items flex justify-center flex-wrap m-5">
            {carData.map((data,index) => {
                return <CarouselItems carouselData={data} key={index}/>
            })
            }
        </div>
    )
}

export default Carousel;