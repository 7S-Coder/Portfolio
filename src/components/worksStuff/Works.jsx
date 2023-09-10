import "../../datas/works.json";
import "../../styles/components/Works.scss";

const cheminRelatif = "src/assets/img";

const Works = ({ cover, title }) => {
  return (
    <figure className="works">
      <img className="worksPic" src={`${cheminRelatif}/${cover}`} alt={title} />
      <h2>{title}</h2>
    </figure>
  );
};
export default Works;
