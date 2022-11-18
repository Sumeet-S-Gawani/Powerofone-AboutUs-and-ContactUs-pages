import React from 'react';
import { Container, Info, SocialLinks } from '../Styles/Contact.styled';
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
        <p>Ready to step up? <a href='#links'>Contact us</a> and get live notifications about:</p>
        <li>charities doing the work you care about the most</li>
        <li>the kind of help these charities need</li>
        <p>Whether you’re a prospective donor keen to help out, or an organisation keen to sign up as a beneficiary, give us a toot!</p>
        <p>Want to get started as a donor? All it takes is one person. <a href='#links'>There’s loads of ways to get in touch.</a></p>
        <p>Or if you’re a charity organisation keen to be matched with prospective donors? Give us a holler and we’ll get right on it. </p>
        <p>Just curious? We’d love to hear from you. Or if you have any feedback for us, let us have it!</p>
        </Info>

        
        <SocialLinks id="links">
          <a href="https://mail.google.com/mail/" target='_blank' rel='noreferrer noopener'><img src={email} alt="email" /></a>
          <a href="https://www.facebook.com/" target='_blank' rel='noreferrer noopener'><img src={facebook} alt="facebook" /></a>
          <a href="https://www.instagram.com/" target='_blank' rel='noreferrer noopener'><img src={instagram} alt="instagram" /></a>
          <a href="https://www.tiktok.com/en/" target='_blank' rel='noreferrer noopener'><img src={tiktok} alt="tiktok" /></a>
          <a href="https://powerofone-3808b.firebaseapp.com/" target='_blank' rel='noreferrer noopener'><img src={www} alt="www" /></a>
        </SocialLinks>
        
      </Container>
    </>
  )
}
export default ContactUs