import styled from "styled-components";
import { Button, Card, CardMedia, Typography } from "@mui/material";

export const MainContainer = styled.div`
  margin-bottom: 30vh;
`;

export const AddressContainer = styled.div`
  background-color: #eeeeee;
  min-height: 4.75rem;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const RestaurantContainer = styled.div`
  padding: 1rem;
`;

export const ShippingContainer = styled.div`
  width: 100vw;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2rem;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  // font-size: 1.125rem;
  align-items: baseline;
  margin-top: 0.5rem;
`;

export const PaymentContainer = styled.div`
  padding: 1rem;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;

export const CardRestaurant = styled(Card)`
  width: 95vw;
  margin: 10px;
`;
export const ProductsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CategoryTitle = styled(Typography)`
  padding: 10px;
  border-bottom: 1px solid black;
  width: 95vw;
  margin: 5px !important;
`;

export const CardProducts = styled(Card)`
  display: flex;
  width: 95vw;
  margin: 5px;
  position: relative;
  border: 1px solid #b8b8b8 !important;
`;

export const ProductImage = styled(CardMedia)`
  max-width: 30vw;
  margin-right: 10px;
`;
export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95vw;
`;

export const TypographyStyled = styled(Typography)`
  padding: 10px 0;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 95vw;
`;

export const ButtonAdd = styled(Button)`
  height: 6vh;
  min-width: 20vw;
`;

export const ShippingAndTime = styled.div`
  display: flex;
`;

export const TimeStyled = styled(Typography)`
  padding-right: 30px;
`;

