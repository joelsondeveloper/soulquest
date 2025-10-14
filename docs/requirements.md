# 📘 Documento de Requisitos do Sistema (DRS)

## Projeto: SoulQuest — Gerenciador de Rotina Gamificado com IA
**Versão:** 0.2  
**Autores:** Joelson + Assistente  
**Data:** 2025-10-14  

---

## 1. Visão Geral
Um gerenciador de vida gamificado que transforma tarefas e rotinas em missões narrativas personalizadas.  
O sistema usa IA para gerar histórias, recompensas e sugestões adaptativas com base no contexto e comportamento do usuário.

**One-liner:**  
> Transforme sua rotina em uma jornada RPG com narrativas e recompensas geradas por IA adaptadas ao seu contexto.

---

## 2. Objetivos do Sistema
- Engajar usuários na execução de tarefas por meio de narrativa e progressão.  
- Personalizar missões e recompensas usando modelos de linguagem (ex: Gemini / GPT).  
- Servir como produto de portfólio com documentação completa e qualidade de engenharia.

---

## 3. Personas
**1. Lucas (22)** – Estudante que precisa de disciplina pra estudar; gosta de estética medieval e premiações visuais.  
**2. Mariana (28)** – Jovem profissional que busca produtividade e prefere recompensas práticas.  
**3. Coach Rafael (35)** – Profissional que usa a plataforma com clientes; quer criar capítulos e acompanhar progresso.

---

## 4. Requisitos

### 4.1 Requisitos Funcionais (RF)
- **RF01:** Usuário pode se registrar e autenticar (email, Google OAuth).  
- **RF02:** Usuário pode criar, editar e excluir tarefas (diárias, únicas, recorrentes).  
- **RF03:** Ao completar tarefa, o sistema concede XP e atualiza streaks.  
- **RF04:** Dashboard mostra XP, nível, streak e progresso do capítulo.  
- **RF05:** Admin/Editor cria capítulos narrativos e quests base.  
- **RF06:** IA gera capítulo/narrativa personalizada por usuário.  
- **RF07:** IA sugere recompensas conforme perfil e engajamento.  
- **RF08:** Chat de IA (Coach) oferece recomendações e motivação.  
- **RF09:** Logs de IA (prompt, resposta, userId, timestamp) armazenados.  
- **RF10:** Cache de respostas IA para evitar regeneração frequente.

### 4.2 Requisitos Não-Funcionais (RNF)
- **RNF01:** Latência do dashboard < 500ms (uso de cache).  
- **RNF02:** Suporte a 10k usuários iniciais, escalável.  
- **RNF03:** Respostas de IA armazenadas com TTL (ex: 7 dias).  
- **RNF04:** Segurança com JWT, hash de senha e proteção CSRF.  
- **RNF05:** Privacidade: logs de IA mascaram dados sensíveis.

---

### 4.3 Estrutura de Camadas e Fluxos Narrativos

#### Visão Geral
O *SoulQuest* é dividido em **três camadas interativas**, que representam diferentes níveis de profundidade da jornada do usuário.  
Cada camada está interligada, de modo que ações simples (Camada 1) afetam o progresso visual (Camada 2) e o equilíbrio emocional/narrativo (Camada 3).

---

#### Camada 1 — Modo Lite (Ações Diárias)
**Objetivo:** permitir interação rápida e consistente, com o mínimo de fricção.  
**Descrição:**
- Interface tipo checklist com tarefas diárias (“missões rápidas”).  
- Cada tarefa concluída concede **XP e moedas**.  
- É o principal ponto de entrada do usuário, com duração média de uso < 5 minutos/dia.  
- Ações desta camada influenciam diretamente o **equilíbrio Luz/Sombra**.

**Funções-chave:**
- Marcar tarefas como concluídas.  
- Ganhar XP e moedas.  
- Alimentar o sistema de equilíbrio (Luz/Sombra).  
- Desbloquear missões e capítulos na Camada 2.

---

