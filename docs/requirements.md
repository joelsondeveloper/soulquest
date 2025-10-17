# 📘 Documento de Requisitos do Sistema (DRS)

## Projeto: SoulQuest — Gerenciador de Rotina Gamificado com IA
**Versão:** 0.3  
**Autores:** Joelson + Scrum Master  
**Data:** 2025-10-17  

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
-   **RF01: Autenticação de Usuário:** O usuário deve ser capaz de se registrar e autenticar no sistema (via e-mail/senha ou Google OAuth) e gerenciar seu perfil básico (RN-01, RN-10).
-   **RF02: Gerenciamento de Tarefas:** O usuário deve ser capaz de criar, editar, excluir e marcar como concluídas tarefas (diárias, únicas, recorrentes, primárias, secundárias), que se integram a missões e hábitos (RN-01, RN-02, RN-08).
-   **RF03: Sistema de Progressão (XP, Nível, Atributos, Classes, Talentos):** O sistema deve conceder XP (Geral e de Classe) e moedas ao completar tarefas/missões, gerenciar o nível do usuário, a distribuição de Pontos de Alma (atributos) e o desbloqueio/gerenciamento de classes e talentos (RN-01, RN-02, RN-07, RN-08).
-   **RF04: Dashboard e Relatórios de Progresso:** O sistema deve exibir um dashboard principal com XP, nível, streak, progresso do capítulo/arco narrativo, balanço Luz/Sombra, e oferecer relatórios detalhados e insights personalizados (RN-04, RN-06, RN-13).
-   **RF05: IA de Geração Narrativa (Story Engine):** A IA deve ser capaz de gerar Capítulos e Missões baseadas em Arcos Narrativos personalizados para o perfil e progresso do usuário (RN-06, RN-11, RN-14).
-   **RF06: IA de Sugestão de Recompensas (Reward Engine):** A IA deve sugerir recompensas (itens, lazer) personalizadas para o perfil e engajamento do usuário, e validar recompensas definidas pelo jogador (RN-02, RN-05, RN-15).
-   **RF07: IA Coach (Chat Interativo):** O sistema deve fornecer um chat interativo com uma IA Coach dual (Luz/Sombra) que oferece recomendações, motivação e negociações (RN-03, RN-06, RN-07, RN-09, RN-11, RN-13, RN-15).
-   **RF08: Sistema de Hábitos e Substituição:** O usuário deve ser capaz de criar missões secundárias para criação, substituição e desafio de manutenção de hábitos, com a IA fornecendo suporte (RN-08).
-   **RF09: Soul Duel System (Batalhas com Chefões):** O sistema deve gerenciar batalhas simbólicas contra Chefões (Mini-Boss, Intermediário, Principal, Final, Sombra) baseadas nas ações do jogador, atributos e energia, com impacto narrativo (RN-06, RN-07, RN-08, RN-09).
-   **RF10: Personalização de Avatar:** O usuário deve ser capaz de personalizar a aparência visual de seu avatar com itens cosméticos desbloqueados ou comprados (RN-10, RN-15).
-   **RF11: Loja do Comerciante da Alma e Inventário:** O sistema deve apresentar uma loja de itens rotativos (cosméticos, lazer, consumíveis) onde o usuário pode comprar e negociar a venda de itens do seu inventário com o Comerciante da Alma (RN-02, RN-05, RN-07, RN-15).
-   **RF12: Notificações e Eventos Dinâmicos (PWA):** O sistema deve enviar notificações contextuais (in-app e push PWA) e gerar eventos dinâmicos pela IA para engajar o usuário e lembrá-lo de tarefas/metas (RN-04, RN-06, RN-07, RN-09, RN-11).
-   **RF13: Modo Offline e Sincronização (PWA):** O sistema deve permitir que o usuário acesse e interaja com a Camada 1 (Modo Lite) offline, salvando alterações localmente e sincronizando-as automaticamente quando a conexão for restabelecida (RN-12, RN-13).
-   **RF14: Gerenciamento de Conteúdo (Admin/Comunidade):** O sistema deve fornecer um painel para Admin/Editor criar e gerenciar Arcos Narrativos, Capítulos Base, Missões Base, Classes, Talentos e Itens. Além disso, usuários qualificados da comunidade devem poder submeter conteúdo para revisão e publicação (RF-05 Original, RN-07, RN-10, RN-14, RN-15).
-   **RF15: Logging e Cache de IA:** O sistema deve registrar logs de interação com a IA (prompt, resposta, userId, timestamp) e implementar cache para respostas de IA para otimização (RF-09, RF-10 Original).

