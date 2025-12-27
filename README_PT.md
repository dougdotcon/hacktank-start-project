# HackTankPlatform

O HackTankPlatform é uma plataforma de hackathons gamificada com um sistema criativo de barganha para alocação de recursos. Ela permite que os participantes negociem e troquem ativos estrategicamente em um ambiente de desenvolvimento competitivo.

## Visão Geral

Este repositório contém a implementação do HackTank, projetado para transformar hackathons tradicionais em eventos interativos e baseados em estratégia. A inovação central reside no sistema de barganha, permitindo que as equipes troquem recursos, tempo e capacidades de forma dinâmica.

## Principais Recursos

- **Sistema de Barganha Estratégica**: Participe de negociações criativas para trocar recursos e vantagens com outras equipes.
- **Motor de Gamificação**: Motiva os participantes através de pontos, níveis, medalhas e tabelas de classificação.
- **Gestão de Equipes**: Suporte robusto para formação de equipes, funções e fluxos de trabalho colaborativos.
- **Alocação de Recursos**: Ferramentas dinâmicas para gerenciar e trocar ativos do hackathon.
- **Interação em Tempo Real**: Atualizações ao vivo sobre trocas, pontos e status da equipe.

## Arquitetura

O projeto é construído com tecnologias web modernas, focando em escalabilidade e desempenho em tempo real.

- **Frontend**: (Implícito) Interface baseada em React para painéis interativos e barganhas.
- **Backend**: Node.js com Express para API e comunicação em tempo real.
- **Banco de Dados**: MongoDB para armazenamento flexível de equipes, trocas e estado do jogo.
- **Tempo Real**: Socket.io para conexões WebSocket para lidar com negociações e atualizações ao vivo.

## Começando

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- Instância do MongoDB

### Instalação

1. Clone o repositório:
   bash
   git clone https://github.com/seuusuario/HackTankPlatform.git
   cd HackTankPlatform
   

2. Instale as dependências para o backend e frontend:
   bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` no diretório `backend` com o seguinte conteúdo:
   env
   PORT=3001
   MONGO_URI=mongodb://localhost:27017/hacktank
   JWT_SECRET=sua_chave_secreta_super_segura
   

4. Inicie os servidores de desenvolvimento:
   bash
   # Backend (do diretório backend)
   npm run dev

   # Frontend (do diretório frontend)
   npm start
   

A aplicação estará disponível em `http://localhost:3000`.

## Uso

1. **Configuração do Admin**: Faça login como administrador para configurar os parâmetros do hackathon.
2. **Registro de Equipes**: Crie equipes e convide membros.
3. **Fase de Barganha**: Acesse o painel de barganha para propor e aceitar trocas.
4. **Fase de Desenvolvimento**: Acompanhe o progresso e troque recursos conforme necessário.
5. **Resultados**: Visualize a tabela de classificação final e o ranking das equipes.

## Documentação da API

Assim que o servidor estiver em execução, a documentação da API estará disponível em `/api-docs` (se o Swagger estiver configurado).

## Contribuindo

As contribuições são o que tornam a comunidade open-source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fornecer será **muito apreciada**.

1. Fork o Projeto
2. Crie sua Branch de Funcionalidade (`git checkout -b feature/NovoRecurso`)
3. Commit suas Alterações (`git commit -m 'Adiciona algum NovoRecurso'`)
4. Push para a Branch (`git push origin feature/NovoRecurso`)
5. Abra um Pull Request

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Link do Projeto: [https://github.com/seuusuario/HackTankPlatform](https://github.com/seuusuario/HackTankPlatform)