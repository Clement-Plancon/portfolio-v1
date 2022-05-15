import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MainPage from "./MainPage";
import ProfessionalProject from "./pages/Documentation/ProfessionalProject";
import PersonalProject from "./pages/Documentation/PersonalProject";
import Challenge from "./pages/Documentation/Challenge";
import Resources from "./pages/Documentation/Resources";

const App = () => {
  const [datas, setData] = useState("");
  useEffect(() => {
    axios.get("data/text.json").then((res) => {
      const jsonGlobal = res.data.textProfessionalProject
      setData(jsonGlobal);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/professionalProject"
          element={<ProfessionalProject items={datas} />}
        />
        <Route path="/personalproject" element={<PersonalProject />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
};

export default App;
