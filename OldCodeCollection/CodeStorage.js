$('QID148').style.display = 'none'; // How to get the QID?

Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place Your Javascript Below This Line*/
	var id = $('participantID0').innerHTML; //.innerHTML needs check
	var booleanValue = id % 4;
	
	$('QR~QID160~1').value = booleanValue; // When to use '~'

});

var value = (1.23456).toFixed(2); // value ← 1.23

sliderInput("QID77", "QID78", "QID153", "5ftSeed", this); // component "slider" related


// Large piece -- need to walk through
Qualtrics.SurveyEngine.addOnload(function()
{	
	
	// if user selects "no" reset values
	this.questionclick = function(event,element)
	{
		if(element.id == 'QR~QID98~2' || element.id == 'QR~QID98~3'){
			$('QR~QID98~1~TEXT').value = '';
			var input = $('QR~QID98~1~TEXT');
			updateHTML(input, "PoultryHouse", "QID46", "QID106");
		}
	}
	
	jQuery('#QR\\~QID98\\~1\\~TEXT').on('propertychange keyup input paste', function(){
		var numberOfHouses = $('QR~QID105~1').value;
		numberOfHouses = numberOfHouses.replace(/,/g, '');
		numberOfHouses = numberOfHouses.replace(/\s/g, '');
		numberOfHouses = numberOfHouses.replace(/[^0-9\.]+/g, '');
		if(isNaN(numberOfHouses))
			numberOfHouses = 0;
		var sqFt = $('QR~QID98~1~TEXT').value;
		sqFt = sqFt.replace(/,/g, '');
		sqFt = sqFt.replace(/\s/g, '');
		sqFt = sqFt.replace(/[^0-9\.]+/g, '');
		if(isNaN(sqFt))
			sqFt = 0;
		var input = parseFloat(numberOfHouses) * parseFloat(sqFt);
		if(isNaN(input))
			input = 0;
		updateHTML(input, "PoultryHouse", "QID46", "QID106");
	});
});

// Large piece -- need to walk through
Qualtrics.SurveyEngine.addOnload(function()
{	
	var initValue = 0;
	var input1 = 'QID105';
	var input2 = 'QID98';
	var sliderID = 'QID46';
	var resultsID = 'QID106';
	
	// Fix Slider Labels
	var newElement = '<table role="presentation" id="customLabel" style="width:100%" class="LabelDescriptions">\
							<tbody>\
								<tr class="LabelCount1">\
									<td class="LightText Last" width="100%"><label>Bid %</label></td>\
								</tr>\
							</tbody>\
						</table>';
	jQuery('#' + sliderID + '\\~1\\~ResultsTd').prepend(newElement);
	jQuery('#' + sliderID + '\\~1\\~result').addClass('sliderInput');
	
	// initialize slider value on survey
	if(!parseInt($('QR~' + resultsID + '~5').value)){
		$(sliderID + '~1~result').value = initValue;
	}
	else{
		$(sliderID + '~1~result').value = $('QR~' + resultsID + '~5').value;
	}
	
	
	// Store the starting percent in the results, but only once.
	if($('QR~' + resultsID + '~4').value != '')
		jQuery('#QR~' + resultsID + '~4 :input').prop("disabled", true);
	else{
		$('QR~' + resultsID + '~4').value = initValue;
		$('QR~' + resultsID + '~5').value = initValue;
	}
	
	var sliderValuePoultryHouse = "";
	setInterval(checkSliderPoultryHouse, .5);
	
	function checkSliderPoultryHouse() {
		
		
		var currentSliderValue = $(sliderID + '~1~result').value;
		
		if (!currentSliderValue){
			currentSliderValue = 0;
		}
		else{
			// Store it as Ending Percent in results.
			$('QR~' + resultsID + '~5').value = $(sliderID + '~1~result').value;
		}
		
		// updating values on slider change
		if (currentSliderValue != sliderValuePoultryHouse) {
			sliderValuePoultryHouse = currentSliderValue;
			var numberOfHouses = $('QR~' + input1 + '~1').value;
			var sqFt = $('QR~' + input2 + '~1~TEXT').value;
			sqFt = sqFt.replace(/,/g, '');
			var input = parseFloat(numberOfHouses) * parseFloat(sqFt);
			updateHTML(input, "PoultryHouse", sliderID, resultsID);
			
		}
	}
	
	createResultsHTML(sliderID, 'PoultryHouse');
});

