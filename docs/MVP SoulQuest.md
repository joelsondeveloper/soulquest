# 🚀 Documento de Escopo MVP — SoulQuest

## Projeto: SoulQuest — Gerenciador de Rotina Gamificado com IA
**Versão:** 1.0 (MVP)
**Autores:** Joelson + Scrum Master
**Data:** 2025-10-17
**Status:** Finalizado - Pronto para Desenvolvimento

---

## 1. Visão Geral do MVP
Este documento define o escopo do **Produto Mínimo Viável (MVP)** do SoulQuest, destilado da visão completa do "aplicativo ideal" detalhada no Business Rules Specification (BRS), Documento de Requisitos do Sistema (DRS), Arquitetura do Sistema e Ambiente de Desenvolvimento. O MVP focará em entregar a "Jornada Diária Essencial e a Faísca da IA, com Resiliência Offline para o Core", concentrando-se na **Camada 1 (Modo Lite)** para validação rápida das hipóteses centrais de gamificação e engajamento.

**Objetivo Central do MVP:** Permitir que o usuário gamifique suas tarefas diárias, receba feedback básico de progresso e um toque de inteligência artificial, com a garantia de que as ações essenciais funcionam mesmo sem internet. Este MVP serve para validar o core do engajamento antes de expandir para as camadas mais complexas.

---

## 2. Caminho Dourado (Golden Path) para o MVP

O MVP do SoulQuest proporcionará a experiência fundamental de gamificação de rotina com o apoio básico da IA, validando os pilares do engajamento.

### **Experiência do Usuário (Fluxo Principal do MVP):**

1.  **Onboarding (ONLINE APENAS):**
    *   O usuário consegue **se registrar e fazer login** no SoulQuest.
    *   Após o login inicial, o sistema (via IA ou conteúdo pré-definido pelo Admin) o guia na escolha do seu **primeiro Arco Narrativo** e ativa o **primeiro Capítulo**.

2.  **Interação Diária (CAMADA 1 - ONLINE E OFFLINE):**
    *   O usuário acessa a **Camada 1 (Modo Lite)**, que será a interface principal do MVP.
    *   Nesta tela, o usuário pode **visualizar claramente o título do seu Arco Narrativo ativo, o título do Capítulo atual e os títulos das Missões ativas** (primárias e secundárias).
    *   Dentro de cada missão, ele visualiza as **tarefas associadas**.
    *   O usuário pode **marcar tarefas como concluídas**.
    *   Ao completar tarefas (seja online ou offline), o sistema **concede XP e moedas** localmente, e **atualiza a streak atual**.
    *   O **Dashboard da Camada 1** exibe: `XP atual`, `Nível`, `Streak atual` e uma `representação básica do balanço Luz/Sombra`.
    *   **Acesso Básico à Loja (CAMADA 1 - ONLINE E OFFLINE):** O usuário pode **navegar por um catálogo básico de itens** (cosméticos genéricos e recompensas de lazer simples) na Loja do Comerciante da Alma. No entanto, **as transações de compra e venda são liberadas somente quando online**, pois dependem de validação e atualização do backend.
    *   **IA Coach com Mensagens Pré-definidas/Cacheadas (CAMADA 1 - ONLINE E OFFLINE):** O IA Coach pode exibir **mensagens motivacionais e dicas** que são pré-carregadas ou cacheadas para funcionamento offline. **A interação de chat dinâmico e em tempo real com a IA Coach NÃO estará disponível offline**.
    *   **Funcionalidade Offline (Camada 1):** Todas as ações principais da Camada 1 (visualização de contexto narrativo, tarefas, marcação de conclusão, updates locais de XP/moedas/streak, visualização do dashboard, navegação na loja, mensagens do IA Coach) funcionam perfeitamente offline, com as alterações armazenadas localmente.

3.  **Sincronização de Dados (ONLINE):**
    *   Quando o usuário restabelece a conexão com a internet, todas as ações realizadas offline na Camada 1 são **automaticamente sincronizadas** com o backend, atualizando o estado global do jogador.

