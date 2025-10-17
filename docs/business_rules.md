# 📜 Business Rules Specification — SoulQuest
**Versão:** 0.2  
**Data:** 2025-10-15  
**Autor:** Joelson  
**Status:** Em desenvolvimento  

---

## 🧭 Visão Geral
As regras de negócio definem o comportamento interno do SoulQuest — como o sistema reage às ações do jogador, calcula progresso, distribui recompensas e equilibra as forças interiores (Luz e Sombra).  
Essas regras garantem consistência lógica, coerência narrativa e motivação em toda a jornada do herói interior.

---

## ⚔️ Regras de Negócio Atuais

### **RN-01 — Ganho de XP**
**Descrição:**  
O jogador ganha XP ao concluir tarefas, refletindo progresso pessoal e consistência.  
Esse XP alimenta o **nível geral** e também o **nível de classe**, dependendo do tipo da tarefa.

**Condição:**  
Quando uma tarefa é marcada como “concluída”.

**Ação:**  
`XP = baseXP × fatorDificuldade × (1 + comboModifier)`  
- O **fatorDificuldade** é um valor atribuído às tarefas/missões, geralmente definido pelo **Admin/Editor** ao criar ou modificar Missões Base (RN-14), podendo ser adaptado pela IA (Story Engine) com base no contexto e nível de desafio percebido para o jogador.
- Se a tarefa for compatível com a **classe ativa**, o jogador ganha XP de Classe adicional.  
- Se o XP total ≥ limiar de nível → o jogador sobe de nível e ganha **1 Ponto de Alma (atributo)**.  

**Impacto:**  
- Módulo de progresso geral e de classe.  
- Distribuição de pontos de alma (atributos).  
- Integração com RN-07 (atributos e talentos).  

---

### **RN-02 — Recompensas com Moedas**
**Descrição:**  
O jogador ganha **moedas** ao completar tarefas, missões ou capítulos.  
Essas moedas são usadas na loja do Comerciante da Alma para adquirir recompensas.

**Condição:**  
Missão ou capítulo finalizado com sucesso.

**Ação:**  
`coins = XP ganho ÷ 10`  
Atualiza saldo no perfil. Pode sofrer bônus de atributos como **Criatividade (CRE)** ou talentos de classe.  

**Impacto:**  
- Loja de recompensas e economia interna.  
- Integração com RN-05 (sistema de recompensas dinâmicas).  

---

### **RN-03 — Influência das Vozes**
**Descrição:**  
O sistema ajusta a força das “vozes interiores” (Luz e Sombra) conforme as ações do jogador.  
As vozes moldam a narrativa e os diálogos do IA Coach.

**Condição:**  
Toda ação positiva aumenta a Luz; falhas ou procrastinação fortalecem a Sombra.

**Ação:**  
Ajustar porcentagem de domínio (0–100%) e refletir visualmente no fundo da interface.  
Energia alta reforça a Luz; energia baixa favorece a Sombra.  

**Impacto:**  
- IA narrativa e moral.  
- Interface introspectiva (camada 3).  
- Interação com RN-06 (energia).  

---

### **RN-04 — Combo de Missões (Streak)**
**Descrição:**  
O sistema recompensa consistência diária com um modificador de XP crescente.

**Condição:**  
Todas as tasks de uma missão (primária ou secundária) concluídas no mesmo dia.

**Ação:**  
`comboModifier += 0.1` por dia consecutivo (máx. 1.5).  
Se falhar em completar todas as tasks → combo resetado.  
Influência extra: streaks longas concedem **energia bônus (RN-06)** e aumentam chance de eventos positivos (IA narrativa).  

**Impacto:**  
- Cálculo de XP e progresso.  
- Sistema de energia e IA narrativa.  

---

### **RN-05 — Sistema de Recompensas Dinâmicas (IA + Loja do Comerciante)**
**Descrição:**  
A loja de recompensas é personalizada e validada pela IA, representada pelo NPC “Comerciante da Alma”.

**Condição:**  
O jogador define recompensas desejadas; a IA valida conforme filtros morais, coerência e equilíbrio.

**Ação:**  
- IA aprova ou adapta recompensas e as adiciona à loja pessoal.  
- Jogador compra recompensas com moedas.  
- Recompensas compradas ficam acumuladas no inventário até uso manual.  
- `coins += baseCoins × (1 + comboModifier)`  

**Filtros aplicados:**  
- **Moral:** rejeita recompensas negativas.  
- **Coerência:** garante alinhamento com metas.  
- **Equilíbrio:** ajusta custo conforme impacto.  

**Extras:**  
- Reações narrativas do Comerciante da Alma.  
- Recompensas evolutivas (raras/lendárias conforme nível e classe).  

**Impacto:**  
- Loja e economia interna.  
- IA adaptativa e narrativa interativa.  
- Integração com RN-02 e RN-06.  

---

### **RN-06 — Sistema de Energia e Influência Moral**
**Descrição:**  
A energia representa o equilíbrio entre Luz e Sombra dentro do jogador, refletindo seu estado emocional e disciplinar.  
Ela afeta o comportamento da IA narrativa, o ganho de XP e o domínio das vozes.

**Condição:**  
Toda vez que o jogador realiza (ou falha em realizar) uma tarefa, conclui uma missão ou compra uma recompensa.

**Ação:**  
Ajustar `energia` (0–100%) conforme as regras abaixo:

