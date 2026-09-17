# Architecture — CineTalk

## 1. Visão Geral

A aplicação é um site em React feito com Vite. A navegação entre as telas é feita pelo React Router. Os dados dos filmes vêm da API do TMDB usando `fetch`, e os ícones vêm da biblioteca `react-icons`. As notas e comentários que você escrever ficam salvos no `localStorage` do seu navegador.

---

## 2. Estrutura de Pastas

```text
src/
├── componentes/
│   ├── CardFilme.jsx
│   ├── Estrelas.jsx
│   ├── FormularioAvaliacao.jsx
│   ├── ListaComentarios.jsx
│   ├── BarraBusca.jsx
│   └── Cabecalho.jsx
├── paginas/
│   ├── Inicio.jsx
|   ├── Films.jsx
│   ├── DetalhesFilme.jsx
│   ├── MinhasAvaliacoes.jsx
│   └── NaoEncontrado.jsx
├── App.jsx
├── main.jsx
└── style.css

```

---

## 3. Páginas e Rotas

| Página | Rota | Objetivo |
| --- | --- | --- |
| **Inicio** | `/` | Tela de abertura do site, com uma chamada para ir ver os filmes |
| **Filmes** | `/filmes` | Mostrar os filmes em destaque e o campo de busca |
| **DetalhesFilme** | `/filme/:id` | Mostrar foto, sinopse, nota oficial, comentários e área de avaliar |
| **MinhasAvaliacoes** | `/minhas-avaliacoes` | Mostrar a lista dos filmes que você já avaliou |
| **NaoEncontrado** | `*` | Mostrar aviso de página não encontrada (erro 404) |

---

## 4. Componentes

| Componente | Responsabilidade | Props |
| --- | --- | --- |
| **Cabecalho** | Menu do topo fixo com os links do site | Nenhuma |
| **CardFilme** | Cartão que mostra foto, título e nota de um filme | `filme` |
| **BarraBusca** | Campo de texto para digitar o nome do filme | `texto`, `aoDigitar` |
| **Estrelas** | As 5 estrelinhas (para mostrar a nota ou clicar) | `nota`, `aoMudar`, `somenteLeitura` |
| **FormularioAvaliacao** | As estrelas + caixa de texto para enviar o comentário | `idFilme`, `aoSalvar` |
| **ListaComentarios** | Lista com os comentários do filme | `comentarios` |

---

## 5. Estado da Aplicação

| Estado | Onde será controlado? | Por quê? |
| --- | --- | --- |
| **Lista de filmes e busca** | `Filmes.jsx` | Guarda o que você digitou na busca e os filmes que aparecem na tela |
| **Dados do filme atual** | `DetalhesFilme.jsx` | Guarda as informações do filme que a API retornou |
| **Nota e texto digitado** | `FormularioAvaliacao.jsx` | Guarda a nota e o comentário enquanto você está escrevendo |
| **Lista de avaliações** | `MinhasAvaliacoes.jsx` e `DetalhesFilme.jsx` | Lê o `localStorage` para mostrar o que você já salvou no navegador |

---

## 6. useEffect

| Efeito | Quando acontece? | O que faz? |
| --- | --- | --- |
| **Buscar destaques / busca** | Quando abre a página `Inicio` ou quando você digita na `BarraBusca` | Busca os filmes na API do TMDB |
| **Carregar filme selecionado** | Quando abre a página `DetalhesFilme` ou troca o ID do filme na URL | Busca os dados daquele filme específico na API |
| **Carregar avaliações salvas** | Quando as páginas de detalhes ou de avaliações abrem | Pega do `localStorage` o que você já avaliou |

---

## 7. Dependências

| Biblioteca | Uso | Motivo |
| --- | --- | --- |
| **react-router-dom** | Rotas (`<Routes>`, `<Route>`, `Link`) | Mudar de página sem recarregar o navegador |
| **react-icons** | Ícones (`FaStar`, `FaSearch`, etc.) | Pegar ícones prontos e simples de usar |