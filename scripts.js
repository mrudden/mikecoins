// Mikecoin scripts!!
var walletBalance = 0;
var graphicsMultiplier = 1;

var num1;
var num2;
// Initialize boolean for click
var problemSolved = true;

// Event log
// TODO: store 5 events, pop and push, and fade older events in grey
.var eventLog = [];


$(document).ready(function(){
	var name = prompt("Is your name Mike? (Y/N)");
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