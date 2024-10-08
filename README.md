# backend-simpleUser

Rota de buscar todos os usuários:
http://localhost:3001/users
http://localhost:3001/users?page=2

Rota de fazer login:
POST: http://localhost:3001/users/login

Exemplo de JSON:
  {
    "email": "joao.silva@email.com",
    "password": "senha123",
  }


Rota de criar um novo usuário:
POST: http://localhost:3001/users

Exemplo de JSON:
  Completo:
  {
    "name": "João Silva",
    "email": "joao.silva@email.com",
    "password": "senha123",
    "address": "Rua A, 123",
    "phone": "1234567890",
  }

  Minimo:
  {
    "name": "João Silva",
    "email": "joao.silva@email.com",
    "password": "senha123",
    "address": "Rua A, 123",
    "phone": "1234567890",
  }