### 4.2 Requisitos Não-Funcionais (RNF)
-   **RNF01: Performance de UI:** A latência na atualização do dashboard e em interações cruciais da Camada 1 deve ser < 500ms, otimizando o uso de cache (RN-12, RN-13).
-   **RNF02: Escalabilidade:** O sistema deve ser escalável para suportar um número crescente de usuários (inicialmente 10k, com arquitetura que permita expansão).
-   **RNF03: Segurança:** O sistema deve implementar segurança robusta com JWT para autenticação, hash de senha, proteção CSRF e validação de dados em todas as interações (RN-01, RN-14).
-   **RNF04: Privacidade de Dados:** A privacidade do usuário deve ser garantida, com logs de IA mascarando dados sensíveis e o armazenamento de dados pessoais seguindo as melhores práticas.
-   **RNF05: Resiliência Offline (PWA):** O aplicativo deve ser capaz de operar a Camada 1 de forma confiável offline, carregando assets e dados cacheados e garantindo a persistência local e sincronização de alterações (RN-12).
-   **RNF06: Consistência de Dados (Sincronização):** O sistema deve garantir a consistência dos dados após a sincronização offline, com uma estratégia clara de resolução de conflitos (ex: "last write wins") (RN-12).
-   **RNF07: Responsividade:** A interface do usuário deve ser responsiva e adaptável a diferentes tamanhos de tela (desktop, tablet, mobile), suportando a experiência de PWA.
-   **RNF08: Custo-Eficiência da IA:** O uso das APIs de IA deve ser otimizado com caching (TTL para respostas - ex: 7 dias), rate limiting e monitoramento de consumo de tokens para controlar custos (RN-15).
-   **RNF09: Experiência PWA:** O aplicativo deve oferecer uma experiência de PWA fluida, incluindo instalação na tela inicial e notificações push confiáveis (RN-11, RN-12).

### 4.3 Estrutura de Camadas e Fluxos Narrativos

#### Visão Geral
O *SoulQuest* é estruturado em **Arcos Narrativos (Grandes Objetivos)**, que são desdobrados em **Capítulos**, e estes, por sua vez, contêm **Missões** com suas respectivas tarefas. A jornada do usuário se desdobra em **três camadas interativas**, representando diferentes níveis de profundidade: as ações diárias (Camada 1), a progressão em capítulos e missões (Camada 2), e a introspecção com a IA dual (Camada 3). Cada camada está interligada, de modo que ações em um nível influenciam o progresso e o equilíbrio em outros, culminando em confrontos simbólicos com diversos tipos de Chefões (*Bosses*).

---

#### Terminologia Chave (Baseada no BRS)
-   **Arco Narrativo (Grande Objetivo):** A meta de longo prazo e transformação pessoal escolhida pelo usuário ao iniciar uma nova jornada no SoulQuest (ex: "Aprender Idioma", "Melhorar Saúde Mental"). Cada Arco Narrativo é composto por uma sequência de Capítulos. Sua conclusão pode ser marcada pela derrota de um Boss Principal ou Boss Final.
-   **Capítulo:** Uma fase dentro de um Arco Narrativo, com um tema específico e um conjunto de missões relacionadas. Sua conclusão é geralmente marcada pela derrota de um **Boss de Capítulo**. Capítulos podem ser gerados por IA, ser oficiais ou contribuídos pela comunidade (RN-14).
-   **Missão:** Um conjunto de tarefas focadas em um objetivo específico.
    -   **Missão Primária:** Direcionada ao objetivo principal do Capítulo.
    -   **Missão Secundária:** Focada em hábitos ou objetivos complementares (Criação, Substituição ou Desafio de Hábito - RN-08).
