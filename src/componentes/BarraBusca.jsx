import { FaSearch } from "react-icons/fa";

function BarraBusca({ texto, aoDigitar }) {
  return (
    <div>
      <FaSearch />
      <input
        type="text"
        placeholder="Buscar filme..."
        value={texto}
        onChange={(evento) => aoDigitar(evento.target.value)}
      />
    </div>
  );
}

export default BarraBusca;