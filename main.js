//set our beginning variables and constants
let wallet = 100;
// let preppedBet = 0;
let minimumBet = 5;
//pseudocode
let maximumBet = 50;

let lowEnd = document.querySelector('#min-button');
let highEnd = document.querySelector('#max-button');

const symbols = ['🍒', '🍎', '🍇', '🫡', '🎱'];

//this function runs the slot machine
function startSlotMachine(bet) {
  //reach into HTML to access our reel and comparison outcome
  let reels = document.querySelectorAll('.reels');
  let message = document.getElementById('display-outcome');

  if (wallet < bet) {
    message.innerText = `You broke as hell. Go home and be a family man. Call (855)222-5542`;
  } else {
    wallet -= bet;
    let reel1 = symbols[Math.floor(Math.random() * symbols.length)];
    let reel2 = symbols[Math.floor(Math.random() * symbols.length)];
    let reel3 = symbols[Math.floor(Math.random() * symbols.length)];

    //store our retrieved symbols into each displaying reel, bracket notation is used because querySelectorAll stores its retrieved elements into an array
    console.log(reels);
    reels[0].innerText = reel1;
    reels[1].innerText = reel2;
    reels[2].innerText = reel3;

    //logic for comparing the displaying picked symbols to determine win/loss
    if (reel1 === reel2 && reel2 === reel3) {
      let winIncrease = bet * 3;
      message.innerText = 'YOU WIN';
      wallet += winIncrease;
    } else if (reel1 === reel3 || reel2 === reel3) {
      let winIncrease = bet * 1.5;
      message.innerText = 'YOU KINDA WON';
      wallet += winIncrease;
    } else {
      message.innerText = 'LOSER';
    }

    document.getElementById('display-balance').innerText = wallet;
  }
}

//setup mininum bet and maximum bet buttons as click events to start the slot machine
lowEnd.addEventListener('click', () => {
  startSlotMachine(minimumBet);
});

highEnd.addEventListener('click', function () {
  startSlotMachine(maximumBet);
});

// //set up our HTML displays values of our current Balance and current Bet amounts
// document.querySelector('#display-balance').innerHTML = wallet;
// document.querySelector('#display-bet').innerHTML = preppedBet;

// //structure how the reels would be display in HTML
// let reelPick1 = document.querySelector('#reel1');
// let reelPick2 = document.querySelector('#reel2');
// let reelPick3 = document.querySelector('reel3');