### **O que NÃO ESTÁ no MVP:**

*   A funcionalidade completa das Camadas 2 e 3 (apenas links de prévia).
*   Batalhas contra Bosses (Mini, Intermediário, Principal, Final).
*   Sistema de Classes, Atributos e Talentos avançado (apenas a exibição de nível e XP, sem gerenciamento pelo usuário).
*   Criação/Substituição de Hábitos como missões (apenas tarefas simples e recorrentes).
*   Personalização profunda de avatar (apenas a exibição do avatar padrão/simples).
*   Geração de Arcos/Capítulos pela IA em tempo real (serão pré-definidos para o MVP).
*   Negociação de venda/compra na loja em modo offline.
*   Chat dinâmico em tempo real com o IA Coach em modo offline.
*   Contribuição de conteúdo pela comunidade.
*   Relatórios e insights detalhados além do dashboard da Camada 1.

---

## 3. Requisitos Funcionais (RFs) para o MVP

Esta é a lista de Requisitos Funcionais adaptados do DRS (documento do aplicativo ideal), focando no escopo reduzido e no "Golden Path" do MVP.

-   **RF01 (MVP): Autenticação e Perfil Básico:** O usuário deve ser capaz de se registrar e autenticar no sistema (via e-mail/senha ou Google OAuth) e visualizar seu perfil básico (nome, nível, XP, moedas).
-   **RF02 (MVP): Gerenciamento de Tarefas Essenciais:** O usuário deve ser capaz de criar, editar, excluir e marcar como concluídas tarefas (diárias, únicas, recorrentes), que são exibidas como parte de missões em seu Capítulo atual.
-   **RF03 (MVP): Sistema de Progressão Básico:** O sistema deve conceder XP (Geral e de Classe) e moedas ao completar tarefas, gerenciar o nível do usuário e exibir a classe ativa e atributos atuais.
-   **RF04 (MVP): Dashboard da Camada 1 e Insights Básicos:** O sistema deve exibir no dashboard da Camada 1 o XP atual, nível, streak, progresso do Capítulo atual (visual simples) e o balanço Luz/Sombra básico. Estas informações devem ser visíveis também em modo offline.
-   **RF05 (MVP): Ativação Narrativa Inicial:** A IA deve ser capaz de ativar um Arco Narrativo e um Capítulo inicial para o usuário (baseado em conteúdo pré-definido ou uma geração muito básica da IA). O usuário deve poder visualizar os títulos do Arco, Capítulo e Missões na Camada 1.
-   **RF06 (MVP): Recompensas Básicas:** O sistema deve conceder moedas e XP como recompensas básicas ao completar tarefas e missões.
-   **RF07 (MVP): IA Coach com Mensagens Motivacionais:** O sistema deve fornecer um chat básico com o IA Coach para exibir mensagens motivacionais e dicas pré-definidas ou cacheadas na Camada 1.
-   **RF10 (MVP): Exibição de Avatar Básico:** O sistema deve exibir um avatar padrão ou básico do usuário na interface.
-   **RF11 (MVP): Loja Básica e Visualização de Inventário:** O sistema deve permitir ao usuário navegar por um catálogo básico de itens (cosméticos genéricos e recompensas de lazer simples) na Loja do Comerciante da Alma (Camada 1). Compras e vendas são possíveis apenas quando online. O inventário deve mostrar os itens adquiridos.
-   **RF12 (MVP): Notificações Essenciais (PWA):** O sistema deve enviar notificações in-app básicas (para ganhos de XP/moedas) e suportar a funcionalidade de Push Notifications PWA para lembretes diários e de tarefas com prazo.
-   **RF13 (MVP): Modo Offline da Camada 1 e Sincronização:** O sistema deve permitir que o usuário acesse e interaja com a Camada 1 (Modo Lite) offline, salvando alterações localmente e sincronizando-as automaticamente quando a conexão for restabelecida.
-   **RF14 (MVP): Gerenciamento de Conteúdo Inicial (Admin):** O sistema deve fornecer um painel administrativo simples para o Admin/Editor predefinir Arcos Narrativos, Capítulos, Missões e itens básicos da loja.
-   **RF15 (MVP): Logging e Cache de IA Básico:** O sistema deve registrar logs básicos de interação com a IA (para o IA Coach) e implementar cache para otimizar as respostas mais frequentes da IA.

