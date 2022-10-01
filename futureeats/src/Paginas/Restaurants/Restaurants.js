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


            <div>
            key ={res.id}
            name ={res.name}
            img ={res.logUrl}
            </div>

            <ContainerRestaurants key ={res.id}> 
            <img src={res.logoUrl}/>
            name: {res.name}<br/>
            Tempo: {res.deliveryTime}
            Frete R${res.shipping},00
            </ContainerRestaurants>

        )
    })
    console.log(renderRestaurant)
    
    const [nameValue, setNameValue] = useState("")
    const [category, setCategory] = useState("")

    const updateNameValue = (event) => {
        setNameValue(event.target.value)

    const filterCategory = feed.filter((item) => {
        return(
            item.category
        )
    })

   
   return(

        <div>
         <input placeholder="Restaurante" 
         type='text' onChange={updateNameValue} 
         value={nameValue}>
        </input>

         <button onClick={() => setCategory("")}>Todos</button>
                    <button onClick={() => setCategory("Árabe")}>Árabe</button>
                    <button onClick={() => setCategory("Asiática")}>Asiática</button>
                    <button onClick={() => setCategory("Baiana")} >Baiana</button>
                    <button onClick={() => setCategory("Hambúrguer")}>Hambúrguer</button>
                    <button onClick={() => setCategory("Carnes")}>Carnes</button>
                    <button onClick={() => setCategory("Petiscos")}>Petiscos</button>
                    <button onClick={() => setCategory("Italiana")}>Italiana</button>
                    <button onClick={() => setCategory("Mexicana")}>Mexicana</button>
                    <button onClick={() => setCategory("Sorvetes")}>Sorvetes</button>
<main>
    {renderRestaurant}
</main>
        
        </div>

    <div>
        {renderRestaurant}
     </div>

    )
}
}