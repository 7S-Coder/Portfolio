import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import SkillsList from "../components/SkillsStuff/SkillsList";
import Work from "../pages/Work";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<SkillsList />} />
      <Route path="/work" element={<Work />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
