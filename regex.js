//1. faça uma função que retorne se uma dada string contém a letra h nela

// function retornarString (palavra) {
// const regex = /h/
// return regex.test(palavra)
// }
// const resultado = retornarString("baby shark")
// console.log(resultado)

// 2. altere sua função para que ela aceite maiuscula e minuscula (case sensitive)
// function retornarSensitive (palavra) {
//     const regex = /n/i 
//     return regex.test(palavra)
// }
// const resultado = retornarSensitive ("Nataly")
// console.log(resultado)

// 3. altere altere sua função para que ela retorne se a string termina com 'a' ou comece com 'b' aceitando maiuscula e minuscula também
// function aceitarSensitive (palavra) {
//     const regex = /a$|^b/
//     return regex.test(palavra)
// }
// const resultado = aceitarSensitive ("baby shark")
// console.log(resultado)

// Desafio: altere sua função para verificar se a string contém número
function contemNumbers (palavra) {
    const regex = /\d+/
    return regex.test(palavra)
}
const resultado = contemNumbers ("baby shark")
console.log(resultado)