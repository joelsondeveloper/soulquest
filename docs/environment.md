# 🌍 Ambiente de Desenvolvimento — SoulQuest

## 🧩 Versões principais
| Tecnologia | Versão | Observação |
|-------------|---------|-------------|
| Node.js | v22.x.x | Versão LTS recomendada |
| npm | v11.6.2 | Atualizada em 2025-10-14 |
| Next.js | (a definir após setup) | |
| TypeScript | (a definir após setup) | |
| TailwindCSS | (a definir após setup) | |
| MongoDB | (a definir após backend) | Opção inicial de DB |
| PostgreSQL | (a definir após backend) | Opção alternativa de DB (se escolhido) |
| Redis | (a definir após backend) | Para cache de IA (RNF01, RNF08, RF15) |

---

## ⚙️ Dependências Globais (instaladas no sistema)
```bash
npm install -g npm@11.6.2
```

## 💻 Sistema Operacional
 - Windows 10/11

## 🧰 Ferramentas Recomendadas
| Ferramenta| Finalidade | 
|-----------|-----------|
| **VS Code** | Editor principal de código |
| **Extensões** | ESLint, Prettier, Tailwind IntelliSense, GitLens |
| **GitHub Desktop** | Controle de versão e commits visuais |
| **MongoDB Compass** | Visualização e gerenciamento do banco de dados |
| **Postman / Thunder Client** | Testes de API |
| **Vercel CLI** | Deploy do frontend |
| **Render / Railway CLI** | Deploy do backend |

## 🧪 Como testar o ambiente
```bash
node -v
npm -v
npx create-next-app --version
```

## 🧩 Variáveis de Ambiente (serão definidas em breve)
O projeto utilizará um arquivo `.env` para armazenar chaves e credenciais sensíveis.
exemplo:
```bash
MONGO_URI=
POSTGRES_URL= # Se PostgreSQL for usado
REDIS_URL= # Para o cache de IA (RNF01, RNF08)
JWT_SECRET=
AI_API_KEY= # Chave para Gemini/OpenAI (RF15)
AI_API_BASE_URL= # URL base da API de IA, se necessário
CLOUDINARY_CLOUD_NAME= # Para uploads de imagem (RF10, RF14)
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
GOOGLE_CLIENT_ID= # Para Google OAuth (RF01)
GOOGLE_CLIENT_SECRET=
WEB_PUSH_VAPID_PUBLIC_KEY= # Para Push Notifications (RF12)
WEB_PUSH_VAPID_PRIVATE_KEY=
```

⚠️ Nunca versionar o arquivo .env no GitHub.

## 🧠 Observações Gerais
 - Todos os pacotes devem ser instalados com npm (não usar yarn ou pnpm neste projeto).

 - Antes de abrir PRs ou commits grandes, rodar npm run lint e npm run build para garantir que está tudo consistente.

 - Atualizações de versões importantes (Node, npm, Next, etc.) devem ser registradas aqui.

 📘 Documento criado para garantir padronização do ambiente de desenvolvimento do projeto SoulQuest.
Última atualização: 2025-10-17