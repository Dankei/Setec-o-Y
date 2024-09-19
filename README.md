# Y, um clone do X/Twitter

Este é um projeto de clone do X/Twitter, criado para evento científico SETEC do Instituto Federal do Paraná e para demonstração de habilidades em desenvolvimento web. Ele possui funcionalidades básicas do X, como criação e autenticação de contas, publicação de tweets, seguir usuários, e perfis próprios.

## Funcionalidades

- Cadastro e login de usuários
- Postagem de tweets (apenas texto)
- Seguir e deixar de seguir usuários
- Timeline com tweets dos usuários seguidos
- Perfil de usuário com tweets e informações
- Sistema de confirmação de token via e-mail

## Tecnologias Utilizadas

- **Frontend:**
  - HTML5, CSS3 (Tailwind CSS), JavaScript (React.js)
  - Axios para requisições HTTP
- **Backend:**
  - Node.js com Express.js
  - MySQL para o banco de dados
  - Bcrypt para criptografia de senha
- **Outros:**
  - WebSockets para atualizações em tempo real
  - Babel para Lint

## Instalação

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina. Você também precisará de um banco de dados MySQL em execução. 

1. Clone o repositório:

    ```bash
    git clone https://github.com/Dankei/Setec-o-Y.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd y
    ```

3. Instale as dependências do backend e frontend:

    ```bash
    npm i
    ```

4. Crie um arquivo `.env` na pasta `server` com as seguintes variáveis de ambiente:

    ```bash
    DB_HOST     = "rota_para_seu_banco"
    DB_USER     =  "user_banco"
    DB_PASSWORD = "senha_banco"
    DB_NAME     = "nome_banco"
    DB_PORT     = Porta do banco
    EMAIL_KEY  = Key SMTP
    EMAIL_FROM = email para autenticação via SMTP
    EMAIL_HOST = host SMTP
    EMAIL_PORT = Porta SMTP
    ```

5. O script para criação do banco de dados MySQL pode ser encontrado na pasta `backend/database/` com o nome de `database.sql`. Execute esse script para configurar o banco de dados necessário.

6. O servidor backend pode ser iniciado em conjunto com o frontend, basta digitar:

    ```bash
    npm run start // Iniciar ambos os servidores
    npm run startback // Iniciar backend
    npm run startfront // Iniciar frontend
    ```

    O aplicativo estará disponível em `http://localhost:3000`.

## Como Contribuir

Se você quiser contribuir com este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch: `git checkout -b minha-feature`
3. Faça suas alterações e adicione commits: `git commit -m 'Minha nova feature'`
4. Faça push para a branch: `git push origin minha-feature`
5. Abra um Pull Request

## Melhorias Futuras

- Implementar notificação em tempo real via WebSockets.
- Adicionar interações como likes, retweets e comentários.
- Adicionar suporte a customização de perfil (banners, biografia, foto de perfil).
- Otimizar o carregamento de mídia e experiência de usuário.
