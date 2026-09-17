import { Link } from "react-router-dom";

function NaoEncontrado() {
  return (
    <div>
      <h1>404</h1>
      <p>Essa página não existe.</p>
      <Link to="/">Voltar para o início</Link>
    </div>
  );
}

export default NaoEncontrado;