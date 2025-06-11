import {useEffect} from "react";
import AutoRedirect from "../components/AutoRedirect.tsx";

const AutoRedirectPage = () => {

    useEffect(() => {
        document.title = 'CF7 Home Page'
    },[]);

    return (
        <>
            <AutoRedirect/>
            </>
    )
};
export default AutoRedirectPage;