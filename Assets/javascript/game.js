
	let words = ["Advent", "angels", "announcement", "bells", "Bethlehem", "Blitzen", "candles", "candy", "candy canes", "cards", "cedar", "celebrate", "ceremonies", "chimney", "Christmas cookies", "Christmas tree", "cold", "Comet", "cranberry sauce", "crowds", "Cupid", "Dancer", "Dasher", "December", "decorations", "dolls", "Donner", "dressing", "eggnog", "elves", "family reunion", "festival", "fir", "Frosty", "fruitcake", "gift boxes", "gifts", "goodwill", "greetings", "ham", "happy", "holiday", "holly", "holy", "icicles", "jolly", "lights", "lists", "merry", "miracle", "mistletoe", "New Year", "Noel", "North Pole", "pageant", "parades", "party", "pie", "pine", "plum pudding", "poinsettia", "Prancer", "presents", "pumpkin pie", "punch", "red/green", "reindeer", "ribbon", "Rudolph", "sacred", "sales", "sauce", "Scrooge", "season", "sled", "sleigh bells", "snowflakes", "spirit", "St. Nick", "stand", "star", "stickers", "stocking stuffers", "sweet potato", "tidings", "tinsel", "togetherness", "toys", "tradition", "traffic", "trips", "turkey", "vacation", "Vixen", "Winter", "worship", "wrapping paper", "wreath", "yule", "yuletide"];

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


		}
	;
