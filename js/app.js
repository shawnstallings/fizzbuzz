$(function() {

	var str = prompt("Please enter a number.")
		

	//var str = $('#enter').val();
			
	if (str % 1 != 0) {
			var str = prompt("Please enter number (no decimals).");
    }	
				
	// created numbered list based on input number as stop point
	for (var number = 1; number <= str; number++) {
		console.log(number);
		$('#here').append('<p class="numb">' + number + '</p>');
		}
	
		$('.numb').each(function() {
			//make sure appended variable is a number
			var n = parseInt($(this).text());
				console.log(typeof n);
			
			//apply rules for numbers to change to words
			if (n % 3 === 0 && n % 5 === 0) {
				$(this).text("FizzBuzz");
			}

			else if (n % 3 === 0) {
				$(this).text("Fizz");
			}

			else if (n % 5 === 0) {
				$(this).text("Buzz");
			}

			else {
				$(this).text();
			}
		});	
});