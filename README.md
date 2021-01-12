# Code Challenge Yungas - Backend

Código criado utilizando TypeScript com os príncipios S.O.L.I.D com arquitetura hexagonal.

---

<h3>Como instalar a API localmente.</h3>

Siga os passos abaixo, executando os comandos para instalar as dependências e rodar a API localmente.
<br>

- Clone o projeto para a maquina local
<pre><code> git clone https://github.com/alivemindset/yungas-challenge.git </code></pre>

- Instale as dependências
<pre><code> yarn install </code></pre>

- Rodar em modo desenvolvimento
<pre><code> yarn dev </code></pre>

- Realizar build
<pre><code> yarn build </code></pre>

- Rodar o projeto build
<pre><code> yarn start </code></pre>


<h3>Testar as rotas da API</h3>

Para testar os endpoints (rotas) da API, pode usar o Insomnia, Postman ou qualquer outro REST Client.
A porta padrão do servidor é 3333.

Rotas disponíveis:
 <h4>http://127.0.0.1:3333/</h4>
  <p>A Rota retorna 200 para mostrar se a API está funcionando.</p>
  
---
  
 <h4>http://127.0.0.1:3333/peoples?page=1&page_size=20</h4>
  <p>A Rota recebe dois parâmetros opcionais chamados de <b>page</b> e <b>page_size</b>.</p>
  
| Parâmetros | Requerido | Padrão  |
| ---------- |:---------:| -------:|
| page       | não       |   1     |
| page_size  | não       |   20    |

<p>Retorna pessoas cadastradas no banco de dados com paginação.</p>

 <h4>http://127.0.0.1:3333/peoples/:região?page=1&page_size=20</h4>
  <p>A Rota recebe dois paramêtros opcionais chamados de <b>page</b> e <b>page_size</b>. Também recebe um parâmetro para filtrar por região do país.</p>
  
| Parâmetros | Requerido | Padrão  | Opções |
| ---------- |:---------:| -------:| -------|
| :região    | sim       |         | Norte, Nordeste, Centro_Oeste, Sudeste, Sul |
| page       | não       |   1     | |
| page_size  | não       |   20    | |

<p>Exemplo: http://127.0.0.1:3333/peoples/Norte</p>
<p>Retorna pessoas cadastradas no banco de dados com paginação por região do Brasil.</p>
