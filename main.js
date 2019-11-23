//create deck of cards
//class for Cards
class Card {
    constructor (rank, suit, value) {
      this.rank = rank
      this.suit = suit
      this.value = value
    }
  }
//class for Deck
  class Deck {
    constructor() {
      this.cards = []
      
      let ranks = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace"
      ]
      
      let suits = [
        "Heart",
        "Club",
        "Diamond",
        "Spade"
      ]
    
      /** Imperative: with `for` loops */
  //     for (let i = 0; i < ranks.length; i++) {
  //       for (let j = 0; j < suits.length; j++) {
  //         let rank = ranks[i]
  //         let suit = suits[j]
  //         let value = i
          
  //         this.cards.push(new Card(rank, suit, value))
  //       }   
  //     }
      
      /** Declarative: with `Array.forEach` methods */
      ranks.forEach((rank, value) => {
        suits.forEach(suit => this.cards.push(new Card(rank, suit, value)))
      })
    } // end of Deck constructor
    
    /** for shuffling, research how to shuffl the contnents of an Array.
     * if you see "Fisher-Yates" or "Knuth", your getting warm!
     */
    shuffle(array) {
    //shuffle deck of cards 
    var currentIndex = this.cards.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  
    return array;
  }
    //splice deck in two
    splitcards(placeholder) {
    let deck2 = this.cards.splice(0,26)
     return placeholder
    }
    }
  
const randomizedDeck1 = new Deck()
randomizedDeck1.shuffle();
//copy of main shuffled deck
 let randomizedDeck2 = randomizedDeck1.cards


//divide randomizedDeck2 into two randomized decks of playerOneDeckOne and playerTwoDeckTwo
 const playerOneDeckOne = randomizedDeck2.splice(0,26);
 const playerTwoDeckTwo = randomizedDeck2;

//playerOne and playerTwo play their top cards
function playWar() {
    //if playerone deck array poisiton 0 card value is greater than player two's deck array position 0 card value then push playerone's [0] card to the bottom of their deck and pop over player two's [0] card
    if (playerOneDeckOne[0].value > playerTwoDeckTwo[0].value) {
        playerOneDeckOne.push(playerOneDeckOne[0] && playerTwoDeckTwo.pop(playerTwoDeckTwo[0]));
        console.log("player one wins with higher card value: " + playerOneDeckOne[0].value + " suit: " + playerOneDeckOne[0].suit + " rank: " + playerOneDeckOne[0].rank + " player two loses value: " + playerTwoDeckTwo[0].value + " suit: " + playerTwoDeckTwo[0].suit + " rank: " + playerTwoDeckTwo[0].rank);
    }
    else if (playerTwoDeckTwo[0].value > playerOneDeckOne[0].value) {
        playerTwoDeckTwo.push(playerTwoDeckTwo[0] && playerOneDeckOne.pop(playerOneDeckOne[0].value));
        console.log("player two wins higher card value: " + playerTwoDeckTwo[0].value + " suit: " + playerTwoDeckTwo[0].suit + " rank: " + playerTwoDeckTwo[0].rank) + " player one loses value: " + playerOneDeckOne[0].value + " suit: " + playerOneDeckOne[0].suit + " rank: " + playerOneDeckOne[0].rank;
    }
    else {
        console.log("declare game of war");
    }
}
//*/
//playWar();

//function playGameOfWar() {
    //for (i = 0; i > )
//}
