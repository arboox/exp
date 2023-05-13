function getRandomItemExp5(arr) {
    const randomIndexExp5 = Math.floor(Math.random() * arr.length);
    const itemExp5 = arr[randomIndexExp5];
    return itemExp5;
}
const arrayExp5 = ['https://exp.arboox.com/5/alpaca.html', 'https://exp.arboox.com/5/cnsupplystore.html', 'https://exp.arboox.com/5/facttomato.html', 'https://exp.arboox.com/5/monstera.html', 'https://exp.arboox.com/5/seahorse.html'];
const exp5 = getRandomItemExp5(arrayExp5);
document.getElementById('exp-5').src = exp5;
