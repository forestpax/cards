'use strict';
const cards = [];
let x = 0;

function Card(mark, num) {
  this.mark = mark;
  this.num = num;
}

function initCard() {　　
  x = 0;
  for(let i = 1; i <= 13; i++) {
     cards[x]=new Card(0,i);
     x++;
     cards[x]=new Card(1,i);
     x++;
     cards[x]=new Card(2,i);
     x++;
     cards[x]=new Card(3,i);
     x++;
  }
}

function displayCard(x){
  const marking = ["♠","♣","♥","♦"];
  const numbering = ["","A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  console.log(marking[cards[x].mark] + numbering[cards[x].num]);
}

let hands = [];

function random(){
  hands.length = 0;
  do {
    let rand = Math.floor(Math.random() * cards.length) + 1;
    console.log(rand);
    
    if(hands.indexOf(rand) == -1){
      hands.push(rand);
    }

  } while (hands.length < 4);
  return hands
}

initCard();
hands = random();
for(let i = 0; i < hands.length; i++){
  displayCard(hands[i]);
}
