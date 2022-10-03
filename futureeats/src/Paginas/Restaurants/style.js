import styled from "styled-components";


export const ContainerRestaurants = styled.div`
    display:block;
    
`
export const Restaurants= styled.div`
  border: solid 1px black;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    width: 300px;
    margin-bottom: 10px;
    
    .frete{
     position:absolute;
     left:50%;
     color:gray;
    }
    .tempo{
        color:gray;
    }
    .nome{
        color:green;
        font-family:fantasy;
    }
`
export const ButtonsRestaurants=styled.div`
position:center;
display:grid;
font-family:fantasy;
text-align:center;
width:100%;
width:10px;
:hover{
    color:green
}
`
export const FormRestaurant = styled.input`
`
export const Tiltle = styled.h1`
position:absolute;
text-align:center;
width:50%;
color:green;
`
export const FooterRestaurant = styled.div`
position:fixed;
background-color:white;
width:100%;
align-items:center;
bottom:0px;
height:5%;
text-align:center;
.Casinha{
    position:absolute;
    left:10%
}
.Carrinho{
    position:absolute;
    left:40%
}
.Perfil{
    position:absolute;
    right:20%
}
`
export const Div = styled.div`
position:relative;
top:20%;`