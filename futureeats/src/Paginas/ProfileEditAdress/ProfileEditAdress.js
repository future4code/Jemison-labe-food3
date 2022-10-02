import React from 'react'
import useForms from '../../Hooks/UseForm'
import axios from "axios";
import { BASE_URL } from '../../Constants/Constants';
import useProtectedPage from '../../Hooks/UseProtectedPage'
import {goToCart, goToRestaurants, goToProfile} from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom';
import homepageGray from '../../Imagens/homepageGray.png'
import Cart_gray from '../../Imagens/shopping-cart_gray.svg'
import avatarGreen from '../../Imagens/avatarGreen.png'
import back from '../../Imagens/back.png'
import {FooterProfile} from '../Profile/style'
import { MainDiv, Form, Subtitle, BackImg, TitleDiv   } from './style';

import { Containerlogin,ContainerForm} from "../LoginPage/style"






export const ProfileEditAdress = () => {

  useProtectedPage()
    const reload = () => {
    window.location.reload()
  }

  const navigate = useNavigate()

  const { form, onChange, cleanFields } = useForms({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""});

  const submitForm = (event) => {  
    const token = localStorage.getItem("token");

      event.preventDefault()  
      axios
    .put(`${BASE_URL}/address`, form, {
      headers: {
        auth: token,
      },
    })
    .then((res) => {
      localStorage.setItem('token', res.data.token)

      alert('Seu endereço foi alterado com sucesso!');
      navigate('/profile');
      reload()
    })
    .catch((err) => {
      alert(err.response.data);
    });
  }
  return (
      <div>

       <TitleDiv>
        <BackImg src={back} onClick={() => {goToProfile(navigate)}} />
        <Subtitle>Endereço</Subtitle>
      </TitleDiv>

    


    

       
      
       
      <Form onSubmit={submitForm}>
      
      <input
          value={form.street}
          placeholder="RUA"
          name="street"
          onChange={onChange}
          label="Logadouro"
          variant="outlined"
          required
        />
       <input
          value={form.number}
          placeholder="NUMERO"
          name="number"
          onChange={onChange}
          label="Número"
          variant="outlined"
          pattern="[.\s\w]{1,}"
          required
        />
        
        <input
          value={form.complement}
          placeholder="COMPLEMENTO"
          name="complement"
          onChange={onChange}
          label="Complemento"
          variant="outlined"
          
        />
        
        <input
          value={form.neighbourhood}
          placeholder="BAIRRO"
          name="neighbourhood"
          onChange={onChange}
          label="Bairro"
          variant="outlined"
          />
        <input
          value={form.city}
          placeholder="CIDADE"
          name="city"
          onChange={onChange}
          label="Cidade"
          variant="outlined"
          required
        />
        <input
          value={form.state}
          placeholder="ESTADO"
          name="state"
          onChange={onChange}
          label="Estado"
          variant="outlined"
          required
        />

          <button
          type={'submit'} variant={'login'}
          >
            SALVAR
          </button>
          
        </Form>
        
        

        <FooterProfile>
                <div>
                    <img src={homepageGray} onClick={() => {goToRestaurants(navigate)}} />
                </div>
                <div>
                    <img src={Cart_gray} onClick={() => {goToCart(navigate)}} />
                </div>
                <div>
                    <img src={avatarGreen} onClick={reload} />
                </div>  
          </FooterProfile>
  


    </div> 
  )

}

