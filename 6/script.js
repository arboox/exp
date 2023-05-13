function getRandomItemExp6(arr) {
    const randomIndexExp6 = Math.floor(Math.random() * arr.length);
    const itemExp6 = arr[randomIndexExp6];
    return itemExp6;
}
const arrayExp6 = ['https://exp.arboox.com/6/babyelephant.html', 'https://exp.arboox.com/6/bonsai.html', 'https://exp.arboox.com/6/ineedbeach.html', 'https://exp.arboox.com/6/plane.html', 'https://exp.arboox.com/6/underground.html'];
const exp6 = getRandomItemExp6(arrayExp6);
document.getElementById('exp-6').src = exp6;
