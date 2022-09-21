import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../Routes/Coordinator";

export const LogoPage = () => {

    const navigate = useNavigate()

    const loginPage = () => {
        goToLogin(navigate)
    }

    return(
        <div>
            <h1>TELA INICIAL</h1>
            <button onClick={() => loginPage()} >LOGIN</button>
            
        </div>
    )
}

