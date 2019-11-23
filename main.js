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



