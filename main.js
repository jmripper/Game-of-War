//step 0: 
//step 1: 
//step 2: 
//step 3: 

class Card {
    constructor (rank, suit, value) {
      this.rank = rank
      this.suit = suit
      this.value = value
    }
  }
  
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
  }
  
  const deck = new Deck()
  
  console.log(deck.cards)