// Large piece -- need to walk through
Qualtrics.SurveyEngine.addOnload(function()
{
		this.questionclick = function(event,element)
		{
			// disable checkboxes if no bodies selected
			if(element.id == 'QR~QID14~6'){
				if(jQuery('#QR\\~QID14\\~6').is(':checked')){
					disable('1');
					disable('7');
					disable('2');
					disable('3');
					disable('4');
					disable('5');
					jQuery('#QR\\~QID14\\~5\\~TEXT').prop('disabled', true).prop('value', '');
				}
				else{
					enable('1');
					enable('7');
					enable('2');
					enable('3');
					enable('4');
					enable('5');
					jQuery('#QR\\~QID14\\~5\\~TEXT').prop('disabled', false);
				}
			}
		}
	
	function disable(id){
		jQuery('#QR\\~QID14\\~' + id).prop('checked', false);
		jQuery('#QR\\~QID14\\~' + id).prop('disabled', true);
	}
	
	function enable(id){
		jQuery('#QR\\~QID14\\~' + id).prop('disabled', false);
	}

});

// Large piece -- need to walk through
Qualtrics.SurveyEngine.addOnload(function()
{
	if($('QR~QID155~1').value == ''){
		function randomNumbers(spanID, baseValue, resultsID){
			var variations = new Array(0, .1, .2, .3, .4, -.1, -.2, -.3, -.4);
			
			var newValue = baseValue + (baseValue * variations[Math.floor((Math.random()*variations.length))]);
			$(spanID).innerHTML = Math.round(newValue);
			$(resultsID).value = Math.round(newValue);
		}
		
		randomNumbers('tillageCropping', 120, 'QR~QID155~1');
		randomNumbers('bufferTillage', 170, 'QR~QID155~2');
		randomNumbers('cropBuffer', 175, 'QR~QID155~3');
		randomNumbers('cropBufferTillage', 205, 'QR~QID155~4');
	}
	else{
		function displayNumbers(spanID, displayValue){
			$(spanID).innerHTML = displayValue;
		}
		
		displayNumbers('tillageCropping', $('QR~QID155~1').value);
		displayNumbers('bufferTillage', $('QR~QID155~2').value);
		displayNumbers('cropBuffer', $('QR~QID155~3').value);
		displayNumbers('cropBufferTillage', $('QR~QID155~4').value);
		
	}

});

// Large piece -- need to walk through
Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place Your Javascript Below This Line*/
	var curQuestionID = this.getQuestionInfo().QuestionID;
	$(curQuestionID).style.display = 'none';
	var val = Math.floor(Math.random() * 6);
	if(val == 2)
		val = Math.floor(Math.random() * 6);
	//val = 6;
	Qualtrics.SurveyEngine.setEmbeddedData("number", val);
	$('QR~' + curQuestionID).value = Qualtrics.SurveyEngine.getEmbeddedData("number");
	//jQuery('#chosen_thingy').html();
});

// Large piece -- need to walk through
Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place Your Javascript Below This Line*/

	var curQuestionID=this.getQuestionInfo().QuestionID;
	$(curQuestionID).style.display='none';
	
	//var chips_1 = 4;
	//var chips_2 = 5;
	//var chips_3 = 6;
	
	var chips_1 = (Math.random() * 5 + 1).toFixed(0);
	var chips_2 = (Math.random() * 5 + 1).toFixed(0);
	var chips_3 = (Math.random() * 5 + 1).toFixed(0);
	
	Qualtrics.SurveyEngine.setEmbeddedData("bidding_chips_1", chips_1);
	Qualtrics.SurveyEngine.setEmbeddedData("bidding_chips_2", chips_2);
	Qualtrics.SurveyEngine.setEmbeddedData("bidding_chips_3", chips_3);
	
	$('QR~' + curQuestionID + '~1').value = Qualtrics.SurveyEngine.getEmbeddedData("bidding_chips_1");
	$('QR~' + curQuestionID + '~2').value = Qualtrics.SurveyEngine.getEmbeddedData("bidding_chips_2");
	$('QR~' + curQuestionID + '~3').value = Qualtrics.SurveyEngine.getEmbeddedData("bidding_chips_3");
	
});

Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place Your Javascript Below This Line*/
	var chips1 = Qualtrics.SurveyEngine.getEmbeddedData("bidding_chips_1");
	jQuery('.bidding_price_chips_1').html(chips1);
});

Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place Your Javascript Below This Line*/
	var number = Qualtrics.SurveyEngine.getEmbeddedData("number") + 1;
	jQuery('#number').html(number);
	jQuery('#viewcontext').click(function(event) {
		jQuery('#context0').removeClass('hidden');
		if(number==1) {
			jQuery('#context1').removeClass('hidden');
		}
		if(number==2) {
			jQuery('#context2').removeClass('hidden');
		}
		if(number==3) {
			jQuery('#context3').removeClass('hidden');
		}
		if(number==4) {
			jQuery('#context4').removeClass('hidden');
		}
		if(number==5) {
			jQuery('#context5').removeClass('hidden');
		}
		if(number==6) {
			jQuery('#context6').removeClass('hidden');
		}
	});
});

