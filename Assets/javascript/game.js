	let words = ["Advent", "angels", "announcement", "bells", "Bethlehem", "Blitzen", "candles", "candy", "candycanes", "cards", "cedar", "celebrate", "ceremonies", "chimney", "Christmascookies", "Christmas tree", "cold", "Comet", "cranberrysauce", "crowds", "Cupid", "Dancer", "Dasher", "December", "decorations", "dolls", "Donner", "dressing", "eggnog", "elves", "familyreunion", "festival", "fir", "Frosty", "fruitcake", "giftboxes", "gifts", "goodwill", "greetings", "ham", "happy", "holiday", "holly", "holy", "icicles", "jolly", "lights", "lists", "merry", "miracle", "mistletoe", "NewYear", "Noel", "NorthPole", "pageant", "parades", "party", "pie", "pine", "plumpudding", "poinsettia", "Prancer", "presents", "pumpkinpie", "punch", "red", "green", "reindeer", "ribbon", "Rudolph", "sacred", "sales", "sauce", "Scrooge", "season", "sled", "sleighbells", "snowflakes", "spirit", "StNick", "stand", "star", "stickers", "stockingstuffers", "sweetpotato", "tidings", "tinsel", "togetherness", "toys", "tradition", "traffic", "trips", "turkey", "vacation", "Vixen", "Winter", "worship", "wrappingpaper", "wreath", "yule", "yuletide"];

	let guess;
	let word = words[Math.floor(Math.random() * words.length)].toLowerCase();
	let usedLetters = [];
	let lives = 10;
	let status = [];
	let statusDisplay = document.getElementById("status");
	let livesDisplay = document.getElementById("lives");
	let usedDisplay = document.getElementById("used");
	let remainingLetters = 0;
	let wins = 0;
	let winsDisplay = document.getElementById("win");
	let losses = 0;
	let lossesDisplay = document.getElementById("loss");
	let match = true;

	for (var i = 0; i < word.length; i++) {
		status[i] = "_";
		remainingLetters++;
		lives = 10;
		usedLetters = [];
			}



	console.log("Word: " + word);
	statusDisplay.innerHTML = status.join(" ");
	livesDisplay.innerHTML = lives;
	usedDisplay.innerHTML = usedLetters.join(" ");
	winsDisplay.innerHTML = wins;
	lossesDisplay.innerHTML = losses;

	document.onkeyup = function(event) {
		guess = event.key.toLowerCase();
		for (i = 0; i < word.length; i++) {
			if (word[i] === guess) {
				status[i] = guess;
				remainingLetters--;
				console.log(remainingLetters);


			}

		}
		if (word[i] !== guess){
			console.log(guess);
			usedLetters.push(guess);
			lives--;
				}


			if (remainingLetters < 1){
				alert("You won!");
				alert("The word was: " + word);
				lives = 10;
				wins++;


			}
			if (lives == 0) {
				alert("You lost!");
				alert("The word was: " + word);
				lives = 10;
				losses++;

			}

			statusDisplay.innerHTML = status.join(" ");
			livesDisplay.innerHTML = lives;
			usedDisplay.innerHTML = usedLetters.join(" ");
			winsDisplay.innerHTML = wins;
			lossesDisplay.innerHTML = losses;


		};
