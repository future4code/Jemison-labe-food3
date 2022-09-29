
import axios from "axios";

export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodA'


import axios from 'axios'
export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodA'

export const ListRestaurant = async () =>{
    const {data} = await axios.get(`${BASE_URL}/restaurants`,
    {
      headers:{
        auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IndKU1RKVEhWRmV4RGdERWREMzNQIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTEzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIERvbSBBdmVsYXIsIDEsIDIgLSBWaWxhIE4uIFZpdG9yaWEiLCJpYXQiOjE2NjQwNzY2MzJ9.nK7EoUz-vq7L0l2v_NLL5pWLLSAv_8WIsDxPKYbr9tg"
      }
    });
  return data;
  }
  