| Situação | Tipo | Efeito | Detalhes |
|-----------|------|--------|-----------|
| Task primária concluída | Positiva | +3% | Impacto direto no progresso principal. |
| Task secundária concluída | Positiva | +2% | Reforça consistência. |
| Todas as tasks da missão primária concluídas | Positiva | +8% | Desbloqueia evento de Luz. |
| Todas as tasks da missão secundária concluídas | Positiva | +5% | Melhora equilíbrio diário. |
| Task primária não feita | Negativa | −5% | Reduz energia por falha em prioridade. |
| Task secundária não feita | Negativa | −2% | Impacto menor. |
| Nenhuma task concluída no dia | Negativa | −20% | Gatilho narrativo sombrio. |
| Todas as missões concluídas (prim+sec) | Positiva | +12% | “Dia perfeito”. |
| Falha total (nenhuma missão feita) | Negativa | −25% | Ativa evento de Sombra. |
| Combo de dias perfeitos (streak) | Positiva | +5% por dia (máx. +15%) | Premia consistência. |
| Recompensa saudável comprada | Positiva | +5% | Ex: descanso, lazer produtivo. |
| Recompensa duvidosa | Negativa | −10% | IA filtra pelo contexto moral. |

**Efeitos derivados:**
- **IA Coach:** chance da Luz falar = `energia%`; Sombra = `100 − energia%`.  
- **Narrativas:** prompts recebem `energia` como variável (influencia tom).  
- **XP:** energia ≥70% → +10% XP; energia ≤30% → −10% XP.  
- **Interface:** fundo, cores e falas mudam conforme o estado.  

**Impacto:**  
- IA Coach e narrativa.  
- Sistema de capítulos e missões.  
- Cálculo de XP e recompensas.  
- Interface introspectiva (camada 3).  

---

### **RN-07 — Sistema de Classes, Atributos e Talentos (Progressão RPG)**

**Descrição:**  
O jogador evolui por meio de **classes**, **atributos (Pontos de Alma)** e **talentos**, refletindo seu progresso emocional e técnico no mundo de SoulQuest.  
Esse sistema conecta o desenvolvimento pessoal com o crescimento mecânico do personagem, influenciando **energia**, **IA Coach** e **recompensas**.

---

**Condição:**  
Ativada quando o jogador:
- Sobe de nível geral ou de classe;  
- Completa tarefas temáticas (relacionadas à virtude da classe);  
- Atinge marcos de consistência (streaks, capítulos concluídos).  

---

**Ação:**

#### 🎭 Classes Iniciais (MVP)
| Classe | Virtude | Estilo | Bônus passivo |
|---------|----------|--------|----------------|
| 🛡️ Guardião | Disciplina | Focado em rotina | −50% penalidade por falhas em tasks primárias. |
| 📜 Sábio | Conhecimento | Aprendizado e foco | +10% XP em tarefas mentais (categoria “Aprendizado”). |
| 💧 Curador | Equilíbrio | Cuidado e autoconsciência | +5% energia ao concluir o dia produtivo. |
| 🔥 Forjador | Criatividade | Projetos e expressão | +10% moedas e XP em tarefas criativas. |
| 🌿 Explorador | Liberdade | Curiosidade e descoberta | +5% chance de eventos positivos e drops de energia. |

---

#### 💎 Atributos (Pontos de Alma)
| Atributo | Representa | Efeito |
|-----------|-------------|--------|
| **Força (STR)** | Vontade e ação | +XP em tarefas difíceis; reduz perda de energia por falhas. |
| **Sabedoria (WIS)** | Clareza e reflexão | Melhora tom e precisão da IA Coach. |
| **Foco (FOC)** | Atenção e constância | Aumenta chance de streaks e completude de missões. |
| **Espírito (SPI)** | Luz interior | Acelera regeneração de energia e aumenta fala da Luz. |
| **Criatividade (CRE)** | Expressão | Multiplica recompensas criativas e ativa eventos inspiracionais. |

---

#### 🌟 Talentos
| Talento | Classe | Efeito |
|----------|--------|--------|
| “Voto de Ferro” | Guardião | +10% XP após 5 dias perfeitos consecutivos. |
| “Fluxo Mental” | Sábio | +15% XP em tarefas de aprendizado. |
| “Aura Serena” | Curador | Falhas leves não reduzem energia. |
| “Inspiração Divina” | Forjador | +1 moeda por tarefa criativa concluída. |
| “Sorte do Viajante” | Explorador | Chance de bônus aleatórios em tarefas secundárias. |

---

#### 🔺 Progressão
| Evento | Resultado |
|---------|------------|
| Subir de nível geral | +1 Ponto de Alma. |
| Atingir nível 5 (geral) | Escolhe classe inicial. |
| Atingir nível 10 de classe | Desbloqueia subclasse/fusão. |
| 7 dias perfeitos consecutivos | Ganha 1 talento novo. |
| Energia ≥ 80% ao fim da missão | +10% XP de classe. |

> 🧩 XP Geral (níveis 1–50, MVP até 20) desbloqueia atributos e talentos.  
> ⚔️ XP de Classe (níveis 1–10) mede domínio e desbloqueia fusões narrativas.  

---

#### 🧠 Integração com IA e Sistemas
- **IA Coach:** adapta falas e moralidade segundo a classe ativa e o estado de energia.  
- **Narrativas e chefões:** comportamento e diálogos variam conforme a classe e os talentos.  
- **Recompensas:** influenciadas pelos atributos dominantes.  
- **Energia e moral:** afetam o ganho de XP e a chance de eventos positivos.  

---

**Impacto:**  
- Sistema de progressão e energia.  
- IA narrativa e falas contextuais.  
- Cálculo de XP, recompensas e talentos.  
- Personalização do jogador e tom do capítulo.  

### **RN-08 — Sistema de Hábitos, Substituição e Talentos**

**Descrição:**  
O sistema de hábitos define o processo de **criação, substituição e consolidação** de hábitos dentro do SoulQuest.  
Ele transforma hábitos negativos em **chefões (bosses)** e hábitos dominados em **talentos permanentes**, unindo o crescimento pessoal às mecânicas de RPG.