---

## 4. Requisitos Não-Funcionais (RNFs) para o MVP

Esta é a lista de Requisitos Não-Funcionais adaptados do DRS, com foco na estabilidade, performance e experiência do MVP.

-   **RNF01 (MVP): Performance de UI (Camada 1):** A latência na atualização do dashboard e nas interações de marcação de tarefas na Camada 1 deve ser **< 300ms** (online) e **instantânea** (offline), otimizando o uso de cache local.
-   **RNF02 (MVP): Escalabilidade Básica:** O sistema deve ser escalável para suportar **até 1.000 usuários iniciais**, com a arquitetura preparada para futura expansão.
-   **RNF03 (MVP): Segurança Essencial:** O sistema deve implementar segurança robusta para autenticação (JWT, hash de senha) e proteção básica contra ataques comuns (ex: injeção SQL, XSS).
-   **RNF04 (MVP): Privacidade de Dados (Básico):** A privacidade do usuário deve ser garantida, com o mínimo de dados pessoais coletados e logados para o MVP, e com atenção ao mascaramento de dados sensíveis em logs de IA.
-   **RNF05 (MVP): Resiliência Offline (Camada 1 - PWA):** O aplicativo deve ser capaz de operar a Camada 1 de forma confiável offline, carregando assets e dados cacheados e garantindo a persistência local e sincronização de alterações.
-   **RNF06 (MVP): Consistência de Dados (Sincronização Básica):** O sistema deve garantir a consistência dos dados após a sincronização offline, utilizando uma estratégia clara de resolução de conflitos para as ações da Camada 1 (ex: "last write wins").
-   **RNF07 (MVP): Responsividade (Mobile-First):** A interface do usuário deve ser responsiva e adaptável a diferentes tamanhos de tela (mobile prioridade), suportando a experiência de PWA.
-   **RNF08 (MVP): Custo-Eficiência da IA (Básico):** O uso das APIs de IA (para o IA Coach básico) deve ser otimizado com caching para respostas frequentes e monitoramento básico de consumo para controlar custos iniciais.
-   **RNF09 (MVP): Experiência PWA Essencial:** O aplicativo deve oferecer uma experiência de PWA funcional, incluindo instalação na tela inicial e a capacidade de receber Push Notifications para lembretes.

---

## 5. Modelo de Dados (Rascunho Simplificado para MVP)

Este rascunho de modelo de dados foca nas entidades e atributos mínimos necessários para suportar os Requisitos Funcionais (RFs) e Não-Funcionais (RNFs) do MVP do SoulQuest, priorizando a funcionalidade da Camada 1 (Modo Lite) e a resiliência offline.

---

### **Entidades Essenciais para o MVP:**

