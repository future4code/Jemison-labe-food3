export const goToLogin = (navigator) =>{
    navigator('/login')
}
export const goToSignup = (navigator) =>{
    navigator('/signup')
}
export const goToRestaurants = (navigator) =>{
    navigator('/restaurants')
}
export const goToProfile = (navigator) =>{
    navigator('/profile')
}
export const goToRestaurante = (navigator, id) =>{
    navigator(`/restaurants/${id}`)
}
export const goToCart = (navigator) =>{
    navigator('/active-order')
}
export const goToEditAdress = (navigator) =>{
    navigator('address')
}
export const goToEditData = (navigator) =>{
    navigator('/profile/address')
}