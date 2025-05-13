# HackTank API - Waitlist

API para gerenciar inscrições na waitlist do HackTank.

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- SQLite

## Estrutura do Projeto

```
api/
├─ prisma/
│  ├─ schema.prisma        # Modelo de dados
│  └─ migrations/          # Migrações do banco de dados
├─ index.js                # Ponto de entrada da API
├─ package.json            # Dependências e scripts
└─ .env                    # Variáveis de ambiente
```

## Endpoints

### `POST /api/waitlist`

Adiciona um novo e-mail à waitlist.

**Parâmetros:**
```json
{
  "name": "Nome do Usuário",
  "email": "email@exemplo.com"
}
```

**Respostas:**
- `201 Created`: Inscrição realizada com sucesso
- `400 Bad Request`: Validação falhou (nome ou e-mail inválidos)
- `409 Conflict`: E-mail já cadastrado
- `500 Internal Server Error`: Erro no servidor

### `GET /healthz`

Verifica a saúde da API.

**Resposta:**
- `200 OK`: API funcionando corretamente

## Como Executar

### Pré-requisitos

- Node.js 14+ instalado

### Instalação

1. Clone o repositório
2. Entre no diretório da API:
   ```
   cd apps/api
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Execute a migração do banco de dados:
   ```
   npx prisma migrate dev
   ```

### Execução em Ambiente de Desenvolvimento

```
npm run dev
```

Isso iniciará o servidor de desenvolvimento em [http://localhost:3001](http://localhost:3001).

### Execução em Produção

```
npm start
``` 