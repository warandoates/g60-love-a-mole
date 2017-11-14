# love-a-mole as a warmup

During this series of warmups, you'll be using a great deal of what you've previously learned. In the completion of love-a-mole you'll be using:

* DOM manipulation
* HTML Forms
* Prototypes & Object Oriented JavaScript
* Closures
* Overwriting the value of `this` with `call`/`apply`/`bind`
* Timers and asynchronous code

Your goal is to create a web-based version of [Whack-a-Mole][01]. If you're not familiar with this classic arcade game, here's the idea: In a limited amount of time, moles will rise from a collection of holes in a randomized order. When a mole appears, a player attempts to strike the mole with a mallet before the mole returns to its hole. Sounds fun, right?!

In the original version, we whack moles with a mallet; in this version, we're going to help moles find love in the world. Because, in the end, all we really need is love.

# Instructions

Over a series of days you and your cohort will work in pairs to complete a single feature each day. For 30-45 minutes you and a partner will work as a pair to add a single feature-set. Decide who will drive and who will navigate first, by playing "rock, paper, scissors." The winner chooses to drive or navigate first. Switch drivers after about 20 minutes. Work until time is up or everyone finishes.

After this, as a group you will select a solution to merge to the team solution branch. First, anyone who finished today should say so. One team will be chosen randomly to be the "release candidate." That randomly chosen team will walk us through their solution -- questions for understanding, but no comments yet.

 Now, the class will do instructor facilitated code review. The instructor will drive, but the students will be navigating. The resulting code will be merged as the baseline for the next step in the warmup. Lets get started:

## Step 1: Fork and Clone

Get the code locally!

```
$ git clone [yourForkURL]
$ cd love-a-mole
$ git remote add upstream git@github.com:gSchool/love-a-mole.git
$ git fetch -a
$ git merge experimental-warmup-[yourClassCode]
```

Later, when it's time to get the teams code:

```
$ git fetch -a
$ git merge upstream/experimental-warmup-[yourClassCode]
```


## Step 2: Write the Missing Code

In this repository, you'll notice the following directory structure:

```bash
.
├── css
|   └── whack-a-mole.css
├── images
|   └── found-love.png
|   └── heart.png
|   └── mole.png
├── javascript
|   └── main.js
|   └── mole.js
├── .gitignore
├── index.html
├── README.md
└── whack-a-mole.html

```

Several of the files in above directory is missing code. Your task is to locate the omitted code and then add that code. To give you some direction, you'll be focusing your attention on just these files:

1. `index.html`
2. `css/whack-a-mole.css`
3. `javascript/main.js`
4. `javascript/mole.js`

Each day we will focus on a different feature. The schedule may vary slightly, but here are the features you're going to create:

#### Day One: Dynamic Configuration

Finish the HTML form on `index.html` and handle it's input. Here are the steps:
  * Give the form's `input` tags informative `label` elements.
  * When the form is submitted the data should be sent to `whack-a-mole.html` using `GET`.
  * Use `window.location` to handle the query parameters
    * populate the `GLOBALS` variable in `main.js` with this data.
    * Complete `readQueryParams()` and call it from the `window.onload` function.


#### Day Two: Field of Dreams

Create the mole field.

* Create the game board dynamically using `main.js`
  * A 3x3 html table, using `<table>`, `<tr>`, `<td>` ... etc.
* Create some css styles for the game board, fill in the selectors for at least `mole-field td` and `.mole-hole`.
* Feel free to add more.
* Use all functions:
  * `createMoleField()`
  * `createSingleMoleHole()`
  * call them from the `window.onload` function

#### Day Three: Emergence

Create a `Mole`, and send it through a *loveless* life.

* Devise the CSS rules for an HTML element with a class of `mole`
* Manually create an element like `<div class="mole"></div>` in order to test your CSS rules
  * You can do this in javascript or add matching html manually to `whack-a-mole.html` while testing
* Complete the following functions in mole.js such that calling `new Mole()` from the console will cause a mole to appear in a random hole. Do not make the mole disappear yet.
  * `Mole()`
  * `Mole.prototype.emerge`
  * `Mole.prototype.selectHole`
  * `Mole.prototype.getRandomBetween`
  * `Mole.prototype.getRandomIntBetween`

#### Day Four: Retreat

Expand the mole class by completing the functionality for mole removal. Using the `Mole` constructor's parameters `minUpTime` and `maxUpTime` and the following functions, cause the mole to remove itself from the page after some period of seconds in-between `minUpTime` and `maxUpTime`.
  * `Mole`
  * `window.setTimeout`
  * `Mole.prototype.getRandomBetween`
  * `Mole.prototype.removeMole`


#### Day Five: Receiving Love

Allow the moles to handle being clicked on. When a user clicks on a mole it should trigger that mole's `whackThatMole` method. The mole should appear with a heart behind it when clicked for a moment, then disappear.

Instructions: `throw notImplementedError`

#### Day Six: Game Start Logic

Allow the user to start a game with the click of a button. The information from `GLOBALS` (remember those query parameters...?) should be used to control how many rounds, moles-per-round, the time each Mole spends up, and the delay between waves of moles should be controlled by these values.

Instructions: `throw notImplementedError`

#### Day Seven and Beyond:

We can keep adding features to this -- here is an outline of fun things to do:

* Add a score board.
* Add CSS 3 animations to the Moles
  * Make some moles animate faster than others
  * Really make it *delightfully cute*
  * Animate up and down!
* Add keyboard interface support for whacking.
* Add a `Hedgehog` class that RESISTS whacking -- causing player score to decrease.
  * Use `Mole` as a starting point.
  * Modify the CSS, and logic as needed.
  * Design an "interface" or super-class for the shared behavior of `Hedgehog` and `Mole`.


[00]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[01]: https://en.wikipedia.org/wiki/Whac-A-Mole
