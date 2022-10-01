import React, {useState} from "react";
import {useForm} from '../../Hooks/UseForms'
import { Containerlogin, ContainerForm, Botao } from "./style";
import Logo from '../../Imagens/big2.png'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import { BASE_URL } from "../../Constants/Constants";
import axios from "axios";
import { goToRestaurants, goToSignup } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
    InputRightElement,
    InputGroup,
    FormErrorMessage,
    Button,
    IconButton
} from '@chakra-ui/react'



export const LoginPage = () => {

    const navigate = useNavigate()

    const [form, onChangeInput] = useForm({
        email:'',
        password:''
    })

    const [emailValid, setEmailValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)
    const [show, setShow] = useState(false)

    // Axios puxando a API do login, daqui se extrai o TOKEN, OBS:Pega com o LocalStorage.set
    const login = (body) =>{
        axios.post(`${BASE_URL}/login`,body)
            .then((response)=>{
                goToRestaurants(navigate)
            }).catch((error)=>{
                console.log(error)
            })
    }

    // função que verifica se o email e senha estão corretos, se sim, entra na pagina Retaurantes AUTOMATICAMENTE.
    const onSubmit = (e)=>{
        e.preventDefault()
        setEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email))
        setPasswordValid(/.{6,}/.test(form.password))
            emailValid && form.password && login({
                email: form.email,
                password: form.password
            })
    }

    // Função que mostra senha ou esconde.
    const onClickPassaword = () =>{
        setShow(!show)
    }

    return(
        <Containerlogin>
                <ContainerForm>
                    <form onSubmit={onSubmit}>
                    <img src={Logo} alt='Logo da Future eats'/>
                        <FormControl isInvalid={!emailValid}>
                            <FormLabel>Email</FormLabel>
                            <Input as='input'
                                name='email'
                                value={form.email}
                                onChange={onChangeInput}
                                placeholder='E-mail'
                            />
                        { !emailValid ? (
                                <FormErrorMessage as='p'>
                                E-mail inválido.
                                </FormErrorMessage>
                            ) : undefined}
                        </FormControl>
                    <FormControl isInvalid={!passwordValid}>
                        <FormLabel>Senha</FormLabel>
                            <InputGroup size='md'>
                                <Input as='input'
                                    name='password'
                                    value={form.password}
                                    onChange={onChangeInput}
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Senha'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Botao>
                                        <IconButton 
                                        icon={ show ? <FaEyeSlash/> : <FaEye/> }
                                        h='1.75rem' 
                                        size='sm' 
                                        onClick={onClickPassaword}
                                        />
                                    </Botao> 
                                </InputRightElement>
                            </InputGroup>
                                { !passwordValid ? (
                                    <FormErrorMessage as='p'>
                                    Senha deve conter 6 digitos
                                    </FormErrorMessage>
                                ) : undefined}
                    </FormControl>
                        <Button type='submit' variant='login' >Enviar</Button>
                        <Button type='button' variant='login' onClick={() => goToSignup(navigate)} >Clique aqui para se cadastrar.</Button>
                    </form>
                </ContainerForm>
        </Containerlogin>
    )
}