---

**Condição:**  
Ativada quando o jogador cria uma missão secundária do tipo:
- **Criação de hábito** (novo comportamento saudável);  
- **Substituição de hábito** (troca de comportamento nocivo);  
- **Desafio de manutenção** (reforço de consistência).  

---

**Ação:**  

#### 🎯 Tipos de Missões Secundárias
| Tipo | Objetivo | Exemplo | Dificuldade | Resultado |
|------|-----------|----------|--------------|------------|
| Criação | Adquirir um novo hábito saudável. | “Ler 10 min por dia.” | Fácil / Média | Ganha XP, moedas e energia. |
| Substituição | Trocar um hábito ruim por um bom. | “Trocar cigarro por tempo com Deus.” | Alta | Desbloqueia **Talento permanente**. |
| Desafio | Reforçar um hábito já criado. | “30 dias sem falhar.” | Variável | Evolui o talento (nível 2). |

> As missões de **substituição** se integram ao **Soul Duel System (RN-09)**, representando batalhas simbólicas contra vícios e fraquezas.

---

#### ⚔️ Bosses — Representação dos Hábitos Ruins
Cada missão de substituição gera um **boss interno**, com HP definido pela dificuldade e duração do hábito negativo.  
Derrotar o boss = substituir o hábito ruim com sucesso.

| Tipo de Boss | Dificuldade | Dias consecutivos para vitória | Descrição |
|---------------|--------------|-------------------------------|------------|
| Hábito fácil | Baixa | 15 dias | Pequenas rotinas negativas. |
| Hábito médio | Média | 30 dias | Requer foco e consistência. |
| Hábito difícil | Alta | 45 dias | Exige controle emocional e disciplina. |
| Vício | Extrema | 60+ dias | Hábito fortemente enraizado (gera evento narrativo especial). |

---

#### ⚔️ Sistema de Batalha contra o Boss
| Ação | Efeito no Boss |
|------|----------------|
| Cumpre o hábito substituto | −3% HP |
| Evita o hábito ruim | −1% HP |
| Falha no novo hábito | +2% HP |
| Faz o hábito ruim | +5% HP |
| Combo de dias perfeitos | Dano bônus +1%–3% |

- **Condição de vitória:** bossHP ≤ 0 → hábito ruim vencido.  
- **Condição de derrota:** 3 falhas seguidas → boss regenera +10% HP.  
- **Energia < 30% (RN-06):** ativa evento de “Sombra”, reduzindo eficácia dos ataques.  

---

#### 💎 Talentos — Recompensas Permanentes
Ao vencer um boss (hábito ruim), o jogador desbloqueia um **Talento** que representa o domínio daquela área da vida.

| Categoria | Exemplo | Efeito |
|------------|----------|--------|
| Mental | “Disciplina de Ferro” | +5% XP em tarefas complexas. |
| Espiritual | “Fé Constante” | Reduz chance da Sombra interferir. |
| Físico | “Corpo em Movimento” | +2% energia por dia ativo. |
| Social | “Palavra de Ouro” | Desbloqueia novos diálogos e eventos. |
| Criativo | “Mente Inventiva” | +10% moedas em tarefas criativas. |

- Talentos podem **evoluir** via missões de **Desafio** (nível 2).  
- A **IA narrativa** reconhece talentos ativos e adapta falas, capítulos e recompensas.  

---

#### 🔢 Fórmulas e Condições

**ProgressoBoss:**  
```plaintext
HP_atual = HP_inicial 
− (3 × diasCumpridos) 
− (1 × diasEvitarRuim) 
+ (5 × diasFalhaRuim) 
+ (2 × diasFalhaNovo)
```
**Condição de vitória:** 
```
HP ≤ 0
```
**Recompensa:**
```
 XP × 2 + moedas × 3 + talentoDesbloqueado
```
**Falha prolongada:**
```
 HP +10% e moral −10 (energia)
```

**Integrações:**

RN-06 (Energia): define resistência e recuperação diária.

RN-07 (Atributos): STR e FOC aumentam dano; WIS e SPI reduzem impacto das falhas.

RN-09 (Soul Duel System): controla chefões simbólicos e eventos narrativos.

**Impacto:**

Crescimento pessoal gamificado e moral dinâmico.

Progressão da narrativa e do sistema de talentos.

Aumento de propósito e dificuldade adaptativa.

Reforço do ciclo: falha → reflexão → transformação → vitória.

# **RN-09 — Soul Duel System (Sistema de Batalhas e Chefões)**

**Descrição:**  
O **Soul Duel System** representa os confrontos internos do jogador — batalhas contra **vícios, fraquezas e desafios significativos** — convertidos em chefões (*bosses*).  
Cada luta simboliza o processo de **transformação pessoal**, com base em **hábitos, energia e atributos**.  
Essas batalhas são o ponto culminante das **missões secundárias (hábitos)**, culminando **Capítulos e Arcos Narrativos**.

---

## ⚙️ **Condições de Ativação**
- Quando o jogador inicia uma **missão de substituição de hábito** (RN-08).  
- Quando o jogador enfrenta um **Boss de Capítulo** (Mini-Boss ou Boss Intermediário, marcando o clímax do capítulo).  
- Quando a **energia cai abaixo de 30%** (RN-06) → pode ser invocado um **Boss de Sombra**.  
- Ao iniciar um **Arco Narrativo**, o **IA Coach** (RN-03, RN-06) guia o jogador a **identificar e escolher seu Boss Principal** (vício forte ou desafio central).  
- Ao atingir **100% de progresso em todas as missões de um Arco Narrativo**, o jogador enfrenta o **Boss Final da Jornada**.  

