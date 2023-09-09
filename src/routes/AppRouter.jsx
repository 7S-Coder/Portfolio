import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import SkillsList from "../components/SkillsStuff/SkillsList";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<SkillsList />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
