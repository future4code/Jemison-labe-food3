import React, { useContext, useState, useEffect } from "react";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/Constants";
import { ButtonConfirmOrder, HeaderCart } from '../Cart/style';
import { GlobalContext } from "../../context/GlobalContext";





export const Cart = () => {

    const { restaurants, productsInCart, setProductsInCart, restaurantId, getActiveOrder } = useContext(GlobalContext);
    const [profile] = useRequestData([], `${BASE_URL}/profile`);
    const [paymentValue, setPaymentValue] = useState('');
    const token = window.localStorage.getItem("token");
    const [productData, setProductData] = useState([]);


    // Hook para renderizar produtos do carrinho
    useEffect(() => {
        productsInCart.map((product) => {
            productData.push({ id: product.id, quantity: product.quantity });
        });
    }, []);

    

    const cardRestaurantDetails =
        restaurants.restaurants &&
        restaurants.restaurants
            .filter((item) => {
                return item.id === restaurantId;
            })
            .map((item) => {
                return (
            <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.address}</h2>
          <p>{ item.deliveryTime } minutos</p>
         
            </div >
          );
        });


return (
    <div>
        <HeaderCart>Meu carrinho</HeaderCart>
        <h2>Endereço de Entrega</h2>
        <div>
            {profile.user && profile.user.address}
        </div>
        {cardRestaurantDetails}
        <>
            <h3>SubTotal:R$ 0,00</h3>
        </>
        <ButtonConfirmOrder>Confirmar</ButtonConfirmOrder>
    </div>
)
}