---

## ⚔️ **Ação**
Cada batalha ocorre em **turnos simbólicos (diários)**, baseados nas **ações reais** do jogador.

### **🧩 Estrutura Geral de Combate**

| Elemento | Descrição | Origem |
|-----------|------------|--------|
| **HP do Boss** | Representa a força do vício, fraqueza ou desafio. | Dificuldade do hábito (RN-08) ou complexidade do Capítulo/Arco. |
| **HP do Jogador (Energia)** | Representa sua força emocional e moral. | Derivada do RN-06. |
| **Ataques do Jogador** | Ações reais positivas, hábitos cumpridos, tarefas concluídas. | RN-01, RN-08. |
| **Ataques do Boss** | Falhas, procrastinação, desistência, recaídas. | RN-06, RN-08. |
| **Dano Base** | Calculado por classe e atributos. | Ex: STR + FOC (RN-07). |

---

#### 🎲 Fórmulas Principais

**Dano do Jogador:**  
Dano = (STR × 0.5) + (FOC × 0.3) + comboModifier + talentoBonus


**Dano do Boss:**  
Dano = (Dificuldade × 2) − (WIS + SPI × 0.4)

**Condição de Vitória:**  
bossHP ≤ 0 → Boss derrotado.

**Condição de Derrota:**  
energia ≤ 0 → Falha moral temporária (ativar evento de Sombra).


---

## 🧠 **Tipos de Chefões**

| Tipo | Origem | Duração | Recompensa |
|------|---------|----------|-------------|
| **Mini-Boss** | Pequenos hábitos ruins (adiar tarefas, preguiça) ou Boss de Capítulo inicial. | 15–30 dias | +XP, +Moedas, energia extra |
| **Boss Intermediário** | Hábitos médios (rotina quebrada, distrações) ou Boss de Capítulo significativo. | 30–45 dias | Talento raro |
| **Boss Principal (do Arco)** | Vício forte ou desafio central escolhido pelo jogador. | 45–60+ dias | Talento lendário + evento narrativo |
| **Boss Final (da Jornada)** | Símbolo da Sombra interior e desafio supremo de toda a jornada. | Tempo variável | “Despertar da Alma” — renascimento completo |

---

## 🕯️ **Modo Narrativo**
Durante as batalhas, o **IA Coach** alterna entre as **vozes da Luz e da Sombra**, criando **diálogos e reflexões em tempo real** com base na energia atual e nos atributos.  
O **resultado da luta (vitória ou derrota)** altera o rumo da história nos capítulos seguintes.

### **Exemplos de Integração**
- **Vitória →** novo capítulo desbloqueado com narrativa de superação.  
- **Derrota →** capítulo sombrio de reflexão e recomeço.  

---

## 💠 **Recompensas e Impactos**

| Evento | Recompensa | Impacto |
|---------|-------------|----------|
| **Derrota de um Boss** | XP ×2, moedas ×3, +1 talento | Domínio sobre o hábito/desafio. |
| **Falha na batalha** | −10% energia, reflexão narrativa | Aumenta chance de eventos da Sombra. |
| **Vitória perfeita (sem falhas)** | +1 atributo livre | Marca lendária e diálogo especial. |

---

## 🔗 **Integração com Outros Sistemas**
- **RN-06:** A energia define a resistência do jogador.  
- **RN-07:** Atributos e talentos alteram dano e defesa.  
- **RN-08:** Cada hábito ruim é um mini-boss do Soul Duel.  
- **IA Narrativa:** Gera falas únicas durante e após as lutas, moldando capítulos futuros.  

---

## 🌌 **Impacto Geral**
- Central na narrativa e progressão moral.  
- Cria senso de propósito e dificuldade crescente.  
- Une todos os sistemas (**energia, hábitos, classes e recompensas**) em um ciclo simbólico de **luta e evolução pessoal**.


# **RN-10 — Sistema de Personalização do Herói (Aparência e Avatar)**

## **Descrição**
O sistema permite ao jogador personalizar a aparência visual de seu avatar, o qual representa seu "Eu" no **SoulQuest**.  
Esta personalização inclui elementos cosméticos como corpo, cabelo, roupas e acessórios, e está intrinsecamente ligada ao **progresso, conquistas e recompensas** do jogo.

---

## **Condição**
- Acessar o editor de personagem.  
- Desbloquear novos itens cosméticos através de:
  - Subir de nível geral ou de classe (**RN-01**, **RN-07**).
  - Vitórias em Chefões (Mini-Boss, Intermediário, Principal, Final) (**RN-09**).
  - Conclusão de missões e capítulos específicos.
  - Compra na Loja do Comerciante da Alma (**RN-05**) com moedas (**RN-02**).

---

## **Ação**
- **Editor Visual:**  
  Uma interface gráfica dedicada permite ao jogador selecionar e combinar diferentes elementos visuais (*assets de imagem*) para construir seu avatar.

- **Slots de Equipamento:**  
  O avatar possui *slots* visuais (ex: cabelo, torso, pernas, acessório) onde os itens desbloqueados podem ser equipados.

- **Atribuição de Itens:**  
  Cada item cosmético possui:
  - `itemId` única  
  - `type` (slot)  
  - `imagePath`  
  - `unlockCondition`  

  Alguns itens podem ter um **passiveBonus** menor (ex: `+1% XP` em tarefas específicas, `+0.5% energia diária`), que se soma aos **atributos** (**RN-07**) ou **status** (**RN-06**).

- **Persistência:**  
  A configuração atual do avatar (IDs dos itens equipados em cada slot) é armazenada no perfil do usuário no banco de dados.

