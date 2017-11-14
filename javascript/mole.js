/**
 * @constructor
 * A mole object represents a mole in the game.
 *
 * Moles need 3 variables
 *  - this.timeSpentUp: the amount of time a mole spends on the board before being removed
 *
 *  - this.occupiedHole: A DOM element representing the hole that a mole occupies
 *
 *  - this.moleElement: A DOM element that is created when a mole is created. This element
 *                 should be appended to occupiedHole when a mole emerges
 *
 *  - this.removed: Once a mole has been removed from the DOM, we should mark
 *                  this Mole instance as removed by setting this.removed = true
 *
 */
function Mole(minUpTime, maxUpTime){

    // Moles always emerge when they are created.
    this.emerge();
}

/**
 * A mole emerges from it's mole hole!
 * This function must:
 *   mark that hole as occupied using the data-hole-occupied attribute.
 *   add the mole to the DOM.
 *
 */
Mole.prototype.emerge = function() {
 /* YOUR CODE HERE */
}

/**
 * This function should change a mole from the default state, to the
 * whacked state.
 *
 * It should use the global variable scoreBoard to update the score.
 * This should change the data-score attribute, as well as what the
 * user can see on the screen.
 *
 * It should cause the foundLove.png heart to appear behind the mole.
 *
 * Then after one second it should remove the mole from the DOM.
 */
Mole.prototype.whackThisMole = function() {
    /* YOUR CODE HERE */
}

/**
 * This function should remove the moleElement from the DOM.
 * It should also change the data-hole-occupied attribute back to
 * false so that other moles can occupy the hole.
 */
Mole.prototype.removeMole = function() {

}
/**
 * Select an element from the DOM. The element must be one of the
 * mole holes and it must have an attriute data-hole-occupied with
 * a value of false.
 *
 * If all those conditions are met, return an HTML element.
 * If those conditions cannot be met (i.e. every hole is already occupied)
 * then return undefined.
 */
Mole.prototype.selectHole = function() {
    /* YOUR CODE HERE */
};

/**
 * This must return a random number in between min and max.
 */
Mole.prototype.getRandomBetween = function(min, max) {
    /* YOUR CODE HERE */
};

/**
 * This must return an integer in between min and max
 */
Mole.prototype.getRandomIntBetween = function(min, max) {
    /* YOUR CODE HERE */
};
