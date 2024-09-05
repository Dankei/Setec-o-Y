import express from 'express';
import router from './router/routes.js'; // Ajuste o caminho conforme necessário

const app = express();

app.use(express.json()); // Middleware para interpretar JSON no corpo das requisições

// Usa as rotas definidas no arquivo user.routes.js
app.use('/api', router);

// Inicia o servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
