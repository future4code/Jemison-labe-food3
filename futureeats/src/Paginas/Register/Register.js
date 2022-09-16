import React from "react"
import { ScreenContainer, LogoImage } from "./style"
import logo from '../../Imagens/logo-future-eats@2x.png'
// import RegisterForm from "./RegisterForm"

export const Register = () => {
    return(

        <ScreenContainer>
            <LogoImage src={logo}/>
            {/* <RegisterForm/> */}
        </ScreenContainer>
    )
}