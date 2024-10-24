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
