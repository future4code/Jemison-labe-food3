import React from "react";
import { ButtonConfirmOrder, HeaderCart } from '../Cart/style';





export const Cart = () => {


    return (
        <div>
            <HeaderCart>Meu carrinho</HeaderCart>
            <>
                <h2>SubTotal:R$ 0,00</h2>
            </>
            <ButtonConfirmOrder>Confirmar</ButtonConfirmOrder>
        </div>
    )
}
