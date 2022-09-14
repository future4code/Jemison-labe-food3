import React from "react"
import { ScreenContainer, LogoImage } from "./style"
import logo from '../../img/logo-future-eats-invert@2x.png'
import RegisterForm from "./RegisterForm"

const Register = () => {
    return(

        <ScreenContainer>
            <LogoImage src={logo}/>
            <RegisterForm/>
        </ScreenContainer>
    )
}

export default Register