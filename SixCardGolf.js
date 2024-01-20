localStorage.setItem('card1Face', 'Assets/EmptyCard.png')
localStroage.setItem('card1Points', 0)

localStorage.setItem('card2Face', 'Assets/EmptyCard.png')
localStroage.setItem('card2Points', 0)

localStorage.setItem('card3Face', 'Assets/EmptyCard.png')
localStroage.setItem('card3Points', 0)

localStorage.setItem('card4Face', 'Assets/EmptyCard.png')
localStroage.setItem('card4Points', 0)

localStorage.setItem('card5Face', 'Assets/EmptyCard.png')
localStroage.setItem('card5Points', 0)

localStorage.setItem('card5Face', 'Assets/EmptyCard.png')
localStroage.setItem('card5Points', 0)

localStorage.setItem('pregameFlips', 0);

function card1Click(){
    if (localStorage.getItem('card1Face') == 'Assets/EmptyCard.png' && parseInt(localStorage.getItem('pregameFlips')) < 2){
        
    }
}
function emptyCardClick(field, face, points, functionName){
    const randomCard = getRandomCard();
    const container = document.querySelector(field);
    const newElement = document.createElement('img');
    newElement.setAttribute('src', randomCard.face);
    newElement.setAttribute('onClick', functionName);

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
        {points: 0, face: 'Assets/red_joker'}
    ]
    return (cardList[Math.floor(Math.random()*cardList.length)])
}