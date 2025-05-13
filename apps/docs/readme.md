# HackTank — Implementação da Landing Page e API

Este repositório contém a implementação do HackTank, uma plataforma de hackathons gamificados com sistema de barganha criativa.

## Estrutura do Projeto

O projeto está organizado como um monorepo com as seguintes aplicações:

```
hacktank/
├─ apps/
│  ├─ landing/        # Landing page (React + Vite + Tailwind CSS)
│  ├─ api/            # API para waitlist (Node.js + Express + Prisma)
│  └─ db/             # Banco de dados SQLite
├─ .github/           # Configurações futuras para CI/CD
└─ README.md          # Documentação principal
```

## Aplicações

### Landing Page

Uma página web estática construída com React, Vite e Tailwind CSS que apresenta o projeto HackTank e captura e-mails para a waitlist.

**Tecnologias:**
- React 18
- Vite
- Tailwind CSS (via CDN)

**Execução:**
```
cd apps/landing
npm install
npm run dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

### API

Uma API RESTful para gerenciar inscrições na waitlist.

**Tecnologias:**
- Node.js
- Express
- Prisma ORM
- SQLite

**Execução:**
```
cd apps/api
npm install
npx prisma migrate dev
npm run dev
```

Acesse em: [http://localhost:3001](http://localhost:3001)

## Fluxo de Trabalho

1. Os usuários visitam a landing page e preenchem o formulário de inscrição
2. O formulário envia os dados para a API
3. A API valida e armazena os dados no banco de dados SQLite
4. O usuário recebe uma confirmação de inscrição

## Próximos Passos

- [x] Implementação da landing page
- [x] Implementação da API para waitlist
- [ ] Configurar domínio hacktank.gg
- [ ] Integrar Google Analytics
- [ ] Implantar a aplicação em ambiente de produção (Netlify/Render)
- [ ] Adicionar testes automatizados

## Paleta de Cores

| Função no desenho                   | Cor de referência    | HEX       | RGB             |
| ----------------------------------- | -------------------- | --------- | --------------- |
| Corpo do tanque                     | **Verdant Green**    | `#3AA65C` | 58 , 166 , 92   |
| Sombras do corpo & bordas internas  | **Deep Evergreen**   | `#2B6B3C` | 43 , 107 , 60   |
| Boca do canhão & braços             | **Pumpkin Orange**   | `#E67127` | 230 , 113 , 39  |
| Parte interna do canhão (gradiente) | **Coral Red**        | `#C43D21` | 196 , 61 , 33   |
| Rodas internas & detalhes           | **Sunflower Yellow** | `#FFB640` | 255 , 182 , 64  |
| Trilhos & contorno externo grosso   | **Midnight Navy**    | `#002E3D` | 0 , 46 , 61     |
| Botões do controle (D‑pad)          | **Sky Teal**         | `#4AC0C8` | 74 , 192 , 200  |
| Fundo/textura off‑white             | **Warm Cream**       | `#F5E9D2` | 245 , 233 , 210 |
| Olhos & luvas                       | **Pure White**       | `#FFFFFF` | 255 , 255 , 255 |

# HackTank — Plano Técnico de Lançamento (Landing Page → MVP)

## 1. Contexto

HackTank (codinome *HackShares*) é uma plataforma de hackathons gamificados em que a criação de um hackathon requer uma *barganha criativa*. O primeiro passo é colocar a landing page no ar para coletar e‑mails, validar interesse e medir CAC inicial. Depois avançamos para o MVP de 6 semanas que prova a mecânica de barganha e o ciclo de engajamento.

### 🎨 Paleta principal do símbolo "HackTank"

| Função no desenho                   | Cor de referência    | HEX       | RGB             | Notas de sensação                                  |
| ----------------------------------- | -------------------- | --------- | --------------- | -------------------------------------------------- |
| Corpo do tanque                     | **Verdant Green**    | `#3AA65C` | 58 , 166 , 92   | Verde vivo, remete a "play"/crescimento tech       |
| Sombras do corpo & bordas internas  | **Deep Evergreen**   | `#2B6B3C` | 43 , 107 , 60   | Dá volume e contraste sem perder a harmonia        |
| Boca do canhão & braços             | **Pumpkin Orange**   | `#E67127` | 230 , 113 , 39  | Energia, ação e calor (gamificação)                |
| Parte interna do canhão (gradiente) | **Coral Red**        | `#C43D21` | 196 , 61 , 33   | Pequeno toque dramático de "fogo"                  |
| Rodas internas & detalhes           | **Sunflower Yellow** | `#FFB640` | 255 , 182 , 64  | Chama atenção para movimento e pontos de interação |
| Trilhos & contorno externo grosso   | **Midnight Navy**    | `#002E3D` | 0 , 46 , 61     | Base escura clássica de cartoon retrô              |
| Botões do controle (D‑pad)          | **Sky Teal**         | `#4AC0C8` | 74 , 192 , 200  | Quebra a dominância quente‑fria dando "tech vibe"  |
| Fundo/textura off‑white             | **Warm Cream**       | `#F5E9D2` | 245 , 233 , 210 | Remete a papel antigo de animações clássicas       |
| Olhos & luvas                       | **Pure White**       | `#FFFFFF` | 255 , 255 , 255 | Destaque limpo, mantém leitura em telas pequenas   |

