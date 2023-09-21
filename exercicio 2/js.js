// var peso = 80;
// var altura = 1.73;
// var imc = peso / (altura * altura);
var mostra = function(exibir){
    document.write(exibir);
}
// mostra("Seu peso é "+imc);

var calcular = function(peso, altura){
    var total = peso /(altura*altura);
    if (total < 35) {
        document.write("você está lonje da obesidade");
    }else{
        document.write("você está obeso");
    }
    return total;
};
var imc = Math.round(calcular(80, 1.70));
mostra("O seu imc é"+ imc);