- **IA Narrativa:**  
  A IA (**RN-03**, **RN-07**) pode ocasionalmente fazer menções narrativas à aparência atual do avatar do jogador,  
  ou o **Comerciante da Alma** (**RN-05**) pode sugerir itens baseados no perfil ou estilo de jogo do usuário.

---

## **Impacto**
- **Engajamento Visual:** Aumenta a conexão do jogador com seu herói e a imersão na jornada.  
- **Recompensa Não-Funcional:** Adiciona uma camada extra de recompensa e progressão além de XP e moedas.  
- **Micro-Bônus de Gameplay:** Itens com bônus passivos incentivam a experimentação e a personalização estratégica.  
- **IA Narrativa:** Enriquece a interação com a IA, tornando-a mais pessoal e contextual.  
- **Monetização Futura (Potencial):** Abre portas para futuros itens premium ou passes de temporada.

# **RN-11 — Sistema de Notificações e Eventos Dinâmicos (com IA e PWA)**

## **Descrição**
O sistema **SoulQuest** engaja o jogador através de **notificações contextuais** e **eventos dinâmicos gerados pela IA**, mantendo-o informado sobre seu progresso, lembrando-o de tarefas importantes e adicionando um elemento de **surpresa e vitalidade** à jornada.  
As notificações podem ser tanto **internas ao aplicativo** quanto **externas** (*Push Notifications via PWA*).

---

## **Condição**
Gatilhos para notificações e eventos incluem, mas não se limitam a:

- **Horário Definido pelo Usuário:** Um horário específico do dia para "atualização" ou lembrete geral do app.  
- **Tarefas com Prazo/Horário:** Tarefas diárias ou missões com horários específicos de conclusão (**RN-02**).  
- **Progressão do Jogador:** Subir de nível, desbloquear talentos/atributos, concluir capítulos/missões (**RN-01**, **RN-07**).  
- **Estado de Energia/Vozes:** Alterações significativas no equilíbrio **Luz/Sombra** (**RN-03**, **RN-06**).  
- **Streaks:** Início, continuação ou quebra de combos de missões (**RN-04**).  
- **Interações da Loja/Comerciante:** Novas recompensas disponíveis, descontos ou itens personalizados sugeridos (**RN-05**).  
- **Eventos de Batalha:** Início, progresso, vitória ou derrota em duelos contra Chefões (**RN-09**).  
- **Gatilhos da IA:** Eventos aleatórios ou contextuais gerados pelo sistema de IA (conforme "Ação" abaixo).

---

## **Ação**

### **Tipos de Notificações**
- **In-App Notifications:**  
  Mensagens exibidas dentro do aplicativo (modais, toasts, banners, feed de atividades).

- **Push Notifications (PWA):**  
  Notificações enviadas ao dispositivo do usuário, mesmo quando o aplicativo não está em uso.

### **Fluxo de Envio (Push Notifications)**
1. **Permissão do Usuário:**  
   O sistema solicita permissão explícita (via *Service Worker* do PWA).  
2. **Inscrição do Dispositivo:**  
   Após a permissão, o *frontend* envia as informações de inscrição (*Push Subscription*) para o *backend*.  
3. **Envio pelo Backend:**  
   O *backend* (Node.js) agenda e envia as mensagens push através de um serviço de push (ex: **Web Push Protocol**), direcionando-as aos dispositivos inscritos.

---

## **Eventos Dinâmicos Gerados pela IA**
O módulo de IA (**Story Engine** ou **AI Coach** — *DRS 7.1, 7.3*) analisa o contexto do jogador (energia, streaks, classe, atributos, histórico recente, etc.) para gerar **Eventos Narrativos** ou **Mini-Desafios** inesperados.

### **Exemplos de Eventos**
- 🟡 **Oportunidade Brilhante:** Ganhos extras de XP ou moedas por um curto período.  
- ⚫ **Dúvida Sombria:** Pequena redução de energia, com diálogo reflexivo do AI Coach (Sombra).  
- 🔥 **Missão Urgente:** Uma tarefa temporária com grande recompensa ou penalidade se não for concluída.  
- 🛒 **Encontro com o Comerciante:** Notificação de que o Comerciante da Alma tem algo novo ou especial para o jogador.

Esses eventos são entregues via **notificações (in-app ou push)** e/ou se manifestam diretamente na **interface** ou **diálogo do AI Coach**.

---

## **Log de Atividades e Notificações**
Todas as notificações importantes e eventos dinâmicos são registrados em um **"Diário de Bordo"** ou **"Log de Atividades"**,  
permitindo que o jogador consulte o histórico e reveja informações perdidas.

---

## **Impacto**
- **Engajamento Sustentado:** Mantém o jogador conectado e motivado, mesmo fora do app.  
- **Comunicação Contextual:** Garante que informações relevantes (lembretes, progresso) sejam entregues no momento certo.  
- **Mundo Vivo e Dinâmico:** Adiciona imprevisibilidade e interação, evitando a monotonia da rotina.  
- **Reforço da Narrativa:** Eventos da IA enriquecem a história pessoal do jogador, tornando a jornada mais imersiva.

# **RN-12 — Sistema de Modo Offline e Sincronização de Dados (PWA)**

## **Descrição**
O **SoulQuest** oferece uma experiência de usuário **robusta e contínua**, permitindo que o jogador interaja com o aplicativo **mesmo sem conexão à internet**.  
As ações realizadas **offline** são armazenadas localmente e **sincronizadas automaticamente** com o servidor assim que a conectividade é restabelecida, garantindo que o progresso **nunca seja perdido** e a jornada continue ininterrupta.  
Em modo offline, o acesso à aplicação é **restrito à Camada 1 (Modo Lite)**, que inclui a **visualização de insights básicos locais**.

---

