
import useNetworkStatus from '../utils/useNetworkStatus'
import OfflineMessage from './OfflineMessage'

export const Store=()=> {
 
  const isOnline=useNetworkStatus();
  return (
   
    isOnline?
      <div>Store</div>:<OfflineMessage/>
    
  )
}

export default Store