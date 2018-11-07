// NATIONAL FOOTBALL CONFERENCE
document.getElementById("nfc").addEventListener("click", getNfc);

function getNfc() {
	var x = [
		'Arizona Cardinals',
		'Atlanta Falcons',
		'Carolina Panthers',
		'Chicago Bears',
		'Detroit Lions',
		'Green Bay Packers',
		'Los Angeles Rams',
		'Minnesota Vikings',
		'New Orleans Saints',
		'New York Giants',
		'Philadelphia Eagles',
		'San Francisco 49ers',
		'Tampa Bay Buccaneers',
		'Washington Redskins',
		'Seattle Seahawks'
	];

	var rand = x[Math.floor(Math.random() * x.length)];

	document.getElementById("nfc").innerHTML = rand;

	return rand;

}

// disable button after click
function myNfc() {
    document.getElementById("nfc").disabled = true;
}

// AMERICAN FOOTBALL CONFERENCE
document.getElementById("afc").addEventListener("click", getAfc);

function getAfc() {
	var y = [
		'Baltimore Ravens',
		'Buffalo Bills',
		'Cincinnati Bengals',
		'Cleveland Browns',
		'Denver Broncos',
		'Houston Texans',
		'Indianapolis Colts',
		'Jacksonville Jaguars',
		'Kansas City Chiefs',
		'Los Angeles Chargers',
		'Miami Dolphins',
		'New England Patriots',
		'New York Jets',
		'Oakland Raiders',
		'Pittsburgh Steelers',
		'Tennessee Titans'
	];

	var rand = y[Math.floor(Math.random() * y.length)];

	document.getElementById("afc").innerHTML = rand;

	return rand;
}

// disable button after click
function myAfc() {
    document.getElementById("afc").disabled = true;
}

// make the championship button available


// CHAMPION
document.getElementById("champ").addEventListener("click", getChamp);

// select champ from the two conference winners
function getChamp(){
	var z = [
		getNfc,
		getAfc
	];

	var rand = z[Math.floor(Math.random() * z.length)]();

	document.getElementById("champ").innerHTML = rand;
}

// disable button after click
function myChamp() {
    document.getElementById("champ").disabled = true;
}

// show "Good Luck"
function luck() {
	document.getElementById('luck').style.display = "block";
}
