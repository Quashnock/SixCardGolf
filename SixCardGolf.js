localStorage.setItem('card1Face', 'Assets/EmptyCard.png')
localStorage.setItem('card1Points', 0)

localStorage.setItem('card2Face', 'Assets/EmptyCard.png')
localStorage.setItem('card2Points', 0)

localStorage.setItem('card3Face', 'Assets/EmptyCard.png')
localStorage.setItem('card3Points', 0)

localStorage.setItem('card4Face', 'Assets/EmptyCard.png')
localStorage.setItem('card4Points', 0)

localStorage.setItem('card5Face', 'Assets/EmptyCard.png')
localStorage.setItem('card5Points', 0)

localStorage.setItem('card6Face', 'Assets/EmptyCard.png')
localStorage.setItem('card6Points', 0)

localStorage.setItem('drawPileFace', 'Assets/EmptyCard.png')
localStorage.setItem('drawPilePoints', 0)

localStorage.setItem('discardPileFace0', 'Assets/EmptyCard.png')
localStorage.setItem('discardPilePoints0', 0)

localStorage.setItem('pregameFlips', 0);
localStorage.setItem('discardPileHeight', 0)
localStorage.setItem('drawPilePickUp', 'N');
localStorage.setItem('discardPilePickUp', 'N')

