/*O código dentro do evento DOMContentLoaded é executado quando o DOM for completamente carregado.
Isso garante que todos os elementos estejam prontos para serem manipulados.
O botão "New Bet" tem um event listener que chama a função getNewBet() quando clicado.
A função getNewBet() usa a API Fetch para fazer uma requisição GET para a rota /euro do servidor.
Quando a resposta é recebida, ela é convertida em JSON e passada para a função updateDOM().
A função updateDOM(bet) recebe a aposta e atualiza as listas no HTML com os números e estrelas gerados.

Tiago Passos*/
document.addEventListener('DOMContentLoaded', (e) => {
    const button = document.getElementById("genBtn");

    button.addEventListener('click', (e) => {
        getNewBet();
    });

    function getNewBet() {
        fetch('https://euro-sir-tiagopassos.onrender.com/euro')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(bet => {
                updateDOM(bet);
            })
            .catch((error) => console.error('Erro:', error));
    }

    function updateDOM(bet) {
        const theOLNumbers = document.getElementById('olMain');
        theOLNumbers.innerHTML = "";

        bet.numbers.forEach(number => {
            const newLi = document.createElement("li");
            newLi.innerHTML = number;
            theOLNumbers.appendChild(newLi);
        });

        const theOLStars = document.getElementById('olStars');
        theOLStars.innerHTML = "";

        bet.stars.forEach(star => {
            const newLi = document.createElement("li");
            newLi.innerHTML = star;
            theOLStars.appendChild(newLi);
        });
    }
});
