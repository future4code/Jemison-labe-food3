import styled from 'styled-components'

export const MainDiv = styled.div`
height: 640px;
width: 375px;
display: flex;
flex-direction: column;
padding: 0;
align-items:center;
`
export const TitleDiv = styled.div`
height: auto;
width: 375px;
display: flex;
justify-content: center;
flex-direction: row;
padding: 0;
align-items:center;
position: fixed;

button {
    position: fixed;
    top: 0;
    right: 0;
    background-color: #e02020;
    color: #ffffff;
    outline: none;
    border: none;
}
`
export const Subtitle = styled.p`
font-family: roboto;

`
export const BackImg = styled.img`
width: 23px;
height: 24px;
position: fixed;
left: 16px;
`


export const Form = styled.form`
display: flex;
flex-direction: column;
margin:auto;
position: fixed;
height: auto;
top:6vh;

    input{
    height: 56px;
    width: 328px;
    margin: 10px;
    background: none;
    border-width: medium;
    border-style: solid;
    border-color: black;
    }

    button{
    background-color: #5cb646;
    height: 42px;
    width: 328px;
    margin-left:12px;
    justify-content: center;
    align-items: center;
    }
`
export const Button = styled.button`
    background-color: #5cb646;
    height: 42px;
    width: 328px;
    position: fixed;
    bottom:49px;

`