#### **1. User (Usuário)**
-   `id`: String (UUID)
-   `name`: String
-   `email`: String (único)
-   `passwordHash`: String
-   `createdAt`: Date
-   `lastLoginAt`: Date
-   `preferences`: Object (JSON) - **Simplificado para MVP:** Foco apenas em `theme` e `notificationTime`.
-   `level`: Number (RN-01)
-   `xp`: Number (RN-01)
-   `coins`: Number (RN-02)
-   `classId`: String (ID da Classe ativa - RN-07) - **Para exibição básica.**
-   `attributes`: Object (JSON) - **Para exibição básica.** (RN-07)
-   `currentEnergy`: Number (0-100) (RN-06) - **Para exibição básica do balanço Luz/Sombra.**
-   `currentStreak`: Number (dias consecutivos - RN-04)
-   `avatarConfig`: Object (JSON) - **Simplificado para MVP:** Apenas `bodyId`, `hairId`, etc. para exibir um avatar básico. (RN-10)
-   `activeArcoNarrativoId`: String (ID do Arco Narrativo atual) - **Para exibir o título do Arco.**
-   `activeChapterId`: String (ID do Capítulo atual) - **Para exibir o título do Capítulo.**
-   `offlineChanges`: Array de Objects (JSON) - **NOVO:** Para armazenar ações da Camada 1 realizadas offline antes da sincronização. (RN-12)

#### **2. Task (Tarefa)**
-   `id`: String (UUID)
-   `userId`: String (ID do User)
-   `title`: String
-   `description`: String (opcional)
-   `type`: String (Ex: 'daily', 'single', 'recurring')
-   `status`: String (Ex: 'pending', 'completed')
-   `xp`: Number (baseXP para cálculo - RN-01)
-   `difficultyFactor`: Number (RN-01) - **Pode ser fixo ou simples no MVP.**
-   `recurrence`: String (Ex: 'daily', 'weekly:Mon')
-   `expectedCompletionTime`: Date (opcional, para notificações - RN-11)
-   `missionId`: String (ID da Missão a que pertence) - **Para exibir o título da Missão.**
-   `createdAt`: Date
-   `completedAt`: Date (opcional)

#### **3. ArcoNarrativo (Grande Objetivo) - (Simplificado para MVP)**
-   `id`: String (UUID)
-   `title`: String
-   `description`: String - **Pode ser simplificado ou omitido no MVP, para exibição.**
-   `theme`: String - **Para exibição.**
-   `status`: String (Ex: 'active', 'completed')
-   `createdAt`: Date
-   **Removido para MVP:** `userId`, `currentChapterId`, `bossPrincipalId`, `bossFinalId`.

#### **4. Chapter (Capítulo) - (Simplificado para MVP)**
-   `id`: String (UUID)
-   `arcoNarrativoId`: String (ID do Arco Narrativo pai)
-   `title`: String
-   `summary`: String - **Pode ser simplificado ou omitido no MVP, para exibição.**
-   `theme`: String - **Para exibição.**
-   `createdBy`: String (ID do Admin/Editor - RN-14) - **Foco em conteúdo Admin no MVP.**
-   `type`: String (Ex: 'official') - **Foco em "official" no MVP.**
-   `status`: String (Ex: 'published')
-   `createdAt`: Date
-   **Removido para MVP:** `version`, `reviewNotes`, `publishedAt`.

#### **5. Mission (Missão) - (Simplificado para MVP)**
-   `id`: String (UUID)
-   `chapterId`: String (ID do Capítulo a que pertence)
-   `title`: String
-   `description`: String - **Pode ser simplificado ou omitido no MVP, para exibição.**
-   `xpReward`: Number (RN-01)
-   `coinReward`: Number (RN-02)
-   `type`: String (Ex: 'primary', 'secondary') - **Simplificado, sem tipos específicos de hábito.**
-   `requiredTasks`: Array de Strings (IDs de Task)
-   `status`: String (Ex: 'pending', 'in_progress', 'completed')
-   `createdAt`: Date
-   **Removido para MVP:** `isBossMission`, `bossId`.

#### **6. Class (Classe) - (Simplificado para MVP)**
-   `id`: String (UUID)
-   `name`: String
-   `imagePath`: String (Caminho para ícone/ilustração) - **Para exibição.**
-   **Removido para MVP:** `virtue`, `style`, `passiveBonus`, `unlockCondition`.

#### **7. Talent (Talento) - (Simplificado para MVP)**
-   `id`: String (UUID)
-   `name`: String
-   `imagePath`: String - **Para exibição, se for o caso.**
-   **Removido para MVP:** `description`, `classId`, `effect`, `maxLevel`, `unlockCondition`.

