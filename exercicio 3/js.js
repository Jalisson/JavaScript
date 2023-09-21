var nome = prompt("Qual o seu nome?");
document.write( "Seja bem-vindo "+nome);
var altura = prompt("Qual sua altura?");
var peso = prompt("Qual seu peso?");
var mostrar = function (frase) {
    document.write(frase);
}
var imc = function(p, a){
    var result = p/(a*a);
    mostrar("O seu peso ideal é "+ Math.round(result));
}
imc(peso, altura);

