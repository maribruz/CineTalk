# CineTalk

Trabalho de WebDev - Feito por Mariana Bruzadim

## Problema

O TV Time fechou em julho de 2026 e levou junto os dados de todo mundo que usava. Quem assistia filmes e séries perdeu o lugar onde registrava rapidamente sua opinião e via a opinião de outras pessoas sobre o mesmo título.

## Solução

O CineTalk é um site onde a pessoa navega pelos filmes (dados vindos da API do TMDB), dá uma nota de 1 a 5 estrelas e escreve um comentário curto, e consegue ver os comentários que outras pessoas deixaram sobre aquele mesmo filme. Não é preciso marcar "assistido" separadamente — dar uma nota já conta como isso.

## Tecnologias

- React + Vite
- React Router (múltiplas páginas, layout, rota dinâmica `/filme/:id`)
- react-icons (ícones, como a claquete do logo e as estrelas de nota)
- CSS puro, sem framework de UI
- localStorage (para salvar as avaliações da pessoa no navegador, já que o projeto não tem backend)

## API usada

[The Movie Database (TMDB)](https://developer.themoviedb.org/docs/getting-started) — endpoints de filmes populares, busca por nome, e detalhes de um filme específico.

## Funcionalidades

- Página inicial com uma vitrine de pôsteres em destaque
- Lista de filmes populares com busca em tempo real
- Página de detalhe do filme, com sinopse e nota do TMDB
- Avaliação por estrelas (1 a 5) + comentário opcional, salvos no navegador
- Comentários de outras pessoas simulados, para dar a sensação de comunidade (o projeto não tem banco de dados compartilhado)
- Página "Minhas avaliações" com os filmes que já avaliei
- Página de erro para rotas que não existem

## Uso de IA

Usei IA (Claude) durante todo o processo, seguindo a metodologia de Spec Driven Development: primeiro escrevi a documentação (`docs/requirements.md` e `docs/architecture.md`) definindo o problema, as funcionalidades e a arquitetura, e só depois fui construindo o código, componente por componente, com a IA me explicando cada trecho enquanto eu digitava e testava. As decisões de produto (qual problema resolver, quais páginas existem) e de design (paleta escura/caramelo, referências visuais) foram minhas, feitas antes da geração de qualquer código. Também usei a IA para resolver erros de configuração do ambiente (instalação do Node.js, Git, variáveis de ambiente) ao longo do desenvolvimento.

## Referências visuais

Estão documentadas em `docs/references/references.md`, com prints e a justificativa de cada uma.

## Limitações conhecidas

- Não há backend: os comentários de outras pessoas são simulados, e minha própria avaliação fica salva só no meu navegador (não é compartilhada entre dispositivos)
- Não há login/autenticação

## Como rodar o projeto

1. Instale as dependências:
```bash
   npm install
```
2. Crie uma conta gratuita no TMDB em https://www.themoviedb.org/signup, e em Configurações > API copie o "API Read Access Token" (v4 auth)
3. Crie um arquivo `.env` na raiz do projeto com:
