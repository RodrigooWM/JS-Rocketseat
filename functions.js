/*
function criafrase (){
console.log('Imagine uma nova história para sua vida e acredite nela.')
console.log('Não existe um caminho para a felicidade. A felicidade é o caminho.')
console.log('Ser feliz sem motivo é a mais autêntica forma de felicidade.')

}

criafrase()
criafrase()
criafrase()
criafrase()

console.log('fim da execução')
*/
/*
const sum = function(n1,n2){
    res = n1 + n2
}
sum(2,3)
console.log(res)
*/
/*
const sum = function(n1,n2){
    let total = n1 + n2
    return total
}
let n1=13
let n2=22
console.log(`${sum(n1,n2)}`)
console.log(total)
console.log(total)
*/
/*
function suco(f1,f2){
    return f1+f2
}
const copo = suco('banana','maçã')

console.log(copo)
*/
/*
let subject = 'criative'
function createate(subject){
    subject = 'standard'
    return subject
}
console.log(subject)
console.log(createate(subject))
*/

/*sayit()
const sayit = function(){
    console.log('rodrigo')
}

*/
//arrow function
/*
const sayan = (name) => {
    console.log(name)
}

sayan()
*/
//callback com arrowfunction
/*
function feijao (name) {
    name()
}
feijao(
    () => {
        console.log('Estou em chamada')
    }
)
*/

/*
function Person(name){
    this.name = name
    this.walk = function(){
        return "está andando"
    }
}
const rodri = new Person('Rodrigo')
const joao = new Person ('João')
console.log(rodri.walk())
console.log(joao.walk()) 
*/

/*
let date = new Date("2022-09-27")


console.log(date)*/

/*
let string = '200.6564'
console.log(Number(string).toFixed(3).replace(".",","))

let number = 2321654.654897987
console.log(String(number))


*/

/*
let palav = "Nossa senhora é legal demais"
console.log(palav.toLowerCase())*/
/*
let frase = "Eu quero sair do Brasil!"
let myArray = frase.split(" ")
let sepfrase = myArray.join("+")
console.log(sepfrase.toUpperCase())*/

/*
let frase = "Eu quero sair do Brasil!"
console.log(frase.includes("sair"))
*/

/*
let meuArray=['a','b','c','d']
console.log(meuArray)
console.log(meuArray.join("-").toUpperCase())
console.log(meuArray.includes("f")) //Perguntando se tem "f" no array. Como não tem, a resposta é falsa.
*/

/*
let myArray=new Array ('a','b','c','d')
console.log(myArray)
*/

/*
console.log([
    "a",
    {type:"array"},
    function(){return "ola dev!"},
    "b","c","d","e"][2]())
    */

    /*
    let palavra = "mudando para array" 
    console.log(Array.from(palavra))
    */

    let techs = ["html","css","js"]
    techs.push("React")
    techs.push("Angular")
    techs.push("Vue")
    techs.push("SQL")
    techs.push("GIT")
    techs.unshift("React") //Inclui item no inicio do array
    techs.pop() //Remove o último item do array
    techs.shift()//Remove o item do começo do array
    techs.splice(1,2) //Esse comando define que a partir da casa 1, 2 itens serão removidos (Atenção nessa contagem das casas).
/*
    console.log(techs.slice(1,3)) //Esse comando exclui os itens que estão entre as casas 1 e 3 (Atenção nessa contagem).
*/    

    let index = techs.indexOf('html')
    console.log(techs)
    console.log(`Na sequência "${techs}", o html está na posição ${index}`)
    techs.splice(index, 1)
    console.log(techs)