-   **Chefões (Bosses):** Representam os desafios e conflitos internos do jogador (RN-09).
    -   **Mini-Boss:** Pequenos hábitos ruins ou Bosses de Capítulo iniciais.
    -   **Boss Intermediário:** Hábitos médios ou Bosses de Capítulo significativos.
    -   **Boss Principal (do Arco):** Vício forte ou desafio central escolhido para um Arco Narrativo.
    -   **Boss Final (da Jornada):** Símbolo da Sombra interior e desafio supremo de toda a jornada.
    -   **Boss de Sombra:** Ativado quando a energia cai abaixo de 30% (RN-09).

---

#### Camada 1 — Modo Lite (Ações Diárias)
**Objetivo:** Permitir interação rápida e consistente com o mínimo de fricção, registrando ações diárias essenciais.
**Descrição:**
-   Interface tipo checklist com tarefas diárias ("missões rápidas").
-   Cada tarefa concluída concede **XP (RN-01)** e **moedas (RN-02)**.
-   É o principal ponto de entrada do usuário, com duração média de uso < 5 minutos/dia.
-   Ações desta camada influenciam diretamente o **equilíbrio Luz/Sombra (RN-03, RN-06)**.
-   **Disponível Offline:** Sim, com insights básicos locais (RN-12, RN-13).

**Funções-chave:**
-   Marcar tarefas como concluídas (RN-02).
-   Visualizar tarefas diárias e progresso da streak (RN-04).
-   Visualizar XP atual, nível, streak e balanço Luz/Sombra (RN-13).
-   Ganhar XP e moedas (RN-01, RN-02).
-   Alimentar o sistema de equilíbrio (Luz/Sombra) (RN-03, RN-06).
-   Impactar o progresso em Missões e Capítulos na Camada 2.

---

#### Camada 2 — A Jornada do Herói (Exploração e Progressão)
**Objetivo:** Oferecer progressão visual, personalização profunda e imersão na narrativa dos Capítulos e Arcos.
**Descrição:**
-   Representa o "mundo externo" do herói.
-   O usuário visualiza seu personagem (com personalização de avatar - RN-10), classe ativa, XP, nível, progresso no Arco Narrativo e Capítulos.
-   Cada Capítulo contém **Missões Primárias e Secundárias**.
-   Missões Primárias estão ligadas aos grandes objetivos do Arco Narrativo.
-   Missões Secundárias reforçam hábitos complementares (RN-08).
-   Ao final de cada Capítulo, o herói enfrenta um **Boss de Capítulo** (Mini-Boss ou Boss Intermediário - RN-09).
-   **Disponível Offline:** Não (RN-12).

**Funções-chave:**
-   Visualizar status detalhado, classe, XP, progresso em Arcos, Capítulos e Missões (RN-13).
-   Personalizar o herói (aparência, classe, atributos, talentos - RN-07, RN-10).
-   Acessar o **Inventário de Itens (RN-15)** para usar/equipar recompensas (RN-05).
-   Acessar a **Loja do Comerciante da Alma (RN-15)** para comprar ou vender itens.
-   Enfrentar Bosses de Capítulo (RN-09).
-   Desbloquear acesso à Camada 3 ao final de um arco narrativo ou em momentos críticos.

---

#### Camada 3 — A Mente (Jornada Interior e IA Dual)
**Objetivo:** Permitir reflexão, diálogo aprofundado com as "vozes interiores" da IA e insights personalizados sobre o autodesenvolvimento.
**Descrição:**
-   Representa o "mundo interno" — o espaço mental e emocional do personagem.
-   O usuário interage com o **IA Coach (RN-08, RN-09, RN-11, RN-13, RN-15)**, que possui **duas personalidades**:
    -   🕊️ **Luz (Mentor):** Encoraja, inspira e guia, predominando com energia alta (RN-03, RN-06).
    -   🩸 **Sombra (Tentador):** Provoca, duvida e desmotiva, predominando com energia baixa (RN-03, RN-06).
