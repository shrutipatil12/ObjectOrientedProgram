/******************************************************************************
 *  Execution       :cmd> node deckOfCards.js
 *  purpose         : To initialize a deck of cards.
 *  @description    : shuffle the deck and provide 9 cards each to 4 players.
 *  @file           : deckOfCards.js
 *  @author         : Shruti
 *  @version        : 1.0
 *  @since          : 10-5-2019
 *
 ******************************************************************************/

var util = require('../Utility/OOPrograms_Util');
function deckOfCards() {
    //calling the function
    util.distributingCards();
}
//call to the function
deckOfCards();
module.exports = deckOfCards();