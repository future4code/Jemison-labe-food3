import { render } from "@testing-library/react";
import { useEffect,useState } from "react"
import { ListRestaurant} from '../../Constants/Constants'
import { CardRestaurant, ListRestaurants } from "./style";

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
            <div key ={res.id}>
            name: {res.name}<br/>
            img: <img src={res.logoUrl}/>
            </div>
        )
    })
    
    console.log(renderRestaurant)
   return(
        <div>
         
<main>
    {renderRestaurant}
</main>
        
        </div>
    )
}
