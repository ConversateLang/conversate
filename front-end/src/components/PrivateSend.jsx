
import { UserAuth } from "../context/AuthCon"
import { Navigate } from "react-router-dom"

const PrivateSend = ({children}) => {
    const {session} = UserAuth();
    if (session === undefined){
        return <h1>Loading...</h1>
    }

    return <>{session ? <>{children}</> : <Navigate to="/login" />}</>
};


export default PrivateSend