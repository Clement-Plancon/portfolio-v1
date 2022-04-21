import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Degree from "./pages/Degree";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App =() => {
  return (
    <div className="App">
    <Header />
    <BrowserRouter>
      <Switch>

      </Switch>
    </BrowserRouter>
    <Home />
    <About  />
    <Skills  />
    <Degree />
    <Portfolio />
    <Contact />
  </div>
  )
}

export default App;


