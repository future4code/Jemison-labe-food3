import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../../Constants/Constants";
import { useState } from "react";
import { ContainerCard, Image} from "./styled";

export const RestauranteDetail = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [products, setSelectedProducts] = useState([]);

  const addToCart = (item) => {
    const selectedProducts = [...products, item];
    setSelectedProducts(selectedProducts);
    // console.log(selectedProducts)
    alert("Produto Adicionado ao Carrinho");
  };

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IndKU1RKVEhWRmV4RGdERWREMzNQIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTEzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIERvbSBBdmVsYXIsIDEsIDIgLSBWaWxhIE4uIFZpdG9yaWEiLCJpYXQiOjE2NjQ0OTgwNTZ9.yjhv5NRDxXip9cZXbiL3CAAvhCUJ1uUvdUpO-KMdLrc";
    axios
      .get(`${BASE_URL}/restaurants/1}`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        setRestaurantList(response.data.restaurant.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <header>
        <span className="Title Text-Style">Restaurante</span>
      </header>
      <span>Endereço</span>
      {restaurantList.map((item, index) => (
        <ContainerCard key={index}>
          <div>
            <span>{item.category}</span>
          </div>
          <div>
            <span>
              <Image
                src={item.photoUrl}
                alt="miniatura do produto"
              />
            </span>
          </div>
          <div>
            <span>{item.name}</span> <br/>
            <span>{item.description}</span> <br/>
            <span>R${item.price}</span>
          </div>
<<<<<<< HEAD
          <button onClick={() => addToCart(item)}>Adicionar</button>
        </div>
=======
          <button onClick={() => onClickAddButton}>Adicionar</button>
        </ContainerCard>
>>>>>>> 25a85463552d64c4ac017b81c3132c2858936254
      ))}

      <button>VOLTAR</button>
    </>

  )};
