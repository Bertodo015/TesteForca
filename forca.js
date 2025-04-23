// forca.js
class JogoDaForca {
  constructor(palavra, tentativasMaximas = 6) {
    this.palavra = palavra.toLowerCase();
    this.tentativasMaximas = tentativasMaximas;
    this.tentativasRestantes = tentativasMaximas;
    this.letrasChutadas = [];
    this.letrasCorretas = [];
  }

  getTentativasRestantes() {
    return this.tentativasRestantes;
  }

  getTentativasMaximas(){
    return this.tentativasMaximas;
  }

  getLetrasChutadas() {
    return this.letrasChutadas;
  }

  getLetrasCorretas(){
    return this.letrasCorretas;
  }

  getPalavra() {
    return this.palavra;
  }

  reiniciar(){
    this.tentativasRestantes = this.tentativasMaximas;
    this.letrasChutadas = [];
    this.letrasCorretas = [];
  }

  chutar(letra) {
    letra = letra.toLowerCase();

    // Verificar se a letra é válida
    if (!letra || letra.length !== 1 || !/[a-z]/.test(letra)) {
        throw new Error('Entrada inválida');
    }
    
    if (this.letrasChutadas.includes(letra)) {
      return 'letra já chutada';
    }

    this.letrasChutadas.push(letra);

    if (this.palavra.includes(letra)) {
      this.letrasCorretas.push(letra);
      return 'acertou';
    } else {
      this.tentativasRestantes--;
      return 'errou';
    }
  }

  palavraOculta() {
    return this.palavra
      .split('')
      .map(letra => (this.letrasCorretas.includes(letra) ? letra : '_'))
      .join(' ');
  }

  venceu() {
    return [...new Set(this.palavra)].every(letra =>
      this.letrasCorretas.includes(letra)
    );
  }

  perdeu() {
    return this.tentativasRestantes <= 0 && !this.venceu();
  }

  status() {
    if (this.venceu()) return 'venceu';
    if (this.perdeu()) return 'perdeu';
    return 'jogando';
  }
}