#### Camada 2 — A Jornada do Herói (Exploração e Progressão)
**Objetivo:** oferecer progressão, personalização e imersão narrativa.  
**Descrição:**
- Representa o “mundo externo” do herói.  
- O usuário visualiza seu personagem, classes, capítulos e missões.  
- Cada capítulo contém **missões principais e secundárias**.  
- Missões principais estão ligadas a grandes objetivos pessoais (ex: disciplina, foco, saúde).  
- Missões secundárias reforçam hábitos complementares.  
- Ao final de cada capítulo, o herói enfrenta um **Boss Externo**, que simboliza desafios concretos.

**Funções-chave:**
- Visualizar status, classe, XP e progresso.  
- Personalizar o herói (aparência, classe, título).  
- Enfrentar Bosses externos.  
- Desbloquear acesso à Camada 3 ao final de um arco narrativo.

---

#### Camada 3 — A Mente (Jornada Interior e IA Dual)
**Objetivo:** permitir reflexão e diálogo com as “vozes interiores” do herói.  
**Descrição:**
- Representa o “mundo interno” — o espaço mental do personagem.  
- O usuário interage com a IA, que possui **duas personalidades**:
  - 🕊️ **Luz (Mentor):** encoraja, inspira e guia.  
  - 🩸 **Sombra (Tentador):** provoca, duvida e desmotiva.  
- Cada ação nas camadas anteriores altera o **nível de domínio** entre Luz e Sombra.
- O fundo e o ambiente visual da interface refletem esse equilíbrio:  
  - Domínio da Luz → tons claros e suaves.  
  - Domínio da Sombra → tons escuros e pulsantes.  
- O “Boss Principal” de cada arco está localizado nesta camada — ele é simbólico e representa um conflito interno.

**Funções-chave:**
- Chat IA com respostas baseadas no estado emocional e progresso do usuário.  
- Sistema de *alignment* (`lightPower` vs `shadowPower`) dinâmico.  
- Visual dinâmico (transição entre luz e sombra).  
- Desbloqueio do próximo arco narrativo ao vencer o Boss interno.

---

#### Integração entre as Camadas

| Fluxo | Descrição |
|--------|------------|
| **1 → 2** | Ao completar tarefas no modo Lite, o herói ganha XP e moedas, evoluindo na jornada principal. |
| **2 → 3** | Ao concluir um capítulo ou enfrentar um Boss externo, desbloqueia o confronto interno (Boss mental). |
| **3 → 1** | Vencer um Boss interno redefine o equilíbrio Luz/Sombra e gera novos objetivos diários na camada Lite. |

---

#### Futuras Expansões
- Classes e atributos ainda em definição (ex: Mago, Guerreiro, Curador).  
- Sistema de capítulos e missões será refinado nas próximas sprints.  
- O balanceamento de XP, moedas e alinhamento Luz/Sombra será ajustado iterativamente conforme testes e feedback.

---

## 5. Escopo MVP
1. Autenticação (email + Google).  
2. CRUD de tarefas (diárias, únicas, recorrentes).  
3. Sistema básico de XP e nível.  
4. Dashboard com progresso e streak.  
5. Painel admin simples para capítulos (texto estático).  
6. Endpoint IA para gerar capítulos com cache.  
7. Deploy (Vercel front / Render back) + documentação.

---

## 6. Arquitetura (visão geral)
**Frontend:** Next.js + TypeScript + Tailwind + React Query  
**Backend:** Node.js + Express/NestJS + TypeScript  
**Banco de Dados:** MongoDB (inicial) ou PostgreSQL + Prisma (opcional)  
**IA Layer:** API externa (Gemini / OpenAI)  
**Deploy:** Vercel (front) + Render/Heroku (back)  

**Fluxo:** Front → API → IA Module (cache) → DB → Front

---

## 7. Módulos de IA (contratos)

### 7.1 Story Engine
**Entrada:** userProfile, userProgress, userPreferences, contextSummary  
**Saída:** `{ chapterTitle, chapterSummary, quests[] }`  
**Endpoint:** `POST /ai/story/generate`

