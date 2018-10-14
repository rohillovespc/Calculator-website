"use strict";

function pounds() {
    
    let lbsresult = document.querySelector('#pounds-input').addEventListener('input',function(e) { 
        
        let lbs = e.target.value;
        document.querySelector("#kg-output").innerHTML= lbs/2.20462 + " Kg";
		document.querySelector("#gram-output").innerHTML=(lbs/2)*1000; + " Grams"
		document.querySelector("#ounce-output").innerHTML=lbs*16 + " Ounces";
    });};
        pounds();

function kg(){
	let kgresult = document.querySelector("#kg-input").addEventListener('input',function(e) {
		let kg = e.target.value;
		document.querySelector("#poundsKg-output").innerHTML= kg*2.20462 + " Pounds";
		document.querySelector("#gramKg-output").innerHTML= kg*1000 + " Grams";
		document.querySelector("#ounceKg-output").innerHTML= kg*35.274 + " Ounces";
		
		
	});
	
	
};
kg();



function ounce(){
	let ounceresult= document.querySelector("#ounce-input").addEventListener('input',function(e) {
				let ounce= e.target.value;
			document.querySelector("#poundOunce-output").innerHTML=ounce/16 + " Pounds";
	        document.querySelector("#gramOunce-output").innerHTML=ounce*28.3495 + " Grams";
	        document.querySelector("#kgOunce-output").innerHTML=ounce/35.274 + " Kg";

});
};
ounce();


function km() {
	var kmresult = document.querySelector("#km-input").addEventListener('input',function(e) {
		let km = e.target.value;
		document.querySelector("#kmTom-output").innerHTML=km*1000 + " m";
		document.querySelector("#kmToCm-output").innerHTML=km*100000 +" cm";
		document.querySelector("#kmToMM-output").innerHTML=km*1000000 + " mm";
	});
};
km();

function m() {
	var mresult = document.querySelector("#m-input").addEventListener('input',function(e) {
		let m = e.target.value;
		document.querySelector("#mToKm-output").innerHTML=m/1000 + " Km";
		document.querySelector("#mToCm-output").innerHTML=m*100 +" cm";
		document.querySelector("#mToMM-output").innerHTML=m*1000 + " mm";
	});
};
m();


function cm() {
	var cmresult = document.querySelector("#cm-input").addEventListener('input',function(e) {
		let cm = e.target.value;
		document.querySelector("#cmToKm-output").innerHTML=cm/100000 + " Km";
		document.querySelector("#cmTom-output").innerHTML=cm/100 +" m";
		document.querySelector("#cmToMM-output").innerHTML=cm*10 + " mm";
	});
};
cm();

function mm() {
	var mmresult = document.querySelector("#mm-input").addEventListener('input',function(e) {
		let mm = e.target.value;
		document.querySelector("#mmToKm-output").innerHTML=mm/1000000 + " Km";
		document.querySelector("#mmTom-output").innerHTML=mm/1000 +" m";
		document.querySelector("#mmToCm-output").innerHTML=mm/10 + " cmm";
	});
};
mm();

function hr() {
	var hrresult = document.querySelector("#hr-input").addEventListener('input',function(e) {
		let hr = e.target.value;
		document.querySelector("#hrToSec-output").innerHTML=hr*36000 +" seconds";
		document.querySelector("#hrToMin-output").innerHTML=hr*60 +" minutes";
		document.querySelector("#hrTodays-output").innerHTML=hr/24 +" days";
	});
};
hr();

function min() {
	var minresult = document.querySelector("#min-input").addEventListener('input',function(e) {
		let min = e.target.value;
		document.querySelector("#minToSec-output").innerHTML=min*60+" seconds";
		document.querySelector("#minToHr-output").innerHTML=min/60 +" hours";
		document.querySelector("#minToDays-output").innerHTML=min/1440 +" days";
	});
};
min();

function sec() {
	var secresult = document.querySelector("#sec-input").addEventListener('input',function(e) {
		let sec = e.target.value;
		document.querySelector("#secToMin-output").innerHTML=sec/60+" minute";
		document.querySelector("#secToHr-output").innerHTML=sec/3600 +" hours";
		document.querySelector("#secToDays-output").innerHTML=sec/86400 +" days";
	});
};
sec();


