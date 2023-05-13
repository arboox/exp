function getRandomItemExp4(arr) {
    const randomIndexExp4 = Math.floor(Math.random() * arr.length);
    const itemExp4 = arr[randomIndexExp4];
    return itemExp4;
}
const arrayExp4 = ['https://exp.arboox.com/4/filmcamera.html', 'https://exp.arboox.com/4/hall.html', 'https://exp.arboox.com/4/hummingbird.html', 'https://exp.arboox.com/4/perseverance.html', 'https://exp.arboox.com/4/shark.html'];
const exp4 = getRandomItemExp4(arrayExp4);
document.getElementById('exp-4').src = exp4;
