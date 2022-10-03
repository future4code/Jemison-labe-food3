import { useEffect, useRef, useState } from "react"
import { BASE_URL, ListRestaurant } from '../../Constants/Constants'
import { ButtonsRestaurants, ContainerRestaurants, Restaurants,FormRestaurant, Tiltle, FooterRestaurant,Div } from "./style";
import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import  '@splidejs/react-splide/css/sea-green';
import { useNavigate } from "react-router-dom";
import { goToCart, goToLogin, goToProfile, goToRestauranteDetail } from "../../Routes/Coordinator";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

export const RestaurantsPage = () => {

    const navigate = useNavigate();
    

    const [feed, setfeed] = useState([]);
    useEffect(() => {

        ListRestaurant()
            .then(data => {
                setfeed(data.restaurants)
                console.log(data);
            })
            .catch((e) => {
                console.log(e)
            })

    }, []);


    const renderRestaurant = feed.map((res) => {
        return (
                <div>
                
                <Restaurants key={res.id}>
                   <img alt="imagens restaurantes" src={res.logoUrl} />
                     <div className="nome">{res.name}</div><br />
                   <span className="tempo"> Tempo: {res.deliveryTime}Min</span>
                    <span className="frete"> Frete R${res.shipping},00</span>
                </Restaurants>
                
                    
            
            </div>
        )
    })
    console.log(renderRestaurant)
        return (
             <><Tiltle>FutureEats<br/>
             </Tiltle><br/>
             <input className="form" type={'text'} value='Procurar' ></input>
            <div>
                
                <Div className="slide">
                <Splide hasTrack={ false } aria-label="..."
    options={{
      height:50,
      width:400,
      
  
      
    }} >
                    <SplideTrack>
                        <SplideSlide>
                        <ButtonsRestaurants>Tudo</ButtonsRestaurants>
                        </SplideSlide>
                    
                        <SplideSlide>
                        <ButtonsRestaurants onClick={() =>goToRestauranteDetail(navigate)}>Árabe</ButtonsRestaurants>
                        </SplideSlide>
                        <SplideSlide>
                        <ButtonsRestaurants onClick={() =>goToRestauranteDetail(navigate)}>Asiática</ButtonsRestaurants>
                        </SplideSlide>
                        <SplideSlide>
                        <ButtonsRestaurants onClick={() =>goToRestauranteDetail(navigate)}>Hambúrguer</ButtonsRestaurants>
                        </SplideSlide>
                        <SplideSlide>
                        <ButtonsRestaurants onClick={() =>goToRestauranteDetail(navigate)}>Italiana</ButtonsRestaurants>
                        </SplideSlide>
                        <SplideSlide>
                        <ButtonsRestaurants onClick={() =>goToRestauranteDetail(navigate)}>Sorvetes</ButtonsRestaurants>
                        </SplideSlide>
                        <SplideSlide>
                        <ButtonsRestaurants onClick={() =>goToRestauranteDetail(navigate)}>Churrasco</ButtonsRestaurants>
                        </SplideSlide>
                        <SplideSlide>
                        <ButtonsRestaurants onClick={() =>goToRestauranteDetail(navigate)}>Bahiana</ButtonsRestaurants>
                        </SplideSlide>
                        <SplideSlide>
                        <ButtonsRestaurants onClick={() =>goToRestauranteDetail(navigate)}>Buteco</ButtonsRestaurants>
                        </SplideSlide>
                        <SplideSlide>
                        <ButtonsRestaurants onClick={() =>goToRestauranteDetail(navigate)}>Chineza</ButtonsRestaurants>
                        </SplideSlide>
                        <SplideSlide>
                        <ButtonsRestaurants onClick={() =>goToRestauranteDetail(navigate)}>Mexicana</ButtonsRestaurants>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
                    <ContainerRestaurants>
                    {renderRestaurant}
                    </ContainerRestaurants>
                    <FooterRestaurant>
                        <button className="Casinha"onClick={() =>goToLogin(navigate)}><AiOutlineHome/></button>
                        <button className="Carrinho"onClick={() =>goToCart(navigate)}><AiOutlineShoppingCart/></button>
                        <button className="Perfil"onClick={() =>goToProfile(navigate)}><AiOutlineUser/></button>
                    </FooterRestaurant>
                    </Div>
            </div>
            </>
        )
    }