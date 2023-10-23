import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import SkillsList from "../components/SkillsStuff/SkillsList";
import Work from "../pages/Work";
import SinlegWork from "../pages/SingleWork";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<SkillsList />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:_id" element={<SinlegWork />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
