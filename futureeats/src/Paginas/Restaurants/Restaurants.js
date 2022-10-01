import { useEffect,useState } from "react"
import { ListRestaurant} from '../../Constants/Constants'
import { ContainerRestaurants, Restaurants } from "./style";

export const RestaurantsPage = () =>{


    const [feed,setfeed] = useState([]);
    useEffect(() => {

        ListRestaurant()
        .then(data =>{
            setfeed(data.restaurants)
            console.log(data);
        })
        .catch((e) => {
            console.log(e)
        })

    },[]);

    const renderRestaurant = feed.map((res) =>{
        return(
            <ContainerRestaurants key ={res.id}> 
            <img src={res.logoUrl}/>
            name: {res.name}<br/>
            Tempo: {res.deliveryTime}
            Frete R${res.shipping},00
            </ContainerRestaurants>
        )
    })
    
    console.log(renderRestaurant)
   return(
    <div>
        {renderRestaurant}
     </div>
    )
}
