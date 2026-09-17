import { useState, useEffect } from "react";
import BarraBusca from "../componentes/BarraBusca.jsx";
import CardFilme from "../componentes/CardFilme.jsx";
import { buscarFilmesPopulares, buscarFilmesPorNome } from "../services/tmdb.js";

function Filmes() {
  const [texto, setTexto] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    setCarregando(true);
    setErro(false);

    const busca = texto
      ? buscarFilmesPorNome(texto)
      : buscarFilmesPopulares();

    busca
      .then((resultado) => {
        setFilmes(resultado);
      })
      .catch(() => {
        setErro(true);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, [texto]);

  return (
    <div>
      <h1>{texto ? `Resultados para "${texto}"` : "Filmes em alta"}</h1>

      <BarraBusca texto={texto} aoDigitar={setTexto} />

      {carregando && <p>Carregando filmes...</p>}
      {erro && <p>Não foi possível carregar os filmes agora.</p>}
      {!carregando && !erro && filmes.length === 0 && (
        <p>Nenhum filme encontrado.</p>
      )}

      {!carregando && !erro && (
        <div>
          {filmes.map((filme) => (
            <CardFilme key={filme.id} filme={filme} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Filmes;