// import React, { useState } from "react"
// import { InputsContainer, RegisterFormContainer, BtnLogin } from "./style"
// // import { TextField } from "@material-ui/core"
// import useForms from '../../Hooks/UseForms'
// import { register } from "../../services/user"
// import { useNavigate } from "react-router-dom"
// import axios from "axios"
// import { BASE_URL } from "../../Constants/BASE_URL"
// import { neutralColor, primaryColor } from "../../Constants/color/color"


// const RegisterForm = () => {
//     const navigate = useNavigate()
//     const {form, onChange, clear} = useForms({name: '', email: '', cpf: '', confirmation: ''})
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [cpf, setCpf] = useState('')
//     const [password, setPassword] = useState('')

//     const handleName = (e) => setName(e.target.value) 
//     const handleEmail = (e) => setEmail(e.target.value)
//     const handleCpf = (e) => setCpf(e.target.value) 
//     const handlePassword = (e) => setPassword(e.target.value)



//   const onSubmitForm = (event) => {
//       console.log(form)
//       event.preventDefault()
//       register(form, clear, navigate)
//   }

//   const signUp = () => {
//     const body = {
//       name: name,
//       email: email,
//       cpf: cpf,
//       password: password,
//     }
//     axios
//       .post(`${BASE_URL}signup`, body)
//       .then(res => {
//         localStorage.setItem('token', res.data.token)
//         console.log('Deu mt bom')
//         navigate('/profile/editAdress')
//       })
//       .catch((err) => {alert(err.response.data.message)}
//       )
//   }


//     return (
//        <form onSubmit={onSubmitForm}>
//            <RegisterFormContainer> 
//               <InputsContainer>
//                 <TextField
//                   name={'name'}
//                   value={name}
//                   placeholder={'Nome de Usuário'}
//                   onChange={handleName}
//                   label={'Nome'}
//                   variant={'outlined'}
//                   fullWidth
//                   margin={'normal'}
//                   required
//                   type={'name'}
//                 />
//                 <TextField
//                   name={'email'}
//                   placeholder={'Email de Usuário'} 
//                   value={email}
//                   onChange={handleEmail}
//                   label={'E-mail'}
//                   variant={'outlined'}
//                   fullWidth
//                   margin={'normal'}
//                   required
//                   type={'email'}
//                 />
//                 <TextField
//                   name={'cpf'}
//                   placeholder={'Cpf de Usuário'} 
//                   value={cpf}
//                   onChange={handleCpf}
//                   label={'CPF'}
//                   variant={'outlined'}
//                   fullWidth
//                   margin={'normal'}
//                   required
//                   type={'cpf'}
//                 />
//                 <TextField
//                   name={'password'}
//                   placeholder={'Senha'} 
//                   value={password}
//                   onChange={handlePassword}
//                   label={'Senha'}
//                   variant={'outlined'}
//                   fullWidth
//                   margin={'normal'}
//                   required
//                 />
//                 {/* <TextField
//                   name={'confirmation'}
//                   value={form.confirmation}
//                   onChange={onChange}
//                   label={'Confirmar'}
//                   variant={'outlined'}
//                   fullWidth
//                   margin={'normal'}
//                   required
//                   type={'password'}
//                 /> */}
//                 <BtnLogin
//                   type="submit"
//                   fullWidth
//                   variant={'contained'}
//                   color={neutralColor}
//                   onClick={signUp}
//                 >
//                   Criar
//                 </BtnLogin>
//               </InputsContainer>
//            </RegisterFormContainer>
//        </form>
//     )
//   }
//   export default RegisterForm