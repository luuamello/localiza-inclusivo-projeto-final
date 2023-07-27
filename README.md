# Localiza Inclusivo Projeto-Final

<br>

## 🌈 **Apresentação** 

O **Localiza Inclusivo** é um projeto de conclusão do bootcamp de back-end da Turma On22 da [{Reprograma}](https://www.reprograma.com.br/). É uma API desenvolvida com o objetivo de localizar restaurantes, mas com um diferencial, ela também fornece informações do restaurante se contém acessibilidades para PCD ( Pessoa Com Deficiência). Na intenção de  garantir que todos possam desfrutar da experiência de sair para comer, independentemente de suas necessidades específicas.

Através dessa API, fica fácil encontrar restaurantes próximos que oferecem recursos e instalações adequadas para acomodar PCDs. Com um simples clique, terá acesso a informações detalhadas sobre cada restaurante, como rampas de acesso, banheiros adaptados, cardápios em braille, entre outros recursos inclusivos.

<br>

## ✨ **Funcionalidades**

#### **Para o Restaurante**

✔️ Cadastra um novo restaurante

✔️ Lista restaurantes

✔️ Visualiza restaurante pelo nome

✔️ Visualiza restaurante pela localização (endereço, cidade ou estado)

✔️ Visualiza restaurante com a acessibilidade necessária

✔️ Atualiza dados do restaurante 

✔️ Remove um restaurante específico

#### **Para o Login**

✔️ Cadastra um novo usuário

✔️ Lista todos os usuários

✔️ Atualiza um dado específico do usuário

✔️ Remove um usuário específico

<br>

## 📚 **Documentação**

📝 [Swagger](https://localiza-inclusivo.onrender.com/minha-rota-de-documentacao/)

📝 [Apresentação](https://www.canva.com/design/DAFprT60cLM/zefkiBGu74TVf7fZFksf8w/edit?utm_content=DAFprT60cLM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)


<br>

## 📁 **Arquitetura MVC**

```
  📁 localiza-inclusivo-projeto-final             
  |-  📁 node_modules
  |-  📁 src  
  |    |- 📁 controllers 
  |         |- 📄 loginController.js
  |         |- 📄 restauranteController.js    
  |    |- 📁 database   
  |         |- 📄 mongooseConnect.js    
  |    |- 📁 models  
  |         |- 📄 loginModel.js    
  |         |- 📄 restauranteModel.js
  |    |- 📁 routes  
  |         |- 📄 loginRoutes.js     
  |         |- 📄 restauranteRoutes.js   
  |    |- 📄 app.js  
  |-  📁 Swagger    
  |         |- 📄 swagger_output.json   
  |-  📁 test 
  |         |- 📄 restaurante.test.js
  |-  📄 .env
  |-  📄 .env.example 
  |-  📄 .gitignore
  |-  📄 package-lock.json   
  |-  📄 pakage.json
  |-  📄 README.md
  |-  📄 server.js
  |-  📄 Swagger.js    
  ```

<br>

  ## 🛠️ **Dependencias e Tecnologias** 

- JavaScript
- Node.js
- Git
- MongoDB
- Swagger
- Postman
- Express
- Nodemon
- Dotenv-safe
- Cors
- Bcrypt
- jwt
- Mongoose
- Jest
- Render

<br>

## 📌 **Rotas**


### - Restaurante

| Verbo  |   EndPoint          | Descrição da Rota                           | Status | Auth |
| ------ | ------------------- | ------------------------------------------- | ------ |----- |
| GET    | /restaurantes       | Visializa todos os restaurantes             |   200  |  ❌  |
| GET    | /nome               | Visualiza restaurante pelo nome             |   200  |  ❌  |
| GET    | /estado             | Visualiza restaurante pelo estado           |   200  |  ❌  |
| GET    | /cidade             | Visualiza restaurante pela cidade           |   200  |  ❌  |
| GET    | /rampa              | Visualiza restaurante com rampas de acesso  |   200  |  ❌  |
| GET    | /banheiros          | Visualiza restaurante com banheiros acessiveis|   200  |  ❌  |
| GET    | /brailer            | Visualiza restaurante com cardápio braile   |   200  |  ❌  |
| GET    | /libras             | Visualiza restaurante com interprete de libras|   200  |  ❌  |
| GET    | /autista            | Visualiza restaurante com cardápio para autista|   200  |  ❌  |
| GET    | /brailer            | Visualiza restaurante com fone abafador de som|   200  |  ❌  |
| POST   | /add                | Cadastra um novo restaurante                |   201  |  ✔️  |
| PATCH  | /:id                | Altera algum dado do restaurante            |   200  |  ✔️  |
| DELETE | /:id                | Deleta restaurante pelo ID                  |   200  |  ✔️  |
<br>


### - Login

| Verbo  |   EndPoint          | Descrição da Rota                           | Status | Auth |
| ------ | ------------------- | ------------------------------------------- | ------ |----- |
| POST   | /criar              | Cadastro de novo usuário                    |   201  |  ❌  |
| GET    | /logins             | Visualiza todos os usuários                 |   200  |  ❌  |
| PATCH  | /atualiza/:id       | Altera algum dado do usuário                |   200  |  ✔️  |
| DELETE | /:id                | Deleta usuário pelo ID                      |   200  |  ✔️  |
| POST   | /login              | Login de usuário                            |   200  |  ✔️  |
<br>

> Você pode testar as rotas Get, Post, Patch e Delete através da ferramenta Postman. Não esqueça de passar o token no bearer token no header de autenticação.

<br>


## 🌟 **Instalação e Contribuição no projeto** 

1. Faça um **fork** do projeto.
2. Realize o clone do projeto através do `git clone https://github.com/luuamello/localiza-inclusivo-projeto-final.git`
3. Crie uma nova branch com as suas alterações: `git checkout -b minha-branch`
4. Instale as dependências necessárias à execução da API através do comando `npm install`
5. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: Minha contribuição"`
6. Envie as suas alterações: `git push origin minha-branch`

<br>

## 💜 **Autora**
<p align="center">Desenvolvido por:</p>

<p align="center"><a href="https://www.linkedin.com/in/luanamelo97/" target="_blank"><img src="https://img.shields.io/badge/-Luana Melo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/luanamelo97//" target="_blank"></a> </p>

<p align="center"><a href="https://www.instagram.com/luuamello/" target="_blank"><img src="https://img.shields.io/badge/-Luana Melo-E4405F?style=for-the-badge&logo=instagram&logoColor=white&link=https://www.instagram.com/luuamello//" target="_blank"></a> </p>

<br>

## 📌 **Referências**

- [Emojis](https://emojipedia.org/)

<br>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" /> <p align="center"></p>
