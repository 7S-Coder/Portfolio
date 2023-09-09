import skillsData from "../../datas/skills.json";
import Skills from "./Skills";

const SkillsList = () => {
  return (
    <div className="card-list">
      {skillsData.map(({ title, skills }, index) => (
        <Skills key={index} title={title} skills={skills} />
      ))}
    </div>
  );
};

export default SkillsList;
