import express from 'express';
import router from './router/routes.js';
import cors from 'cors';
import { log } from "./log/logger.js";




const app = express();
const corsOptions = {
    origin: 'http://localhost:3000', // URL do frontend
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json()); // Middleware para interpretar JSON no corpo das requisições

// Usa as rotas definidas no arquivo user.routes.js
app.use('/api', router);

// Inicia o servidor
const PORT = 3001;
app.listen(PORT, () => {
    log.init();
    log.success(`Server is running on port ${PORT}`);

});