-   Cada ação nas camadas anteriores altera o **nível de domínio** entre Luz e Sombra, e o **nível de energia (RN-06)**.
-   O fundo e o ambiente visual da interface refletem esse equilíbrio (RN-06).
-   O **Boss Principal (do Arco)** e o **Boss Final (da Jornada)** estão localizados ou são confrontados metaforicamente nesta camada, simbolizando conflitos internos profundos (RN-09).
-   **Disponível Offline:** Não (RN-12).

**Funções-chave:**
-   Chat interativo com o IA Coach para recomendações e motivação (RN-08, RN-11, RN-13, RN-15).
-   Sistema de `alignment` (`lightPower` vs `shadowPower`) dinâmico (RN-03, RN-06).
-   Visual dinâmico (transição entre tons claros e escuros conforme o equilíbrio).
-   Acesso a **insights profundos e análises da IA** sobre padrões de comportamento (RN-13).
-   Desbloqueio do próximo Arco Narrativo ou grande fase da jornada ao vencer os desafios internos (Boss Principal/Final).

---

#### Integração e Fluxos Narrativos Completos

| Fluxo | Descrição | Regras de Negócio Envolvidas |
|--------|------------|------------------------------|
| **1 → 2** | Concluir tarefas no Modo Lite gera XP e moedas, evoluindo o herói nas missões e capítulos do Arco Narrativo. | RN-01, RN-02, RN-04, RN-06 |
| **2 → 3** | Concluir um Capítulo ou enfrentar um Boss de Capítulo leva a momentos de reflexão ou desafios internos com a IA na Camada 3. | RN-06, RN-09, RN-13 |
| **3 → 1** | Superar um desafio interno (vitória em Boss - RN-09) redefine o equilíbrio Luz/Sombra (RN-06) e pode gerar novos objetivos diários ou influenciar tarefas futuras na Camada 1. | RN-03, RN-06, RN-08, RN-09, RN-11 |
| **IA (Geral)** | A IA atua em todas as camadas: personaliza tarefas (RN-01), gera narrativas/eventos (RN-06, RN-11), sugere recompensas (RN-05), atua como Coach (RN-03, RN-06, RN-08, RN-11, RN-13, RN-15) e valida conteúdo (RN-14). | RN-03, RN-05, RN-06, RN-08, RN-11, RN-13, RN-14, RN-15 |
| **Offline** | A Camada 1 pode ser usada offline para registrar tarefas e ver insights básicos, com sincronização posterior (RN-12). | RN-12, RN-13 |

---

#### Futuras Expansões
-   O sistema de Classes, Atributos e Talentos (RN-07) terá um refinamento contínuo para desbloqueio de subclasses e fusões.
-   Novos Arcos Narrativos e Capítulos serão adicionados via gerenciamento oficial ou contribuição da comunidade (RN-14).
-   O balanceamento de XP, moedas e alinhamento Luz/Sombra será ajustado iterativamente conforme testes e feedback (RN-01, RN-02, RN-06).

---

## 5. Arquitetura (visão geral)
**Frontend:** Next.js + TypeScript + Tailwind + React Query  
**Backend:** Node.js + Express/NestJS + TypeScript  
**Banco de Dados:** MongoDB (inicial) ou PostgreSQL + Prisma (opcional)  
**IA Layer:** API externa (Gemini / OpenAI)  
**Deploy:** Vercel (front) + Render/Heroku (back)  

**Fluxo:** Front → API → IA Module (cache) → DB → Front

---

## 6. Módulos de IA (contratos)

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

## 7. Modelo de Dados (rascunho expandido)

Este modelo de dados reflete as entidades e seus principais atributos necessários para suportar todas as Regras de Negócio (RN-01 a RN-15) do SoulQuest ideal. É um rascunho e pode ser refinado durante a implementação.

---

### **Entidades Principais (Atualizadas e Novas):**