## **Condição**
- O dispositivo do jogador está offline ou com conectividade intermitente.  
- O jogador realiza ações que modificam dados dentro da **Camada 1** (ex: marcar tarefa como concluída, editar título de tarefa, criar nova tarefa simples).  
- O jogador acessa os **insights básicos disponíveis** na Camada 1.  
- A conexão com a internet é restabelecida.

---

## **Ação**

### **1. Restrição de Acesso Offline**
- Quando o aplicativo detecta que está offline, o acesso à **Camada 2 (A Jornada do Herói)** e à **Camada 3 (A Mente)** é **desabilitado** ou exibido com um **placeholder informativo**.  
- O jogador terá acesso irrestrito apenas à **Camada 1 (Modo Lite)**.

---

### **2. Caching de Assets, APIs e Dados Offline da Camada 1**
O **Service Worker** do PWA armazena em cache (no **Cache Storage** do navegador) os arquivos estáticos do frontend (**HTML, CSS, JS, imagens, fontes**) e as respostas de **requisições API frequentes** necessárias para a Camada 1, incluindo:

- ✅ Lista de tarefas do dia  
- ✅ Perfil básico do usuário (XP, nível, moedas, nome do avatar)  
- ✅ **Insights básicos definidos na RN-13** (ex: streak atual, resumo de tarefas concluídas no dia)

Isso garante que o aplicativo **carregue e opere com os dados mais recentes disponíveis em cache** quando offline, mantendo a **funcionalidade essencial** e os **insights imediatos**.

---

### **3. Armazenamento de Alterações Offline (Camada 1)**
- Quaisquer modificações feitas enquanto offline (ex: concluir tarefa, ajustar hábito, mudar atributo, equipar item cosmético) são gravadas no **IndexedDB** do navegador, com metadados como `timestamp` e `actionType`.  
- Alterações que afetem diretamente a **Camada 2** ou **Camada 3** não são permitidas (ex: comprar item na loja, interagir com o AI Coach, personalizar avatar, acessar histórico de capítulos).  
- Essa limitação garante consistência e evita erros que dependem de lógica de backend ou IA em tempo real.

---

### **4. Sincronização em Segundo Plano (Background Sync)**
- Quando o app detecta alterações pendentes no IndexedDB, o **Service Worker** registra um evento de **sincronização em segundo plano** usando a **Background Sync API**.  
- Assim que a conectividade é restabelecida (mesmo que o app esteja fechado), o Service Worker:
  1. Lê as alterações armazenadas no IndexedDB;  
  2. Envia-as ao **backend (Node.js)** em **formato de lote (batch)** ou individualmente.

---

### **5. Resolução de Conflitos no Backend**
- O backend processa as alterações offline, priorizando as operações da Camada 1.  
- Em caso de conflito (ex: mesma tarefa alterada offline e online):
  - Estratégia inicial: **“Last write wins”** (a alteração mais recente prevalece).  
  - Alternativamente, pode verificar se o dado no servidor foi alterado desde a última sincronização do cliente.

---

### **6. Feedback ao Usuário**
- A interface exibe um **indicador claro de modo offline** e uma mensagem informando que o acesso está limitado à Camada 1.  
- O usuário é notificado por **toasts** ou **banners** quando:
  - Alterações são salvas localmente;  
  - A sincronização é concluída com sucesso após o retorno da conexão.

---

## **Impacto**
- **Melhora da Usabilidade:** Permite acesso e interação ininterruptos para as ações diárias essenciais e visualização de informações rápidas.  
- **Experiência de Aplicativo Nativo:** Reforça a sensação de um app fluido e autossuficiente.  
- **Durabilidade de Dados:** Garante que o progresso diário e os insights imediatos não sejam perdidos.  
- **Simplificação do MVP:** Reduz a complexidade, focando a sincronização apenas na Camada 1 e deixando as demais dependentes de conexão.  
- **Engajamento Aumentado:** Minimiza frustrações e mantém o jogador conectado à jornada, independentemente da conexão.

# **RN-13 — Sistema de Relatórios e Insights (Dashboard Avançado)**

## 🧠 **Descrição**
O **SoulQuest** oferece ao jogador uma visão clara e motivadora de seu progresso e comportamento por meio de **relatórios e insights dinâmicos**.  
Esses relatórios são apresentados em diferentes níveis de detalhe — **Camadas 1, 2 e 3** — com a **IA fornecendo análises e recomendações personalizadas**.

---

## ⚙️ **Condição**
- O jogador acessa o **dashboard principal** (Camada 1).  
- O jogador explora as **seções de progresso e histórico** (Camada 2).  
- O jogador busca **auto-reflexão e análise profunda** (Camada 3, interagindo com o IA Coach).  
- As **ações do jogador** (conclusão de tarefas, vitórias, etc.) geram novos dados para análise.  

---

## 🎯 **Ação**

### **Camada 1 — Modo Lite (Visão Rápida e Offline-Friendly)**
- **Disponível Offline:** ✅ Sim  
- **Informações:** Apresenta dados essenciais e atualizados que refletem o estado imediato do jogador.  

**Exemplos:**
- XP atual / Próximo Nível  
- Nível Geral e Nível de Classe (RN-01, RN-07)  
- Streak Atual (RN-04)  
- Progresso do Capítulo Atual (visual simples)  
- Balanço Luz/Sombra (RN-03, RN-06) — barra de status ou porcentagem  
- Resumo Rápido do Dia: tarefas concluídas vs. pendentes  

---

### **Camada 2 — A Jornada do Herói (Relatórios de Progresso e Histórico)**
- **Disponível Offline:** ❌ Não  
- **Informações:** Oferece uma visão detalhada e histórica do progresso do jogador em sua jornada.  

