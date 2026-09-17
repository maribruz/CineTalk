# Requirements — CineTalk

## 1. Visão do Produto

### Nome

CineTalk

### Problema

Quem gosta de ver filmes costuma esquecer a nota e o que achou dos filmes que já assistiu.

### Público

Pessoas que querem um lugar simples pra guardar a opinião sobre os filmes que vêm assistindo.

### Proposta de solução

Um site em React simples que busca filmes da API do TMDB, deixa a gente dar nota com estrelas e escrever um comentário, salvando tudo no próprio navegador.

---

## 2. Objetivo do MVP

Um site funcionando onde dá pra buscar filmes, ver os detalhes de cada um, escrever uma avaliação (nota + comentário) e ver a lista de filmes que eu já avaliei.

---

## 3. Funcionalidades

### F01 — Busca e Destaques (Home)

**Descrição:** Mostra os filmes em destaque e tem um campo de busca pra procurar por nome.

**Critérios de aceitação:**

*  Mostrar o menu no topo em todas as telas
*  Carregar a lista de destaques quando abrir o site
*  Atualizar os filmes na tela quando eu digitar na busca
*  Mostrar foto, título e nota em cada card de filme
*  Abrir a página do filme ao clicar no card

**Estados:**

*  Inicial: carrega a lista de destaques
*  Carregando: aviso de que está buscando os dados
*  Sucesso: lista de filmes na tela
*  Vazio: aviso de que nenhum filme foi encontrado
*  Erro: aviso de que a API falhou

---

### F02 — Página do Filme

**Descrição:** Mostra as informações do filme escolhido, a lista de comentários e a área pra eu avaliar.

**Critérios de aceitação:**

*  Carregar sinopse, foto e ano do filme usando o ID da URL
*  Buscar os dados de novo se eu trocar de filme
*  Mostrar os comentários inventados e o meu comentário (se eu já tiver avaliado)

**Estados:**

*  Inicial: busca as coisas na API
*  Carregando: aviso de carregando
*  Sucesso: detalhes do filme e comentários na tela
*  Vazio: não se aplica
*  Erro: aviso de que o filme não existe ou deu erro na busca

---

### F03 — Formulário de Avaliação

**Descrição:** Espaço com 5 estrelas e caixa de texto pra eu avaliar o filme.

**Critérios de aceitação:**

*  Clicar nas estrelas pra escolher a nota de 1 a 5
*  Digitar o texto do comentário na caixa
*  Salvar nota e texto no `localStorage` ao clicar em enviar
*  Colocar minha avaliação na lista da tela assim que enviar

**Estados:**

*  Inicial: estrelas e caixa de texto vazias
*  Carregando: salvando os dados
*  Sucesso: limpa os campos e atualiza a lista
*  Vazio: não deixa enviar se não tiver nota ou texto
*  Erro: aviso se der problema ao salvar no navegador

---

### F04 — Minhas Avaliações

**Descrição:** Tela que pega tudo o que eu salvei no `localStorage` e mostra na tela.

**Critérios de aceitação:**

*  Ler o `localStorage` assim que a página abrir
*  Mostrar os cards dos filmes com a nota que eu dei
*  Abrir a página do filme se eu clicar em um card

**Estados:**

*  Inicial: lendo o navegador
*  Carregando: processando os dados
*  Sucesso: lista com as minhas avaliações
*  Vazio: mensagem "Você ainda não avaliou nenhum filme" + botão pra voltar pra Home
*  Erro: aviso se os dados salvos estiverem com problema

---

### F05 — Cabeçalho e Erro

**Descrição:** Menu que fica no topo do site e tela de link que não existe.

**Critérios de aceitação:**

*  Cabeçalho visível em qualquer página do site
*  Mandar pra página de erro se tentar acessar um link que não existe
*  Botão na página de erro pra voltar pra Home

**Estados:**

*  Inicial: carrega a rota certa
*  Sucesso: mostra a página pedida ou a tela de erro (404)

---

## 4. Fora do Escopo

* Sistema de login e cadastro
* Banco de dados de verdade (PostgreSQL, Firebase, etc.)
* Enviar meus comentários para outras pessoas verem
* Trocar foto de perfil
* Criar lista de favoritos