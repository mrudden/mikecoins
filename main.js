// Mikecoin scripts!!

var gameData = {

	// How many Mikecoins you have
	walletBalance: 0,
	// How many Mikecoins you've ever earned
	lifetimeBalance: 0,
	// Solving math problems is how to get Mikecoins
	// increase this with some kind of weird helper like ants in the wires
	problemsPerClickTotal: 1,
	problemsPerSecondTotal: 0,

	// How many people are mining or trading Mikecoins
	communityMembers: 1,
	communityGrowthPerSecond: 0,

	// How many mikecoins are out there
	marketCap: 0
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
	{id: 1, name: "Double clicking", cost: 15, problemsPerClick: 1, problemsPerSecond: 0, costToUnlock: 5, unlocked: false},
	{id: 2, name: "Better mouse", cost: 30, problemsPerClick: 2, problemsPerSecond: 0, costToUnlock: 15, unlocked: false},
	{id: 3, name: "Ask a friend for help", cost: 30, problemsPerClick: 3, problemsPerSecond: 0, costToUnlock: 15, unlocked: false},
	{id: 4, name: "Mikecoin hat", cost: 15, problemsPerClick: 1, problemsPerSecond: 0, costToUnlock: 30, unlocked: false},
	{id: 5, name: "Invideo GFX 410 Graphics Card", cost: 50, problemsPerClick: 0, problemsPerSecond: 1, costToUnlock: 30, unlocked: false},
	{id: 6, name: "Mikecoin t-shirt", cost: 30, problemsPerClick: 1, problemsPerSecond: 0, costToUnlock: 40, unlocked: false},
	{id: 7, name: "Invideo GFX 810 Graphics Card", cost: 100, problemsPerClick: 0, problemsPerSecond: 3, costToUnlock: 50, unlocked: false},
	{id: 8, name: "Invideo GFX 1210 Graphics Card", cost: 200, problemsPerClick: 0, problemsPerSecond: 5, costToUnlock: 100, unlocked: false},
	{id: 9, name: "ABC Solveon 16 Graphics Card", cost: 650, problemsPerClick: 0, problemsPerSecond: 16, costToUnlock: 1000, unlocked: false}
];

