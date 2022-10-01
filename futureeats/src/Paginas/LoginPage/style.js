import styled from 'styled-components'

export const Containerlogin = styled.div`
    width: 360px;
    height: 640px;
    padding: 0 0 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`

export const ContainerForm = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    background-color: WhiteSmoke;

Input, p{
    margin-bottom: 10px;
}

Button{
    margin-bottom: 10px;
}

Button:hover{
    background-color: #B8B8B8;
}
`
export const Enviar = styled.p`
  cursor: pointer;
  width: 296px;
  height: 18px;
  letter-spacing: -0.39px;
  text-align: center;
  margin-left: 6%;
  margin-top: 10px;

  :hover{
    text-decoration: underline;
  }
`
export const Botao = styled.div`
    margin-top: 10px;
`