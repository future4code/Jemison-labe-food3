import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart } from '../Paginas/Cart/Cart'
import { LoginPage } from '../Paginas/LoginPage/LoginPage'
import { LogoPage } from '../Paginas/LogoPage/LogoPage'
import { Profile } from '../Paginas/Profile/Profile'
import { ProfileEditAdress } from '../Paginas/ProfileEditAdress/ProfileEditAdress'
import { ProfileEditData } from '../Paginas/ProfileEditData/ProfileEditData'
import { Register } from '../Paginas/Register/Register'
import { Restaurants } from '../Paginas/Restaurants/Restaurants'
import {RestauranteDetail} from '../Paginas/RestaurantDetail/RestaurantDetail'


export const Router = () =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                     <Route index element={<LogoPage/>} />
                     <Route path={'/login'} element={<LoginPage/>} />
                     <Route path={'/signup'} element={<Register/>} />
                     <Route path={'/restaurants'} element={<Restaurants/>} />
                     <Route path={'/profile'} element={<Profile/>} />
                     <Route path={'/restaurants/:restaurantId'} element={<RestauranteDetail />} />
                     <Route path={'/active-order'} element={<Cart/>} />
                     <Route path={'/address'} element={<ProfileEditAdress/>} />
                     <Route path={'/profile/address'} element={<ProfileEditData/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}