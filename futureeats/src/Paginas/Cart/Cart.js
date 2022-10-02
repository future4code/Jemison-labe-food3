import React, { useContext, useState, useEffect } from "react";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/Constants";
import { ButtonConfirmOrder, HeaderCart } from '../Cart/style';
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";





export const Cart = () => {

    const { restaurants, productsInCart, setProductsInCart, restaurantId, getActiveOrder } = useContext(GlobalContext);
    const [profile] = useRequestData([], `${BASE_URL}/profile`);
    const [paymentValue, setPaymentValue] = useState('');
    const token = window.localStorage.getItem("token");
    const [productData, setProductData] = useState([]);


    // Hook para renderizar produtos do carrinho
    useEffect(() => {
        productsInCart.map((product) => {
            return productData.push({ id: product.id, quantity: product.quantity });
        });
    }, []);

    // Código abaixo renderiza pedido
    const placeOrder = () => {
        const body = {
            products: productData,
            paymentMethod: paymentValue,
        };
        axios.post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, {
            headers: {
                auth: token,
            },
        })
            .then((response) => {
                alert("Pedido realizado!");
                getActiveOrder(`${BASE_URL}/active-order`);
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    };

    const handleClick = () => {
        placeOrder();
    };

    const renderProducts = productsInCart.map((product) => {
        return (
            <div>
                <img
                    src={product.photoUrl}
                    alt="miniatura do produto"
                />
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price.toFixed(2)}</p>
                </div>
                <div>
                    <button onClick={() => { removeProduct(product.id) }}>Remover</button>
                </div>
            </div>
        )
    });


    // Remove produto
    const removeProduct = (id) => {
        const updatedProductsInCart = productsInCart.map((product) => {
            if (product.id === id) {
                return {
                    ...product, quantity: product.quantity - 1,
                };
            }
            return product;
        }).filter((product) => product.quantity > 0);
        setProductsInCart(updatedProductsInCart)
    }


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
                        <p>{item.deliveryTime} minutos</p>
                    </div>
                );
            });

    // código para o frete e subtotal
    const deliveryPrice = restaurants.restaurants && restaurants.restaurants.filter((item) => {
                return item.id === restaurantId;
            })
            .map((item) => {
                return item.shipping;
            });

    const total = productsInCart.reduce((soma, item) => {
        soma = item.quantity * item.price + soma;
        return soma;
    }, 0);


    return (
        <div>
            <HeaderCart>Meu carrinho</HeaderCart>
            <h2>Endereço de Entrega</h2>
            <div>
                {profile.user && profile.user.address}
            </div>
            {cardRestaurantDetails}
            {/* VErifica se há produtos no carrinho */}
            {productData.length !== 0 ? (
                renderProducts
            ) : (
                <p>Carrinho vazio</p>
            )}
            {/* Abaixo renderiza valor do produto com o frete de entrega */}
            <div>
                <p>Frete: R${Number(deliveryPrice).toFixed(2)}</p>
                <div mt={2}>
                    <p>SUBTOTAL</p>
                    <p>R${(total + Number(deliveryPrice)).toFixed(2)}</p>
                </div>
            </div>
            <ButtonConfirmOrder>Confirmar</ButtonConfirmOrder>
        </div>
    )
}
