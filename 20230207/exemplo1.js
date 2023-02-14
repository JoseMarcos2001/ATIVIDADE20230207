const readline = require('readline');
const teclado = readline.createInterface({

input: process.stdin,

output: process.stdout

});

teclado.question("Digite qtd de produtos: ", (qtdprodutos) =>  {
    teclado.question('Digite valor do produto: ',(valproduto)=>{
        teclado.question('Digite o valor do desconto: ',(desconto)=>{


            let resultado = (parseInt(qtdprodutos) * parseInt(valproduto))-parseInt(desconto);
            
    console.log(" resultado R$" + resultado);
    
    teclado.close();
    
    })
})
});