#### **8. Item (Definição de Item Global) - (Simplificado para MVP)**
-   `id`: String (UUID)
-   `name`: String
-   `description`: String - **Simplificado ou omitido para MVP.**
-   `type`: String (Ex: 'cosmetic', 'leisure', 'consumable')
-   `imagePath`: String
-   `cost`: Number (RN-15)
-   **Removido para MVP:** `rarity`, `unlockCondition`, `passiveBonus`, `effect`.

#### **9. UserInventoryItem (Item no Inventário do Usuário) - (Simplificado para MVP)**
-   `id`: String (UUID)
-   `userId`: String
-   `itemId`: String (ID do Item global)
-   `quantity`: Number
-   `isEquipped`: Boolean (true para cosméticos equipados - RN-10) - **Para exibição básica de avatar.**
-   **Removido para MVP:** `acquisitionDate`, `status`.

#### **10. ShopItem (Item na Loja Rotativa) - (Simplificado para MVP)**
-   `id`: String (UUID)
-   `itemId`: String (ID do Item global)
-   `dailyStock`: Number (Estoque máximo para o dia - RN-15)
-   `currentStock`: Number (Estoque atual disponível - RN-15)
-   `price`: Number (RN-15)
-   `refreshDate`: Date (Data da última atualização do estoque - RN-15)
-   `isActive`: Boolean
-   **Removido para MVP:** N/A, esses são os essenciais.

#### **11. Notification (Notificação) - (Simplificado para MVP)**
-   `id`: String (UUID)
-   `userId`: String
-   `type`: String (Ex: 'progress', 'reminder') - **Foco nos tipos básicos.**
-   `message`: String
-   `isRead`: Boolean
-   `createdAt`: Date
-   **Removido para MVP:** `details`, `relatedEntityId`.

#### **12. PushSubscription (Inscrição de Push PWA)**
-   `id`: String (UUID)
-   `userId`: String
-   `endpoint`: String
-   `p256dh`: String
-   `auth`: String
-   `createdAt`: Date
    *   **Mantido como está, pois é essencial para PWA no MVP.**

#### **13. AIResponseCache (Cache de Respostas da IA) - (Simplificado para MVP)**
-   `id`: String (UUID)
-   `userId`: String
-   `type`: String (Ex: 'coach_chat') - **Foco em cache do IA Coach básico.**
-   `inputHash`: String
-   `responseJson`: Object (JSON) - Resposta da IA (para IA Coach básico).
-   `createdAt`: Date
-   `ttl`: Date
    *   **Removido para MVP:** `promptHash`, `responseHash`, `module`, `costEstimate` (de logs).

#### **14. AIInteractionLog (Log de Interação com a IA) - (Simplificado para MVP)**
-   `id`: String (UUID)
-   `userId`: String
-   `module`: String (Ex: 'AICoach') - **Foco no IA Coach básico.**
-   `timestamp`: Date
-   `inputData`: Object (JSON) - **Simplificado, apenas inputs essenciais e mascarados.**
-   `outputData`: Object (JSON) - **Simplificado, apenas outputs essenciais e mascarados.**
    *   **Removido para MVP:** `promptHash`, `responseHash`, `costEstimate`.

---
**Entidades COMPLETAMENTE REMOVIDAS para o MVP:**
-   **Boss (Definição do Chefão):** Batalhas estão fora do MVP.
-   **UserBossProgress (Progresso do Usuário contra Chefão):** Batalhas estão fora do MVP.
-   **ContentContribution (Conteúdo Contribuído pela Comunidade):** Gerenciamento de conteúdo da comunidade está fora do MVP.

---

## 6. Arquitetura e Ambiente de Desenvolvimento (Adaptação para MVP)

