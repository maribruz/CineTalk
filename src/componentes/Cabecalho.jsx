import { Link } from "react-router-dom";

function Cabecalho() {
  return (
    <header>
      <Link to="/">CineTalk</Link>
      <nav>
        <Link to="/filmes">Filmes</Link>
        <Link to="/minhas-avaliacoes">Minhas avaliações</Link>
      </nav>
    </header>
  );
}

export default Cabecalho;