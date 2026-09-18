import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { buscarFilmesPopulares } from "../services/tmdb.js";

function Inicio() {
  const [filmesDestaque, setFilmesDestaque] = useState([]);

  useEffect(() => {
    buscarFilmesPopulares().then((filmes) => {
      setFilmesDestaque(filmes.slice(0, 4));
    });
  }, []);

  return (
    <div className="tela-inicial">
      <h1>CineTalk</h1>
      <p>Seu guia pessoal de cinema. Registre todos os filmes que você já viu, acompanhe suas avaliações e explore as opiniões da comunidade para encontrar a sua próxima grande recomendação.</p>
      <Link to="/filmes">Ver filmes</Link>

      <div className="vitrine-destaque">
        {filmesDestaque.map((filme) => (
          <img
            key={filme.id}
            src={`https://image.tmdb.org/t/p/w342${filme.poster_path}`}
            alt={filme.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Inicio;