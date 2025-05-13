# HackTank - Landing Page

Este é o projeto da landing page do HackTank, uma plataforma de hackathons gamificados com sistema de barganha criativa.

## Tecnologias Utilizadas

- React 18
- Vite
- Tailwind CSS (via CDN)

## Estrutura do Projeto

```
landing/
├─ src/
│  ├─ assets/           # Imagens e recursos
│  ├─ components/       # Componentes React
│  │  ├─ Header.jsx     # Cabeçalho
│  │  ├─ Hero.jsx       # Seção principal
│  │  ├─ Features.jsx   # Seção de características
│  │  ├─ WaitlistForm.jsx # Formulário de inscrição
│  │  └─ Footer.jsx     # Rodapé
│  ├─ App.jsx           # Componente principal
│  └─ main.jsx          # Ponto de entrada
├─ index.html           # HTML base com Tailwind CDN
├─ vite.config.js       # Configurações do Vite
└─ package.json         # Dependências e scripts
```

## Como Executar

### Pré-requisitos

- Node.js 14+ instalado

### Instalação

1. Clone o repositório
2. Entre no diretório da landing page:
   ```
   cd apps/landing
   ```
3. Instale as dependências:
   ```
   npm install
   ```

### Execução em Ambiente de Desenvolvimento

```
npm run dev
```

Isso iniciará o servidor de desenvolvimento em [http://localhost:3000](http://localhost:3000).

### Build para Produção

```
npm run build
```

Isso gerará os arquivos estáticos otimizados na pasta `dist/`.

### Prévia do Build

```
npm run preview
```

## Objetivos da Landing Page

- Captar 500 e-mails para a waitlist
- Testar proposta de valor
- Validar interesse inicial no produto

## Lista de Tarefas Pendentes

- [ ] Configurar endpoint de API para salvar os e-mails no banco de dados
- [ ] Integrar Google Analytics para acompanhamento de métricas
- [ ] Implantar a landing page em um serviço de hospedagem (Netlify/Render)
- [ ] Adicionar testes básicos (Cypress) 