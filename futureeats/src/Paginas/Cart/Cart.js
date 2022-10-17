import React, { useContext, useState, useEffect } from "react";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/Constants";
import { ButtonConfirmOrder, HeaderCart } from '../Cart/style';
import { GlobalContext } from "../../context/GlobalContext";
import axios from 'axios'


export const Cart = () => {

    const { restaurants, productsInCart, setProductsInCart, restaurantId, getActiveOrder } = useContext(GlobalContext);
    const [profile] = useRequestData([], `${BASE_URL}/profile`);
    const [paymentValue, setPaymentValue] = useState("");
    const token = window.localStorage.getItem("token");
    const [productData] = useState([]);

    // Forma de Pagamento
    const onChange = (e) => {
        setPaymentValue(e.target.value);
    };

    useEffect(() => {
        productsInCart.map((product) => {
            return productData.push({ id: product.id, quantity: product.quantity });
        });
    }, [productData, productsInCart]);


    const total = productsInCart.reduce((soma, item) => {
        soma = item.quantity * item.price + soma;
        return soma;
    }, 0);

    // Remove produto
    const removeFromCart = (id) => {
        const newProductsInCart = productsInCart
            .map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        quantity: product.quantity - 1,
                    };
                }
                return product;
            })
            .filter((product) => product.quantity > 0);
        setProductsInCart(newProductsInCart);
    };

    // Renderiza produtos
    const renderProducts = productsInCart.map((product) => {
        return (
            <div key={product.id}>
                <img
                    image={product.photoUrl}
                    alt="imagem do Restaurante"
                />
                <div>
                    <span>{product.name}</span>
                    <span>{product.description}</span>
                    <span>R${product.price.toFixed(2)}</span>
                </div>
                <div>
                    <button onClick={() => { removeFromCart(product.id) }}>Remover</button>
                </div>
            </div>
        );
    });

    // Renderiza pedido
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
            .then(() => {
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

    const cardRestaurantDetails =
        restaurants.restaurants &&
        restaurants.restaurants
            .filter((item) => {
                return item.id === restaurantId;
            })
            .map((item) => {
                return (
                    <div key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.address}</span>
                        <span>{item.deliveryTime} minutos</span>
                    </div>
                );
            });

    const deliveryPrice = restaurants.restaurants && restaurants.restaurants.filter((item) => {
        return item.id === restaurantId;
    })
        .map((item) => {
            return item.shipping;
        });

    return (
        <div>
            <HeaderCart>Meu carrinho</HeaderCart>
            {/* Abaixo renderiza endereço de entrega */}
            <div>
                <h2>Endereço de entrega</h2>
                <h3>{profile.user && profile.user.address}</h3>
            </div>
            {cardRestaurantDetails}
            {/* Abaixo veirifca se há produto no carrinho */}
            {productData.length !== 0 ? (
                renderProducts
            ) : (
                <p>Carrinho vazio</p>
            )}
            {/* Abaixo renderiza valor do produto com o frete de entrega */}
            <div>
                <h2>Frete: R${Number(deliveryPrice).toFixed(2)}</h2>
                <div>
                    <h3>SUBTOTAL</h3>
                    <h3>
                        R${(total + Number(deliveryPrice)).toFixed(2)}
                    </h3>
                </div>
            </div>
            <div>
                <h2>Forma de pagamento</h2>
                <form>
                    <input
                        value="money"
                        type="radio"
                        onChange={onChange}
                    />
                    <label htmlFor="dinheiro">Dinheiro</label>
                    <input
                        value="creditcard"
                        type="radio"
                        label="Cartão de crédito"
                        onChange={onChange}
                    />
                    <label htmlFor="cartao-de-credito">Cartão de crédito</label>
                </form>

                {productData.length !== 0 ? (
                    <button
                        type="submit"
                        onClick={handleClick}
                    >
                        Confirmar
                    </button>
                ) : (
                    <ButtonConfirmOrder>Confirmar</ButtonConfirmOrder>
                )}
            </div>
        </div>
    )
}