A arquitetura e o ambiente de desenvolvimento do SoulQuest (conforme documentado nos respectivos DRS e Documentos de Ambiente) serão utilizados como base. Para o MVP, focaremos na implementação de um subconjunto dessas tecnologias e práticas, priorizando a estabilidade, a performance da Camada 1 e a eficiência no desenvolvimento.

---

### **6.1 Adaptação da Arquitetura do Sistema para o MVP**

A arquitetura geral de Frontend, Backend e Camada de IA será mantida, porém com escopo e tecnologias específicas reduzidos:

#### **Frontend (Next.js PWA)**
-   **Tecnologias Prioritárias:** Next.js (App Router), TypeScript, Tailwind CSS, React Query.
-   **PWA Essencial:** Workbox (para Service Worker, caching de assets/APIs e Background Sync) e IndexedDB para armazenamento offline da Camada 1.
-   **Estado Global:** Context API para gerenciamento de estado da UI.
-   **Removido para MVP:** Bibliotecas complexas de UI que não sejam estritamente necessárias para a Camada 1.

#### **Backend (Node.js API)**
-   **Tecnologias Prioritárias:** Express.js, TypeScript.
-   **Banco de Dados:** **MongoDB Atlas** (como escolha inicial de DB), utilizando Mongoose como ORM/ODM, alinhado com o Modelo de Dados simplificado do MVP.
-   **Autenticação:** JWT + bcrypt.
-   **Cache de IA:** **Redis** (implementação básica para otimizar chamadas de IA Coach e Story Engine inicial).
-   **Web Push:** Implementação da biblioteca Web-Push para notificações essenciais.
-   **Removido para MVP:** Uploads de Média (Cloudinary/Multer), Nodemailer (e-mail, se não for essencial para auth).

#### **IA Layer (Google Gemini / OpenAI)**
-   **Modelos Prioritários:** Integração com um provedor de API (ex: Google Gemini ou OpenAI) para o **AI Coach básico** e **ativação narrativa inicial**.
-   **Lógica de Prompts:** Gerenciamento dos prompts para as mensagens pré-definidas/cacheadas e interações básicas do IA Coach.
-   **Removido para MVP:** Story Engine completo de geração de Capítulos e Missões personalizadas, Reward Engine de sugestão e validação.

#### **Fluxo de Dados (Foco no MVP)**
-   O fluxo de dados será simplificado, com ênfase nas interações da Camada 1, o Service Worker para offline/sincronização e as chamadas básicas para o IA Coach. As interações complexas com camadas 2 e 3 serão adiadas.

---

### **6.2 Ambiente de Desenvolvimento (Ajustes para MVP)**

O ambiente de desenvolvimento será configurado conforme o "Documento de Ambiente de Desenvolvimento — SoulQuest", com os seguintes pontos de atenção para o MVP:

-   **Versões Principais:** Instalação e configuração das versões estáveis de Node.js, npm, Next.js, TypeScript e TailwindCSS.
-   **Banco de Dados Local/Remoto:** Configuração inicial com MongoDB (pode ser um Atlas gratuito para dev/testes, ou Docker local). O suporte a PostgreSQL será despriorizado para o MVP.
-   **Redis Local/Remoto:** Configuração básica de um Redis para o cache de IA.
-   **Variáveis de Ambiente Essenciais:** Apenas as chaves `MONGO_URI`, `REDIS_URL`, `JWT_SECRET`, `AI_API_KEY`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `WEB_PUSH_VAPID_PUBLIC_KEY`, `WEB_PUSH_VAPID_PRIVATE_KEY` e as relacionadas a CI/CD serão estritamente necessárias para o MVP. As chaves de Cloudinary podem ser ignoradas.
-   **Ferramentas Recomendadas:** Utilização do VS Code com as extensões listadas, GitHub Desktop e Postman/Thunder Client para testes de API.

---

## 7. Roadmap Simplificado e Sprints Iniciais (Para o MVP)

