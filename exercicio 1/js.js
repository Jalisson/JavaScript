var CaminhoDeGasolina = 480;
var litros = 40;
var consumoDeGasolina = 480/litros;

var pulaLinhaETrassos = function(){
    document.write("<br>")
    document.write("<hr>")
} 
var mostrar = function(frase){
    document.write(frase);
    pulaLinhaETrassos();
}

mostrar("O consumo de gasolina é "+consumoDeGasolina+" Litros");

var caminhoComAlcool = 300;
var consumoDeAlcool = 300/litros;
mostrar("O consumo de alcool com o mesmo tanque é de"+ Math.round(consumoDeAlcool)+" Litros");

var precoALcool = 2.40;
var precoGasolina = 2.90
var precoPorKilometro_gasolina = precoGasolina*consumoDeGasolina; 
mostrar("Preço do litro do consudo de "+consumoDeGasolina+"Litros rodados é "+precoPorKilometro_gasolina+" reais");
