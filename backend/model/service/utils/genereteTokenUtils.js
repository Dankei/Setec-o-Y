
export class GenerateTokenUtils {
    constructor() {
       letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    generateToken(length = 6) {
        let result = '';
        const charactersLength = letters.length;

        for (let i = 0; i < length; i++) {
            result += letters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

}