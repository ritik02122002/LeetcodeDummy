import { useState } from "react";

const useLocalStorage = (key) => {
    let initValue = localStorage.getItem(key);
    if (initValue == null)
        initValue = false;
    if(initValue=="false")
    initValue=false;
    if(initValue=="true")
    initValue=true;
    const [localItem, setLocalItem] = useState(initValue);
let stringval=String(localItem);
    localStorage.setItem(key, stringval);



    return [localItem, setLocalItem]
}

export default useLocalStorage;