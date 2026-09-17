const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function buscarFilmesPopulares() {
  const resposta = await fetch(
    "https://api.themoviedb.org/3/discover/movie?language=pt-BR&sort_by=popularity.desc",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  const dados = await resposta.json();
  return dados.results;
}

export async function buscarFilmesPorNome(nome) {
  const resposta = await fetch(
    `https://api.themoviedb.org/3/search/movie?language=pt-BR&query=${encodeURIComponent(nome)}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  const dados = await resposta.json();
  return dados.results;
}