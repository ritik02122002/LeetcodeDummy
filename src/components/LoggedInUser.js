import { userData } from "../constants";
const LoggedInUser = () => {
    const data = userData.data.matchedUser;
    return (
        <div className="w-max m-6 ">
            <img src={data.profile.userAvatar} alt="avatar" className="w-40 rounded-lg border-pink-400 border-2 m-2"></img>
            <h3 className="text-xl text-left m-1 font-semibold">username: {data.username}</h3>
            <h4 className="text-lg text-left m-1">Name: {data.profile.realName}</h4>
            <h4 className="text-lg m-1">College: {data.profile.school}</h4>
            <h4 className="text-lg text-left m-1">Ranking: {data.profile.ranking}</h4>
            <h4 className="text-lg text-left m-1">Skills: {data.profile.skillTags.join(", ")}</h4>
        </div>

    )
}
export default LoggedInUser;