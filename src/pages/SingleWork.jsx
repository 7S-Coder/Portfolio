import { useParams } from "react-router-dom";

const SingleWork = () => {
  // Utilisez useParams pour obtenir le paramètre _id de l'URL
  const { _id } = useParams();

  // Vous pouvez maintenant utiliser _id pour obtenir les détails du travail à partir de vos données
  // par exemple, en utilisant un état ou une requête AJAX pour récupérer les données.

  return (
    <div>
      <h1>Details du travail</h1>
      <p>ID du travail : {_id}</p>
      {/* Affichez ici les détails du travail en fonction de l'ID */}
    </div>
  );
};

export default SingleWork;
