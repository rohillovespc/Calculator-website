"use strict";
/* jshint browser: true */

function simpleInterest() {
	var SiLoan = document.querySelector("#Si-Loan"),
		SiInterest = document.querySelector("#Si-interest"),
		siMonths = document.querySelector("#si-months"),
		SiCalculate = document.querySelector("#calculate-si");

	function myFunction() {

		document.querySelector("#si-para").innerHTML = "After " + parseInt(siMonths.value) + " months your interest would be $" + (parseInt(SiLoan.value) * (parseInt(SiInterest.value) / 100) * parseInt(siMonths.value)).toFixed(2);

	}

	SiCalculate.onclick = myFunction;
}
simpleInterest();


function emi() {
	var emiLoan = document.querySelector("#emi-loan");
	var emiInterest = document.querySelector("#emi-interest");
	var emiInstallment = document.querySelector("#emi-installment");
	var emiCalculate = document.querySelector("#calculate-emi");

	function myFunction() {
		document.querySelector("#emi-para").innerHTML = "Your EMI will be " + (parseInt(emiLoan.value) * (parseFloat(emiInterest.value) / 100) * Math.pow(1 + (parseFloat(emiInterest.value) / 100), parseInt(emiInstallment.value))) / (Math.pow(1 + (parseFloat(emiInterest.value)) / 100, parseInt(emiInstallment.value)) - 1).toFixed(2);
	}
	emiCalculate.onclick = myFunction;
}
emi();


function dtf() {
	var dtfRate = document.querySelector("#dtf-rate");
	var dtfCalculate = document.querySelector("#calculate-dtf");

	function myFunction() {
		document.querySelector("#dtf-para").innerHTML = "Your doubling time would be:" + (Math.log(2) / Math.log(1 + (parseInt(dtfRate.value)) / 100)).toFixed(0) + " years";
	}

	dtfCalculate.onclick = myFunction;
}
dtf();


function compound() {
	var compoundPrinciple = document.querySelector("#compound-principle");
	var compoundRate = document.querySelector("#compound-rate");
	var compoundPeriod = document.querySelector("#compound-period");
	var compoundCalculate = document.querySelector("#calculate-compound");

	function myFunction() {
		document.querySelector("#compound-para").innerHTML = "Your Compound Interest will be: " + parseInt(compoundPrinciple.value) * (Math.pow((1 + parseInt(compoundRate.value) / 100), parseInt(compoundPeriod.value)) - 1).toFixed(2);
	}
	compoundCalculate.onclick = myFunction;
}
compound();
