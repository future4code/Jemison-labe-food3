import React, { useState } from "react"
import useForms from '../../Hooks/UseForm'
import { register } from "../../services/user"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../Constants/Constants"
import { Containerlogin,ContainerForm} from "../LoginPage/style"
import Logo from '../../Imagens/big2.png'
import { InputsContainer, RegisterFormContainer,input,Button} from "./style"


const RegisterForm = () => {
  
    const navigate = useNavigate()
    const {form, onChange, clear} = useForms({name: '', email: '', cpf: '', confirmation: ''})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    const handleName = (e) => setName(e.target.value) 
    const handleEmail = (e) => setEmail(e.target.value)
    const handleCpf = (e) => setCpf(e.target.value) 
    const handlePassword = (e) => setPassword(e.target.value)



  const onSubmitForm = (event) => {
      console.log(form)
      event.preventDefault()
      register(form, clear, navigate)
  }

  const signUp = () => {
    const body = {
      name: name,
      email: email,
      cpf: cpf,
      password: password,
    }
    axios
      .post(`${BASE_URL}/signup`, body)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        console.log('Deu bom')
        navigate('/profile/editAdress')
      })
      
      

      
  }


    return (

       /*  <Containerlogin>
        <ContainerForm>
        <FormControl> */
            
             <form onSubmit={onSubmitForm}>
             <RegisterFormContainer> 
              <InputsContainer>
             <img src={Logo} alt='Logo da Future eats'/>
              

             <br/>
                  <input
                  name='name'
                  value={name}
                  placeholder='NOME COMPLETO'
                  onChange={handleName}
                  required
                 />
                

                <br/>
                <input
                  name='email'
                  placeholder='EMAIL'
                  value={email}
                  onChange={handleEmail}
                  label='E-mail'
                  required
                  
                  
                />
                  <br/>
                
                <input
                  name='cpf'
                  placeholder='CPF'
                  value={cpf}
                  onChange={handleCpf}
                  label='CPF'
                  required
                 
                />
                <br/>
                <input
                  name='password'
                  placeholder='SENHA'
                  value={password}
                  onChange={handlePassword}
                  label='Senha'
                  required
                 
                />
                <br/>
                <button
                  type="submit"
                  fullWidth
                  variant='login'
                  onClick={signUp}
                >
                  Cadastrar 
                </button>
                </InputsContainer>
       </RegisterFormContainer> 
            
       </form>
       
              

       /* </FormControl>
       </ContainerForm>
       </Containerlogin> */
       


      
    )
  }
  export default RegisterForm