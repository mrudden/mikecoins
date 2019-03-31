// Mikecoin scripts!!

var gameData = {
	walletBalance: 0,
	lifetimeBalance: 0,
	// Solving math problems is how to get Mikecoins
	// increase this with some kind of weird helper like ants in the wires
	problemsPerClickTotal: 1,
	problemsPerSecondTotal: 0
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
var itemsForSale = [
	{id: 1, name: "Mikecoin hat", cost: 15, problemsPerClick: 1, problemsPerSecond: 0, costToUnlock: 5, unlocked: false},
	{id: 2, name: "Mikecoin t-shirt", cost: 30, problemsPerClick: 1, problemsPerSecond: 0, costToUnlock: 15, unlocked: false},
	{id: 3, name: "Invideo GFX 410 Graphics Card", cost: 50, problemsPerClick: 0, problemsPerSecond: 1, costToUnlock: 30, unlocked: false},
	{id: 3, name: "Invideo GFX 810 Graphics Card", cost: 100, problemsPerClick: 0, problemsPerSecond: 3, costToUnlock: 50, unlocked: false},
	{id: 4, name: "Invideo GFX 1210 Graphics Card", cost: 200, problemsPerClick: 0, problemsPerSecond: 5, costToUnlock: 100, unlocked: false}
];

function updateStore() {

	//var storeContents;
	//storeContents.innerHTML = "The store doesn't have anything for sale yet!";

	
	for (var i = 0; i < itemsForSale.length; i++) {
		//console.log(itemsForSale[i].name);
		
		if ((gameData.lifetimeBalance >= itemsForSale[i].costToUnlock) &&  itemsForSale[i].unlocked == false) {
			
			try {
				document.getElementById("store").removeChild(document.getElementById("store-placeholder"));
			} catch {
				console.log("nothing to remove from store")
			}
			
			itemsForSale[i].unlocked = true;
			console.log("time to show " + itemsForSale[i].name);
			var storeContents = document.createElement('span');
			var storeContentsId = "store-item-" + itemsForSale[i].id;
			storeContents.setAttribute("id", storeContentsId)
			storeContents.innerHTML = "Name: " + itemsForSale[i].name + "<br>Cost: " + itemsForSale[i].cost + "<br><button onclick=\"buyItem(" + itemsForSale[i].id + ",1)\">Buy 1</button><br><br>";
			console.log(storeContents);
			document.getElementById("store").appendChild(storeContents);

		} /*else {
			var storeContents = document.createElement('span');
			storeContents.innerHTML = "The store doesn't have anything for sale yet!";
			storeContents.setAttribute("id", "store-placeholder");
			document.getElementById("store").appendChild(storeContents);
		}*/
		//document.getElementById("store").appendChild(storeContents);
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
			if (inventoryArray.length > 0) {
				// Check to see if item is already in array 
				for (var j = 0; j < inventoryArray.length; j++) {
					if (inventoryArray[j][0] ==  itemsForSale[i].id) {
						inventoryArray[j][2] += quantity
					}
				}
			} else {
				inventoryArray.push([itemsForSale[i].id, itemsForSale[i].name, quantity])
			}
			
			console.log(itemsForSale[i].name)
		}
	}

	if (inventoryArray.length > 0) {
		
		try {
			document.getElementById("inventory").removeChild(document.getElementById("inventory-placeholder"));
		} catch {
			console.log("nothing to remove from inventory")
		}

		for (var k = 0; k < inventoryArray.length; k++) {

			inventoryContents = document.createElement('span');
			var inventoryContentsId = "inventory-item-" + inventoryArray[k].id;
			inventoryContents.setAttribute("id", inventoryContentsId)
			inventoryContents.innerHTML = "Name: " + inventoryArray[k][1] + "<br>Quantity: " + inventoryArray[k][2] + "<br>";

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
				gameData.problemsPerClickTotal += itemsForSale[i].problemsPerClick;
				gameData.problemsPerSecondTotal += itemsForSale[i].problemsPerSecond;
				console.log(gameData.problemsPerSecondTotal)
				updateEventLog("Bought 1 " + itemsForSale[i].name);

				itemsForSale[i].cost = Math.floor(itemsForSale[i].cost * 1.1);
				//updateStore();
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
var screen4 = "<br>";
var screen5 = "<br>";
var screen6 = "<br>";

function updateScreen(screenUpdateText) {


	screen6 = screen5;
	screen5 = screen4;
	screen4 = screen3;
	screen3 = screen2;
	screen2 = screen1;
	screen1 = screenUpdateText + "<br>";

	document.getElementById("screen").innerHTML = 
	"<span>" + screen6 + "</span>" + "\n" +
	"<span>" + screen5 + "</span>" + "\n" +
	"<span>" + screen4 + "</span>" + "\n" +
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
	var payoutRange = 1 * 5;
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

function clickToSolveProblem() {
	for (var n = 0; n < gameData.problemsPerClickTotal; n++) {
		window.requestAnimationFrame(solveProblem);
	}
}

var mainGameLoop = window.setInterval(function() {
	for (var n = 0; n < gameData.problemsPerSecondTotal; n++) {
	//var timer1 = setTimeout
	//if (inventoryArray.length > 0 ) {
		//solveProblem();
		window.requestAnimationFrame(solveProblem);
	}
	//window.requestAnimationFrame();
}, 1000)

  