Este roadmap define a sequência de fases e sprints para a construção do Produto Mínimo Viável (MVP) do SoulQuest, focado na "Jornada Diária Essencial e a Faísca da IA, com Resiliência Offline para o Core". Ele é um subconjunto e uma priorização do roadmap do "app ideal", com entregáveis semanais incrementais.

---

### **7.1 Fases do MVP**

| Fase | Nome | Entregáveis Principais do MVP | RNs/RFs/RNFs Principais Atendidos |
|------|------|--------------------------------|------------------------------------|
| 1    | **Setup Técnico & Base** | Repositório inicial, ambientes de dev (frontend/backend/DB/Redis), pipeline CI/CD básica. | RNF01, RNF02, RNF03, RNF07 |
| 2    | **Autenticação & Perfil** | Registro, Login (Email/Google), Perfil Básico (exibição de nome, XP, nível). | RF01 (MVP), RNF03 |
| 3    | **Camada 1 Core (Online)** | CRUD de Tarefas (criação, edição, conclusão), cálculo de XP/Moedas/Streak, exibição do Dashboard da Camada 1, IA Coach com mensagens básicas (online). | RF02 (MVP), RF03 (MVP), RF04 (MVP), RF06 (MVP), RF07 (MVP), RNF01, RNF08 |
| 4    | **Resiliência Offline & PWA** | Funcionalidade offline da Camada 1 (tarefas, progresso, dashboard, loja visualização), sincronização de dados, Push Notifications para lembretes, instalação PWA. | RF11 (MVP), RF12 (MVP), RF13 (MVP), RNF05, RNF06, RNF09 |
| 5    | **Loja & Conteúdo Básico** | Loja do Comerciante com itens básicos (compra/venda online), exibição de avatar padrão, painel admin simples para Capítulos/Missões/Itens básicos. | RF10 (MVP), RF11 (MVP), RF14 (MVP), RNF08 |
| 6    | **Polimento, Testes & Deploy** | Refinamento da UI/UX, testes de funcionalidade e PWA, otimização de performance, deploy do MVP. | RNF01, RNF03, RNF04, RNF07 |

---

### **7.2 Sprints Iniciais do MVP**

Estas são sugestões de sprints semanais para o MVP, focando em entregas incrementais. A duração e o detalhamento podem ser ajustados durante o planejamento de cada sprint.

| Sprint | Objetivo Principal | Entregáveis Chave da Sprint |
|--------|--------------------|-----------------------------|
| **Sprint 0** | **Setup Técnico** | Repositório, ambientes Front/Back/DB/Redis, CI básico. |
| **Sprint 1** | **Autenticação Essencial** | Registro, Login (Email/Google), Página de Perfil Básico (exibição). |
| **Sprint 2** | **CRUD de Tarefas Online** | Criar, Editar, Excluir, Marcar Concluído tarefas; cálculo de XP/Moedas/Streak (online). |
| **Sprint 3** | **Dashboard & IA Coach Básico** | Dashboard da Camada 1 funcional (XP, nível, streak, Luz/Sombra), IA Coach com mensagens fixas (online). |
| **Sprint 4** | **PWA Offline & Sincronização** | Camada 1 funcional offline (visualização/marcação de tarefas), sincronização de dados offline, instalação PWA. |
| **Sprint 5** | **Notificações & Loja Básica** | Push Notifications para lembretes, Loja do Comerciante (visualização/compra/venda online), exibição de avatar padrão. |
| **Sprint 6** | **Conteúdo Admin & Polimento** | Painel admin simples para gerenciar Capítulos/Missões/Itens; testes e ajustes finais; deploy do MVP. |

---

### **7.3 Status Atual**
✅ Documentação do "App Ideal" (BRS, DRS, Arquitetura, Ambiente, Roadmap) concluída.
✅ Documento de Escopo MVP do SoulQuest concluído.
🏗️ Próxima Etapa: **Início do Desenvolvimento do SoulQuest MVP (Início da Sprint 0).**
🗓️ Data da Última Atualização: 2025-10-17

---