function updateStore() {

	//var storeContents;
	//storeContents.innerHTML = "The store doesn't have anything for sale yet!";

	
	for (var i = 0; i < itemsForSale.length; i++) {
		//console.log(itemsForSale[i].name);
		
		// Show items once you hit a lifetime balance level that unlocks that item.
		if ((gameData.lifetimeBalance >= itemsForSale[i].costToUnlock) &&  itemsForSale[i].unlocked == false) {
			
			// Remove the placeholder if store is no longer empty
			try {
				document.getElementById("store").removeChild(document.getElementById("store-placeholder"));
			} catch {
			//	console.log("Updating Store. No placeholder found in array.")
			}
			
			itemsForSale[i].unlocked = true;
			console.log("Updating Store. Showing " + itemsForSale[i].name);
			var storeContents = document.createElement('span');
			var storeContentsId = "store-item-" + itemsForSale[i].id;
			storeContents.setAttribute("id", storeContentsId)
			storeContents.innerHTML = "Name: " + itemsForSale[i].name + "<br>Cost: <span id=\"store-item-" + itemsForSale[i].id + "-cost\">" + itemsForSale[i].cost + "</span><br><button onclick=\"buyItem(" + itemsForSale[i].id + ",1)\">Buy 1</button><br><br>";

			// TODO: Check amount owned per ID in inventory and add buttons to buy more than 1 at a time - example, Buy 5, Buy 10, Buy 100, etc.
			//if (itemsForSale[i].id )
			for (var j = 0; j < inventoryArray.length; j++) {
				if (itemsForSale[i].id == inventoryArray[j].id) {

					if (inventoryArray[j].quantity >= 5) {
						storeContents.innerHTML = "Name: " + itemsForSale[i].name + "<br>Cost: <span id=\"store-item-" + itemsForSale[i].id + "-cost\">" + itemsForSale[i].cost + "</span><br><button onclick=\"buyItem(" + itemsForSale[i].id + ",1)\">Buy 1</button><button onclick=\"buyItem(" + itemsForSale[i].id + ",5)\">Buy 5</button><br><br>";
					} else if (inventoryArray[j].quantity >= 10) {
						storeContents.innerHTML = "Name: " + itemsForSale[i].name + "<br>Cost: <span id=\"store-item-" + itemsForSale[i].id + "-cost\">" + itemsForSale[i].cost + "</span><br><button onclick=\"buyItem(" + itemsForSale[i].id + ",1)\">Buy 1</button><button onclick=\"buyItem(" + itemsForSale[i].id + ",5)\">Buy 5</button><button onclick=\"buyItem(" + itemsForSale[i].id + ",10)\">Buy 10</button><br><br>";
					} else if (inventoryArray[j].quantity >= 100) {
						storeContents.innerHTML = "Name: " + itemsForSale[i].name + "<br>Cost: <span id=\"store-item-" + itemsForSale[i].id + "-cost\">" + itemsForSale[i].cost + "</span><br><button onclick=\"buyItem(" + itemsForSale[i].id + ",1)\">Buy 1</button><button onclick=\"buyItem(" + itemsForSale[i].id + ",5)\">Buy 5</button><button onclick=\"buyItem(" + itemsForSale[i].id + ",10)\">Buy 10</button><button onclick=\"buyItem(" + itemsForSale[i].id + ",100)\">Buy 100</button><br><br>";
					}

				}
			}
			
			//console.log(storeContents);
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
	console.log("Updating Inventory. Buying quantity " + quantity + " of item with ID " + itemId);

	var itemToAdd = {};
	var quantityToBuy = quantity;

	// Look up item to add in items for sale and store data
	for (var s = 0; s < itemsForSale.length; s++) {
		console.log("Updating Inventory. Item to buy with ID " + itemId + " being compared to available item to buy with id " + itemsForSale[s].id);
		if (itemId == itemsForSale[s].id) {
			itemToAdd = {id: itemsForSale[s].id, name: itemsForSale[s].name, quantity: quantityToBuy};
			console.log("Updating Inventory. Looking up item to buy in itemsForSale. Match found! Breaking loop.")
			break;
		}
	}

	console.log("Updating Inventory. Item to add: ");
	console.log(itemToAdd);

	// Now that we know what we want to add we need to do two things

	// First thing: check to see if we already own any of this item. If so, update quantity
	// Second thing: if we don't already have one, add it.
	if (inventoryArray.length > 0){
		var itemAlreadyOwned = false;
		var inventorySlotToUpdate;
		for (var i = 0; i < inventoryArray.length; i++) {
			console.log("Updating Inventory. Looping through inventory trying to match " + itemToAdd.id + " to inventory item with id " + inventoryArray[i].id + " to update quantity.");
			if (itemToAdd.id == inventoryArray[i].id){
				console.log("Updating Inventory. Match found! Time to update the quantity and exit this loop.")
				itemAlreadyOwned = true;
				inventorySlotToUpdate = i;
				break;
			}
		}

		// Update quantity of existing item, or add item
		if (itemAlreadyOwned){		
			inventoryArray[inventorySlotToUpdate].quantity += itemToAdd.quantity;
		} else {
			console.log("Updating Inventory. Match not found in existing item, so adding this item.")
			inventoryArray.push(itemToAdd);
		}
	} else {
		// if inventory is currently completely empty, we can just add this item as-is.
		console.log("Updating Inventory. Since inventory was empty, adding this item.")
		inventoryArray.push(itemToAdd);
	}

	// Sort the inventory by ID ascending
	//inventoryArray.sort(function(a, b) {
	//	return parseFloat(a.id) - parseFloat(b.id);
	//});
	
	// Update the view on the screen
	if (inventoryArray.length > 0) {
		
		// Remove the placeholder if inventory is no longer empty
		try {
			document.getElementById("inventory").removeChild(document.getElementById("inventory-placeholder"));
		} catch {
			console.log("Updating Inventory. No placeholder found in array.")
		}

		for (var k = 0; k < inventoryArray.length; k++) {
//			console.log("Updating Inventory. Loading from inventory to update screen:");
//			console.log(inventoryArray[k]);

			if (!!document.getElementById("inventory-item-" + inventoryArray[k].id)) {
				document.getElementById("inventory-item-" + inventoryArray[k].id + "-quantity").innerHTML = inventoryArray[k].quantity
			} else {
				inventoryContents = document.createElement('span');
				var inventoryContentsId = "inventory-item-" + inventoryArray[k].id;
				inventoryContents.setAttribute("id", inventoryContentsId)
				inventoryContents.innerHTML = "Name: " + inventoryArray[k].name + "<br>Quantity: <span id=\"inventory-item-" + inventoryArray[k].id + "-quantity\">" + inventoryArray[k].quantity + "</span><br>";
	
				// If you already have an item in your inventory, append a line break before the next one
				if (k > 0) {
					document.getElementById("inventory").appendChild(document.createElement('br'));
				}

				document.getElementById("inventory").appendChild(inventoryContents);

			}


		}
	} else {
		var inventoryContents = "You don't currently have any items!"
		document.getElementById("inventory").innerHTML = inventoryContents;
	}
}

function calculateCostToBuy(cost, quantity) {

	var costToReturn = cost * quantity;

	//for (var c = 0; c < quantity; c++) {
	//	costToReturn = costToReturn + (Math.floor(itemsForSale[i].cost * 1.1));
	//}

	/*for (var s = 0; s < itemsForSale.length; s++) {
		if (itemsForSale[s].id == itemId) {
			costToReturn = itemsForSale[s].cost * quantity;
		}
	}*/

	return costToReturn;
}

// Buying an item

function buyItem(itemId, quantity) {
	for (var i = 0; i < itemsForSale.length; i++) {
		if (itemsForSale[i].id == itemId) {
			var costToBuy = calculateCostToBuy(itemsForSale[i].cost, quantity);
			if (gameData.walletBalance >= costToBuy) {

				//gameData.walletBalance -= itemsForSale[i].cost * quantity;
				gameData.walletBalance -= costToBuy;
				document.getElementById("mikecoin-balance").innerHTML =  gameData.walletBalance;
				updateInventory(itemId, quantity);
				gameData.problemsPerClickTotal += itemsForSale[i].problemsPerClick;
				gameData.problemsPerSecondTotal += itemsForSale[i].problemsPerSecond;
				console.log("Buying Item. Now solving " + gameData.problemsPerSecondTotal + " problems per second.");
				updateEventLog("Bought 1 " + itemsForSale[i].name);

				// Update the price
				var newCost = Math.floor(itemsForSale[i].cost * 1.1);
				console.log("Buying Item. Updating cost of this item from " + itemsForSale[i].cost + " to " + newCost + ".");
				itemsForSale[i].cost = newCost;
				// Update price in store view
				document.getElementById("store-item-" + itemsForSale[i].id + "-cost").innerHTML = itemsForSale[i].cost;
				//updateStore();
			} else {
				console.log("Buying Item. Not enough money to purchase! You have " + gameData.walletBalance + " but you need " + itemsForSale[i].cost + ".");
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
	"<span>&nbsp;&nbsp;" + screen6 + "</span>" + "\n" +
	"<span>&nbsp;&nbsp;" + screen5 + "</span>" + "\n" +
	"<span>&nbsp;&nbsp;" + screen4 + "</span>" + "\n" +
	"<span>&nbsp;&nbsp;" + screen3 + "</span>" + "\n" +
	"<span>&nbsp;&nbsp;" + screen2 + "</span>" + "\n" +
	"<span><b>> " + screen1 + "</b></span>" + "\n";
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
		// Update the Market Cap to include your contributions
		gameData.marketCap += gameData.lifetimeBalance
		console.log("Solve Problem. Total Market Cap increased to " + gameData.marketCap)

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

// TODO: Make auto-solving work right
// Adapted from https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe#19772220

var stop = false;
var frameCount = 0;
var solutionsPerSecond, communityMembersPerSecond, problemSolvingInterval, communityGrowingInterval, startTime, now, then, elapsed;


// initialize the timer variables and start the animation
function changeRates(solutionsPerSecond) {
	problemSolvingInterval = 1000 / solutionsPerSecond;
	communityGrowingInterval = 1000 / communityMembersPerSecond;
	
    then = Date.now();
    startTime = then;
	solveProblemOnInterval();
	growCommunityOnInterval();
}

// Updates screen with solved problems
function solveProblemOnInterval() {

    // request another frame

    requestAnimationFrame(solveProblemOnInterval);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > problemSolvingInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % problemSolvingInterval);

		// Put your drawing code here
		solveProblem();

    }
}


function growCommunityOnInterval() {

    // request another frame

    requestAnimationFrame(growCommunityOnInterval);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > communityGrowingInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % communityGrowingInterval);

		// Put your drawing code here
		//growCommunity();
		console.log("Growing community!")

    }
}


var problemsToSolvePerSecond = gameData.problemsPerSecondTotal;

var stop = false
var mainGameLoop = window.setInterval(function() {
	if (gameData.problemsPerSecondTotal > problemsToSolvePerSecond) {
		console.log("Main Loop. Changing rate to solve " + gameData.problemsPerSecondTotal + " problems per second")
		changeRates(gameData.problemsPerSecondTotal);
		problemsToSolvePerSecond = gameData.problemsPerSecondTotal;
	}
}, 10)