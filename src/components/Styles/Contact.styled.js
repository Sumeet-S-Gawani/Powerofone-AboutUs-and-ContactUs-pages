import styled from "styled-components";

export const Container = styled.section`

  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.whiteSmoke};


`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10vh;
  width: 70vw;
  min-height: 60vh;

  h1{
    font-size: 3.2rem;
    text-shadow: 2px 2px 2px #000;
    color: ${({ theme }) => theme.colors.bg2};
  }

  p{
    font-size: 1.8rem;
    padding: 1rem 0;
  }

  li{
    font-size: 1.8rem;
    padding-left: 1rem;
  }
  a{
    text-decoration: none;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.bg2};
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
  
  
    width: 80vw;
    

    h1{
      font-size: 2.2rem;
    }

    p{
      font-size: 1.5rem;
    }

    li{
      font-size: 1.5rem;
      padding-left: 0rem;
    }
    a{
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.mobile}) and (max-width: ${({ theme }) => theme.tab}) {
  
    width: 80vw;
    
    h1{
      font-size: 3.2rem;
    }

    p{
      font-size: 1.8rem;
    }

    li{
      font-size: 1.8rem;
      padding-left: 1rem;
    }
    a{
      font-size: 1.8rem;
    }
  }


`;

export const SocialLinks = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 30vh;
  background-color: ${({ theme }) => theme.colors.lightBg2};

  img{
    width: 6rem;
    height: auto;
    padding:  0 1rem;
    margin: 0 3rem;
    filter: invert(1);
    transition: all 0.3s ease-in-out;
  }

  img:hover{
    filter: drop-shadow(0 0 0.7rem #000);
    transform: scale(1.05);
  }

  @media only screen and (max-width: ${({theme}) => theme.mobile}) {

  img{
    width: 5rem;
    padding:  0 1rem;
    margin: 0 0rem;
  }
  }

  @media only screen and (min-width: ${({theme}) => theme.mobile}) and (max-width: ${({theme}) => theme.tab}) {
    img{
      width: 5rem;
      padding:  0 1rem;
      margin: 0 2rem;
    }
  }
`;