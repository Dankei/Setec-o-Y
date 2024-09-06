
export class GenerateTokenUtils {
    constructor() {
       this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    generateToken(length = 6) {
        let result = '';
        const charactersLength = this.letters.length;

        for (let i = 0; i < length; i++) {
            result += this.letters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

}