function day() {
	var dayresult = document.querySelector("#day-input").addEventListener('input',function(e) {
		let day = e.target.value;
		document.querySelector("#dayTohr-output").innerHTML=day*24 +" minute";
		document.querySelector("#dayToMin-output").innerHTML=day*1440 +" hours";
		document.querySelector("#dayToSec-output").innerHTML=day*86400 +" seconds";
	});
};
day();


function circleDiameter() {
	var radius =document.querySelector("#diameter-input");
	var calculate = document.querySelector("#calculate-button");
	function myFunction() {
		if(parseInt(radius.value,10)>0){
		document.querySelector("#diameter").innerHTML= "Diameter = " +parseInt(radius.value,10)*2+".";}
		else{
			document.querySelector("#diameter").innerHTML= "Please enter a number";
		}
	}
	calculate.onclick=myFunction;
};
circleDiameter();


function circumference() {
	var circum =document.querySelector("#circumr-input");
	var calculatecircum = document.querySelector("#circum-button");
	function myFunction() {
		if(parseInt(circum.value,10)>0){
		document.querySelector("#circumference").innerHTML= "Circumference = " +parseInt(circum.value,10)*2+".";}
		else{
			document.querySelector("#circumference").innerHTML= "Please enter a number";
		}
	}
	calculatecircum.onclick=myFunction;
};
circumference();

function arcOfCircle() {
	var arccirRadius =document.querySelector("#arcCircle-radius");
	var arccircleAngle= document.querySelector("#arcCircle-c")
	var calculatearcCircle = document.querySelector("#arcCircle-button");
	function myFunction() {
		if(parseInt(arccirRadius.value,10)>0){
		document.querySelector("#circle-arc").innerHTML= "Arc = " +(2*Math.PI*parseInt(arccirRadius.value))*(parseInt(arccircleAngle.value)/360)+".";}
		else{
			document.querySelector("#circle-arc").innerHTML= "Please enter a number";
		}
	}
	calculatearcCircle.onclick=myFunction;
};
arcOfCircle();



function conventionalTriangle() {
	var conBase = document.querySelector("#conventional-base");
	var conHeight = document.querySelector("#conventional-height");
	var calculateCon= document.querySelector("#conventional-button");
	
	function myFunction(e) {
		e.preventDefault;
		if(parseInt(conBase.value)>0) {
		document.querySelector("#conventional-para").innerHTML= "Area = " + 1/2*(parseInt(conHeight.value)*parseInt(conBase.value));	
			
		}
		else{
			document.querySelector("#conventional-para").innerHTML="Please input value greater than 0.";
		}
	}
	calculateCon.onclick=myFunction;
};

conventionalTriangle();

function sasTriangle() {
	var sasBase = document.querySelector("#sas-base");
	var sasHeight = document.querySelector("#sas-height");
	var sasAngle = document.querySelector("#sas-angle");
	var calculatesas= document.querySelector("#sas-button");
	
	function myFunction() {
		
		if(parseInt(sasBase.value)>0) {
		document.querySelector("#sas-para").innerHTML= "Area = " + 1/2*(parseInt(sasHeight.value)*parseInt(sasBase.value)*Math.sin(parseInt(sasAngle.value)));	
			console.log(Math.sin(90));
		}
		else{
			document.querySelector("#sas-para").innerHTML="Please input value greater than 0.";
		}
	}
	calculatesas.onclick=myFunction;
};

sasTriangle();





function heronsFromula() {
	let heronA = document.querySelector("#herons-A");
	let heronB = document.querySelector("#herons-B");
	let heronC = document.querySelector("#herons-C");
	
	var heronCalculate  = document.querySelector("#herons-calculate");
	
	function myFunction() {
		if (parseInt(heronA.value)>0) {
			let s = (parseFloat(heronA.value) + parseFloat(heronB.value) + parseFloat(heronC.value))/2;
			
			document.querySelector("#herons-para").innerHTML = "By Herons formula the area of triangle is: " + Math.sqrt(s*(s-parseInt(heronA.value))*(s-parseInt(heronB.value))*(s-parseInt(heronC.value))).toFixed(3);
			
		}
		else {
			document.querySelector("#herons-para").innerHTML = "Please enter the value";
		}
		
	};
	heronCalculate.onclick=myFunction;
};

