# 🏗️ SoulQuest — Arquitetura do Sistema

## 🎯 Visão Geral
O SoulQuest é dividido em três camadas principais:
1. **Frontend** (Next.js + Tailwind + TypeScript)
2. **Backend** (Node.js + Express/NestJS + MongoDB)
3. **Camada de IA** (integração com Gemini / OpenAI)

---

## ⚙️ Estrutura Técnica

### Frontend
- Framework: **Next.js (App Router)**
- Linguagem: **TypeScript**
- Estilização: **Tailwind CSS**
- Estado remoto: **React Query (TanStack)**
- Estado global: **Context API**
- Formulários: **React Hook Form + Zod**
- Notificações: **React Toastify**
- Deploy: **Vercel**

### Backend
- Framework: **Express.js**
- Linguagem: **TypeScript**
- ORM: **Mongoose** (MongoDB)
- Autenticação: **JWT + bcrypt**
- Uploads: **Multer + Cloudinary**
- E-mail: **Nodemailer**
- Cache IA: **Redis (futuro)**
- Deploy: **Render**

### IA Layer
- **Story Engine** → gera narrativa e quests.
- **Reward Engine** → sugere recompensas.
- **AI Coach** → chat motivacional e adaptativo.
- Integração via APIs externas (Gemini / OpenAI).

---

## 🔗 Fluxo de Dados (Visão Alta)
```mermaid
graph TD;
A[Usuário] -->|Interage| B[Frontend];
B -->|Requisição| C[Backend];
C -->|Consulta/Grava| D[Banco de Dados];
C -->|Chama| E[Módulo de IA];
E -->|Resposta| B;

---

## 📦 Estrutura de Pastas (Resumo)
soulquest/
├── frontend/
├── backend/
├── ai/
└── docs/


## 🧠 Observações Técnicas
 - O projeto usará Commits Semânticos (ex: feat:, fix:, docs:).

 - Cada sprint terá um branch próprio.

 - Será usada metodologia ágil híbrida, com entregas semanais incrementais.

 ## 🧩 Documento criado e mantido por Joelson

---

### 🧠 2. Criar `/docs/roadmap.md`
Esse arquivo mostra **as fases e sprints do projeto** — o plano de voo.

Modelo base 👇

```markdown
# 🗺️ SoulQuest — Roadmap e Planejamento

## 🧩 Metodologia
Metodologia **híbrida**, unindo fases clássicas (engenharia de software) com sprints ágeis semanais.

---

## 🧱 Fases Principais
| Fase | Nome | Entregável |
|------|------|-------------|
| 1 | Planejamento | DRS completo e estrutura do projeto |
| 2 | Setup Técnico (Sprint 0) | Front e Back configurados |
| 3 | Desenvolvimento do MVP | Funcionalidades principais |
| 4 | Integração com IA | Story Engine e Recompensas |
| 5 | Testes e Deploy | Sistema estável online |
| 6 | Refinamento | Documentação e melhorias |

---

## 🕒 Sprints Semanais
| Sprint | Objetivo | Entregas |
|--------|-----------|----------|
| 0 | Setup ambiente | Next.js, Node, conexão DB |
| 1 | Auth + Tasks | CRUD e XP básico |
| 2 | Dashboard + Quests | Interface funcional |
| 3 | Story Engine | IA narrativa integrada |
| 4 | Reward Engine + Coach | Recompensas e chat IA |
| 5 | Testes + Deploy | Sistema no ar |

---

## 🔥 Status Atual
✅ Fase 1 (Planejamento) concluída  
🏗️ Próxima: **Sprint 0 – Setup Técnico**

---

🧩 Documento mantido por [Joelson](https://github.com/joelsondeveloper)
