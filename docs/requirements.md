# requirements.md — CineTalk

## Sobre o projeto

O TV Time fechou em julho de 2026 e levou junto os dados de todo mundo que usava. A gente ficou sem um lugar simples pra anotar o que assistiu e ver o que os outros acharam. O CineTalk tenta resolver essa parte específica desse problema.

## Qual problema a gente escolheu resolver

As pessoas assistem um filme e querem anotar rápido o que acharam, sem escrever uma resenha gigante em outro lugar. E antes de assistir algo, querem saber se quem já viu recomendou ou não.

## O que o site vai fazer

- Mostrar filmes (vindos da API do TMDB) pra pessoa navegar e pesquisar
- Deixar dar uma nota de 1 a 5 estrelas pra um filme e escrever um comentário curto
- Marcar automaticamente um filme como "assistido" quando a pessoa avalia ele — não existe um botão separado de "marcar como visto", o selo aparece sozinho a partir da nota
- Mostrar, na página do filme, os comentários que outras pessoas deixaram
- Ter uma página com "meus filmes avaliados/assistidos"

O que a gente não vai fazer nessa versão: assistir o filme dentro do site (nada de player/streaming), login de verdade, seguir outras pessoas, criar listas, mostrar onde assistir.

## Público alvo

Gente que assiste bastante filme/série e curte comentar rápido sobre o que viu, sem ter que criar conta em mais um app.

## Funcionalidades do site

- Ver filmes populares assim que entra no site
- Pesquisar um filme pelo nome
- Clicar num filme e ver a sinopse, a nota do TMDB e os comentários de quem já assistiu
- Dar uma nota (1 a 5 estrelas) e escrever um comentário sobre o filme
- Ver o próprio comentário aparecer na hora, sem precisar recarregar a página
- Ver uma lista com tudo que já avaliou
- Apagar uma avaliação, se mudar de ideia

## Como eu vou saber que está funcionando

- A página inicial mostra uma lista de filmes reais, vindos da API
- A busca realmente filtra pelo que a pessoa digitou
- Clicar num filme abre a página só daquele filme
- Dá pra avaliar e o comentário aparece na lista na hora
- Se eu recarregar a página, minha avaliação continua lá (fica salva no navegador)
- A página do filme mostra comentários de outras pessoas também (como não tem um banco de dados de verdade nesse MVP, esses comentários são simulados)
- Se eu entrar numa rota que não existe, aparece uma página de erro, não uma tela em branco

## Situações que precisam ser tratadas

- Carregando: enquanto espera a resposta da API
- Deu erro: a API pode falhar, precisa avisar e deixar tentar de novo
- Vazio: busca sem resultado, ou eu ainda não avaliei nenhum filme
- Normal: quando tudo carregou certo

## Regras que o site precisa seguir

- Pra avaliar, a nota é obrigatória; o comentário pode ficar em branco
- Só dá pra ter uma avaliação minha por filme — se eu avaliar de novo, substitui a de antes, não duplica
- Os comentários aparecem do mais novo pro mais antigo
- Um filme conta como "assistido" automaticamente a partir do momento que a pessoa dá uma nota a ele — não existe uma ação separada pra isso