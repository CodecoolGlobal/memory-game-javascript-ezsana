function doubleTheCards(numberOfCards, cardImages) {
    let cardImagesDouble = [];
    for (let i=0; i<numberOfCards; i++) {
        cardImagesDouble.push(cardImages[i]);
        cardImagesDouble.push(cardImages[i]);
    }
    return cardImagesDouble
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}


function changeCardImage(value1, value2, index, array, arrayElement, array2Element) {
    let counter = 0;
    if (value1 === value2) {
        arrayElement.classList.replace(array2Element, value1);
        arrayElement.classList.replace('fa-laptop-code', value1);
        arrayElement.classList.add('blue');
        array[index].classList.replace(array2Element, value1);
        array[index].classList.replace('fa-laptop-code', value1);
        array[index].classList.add('blue');
        counter++;
    } else {
        setTimeout(function () {
            arrayElement.classList.replace(array2Element, 'fa-laptop-code')
        }, 1000)
    }
    return counter;
}



function flipUpCards (cards, imagesArray, maxTarget) {
    let doublesFoundCounter = 0;
    let clickCounter = 0;
    let clickedCards = [];
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        if (card.classList.contains('fa-laptop-code')) {
            card.addEventListener('click', function () {
                clickCounter++;
                console.log(clickCounter);
                card.classList.replace('fa-laptop-code', imagesArray[i]);
                clickedCards.push({[i]: imagesArray[i]});
                if (clickCounter % 2 === 1) {
                    setTimeout(function () {
                        card.classList.replace(imagesArray[i], 'fa-laptop-code')
                    }, 1000)
                } else {
                    let clickedCardValue = Object.values(clickedCards[clickCounter - 1]);
                    let previousClickedCardValue = Object.values(clickedCards[clickCounter - 2]);
                    let previousClickedCardKey = Object.keys(clickedCards[clickCounter - 2]);
                    doublesFoundCounter += changeCardImage(clickedCardValue[0], previousClickedCardValue[0], previousClickedCardKey[0], cards, card, imagesArray[i], maxTarget);
                    if (doublesFoundCounter === maxTarget) {
                        setTimeout(function () {
                            alert('Congrats, you finished the game!');
                            document.querySelector('body').innerHTML = `<p id="back-to-main-menu"><a href="http://0.0.0.0:8000">Back to main menu</a>`
                        }, 1500)}
                }
            })
        }
    }
}


function main() {
    let cards = document.querySelectorAll('.fas, .fa-laptop-code');
    let chooseNumberOfCards = cards.length/2;
    let cardImages = [  'fa-couch',
                    'fa-atom',
                    'fa-dragon',
                    'fa-bath',
                    'fa-ghost',
                    'fa-bell',
                    'fa-bezier-curve',
                    'fa-binoculars',
                    'fa-book-open',
                    'fa-cloud-moon',
                    'fa-dice',
                    'fa-fighter-jet',
                    'fa-magic',
                    'fa-music',
                    'fa-paw',
                    'fa-shoe-prints',
                    'fa-user-secret',
                    'fa-anchor',
                    'fa-at',
                    'fa-cat'  ];
    let cardImagesDouble = doubleTheCards(chooseNumberOfCards, cardImages);
    let imagesArray = shuffleArray(cardImagesDouble);
    flipUpCards(cards, imagesArray, chooseNumberOfCards);
}

main();