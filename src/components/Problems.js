import Carousel from "./Carousel";
import StudyList from "./StudyList";
import QuestionList from "./QuestionList";
import { Outlet } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import OfflineMessage from "./OfflineMessage";

const Problems = () => {
    const isOnline=useNetworkStatus();
    return (
        isOnline?
        <>
            <Carousel />
            <StudyList />
            <Outlet/>
            <QuestionList />

        </>
        :(<OfflineMessage/>)

    )
}

export default Problems;