#### **1. User (Usuário)**
-   `id`: String (UUID)
-   `name`: String
-   `email`: String (único)
-   `passwordHash`: String
-   `createdAt`: Date
-   `lastLoginAt`: Date
-   `preferences`: Object (JSON) - Ex: `{ theme: 'dark', notificationTime: '08:00' }`
-   `level`: Number (RN-01)
-   `xp`: Number (RN-01)
-   `coins`: Number (RN-02)
-   `classId`: String (ID da Classe ativa - RN-07)
-   `attributes`: Object (JSON) - Ex: `{ str: 1, wis: 2, foc: 1, spi: 1, cre: 1 }` (RN-07)
-   `talents`: Array de Strings (IDs dos Talentos desbloqueados - RN-07, RN-08)
-   `currentEnergy`: Number (0-100) (RN-06)
-   `lightPower`: Number (0-100, para balanço IA - RN-03)
-   `shadowPower`: Number (0-100, para balanço IA - RN-03)
-   `currentStreak`: Number (dias consecutivos - RN-04)
-   `avatarConfig`: Object (JSON) - Ex: `{ bodyId: 'id1', hairId: 'id2', shirtId: 'id3' }` (RN-10)
-   `activeArcoNarrativoId`: String (ID do Arco Narrativo atual - RN-12)

#### **2. Task (Tarefa)**
-   `id`: String (UUID)
-   `userId`: String (ID do User)
-   `title`: String
-   `description`: String (opcional)
-   `type`: String (Ex: 'daily', 'single', 'recurring')
-   `status`: String (Ex: 'pending', 'completed', 'skipped')
-   `xp`: Number (baseXP para cálculo - RN-01)
-   `difficultyFactor`: Number (RN-01)
-   `recurrence`: String (Ex: 'daily', 'weekly:Mon', 'monthly')
-   `expectedCompletionTime`: Date (opcional, para notificações - RN-11)
-   `missionId`: String (ID da Missão a que pertence - RN-14)
-   `isPrimary`: Boolean (true se for tarefa de Missão Primária)
-   `createdAt`: Date
-   `completedAt`: Date (opcional)

#### **3. ArcoNarrativo (Grande Objetivo)** - **NOVA ENTIDADE**
-   `id`: String (UUID)
-   `title`: String
-   `description`: String
-   `theme`: String
-   `userId`: String (ID do User se for um arco personalizado, null se for oficial)
-   `status`: String (Ex: 'active', 'completed', 'abandoned')
-   `currentChapterId`: String (ID do Capítulo ativo)
-   `bossPrincipalId`: String (ID do Boss Principal deste arco - RN-09)
-   `bossFinalId`: String (ID do Boss Final - RN-09)
-   `createdAt`: Date
-   `completedAt`: Date (opcional)

#### **4. Chapter (Capítulo)**
-   `id`: String (UUID)
-   `arcoNarrativoId`: String (ID do Arco Narrativo pai)
-   `title`: String
-   `summary`: String
-   `theme`: String
-   `createdBy`: String (ID do Admin/Editor ou User que contribuiu - RN-14)
-   `version`: Number
-   `type`: String (Ex: 'official', 'iaGenerated', 'community') (RN-14)
-   `status`: String (Ex: 'draft', 'pending_review', 'published') (RN-14)
-   `reviewNotes`: String (opcional - RN-14)
-   `createdAt`: Date
-   `publishedAt`: Date (opcional)

#### **5. Mission (Missão)** - **Renomeada de Quest, mais consistente**
-   `id`: String (UUID)
-   `chapterId`: String (ID do Capítulo a que pertence)
-   `title`: String
-   `description`: String
-   `xpReward`: Number (RN-01, RN-08)
-   `coinReward`: Number (RN-02, RN-08)
-   `type`: String (Ex: 'primary', 'secondary_creation_habit', 'secondary_substitution_habit', 'secondary_maintenance_challenge') (RN-08)
-   `requiredTasks`: Array de Strings (IDs de Task - opcional, ou tasks embutidas)
-   `isBossMission`: Boolean (true se a missão culmina em um boss - RN-09)
-   `bossId`: String (ID do Boss associado, se `isBossMission` for true - RN-09)
-   `status`: String (Ex: 'pending', 'in_progress', 'completed', 'failed')
-   `createdAt`: Date

