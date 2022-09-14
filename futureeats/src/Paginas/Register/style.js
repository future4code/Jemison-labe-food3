import styled from "styled-components"

export const ScreenContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100vw;
   margin-top: 10vh;
`

export const InputsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 80vw;
   max-width: 450px;
   margin-bottom: 20px;
`

export const RegisterFormContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 80vw;
   max-width: 450px;
   margin-bottom: 20px;
`

export const RegisterButtonContainer = styled.div`
   width: 80vw;
   max-width: 450px;
`

export const LogoImage = styled.img`
   width: 104px;
   height: 58px;
`

export const BtnLogin = styled.button`
margin: auto;
border-radius: 2px;
height: 42px;
width: 328px;
background: #5cb646;
border-color: #5CB646;
color: black;
transition: 1.3s;

    :hover{
        background: #5CB646 ;
        color: #000000;
        opacity: 70%;
    }
    
;

`