import { useState } from "react"
import { questionData } from "../constants";


const SearchBar = (props) => {


    { console.log("searchbar1") }
    const setSearchText = props.setSearchText;
    const searchText = props.searchText;

    return (
<div >
        <input type="text" placeholder={"Search...."} value={searchText} className="search-bar border-gray-200 border-2 focus:outline-none focus:border-gray-400 focus:border-2 focus:rounded-sm mx-2 p-1" onChange={(e) => {
            setSearchText(e.target.value)
        }
       

        } ></input>
        {/* <i className="fa fa-search"></i> */}
</div>

    )

}

export default SearchBar;
