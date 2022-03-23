import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Degree from "./pages/Degree";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Skills" element={<Skills />}/>
          <Route path="/Degree" element={<Degree />}/>
          <Route path="/Portfolio" element={<Portfolio />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
