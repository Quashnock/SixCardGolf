localStorage.setItem('card1Face', 'Assets/EmptyCard.png')
localStorage.setItem('card1Points', 0)
localStorage.setItem('card1Type', 'None')

localStorage.setItem('card2Face', 'Assets/EmptyCard.png')
localStorage.setItem('card2Points', 0)
localStorage.setItem('card2Type', 'None')

localStorage.setItem('card3Face', 'Assets/EmptyCard.png')
localStorage.setItem('card3Points', 0)
localStorage.setItem('card3Type', 'None')

localStorage.setItem('card4Face', 'Assets/EmptyCard.png')
localStorage.setItem('card4Points', 0)
localStorage.setItem('card4Type', 'None')

localStorage.setItem('card5Face', 'Assets/EmptyCard.png')
localStorage.setItem('card5Points', 0)
localStorage.setItem('card5Type', 'None')

localStorage.setItem('card6Face', 'Assets/EmptyCard.png')
localStorage.setItem('card6Points', 0)
localStorage.setItem('card6Type', 'None')

localStorage.setItem('drawPileFace', 'Assets/EmptyCard.png')
localStorage.setItem('drawPilePoints', 0)
localStorage.setItem('drawPileType', 'None')

localStorage.setItem('discardPileFace0', 'Assets/EmptyCard.png')
localStorage.setItem('discardPilePoints0', 0)
localStorage.setItem('discardPileType0', 'None')

localStorage.setItem('pregameFlips', 0);
localStorage.setItem('turns', 10)
localStorage.setItem('discardPileHeight', 0)
localStorage.setItem('drawPilePickUp', 'N');
localStorage.setItem('discardPilePickUp', 'N');
localStorage.setItem('gameOver', 'N')


