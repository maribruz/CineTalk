import { useState } from "react";
import Estrelas from "./Estrelas.jsx";

function FormularioAvaliacao({ notaInicial, textoInicial, aoSalvar }) {
  const [nota, setNota] = useState(notaInicial || 0);
  const [texto, setTexto] = useState(textoInicial || "");

  function enviouFormulario(evento) {
    evento.preventDefault();

    if (nota === 0) {
      return;
    }

    aoSalvar({ nota, texto });
  }

  return (
    <form onSubmit={enviouFormulario}>
      <p>Sua nota:</p>
      <Estrelas nota={nota} aoMudar={setNota} somenteLeitura={false} />

      <p>Comentário (opcional):</p>
      <textarea
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        placeholder="O que você achou desse filme?"
      />

      <button type="submit">Salvar avaliação</button>
    </form>
  );
}

export default FormularioAvaliacao;