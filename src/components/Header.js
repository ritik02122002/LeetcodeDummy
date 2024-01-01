import { useState,useContext } from "react"
import { APP_LOGO } from "../constants"
import { Link } from "react-router-dom";
import { userData } from "../constants";
import useNetworkStatus from "../utils/useNetworkStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { changeTheme } from "../utils/themeSlice";
import { useDispatch } from "react-redux";

const Header = () => {
    console.log("headerlist")
    // const isLoggedIn = props.isLoggedIn;
    // const setIsLoggedIn = props.setIsLoggedIn;
const {isLoggedIn,setIsLoggedIn}=useContext(userContext);
    const [menu, setMenu] = useState(window.location.pathname);

const theme=useSelector(store=>store.theme.isLightTheme)
const dispatch=useDispatch();
const handleTheme=()=>{
    dispatch(changeTheme());
}

console.log(theme)
    return (<div className="header-list flex justify-between m-3">
        <ul className="list1 flex">
            <Link to="/" onClick={() => setMenu("/")}><li className="p-2 my-1"><img className="logo h-9 " src={APP_LOGO}></img></li></Link>
            {menu.toLowerCase() == "/explore" ?
                (<Link to="/explore" onClick={() => setMenu("/explore")}><li className="p-2 font-semibold border-b-2 border-b-black my-1 text-lg" >Explore </li></Link>)
                :
                (<Link to="/explore" onClick={() => setMenu("/explore")}><li className="p-2 my-1 text-lg" >Explore </li></Link>)
            }

            {menu.toLowerCase() == "/problems" ?
                (<Link to="/problems" onClick={() => setMenu("/problems")}><li className="p-2 font-semibold border-b-2 border-b-black my-1 text-lg" >Problems </li></Link>)
                :
                (<Link to="/problems" onClick={() => setMenu("/problems")}><li className="p-2 my-1 text-lg" >Problems</li></Link>)
            }

            {menu.toLowerCase() == "/contest" ?
                (<Link to="/contest" onClick={() => setMenu("/contest")}><li className="p-2 font-semibold border-b-2 border-b-black my-1 text-lg" >Contest</li></Link>)
                :
                (<Link to="/contest" onClick={() => setMenu("/contest")}><li className="p-2 my-1 text-lg" >Contest</li></Link>)
            }

            {menu.toLowerCase() == "/discuss" ?
                (<Link to="/discuss" onClick={() => setMenu("/discuss")}><li className="p-2 font-semibold border-b-2 border-b-black my-1 text-lg">Discuss</li></Link>)
                :
                (<Link to="/discuss" onClick={() => setMenu("/discuss")}><li className="p-2 my-1 text-lg" >Discuss</li></Link>)
            }

            {menu.toLowerCase() == "/interview" ?
                (<Link to="/interview" onClick={() => setMenu("/interview")}><li className="p-2 font-semibold border-b-2 border-b-black my-1 text-lg">Interview </li></Link>)
                :
                (<Link to="/interview" onClick={() => setMenu("/interview")}><li className="p-2 my-1 text-lg" >Interview</li></Link>)
            }

            {menu.toLowerCase() == "/store" ?
                (<Link to="/store" onClick={() => setMenu("/store")}><li className="p-2 font-semibold border-b-2 border-b-black my-1 text-lg">Store</li></Link>)
                :
                (<Link to="/store" onClick={() => setMenu("/store")}><li className="p-2 my-1 text-lg" >Store</li></Link>)
            }
           


        </ul>
        <ul className="list2 flex">
        {/* <li>{String(theme)}</li> */}
        
        <li className="p-2 my-1 text-2xl" onClick={()=>handleTheme()}>{theme?(<i className="fa fa-sun-o"></i>):(<i className="fa fa-moon-o fill-slate-950"></i>)}</li>
            {menu.toLowerCase() == "/notification" ?
                (<Link to="/notification" onClick={() => setMenu("/notification")}><li className="p-2 font-semibold border-b-2 border-b-black my-1 text-lg" >Notification</li></Link>)
                :
                (<Link to="/notification" onClick={() => setMenu("/notification")}><li className="p-2 my-1 text-lg" >Notification</li></Link>)
            }
            {isLoggedIn ? (<><Link to="/login"><li className="p-2 my-1 text-lg"><img src={userData.data.matchedUser.profile.userAvatar} style={{ width: "30px", borderRadius: "50%" }}></img></li></Link><Link to="/" onClick={() => {
               setMenu("/")
                setIsLoggedIn(false)
                // localStorage.setItem("isLogged", "false")
            }}><li className="p-2 my-1 text-lg">Logout</li></Link></>) : (<Link to="/login"><li className="p-2 my-1 text-lg">Login</li></Link>)}
        </ul>

    </div>)
}


export default Header;