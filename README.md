<h1 align="center"><strong>CRUD Usuários com Autthentication e JWT Token</strong></h1>

Está Rest API trata-se de um CRUD básico de usuários com o objetivo de trinar os conhecimentos adquiridos sobre Nodejs, Express e utilização de tokens para autenticação. Como feature extra foi implementado integração com banco de dados MongoDB utilizando a biblioteca Mongoose.

<br/>
<br/>

## **Tecnologias utilizadas**

<hr/>

- Nodejs 17.6.0
- Express 4.18.1
- Mongoose 6.3.3
- Nodemon 2.0.16
- Surcrase 3.21.0
- Jsonwebtoken 8.5.1
- Bcrypt 2.4.3
- Uuid 8.3.2

<br/>
<br/>

## **Configuração banco de dados**

<hr/>

O banco de dados em MongoDB pode ser configurado tanto localmente quanto pelo MongoDB Atlas. <br/>
Caso utilize um banco local configure avariável de ambiente MONGODB_LOCAL em um arquivo .env conforme o arquivo .env.example. Para maiores informações veja [Mongosh](https://www.mongodb.com/docs/mongodb-shell/run-commands/).<br/>
Do contrário, optando pelo MongoDB Atlas, configure avariável de ambiente MONGODB_URI. Para maiores informações veja [MongoDB Atlas](https://www.mongodb.com/docs/atlas/connect-to-database-deployment/).

<br/>
<br/>

## **Endpoints**

<hr/>

A API possui um total de 6 endpoits onde os usuários podem cadastra-se, fazer login, visualizar suas informações e de outros usuários (caso sejam usuários do tipo admin), atualizar suas informações ou mesmo excluir seu cadastro.
Apenas as rotas de login e cadastro não serão protegidas, para todas as demais rotas será necessário a utilização de token de authenticação.

<br/>

### **Rotas não protegidas**

<hr/>

#### **Criação de usuário**

-> POST /users - Formato da requisição:

```json
{
  "name": "John Doe",
  "email": "johndoe@mail.com",
  "password": "123456",
  "isAdm": true
}
```

-> Status code 201 - Formato da resposta:

```json
{
  "name": "John Doe",
  "email": "johndoe@mail.com",
  "isAdm": true,
  "uuid": "fb03b6a7-4287-4cb4-95c3-bc786ef66749",
  "createdOn": "2022-05-16T11:40:56.953Z",
  "updatedOn": "2022-05-16T11:40:56.953Z"
}
```

-> Possíveis erros

- Email já registrado - Status code 400;

  ```json - response
  {
    "message": "E-mail already registered"
  }
  ```

- Campos necessários não utilizados - Status code 400;

  ```json - response
  {
    "error": "Register failed",
    "necessaryFields": {
      "name": "string",
      "email": "string",
      "password": "string",
      "isAdm": "boolean"
    }
  }
  ```

<br />

#### **Login de usuário**

-> POST /login - Formato da requisição:

```json
{
  "email": "johndoe@mail.com",
  "password": "123456"
}
```

-> Status code 200 - Formato da resposta:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZiMDNiNmE3LTQyODctNGNiNC05NWMzLWJjNzg2ZWY2Njc0OSIsImlhdCI6MTY1MjcwMTU2MSwiZXhwIjoxNjUyNzg3OTYxfQ.wKUkVr7nW-FRV0rZh0ju6Bm9vPWqoRraZ8gyH7wqUKo"
}
```

-> Possíveis erros

- Email ou senha inválidos - Status code 400;

  ```json - response
  {
    "message": "Wrong email/password"
  }
  ```

  <br/>
  <br/>

### **Rotas protegidas**

<hr/>

Para este tipo de endpoint é necessário enviar o token de acesso no header da requisição da seguinte maneira:

```js - header
{
  headers: {
    Authorization: `Bearer ${token}`;
  }
}
```

-> Possíveis erros ao acessar rotas protegidas sem token

- Status code 401 - Formato da resposta:

  ```json - response
  {
    "msg": "Missing Authorization Header"
  }
  ```

-> Possíveis erros ao acessar rotas para usuários admins

- Status code 401 - Formato da resposta:

  ```json - response
  {
    "message": "Only administrators can access this information"
  }
  ```

  <br/>

#### **Informações do usuário logado**

-> GET /users/profile - Requisição sem corpo:

-> Status code 200 - Formato da resposta:

```json
{
  "name": "John Doe",
  "email": "johndoe@mail.com",
  "isAdm": true,
  "uuid": "fb03b6a7-4287-4cb4-95c3-bc786ef66749",
  "createdOn": "2022-05-16T11:40:56.953Z",
  "updatedOn": "2022-05-16T11:40:56.953Z"
}
```

<br/>

#### **Listagem dos usuários**

:warning: **Aviso!** Somente usuários admins podem acessar essa rota.

-> GET /users - Requisição sem corpo:

-> Status code 200 - Formato da resposta:

```json
[
  {
    "name": "Rafael Oliveira Carvalho",
    "email": "rafael@mail.com",
    "isAdm": true,
    "uuid": "520dde14-c90a-43d4-8b2d-e75c1c840e15",
    "createdOn": "2022-05-13T20:01:00.637Z",
    "updatedOn": "2022-05-13T20:08:26.316Z"
  },
  {
    "name": "John Doe",
    "email": "johndoe@mail.com",
    "isAdm": true,
    "uuid": "fb03b6a7-4287-4cb4-95c3-bc786ef66749",
    "createdOn": "2022-05-16T11:40:56.953Z",
    "updatedOn": "2022-05-16T11:40:56.953Z"
  }
]
```

<br/>

#### **Atualização de usuários**

:warning: **Aviso!** Somente usuários admins podem atualizar informações de outros usuários. Os demais usuários podem atualizar somente as próprias informações. <br/>
:warning: **Aviso!** Somente os campos "name", "email" e "password" podem ser atualizados. Outros campos serão ignorados.

-> PATCH /users/:userId - Formato da requisição:

```json
{
  "name": "John Doe",
  "email": "johndoe@mail.com",
  "password": "123456"
}
```

-> Status code 200 - Formato da resposta:

```json
{
  "name": "John Doe",
  "email": "johndoe@mail.com",
  "isAdm": true,
  "uuid": "fb03b6a7-4287-4cb4-95c3-bc786ef66749",
  "createdOn": "2022-05-16T11:40:56.953Z",
  "updatedOn": "2022-05-16T13:17:18.714Z"
}
```

-> Possíveis erros

- Usuário não encontrado - Status code 404;

  ```json - response
  {
    "message": "User not found"
  }
  ```

<br/>

#### **Deleção de usuários**

:warning: **Aviso!** Somente usuários admins podem deletar outros usuários. Os demais usuários podem deletar somente as próprias contas.

-> DELETE /users/:userId - Requisição sem corpo:

-> Status code 200 - Formato da resposta:

```json
{
  "message": "User deleted with success"
}
```

-> Possíveis erros

- Usuário não encontrado - Status code 404;

  ```json - response
  {
    "message": "User not found"
  }
  ```
