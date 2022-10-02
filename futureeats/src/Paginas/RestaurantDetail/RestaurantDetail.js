import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../../Constants/Constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerCard,
  Image,
  Name,
  Description,
  Price,
  AddButton,
  AdicionarText,
  ContainerDiv,
  FlexBox,
  Category,
  BoxPriceAdd,
  Header,
  RestaurantName
} from "./style";

export const RestauranteDetail = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [products, setSelectedProducts] = useState([]);
  const navigate = useNavigate();

  const goToRestaurantsPage = () => {
    navigate("/restaurants");
  };

  const addToCart = (item) => {
    const selectedProducts = [...products, item];
    setSelectedProducts(selectedProducts);
    console.log(selectedProducts);
    alert("Produto Adicionado ao Carrinho");
  };

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IndKU1RKVEhWRmV4RGdERWREMzNQIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTEzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIERvbSBBdmVsYXIsIDEsIDIgLSBWaWxhIE4uIFZpdG9yaWEiLCJpYXQiOjE2NjQ0OTgwNTZ9.yjhv5NRDxXip9cZXbiL3CAAvhCUJ1uUvdUpO-KMdLrc";
    axios
      .get(`${BASE_URL}/restaurants/1`, {
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
      <span>Endereço</span>
      <ContainerDiv>
        <Header>
          <button onClick={goToRestaurantsPage}>Voltar</button>
        </Header>
        <RestaurantName>Restaurante</RestaurantName>
        {restaurantList.map((item, index) => (
          <div>
            <Category>{item.category}</Category>
            <ContainerCard key={index}>
              <FlexBox>
                <Image
                  width="150px"
                  src={item.photoUrl}
                  alt="miniatura do produto"
                />
                <div>
                  <div>
                    <Name>{item.name}</Name> <br />
                    <Description>{item.description}</Description> <br />
                  </div>
                  <BoxPriceAdd>
                    <Price>R${item.price}</Price>
                    <AddButton>
                      <button onClick={() => addToCart(item)}>
                        <AdicionarText>Adicionar</AdicionarText>
                      </button>
                    </AddButton>
                  </BoxPriceAdd>
                </div>
              </FlexBox>
            </ContainerCard>
          </div>
        ))}
      </ContainerDiv>
    </>
  );
};