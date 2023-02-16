# Number generator for lottery
Este é um projeto simples de JavaScript que gera seis números aleatórios para serem usados como "números da sorte". O usuário pode clicar em um botão para gerar novos números a cada vez. O projeto é útil para quem precisa de um conjunto aleatório de números para jogos de azar, sorteios, ou para qualquer outra finalidade que envolva números aleatórios.
<br>
O código usa a função Math.random() para gerar números aleatórios entre 1 e 60. Para garantir que todos os números sejam únicos, o código usa uma função auxiliar que verifica se o número já foi gerado antes. Se o número já existe, a função é chamada novamente até que um número único seja gerado.
<br>
Este projeto pode ser facilmente customizado para gerar um número diferente de números, ou para gerar números em um intervalo diferente. O código é simples e fácil de entender, tornando-o uma ótima base para quem quer aprender a trabalhar com JavaScript.
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
