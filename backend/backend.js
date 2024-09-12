import express from 'express';
import router from './router/routes.js'; 
import cors from 'cors';
import {log} from "./log/logger.js";
import { TokenRepository } from './model/repository/tokenRepository.js';
import { UserRepository } from './model/repository/userRepository.js';



const userRepository = new UserRepository();
const tokenRepository = new TokenRepository();

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
    
    //Limpeza de tokns expirados
    setInterval(() => {
    log.info("Cleaning expired tokens");
    log.success("Tokens cleaned");
    tokenRepository.deleteExpiredTokens()
    }, 1000 * 30); // 30 segundos  // 1000 * 60 * 60); // 1 hora


    //Limpeza de usuarios não confirmados a muito tempo
    setInterval(() => {
        log.info("Cleaning unconfirmed users");
        log.success("Users cleaned");
        userRepository.deleteUnconfirmedUsers()
        }, 1000 * 60 * 60 * 24 * 30); // 30 dias
});


