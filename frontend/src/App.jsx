import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Kits from './components/pages/Kits';
import RequestKit from './components/pages/RequestKit'
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';
import ScrollToHash from './components/ScrollToHash';
import { useState, useEffect } from 'react';
import Confirmation from './components/pages/Confirmation';
import Donation from './components/pages/Donation';
import RequestSpeaker from './components/pages/RequestSpeaker';
import { jwtDecode } from 'jwt-decode';
import AdminDashboard from './components/pages/AdminDashboard';





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
          if (decoded.user) {
            setUser(decoded.user); // Set user if present
            console.log(decoded.user)
        } else {
            setUser(null); // User data is not in the token
        }
        } else {
          setLoggedIn(false); // Token is expired
          setUser(null);
        }
      } catch (error) {
        console.error('Token decoding failed:', error);
        setLoggedIn(false);
        setUser(null);

      }
    } else {
      setLoggedIn(false);
      setUser(null);
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
            <Route path="/contact" element={<Contact user={user} />} />
            <Route path="/kits" element={<Kits user={user} setUser={setUser} />} />
            <Route path="/kit_requests" element={<RequestKit user={user} setUser={setUser} />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />}/>
            <Route path="/confirmation" element={<Confirmation user={user}/> } />
            <Route path="/donation" element={<Donation user={user}/>} />
            <Route path="/speaker" element={<RequestSpeaker/>}/>
            <Route path="/admin" element={user && user.role === 'admin' ? <AdminDashboard user={user} /> : <Navigate to="/" />} />
          </Routes>
        </PageWrapper>
      </Router>
    </div>
  </>
  );
}

export default App;