#### **6. Class (Classe)** - **NOVA ENTIDADE**
-   `id`: String (UUID)
-   `name`: String (Ex: 'Guardião')
-   `virtue`: String (Ex: 'Disciplina')
-   `style`: String (Ex: 'Focado em rotina')
-   `passiveBonus`: Object (JSON) - Detalhes do bônus passivo (RN-07)
-   `unlockCondition`: Object (JSON) - Ex: `{ type: 'level', value: 5 }` (RN-07)
-   `imagePath`: String (Caminho para ícone/ilustração)

#### **7. Talent (Talento)** - **NOVA ENTIDADE**
-   `id`: String (UUID)
-   `name`: String
-   `description`: String
-   `classId`: String (opcional, se talento for específico de classe - RN-07)
-   `effect`: Object (JSON) - Detalhes do bônus/efeito (RN-07)
-   `maxLevel`: Number (Ex: 2, para evolução - RN-08)
-   `unlockCondition`: Object (JSON) - Ex: `{ type: 'streak', value: 7 }` (RN-07, RN-08)
-   `imagePath`: String

#### **8. Boss (Definição do Chefão)** - **NOVA ENTIDADE**
-   `id`: String (UUID)
-   `name`: String
-   `description`: String
-   `type`: String (Ex: 'mini', 'intermediate', 'principal', 'final', 'shadow_event') (RN-09)
-   `baseHp`: Number
-   `difficulty`: Number (RN-09 - usado no cálculo de dano)
-   `rewards`: Object (JSON) - Ex: `{ xp: 200, coins: 30, talentId: 'id_talento_raro' }` (RN-09)
-   `imagePath`: String

#### **9. UserBossProgress (Progresso do Usuário contra Chefão)** - **NOVA ENTIDADE**
-   `id`: String (UUID)
-   `userId`: String
-   `bossId`: String (ID do Boss da definição)
-   `currentHp`: Number
-   `status`: String (Ex: 'active', 'defeated', 'failed')
-   `startDate`: Date
-   `lastInteractionDate`: Date
-   `battleLog`: Array de Objects (JSON) - Registro das ações diárias na batalha (RN-09)
-   `relatedEntityId`: String (ID do `Mission` ou `Habit` que ativou o boss)

#### **10. Item (Definição de Item Global)** - **NOVA ENTIDADE**
-   `id`: String (UUID)
-   `name`: String
-   `description`: String
-   `type`: String (Ex: 'cosmetic', 'leisure', 'consumable') (RN-10, RN-15)
-   `imagePath`: String (RN-10)
-   `cost`: Number (RN-15 - preço base)
-   `rarity`: String (Ex: 'common', 'rare', 'legendary') (RN-05, RN-15)
-   `unlockCondition`: Object (JSON) - Ex: `{ type: 'bossDefeated', bossId: 'id_boss_x' }` (RN-10)
-   `passiveBonus`: Object (JSON) - Para cosméticos (RN-10)
-   `effect`: Object (JSON) - Para lazer/consumíveis (RN-15)

#### **11. UserInventoryItem (Item no Inventário do Usuário)** - **NOVA ENTIDADE**
-   `id`: String (UUID)
-   `userId`: String
-   `itemId`: String (ID do Item global)
-   `quantity`: Number
-   `isEquipped`: Boolean (true para cosméticos equipados - RN-10)
-   `acquisitionDate`: Date
-   `status`: String (Ex: 'active', 'used')

#### **12. ShopItem (Item na Loja Rotativa)** - **NOVA ENTIDADE**
-   `id`: String (UUID)
-   `itemId`: String (ID do Item global)
-   `dailyStock`: Number (Estoque máximo para o dia - RN-15)
-   `currentStock`: Number (Estoque atual disponível - RN-15)
-   `price`: Number (Preço atual na loja, pode ser diferente de `Item.cost` - RN-15)
-   `refreshDate`: Date (Data da última atualização do estoque - RN-15)
-   `isActive`: Boolean (Se o item está atualmente à venda)

