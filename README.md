# Sistema de Gestão de Acolhimento

Projeto full stack com:

- frontend em React + Vite
- backend em Node.js + Express
- leitura das planilhas CSV do Google Sheets pelo backend
- módulos:
  - Dashboard
  - Desospitalização
  - Pessoa Idosa
  - Criança e Adolescente
  - Unidades e Vagas

## Como rodar

### 1. Backend
```bash
cd backend
npm install
npm run dev
```

Servidor: http://localhost:3001

### 2. Frontend
Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

App: http://localhost:5173

## Observação
O backend faz a leitura das planilhas e o frontend só consome a API local.
