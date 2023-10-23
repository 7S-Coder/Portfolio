import "../../datas/works.json";
import "../../styles/components/Works.scss";
import { Link } from "react-router-dom";
const cheminRelatif = "src/assets/img";

const Works = ({ cover, title, _id }) => {
  return (
    <>
      <Link to={`/work/${_id}`}>
        <figure className="works">
          <img
            className="worksPic"
            src={`${cheminRelatif}/${cover}`}
            alt={title}
          />
          <h2>{title}</h2>
        </figure>
      </Link>
    </>
  );
};
export default Works;
