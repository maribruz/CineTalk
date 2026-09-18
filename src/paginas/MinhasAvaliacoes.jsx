import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { buscarDetalhesDoFilme } from "../services/tmdb.js";
import CardFilme from "../componentes/CardFilme.jsx";

function MinhasAvaliacoes() {
  const [filmesAvaliados, setFilmesAvaliados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const todasAvaliacoes = JSON.parse(
      localStorage.getItem("minhasAvaliacoes") || "{}"
    );
    const idsAvaliados = Object.keys(todasAvaliacoes);

    if (idsAvaliados.length === 0) {
      setCarregando(false);
      return;
    }

    Promise.all(idsAvaliados.map((id) => buscarDetalhesDoFilme(id))).then(
      (filmes) => {
        const filmesComNota = filmes.map((filme) => ({
          filme,
          minhaNota: todasAvaliacoes[filme.id].nota,
        }));
        setFilmesAvaliados(filmesComNota);
        setCarregando(false);
      }
    );
  }, []);

  if (carregando) return <p>Carregando suas avaliações...</p>;

  if (filmesAvaliados.length === 0) {
    return (
      <div>
        <h1>Minhas avaliações</h1>
        <p>
          Você ainda não avaliou nenhum filme. <Link to="/filmes">Ver filmes</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Minhas avaliações</h1>
      <div>
        {filmesAvaliados.map(({ filme, minhaNota }) => (
          <CardFilme key={filme.id} filme={filme} minhaNota={minhaNota} />
        ))}
      </div>
    </div>
  );
}

export default MinhasAvaliacoes;