### 7.2 Reward Engine
**Entrada:** userProfile, completionHistory, preferences  
**Saída:** `[ { rewardId, type, label, effect } ]`  
**Endpoint:** `POST /ai/rewards/suggest`

### 7.3 AI Coach (chat)
**Entrada:** chatHistory, userContext  
**Saída:** resposta + microações sugeridas  
**Endpoint:** `POST /ai/coach/chat`

---

## 8. Modelo de Dados (rascunho)
**User** { id, name, email, passwordHash, **level**, xp, coins, preferences, createdAt }  
**Task** { id, userId, title, description, type, xp, status, recurrence, createdAt }  
**Chapter** { id, title, description, createdBy, version, quests[] }  
**Quest** { id, chapterId, title, xp, prereqQuestId? }  
**AIResponseCache** { id, userId, type, inputHash, responseJson, createdAt, ttl }  
**AIInteractionLog** { id, userId, module, promptHash, responseHash, timestamp }

---

## 9. Endpoints APIs
- `POST /auth/register`  
- `POST /auth/login`  
- `GET /users/me`  
- `CRUD /tasks`  
- `POST /tasks/:id/complete`  
- `GET /dashboard`  
- `GET /chapters`  
- `POST /ai/story/generate`  
- `POST /ai/rewards/suggest`  
- `POST /ai/coach/chat`

---

## 10. Prompt Base (protótipo)
**Story Engine Prompt:**
> Use o perfil do usuário `{name, preferences, level, xp, recentActivity}`  
> Gere um capítulo com título, resumo e 3 quests ligadas às metas atuais.  
> Tom motivacional, curto e narrativo. Tema: `{theme}`.

---

## 11. Segurança e Custos de IA
- Implementar rate limiting e cache pra reduzir custos.  
- Monitorar consumo de tokens e orçamentos.  
- Armazenar prompts e respostas para depuração e regressão.

---

## 12. Backlog Inicial (épicos e histórias)
**Épicos:**  
- EPIC-Auth: autenticação e perfil  
- EPIC-Tasks: tarefas e XP  
- EPIC-Missions: capítulos e quests  
- EPIC-AI: Story Engine, Reward Engine, Coach  
- EPIC-Admin: painel de criação de capítulos

**User Stories:**  
- US-001: Registrar com Google e acessar missões.  
- US-002: Criar tarefas recorrentes.  
- US-003: Ganhar XP e ver nível atualizado.  
- US-010: IA gera capítulo personalizado.

---

## 13. Roadmap de Sprints
| Sprint | Objetivo | Duração |
|--------|-----------|---------|
| 0 | Setup, repositório, CI básico | 3 dias |
| 1 | Auth + Tasks CRUD + XP | 7 dias |
| 2 | Dashboard + Chapters estáticos | 7 dias |
| 3 | IA Story Engine (protótipo) | 10 dias |
| 4 | Reward Engine + Coach | 10 dias |
| 5 | Testes e deploy final | 7 dias |

---

## 14. Métricas e Telemetria
DAU/WAU, retenção D7, tasksCompletedPerUser, avgSessionTime, AI calls per user, cost per 1k tokens.

---

## 15. Entregáveis da Semana 1
- DRS v0.2 pronto (PDF e Markdown)  
- Backlog inicial com épicos e user stories  
- Modelo de dados rascunho  
- Endpoints e prompts base definidos  
- Nova seção 4.3 — Estrutura de Camadas e Fluxos Narrativos  

---

## 16. Próximos Passos
1. Criar diagramas visuais das camadas (fluxo e integração).  
2. Detalhar o sistema de XP, moedas e alinhamento Luz/Sombra.  
3. Configurar ambiente dev + secrets IA.  
4. Iniciar Sprint 1 (Auth + Tasks CRUD).

---

🧩 **Documento revisado e mantido por [Joelson](https://github.com/joelsondeveloper)**  
