const readline = require('readline');
const teclado = readline.createInterface({

input: process.stdin,

output: process.stdout

});

teclado.question("Lado: ", (base) =>  {
    teclado.question('Altura: ',(altura)=>{
        let resultado = parseInt(base) * parseInt(altura);

        if(base==altura){
            console.log("quadrado: "+ resultado +" cm²\n");
        }else
        console.log("retangulo: "+ resultado +" cm²\n");
        teclado.close();

    })
    
});
