import { Link } from "react-router-dom";
import Estrelas from "./Estrelas.jsx";

function CardFilme({ filme, minhaNota }) {
  const urlImagem = filme.poster_path
    ? `https://image.tmdb.org/t/p/w342${filme.poster_path}`
    : null;

  return (
    <Link to={`/filme/${filme.id}`} className="cartao-filme">
      {urlImagem ? (
        <img src={urlImagem} alt={filme.title} />
      ) : (
        <div>{filme.title}</div>
      )}
      <p>{filme.title}</p>
      <p>Nota TMDB: {filme.vote_average.toFixed(1)}</p>
      {minhaNota && (
        <p className="minha-nota">
          Minha nota: <Estrelas nota={minhaNota} somenteLeitura={true} />
        </p>
      )}
    </Link>
  );
}

export default CardFilme;