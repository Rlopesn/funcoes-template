/* // função nomeada

function nomeFuncao (){
    // corpo da função
    // escopo
}

// função anomina

const   funcao = function (){
//escopo
}

// arrow function

const funcaoArrow = () => {


}

() => {} */


const imprimirNome = (nome) => {
    return `Olá ${nome}`
}

// passando argumentos
const meuNome = "Francisco"

console.log(imprimirNome(meuNome))
console.log(imprimirNome("ozemela"))
imprimirNome("maria")

const imprimir = function (nome){
    console.log(`Olá ${nome}, isso é uma função nao nomeada`)
}

imprimir ("livia")

const numeroPar = (num) => {
    const par = num % 2
    const verificarPar = par === 0
    console.log("resto", par)
    console.log(verificarPar)

    const soma = num + 10
    console.log(soma)

    const mult = num * num

    return `o numero ${num} é par ?${verificarPar}.
    somando com 10 é ${soma} e multiplicado
    por ele mesmo é ${mult}`
//retira os consoles para ver o retorno
}

   numeroPar(2)
   // ver o o resultado da funcao no console
   console.log(numeroPar(2))

//armazenando retorno da função dentro da variavel

const resultado = numeroPar(2)
console.log(resultado)


//refaça o exercicio com a sintaxe de expressao de função

const numeroPar2 = function (num) {
    const par = num % 2
    const verificarPar = par === 0
    console.log("resto", par)
    console.log(verificarPar)

    const soma = num + 10
    console.log(soma)

    const mult = num * num

    return `o numero ${num} é par ?${verificarPar}.
    somando com 10 é ${soma} e multiplicado
    por ele mesmo é ${mult}`
}

// faça funçao receba paramentros LOGUIN E SENHA

// prompt (exemplo)
/* const loginUsuario = prompt ("")
const senhaUsuario = prompt ("")  */

const autenticar = (login, senha) => {
    const loginArmazenado = "Rlopesn"
    const senhaArmazenada = "1234"
    const loginVerificado = loginArmazenado === login
    const senhaVerificada = senhaArmazenada === senha

    const logar = loginVerificado && senhaVerificada

    return logar 

}
console.log("loguin", autenticar("Rlopesn", "1234"))
//impressão prompt
//console.log""(autenticar(loginUsuario, senhaUsuario)) 

// exercicio slide

const maiorIdade = (nome, anoNascimento, anoAtual) =>{
    const idadeAtual = anoAtual - anoNascimento
    const verificacao = idadeAtual >= 18
    return `${nome} é maior de idade ? ${verificacao}`

}

console.log(maiorIdade("Rafael", 1992, 2022))
