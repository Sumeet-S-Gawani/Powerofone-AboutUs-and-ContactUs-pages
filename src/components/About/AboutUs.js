import React from 'react';
import { Content, Goals, Wapper } from '../Styles/About.styled';

const AboutUs = () => {

  return (
    <>
      <Wapper>
        <Content>
          <h1>About Us</h1>
          
          <p>We’ve all got causes close to our hearts: whether that’s young people, animals, homelessness, asylum seekers. And so on.</p>
                  
          <p>And we believe everyone has something to give. That could be time, skills, clothing, food, toys – the list is endless.</p>
          
          <p>But in a world of information overload, it’s not always easy to find those charities that really strike a chord with our values.  Or to know help they need.</p>
          
          <p>So, we figured, let’s find all the amazing beautiful people who want to help, and add them together with all the charity superheroes out there. And that will make something amazingly powerful. We just need to help them find each other.</p>
          
          <p>By signing up to the Power of One, charities receive live notifications from donors who want to help.</p>
        </Content>
        

        {/* Goals section  */}
        <Goals>
          <h1>Our Goals</h1>
          <p>We want to increase donations made to charity (of whatever kind).</p>
          <p>We want to raise the profile of smaller charities.</p>
          <p>We seek to transform charitable giving, with no intermediary and no dilution.</p>
          

        </Goals>
      </Wapper>
    </>
  )
}

export default AboutUs