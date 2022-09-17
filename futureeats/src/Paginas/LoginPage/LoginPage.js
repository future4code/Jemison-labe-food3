Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@rafix923 
future4code
/
Jemison-labe-food3
Public
generated from future4code/labe-food-template
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Jemison-labe-food3/futureeats/src/Paginas/LoginPage/LoginPage.js /
@Guilherme-Azevedo-Melim
Guilherme-Azevedo-Melim estyled login feito
Latest commit 2a72247 23 hours ago
 History
 2 contributors
@Guilherme-Azevedo-Melim@Antonio800799
93 lines (85 sloc)  3.43 KB

import React, {useState} from "react";
import {useForm} from '../../Hooks/UseForms'
import { Containerlogin, ContainerForm } from "./style";
import Logo from '../../Imagens/logo-future-eats@3x.png'
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
  import {FaEye, FaEyeSlash} from 'react-icons/fa'


export const LoginPage = () => {

    const [form, onChangeInput, clear] = useForm({
        email:'',
        password:''
    })

    const [emailValid, setEmailValid] = useState(true)
    const [password, setPassword] = useState(false)
    const [show, setShow] = useState(true)

    // função que valida o email
    const onSubmit = (e)=>{
        e.preventDefault()
        console.log(form)
        setEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email))
        setShow(/.{6,}/.test(form.password))
    }

    // Função que altera se mostra a senha ou não
    const onClickPassaword = () =>{
        setPassword(!password)
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
                    <FormControl isInvalid={!show}>
                        <FormLabel>Senha</FormLabel>
                            <InputGroup size='md'>
                                <Input as='input'
                                    name='password'
                                    value={form.password}
                                    onChange={onChangeInput}
                                    pr='4.5rem'
                                    type={password ? 'text' : 'password'}
                                    placeholder='Senha com no minimo 6 caracteres'
                                />
                                <InputRightElement width='4.5rem'>
                                    <IconButton 
                                    icon={password ? <FaEyeSlash/> : <FaEye/> }
                                    h='1.75rem' 
                                    size='sm' 
                                    onClick={onClickPassaword}
                                    />
                                </InputRightElement>
                            </InputGroup>
                                { !show ? (
                                    <FormErrorMessage as='p'>
                                    Senha inválida
                                    </FormErrorMessage>
                                ) : undefined}
                    </FormControl>
                        <Button type='submit' variant='login' >Enviar</Button>
                    </form>
                </ContainerForm>
        </Containerlogin>
    )
}
