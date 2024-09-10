import nodemailer from 'nodemailer';
import dotenv from "dotenv";
import {log} from "../../../log/logger.js";

dotenv.config({ path: "./.env" });

const { EMAIL_KEY, EMAIL_FROM, EMAIL_HOST, EMAIL_PORT } = process.env;


export class EmailUtils {

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: EMAIL_HOST,
            port: EMAIL_PORT,
            secure: true, 
            auth: {
              user: EMAIL_FROM,
              pass: EMAIL_KEY,
            },
          });

          this.transporter.verify(function (error, success) {
            if (error) {
                log.error(error);
            } else {
                log.success("Servidor de email pronto para enviar mensagens");
                log.end();
            }
          });
    }

    async sendEmail(to,token){
        const mailOptions = {
            from: EMAIL_FROM,
            to: to,
            subject: 'Confirmação de email',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            font-family: Arial, sans-serif;
                        }
                        .container {
                            background-color: #000;
                            color: #fff;
                            text-align: center;
                            padding: 20px;
                        }
                        .code {
                            font-size: 48px;
                            font-weight: bold;
                            background-color: #333;
                            padding: 20px;
                            display: inline-block;
                            border-radius: 5px;
                        }
                        .copy-icon {
                            width: 24px;
                            height: 24px;
                            cursor: pointer;
                            vertical-align: middle;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="code" id="verification-code">${token}</div>
                    </div>
                    <script>
                        function copyToClipboard() {
                            const code = document.getElementById('verification-code').innerText;
                            navigator.clipboard.writeText(code).then(function() {
                                alert('Código copiado para a área de transferência!');
                            }, function(err) {
                                alert('Falha ao copiar o código.');
                            });
                        }
                    </script>
                </body>
                </html>
            `,
        };

        try {
            await this.transporter.sendMail(mailOptions);
            log.success("Email enviado com sucesso");
        }catch(error){
            log.error("Erro ao enviar email",error);
        }
    }
}