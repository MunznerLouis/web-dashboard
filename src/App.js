// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms-of-services';
import Policy from './pages/Privacy-policy';
import Footer from './components/footer/Footer';
import Services from './pages/services';

function App() {
  return (
    <Router> {}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-of-services" element={<Terms />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/services" element={<Services />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
