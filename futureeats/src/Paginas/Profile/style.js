import styled from 'styled-components'

export const ProfileDiv = styled.div`
height: 100vh;
max-width: 375px;
align-items: center;
font-family: Roboto;
letter-spacing: -0.39px;

`
export const HeaderProfile = styled.div`
display: flex;
width: 100%;
height: 44px;
align-items: center;
justify-content: center;
position: sticky;
top: 0;
background-color: white;
p {
    font-size: 16px;
    font-weight: 400;
    color: black;
}
`
export const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
img{
    height: 30px;
}
`
export const FooterProfile = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 49px;
background-color: white;
position: fixed;
bottom: 0;

div {
    display: flex;
    width: 120px;
    height: 49px;
    justify-content: center;

    img {
        width: 27px;
        height: 27px;

    }
}
`
export const Info = styled.p`
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`
export const Info2 = styled.p`
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39;
  color: #B8B8B8;
`

export const IconeLogout = styled.img`
height:30px;
width:30px;
margin-left:50px;
`
