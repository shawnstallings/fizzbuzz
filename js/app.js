$(function() {

	
	$('#go').on('click', function() {
		
	var input = $('#enter').val();
		console.log("Input=" + input);

	var numb = (+ input)
		console.log(typeof numb);

		if (numb == parseInt(numb)) {
			alert("Thank you");
		}
		else if (numb % 1 != 0) {
			$('#enter').val('');
			var numb = 0;
			alert("Please enter number without any decimals");
		}

		else {
			$('#enter').val('');
			alert("Please enter a number");
			
		}
		
		for (var number = 1; number <= numb; number++) {
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
