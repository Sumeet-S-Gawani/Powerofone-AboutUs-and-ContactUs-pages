import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 10vh;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: linear-gradient(180deg, ${({theme}) => theme.colors.bg2 } 50%, ${({theme}) => theme.colors.lightColor } 100%);
  width: 100%;
  font-size: 3rem;
  letter-spacing: 0.2rem;

  @media only screen and (max-width: ${({theme}) => theme.mobile}) {
    justify-content: center;
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }

  @media only screen and (min-width: ${({theme}) => theme.mobile}) and (max-width: ${({theme}) => theme.tab}) {
      font-size: 3rem;
      justify-content: center;
  }

`

export const Li = styled.li`

  padding: 0 1.5rem;
  color: ${({theme}) => theme.colors.lightColor };
  font-weight: bold;
  list-style: none;
  font-size: 3.2rem;

  a{
    text-decoration: none;
    color: ${({theme}) => theme.colors.lightColor };
  }

  a:hover {
    color: rgb(207, 205, 205);
  }

  img{
    width: 8rem;
    height: auto;
  }

  @media only screen and (max-width: ${({theme}) => theme.mobile}) {

    padding: 0 1rem;
    font-size: 2.2rem;

    img{
      width: 6rem;
      height: auto;
    }
  }

  @media only screen and (min-width: ${({theme}) => theme.mobile}) and (max-width: ${({theme}) => theme.tab}) {
    padding: 0 1.5rem;
    font-size: 3.2rem;

    img{
      width: 8rem;
      height: auto;
    }
  }


`