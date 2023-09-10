import { NavLink } from "react-router-dom";
import skillsData from "../../datas/skills.json";
import Skills from "./Skills";
import "../../styles/components/SkillList.scss";

const SkillsList = () => {
  return (
    <div className="card-list">
      <h1>Mes compétences</h1>
      {skillsData.map(({ title, skills, github }, index) => (
        <Skills key={index} title={title} skills={skills} github={github} />
      ))}
      <NavLink to="/work" className="page_link">
        Les Travaux
      </NavLink>
    </div>
  );
};

export default SkillsList;
