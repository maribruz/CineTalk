import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Estrelas({ nota, aoMudar, somenteLeitura }) {
  const [notaMouse, setNotaMouse] = useState(0);

  const notaMostrada = notaMouse || nota;

  function clicouNaEstrela(numero) {
    if (somenteLeitura) return;
    aoMudar(numero);
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map((numero) => (
        <FaStar
          key={numero}
          onClick={() => clicouNaEstrela(numero)}
          onMouseEnter={() => !somenteLeitura && setNotaMouse(numero)}
          onMouseLeave={() => !somenteLeitura && setNotaMouse(0)}
          color={numero <= notaMostrada ? "gold" : "gray"}
          style={{ cursor: somenteLeitura ? "default" : "pointer" }}
        />
      ))}
    </div>
  );
}

export default Estrelas;