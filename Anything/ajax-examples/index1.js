//get
var http = new XMLHttpRequest();

http.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Request has been sent, ' + this.response);
    }
};

http.open('GET', 'example.php?data=lemon', true);
http.send();
//post
var http = new XMLHttpRequest();

http.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Request has been sent, ' + this.response);
    }
};
http.open('POST', 'example.php', true);
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.send('fruit=lemon&color=yellow');