document.addEventListener('DOMContentLoaded', (e) => {
    const button = document.getElementById("genBtn");

    button.addEventListener('click', (e) => {
        getNewBet();
    });

    function getNewBet() {
        fetch('http://localhost:3000')
            .then((response) => response.json())
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
