import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Services from "./Services";
import {Routes, Route} from 'react-router-dom';
import Contact from "./Contact";


function App() {
  return (
    <div>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>``
    </div>
  );
}

export default App;
