const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
function hasKey(key) {
	
	let val=Object.keys(sampleObject).includes(key)
	
return val;

  //   write your code here
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
