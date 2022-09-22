import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../Routes/Coordinator";
import { ContainerLogo, Botao } from "./style";
import Logo from '../../Imagens/logo-future-eats@3x.png'


export const LogoPage = () => {

    const navigate = useNavigate()

    const loginPage = () => {
        goToLogin(navigate)
    }

    return(
        <ContainerLogo>
            <Botao onClick={() => loginPage()} > <img src={Logo} /> </Botao>
            
        </ContainerLogo>
    )
}

