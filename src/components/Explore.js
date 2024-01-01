import useNetworkStatus from "../utils/useNetworkStatus";
import OfflineMessage from "./OfflineMessage";

const Explore=()=>{
    const isOnline=useNetworkStatus();
    return isOnline?(
        <h1>Explore</h1>
    ):<OfflineMessage/>
}
export default Explore;