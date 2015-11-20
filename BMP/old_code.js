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
