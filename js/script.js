function interest() {
	// taking data input from html into js variables
	var amount1 = document.getElementById('amount_id').value;
	var year1 = document.getElementById('year_id').value;
	var rate1 = document.getElementById('rate_id').value;

	// changing into float 
	amount = parseFloat(amount1);
	year = parseInt(year1);
	rate = parseFloat(rate1);

	if (amount1 == "" || year1 == "" || rate1 == "") {
		document.getElementById('interesting').innerHTML = "NB: All fields are to be filled, please fill before clicking on calculate";
	}
	else{
		// initialization of variables
	var simple_interest = ((amount * year * rate)/100);

	// making the result 2 deci places and changing it to Sting
	var SI = String(simple_interest.toFixed(2));
	// alert(SI);

	// sending the result SI to the user
	document.getElementById('interesting').innerHTML = SI;
	}

	} 


	function reset() {
		// reseting the input box and interest result upon the click of a the reset button
		document.getElementById('amount_id').value = "";
		document.getElementById('year_id').value = "";
		document.getElementById('rate_id').value = "";
		document.getElementById('interesting').innerHTML = "";
	}