**Composição:**

* A paleta gira em torno do **verde** (tema "tank") contrastado por **laranjas/quentes** (ação, criatividade).
* O **navy profundo** faz o papel de "tinta preta" de cartoons vintage, mas com um tom azul‑petróleo que moderniza.
* Detalhes **amarelo‑quentes** e o **teal** do controle criam pontos de interesse ligados a desenvolvimento/jogos.

Se precisar variações (ex.: tons pastel, versão dark‑mode, CMYK para impressão), avise!


---

## 2. Fases

| Fase                          | Horizonte   | Resultado de Sucesso                             |
| ----------------------------- | ----------- | ------------------------------------------------ |
| **F0 – Landing Page**         | Semana 1    | 500 e‑mails na waitlist, CTR de CTA ≥ 15 %       |
| **F1 – Auth & Carteira**      | Semanas 2‑3 | Retenção D1 ≥ 70 % com 100 HC distribuídos       |
| **F2 – Hackathon Lifecycle**  | Semana 4    | ≥ 10 hackathons abertos + ≥ 5 projetos/hackathon |
| **F3 – Gamificação & Badges** | Semanas 5‑6 | 40 % de retenção pós‑prêmio                      |

---

## 3. Stack Resumida

| Camada              | Tecnologia                              | Motivo                                       |
| ------------------- | --------------------------------------- | -------------------------------------------- |
| **Landing**         | React + Vite · Tailwind core CDN        | build ultra‑rápido, sem compilador Tailwind¹ |
| **Frontend app**    | React + Vite · Tailwind (CLI posterior) | unifica design                               |
| **Backend**         | Node 20 · Express                       | minimalista & extensível                     |
| **DB**              | SQLite (Prisma) → Postgres (futuro)     | zero‑config / migração fácil                 |
| **Auth**            | Passport (Google & GitHub)              | estratégias prontas                          |
| **State**           | React Query · Zustand                   | cache + store leve                           |
| **Infra**           | Docker Compose dev • Render.com prod    | deploy em 1 comando                          |
| **Observabilidade** | Pino + Logtail • Status /healthz        | logs & saúde                                 |
| **CI/CD**           | GitHub Actions                          | build, lint, test, push image                |

