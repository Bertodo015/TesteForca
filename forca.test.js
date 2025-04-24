const JogoDaForca = require('./forca');

describe ('Testar jogo da Forca', () => {
    it('Exerc01', () => {
        const jogo = new JogoDaForca('banana');
        expect(jogo.getTentativasRestantes()).toBe(6);
        expect(jogo.getLetrasChutadas()).toEqual([]);    
    });

    it('Exerc 02', () => {
        const jogo = new JogoDaForca('banana');
        jogo.chutar('a');
        expect(jogo.palavraOculta()).toBe('_ a _ a _ a');
        expect(jogo.getTentativasRestantes()).toBe(6);
        expect(jogo.getLetrasChutadas()).toContain('a');
    });

    it('Exerc 03', () => {
        const jogo = new JogoDaForca('banana');
        jogo.chutar('z');
        expect(jogo.palavraOculta()).toBe('_ _ _ _ _ _');
        expect(jogo.getTentativasRestantes()).toBe(5);
        expect(jogo.getLetrasChutadas()).toContain('z');
    });

    it('Exerc 04', () => {
        const jogo = new JogoDaForca('banana');
        jogo.chutar('a');
        jogo.chutar('a');
        jogo.letrasChutadas.push('b');
        jogo.getLetrasChutadas().forEach( ele => {
            expect(jogo.getLetrasChutadas().filter(l => l == ele).length).toBe(1);
        });
    });

    it('Exerc 05', () => {
        const jogo = new JogoDaForca('banana');
        jogo.chutar('b');
        jogo.chutar('a');
        jogo.chutar('n');
        expect(jogo.palavraOculta()).toBe('b a n a n a');
        expect(jogo.venceu()).toBe(true);
       
    });

    it('Exerc 06', () => {
        const jogo = new JogoDaForca('banana');
        jogo.chutar('c');
        jogo.chutar('d');
        jogo.chutar('e');
        jogo.chutar('f');
        jogo.chutar('g');
        jogo.chutar('h');
        expect(jogo.getTentativasRestantes()).toBe(0);
        expect(jogo.status()).toBe('perdeu');
    });

    it('Exerc 07', () => {
        const jogo = new JogoDaForca('banana');
        jogo.chutar('c');
        jogo.chutar('a');
        jogo.reiniciar();
        expect(jogo.getTentativasRestantes()).toBe(6);
        expect(jogo.getLetrasChutadas()).toEqual([]);
    });

    it('Exerc 08', () => {
        const jogo = new JogoDaForca('banana');
        try{
            jogo.chutar('')
        }catch (msg){
            expect(msg.message).toBe('Entrada inválida')
        }

        try{
            jogo.chutar('1')
        }catch (msg){
            expect(msg.message).toBe('Entrada inválida')
        }

        try{
            jogo.chutar('#')
        }catch (msg){
            expect(msg.message).toBe('Entrada inválida')
        }
    });

    it('Exerc 09', () => {
        const jogo = new JogoDaForca('banana');
        jogo.chutar('A');
        expect(jogo.palavraOculta()).toBe('_ a _ a _ a');
        expect(jogo.getTentativasRestantes()).toBe(6);
        expect(jogo.getLetrasChutadas()).toContain('a');
    });

    it('Exerc 10', () => {
        const jogo = new JogoDaForca('banana');
        jogo.chutar('a');
        jogo.chutar('c');
        jogo.chutar('d');
        expect(jogo.getTentativasRestantes()).toBe(4);
    });
});