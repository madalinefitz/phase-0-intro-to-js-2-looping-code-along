// Code your solutions in this file
for (let age =  30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}


const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);



function writeCards(cards, type) {
    let messages=[]
    for (let a = 0; a < cards.length; a++) {
        messages.push(`Thank you, ${cards[a]}, for the wonderful ${type} gift!`);  
    }
    return messages;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surpise")

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
      }
}
countDown(4)