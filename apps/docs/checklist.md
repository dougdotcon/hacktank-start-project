# Checklist do Projeto HackTank

## Landing Page (Fase 0)
- [x] Implementação da landing page com React + Vite + Tailwind
- [x] Formulário de inscrição para waitlist
- [x] API para armazenar inscrições
- [x] Banco de dados SQLite com Prisma
- [ ] Configurar domínio hacktank.gg
- [ ] Integrar Google Analytics
- [ ] Deploy em ambiente de produção (Netlify/Render)

## Autenticação e Carteira (Fase 1)
- [x] Página de Wallet implementada
- [ ] Integração com Passport (Google & GitHub)
- [ ] Sistema de JWT com cookies httpOnly
- [ ] API de autenticação completa
- [ ] Funcionalidade de transferência de HackCoins
- [ ] Seed inicial de HC para novos usuários
- [ ] Testes para camada de autenticação

## Ciclo de Hackathon (Fase 2)
- [x] Página de Dashboard implementada
- [x] Página de listagem de Hackathons implementada
- [x] Página de detalhes do Hackathon implementada
- [x] Página de criação de Hackathon implementada
- [x] Sistema de barganha criativa implementado no frontend
- [ ] Backend para CRUD de Hackathons
- [ ] BargainService para validação de barganhas
- [ ] SubmissionService para upload de arquivos
- [ ] VoteService para sistema de votação
- [ ] PayoutScheduler para fechar hackathons

## Badges, Ranking e Gamificação (Fase 3)
- [x] Página de Perfil implementada
- [x] Exibição de badges no perfil
- [x] Histórico de hackathons no perfil
- [ ] BadgeController para gerenciar badges
- [ ] Sistema de Leaderboard
- [ ] Season Pass para controle de emissão de HC
- [ ] Implementação das badges iniciais

## Estrutura Técnica e DevOps
- [x] Estrutura de monorepo configurada
- [x] Configuração do Vite
- [x] Configuração do Tailwind CSS
- [x] Configuração de rotas com React Router
- [x] Arquitetura básica de componentes
- [ ] Testes automatizados
- [ ] CI/CD com GitHub Actions
- [ ] Observabilidade com Pino + Logtail
- [ ] Implementação de rate-limit para API
- [ ] Documentação API com Swagger

## Pendências e Problemas Conhecidos
- [ ] Corrigir a estrutura de diretórios (mover arquivos de src/pages para apps/web/src/pages)
- [ ] Implementar componentes comuns (botões, cards, inputs)
- [ ] Implementar páginas de Login e Register
- [ ] Conectar o frontend com o backend
- [ ] Implementar validações de formulários
- [ ] Configurar tratamento de erros global
- [ ] Melhorar responsividade para dispositivos móveis

## Próximos Passos (Pós-MVP)
- [ ] Migrar banco de dados para Postgres
- [ ] Implementar CDN para assets estáticos
- [ ] Sistema de pagamentos fiat ↔ HC via Stripe
- [ ] Lançar Season Pass com marketplace de badges 