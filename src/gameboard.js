/*
We should know our code is coming together by running the tests. 
You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.
Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.
Gameboards should have a receiveAttack function that takes a pair of coordinates,
 determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship,
 or records the coordinates of the missed shot.
Gameboards should keep track of missed attacks so they can display them properly.
Gameboards should be able to report whether or not all of their ships have been sunk.
*/
import Ship from './ship';

export default class Gameboard {
  constructor() {
    // place ships at coordinates

    this.misses = [];
  }

  receiveAttack(coordinates) {
    // if (shipLocations contains coordinates)
    //  hit
    // else
    //  this.misses.push(coordinates);
  }
}
