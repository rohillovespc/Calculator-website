'use strict';


function CalculateBmi() {
	var bmiMass = document.querySelector("#bmi-mass"),
		bmiHeight = document.querySelector("#bmi-height"),
		bmiCalculate = document.querySelector("#calculate-bmi");


	function myFunction() {
		document.querySelector("#bmi-para").innerHTML = "Your Body Mass Index is :- " + ((parseInt(bmiMass.value) / Math.pow(parseFloat(bmiHeight.value), 2)).toFixed(2));
	}
	bmiCalculate.onclick = myFunction;
}
CalculateBmi();

/*function calories() {
	var calorieMass = document.querySelector("#calorie-mass"),
		calorieHeight = document.querySelector("#calorie-height"),
		calorieCalculate = document.querySelector("#calculate-calorie"),
		genderSelection = document.querySelector("#gender"),
		calorieAge = document.querySelector("#calorie-age");


	function myFunction() {
		if (genderSelection === "male") {

			document.querySelector("#calorie-para").innerHTML = "Your Body Mass Index is :- " + ((10 * parseInt(calorieMass.value)) + (6.25 * parseFloat(calorieHeight.value) - 5) * (parseInt(calorieAge.value) + 5)).toFixed(2);

		} else if (genderSelection === "female") {
			document.querySelector("#calorie-para").innerHTML = "Your Body Mass Index is :- " + ((10 * parseInt(calorieMass.value)) + (6.25 * parseFloat(calorieHeight.value) - 5) * (parseInt(calorieAge.value) - 161)).toFixed(2);
		}


	}
	calorieCalculate.onclick = myFunction;
}

calories();*/

function leanBodyMassMale() {
	var maleLbmheight = document.querySelector("#lbm1-height");
	var maleLbmweight = document.querySelector("#lbm1-weight");
	var calculateMaleLbm = document.querySelector("#calculate-maleLbm");

	function myFunction() {
		document.querySelector("#lbm1-para").innerHTML = "Your lean body mass is: " + ((0.467 * parseInt(maleLbmweight.value)) + (0.267 * parseInt(maleLbmheight.value)) - 19.2).toFixed(2) + " lbs";
	}

	calculateMaleLbm.onclick = myFunction;
}

leanBodyMassMale();

function leanBodyMassFemale() {
	var maleLbmheight = document.querySelector("#lbm2-height");
	var maleLbmweight = document.querySelector("#lbm2-weight");
	var calculateFemaleLbm = document.querySelector("#calculate-femaleLbm");

	function myFunction() {
		document.querySelector("#lbm2-para").innerHTML = "Your lean body mass is: " + ((0.252 * parseInt(femaleLbmweight.value)) + (0.473 * parseInt(femaleLbmheight.value)) - 48.3).toFixed(2) + " lbs";
	}

	calculateFemaleLbm.onclick = myFunction;
}

leanBodyMassFemale();


function basalMetablicRateMen () {
	var malebmrheight = document.querySelector("#bmr1-height");
	var malebmrweight = document.querySelector("#bmr1-weight");
	var calculatemalebmr = document.querySelector("#calculate-malebmr");
	var malebmrage        = document.querySelector("#bmr1-age")

	function myFunction() {
		document.querySelector("#bmr1-para").innerHTML = "Your BMR is: " + (10*parseInt(malebmrweight.value)+6.25*parseInt(malebmrheight.value) -5*parseInt(malebmrage.value)+5  );
	}

	calculatemalebmr.onclick = myFunction;
} 
basalMetablicRateMen();


function basalMetablicRateWomen () {
	var femalebmrheight = document.querySelector("#bmr2-height");
	var femalebmrweight = document.querySelector("#bmr2-weight");
	var calculatefemalebmr = document.querySelector("#calculate-femalebmr");
	var femalebmrage        = document.querySelector("#bmr2-age")

	function myFunction() {
		document.querySelector("#bmr2-para").innerHTML = "Your BMR is: " + (10*parseInt(femalebmrweight.value)+6.25*parseInt(femalebmrheight.value) -5*parseInt(femalebmrage.value)-161  );
	}

	calculatefemalebmr.onclick = myFunction;
} 
basalMetablicRateWomen();



