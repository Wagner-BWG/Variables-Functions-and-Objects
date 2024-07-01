 
 //Escreva a função "geradorDeBusinessName" que receberá como parâmetro "nomeCompleto" uma string com nome completo
 //e retornará uma string no formato "[primeiro nome], [último nome]".
 //Se o último nome for "Junior", "Filho" ou "Neto", ela retornará "[primeiro nome], [penúltimo nome]".
 const geradorDeBusinessName = (nomeCompleto) => {
    
    //ESCREVA AQUI SUA FUNÇÃO.


 }

 //Escreva a função "contagemDoMaior" que receberá como parâmetro "arrayDeNumeros" um array de números qualquer
 //e retornará qual é o maior número do array e uma contagem de quantas vezes esse número aparece no array.
 //O retorno será uma string no formato:
 //"O número que mais aparece é [maior numero no array], aparecendo [quantidade de vezes que o numero aparece] vezes."
const contagemDoMaior = (arrayDeNumeros) => {
    
    //ESCREVA AQUI SUA FUNÇÃO.


}


//Escreva a função "checarNacionalidade" que receberá como parâmetor "infoPessoa" um objeto no formato:
// {nome: "Wagner Matos Barbosa", idade: 35, sexo: "masculino", nacionalidade: "brasileiro(a)"}
//e retornará a string "brasileiro(a)" se o a pessoa do objeto for brasileira.
//Caso a pessoa não seja brasileira, a função retorna a string "estrangeiro(a)"
const checarNacionalidade = (infoPessoa) => {
        
    //ESCREVA AQUI SUA FUNÇÃO.



}


//Escreva a função "carroPermitido" que receberá como parâmetros uma string "tipoDeCorrida" e um objeto "carro" no formato:
// {modelo: "Escudo", marca: "Suzuki", categoria: "rally"}
//Se a categoria do carro corresponder ao "tipoDeCorrida", a função retorna a string:
//"O [marca do carro] [modelo do carro] pode participar de corridas da categoria [tipo de corrida].""
//Caso a categoria do carro naõ corresponda ao "tipoDeCorrida", a função retorna:
//"O [marca do carro] [modelo do carro] não é permitido em corridas da categoria [tipo de corrida].""
const carroPermitido = (tipoDeCorrida, carro) => {
            
    //ESCREVA AQUI SUA FUNÇÃO.




};

 module.exports = {
    geradorDeBusinessName,
    contagemDoMaior,
    checarNacionalidade,
    carroPermitido
 }