import useNetworkStatus from "../utils/useNetworkStatus";
import OfflineMessage from "./OfflineMessage";

const Home=()=>{
    const isOnline=useNetworkStatus();
    return isOnline?(<h1>home</h1>):<OfflineMessage/>
}

export default Home;