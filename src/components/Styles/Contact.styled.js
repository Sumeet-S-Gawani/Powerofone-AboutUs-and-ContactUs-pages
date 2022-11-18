import styled from "styled-components";

export const Container = styled.section`

  width: 100%;
  margin-top: 10vh;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.whiteSmoke};


`

export const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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

export const FromContent = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.bg2};

  p{
    font-size: 1.8rem;
    padding: 1.5rem 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.lightColor};

  }

  form{
    width: 55%;
  }

  textarea {
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
    padding: 1rem;
    resize: none;
    border: 0.1rem solid #191919;
    border-radius: 0.5rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {

    padding: 3rem 0;

    p{
      font-size: 1.5rem;
    }

    form{
      width: 90%;
    }
    
  }

  @media only screen and (min-width: ${({ theme }) => theme.mobile}) and (max-width: ${({ theme }) => theme.tab}) {
    padding: 3rem 0;

    p{
      font-size: 1.8rem;
    }

    form{
      width: 60%;
    }
  }

`;


export const FormButton = styled.button`

  width: 100%;
  background: ${({ theme }) => theme.colors.bg1};
  color: ${({ theme }) => theme.colors.lightColor};
  letter-spacing: 2px;
  font-size: 1.8rem;
  border-radius: 0.4rem;
  border: none;
  padding: 1rem 0;


  &:hover {
    transform: scale(0.99);
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
      
  }

  @media only screen and (min-width: ${({ theme }) => theme.mobile}) and (max-width: ${({ theme }) => theme.tab}) {
    font-size: 1.8rem;
  
  }

`

export const SocialLinks = styled.div`

  display: flex;
  padding-top: 3rem;
  min-height: 10vh;

  img{
    width: 5rem;
    height: auto;
    padding:  0 1rem;
    filter: invert(1);
  }

`;