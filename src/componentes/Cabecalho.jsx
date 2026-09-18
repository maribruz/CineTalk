import { Link } from "react-router-dom";
import { FaClapperboard } from "react-icons/fa6";

function Cabecalho() {
  return (
    <header>
      <Link to="/">
      <FaClapperboard /> CineTalk</Link>
      <nav>
        <Link to="/filmes">Filmes</Link>
        <Link to="/minhas-avaliacoes">Minhas avaliações</Link>
      </nav>
    </header>
  );
}

export default Cabecalho;