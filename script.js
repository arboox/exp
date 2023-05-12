function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
const arrayExp1 = ['https://exp.arboox.com/1/balustervase.html', 'https://exp.arboox.com/1/bettafish.html', 'https://exp.arboox.com/1/cameraargus.html', 'https://exp.arboox.com/1/moai.html', 'https://exp.arboox.com/1/oss.html'];
const exp1 = getRandomItem(arrayExp1);
document.getElementById('exp-1').src = exp1;
