import { useEffect, useState } from "react"

const useNetworkStatus = () => {

    const [isOnline, setIsOnline] = useState(window.navigator.onLine);
    const online = () => {
        setIsOnline(true);
    }
    const offline = () => {
        setIsOnline(false);
    }

    useEffect(() => {

        window.addEventListener("online", online);
        window.addEventListener("offline", offline);

        return () => {
            window.removeEventListener("online", online);
            window.removeEventListener("offline", offline);

        }

    }, [])

    return isOnline;
}

export default useNetworkStatus;