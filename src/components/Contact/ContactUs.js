import React from 'react';
import { Container, FormButton, FromContent, Info, SocialLinks } from '../Styles/Contact.styled';
import email from '../../images/email.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import tiktok from '../../images/tiktok.png';
import www from '../../images/www.png';

const ContactUs = () => {
  return (
    <>
      <Container className="contactFormSection">
 
        <Info>
        <h1>Contact Form</h1>
        <p>Ready to step up? <a href='#links'>Contact us</a> and get live notifications about:</p>
        <li>charities doing the work you care about the most</li>
        <li>the kind of help these charities need</li>
        <p>Whether you’re a prospective donor keen to help out, or an organisation keen to sign up as a beneficiary, give us a toot!</p>
        <p>Want to get started as a donor? All it takes is one person. <a href='#links'>There’s loads of ways to get in touch.</a></p>
        <p>Or if you’re a charity organisation keen to be matched with prospective donors? Give us a holler and we’ll get right on it. </p>
        </Info>

        <FromContent>
        <form action="#" >
          <p>Just curious? We’d love to hear from you. Or if you have any feedback for us, let us have it!</p>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Leave your message here..."></textarea>
          <FormButton type="submit">Submit</FormButton>
        </form>

        <SocialLinks id="links">
          <a href="https://www.instagram.com/" target='_blank' rel='noreferrer noopener'><img src={email} alt="email" /></a>
          <a href="https://www.instagram.com/" target='_blank' rel='noreferrer noopener'><img src={facebook} alt="facebook" /></a>
          <a href="https://www.instagram.com/" target='_blank' rel='noreferrer noopener'><img src={instagram} alt="instagram" /></a>
          <a href="https://www.instagram.com/" target='_blank' rel='noreferrer noopener'><img src={tiktok} alt="tiktok" /></a>
          <a href="https://www.instagram.com/" target='_blank' rel='noreferrer noopener'><img src={www} alt="www" /></a>
        </SocialLinks>
        </FromContent>
        
      </Container>
    </>
  )
}
export default ContactUs