¹ Evitamos classes arbitrárias porque não teremos compilador em F0. Segue orientação oficial Tailwind sobre varredura de classes ([tailwindcss.com](https://tailwindcss.com/docs/detecting-classes-in-source-files?utm_source=chatgpt.com)).

---

## 4. Estrutura de Repositório (Monorepo npm workspaces)

```
hacktank/
├─ apps/
│  ├─ landing/        # F0 (React estático)
│  ├─ web/            # SPA principal (F1+)
│  └─ api/            # Express backend
├─ prisma/            # schema & migrações
├─ .github/
│  └─ workflows/      # CI/CD YAMLs
├─ docker-compose.yml
└─ README.md
```

---

## 5. F0 — Landing Page Detalhada

### 5.1 Objetivos

* Captar 500 e‑mails.
* Testar proposta de valor (copy A/B curto vs longo).

### 5.2 Tarefas Técnicas

| Nº | Tarefa                                                                          | Responsável |
| -- | ------------------------------------------------------------------------------- | ----------- |
| 1  | `apps/landing` com Vite template `react`                                        | Frontend    |
| 2  | Importar Tailwind via CDN `<script src="https://cdn.tailwindcss.com"></script>` | Frontend    |
| 3  | Componente `<WaitlistForm>` que POSTa para endpoint `/api/waitlist`             | Frontend    |
| 4  | Endpoint Express `POST /waitlist` (salva no SQLite `waitlist` ou Supabase)      | Backend     |
| 5  | Configurar domínio *hacktank.gg* em DNS → Netlify/Render static site            | DevOps      |
| 6  | Analytics GA4 + tag de conversão Google Ads                                     | Marketing   |
| 7  | CI job `build_landing` → deploy preview + deploy production                     | DevOps      |
| 8  | Smoke test (Cypress) rodando em CI                                              | QA          |

### 5.3 Métricas em Produção

* Page views, CTR no botão "Quero participar".
* Leads válidos (sem e-mails descartáveis).

---

## 6. F1 — Autenticação & Carteira

### 6.1 Endpoints Core

* `GET /auth/google` · `GET /auth/github`
* `POST /auth/logout`
* `GET /users/me`
* `POST /wallet/transfer`

### 6.2 Implementação

1. **Passport** estratégias (OAuth 2).
2. **JWT httpOnly cookie** (7 dias) com refresh.
3. **Carteira**: operações com `Prisma.$transaction` para débito/crédito atômico.
4. **Seed**: cada novo user recebe 100 HC.
5. **Testes**: Supertest + Jest cobertura ≥ 80 % layer auth.

---

## 7. F2 — Ciclo completo do Hackathon

| Módulo              | Responsabilidade                                                      |
| ------------------- | --------------------------------------------------------------------- |
| HackathonController | CRUD + verificação de barganha                                        |
| BargainService      | Valida know‑how (article > 800 palavras, unique SHA) ou débito 300 HC |
| SubmissionService   | Upload pitch/arquivo → S3 compatível (Supabase Storage)               |
| VoteService         | Voto ponderado (badge `Creator` = peso 3)                             |
| PayoutScheduler     | Cron `node-cron` a cada hora para fechar hackathons vencidos          |

---

## 8. F3 — Badges, Ranking & Gamificação

* **BadgeController**: catálogo global + inventário usuário.
* **Leaderboard**: query Prisma `orderBy` por `xp` (User.xp).
* **Season Pass**: tabela `emissionSeason` controla teto 50 000 HC.
* **Early Badges**:

  * `creator_pioneer` (mint ao criar primeiro hackathon)
  * `early_hacker` (mint ao enviar 1ª submissão)

---

## 9. Banco de Dados & Migrações

* ORM: Prisma.
* Migrations versionadas em `prisma/migrations/`.
* Comando padrão dev: `npx prisma migrate dev --name init`.
* Backup: cron diário `sqlite3 dev.db ".backup /backups/$(date +%F).db"`.

### Esquema chave (User, Hackathon, Submission, Badge, UserBadge)

> **Obs.:** detalhes completos no `schema.prisma`.

---

## 10. CI/CD

### 10.1 Workflow Landing

```yaml
name: landing
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build:landing
      - uses: nwtgck/actions-netlify@v2
```

### 10.2 Workflow API & Web

1. Lint (`eslint .`)
2. Test (`npm test`)
3. Build Docker image `asimovtech/hacktank:<sha>`
4. Push para ghcr.io
5. Trigger deploy Render.com (hook).

---

## 11. Observabilidade & Segurança

| Área           | Ferramenta                          | Ação                           |
| -------------- | ----------------------------------- | ------------------------------ |
| **Logs**       | Pino + Logtail                      | formato JSON, retention 7 dias |
| **Jobs**       | node-cron + endpoint /jobs          | dashboard básica               |
| **Saúde**      | `/healthz` + Docker HEALTHCHECK     | monitor uptime                 |
| **Headers**    | helmet()                            | CSP, HSTS                      |
| **Rate‑limit** | express-rate-limit 100 req / 15 min | evitar abuse                   |

---

## 12. Cronograma Detalhado (6 Semanas)

| Semana | Tarefas Técnicas                       | Métrica            |
| ------ | -------------------------------------- | ------------------ |
| 1      | Concluir Seção 5.2, publicar landing   | 500 e‑mails        |
| 2      | Módulo Auth completo + seed HC         | Retenção D1 ≥ 70 % |
| 3      | Carteira + Transferência               | 30 transações      |
| 4      | Hackathon CRUD + Barganha              | 10 hackathons      |
| 5      | Submissões + Votação + Scheduler       | 50 submissões      |
| 6      | Badges + Leaderboard + Release público | 40 % repeat        |

---

## 13. Checklist *Definition of Done*

* [ ] Pipeline CI verde.
* [ ] Cobertura testes ≥ 80 % no core.
* [ ] Zero vulnerabilidades `npm audit --production`.
* [ ] Manual smoke test em produção concluído.
* [ ] Documentação API publicada (Swagger `/docs`).

---

## 14. Próximos Passos Pós‑MVP

1. Migrar DB para Postgres RDS.
2. CDN para assets estáticos (Cloudflare).
3. Sistema de pagamentos fiat ↔ HC via Stripe.
4. Lançar Season Pass S1 com marketplace de badges.

---

## 15. Referências

1. Y Combinator — *How to plan an MVP* ([ycombinator.com](https://www.ycombinator.com/library/6f-how-to-plan-an-mvp?utm_source=chatgpt.com))
2. Tailwind CSS — *Detecting classes in source files* ([tailwindcss.com](https://tailwindcss.com/docs/detecting-classes-in-source-files?utm_source=chatgpt.com))
