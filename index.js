function addinputs() {
    var currTotal = document.getElementById("Total").innerHTML;
    if (isNaN(currTotal)) {
        currTotal = 0;
    }
var myInput = document.getElementById("myinput").value;

var newTotal = +myInput + +currTotal;

document.getElementById("Total").innerHTML = newTotal;

}

function MyFunction() {
    txt1 = document.getElementById("customorder").value;
    document.getElementById("customorder1").innerHTML = txt1; 
    }
   
  var myString = document.getElementById("order").value;
	var Order = myString.split(",");
  
  for (var i=0; i<Order.length; i++) {
		Order[i] = Order[i].trim();

		console.log(Order[i]);
	}
}

function CL() {
    console.log("CL");
    document.getElementById("Total").innerHTML = "0";

}
  