**Exemplos:**
- Histórico de Níveis e XP (gráfico de evolução)  
- Status de Missões e Capítulos: concluídos e recompensas obtidas  
- Coleção de Itens/Recompensas (RN-05, RN-10, RN-15)  
- Estatísticas de Combate: histórico de vitórias/derrotas, taxa de sucesso (RN-09)  
- Visão Geral de Hábitos: progresso em substituição/criação de hábitos (RN-08)  
- Árvore de Talentos/Atributos (RN-07): pontos distribuídos e talentos ativos  

---

### **Camada 3 — A Mente (Insights Profundos e Análise da IA)**
- **Disponível Offline:** ❌ Não  
- **Informações:** Foco em **auto-reflexão**, **padrões de comportamento** e **recomendações personalizadas** da IA.  

**Exemplos:**
- **Análise de Tendências:** IA (AI Coach) aponta padrões de sucesso e falha  
  - Ex: “Você é mais produtivo pela manhã, mas falha nas tarefas noturnas.”  
- **Balanço Luz/Sombra no Tempo:** gráfico de evolução da energia e dominância das vozes  
- **Recomendações Personalizadas da IA:** novos hábitos, ajustes de rotina, desafios baseados no histórico (RN-03, RN-06)  
- **Relatório de Influência:** como os atributos e talentos (RN-07) impactam o gameplay e a vida real  
  - Ex: “Sua Força está alta, indicando que você superou muitos desafios!”  
- **Diário de Reflexão:** IA Coach propõe perguntas e registra respostas do jogador sobre sua jornada  

---

## 💥 **Impacto**
- **Motivação e Engajamento:** o jogador vê seu progresso de forma tangível, incentivando a continuidade  
- **Autoconsciência:** insights valiosos sobre padrões e pontos de melhoria  
- **Personalização:** relatórios mais relevantes e acionáveis graças à IA  
- **Feedback Contínuo:** o jogador entende o impacto de suas ações  
- **Profundidade do Jogo:** adiciona uma camada estratégica e reflexiva à experiência gamificada  

# **RN-14 — Sistema de Gerenciamento de Conteúdo (Oficial e da Comunidade)**

## 🧩 **Descrição**
O **SoulQuest** utiliza um sistema robusto para a **criação, edição e gerenciamento** de todo o conteúdo narrativo e de gamificação — **Capítulos, Missões Base, Classes, Talentos e Itens**.  
Esse conteúdo pode ser tanto **oficial** (criado e curado pela equipe do SoulQuest) quanto **da comunidade** (criado por usuários qualificados).  
O sistema garante **qualidade, coerência e disponibilidade**, servindo como base para a **personalização da IA**.

---

## ⚙️ **Condição**
- Um **usuário com perfil de Admin ou Editor** acessa o painel de gerenciamento de conteúdo.  
- Um **usuário qualificado** (ex: *Coach Rafael - Persona*) submete um novo **Capítulo** ou **Missão Base** para revisão.  
- A **IA (Story Engine)** precisa de modelos de capítulos e missões para gerar narrativas personalizadas.  
- Novas **Classes, Atributos, Talentos ou Itens Cosméticos** são criados ou atualizados.  

---

## 🎯 **Ação**

### **Painel de Gerenciamento (Admin/Editor)**
Interface administrativa (backend ou frontend separado) com **CRUD completo** das entidades de conteúdo base:

#### **Entidades Principais**
- **Arcos Narrativos (Grandes Objetivos):**  
  - Campos: título, descrição, temas gerais.  
  - Função: definir as linhas narrativas principais.  

- **Capítulos Base:**  
  - Campos: título, resumo, tema, objetivos primários, missões associadas.  

- **Missões Base:**  
  - Campos: título, descrição, XP base, tipo (primária/secundária, criação/substituição de hábito), requisitos.  

- **Classes, Atributos e Talentos:**  
  - Definição e balanceamento de gameplay (ligação com RN-07).  

- **Itens Cosméticos:**  
  - Campos: `itemId`, `name`, `type`, `imagePath`, `cost`, `unlockCondition`, `passiveBonus` (ligação com RN-10).  

- **Recompensas da Loja:**  
  - Itens disponíveis para compra (ligação com RN-05).  

---

### **Validação e Versionamento**
- **Validação de Conteúdo:**  
  Regras automáticas garantem integridade e coerência (ex: um capítulo deve ter um título e pelo menos uma missão primária).  

- **Versionamento Simples:**  
  As alterações em conteúdos principais são rastreadas (`version` em *Chapter*), e a IA sempre usa a **versão mais recente e estável**.  

---

### **Sistema de Contribuição da Comunidade**
Permite que **usuários qualificados** criem e enviem novos capítulos e missões.

#### **Papel do Contributor**
Usuários com **nível de confiança alto** ou perfis específicos (ex: *Coach Rafael*) podem submeter conteúdo.

#### **Processo de Submissão**
Interface dedicada para criar **Capítulos** e associar **Missões Base** a eles.

#### **Revisão e Moderação**
- **Revisão Interna:**  
  Admin/Editor valida qualidade, coerência, ausência de conteúdo nocivo e alinhamento com a visão do jogo.  
- **Revisão da Comunidade (futuro):**  
  Sistema de **votação ou avaliação** poderá ajudar na curadoria.  
- **Publicação:**  
  Após aprovação, o conteúdo é marcado como **“Publicado”** e vai para a biblioteca de capítulos.  

---

### **Personalização pela IA**
Mesmo capítulos criados pela comunidade são **adaptados pela IA (Story Engine)**  
→ se ajustam ao **perfil, atributos e progresso** do jogador, criando **narrativas únicas** com base no template.  

---

### **Armazenamento de Conteúdo**
- **Banco de Dados Principal:**  
  Armazena Capítulos, Missões Base, Classes, Atributos, etc.  
