import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectDetailPage from "./components/ProjectDetailPage";
import ExperienceDetailPage from "./components/ExperienceDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/experience/:id" element={<ExperienceDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
