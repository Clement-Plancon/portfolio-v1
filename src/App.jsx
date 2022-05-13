import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import ProfessionalProject from "./pages/Documentation/ProfessionalProject";
import PersonalProject from "./pages/Documentation/PersonalProject";
import Challenge from "./pages/Documentation/Challenge";
import Resources from "./pages/Documentation/Resources";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/professionalProject" element={<ProfessionalProject />} />
        <Route path="/personalproject" element={<PersonalProject />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
};

export default App;