#### **13. Notification (Notificação)** - **NOVA ENTIDADE**
-   `id`: String (UUID)
-   `userId`: String
-   `type`: String (Ex: 'progress', 'reminder', 'event', 'comerciante') (RN-11)
-   `message`: String
-   `details`: Object (JSON) - Conteúdo adicional da notificação
-   `isRead`: Boolean
-   `createdAt`: Date
-   `relatedEntityId`: String (opcional, ID de entidade relacionada, ex: taskId, chapterId)

#### **14. PushSubscription (Inscrição de Push PWA)** - **NOVA ENTIDADE**
-   `id`: String (UUID)
-   `userId`: String
-   `endpoint`: String (URL do serviço de push)
-   `p256dh`: String (Chave pública do cliente)
-   `auth`: String (Token de autenticação)
-   `createdAt`: Date

#### **15. ContentContribution (Conteúdo Contribuído pela Comunidade)** - **NOVA ENTIDADE**
-   `id`: String (UUID)
-   `contributorId`: String (ID do User que contribuiu - RN-14)
-   `contentType`: String (Ex: 'chapter', 'mission')
-   `contentData`: Object (JSON) - Os dados brutos do capítulo/missão base submetido
-   `status`: String (Ex: 'draft', 'pending_review', 'approved', 'rejected')
-   `submissionDate`: Date
-   `reviewDate`: Date (opcional)
-   `reviewerId`: String (ID do Admin/Editor que revisou - RN-14)
-   `reviewNotes`: String (opcional - RN-14)

#### **16. AIResponseCache (Cache de Respostas da IA)**
-   `id`: String (UUID)
-   `userId`: String
-   `type`: String (Ex: 'story_chapter', 'reward_suggest', 'coach_chat')
-   `inputHash`: String (Hash do prompt/entrada para identificar requests repetidas)
-   `responseJson`: Object (JSON) - Resposta completa da IA
-   `createdAt`: Date
-   `ttl`: Date (Time-To-Live, data de expiração)

#### **17. AIInteractionLog (Log de Interação com a IA)**
-   `id`: String (UUID)
-   `userId`: String
-   `module`: String (Ex: 'StoryEngine', 'RewardEngine', 'AICoach')
-   `promptHash`: String (Hash do prompt enviado)
-   `responseHash`: String (Hash da resposta recebida)
-   `timestamp`: Date
-   `inputData`: Object (JSON) - Dados de entrada (máscara de sensíveis - RNF05)
-   `outputData`: Object (JSON) - Dados de saída (máscara de sensíveis - RNF05)
-   `costEstimate`: Number (Custo estimado do token da interação - RNF08)

## 8. Endpoints APIs (Expandido)

Esta seção lista os principais endpoints da API do sistema, refletindo as funcionalidades detalhadas nas Regras de Negócio (RN-01 a RN-15).

---

### **Autenticação e Usuário**
-   `POST /auth/register`: Registro de novos usuários (RF01)
-   `POST /auth/login`: Autenticação de usuários (RF01)
-   `POST /auth/google`: Login via Google OAuth (RF01)
-   `GET /users/me`: Obter perfil do usuário logado (RF01)
-   `PUT /users/me/profile`: Atualizar informações de perfil (RF01)
-   `GET /users/me/progress`: Obter dados de XP, nível, atributos, classe, streaks (RF03, RF04)
-   `PUT /users/me/preferences`: Atualizar preferências do usuário (incluindo horário de notificação - RF11)

### **Tarefas e Missões**
-   `GET /tasks`: Listar tarefas do usuário (RF02)
-   `POST /tasks`: Criar nova tarefa (RF02)
-   `GET /tasks/:id`: Obter detalhes de uma tarefa (RF02)
-   `PUT /tasks/:id`: Editar tarefa (RF02)
-   `DELETE /tasks/:id`: Excluir tarefa (RF02)
-   `POST /tasks/:id/complete`: Marcar tarefa como concluída (RF02, RF03)
-   `GET /missions`: Listar missões do usuário (RF02, RF08)
-   `POST /missions`: Criar nova missão (para hábitos, por exemplo) (RF08)
-   `GET /missions/:id`: Obter detalhes de uma missão (RF08)
-   `POST /missions/:id/complete`: Marcar missão como concluída (RF03, RF08)

