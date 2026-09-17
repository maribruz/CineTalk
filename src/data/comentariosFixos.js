const nomes = ["Marina", "Pedro", "Julia", "Rafael", "Beatriz"];
const textos = [
  "Um dos melhores que vi este ano.",
  "Muito bom, só achei o final meio corrido.",
  "Ok, mas esperava mais.",
  "Fotografia incrível, recomendo.",
  "Não me prendeu, mas outras pessoas parecem ter gostado.",
];
const notas = [5, 4, 3, 5, 2];

export function gerarComentariosFixos(idFilme) {
  const quantidade = 2 + (idFilme % 3);
  const comentarios = [];

  for (let i = 0; i < quantidade; i++) {
    comentarios.push({
      id: `fixo-${idFilme}-${i}`,
      autor: nomes[(idFilme + i) % nomes.length],
      nota: notas[(idFilme + i) % notas.length],
      texto: textos[(idFilme + i) % textos.length],
    });
  }

  return comentarios;
}