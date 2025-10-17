# 🏗️ SoulQuest — Arquitetura do Sistema

## 🎯 Visão Geral
O SoulQuest é dividido em três camadas principais:
1. **Frontend** (Next.js + Tailwind + TypeScript)
2. **Backend** (Node.js + Express/NestJS + MongoDB)
3. **Camada de IA** (integração com Gemini / OpenAI)

---

## ⚙️ Estrutura Técnica (Expandido e Atualizado)

### Frontend
-   Framework: **Next.js (App Router)**
-   Linguagem: **TypeScript**
-   Estilização: **Tailwind CSS**
-   Gerenciamento de Estado Remoto: **React Query (TanStack)** (para otimização de requisições e cache - RNF01)
-   Gerenciamento de Estado Global: **Context API** (para estados locais da UI)
-   Gerenciamento de Formulários: **React Hook Form + Zod** (para validação robusta - RNF03)
-   Notificações UI: **React Toastify** (para feedback ao usuário - RF11, RF12, RF13)
-   **PWA Core:** **Workbox** (integrado via `next-pwa` para Service Worker, caching de assets/APIs e Background Sync - RNF05, RNF09)
-   **Armazenamento Offline:** **IndexedDB** (para persistência de dados offline na Camada 1 - RF13)
-   Deploy: **Vercel**

### Backend
-   Framework: **Express.js** (ou NestJS para maior estrutura - RNF02)
-   Linguagem: **TypeScript**
-   ORM/ODM: **Mongoose** (para MongoDB) ou **Prisma** (se PostgreSQL for escolhido - RNF02)
-   Banco de Dados: **MongoDB Atlas** (inicial, para escalabilidade e flexibilidade - RNF02) ou **PostgreSQL** (para consistência e relações - RNF02)
-   Autenticação: **JWT + bcrypt** (para segurança - RNF03)
-   Uploads de Mídia: **Multer + Cloudinary** (para itens de avatar, imagens de capítulos - RF10, RF14)
-   E-mail: **Nodemailer** (para notificações por e-mail, se necessário)
-   **Cache de IA:** **Redis** (para otimização de custos e performance das respostas da IA - RNF01, RNF08, RF15)
-   **Web Push:** **Web-Push library** (para envio de Push Notifications via Service Worker - RF12)
-   Deploy: **Render** (ou Railway/Fly.io para maior flexibilidade - RNF02)

### IA Layer
-   **Story Engine** → gera narrativa e quests personalizadas (RF05).
-   **Reward Engine** → sugere recompensas e valida propostas (RF06).
-   **AI Coach** → chat motivacional, adaptativo e negociador (RF07, RF11).
-   Integração via APIs externas: **Google Gemini / OpenAI** (flexibilidade para escolher o melhor modelo - RNF08).
-   **Lógica de Prompts:** Gerenciamento centralizado dos prompts (RNF08, RF15).

## 🔗 Fluxo de Dados (Visão Alta e Expandida)

Este diagrama representa o fluxo principal de dados e interações entre as camadas do SoulQuest, incluindo PWA e IA.

```mermaid
graph TD;
    subgraph Frontend (Next.js PWA)
        A[Usuário] -- Interage --> B(UI - Camadas 1, 2, 3);
        B -- Ações Offline (Camada 1) --> C(IndexedDB Local);
        B -- Requisição Online --> D(Service Worker / Fetch API);
        D -- Gerencia Cache / Rede --> E(Network / Cache Storage);
        E -- Cache de Assets/Dados --> B;
    end

    subgraph Backend (Node.js API)
        F[API Server] <-- Requisição --> E;
        F -- Consulta/Grava --> G[Banco de Dados (MongoDB/PostgreSQL)];
        F -- Armazena/Lê Cache --> H[Redis (Cache IA)];
        F -- Chama API Externa --> I[Modelos de IA (Gemini/OpenAI)];
        F -- Envia --> J[Serviço de Push (Web Push Protocol)];
    end

    subgraph External Services
        I -- Resposta --> F;
        J -- Notificação Push --> K[Dispositivo do Usuário];
    end

    C -- Sincroniza (Online) --> F;
    F -- Envia Notificação --> K;
    K -- Exibe Alertas/Interage --> A;

    style A fill:#D2E3C2,stroke:#555,stroke-width:2px;
    style B fill:#F5F5DC,stroke:#555,stroke-width:2px;
    style C fill:#ADD8E6,stroke:#555,stroke-width:2px;
    style D fill:#FAFAD2,stroke:#555,stroke-width:2px;
    style E fill:#D3D3D3,stroke:#555,stroke-width:2px;
    style F fill:#FFFACD,stroke:#555,stroke-width:2px;
    style G fill:#B0C4DE,stroke:#555,stroke-width:2px;
    style H fill:#E6E6FA,stroke:#555,stroke-width:2px;
    style I fill:#FFDAB9,stroke:#555,stroke-width:2px;
    style J fill:#FFC0CB,stroke:#555,stroke-width:2px;
    style K fill:#C2D3E3,stroke:#555,stroke-width:2px;
```

