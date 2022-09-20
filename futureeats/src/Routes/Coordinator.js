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
<<<<<<< HEAD
export const goToRestaurante = (navigator,id) =>{
=======
export const goToRestaurante = (navigator, id) =>{
>>>>>>> 3a529f0228ab3547e5780306522aff65a12101da
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