### **Capítulos e Arcos Narrativos**
-   `GET /arc-narratives`: Listar Arcos Narrativos disponíveis para o usuário (RF05)
-   `POST /arc-narratives/choose`: Escolher um novo Arco Narrativo (RF05)
-   `GET /chapters`: Listar capítulos do Arco Narrativo atual do usuário (RF04)
-   `POST /chapters/generate-ia`: Solicitar à IA a geração de um capítulo personalizado (RF05)
-   `POST /chapters/community/:id/select`: Selecionar um capítulo da comunidade (RF14)

### **IA (Inteligência Artificial)**
-   `POST /ai/story/generate`: Gerar capítulo/narrativa personalizada (RF05)
-   `POST /ai/rewards/suggest`: Sugerir recompensas ao usuário (RF06)
-   `POST /ai/coach/chat`: Interagir com o IA Coach (RF07)
-   `POST /ai/coach/negotiate`: Negociar venda de itens com Comerciante IA (RF11)
-   `GET /ai/logs`: Obter logs de interação com IA (apenas Admin) (RF15)
-   `GET /ai/cache`: Inspecionar cache de IA (apenas Admin) (RF15)

### **Personalização e Economia**
-   `GET /avatar/config`: Obter configuração atual do avatar do usuário (RF10)
-   `PUT /avatar/equip`: Equipar itens no avatar (RF10)
-   `GET /items/cosmetic`: Listar todos os itens cosméticos disponíveis (RF10, RF14)
-   `GET /shop/daily`: Listar itens disponíveis na loja do Comerciante da Alma para o dia (RF11)
-   `POST /shop/buy`: Comprar item da loja (RF11)
-   `POST /shop/sell`: Vender item para a loja (RF11)
-   `GET /inventory`: Listar itens no inventário do usuário (RF11)
-   `POST /inventory/:id/use`: Usar um item consumível do inventário (RF11)

### **Batalhas (Soul Duel System)**
-   `GET /bosses/active`: Obter status do boss ativo (RN-09, RF09)
-   `POST /bosses/:id/interact`: Registrar ação do jogador em batalha (RN-09, RF09)
-   `GET /bosses/history`: Obter histórico de batalhas (RF09)

### **Notificações e PWA**
-   `POST /notifications/subscribe`: Registrar dispositivo para Push Notifications (RF12)
-   `DELETE /notifications/unsubscribe`: Desregistrar dispositivo para Push Notifications (RF12)
-   `GET /notifications`: Listar notificações in-app do usuário (RF12)
-   `POST /offline/sync`: Enviar alterações offline para sincronização (RF13)

### **Gerenciamento de Conteúdo (Admin/Editor)**
-   `CRUD /admin/arcs`: Gerenciar Arcos Narrativos (RF14)
-   `CRUD /admin/chapters/base`: Gerenciar Capítulos Base (RF14)
-   `CRUD /admin/missions/base`: Gerenciar Missões Base (RF14)
-   `CRUD /admin/classes`: Gerenciar Classes (RF14)
-   `CRUD /admin/talents`: Gerenciar Talentos (RF14)
-   `CRUD /admin/items`: Gerenciar Itens Globais (RF14)
-   `POST /admin/community/submit`: Submeter conteúdo da comunidade para revisão (RF14)
-   `PUT /admin/community/:id/review`: Revisar e aprovar/rejeitar conteúdo da comunidade (RF14)

## 9. Prompt Base (protótipo)
**Story Engine Prompt:**
> Use o perfil do usuário `{name, preferences, level, xp, recentActivity}`  
> Gere um capítulo com título, resumo e 3 quests ligadas às metas atuais.  
> Tom motivacional, curto e narrativo. Tema: `{theme}`.

---

## 10. Segurança e Custos de IA
- Implementar rate limiting e cache pra reduzir custos.  
- Monitorar consumo de tokens e orçamentos.  
- Armazenar prompts e respostas para depuração e regressão.

---



## 11. Métricas e Telemetria
DAU/WAU, retenção D7, tasksCompletedPerUser, avgSessionTime, AI calls per user, cost per 1k tokens.

---


