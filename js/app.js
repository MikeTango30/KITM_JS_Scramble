function select(selector) {
    return document.querySelector(selector);
}

function log(variable) {
    return console.log(variable);
}

function createLi() {
    return document.createElement('li');
}

function createDiv() {
    return document.createElement('div');
}

function createImg() {
    return document.createElement('img');
}

const buttonShow = select('button:first-child');
const buttonScramble = select('button:last-child');
const memeList = select('ul');

const pathToMemes = "assets/images/";
const memeExtension = ".jpg";
const defaultImage = "assets/images/default.jpg";

buttonShow.addEventListener('click', showMemes);
buttonScramble.addEventListener('click', scrambleMemes);


let memeCount = 10;
function showMemes() {
    for(let i = 1; i <= memeCount; i++) {
        let pathToMeme = pathToMemes + i + memeExtension;
        let meme = createImg();
        let listItem = createLi();
        let imgDiv = createDiv();
        meme.setAttribute('src', pathToMeme);
        imgDiv.appendChild(meme);
        listItem.appendChild(imgDiv);
        memeList.appendChild(listItem);
    }
    buttonShow.classList.add('d-none');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)+1);
}

function scrambleMemes() {
    let randomInts = [];
    let randomInt;
    randomInt = getRandomInt(10);
    randomInts.push(randomInt);
    while (randomInts.length < 10) {
        randomInt = getRandomInt(10);
        if (!randomInts.includes(randomInt)) {
            randomInts.push(randomInt);
        }
    }

    let memes = document.querySelectorAll('img');
    let i = 0;
    for (let meme of memes) {
        let pathToMeme = pathToMemes + randomInts[i] + memeExtension;
        meme.setAttribute('src', pathToMeme);
        i++;
    }

    memes = document.querySelectorAll('img');
    for (let meme of memes) {
        log(meme)
        meme.ondblclick = function (e) {
            log(meme);
            e.target.src = defaultImage;
        }

        // meme.addEventListener('dblclick', function (e) {
        //     //meme.setAttribute('src', defaultImage);
        //     log('here');
        // });
    }
}
