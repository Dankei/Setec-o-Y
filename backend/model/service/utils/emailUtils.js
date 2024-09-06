import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const { EMAIL_KEY, EMAIL_FROM, EMAIL_HOST, EMAIL_PORT } = process.env;


export class EmailUtils {

    constructor(){
        transporter = nodemailer.createTransport({
            host: EMAIL_HOST,
            port: EMAIL_PORT,
            secure: true, 
            auth: {
              user: EMAIL_FROM,
              pass: EMAIL_KEY,
            },
          });

          transporter.verify(function (error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log("Servidor de email pronto para enviar mensagens");
            }
          });
    }

    async sendEmail(to,token){
        const mailOptions = {
            from: EMAIL_FROM,
            to: to,
            subject: 'Confirmação de email',
            text: `Seu token de confirmação é: ${token}`
        };

        try {
            await transporter.sendEmail(mailOptions);
            console.log("Email enviado com sucesso");
        }catch(error){
            console.log("Erro ao enviar email",error);
        }
    }
}