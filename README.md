# Number generator for lottery
Utilizando uma função auxiliar para gerar um número aleatório único a cada vez que for chamada:
<br>
# Inicialização do array numbers:
``` 
let numbers = [];
```
Este array será usado para armazenar todos os números gerados aleatoriamente.
<br>

# Função getRandomNumber:
``` 
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    if (numbers.includes(randomNumber)) {
        return getRandomNumber();
    }
    numbers.push(randomNumber);
    return randomNumber;
}
```
Esta função é responsável por gerar um número aleatório único. Ela faz isso verificando se o número gerado já existe no array numbers. Se ele já existir, a função é chamada novamente recursivamente. Caso contrário, o número é adicionado ao array numbers e retornado.
<br>

# Evento de clique no botão "rollButton":
``` 
document.getElementById('rollButton').onclick = function() {
    numbers = [];

    let a = getRandomNumber();
    let b = getRandomNumber();
    let c = getRandomNumber();
    let d = getRandomNumber();
    let e = getRandomNumber();
    let f = getRandomNumber();

    document.getElementById("sorte1").innerHTML = a;
    document.getElementById("sorte2").innerHTML = b;
    document.getElementById("sorte3").innerHTML = c;
    document.getElementById("sorte4").innerHTML = d;
    document.getElementById("sorte5").innerHTML = e;
    document.getElementById("sorte6").innerHTML = f;  
};
```
Ao clicar no botão com id rollButton, a função anônima será executada. Antes de tudo, o array numbers é esvaziado, garantindo que todos os números sejam únicos. Em seguida, a função getRandomNumber é chamada 6 vezes, cada vez gerando um número aleatório único. Por fim, os números são exibidos na página, atualizando os elementos com ids sorte1 a sorte6.
