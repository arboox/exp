function getRandomItemExp1(arr) {
    const randomIndexExp1 = Math.floor(Math.random() * arr.length);
    const itemExp1 = arr[randomIndexExp1];
    return itemExp1;
}
const arrayExp1 = ['https://exp.arboox.com/1/balustervase.html', 'https://exp.arboox.com/1/bettafish.html', 'https://exp.arboox.com/1/cameraargus.html', 'https://exp.arboox.com/1/moai.html', 'https://exp.arboox.com/1/oss.html'];
const exp1 = getRandomItemExp1(arrayExp1);
document.getElementById('exp-1').src = exp1;
