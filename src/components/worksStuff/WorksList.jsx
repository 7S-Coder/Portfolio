import worksData from "../../datas/works.json";
import Works from "./Works";

const WorksList = () => {
  return (
    <>
      {worksData.map(({ cover, title, github, tools, skills }, index) => (
        <Works
          key={index}
          cover={cover}
          title={title}
          github={github}
          tools={tools}
          skills={skills}
        />
      ))}
    </>
  );
};
export default WorksList;
