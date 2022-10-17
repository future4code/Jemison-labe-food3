import React, {useContext, useEffect} from "react";
import {    HeaderProfile, Info, Info2, ProfileDiv, Wrapper, FooterProfile} from './style'
import { goToCart, goToRestaurants, goToLogin, goToEditAdress, goToEditData } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { TitleDiv,BackImg,Subtitle } from "../ProfileEditAdress/style";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import homepageGray from '../../Imagens/homepageGray.png'
import Cart_gray from '../../Imagens/shopping-cart_gray.svg'
import avatarGreen from '../../Imagens/avatarGreen.png'
import edit from '../../Imagens/edit.png'
import back from '../../Imagens/back.png'

import logouticone from '../../Imagens/logouticone.jpeg'
import { IconeLogout } from "./style";

export const Profile = () => {

    
    const navigate = useNavigate()
    useProtectedPage();
    
    const logout = () => {
        localStorage.removeItem('token')
        goToLogin(navigate)
    }
    
    const reload = () => {
        window.location.reload()
    }

    const cart = () => {
        goToCart(navigate)
    }

    const home = () => {
        goToRestaurants(navigate)
    }

    


    return(

        <ProfileDiv>
        <TitleDiv>
          <BackImg src={back} onClick={() => {goToRestaurants(navigate)}} />
          <Subtitle>Meu Perfil</Subtitle>

          

          <IconeLogout src={logouticone} onClick={logout}></IconeLogout>
          
        </TitleDiv>

        <br/>
        <br></br>
        <hr></hr>
  
                 
                 <Info2> Informações Pessoais </Info2>
             
                 
              <Wrapper>
             
                  <Info>NOME</Info>
                  <img src={edit} onClick={() => {goToEditData(navigate)}} />
  
                  
  
              </Wrapper>
                  <Info>EMAIL</Info>
                  <Info>CPF</Info>
                  <br></br>
                  <hr></hr>
  
              <Info2>Endereço Cadastrado</Info2>
  
              <Wrapper>
                  <Info>ENDEREÇO</Info>
                  <img src={edit} onClick={() => {goToEditAdress(navigate)}} />
  
              </Wrapper>
  
              <br></br>
              <hr></hr>

              <div>

              <Info2>Ultimos Pedidos</Info2>
              <Info>HISTÓRICO DE PEDIDOS FINALIZADOS </Info>
                
                  
                  
              </div>

   

        

            <FooterProfile>
                <div>
                    <img src={homepageGray} onClick={home} />
                </div>
                <div>
                    <img src={Cart_gray} onClick={cart} />
                </div>
                <div>
                    <img src={avatarGreen} onClick={reload} />
                </div>  
            </FooterProfile>

            </ProfileDiv>
    )
}
