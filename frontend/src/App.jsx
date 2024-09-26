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
import CurrentUser from './components/auth/CurrentUser';
import { useState, useEffect } from 'react';
import Confirmation from './components/pages/Confirmation';




function App() {
  const [loggedIn, setLoggedIn] = useState();
  const [user, setUser] = useState(null);
  
  
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;
        
        if (decoded.exp > now) {
          setLoggedIn(true); //Token is not expired
        } else {
          setLoggedIn(false); // Token is expired
        }
      } catch (error) {
        console.error('Token decoding failed:', error);
        setLoggedIn(false);
      }
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <>    
    <div className="App">
      <Router>
        <PageWrapper loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} user={user}>                   
          <ScrollToHash/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kits" element={<Kits user={user} setUser={setUser} />} />
            <Route path="/kit_requests" element={<RequestKit user={user} setUser={setUser} />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />}/>
            <Route path="/confirmation" element={<Confirmation user={user}/> } />
          </Routes>
        </PageWrapper>
      </Router>
    </div>
  </>
  );
}

export default App;
