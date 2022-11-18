import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, ${({theme}) => theme.colors.bg1 } 10%, ${({theme}) => theme.colors.bg2 } 100%);
  background-position: center;
  background-size: cover;


  h1{
    font-size: 5rem;
    font-weight: bold;
    width: 100%;
    color: ${({theme}) => theme.colors.darkColor };
  }

  @media only screen and (max-width: ${({theme}) => theme.mobile}) {
    h1 {
    font-size: 2.5rem;
    }
  }

  @media only screen and (min-width: ${({theme}) => theme.mobile}) and (max-width: ${({theme}) => theme.tab}) {
    h1 {
      font-size: 4.5rem;
    }
  }

`;