- **Serviço de Arquivos:**  
  Imagens e assets (ex: itens cosméticos) são armazenados via **Cloudinary** ou localmente (para MVP).  

---

## 💥 **Impacto**
- **Expansão de Conteúdo:** o jogo cresce organicamente com novas narrativas e desafios.  
- **Engajamento da Comunidade:** estimula usuários a virarem criadores, fortalecendo o ecossistema.  
- **Flexibilidade Narrativa:** jogadores escolhem entre conteúdo **oficial, gerado por IA ou da comunidade**.  
- **Manutenção de Qualidade:** revisões garantem padrão e coerência mesmo em conteúdo da comunidade.  
- **Alimentação da IA:** fornece **templates ricos** e contextos narrativos para a geração e personalização de histórias.  

# **RN-15 — Sistema da Loja do Comerciante da Alma e Inventário de Itens**

## 🧩 **Descrição**
O **SoulQuest** integra um sistema de **economia gamificada** através da **Loja do Comerciante da Alma** e do **Inventário do Jogador**.  
O Comerciante, um **NPC carismático e interativo**, oferece **itens rotativos e consumíveis** que auxiliam o jogador em sua jornada.  
O **inventário** serve como o repositório de todos os itens adquiridos e recompensas, compondo a base do sistema de progressão material e estética.

---

## ⚙️ **Condição**
- O jogador acessa a **Loja do Comerciante da Alma**.  
- O jogador possui **moedas suficientes** para realizar uma compra (RN-02).  
- O jogador deseja **vender** um item do inventário.  
- O jogador deseja **usar** ou **equipar** um item do inventário.  

---

## 🎯 **Ação**

### **Loja do Comerciante da Alma**

#### 🛒 **Estoque Dinâmico**
- Itens **rotativos diariamente**, redefinidos a cada **24 horas** (ex: meia-noite GMT ou horário local).  
- Os estoques e quantidades são **atualizados automaticamente**.  

#### **Tipos de Itens**
- **Cosméticos:** personalização do avatar (RN-10).  
- **Recompensas de Lazer/Experiência:** consumíveis que concedem bônus temporários (ex: *“1h de jogo livre”*, *“30min de leitura relaxante”*).  
- **Consumíveis Temporários:** oferecem bônus de gameplay por tempo limitado (ex: *“Poção de XP Bônus por 1h”*, *“Escudo da Concentração”*).  

#### **Preços**
- Definidos manualmente pelo **Admin (RN-14)** ou **ajustados dinamicamente pela IA (RN-05)**, considerando economia e raridade.  

---

### 💰 **Mecânica de Compra**
1. O jogador seleciona um item.  
2. Se tiver **moedas suficientes**, confirma a compra.  
3. O valor é **deduzido do saldo** (RN-02).  
4. O item é **adicionado ao Inventário**.  
5. A IA (Comerciante) reage com **diálogos carismáticos e contextuais** à compra.  

---

### 🔄 **Mecânica de Venda de Itens**
- O jogador pode **vender** itens do inventário ao Comerciante da Alma.  
- A negociação ocorre com a **IA (AI Coach na persona do Comerciante)** (RN-05, RN-11).  

#### **Sistema de Negociação**
- O jogador “pechincha” com o Comerciante via chat.  
- A IA oferece um preço e o jogador pode **aceitar ou tentar negociar**.  
- A chance de sucesso depende de **atributos como CRI ou SPI** (RN-07).  
- O preço de venda é **inferior ao de compra**, variando conforme **raridade e estado** do item.  
- Ao finalizar:
  - As **moedas são creditadas** ao jogador.  
  - O **item é removido** do inventário.  

---

### 🎒 **Inventário do Jogador**

#### **Acesso**
- Localizado na **Camada 2 (A Jornada do Herói)**.  
- **Necessita conexão à internet.**  

#### **Interface Visual**
- Inspirada em **inventários clássicos de RPG** (ex: *Minecraft*).  
- Itens exibidos em **slots expansíveis** com ícones e descrições.  
- **Sem limite de capacidade** no MVP.  

#### **Ações Disponíveis**
- **Usar:** ativa consumíveis (ex: “1 hora de jogo”) e aplica efeitos (ex: registrar lazer no histórico).  
- **Equipar:** aplica cosméticos ao avatar (RN-10) sem remover o item.  
- **Inspecionar:** mostra descrição, valor, bônus e raridade.  

---

### 🧠 **IA e Interação com o Comerciante da Alma (NPC)**

#### **Representação Visual**
- NPC visualmente **carismático e expressivo** (inspiração *Cuphead*).  
- Possui um **campo de chat dedicado** para interação.  

#### **Diálogo Contextual**
- A IA adapta os diálogos ao **perfil do jogador**, considerando:  
  - Histórico de compras/vendas.  
  - Saldo de moedas.  
  - Estado de energia (Luz/Sombra) (RN-03, RN-06).  

#### **Ofertas Personalizadas**
- A IA pode:
  - Sugerir **itens relevantes** para o jogador.  
  - Oferecer **descontos especiais**.  
  - Criar **eventos promocionais narrativos** (ex: “Semana das Almas Perdidas”).  

---

## 💥 **Impacto**
- **Economia Engajadora:** incentiva o uso ativo de moedas e gestão de recursos.  
- **Profundidade do Gameplay:** adiciona estratégia e decisão entre compra, venda e uso.  
- **Imersão Narrativa:** o Comerciante da Alma se torna um **personagem icônico** da jornada.  
- **Utilidade das Recompensas:** dá propósito às moedas e aos itens coletados.  
- **Interação com IA:** amplia o papel do **AI Coach** para uma dimensão comercial e relacional.  
