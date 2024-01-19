function multiplicar(x: number, y: number): number {
    return x * y;
}
const resultado: number = multiplicar(2, 5);
console.log(resultado);
//--------------------------------------
function saudacao(nome: string): string {
    return 'Olá, ' + nome
}
const frase: string = saudacao('Marcus');
console.log(frase)