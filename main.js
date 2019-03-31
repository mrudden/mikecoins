// Mikecoin scripts!!

var gameData = {
	walletBalance: 0,
	lifetimeBalance: 0,
	// Solving math problems is how to get Mikecoins
	// increase this with some kind of weird helper like ants in the wires
	problemsPerClick: 1
}


// Event Log
var event1 = "<br>";
var event2 = "<br>";
var event3 = "<br>";
var event4 = "<br>";
var event5 = "<br>";

function updateEventLog(incomingEvent) {

	event5 = event4;
	event4 = event3;
	event3 = event2;
	event2 = event1;
	event1 = "Event: " + incomingEvent + "<br>";

	document.getElementById("event-log").innerHTML = 
		//"<span>" + event5 + "</span>" + "\n" +
		//"<span>" + event4 + "</span>" + "\n" +
		"<span>" + event3 + "</span>" + "\n" +
		"<span>" + event2 + "</span>" + "\n" +
		"<span><b>" + event1 + "</b></span>" + "\n";
}



// Store
var itemsForSale = [];
var level1GraphicsCard = {id: 1, name: "Invideo GFX 110 Graphics Card", cost: 50, problemsPerSecond: 1, costToUnlock: 25};

itemsForSale.push(level1GraphicsCard);

function updateStore() {

	for (var i = 0; i < itemsForSale.length; i++) {
		document.getElementById("store").innerHTML = ""
		if (gameData.lifetimeBalance >= itemsForSale[i].costToUnlock) {
			var storeContents = document.createElement('span');
			storeContents.innerHTML = "Name: " + itemsForSale[i].name + "<br>Cost: " + itemsForSale[i].cost + "<br><button onclick=\"buyItem(1,1)\">Buy 1</button><br><br>";

			document.getElementById("store").appendChild(storeContents);
		} else {
			var storeContents = "The store doesn't have anything for sale yet!";
			document.getElementById("store").innerHTML = storeContents;
		}
		//storeContents = storeContents += "Name: " + itemsForSale[i].name + "<br>Cost: " + itemsForSale[i].cost + "<br><br>";
	}

	//document.getElementById("store").innerHTML = storeContents;
}


// Inventory

var inventoryArray = [];

function updateInventory(itemId, quantity) {
	console.log(itemId, quantity)

	for (var i = 0; i < itemsForSale.length; i++) {
		if (itemsForSale[i].id == itemId) {
			inventoryArray.push(itemsForSale[i].name)
			console.log(itemsForSale[i].name)
		}
	}

	if (inventoryArray.length > 0) {
		document.getElementById("inventory").innerHTML = ""

		for (var i = 0; i < inventoryArray.length; i++) {

			inventoryContents = document.createElement('span');
			inventoryContents.innerHTML = "Name: " + inventoryArray[i] + "<br>";

			document.getElementById("inventory").appendChild(inventoryContents);

		}
	} else {
		var inventoryContents = "You don't currently have any items!"
		document.getElementById("inventory").innerHTML = inventoryContents;
	}
}


// Buying an item

function buyItem(itemId, quantity) {
	for (var i = 0; i < itemsForSale.length; i++) {
		if (itemsForSale[i].id == itemId) {
			if (gameData.walletBalance >= itemsForSale[i].cost) {
				gameData.walletBalance -= itemsForSale[i].cost * quantity;
				document.getElementById("mikecoin-balance").innerHTML =  gameData.walletBalance;
				updateInventory(itemId, quantity);
				//console.log("Bought it!")
			} else {
				console.log("Not enough money!");
			}
		}
	}
}


// Update the problem solving screen
var screen1 = "<br>";
var screen2 = "<br>";
var screen3 = "<br>";

function updateScreen(screenUpdateText) {

	screen3 = screen2;
	screen2 = screen1;
	screen1 = screenUpdateText + "<br>";

	document.getElementById("screen").innerHTML = 
	"<span>" + screen3 + "</span>" + "\n" +
	"<span>" + screen2 + "</span>" + "\n" +
	"<span><b>" + screen1 + "</b></span>" + "\n";
}


// Solve problems to gather Mikecoins!
var num1;
var num2;
// Initialize boolean for click
var problemSolved = true;

function solveProblem() {

	if (problemSolved) {
		num1 = Math.floor(Math.random() * 6);
		num2 = Math.floor(Math.random() * 6);
		problemSolved = false;
	}
	var solution = Math.floor(Math.random() * 11);
	var payoutRange = gameData.problemsPerClick * 5;
	var payout = Math.floor(Math.random() * payoutRange) + 5;

	if (num1 + num2 == solution) {
		var problem = num1 + " + " + num2 + " = " + solution + " <font color=\"green\">&#x2713;</font>";
		updateScreen(problem);

		var payoutEvent = "You have earned " + payout + " Mikecoins!";
		updateEventLog(payoutEvent);

		// Update current wallet and lifetime count
		gameData.walletBalance = gameData.walletBalance + payout;
		gameData.lifetimeBalance = gameData.lifetimeBalance + payout;

		problemSolved = true;
	} else {
		var problem =  num1 + " + " + num2 + " = " + solution + " <font color=\"red\">&#x2717;</font>";
		updateScreen(problem);

	}
	document.getElementById("mikecoin-balance").innerHTML =  gameData.walletBalance;
	document.getElementById("lifetime-balance").innerHTML =  gameData.lifetimeBalance;
	updateStore();
}





/*
$(document).ready(function(){
	/*var name = prompt("Is your name Mike? (Y/N)");
	if (name.toLowerCase() == "y") {
		alert("Welcome, Mike! Have some Mikecoins!");
		walletBalance = walletBalance + 1000;
		$('#walletBalance').html(walletBalance);
	} else {
		alert("Welcome, not-Mike, have some Mikecoins anyway!")
		walletBalance = walletBalance + 100;
		$('#walletBalance').html(walletBalance);
	}

	var graphics = prompt("How powerful is your graphics card on a scale from 1-5?");
	switch (graphics) {
		case '1': graphicsMultiplier = 1;
			break;
		case '2':  graphicsMultiplier = 2;
			break;
		case '3': graphicsMultiplier = 3;
			break;
		case '4': graphicsMultiplier = 4;
			break;
		case '5': graphicsMultiplier = 5;
			break;
		default: graphicsMultiplier = 1;
				break;
	}

	$("#gather").click(function(){
		if (problemSolved) {
			num1 = Math.floor(Math.random() * 6);
			num2 = Math.floor(Math.random() * 6);
			problemSolved = false;
		}
		var solution = Math.floor(Math.random() * 11);
		var payoutRange = graphicsMultiplier * 5;
		var payout = Math.floor(Math.random() * payoutRange) + 5;
		$('#num1').html(num1);
		$('#num2').html(num2);

		if (num1 + num2 == solution) {
			$('#solution').html(solution + "&#x2713;");

// TODO: Add event log
			var payoutEvent = "You have earned " + payout + " Mikecoins!";
			$('#event').html(payoutEvent);

			walletBalance = walletBalance + payout;
			problemSolved = true;
		} else {
			$('#solution').html(solution + "&#x2717;");
		}
		$('#walletBalance').html(walletBalance);
	});

// TODO: Build Mike store
	$("#store").click(function(){
		alert("Welcome to the store!!! What would you like to buy????/");

	});
});

*/