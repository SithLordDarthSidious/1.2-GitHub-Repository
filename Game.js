// script.js
const symbols = ['Cherry', 'Orange', 'Lemon', 'Plum', 'Bell', 'Bar', 'Seven'];
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const spinButton = document.getElementById('spinButton');

function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

function spin() {
    const symbol1 = getRandomSymbol();
    const symbol2 = getRandomSymbol();
    const symbol3 = getRandomSymbol();

    slot1.textContent = symbol1;
    slot2.textContent = symbol2;
    slot3.textContent = symbol3;

    if (symbol1 === symbol2 && symbol2 === symbol3) {
        alert('Congratulations! You won!');
        // Display the win image
        document.getElementById('Hm.png').style.display = 'block';
    } else {
        alert('Sorry, try again.');
        // Hide the win image
        document.getElementById('Hm.png').style.display = 'none';
    }
}

spinButton.addEventListener('click', spin);
