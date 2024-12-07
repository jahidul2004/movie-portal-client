import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateLoginRegister = ({ children }) => {

    const { user } = useContext(AuthContext);

    if(!user){
        return children;
    }

    return (
        <Navigate to={'/'}></Navigate>
    );
};

export default PrivateLoginRegister;