heronsFromula();

function pythagoras() {
	var pythagorasA = document.querySelector("#pythagoras-1");
	var pythagorasB = document.querySelector("#pythagoras-2");
	var pythagorasC = document.querySelector("#pythagoras-3");
	var pythagorasCalculate= document.querySelector("#pythagoras-calculate");
	
	function myFunction() {
		if(Math.pow(parseInt(pythagorasA.value),2)+Math.pow(parseInt(pythagorasB.value),2) === Math.pow(parseInt(pythagorasC.value),2)) {
			document.querySelector("#pythagoras-para").innerHTML= "This is right triangle";
		}
		else{
			document.querySelector("#pythagoras-para").innerHTML= "This is not a right triangle";
		}
	}
	pythagorasCalculate.onclick=myFunction
}
pythagoras();


function squareArea(){
	var squareArea = document.querySelector("#square-Alength");
	var calculateAreaSquare = document.querySelector("#square-Acalculate");
	
	function myFunction(e) {
		e.preventDefault;
		document.querySelector("#square-Apara").innerHTML="Area of Square is " + Math.pow(parseInt(squareArea.value),2);
	}
	calculateAreaSquare.onclick=myFunction;
	
}
squareArea();


function squarePerimeter(){
	var squarePerimeter = document.querySelector("#square-Plength");
	var calculatePerimeterSquare = document.querySelector("#square-Pcalculate");
	
	function myFunction(e) {
		e.preventDefault;
		document.querySelector("#square-Ppara").innerHTML="Perimeter of Square is " + parseInt(squarePerimeter.value)*4;
	}
	calculatePerimeterSquare.onclick=myFunction;
	
}
squarePerimeter();

function squareDiagonal(){
	var squareDiagonal = document.querySelector("#square-Dlength");
	var calculateDiagonalSquare = document.querySelector("#square-Dcalculate");
	
	function myFunction(e) {
		e.preventDefault;
		document.querySelector("#square-Dpara").innerHTML="Diagonal of Square is " + parseInt(squareDiagonal.value)*Math.sqrt(2);
	}
	calculateDiagonalSquare.onclick=myFunction;
	
}
squareDiagonal();


function areaRectangle(){
	var rectangleAreaL = document.querySelector("#rectangle-Alength");
	var rectangleAreaB = document.querySelector("#rectangle-Abreadth");
	var calculateAreaRectanlge = document.querySelector("#rectanlge-Acalculate");
	
	function myFunction(e) {
		e.preventDefault;
		document.querySelector("#rectangle-Apara").innerHTML="Area of Rectangle is " + parseInt(rectangleAreaL.value)*parseInt(rectangleAreaB.value);
	}
	calculateAreaRectanlge.onclick=myFunction;
	
}
areaRectangle();

function PerimeterRectangle(){
	var rectanglePerimeterL = document.querySelector("#rectangle-Plength");
	var rectanglePerimeterB = document.querySelector("#rectangle-Pbreadth");
	var calculatePerimeterRectanlge = document.querySelector("#rectanlge-Pcalculate");
	
	function myFunction(e) {
		e.preventDefault;
		document.querySelector("#rectangle-Ppara").innerHTML="Area of Rectangle is " + 2*(parseInt(rectanglePerimeterL.value)+parseInt(rectanglePerimeterB.value));
	}
	calculatePerimeterRectanlge.onclick=myFunction;
	
}
PerimeterRectangle();

function DiagonalRectangle(){
	var rectangleDiagonalL = document.querySelector("#rectangle-Dlength");
	var rectangleDiagonalB = document.querySelector("#rectangle-Dbreadth");
	var calculateDiagonalRectanlge = document.querySelector("#rectanlge-Dcalculate");
	
	function myFunction(e) {
		e.preventDefault;
		document.querySelector("#rectangle-Dpara").innerHTML="Area of Rectangle is " + Math.sqrt(Math.pow(parseInt(rectangleDiagonalL.value),2)+Math.pow(parseInt(rectangleDiagonalB.value),2));
	}
	calculateDiagonalRectanlge.onclick=myFunction;
	
}
DiagonalRectangle();