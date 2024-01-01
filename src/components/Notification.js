
import useNetworkStatus from '../utils/useNetworkStatus'
import OfflineMessage from './OfflineMessage';

export const Notification=()=>{

 
const isOnline=useNetworkStatus();

    return (isOnline?(
      <div>Notification</div>
    ):<OfflineMessage/>)
  
}

export default Notification;