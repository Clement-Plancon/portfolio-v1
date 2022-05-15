import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserContext } from "./components/Context/Context";
import axios from "axios";
import MainPage from "./MainPage";
import ProfessionalProject from "./pages/Documentation/ProfessionalProject";
import PersonalProject from "./pages/Documentation/PersonalProject";
import Challenge from "./pages/Documentation/Challenge";
import Resources from "./pages/Documentation/Resources";

const App = () => {
  const [jsonDatas, setJsonDatas] = useState("");
  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = () => {
    axios.get("data/text.json").then((res) => {
      const jsonGlobal = res.data;
      setJsonDatas(jsonGlobal);
    });
  };
  return (
    <UserContext.Provider value={jsonDatas}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/professionalProject"
            element={<ProfessionalProject />}
          />
          <Route path="/personalproject" element={<PersonalProject />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default App;
