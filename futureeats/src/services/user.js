import axios from "axios"
import { BASE_URL } from "../Constants/Constants"
import { goToRegisterAdress } from '../Routes/Coordinator'   
 
export  const register = (body, clear, navigate) => {  
    axios.post(`${BASE_URL}signup`, body)
    .then((res) => {
            localStorage.setItem('token', res.data.token)       
            clear()       
            goToRegisterAdress(navigate)     
        })     
            .catch((err) => alert('erro no login'))   
        }