<span id="context0" class="hidden">You have rolled the number: <span id="number"></span>. </span>
<span id="context1" class="hidden"><br><br>Chips sample 1 is binding.</span>
<span id="context2" class="hidden"><br><br>Chips sample 2 is binding.</span>
<span id="context3" class="hidden"><br><br>Chips sample 3 is binding.</span>
<span id="context4" class="hidden"><br><br>Beer sample A is binding.</span>
<span id="context5" class="hidden"><br><br>Beer sample B is binding.</span>
<span id="context6" class="hidden"><br><br>Beer sample C is binding.</span>

Qualtrics.SurveyEngine.addOnload(function()
{	
	
	// if user selects "no" reset values
	this.questionclick = function(event,element)
	{
		if(element.id == 'QR~QID98~2' || element.id == 'QR~QID98~3'){
			$('QR~QID98~1~TEXT').value = '';
			var input = $('QR~QID98~1~TEXT');
			updateHTML(input, "PoultryHouse", "QID46", "QID106");
		}
	}
	
	jQuery('#QR\\~QID98\\~1\\~TEXT').on('propertychange keyup input paste', function(){
		var numberOfHouses = $('QR~QID105~1').value;
		numberOfHouses = numberOfHouses.replace(/,/g, '');
		numberOfHouses = numberOfHouses.replace(/\s/g, '');
		numberOfHouses = numberOfHouses.replace(/[^0-9\.]+/g, '');
		if(isNaN(numberOfHouses))
			numberOfHouses = 0;
		var sqFt = $('QR~QID98~1~TEXT').value;
		sqFt = sqFt.replace(/,/g, '');
		sqFt = sqFt.replace(/\s/g, '');
		sqFt = sqFt.replace(/[^0-9\.]+/g, '');
		if(isNaN(sqFt))
			sqFt = 0;
		var input = parseFloat(numberOfHouses) * parseFloat(sqFt);
		if(isNaN(input))
			input = 0;
		updateHTML(input, "PoultryHouse", "QID46", "QID106");
	});
});

Qualtrics.SurveyEngine.addOnload(function()
{
	if($('QR~QID155~1').value == ''){
		function randomNumbers(spanID, baseValue, resultsID){
			var variations = new Array(0, .1, .2, .3, .4, -.1, -.2, -.3, -.4);
			
			var newValue = baseValue + (baseValue * variations[Math.floor((Math.random()*variations.length))]);
			$(spanID).innerHTML = Math.round(newValue);
			$(resultsID).value = Math.round(newValue);
		}
		
		randomNumbers('tillageCropping', 120, 'QR~QID155~1');
		randomNumbers('bufferTillage', 170, 'QR~QID155~2');
		randomNumbers('cropBuffer', 175, 'QR~QID155~3');
		randomNumbers('cropBufferTillage', 205, 'QR~QID155~4');
	}
	else{
		function displayNumbers(spanID, displayValue){
			$(spanID).innerHTML = displayValue;
		}
		
		displayNumbers('tillageCropping', $('QR~QID155~1').value);
		displayNumbers('bufferTillage', $('QR~QID155~2').value);
		displayNumbers('cropBuffer', $('QR~QID155~3').value);
		displayNumbers('cropBufferTillage', $('QR~QID155~4').value);
		
	}

});

// Complicated Structure; Need Clear Up 
Qualtrics.SurveyEngine.addOnload(function()
{
	if($('QR~QID155~1').value == ''){
		function randomNumbers(spanID, baseValue, resultsID){
			var variations = new Array(0, .1, .2, .3, .4, -.1, -.2, -.3, -.4);
			
			var newValue = baseValue + (baseValue * variations[Math.floor((Math.random()*variations.length))]);
			$(spanID).innerHTML = Math.round(newValue);
			$(resultsID).value = Math.round(newValue);
		}
		
		randomNumbers('tillageCropping', 120, 'QR~QID155~1');
		randomNumbers('bufferTillage', 170, 'QR~QID155~2');
		randomNumbers('cropBuffer', 175, 'QR~QID155~3');
		randomNumbers('cropBufferTillage', 205, 'QR~QID155~4');
	}
	else{
		function displayNumbers(spanID, displayValue){
			$(spanID).innerHTML = displayValue;
		}
		
		displayNumbers('tillageCropping', $('QR~QID155~1').value);
		displayNumbers('bufferTillage', $('QR~QID155~2').value);
		displayNumbers('cropBuffer', $('QR~QID155~3').value);
		displayNumbers('cropBufferTillage', $('QR~QID155~4').value);
		
	}

});
