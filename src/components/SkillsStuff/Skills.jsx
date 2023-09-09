import "../../styles/components/Skills.scss";

const Skills = ({ title, skills, github }) => {
  return (
    <ul className="skills">
      <li className="skills_block">
        <h2>{title}</h2>
        <ul className="skills_list">
          {skills.map((skill, skillIndex) => (
            <li key={skillIndex}>{skill}</li>
          ))}
          {github && (
            <li>
              <a href={github.link} target="blanck">
                {github.title}
              </a>
            </li>
          )}
        </ul>
      </li>
    </ul>
  );
};

export default Skills;
