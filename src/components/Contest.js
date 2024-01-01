import useNetworkStatus from "../utils/useNetworkStatus";
import OfflineMessage from "./OfflineMessage";
const Contest=()=>{
    const isOnline=useNetworkStatus();
    return isOnline?(
        <h1>Contest</h1>
    ):<OfflineMessage/>
}
export default Contest;