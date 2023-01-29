//synchronous
var request = new XMLHttpRequest();
request.open('GET','data.txt',false);
request.send();
if(request.status === 200){
	console.log(request);
	document.writeln(request.responseText);
}
//asynchronous
var request = new XMLHttpRequest();
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request);
		document.writeln(request.responseText);
	}
}
request.send();
//Scripting for backwards compatibility
var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request);
		document.writeln(request.responseText);
	}
}
request.send();