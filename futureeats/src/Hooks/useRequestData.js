import { useEffect, useState } from "react";
import axios from 'axios';

const useRequestData = (url)=>{
    const [data, setData] = useState();

    const token = localStorage.getItem("token");

    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setData(response.data)
        }).catch((error)=>{
            alert('Ocorreu um erro, tente novamente')
        })
    },[url, token]);
return data
}
export default useRequestData;