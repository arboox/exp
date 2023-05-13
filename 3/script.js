function getRandomItemExp3(arr) {
    const randomIndexExp3 = Math.floor(Math.random() * arr.length);
    const itemExp3 = arr[randomIndexExp3];
    return itemExp3;
}
const arrayExp3 = ['https://exp.arboox.com/3/cruiseship.html', 'https://exp.arboox.com/3/macaw.html', 'https://exp.arboox.com/3/nefertiti.html', 'https://exp.arboox.com/3/prairiedog.html', 'https://exp.arboox.com/3/woodenboat.html'];
const exp3 = getRandomItemExp3(arrayExp3);
document.getElementById('exp-3').src = exp3;
