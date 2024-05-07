import Dados from 'readline-sync';

// Coleção de Ano e Salário
let salario_Ano = [
    { Ano: 2010, Salario: 510.00 },
    { Ano: 2011, Salario: 545.00 },
    { Ano: 2012, Salario: 622.00 },
    { Ano: 2013, Salario: 678.00 },
    { Ano: 2014, Salario: 724.00 },
    { Ano: 2015, Salario: 788.00 },
    { Ano: 2016, Salario: 880.00 },
    { Ano: 2017, Salario: 937.00 },
    { Ano: 2018, Salario: 954.00 },
    { Ano: 2019, Salario: 998.00 },
    { Ano: 2020, Salario: 1045.00 },
  ];
  
  // Coleção de Ano e IPCA
  let ipca_Ano = [
    { Ano: 2010, IPCA: 5.91 },
    { Ano: 2011, IPCA: 6.50 },
    { Ano: 2012, IPCA: 5.84 },
    { Ano: 2013, IPCA: 5.91 },
    { Ano: 2014, IPCA: 6.41 },
    { Ano: 2015, IPCA: 10.67 },
    { Ano: 2016, IPCA: 6.29 },
    { Ano: 2017, IPCA: 2.95 },
    { Ano: 2018, IPCA: 3.75 },
    { Ano: 2019, IPCA: 4.31 },
    { Ano: 2020, IPCA: 4.52 },
  ];
  

  // Escolha inicial
console.log(`Escolha uma das alternativas:
1 - Listar os salários minímos de 2010 à 2020
2 - Listar o índice IPCA de 2010 à 2020
3 - Comparação entre o percentual de aumento salarial e o IPCA`);  
let opcao = Dados.question("\nDigite o numero da sua escolha: ");


  // Primeira condição: Salarios
if (opcao == 1) {

  for (let salarios of salario_Ano){

     // variaveis
    let ano = salarios.Ano;
    let salario = salarios.Salario;

     // variaveis formatadas
    let ano_formatado = ano.toString().padStart(30,".");
    let salario_formatado1 = salario.toFixed(2).replace(".",",");
    let salario_formatado2 = salario_formatado1.toString();
    let salario_formatado = "R$ " + salario_formatado2;
  

    console.log(`\nAno: ${ano_formatado}\nSalário mínimo: ${salario_formatado.padStart(19,".")} `);

  }

}

  // Segunda condição: IPCA
else if (opcao == 2) {
  
for (let ipca1 of ipca_Ano ) {

   // variaveis
  let ipca = ipca1.IPCA;
  let ano_ipca = ipca1.Ano;

   // variaveis formatadas
  let ipca_formatado = ipca1.IPCA.toFixed(2).toString().replace(".",",").padStart(19,".");
  let ano_ipca_formatado = ano_ipca.toString().padStart(30,"."); 
  ipca_formatado += "%";

console.log(`\nAno: ${ano_ipca_formatado}\nInflação IPCA: ${ipca_formatado}`);

}

} 
 // Terçeira condição: Percentual
else if ( opcao == 3){

for (let contador = 0; contador < salario_Ano.length || contador < ipca_Ano.length; contador++) {
// variaveis
let ano_percent1 = salario_Ano[contador].Ano;
let salario_percent1 = salario_Ano[contador].Salario;
let ipca_percent1 = ipca_Ano[contador].IPCA;

// variaveis conta percentual
let crescimento;
let crescimentoFinal;
let crescimento_arredondado = "";

// Condição para imprimir indice percentual a partir de 2011.
if (contador == 0){
crescimentoFinal = "-";
crescimentoFinal = crescimentoFinal.padStart(9,".");

} else {
  crescimento = 0;
  let salario_anterior = salario_Ano[contador - 1].Salario;
  let diferenca = salario_percent1 - salario_anterior;
  crescimento = (diferenca / salario_anterior) * 100;

  crescimento_arredondado = crescimento.toFixed(2).replace('.',',').toString() + "%";
  crescimentoFinal = crescimento_arredondado.padStart(9,".");
}

//Variaveis formatadas
let ano_percent = ano_percent1.toString().padStart(26,".");

let salario_percent = "R$ " + salario_percent1.toFixed(2).replace(".",",").toString();
salario_percent = salario_percent.padStart(15,".");

let ipca_percent = ipca_percent1.toFixed(2).replace(".",",").toString();
ipca_percent = ipca_percent.padStart(15,".") + "%";




console.log(`\nAno: ${ano_percent}\nSalário mínimo: ${salario_percent}
Crescimento Salarial: ${crescimentoFinal}  \nInflação IPCA: ${ipca_percent}  `);

}




} 

else 
{
  console.log(`
  Opção inválida!`);

};


