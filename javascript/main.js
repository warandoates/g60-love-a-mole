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
  readQueryParams();
  createMoleField();
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
function readQueryParams() {
  let searchArr = document.location.search.replace(/\?/, "").split("&");
  searchArr.forEach(query => {
    query = query.split("=");
    GLOBALS[query[0]] = parseInt(query[1]);
  });
}

// Create and insert a 3x3 HTML table.
// Use createSingleMoleHole() to create the <td> elements
function createMoleField() {
  let moleField = document.querySelector("#mole-field");
  for (let i = 0; i < 3; i++) {
    let tr = document.createElement("tr");
    moleField.appendChild(tr);
    for (let j = 0; j < 3; j++) {
      let td = createSingleMoleHole();
      tr.appendChild(td);
    }
  }
}

// Create a complex HTML snippet and return it.
// The element returned from this function should look exactly like this
// <td><div data-hole-occupied="false" class="mole-hole"></div></td>
function createSingleMoleHole() {
  let element = document.createElement("td");
  element["data-hole-occupied"] = "false";
  element.className = "mole-hole";
  return element;
}

/**
 * Reset the score and start round 0
 */
function startGame() {}

/**
* Use a closure and the event loop to act every ROUND_COOLDOWN seconds
*/
function initiateRound(roundNumber) {}

/**
 * When we're sure the last moles are done, let the user try again
 */
function endGame() {}
