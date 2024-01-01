import InterviewCard from './InterviewCard'
import { assesmentData } from '../constants';
import useNetworkStatus from '../utils/useNetworkStatus';
import OfflineMessage from './OfflineMessage';
const Interview = () => {
  const isOnline=useNetworkStatus();
  return (
isOnline?(
      <div className="interview-card-list flex flex-wrap m-auto p-5 w-[80%]">
          {assesmentData.data.interviewCardList.map((assesment) => <InterviewCard cardData={assesment} key={assesment.id}/>)}

      </div>):(<OfflineMessage/>)

  )
}

export default Interview;