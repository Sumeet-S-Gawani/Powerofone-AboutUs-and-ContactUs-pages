import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/Styles/Common/Global';
import HomePage from './components/Home/HomePage';
import AboutUs from './components/About/AboutUs';
import ContactUs from './components/Contact/ContactUs';
import Navbar from './components/Navbar/Navbar';
import { theme } from './components/Styles/Common/Theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <>
      <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
