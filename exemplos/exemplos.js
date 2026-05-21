//victória brito

//Exemplo de array

//Criando arrays com nomes de frutas e sucos
let sucos = ["Laranja", "Abacaxi", "Maracujá", "Uva"];
console.log(sucos[0]);

//Criando um array de números
let números = [1, 2, 3, 4, 5];
console.log(números[2]);

//Acessando um elemento específico do array
let animais = ["Cachorro", "Gato", "Coelho", "Hamster"];
console.log(animais[1]);

//Alterando um elemento do array
let times = ["Palmeiras", "Flamengo", "São Paulo", "Corinthians"];
times[2] = "Grêmio";
console.log(times);

//Descobrindo o tamanho do array
let games = ["FIFA", "Call of Duty", "Minecraft", "Fortnite"];
console.log(games.length);

//Adicionando um elemento ao final do array
let cores = ["vermelho", "azul", "verde"];
cores.push("amarelo");
console.log(cores);

//Removendo o último elemento do array
let carros = ["Fusca", "Gol", "Civic", "Corolla"];
carros.pop();
console.log(carros);

//Removendo o primeiro elemento do array
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"];
cidades.shift();
console.log(cidades);

//Adicionando um elemento no início do array
let países = ["Brasil", "Argentina", "Chile"];
países.unshift("Uruguai");
console.log(países);
