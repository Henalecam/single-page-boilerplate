# Deploy Instructions for Vercel

## Pré-requisitos
- Conta no Vercel
- Projeto conectado ao GitHub

## Passos para Deploy

### 1. Preparar o Repositório
```bash
# Fazer commit das alterações
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Conectar ao Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Importe o repositório do GitHub
5. Configure as seguintes opções:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

### 3. Variáveis de Ambiente (se necessário)
No painel do Vercel, adicione as seguintes variáveis de ambiente:
- `NODE_ENV`: `production`

### 4. Deploy
1. Clique em "Deploy"
2. Aguarde o processo de build
3. Acesse o domínio fornecido

## Estrutura de Arquivos para Vercel

```
├── api/
│   └── index.js          # Ponto de entrada da API
├── dist/
│   ├── index.js          # Servidor Express compilado
│   └── public/           # Arquivos estáticos do frontend
│       ├── index.html
│       └── assets/
├── vercel.json           # Configuração do Vercel
└── package.json          # Scripts e dependências
```

## Troubleshooting

### Se o domínio não estiver servindo tráfego:
1. Verifique se o build foi bem-sucedido
2. Confirme se o arquivo `api/index.js` foi criado
3. Verifique os logs de build no painel do Vercel
4. Teste localmente com `npm run build && npm start`

### Se houver erros de build:
1. Execute `npm install` localmente
2. Execute `npm run build` para testar
3. Verifique se todas as dependências estão no `package.json`

## URLs Importantes
- **Frontend**: `https://seu-dominio.vercel.app/`
- **API**: `https://seu-dominio.vercel.app/api/contact`
