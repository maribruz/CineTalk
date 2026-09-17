import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>
      <h1>CineTalk</h1>
      <p>Avalie os filmes que você já viu e veja o que outras pessoas acharam.</p>
      <Link to="/filmes">Ver filmes</Link>
    </div>
  );
}

export default Inicio;