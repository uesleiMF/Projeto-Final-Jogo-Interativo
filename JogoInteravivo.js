const prompt = require('prompt-sync')();

var vidas= 15;
var passos= 76;
var pontos=10;
var tomouCafe=8;
var tomouBanho=9; 
var acertos=10;  
var mediaDeAcertos=(acertos+tomouBanho+tomouCafe+vidas+pontos+passos)/10;
let answer= 'S';


function resetcounter(){
  jogador = "";
  
}

while ( answer === 'S' ) {
  resetcounter();

  
function sleep (delay) {
    var start = new Date().getTime()
    while (new Date().getTime() < start+ delay);
   }
   
   console.log();
   console.clear();
   console.log("[===++##***JOGO INTERATIVO***##++===]");
   console.log();
   console.log("[=====VAMOS COMECAR O JOGO=====]");
   console.log();
   sleep(6000);
  
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

    console.log(); 

         let jogador={
            nome:"Ueslei",
            idade: 37,
            genero: "Masculino",
        }
         console.log(jogador);
         
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

     if(mediaDeAcertos >= 10){ 
        console.log(); 
          console.log(" CONTINUE ASSIM VC VENCEU O JOGO");  
          console.log(); 
        }else if(mediaDeAcertos <=9.9){  
            console.log(); 
         console.log("FIM DO JOGO VC PERDEU");  } 
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