## 📦 Estrutura de Pastas (Resumo Expandido)

Uma estrutura de monorepo ou multi-repo bem definida para o projeto, para organizar as camadas de Frontend, Backend e Lógica de IA.

```plaintext
soulquest/
├── frontend/                     # Aplicação Next.js (UI, PWA Service Worker, IndexedDB Logic)
│   ├── public/                   # Assets estáticos, manifesto PWA
│   ├── src/
│   │   ├── app/                  # App Router - Rotas e Páginas
│   │   ├── components/           # Componentes React reutilizáveis
│   │   ├── hooks/                # Hooks personalizados (React Query, etc.)
│   │   ├── contexts/             # Context API para estado global
│   │   ├── styles/               # Configurações do Tailwind CSS
│   │   ├── lib/                  # Utilitários, configurações de PWA (Service Worker registration)
│   │   └── features/             # Módulos de features (auth, tasks, avatar, shop, reports, notifications)
│   └── types/                    # Definições de TypeScript
├── backend/                      # Aplicação Node.js (API, Lógica de Negócios, ORM, Web Push Logic)
│   ├── src/
│   │   ├── config/               # Configurações de ambiente, DB, IA
│   │   ├── controllers/          # Lógica para lidar com requisições
│   │   ├── services/             # Lógica de negócio, integração com IA e DB
│   │   ├── models/               # Schemas do MongoDB (Mongoose) ou modelos do Prisma
│   │   ├── routes/               # Definição de endpoints da API
│   │   ├── middlewares/          # Autenticação, validação, tratamento de erros
│   │   ├── modules/              # Lógica específica para IA, notificações, economia
│   │   ├── utils/                # Utilitários gerais
│   │   └── admin/                # Lógica para o painel de gerenciamento de conteúdo (RN-14)
│   └── types/                    # Definições de TypeScript
├── ai-layer/                     # Lógica de integração e cache da IA (se separada do backend)
│   ├── src/
│   │   ├── services/             # Abstração das APIs externas (Gemini/OpenAI)
│   │   ├── cache/                # Lógica de Redis Cache (RF15)
│   │   ├── prompts/              # Gerenciamento e templates de prompts
│   │   └── models/               # Tipos de entrada/saída dos módulos de IA
├── docs/                         # Documentação do projeto (DRS, BRS, Arquitetura, Roadmap, etc.)
└── scripts/                      # Scripts de deploy, setup, etc.
```

## 🧠 Observações Técnicas
 - O projeto seguirá a convenção de Commits Semânticos (feat:, fix:, docs:, chore:, etc.) para manter um histórico de versão claro e legível.

 - Cada sprint de desenvolvimento idealmente utilizará um branch próprio para isolar o trabalho (feature/sprint-X-objetivo).

 - Será utilizada uma metodologia ágil híbrida, combinando fases estruturadas com entregas incrementais em sprints semanais.

 - A qualidade do código será garantida através de linters (ESLint), formatters (Prettier) e TypeScript, rodando verificações (npm run lint, npm run build) antes de commits e PRs importantes.

 - Priorização da experiência PWA, garantindo que as funcionalidades offline (Camada 1) e as notificações push sejam robustas desde o início (RN-11, RN-12).

 ## 🧩 Documento criado e mantido por Joelson

---


🧩 Documento mantido por [Joelson](https://github.com/joelsondeveloper)
