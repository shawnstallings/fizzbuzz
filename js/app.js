$(function() {

	
	//Create the list of numbers 1 -100
	$("#go").on('click', function() {
	
		for (var number = 1; number < 101; number++) {
			$('#here').append('<p class="numb">' + number + '</p>');
		}
	
		$('.numb').each(function() {
			//make sure variable is a number with parseInt()
			var n = parseInt($(this).text());
				console.log(typeof n);
			
			//apply rules for numbers changed to words
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
	})	

	})
});
