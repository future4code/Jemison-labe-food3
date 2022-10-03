export const goToLogin = (navigate) =>{
    navigate('/login')
}
export const goToSignup = (navigate) =>{
    navigate('/signup')
}

// Restaurantes
export const goToRestaurants = (navigate) =>{
    navigate('/restaurants')
}
export const goToProfile = (navigate) =>{
    navigate('/profile')
}


// Detalhe dos retaurantes
export const goToRestauranteDetail = (navigate, id) =>{
    navigate(`/restaurants/${id}`)
}
export const goToCart = (navigate) =>{
    navigate('/active-order')
}

//

export const goToEditAdress = (navigator) =>{
    navigator('/profile/editAdress')
}
export const goToEditData = (navigator) =>{
    navigator('/profile/editData')
}
export const goToRegisterAdress = (navigate) => {
    navigate('/register/adress')
}