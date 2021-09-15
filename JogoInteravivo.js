const prompt = require('prompt-sync')();

console.log();
console.log("[===++##***JOGO INTERATIVO***##++===]");
console.log();
console.log("[========VAMOS COMECAR O JOGO=======]");
console.log();
console.log("------PREENCHAR NOME DO JOGADOR"------);
console.log();


var jogador= ""; 
var vidas= 10;
var passos= 0;
var pontos=10;
var tomouCafe=10;
var tomouBanho=10; 
var acertos=0;  
var mediaDeAcertos=(acertos+tomouBanho+tomouCafe+vidas+pontos+passos);
let answer= 'S';




function resetcounter(){
  jogador = "";
  passos=  0;
}

while ( answer === 'S' ) {
  resetcounter();

 
jogador=prompt("Digite seu nome aqui:"); 
console.log(jogador); 
console.log(); 
passos= prompt("Quantidades de passos:")
console.log(passos); 
console.log(); 

function sleep (delay) {
    var start = new Date().getTime()
    while (new Date().getTime() < start+ delay);
   }
   
   console.log(); 
    console.clear();
    console.log("Vidas: " + vidas ); 
    sleep(2000);
    console.clear();
    console.log("Pontos: " + pontos );
    sleep(3000);
    console.clear();
    console.log("Tomou Café: " + tomouCafe ); 
    sleep(4000);
    console.clear();
    console.log("Tomou Banho: " + tomouBanho ); 
    sleep(5000);
    console.clear();

    if(mediaDeAcertos >= 50){ 
        console.log(); 
          console.log(" CONTINUE ASSIM VC VENCEU O JOGO");  
          console.log(); 
        }else if(mediaDeAcertos < 50){  
            console.log(); 
         console.log("FIM DO JOGO VC PERDEU");  } 
         console.log(); 


     console.log("Nome: " + jogador); 
     console.log(); 
     console.log("Vidas: " + vidas ); 
     console.log(); 
     console.log("Quantidade de passos: " +passos ); 
     console.log(); 
     console.log("Tomou Café: " + tomouCafe); 
     console.log(); 
     console.log("Tomou Banho: " + tomouBanho ); 
     console.log(); 
     console.log("Pontos: " + pontos ); 
     console.log(); 
     console.log("Media De Acertos:" + mediaDeAcertos);
     console.log(); 
     answer = prompt('JOGAR NOVAMENTE? [S / N] ');
     console.log(); 
    } if (answer = 'S') {
        console.log(); 
        console.log('Fim do Jogo!')
        console.log(); 
    }
    var data=new Date(); 
 var meses=
 new Array("Janeiro","Fevereiro",
 "Março","Abril","Maio","Junho",
 "Julho","Agosto","Setembro",
 "Outubro","Novembro","Dezembro");

 var dia=data.getDate();  
 var mes=data.getMonth();
   var ano=data.getFullYear();
   console.log("Marabá-PA, " + dia + 
   " de " + meses[mes] + " de " + ano ); 



