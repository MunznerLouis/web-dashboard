// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Terms from './pages/termsOfServices/termsOfServices';
import Policy from './pages/privacyPolicy/privacyPolicy';
import Footer from './components/footer/Footer';
import Services from './pages/services/services';
import ContactUs from './pages/contactUs/contactUs';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Router> 
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/terms-of-services" element={<Terms />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
