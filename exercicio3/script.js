//Crie a const para a frase aqui

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair "`
const novaFrase = frase.replace(`verde`, `rosa`).replace(`azul`, `laranja`).replace(`mas não deixe o gato sair`,`MAS NÃO DEIXE O GATO SAIR`);


console.log(frase);
console.log(novaFrase);
console.log(`A nova frase inclui as palavra verde: ${novaFrase.includes(`verde`) }`);
console.log(`A nova frase inclui as palavra laranja: ${novaFrase.includes(`laranja`) }`);