function card1Click(){
    if (localStorage.getItem('gameOver') == 'N'){
        if (localStorage.getItem('card1Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
            emptyCardClick('.cardSpace1', 'card1Face','card1Points','card1Type','card1Click()');
        }
        else if(localStorage.getItem('drawPilePickUp') == 'Y'){
            drawPilePlace('.cardSpace1', 'card1Face', 'card1Points','card1Type','card1Click()');
        }
        else if(localStorage.getItem('discardPilePickUp') == 'Y'){
            discardPilePlace('.cardSpace1', 'card1Face', 'card1Points','card1Type','card1Click()');
        }
    }  
}
function card2Click(){
    if (localStorage.getItem('gameOver') == 'N'){
        if (localStorage.getItem('card2Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
            emptyCardClick('.cardSpace2', 'card2Face','card2Points','card2Type','card2Click()');
        }
        else if(localStorage.getItem('drawPilePickUp') == 'Y'){
            drawPilePlace('.cardSpace2', 'card2Face', 'card2Points','card2Type','card2Click()');
        }
        else if(localStorage.getItem('discardPilePickUp') == 'Y'){
            discardPilePlace('.cardSpace2', 'card2Face', 'card2Points','card2Type','card2Click()');
        }
    }
}
function card3Click(){
    if (localStorage.getItem('gameOver') == 'N'){
        if (localStorage.getItem('card3Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
            emptyCardClick('.cardSpace3', 'card3Face','card3Points','card3Type','card3Click()');
        }
        else if(localStorage.getItem('drawPilePickUp') == 'Y'){
            drawPilePlace('.cardSpace3', 'card3Face', 'card3Points','card3Type','card3Click()');
        }
        else if(localStorage.getItem('discardPilePickUp') == 'Y'){
            discardPilePlace('.cardSpace3', 'card3Face', 'card3Points','card3Type','card3Click()');
        }
    }
}
function card4Click(){
    if (localStorage.getItem('gameOver') == 'N'){
        if (localStorage.getItem('card4Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
            emptyCardClick('.cardSpace4', 'card4Face','card4Points','card4Type','card4Click()');
        }
        else if(localStorage.getItem('drawPilePickUp') == 'Y'){
            drawPilePlace('.cardSpace4', 'card4Face', 'card4Points','card4Type','card4Click()');
        }
        else if(localStorage.getItem('discardPilePickUp') == 'Y'){
            discardPilePlace('.cardSpace4', 'card4Face', 'card4Points','card4Type','card4Click()');
        }
    }
}
function card5Click(){
    if (localStorage.getItem('gameOver') == 'N'){
        if (localStorage.getItem('card5Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
            emptyCardClick('.cardSpace5', 'card5Face','card5Points','card5Type','card5Click()');
        }
        else if(localStorage.getItem('drawPilePickUp') == 'Y'){
            drawPilePlace('.cardSpace5', 'card5Face', 'card5Points','card5Type','card5Click()');
        }
        else if(localStorage.getItem('discardPilePickUp') == 'Y'){
            discardPilePlace('.cardSpace5', 'card5Face', 'card5Points','card5Type','card5Click()');
        }
    }
}
function card6Click(){
    if (localStorage.getItem('gameOver') == 'N'){
        if (localStorage.getItem('card6Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
            emptyCardClick('.cardSpace6', 'card6Face','card6Points','card6Type','card6Click()');
        }
        else if(localStorage.getItem('drawPilePickUp') == 'Y'){
            drawPilePlace('.cardSpace6', 'card6Face', 'card6Points','card6Type','card6Click()');
        }
        else if(localStorage.getItem('discardPilePickUp') == 'Y'){
            discardPilePlace('.cardSpace6', 'card6Face', 'card6Points','card6Type','card6Click()');
        }
    }
}

function drawPileClick(){
    if (localStorage.getItem('gameOver') == 'N'){
        if (localStorage.getItem('drawPileFace') == 'Assets/EmptyCard.png' && localStorage.getItem('pregameFlips') >= 2 && localStorage.getItem('discardPilePickUp') == 'N'){
            localStorage.setItem('drawPilePickUp', 'Y');
            emptyCardClick('.drawPile', 'drawPileFace', 'drawPilePoints','drawPileType', 'drawPileClick()');
        }
    }
}
function discardPileClick(){
    if (localStorage.getItem('gameOver') == 'N'){
        if (localStorage.getItem('drawPilePickUp') == 'Y'){

            localStorage.setItem('drawPilePickUp', 'N');
            localStorage.setItem('discardPileHeight', (parseInt(localStorage.getItem('discardPileHeight')) + 1));

            let container = document.querySelector('.discardPile');
            let newElement = document.createElement('img');
            newElement.setAttribute('src', localStorage.getItem('drawPileFace'))
            newElement.setAttribute('onClick', 'discardPileClick()');
            newElement.setAttribute('draggable', 'false');
            container.innerHTML = '';
            container.appendChild(newElement);
            localStorage.setItem('discardPileFace' +  localStorage.getItem('discardPileHeight'), localStorage.getItem('drawPileFace'));
            localStorage.setItem('discardPilePoints' + localStorage.getItem('discardPileHeight'), localStorage.getItem('drawPilePoints'));
            localStorage.setItem('discardPileType' + localStorage.getItem('discardPileHeight'), localStorage.getItem('drawPileType'));

            container = document.querySelector('.drawPile');
            newElement = document.createElement('img');
            newElement.setAttribute('src', 'Assets/EmptyCard.png');
            newElement.setAttribute('onClick', 'drawPileClick()');
            newElement.setAttribute('draggable', 'false');
            container.innerHTML = '';
            container.appendChild(newElement);
            localStorage.setItem('drawPileFace', 'Assets/EmptyCard.png');
            localStorage.setItem('drawPilePoints', 0);
            localStorage.setItem('drawPileType', 'None');
            checkPoints(); 
        }
        else if(localStorage.getItem('discardPileHeight') > 0 && localStorage.getItem('pregameFlips') >= 2){
            localStorage.setItem('discardPilePickUp', 'Y');
            let container = document.querySelector('.discardPile')
            let newElement = document.createElement('img');
            newElement.setAttribute('src', localStorage.getItem('discardPileFace' + localStorage.getItem('discardPileHeight')))
            newElement.setAttribute('onClick', 'discardPileClick()');
            newElement.setAttribute('id', 'border');
            newElement.setAttribute('draggable', 'false');
            container.innerHTML = '';
            container.appendChild(newElement);
        }
    }
}



function emptyCardClick(field, face, points, type, functionName){
    
    localStorage.setItem('pregameFlips', (parseInt(localStorage.getItem('pregameFlips')) + 1).toString())

    const randomCard = getRandomCard();
    const container = document.querySelector(field);
    const newElement = document.createElement('img');
    newElement.setAttribute('src', randomCard.face);
    newElement.setAttribute('onClick', functionName);
    if (field == '.drawPile'){
        newElement.setAttribute('id', "border");
    }
    container.innerHTML = '';
    container.appendChild(newElement);
    localStorage.setItem(face, randomCard.face);
    localStorage.setItem(points, randomCard.points);
    localStorage.setItem(type, randomCard.type);
    if (field != '.drawPile' && localStorage.getItem('turns') > 0){
        checkPoints();
    }

}
function drawPilePlace(field, face, points,type, functionName){

    localStorage.setItem('drawPilePickUp', 'N');
    localStorage.setItem('discardPileHeight', (parseInt(localStorage.getItem('discardPileHeight')) + 1));

    let container = document.querySelector('.discardPile');
    let newElement = document.createElement('img');
    newElement.setAttribute('onClick', 'discardPileClick()')
    container.innerHTML = '';
    if (localStorage.getItem(face) ==  'Assets/EmptyCard.png'){
        const randomCard = getRandomCard();
        newElement.setAttribute('src', randomCard.face);
        localStorage.setItem('discardPileFace' +  localStorage.getItem('discardPileHeight'), randomCard.face)
        localStorage.setItem('discardPilePoints' + localStorage.getItem('discardPileHeight'), randomCard.points)
        localStorage.setItem('discardPileType' + localStorage.getItem('discardPileHeight'), randomCard.type);
    }
    else{
        newElement.setAttribute('src', localStorage.getItem(face));
        localStorage.setItem('discardPileFace' +  localStorage.getItem('discardPileHeight'), localStorage.getItem(face));
        localStorage.setItem('discardPilePoints' + localStorage.getItem('discardPileHeight'), localStorage.getItem(points));
        localStorage.setItem('discardPileType' + localStorage.getItem('discardPileHeight'), localStorage.getItem(type));
    }
    container.appendChild(newElement);

    container = document.querySelector(field);
    newElement = document.createElement('img');
    newElement.setAttribute('src', localStorage.getItem('drawPileFace'));
    newElement.setAttribute('onClick', functionName);
    container.innerHTML = '';
    container.appendChild(newElement);
    localStorage.setItem(face, localStorage.getItem('drawPileFace'));
    localStorage.setItem(points, localStorage.getItem('drawPilePoints'));
    localStorage.setItem(type, localStorage.getItem('drawPileType'));

    container = document.querySelector('.drawPile');
    newElement = document.createElement('img');
    newElement.setAttribute('src', 'Assets/EmptyCard.png');
    newElement.setAttribute('onClick', 'drawPileClick()');
    container.innerHTML = '';
    container.appendChild(newElement);
    localStorage.setItem('drawPileFace', 'Assets/EmptyCard.png');
    localStorage.setItem('drawPilePoints', 0);
    localStorage.setItem('drawPileType', 'None');
    checkPoints(); 
}
function discardPilePlace(field, face, points, type, functionName){

    localStorage.setItem('discardPilePickUp', 'N')

    let container = document.querySelector(field);
    let newElement = document.createElement('img');
    newElement.setAttribute('src', localStorage.getItem('discardPileFace' + localStorage.getItem('discardPileHeight')));
    newElement.setAttribute('onClick', functionName);
    container.innerHTML = '';
    container.appendChild(newElement);
    localStorage.setItem(face, localStorage.getItem('discardPileFace' + localStorage.getItem('discardPileHeight')));
    localStorage.setItem(points, localStorage.getItem('discardPilePoints' + localStorage.getItem('discardPileHeight')));
    localStorage.setItem(type, localStorage.getItem('discardPileType' + localStorage.getItem('discardPileHeight')));
    
    localStorage.removeItem('discardPileFace' + localStorage.getItem('discardPileHeight'));
    localStorage.removeItem('discardPilePoints' + localStorage.getItem('discardPileHeight'));
    localStorage.setItem('discardPileHeight', parseInt(localStorage.getItem('discardPileHeight'))-1);

    container = document.querySelector('.discardPile');
    newElement = document.createElement('img');
    newElement.setAttribute('src', localStorage.getItem('discardPileFace' + localStorage.getItem('discardPileHeight')));
    newElement.setAttribute('onClick', 'discardPileClick()');
    container.innerHTML = '';
    container.appendChild(newElement);
    checkPoints();
}

function checkPoints(){
    let container;
    let newElement;
    let flag = true;
    for (let i = 1; i<=6; i++){
        if (localStorage.getItem('card' + i + 'Face') == 'Assets/EmptyCard.png'){
            flag = false;
        }
    }
    if (localStorage.getItem('turns') <= 1 || flag){
        container = document.querySelector('.instructions');
        newElement = document.createElement('p');
        newElement.textContent = 'GAME OVER'
        anotherElement = document.createElement('a');
        anotherElement.textContent = 'Try Again?';
        anotherElement.setAttribute('href', 'https://quashnock.github.io/SixCardGolf/SixCardGolf.html')
        anotherElement.setAttribute('draggable', 'false')
        container.innerHTML = '';
        container.appendChild(newElement);
        container.appendChild(anotherElement);
        for (let i = 1; i<=6; i++){
            if (localStorage.getItem('card' + i + 'Face') == 'Assets/EmptyCard.png'){
                emptyCardClick('.cardSpace' + i, 'card' + i + 'Face', 'card' + i + 'Points', 'card' + i + 'Click()');
            }
        }
        localStorage.setItem('gameOver', 'Y');
    }
    else if (localStorage.getItem('pregameFlips') >= 2){
        localStorage.setItem('turns', parseInt(localStorage.getItem('turns'))-1);
        container = document.querySelector('.instructions');
        newElement = document.createElement('p');
        newElement.textContent = ('Turns Remaining: ' + localStorage.getItem('turns'));
        container.innerHTML = '';
        container.appendChild(newElement);
    }

    container = document.querySelector('.score');
    newElement = document.createElement('p');
    let pointSum = 0;
    if (localStorage.getItem('card1Type') != localStorage.getItem('card4Type') && localStorage.getItem('card1Type') != 'joker' && localStorage.getItem('card4Type') != 'joker'){
        pointSum += parseInt(localStorage.getItem('card1Points')) + parseInt(localStorage.getItem('card4Points'));
    }
    if (localStorage.getItem('card2Type') != localStorage.getItem('card5Type') && localStorage.getItem('card2Type') != 'joker' && localStorage.getItem('card5Type') != 'joker'){
        pointSum += parseInt(localStorage.getItem('card2Points')) + parseInt(localStorage.getItem('card5Points'));
    }
    if (localStorage.getItem('card3Type') != localStorage.getItem('card6Type') && localStorage.getItem('card3Type') != 'joker' && localStorage.getItem('card6Type') != 'joker'){
        pointSum += parseInt(localStorage.getItem('card3Points')) + parseInt(localStorage.getItem('card6Points'));
    }
    newElement.textContent = ('Current Score: ' + pointSum.toString());
    container.innerHTML = '';
    container.appendChild(newElement);

}
function getRandomCard(){
    const cardList = [
        {points: -2, face: 'Assets/2_of_hearts.png',type: '2'},
        {points: 3, face: 'Assets/3_of_hearts.png',type: '3'},
        {points: 4, face: 'Assets/4_of_hearts.png',type: '4'},
        {points: 5, face: 'Assets/5_of_hearts.png',type: '5'},
        {points: 6, face: 'Assets/6_of_hearts.png',type: '6'},
        {points: 7, face: 'Assets/7_of_hearts.png',type: '7'},
        {points: 8, face: 'Assets/8_of_hearts.png',type: '8'},
        {points: 9, face: 'Assets/9_of_hearts.png',type: '9'},
        {points: 10, face: 'Assets/10_of_hearts.png', type: '10'},
        {points: 1, face: 'Assets/ace_of_hearts.png', type: 'ace'},
        {points: 10, face: 'Assets/jack_of_hearts.png', type: 'jack'},
        {points: 10, face: 'Assets/queen_of_hearts.png', type: 'queen'},
        {points: 0, face: 'Assets/king_of_hearts.png', type: 'king'},
        {points: 0, face: 'Assets/red_joker.png', type: 'joker'},

        {points: -2, face: 'Assets/2_of_clubs.png',type: '2'},
        {points: 3, face: 'Assets/3_of_clubs.png',type: '3'},
        {points: 4, face: 'Assets/4_of_clubs.png',type: '4'},
        {points: 5, face: 'Assets/5_of_clubs.png',type: '5'},
        {points: 6, face: 'Assets/6_of_clubs.png',type: '6'},
        {points: 7, face: 'Assets/7_of_clubs.png',type: '7'},
        {points: 8, face: 'Assets/8_of_clubs.png',type: '8'},
        {points: 9, face: 'Assets/9_of_clubs.png',type: '9'},
        {points: 10, face: 'Assets/10_of_clubs.png', type: '10'},
        {points: 1, face: 'Assets/ace_of_clubs.png', type: 'ace'},
        {points: 10, face: 'Assets/jack_of_clubs.png', type: 'jack'},
        {points: 10, face: 'Assets/queen_of_clubs.png', type: 'queen'},
        {points: 0, face: 'Assets/king_of_clubs.png', type: 'king'},
        {points: 0, face: 'Assets/black_joker.png', type: 'joker'},

        {points: -2, face: 'Assets/2_of_diamonds.png',type: '2'},
        {points: 3, face: 'Assets/3_of_diamonds.png',type: '3'},
        {points: 4, face: 'Assets/4_of_diamonds.png',type: '4'},
        {points: 5, face: 'Assets/5_of_diamonds.png',type: '5'},
        {points: 6, face: 'Assets/6_of_diamonds.png',type: '6'},
        {points: 7, face: 'Assets/7_of_diamonds.png',type: '7'},
        {points: 8, face: 'Assets/8_of_diamonds.png',type: '8'},
        {points: 9, face: 'Assets/9_of_diamonds.png',type: '9'},
        {points: 10, face: 'Assets/10_of_diamonds.png', type: '10'},
        {points: 1, face: 'Assets/ace_of_diamonds.png', type: 'ace'},
        {points: 10, face: 'Assets/jack_of_diamonds.png', type: 'jack'},
        {points: 10, face: 'Assets/queen_of_diamonds.png', type: 'queen'},
        {points: 0, face: 'Assets/king_of_diamonds.png', type: 'king'},

        {points: -2, face: 'Assets/2_of_spades.png',type: '2'},
        {points: 3, face: 'Assets/3_of_spades.png',type: '3'},
        {points: 4, face: 'Assets/4_of_spades.png',type: '4'},
        {points: 5, face: 'Assets/5_of_spades.png',type: '5'},
        {points: 6, face: 'Assets/6_of_spades.png',type: '6'},
        {points: 7, face: 'Assets/7_of_spades.png',type: '7'},
        {points: 8, face: 'Assets/8_of_spades.png',type: '8'},
        {points: 9, face: 'Assets/9_of_spades.png',type: '9'},
        {points: 10, face: 'Assets/10_of_spades.png', type: '10'},
        {points: 1, face: 'Assets/ace_of_spades.png', type: 'ace'},
        {points: 10, face: 'Assets/jack_of_spades.png', type: 'jack'},
        {points: 10, face: 'Assets/queen_of_spades.png', type: 'queen'},
        {points: 0, face: 'Assets/king_of_spades.png', type: 'king'},
    ]
    return (cardList[Math.floor(Math.random()*cardList.length)])
}