import React from 'react'
import useForms from '../../Hooks/UseForm'
import axios from "axios";
import {BASE_URL} from '../../Constants/Constants'
import useProtectedPage from '../../Hooks/UseProtectedPage'
import {goToCart, goToRestaurants, goToProfile} from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom';
import homepageGray from '../../Imagens/homepageGray.png'
import Cart_gray from '../../Imagens/shopping-cart_gray.svg'
import avatarGreen from '../../Imagens/avatarGreen.png'
import back from '../../Imagens/back.png'
import {FooterProfile} from '../Profile/style'
import { MainDiv, Form, Subtitle, BackImg, TitleDiv   } from '../ProfileEditAdress/style';



 export const ProfileEditData = () => {

  useProtectedPage()
    const reload = () => {
    window.location.reload()
  }

  const navigate = useNavigate()

  const { form, onChange, clenFields} = useForms({ name: "", email: "", cpf: ""});

  const handleSubmission = (event) => {  
    const token = localStorage.getItem("token");

      event.preventDefault()  
      axios
    .put(`${BASE_URL}/profile`, form, {
      headers: {
        auth: token,
      },
    })
    .then((res) => {
      alert('Seus dados pessoais foram alterados com sucesso!');
      navigate('/profile');
      reload()
    })
  /*   .catch((err) => {
      alert(err.response.data);
    }); */
  }

  return (
    <MainDiv>
      <TitleDiv>
        <BackImg src={back} onClick={() => {goToProfile(navigate)}} />
        <Subtitle>Dados Pessoais</Subtitle>
      </TitleDiv>
      <Form onSubmit={handleSubmission}>

      <input
          value={form.name}
          placeholder="Nome"
          name="name"
          onChange={onChange}
          label="Nome"
          variant="outlined"
          required
        />
       <input
          value={form.email}
          placeholder="email"
          name="email"
          onChange={onChange}
          label="email"
          variant="outlined"
          required
        />
        
        <input
          value={form.cpf}
          placeholder="CPF"
          name="cpf"
          onChange={onChange}
          label="cpf"
          variant="outlined"
          required
        />

          <button
          type={"submit"}
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
    </MainDiv>
  )
}
