import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Kits from './components/pages/Kits';
import RequestKit from './components/pages/RequestKit'
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';
import ScrollToHash from './components/ScrollToHash';
import { useState } from 'react';




function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  

  return (
    <>    
    <div className="App">
      <Router>
        <PageWrapper loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
          <ScrollToHash/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kits" element={<Kits />} />
            <Route path="/kit_requests" element={<RequestKit />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />}/>
          </Routes>
        </PageWrapper>
      </Router>
    </div>
  </>
  );
}

export default App;
