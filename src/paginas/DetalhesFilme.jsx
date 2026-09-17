import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { buscarDetalhesDoFilme } from "../services/tmdb.js";
import { gerarComentariosFixos } from "../data/comentariosFixos.js";
import FormularioAvaliacao from "../componentes/FormularioAvaliacao.jsx";
import ListaComentarios from "../componentes/ListaComentarios.jsx";

function DetalhesFilme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [minhaAvaliacao, setMinhaAvaliacao] = useState(null);

  useEffect(() => {
    setCarregando(true);
    setErro(false);

    buscarDetalhesDoFilme(id)
      .then((dados) => setFilme(dados))
      .catch(() => setErro(true))
      .finally(() => setCarregando(false));
  }, [id]);

  useEffect(() => {
    const todasAvaliacoes = JSON.parse(
      localStorage.getItem("minhasAvaliacoes") || "{}"
    );
    setMinhaAvaliacao(todasAvaliacoes[id] || null);
  }, [id]);

  function salvarAvaliacao({ nota, texto }) {
    const todasAvaliacoes = JSON.parse(
      localStorage.getItem("minhasAvaliacoes") || "{}"
    );
    todasAvaliacoes[id] = { nota, texto };
    localStorage.setItem("minhasAvaliacoes", JSON.stringify(todasAvaliacoes));
    setMinhaAvaliacao({ nota, texto });
  }

  if (carregando) return <p>Carregando filme...</p>;
  if (erro) return <p>Não foi possível carregar este filme.</p>;
  if (!filme) return null;

  const comentariosFixos = gerarComentariosFixos(Number(id));
  const meuComentario = minhaAvaliacao
    ? [{ id: "eu", autor: "Você", ...minhaAvaliacao }]
    : [];
  const todosComentarios = [...meuComentario, ...comentariosFixos];

  return (
    <div>
      <h1>{filme.title}</h1>
      <p>Nota TMDB: {filme.vote_average.toFixed(1)}</p>
      <p>{filme.overview}</p>

      <h2>{minhaAvaliacao ? "Sua avaliação" : "Avalie este filme"}</h2>
      <FormularioAvaliacao
        notaInicial={minhaAvaliacao?.nota}
        textoInicial={minhaAvaliacao?.texto}
        aoSalvar={salvarAvaliacao}
      />

      <h2>Comentários ({todosComentarios.length})</h2>
      <ListaComentarios comentarios={todosComentarios} />
    </div>
  );
}

export default DetalhesFilme;