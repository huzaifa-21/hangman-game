function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
    iter["@@iterator"] != null
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var letters = "abcdefghijklmnopqrstuvwxyz1234567890";
letters = _toConsumableArray(letters);

// select letters
var lettersContainer = document.querySelector(".letters");

// generate letters
letters.forEach(function (letter) {
  var span = document.createElement("span");
  span.className = "letter";
  span.innerHTML = letter.toUpperCase();
  lettersContainer.appendChild(span);
});

var words = {
  programming: [
    "Java",
    "PHP",
    "Python",
    "JavaScript",
    "Go",
    "Css",
    "Html",
    "C"
  ],
  movies: [
    "mission impossible",
    "tarazan",
    "the boy",
    "godzilla",
    "superman",
    "spiderman",
    "antman",
    "hulk",
    "doctor strange",
    "black panther",
    "creed",
    "davenci code",
    "captin america",
    "ice age",
    "iron man",
    "kong fu panda",
    "race",
    "kal ho na ho",
    "the greatest showman",
    "despicable me",
    "annabel",
    "the conjuring",
    "finch",
    "the gray man",
    "men in black",
    "the nun",
    "avengers",
    "the gardian of the galaxy",
    "venom",
    "the amazing spiderman",
    "littel woman",
    "the fault in our stars",
    "us",
    "chucky",
    "the gentelmen",
    "sandrella",
    "green land",
    "la la land",
    "the green lantern",
    "saw",
    "sonic",
    "batman",
    "wonder woman",
    "aquaman",
    "the flash",
    "focus",
    "angles and demons",
    "the hunger game",
    "it",
    "the lord of the ring",
    "detective pickatshu",
    "encanto",
    "the sea beast",
    "the lion king",
    "x men",
    "fast and furious",
    "jurassic park",
    "king kong",
    "monster hunter",
    "final destination"
  ],
  countries: [
    "syria",
    "sudan",
    "yemen",
    "irag",
    "palsten",
    "egypt",
    "german",
    "ksa",
    "usa",
    "uae",
    "lebanon",
    "kanada",
    "california",
    "los angles",
    "bagdad",
    "indonesia"
  ],
  names: [
    "samantha",
    "roze",
    "mira",
    "sally",
    "mike",
    "charle",
    "ronald",
    "ronaldo",
    "bekham",
    "messi",
    "kaka",
    "sedoorf",
    "adriano",
    "huzaifa",
    "noah",
    "hosam",
    "sami",
    "samar",
    "mohamed",
    "ali",
    "omar",
    "aala",
    "ahmed",
    "sara",
    "yasser",
    "rownag",
    "raheeg",
    "aya",
    "fatima",
    "mojahed",
    "taj alsir",
    "salah",
    "zainb",
    "aamer",
    "hasoon",
    "sahar",
    "esraa",
    "waad",
    "marafie",
    "nabil",
    "hosham"
  ],
  anime: [
    "attack on titan",
    "jujtsu kaisen",
    "mashe",
    "tomodashi game",
    "one piece",
    "dragon ball super",
    "kingdom",
    "baki",
    "naruto shipudden",
    "hunter x hunter",
    "kengan ashura",
    "dororo",
    "blue lock",
    "ousama ranking",
    "kuroku no basket",
    "hajimi no ippo",
    "the god of heighschool",
    "doctor stone",
    "tokyo revengers",
    "bolu no hero",
    "made in abyss",
    "parasyte",
    "black clover",
    "tokyo goul",
    "mob psycho 100",
    "kimetsu no yaiba",
    "death note",
    "fullmetal alchemist"
  ],
  games: [
    "assissan creed",
    "gta san andreas",
    "dragon ball",
    "wwe",
    "fifa",
    "pes",
    "forza horizon",
    "super mario",
    "contra",
    "pubg",
    "fortnite",
    "free fire",
    "fall guys",
    "candy crush",
    "call of duty",
    "friday the 13",
    "war zone",
    "mine craft",
    "bou",
    "pizza",
    "knife hit",
    "subway",
    "found it",
    "solar smash",
    "color switch",
    "temple run 2",
    "family farm",
    "clash of clans",
    "clash royale",
    "yalla ludo",
    "farm land",
    "cooking corner",
    "zooma",
    "piano tiles",
    "granny"
  ],
  colors: [
    "gray",
    "pink",
    "red",
    "blue",
    "brown",
    "purple",
    "scarlet",
    "green",
    "yellow",
    "offwide",
    "blueviolet",
    "darkblue",
    "darkred",
    "babyblow",
    "grey",
    "peige",
    "neele"
  ],
  music: [
    "you are the reason",
    "beatifull in white",
    "perfect",
    "dream it possible",
    "sorry",
    "shape of you",
    "despacito",
    "thousnds year",
    "believer",
    "calm down",
    "titanic",
    "love yourslef",
    "lose yourself",
    "sway",
    "not afraid",
    "mockingbird",
    "fly me to the moon",
    "without me",
    "its you",
    "all of me",
    "someone like you",
    "waka waka",
    "falling",
    "see you again",
    "senorita",
    "i belive i can fly",
    "let her go",
    "passengers",
    "the lazy song",
    "because you love me",
    "wrecking ball",
    "girl like you",
    "seven years",
    "barking",
    "happier",
    "old town road",
    "gangstar paradise",
    "stereo",
    "ico ico",
    "let me down slowly",
    "people",
    "love nwantiti",
    "no promises",
    "lonely",
    "count on me",
    "wade in the water",
    "dreamers",
    "love me",
    "just the two of us",
    "subeme la radio",
    "butter",
    "arms",
    "city of stars",
    "girl on fire",
    "call me everyday"
  ],
  series: [
    "mouse",
    "squiet game",
    "big mouth",
    "la casa de pabel",
    "x larg",
    "lucky",
    "wanda vision",
    "power",
    "goblin",
    "all us are dead",
    "the walking dead",
    "the simpsons",
    "the good doctor",
    "tom and jerry",
    "groot",
    "friends",
    "how i met your mother",
    "how to get away with a murder",
    "game of thrones",
    "lost",
    "breaking bad",
    "vikings",
    "knight shift",
    "dark",
    "lucifer",
    "the 100"
  ]
};

