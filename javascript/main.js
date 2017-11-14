// Global game parameters. These will be set based on the form input.
// They should be set in readQueryParams.
var GLOBALS = {};

//
// Main entry point:
// Read the input paramaters,
// Build the Mole Field of Dreams
// Start the game
//
window.onload = function() {
    var string = document.location.search
    readQueryParams(string)
};

// Examine document.location.search and extract the info
// from our form. Store each key/value pair as a property in GLOBALS.
// GLOBALS should have number values from the form for each of these
// keys:
//   MOLE_UP_MIN (in seconds)
//   MOLE_UP_MAX (in seconds)
//   NUMBER_OF_ROUNDS
//   MOLES_PER_ROUND
//   ROUND_COOLDOWN (in seconds)
function readQueryParams(string) {

    var array = string.split(/\&/g)
    var object = {}
    array
        .map(a => a.replace('?', '')
            .replace('=', ' ')
            .split(' '))
        .forEach(a => object[a[0]] = a[1])
    GLOBALS = object
    console.log(GLOBALS)

}

// Create and insert a 3x3 HTML table.
// Use createSingleMoleHole() to create the <td> elements
function createMoleField() {
    /* YOUR CODE HERE */
}

// Create a complex HTML snippet and return it.
// The element returned from this function should look exactly like this
// <td><div data-hole-occupied="false" class="mole-hole"></div></td>
function createSingleMoleHole() {
    /* YOUR CODE HERE */
}

/**
 * Reset the score and start round 0
 */
function startGame() {

}

/**
 * Use a closure and the event loop to act every ROUND_COOLDOWN seconds
 */
function initiateRound(roundNumber) {

}

/**
 * When we're sure the last moles are done, let the user try again
 */
function endGame() {

}