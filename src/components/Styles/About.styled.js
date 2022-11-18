import styled from "styled-components";

export const Wapper = styled.section`
  
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
  margin-top: 10vh;
  min-height: 90vh;

`;

export const Content = styled.div`

  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70vw;
  min-height: 50vh;
  padding: 3%;

  h1{
    font-size: 3.2rem;
    padding: 2rem 0;
    text-shadow: 2px 2px 2px #000;
    color: ${({ theme }) => theme.colors.bg2};
  }

  p{
    font-size: 1.8rem;
    padding: 1rem 0;
    text-align: justify;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    
    width: 90vw;
    padding: 4%;

    h1{
      font-size: 2.5rem;
      padding: 1.5rem 0;
    }

    p{
      font-size: 1.6rem;
    }

  }

  @media only screen and (min-width: ${({ theme }) => theme.mobile}) and (max-width: ${({ theme }) => theme.tab}) {


    width: 80vw;
    padding: 3%;


    h1{
      font-size: 3rem;
      padding: 1.5rem 0;
    }

    p{
      font-size: 1.8rem;
    }

  }
  

`;

export const Goals = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bg2};
  color: ${({ theme }) => theme.colors.DescriptionColor};
  min-height: 40vh;
  flex-direction: column;
  padding: 0 2rem ;

  h1{
    font-size: 3.2rem;
    padding-bottom: 2rem ;
    color: ${({ theme }) => theme.colors.bg1};
    text-shadow: 2px 2px 2px #000;
  }

  p{
    font-size: 1.8rem;
    padding-bottom: 1rem;
    color: #fff;
    text-align: center;
  }

  @media only screen and (max-width: ${({theme}) => theme.mobile}) {
    h1{
      font-size: 2.5rem;
      padding-bottom: 1.5rem ;
    }

    p{
      font-size: 1.5rem;
      padding-bottom: 1rem;
    }
  }

  @media only screen and (min-width: ${({theme}) => theme.mobile}) and (max-width: ${({theme}) => theme.tab}) {
    
    h1{
      font-size: 3.2rem;
      padding-bottom: 1.5rem ;
    }

    p{
      font-size: 1.8rem;
      padding-bottom: 1rem;
    }
  }

`;