// select sounds
var completed = document.querySelector(".completed");
var wrong = document.querySelector(".wrong");
var correct = document.querySelector(".correct");
var over = document.querySelector(".over");
var music = document.querySelector(".music");

//get random propertey

var allKeys = Object.keys(words);
var randomPropertey = allKeys[Math.floor(Math.random() * allKeys.length)];

//random propertey valu
var randomPropValue =
  words[randomPropertey][
  Math.floor(Math.random() * words[randomPropertey].length)
  ];

// write categorey name
document.querySelector(".category span").innerHTML = randomPropertey;

// letter container select
var letterGuessConatiner = document.querySelector(".letters-guess");

// convert choosen word to array
var wordArray = _toConsumableArray(randomPropValue);
wordArray.forEach(function (letter) {
  // create empty span
  var emptyspan = document.createElement("span");
  if (letter === " ") {
    // add class to span
    emptyspan.className = "space";
  }

  // add span to guess container
  letterGuessConatiner.appendChild(emptyspan);
});

// set tries count
var counter = document.querySelector(".counter span");
var tries = 9;
counter.innerHTML = tries;

// select all spans
var spans = document.querySelectorAll(".letters-guess span");

// set status
var theStatus = false;

// set wrong attempt
var wrongAttempt = 0;

// get draw
var draw = document.querySelector(".hangman-draw");
var rightNumber = [];
// setTimeout(() => {
//   music.play();
// }, 2000);
// handle clicking on letter
document.addEventListener("click", function (e) {
  theStatus = false;
  if (e.target.className === "letter") {
    // add class clicked
    e.target.classList.add("clicked");

    // get the clicked letter
    var theClickedLetter = e.target.innerHTML.toLowerCase();
    var theChoosenWord = _toConsumableArray(randomPropValue.toLowerCase());
    theChoosenWord.forEach(function (wordLetter, wordindex) {
      if (theClickedLetter == wordLetter) {
        theStatus = true;
        correct.play();
        spans.forEach(function (span, spanindex) {
          if (wordindex === spanindex) {
            span.innerHTML = wordLetter;
            var rightsCount = letterGuessConatiner.children.length;
            rightNumber.push(span);
            spans = _toConsumableArray(spans);
            if (rightsCount === rightNumber.length) {
              completed.play();
              CorrectWord();
              music.pause();
            }
            spans.forEach(function (ele) {
              if (ele.classList.contains("space")) {
                rightsCount -= 1;
                if (rightsCount === rightNumber.length) {
                  completed.play();
                  CorrectWord();
                  music.pause();
                }
              }
            });
          }
        });
      }
    });

    // outside the loop
    if (theStatus !== true) {
      // increase the wrong attempts
      wrongAttempt++;
      tries--;
      wrong.play();
      counter.innerHTML = tries;
      draw.classList.add("wrong-".concat(wrongAttempt));
      if (wrongAttempt === 9) {
        setTimeout(function () {
          endGame();
          over.play();
          music.pause();
        }, 500);
        lettersContainer.classList.add("finished");
      }
    }
  }
});
function endGame() {
  var div = document.createElement("div");
  var devtext = document.createTextNode(
    "Game Over,The Word Is ".concat(randomPropValue)
  );
  div.appendChild(devtext);
  div.className = "game-over";
  document.body.append(div);
  setTimeout(function () {
    location.reload();
  }, 4000);
}
function CorrectWord() {
  var div = document.createElement("div");
  var devtext = document.createTextNode(
    "Congratulation You Had ".concat(wrongAttempt, " Fault But You Win")
  );
  div.appendChild(devtext);
  div.className = "win";
  document.body.append(div);
  setTimeout(function () {
    location.reload();
  }, 4000);
}
var option = document.querySelector(".music-option");
option.onclick = function () {
  if (option.children[0].innerText == "ON") {
    option.children[0].innerText = "off";
    music.pause();
  } else if (option.children[0].innerText == "OFF") {
    option.children[0].innerText = "on";
    music.play();
  }
};
