import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Kits from './components/pages/Kits';
import ScrollToHash from './components/ScrollToHash';



function App() {
  

  return (
    <>    
    <div className="App">
      <Router>
        <PageWrapper>
          <ScrollToHash/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kits" element={<Kits />} />
          </Routes>
        </PageWrapper>
      </Router>
    </div>
  </>
  );
}

export default App;
