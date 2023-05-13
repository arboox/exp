function getRandomItemExp2(arr) {
    const randomIndexExp2 = Math.floor(Math.random() * arr.length);
    const itemExp2 = arr[randomIndexExp2];
    return itemExp2;
}
const arrayExp2 = ['https://exp.arboox.com/2/intercitytrain.html', 'https://exp.arboox.com/2/kangaroo.html', 'https://exp.arboox.com/2/painting.html', 'https://exp.arboox.com/2/ponycar.html', 'https://exp.arboox.com/2/violin.html'];
const exp2 = getRandomItemExp2(arrayExp2);
document.getElementById('exp-2').src = exp2;