function card1Click(){
    if (localStorage.getItem('card1Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
        emptyCardClick('.cardSpace1', 'card1Face','card1Points','card1Click()');
    }
    else if(localStorage.getItem('drawPilePickUp') == 'Y'){
        drawPilePlace('.cardSpace1', 'card1Face', 'card1Points','card1Click()');
    }
    else if(localStorage.getItem('discardPilePickUp') == 'Y'){
        discardPilePlace('.cardSpace1', 'card1Face', 'card1Points','card1Click()');
    }
}
function card2Click(){
    if (localStorage.getItem('card2Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
        emptyCardClick('.cardSpace2', 'card2Face','card2Points','card2Click()');
    }
    else if(localStorage.getItem('drawPilePickUp') == 'Y'){
        drawPilePlace('.cardSpace2', 'card2Face', 'card2Points','card2Click()');
    }
    else if(localStorage.getItem('discardPilePickUp') == 'Y'){
        discardPilePlace('.cardSpace2', 'card2Face', 'card2Points','card2Click()');
    }
}
function card3Click(){
    if (localStorage.getItem('card3Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
        emptyCardClick('.cardSpace3', 'card3Face','card3Points','card3Click()');
    }
    else if(localStorage.getItem('drawPilePickUp') == 'Y'){
        drawPilePlace('.cardSpace3', 'card3Face', 'card3Points','card3Click()');
    }
    else if(localStorage.getItem('discardPilePickUp') == 'Y'){
        discardPilePlace('.cardSpace3', 'card3Face', 'card3Points','card3Click()');
    }
}
function card4Click(){
    if (localStorage.getItem('card4Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
        emptyCardClick('.cardSpace4', 'card4Face','card4Points','card4Click()');
    }
    else if(localStorage.getItem('drawPilePickUp') == 'Y'){
        drawPilePlace('.cardSpace4', 'card4Face', 'card4Points','card4Click()');
    }
    else if(localStorage.getItem('discardPilePickUp') == 'Y'){
        discardPilePlace('.cardSpace4', 'card4Face', 'card4Points','card4Click()');
    }
}
function card5Click(){
    if (localStorage.getItem('card5Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
        emptyCardClick('.cardSpace5', 'card5Face','card5Points','card5Click()');
    }
    else if(localStorage.getItem('drawPilePickUp') == 'Y'){
        drawPilePlace('.cardSpace5', 'card5Face', 'card5Points','card5Click()');
    }
    else if(localStorage.getItem('discardPilePickUp') == 'Y'){
        discardPilePlace('.cardSpace5', 'card5Face', 'card5Points','card5Click()');
    }
}
function card6Click(){
    if (localStorage.getItem('card6Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
        emptyCardClick('.cardSpace6', 'card6Face','card6Points','card6Click()');
    }
    else if(localStorage.getItem('drawPilePickUp') == 'Y'){
        drawPilePlace('.cardSpace6', 'card6Face', 'card6Points','card6Click()');
    }
    else if(localStorage.getItem('discardPilePickUp') == 'Y'){
        discardPilePlace('.cardSpace6', 'card6Face', 'card6Points','card6Click()');
    }
}

function drawPileClick(){
    if (localStorage.getItem('drawPileFace') == 'Assets/EmptyCard.png' && localStorage.getItem('pregameFlips') >= 2 && localStorage.getItem('discardPilePickUp') == 'N'){
        localStorage.setItem('drawPilePickUp', 'Y');
        emptyCardClick('.drawPile', 'drawPileFace', 'drawPilePoints', 'drawPileClick()');
    }
}
function discardPileClick(){
    if (localStorage.getItem('drawPilePickUp') == 'Y'){

        localStorage.setItem('drawPilePickUp', 'N');
        localStorage.setItem('discardPileHeight', (parseInt(localStorage.getItem('discardPileHeight')) + 1));

        let container = document.querySelector('.discardPile');
        let newElement = document.createElement('img');
        newElement.setAttribute('src', localStorage.getItem('drawPileFace'))
        newElement.setAttribute('onClick', 'discardPileClick()');
        container.innerHTML = '';
        container.appendChild(newElement);
        localStorage.setItem('discardPileFace' +  localStorage.getItem('discardPileHeight'), localStorage.getItem('drawPileFace'));
        localStorage.setItem('discardPilePoints' + localStorage.getItem('discardPileHeight'), localStorage.getItem('drawPilePoints'));

        container = document.querySelector('.drawPile');
        newElement = document.createElement('img');
        newElement.setAttribute('src', 'Assets/EmptyCard.png');
        newElement.setAttribute('onClick', 'drawPileClick()');
        container.innerHTML = '';
        container.appendChild(newElement);
        localStorage.setItem('drawPileFace', 'Assets/EmptyCard.png');
        localStorage.setItem('drawPilePoints', 0);
        checkPoints(); 
    }
    else if(localStorage.getItem('discardPileHeight') > 0 && localStorage.getItem('pregameFlips') >= 2){
        localStorage.setItem('discardPilePickUp', 'Y');
    }
}



function emptyCardClick(field, face, points, functionName){
    
    localStorage.setItem('pregameFlips', (parseInt(localStorage.getItem('pregameFlips')) + 1).toString())

    const randomCard = getRandomCard();
    const container = document.querySelector(field);
    const newElement = document.createElement('img');
    newElement.setAttribute('src', randomCard.face);
    newElement.setAttribute('onClick', functionName);
    container.innerHTML = '';
    container.appendChild(newElement);
    localStorage.setItem(face, randomCard.face);
    localStorage.setItem(points, randomCard.points);
    checkPoints();

}
function drawPilePlace(field, face, points, functionName){

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
    }
    else{
        newElement.setAttribute('src', localStorage.getItem(face));
        localStorage.setItem('discardPileFace' +  localStorage.getItem('discardPileHeight'), localStorage.getItem(face));
        localStorage.setItem('discardPilePoints' + localStorage.getItem('discardPileHeight'), localStorage.getItem(points));
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

    container = document.querySelector('.drawPile');
    newElement = document.createElement('img');
    newElement.setAttribute('src', 'Assets/EmptyCard.png');
    newElement.setAttribute('onClick', 'drawPileClick()');
    container.innerHTML = '';
    container.appendChild(newElement);
    localStorage.setItem('drawPileFace', 'Assets/EmptyCard.png');
    localStorage.setItem('drawPilePoints', 0);
    checkPoints(); 
}
function discardPilePlace(field, face, points, functionName){

    localStorage.setItem('discardPilePickUp', 'N')

    let container = document.querySelector(field);
    let newElement = document.createElement('img');
    newElement.setAttribute('src', localStorage.getItem('discardPileFace' + localStorage.getItem('discardPileHeight')));
    newElement.setAttribute('onClick', functionName);
    container.innerHTML = '';
    container.appendChild(newElement);
    localStorage.setItem(face, localStorage.getItem('discardPileFace' + localStorage.getItem('discardPileHeight')));
    localStorage.setItem(points, localStorage.getItem('discardPilePoints' + localStorage.getItem('discardPileHeight')));
    
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
    const container = document.querySelector('.score');
    const newElement = document.createElement('p');
    let pointSum = 0;
    if (localStorage.getItem('card1Face') != localStorage.getItem('card4Face') && localStorage.getItem('card1Face') != 'Assets/red_joker.png' && localStorage.getItem('card4Face') != 'Assets/red_joker.png'){
        pointSum += parseInt(localStorage.getItem('card1Points')) + parseInt(localStorage.getItem('card4Points'));
    }
    if (localStorage.getItem('card2Face') != localStorage.getItem('card5Face') && localStorage.getItem('card2Face') != 'Assets/red_joker.png' && localStorage.getItem('card5Face') != 'Assets/red_joker.png'){
        pointSum += parseInt(localStorage.getItem('card2Points')) + parseInt(localStorage.getItem('card5Points'));
    }
    if (localStorage.getItem('card3Face') != localStorage.getItem('card6Face') && localStorage.getItem('card3Face') != 'Assets/red_joker.png' && localStorage.getItem('card6Face') != 'Assets/red_joker.png'){
        pointSum += parseInt(localStorage.getItem('card3Points')) + parseInt(localStorage.getItem('card6Points'));
    }
    newElement.textContent = ('Current Score: ' + pointSum.toString());
    container.innerHTML = '';
    container.appendChild(newElement);

}
function getRandomCard(){
    const cardList = [
        {points: -2, face: 'Assets/2_of_hearts.png'},
        {points: 3, face: 'Assets/3_of_hearts.png'},
        {points: 4, face: 'Assets/4_of_hearts.png'},
        {points: 5, face: 'Assets/5_of_hearts.png'},
        {points: 6, face: 'Assets/6_of_hearts.png'},
        {points: 7, face: 'Assets/7_of_hearts.png'},
        {points: 8, face: 'Assets/8_of_hearts.png'},
        {points: 9, face: 'Assets/9_of_hearts.png'},
        {points: 10, face: 'Assets/10_of_hearts.png'},
        {points: 1, face: 'Assets/ace_of_hearts.png'},
        {points: 10, face: 'Assets/jack_of_hearts.png'},
        {points: 10, face: 'Assets/queen_of_hearts.png'},
        {points: 0, face: 'Assets/king_of_hearts.png'},
        {points: 0, face: 'Assets/red_joker.png'}
    ]
    return (cardList[Math.floor(Math.random()*cardList.length)])
}