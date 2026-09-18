import { Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio.jsx";
import Filmes from "./paginas/Filmes.jsx";
import DetalhesFilme from "./paginas/DetalhesFilme.jsx";
import MinhasAvaliacoes from "./paginas/MinhasAvaliacoes.jsx";
import NaoEncontrado from "./paginas/NaoEncontrado.jsx";
import Cabecalho from "./componentes/Cabecalho.jsx";

function App() {
  return (
    <div>
      <Cabecalho />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/filme/:id" element={<DetalhesFilme />} />
          <Route path="/minhas-avaliacoes" element={<MinhasAvaliacoes />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;