import Estrelas from "./Estrelas.jsx";

function ListaComentarios({ comentarios }) {
  if (comentarios.length === 0) {
    return <p>Ainda não há comentários para este filme.</p>;
  }

  return (
    <ul>
      {comentarios.map((comentario) => (
        <li key={comentario.id}>
          <p>
            <strong>{comentario.autor}</strong>
          </p>
          <Estrelas nota={comentario.nota} somenteLeitura={true} />
          {comentario.texto && <p>{comentario.texto}</p>}
        </li>
      ))}
    </ul>
  );
}

export default ListaComentarios;