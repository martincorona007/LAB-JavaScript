Pass the URL for your HTTP request into the fetch() method as an argument.
In a then() callback method, if the response.ok property is true, return the response.json(). Otherwise, return a rejected Promise.
In the next then() callback, you can work with the JSON response data. Use the catch() method to handle errors.


fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {

	// The API call was successful!
	if (response.ok) {
		return response.json();
	}

	// There was an error
	return Promise.reject(response);

}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
////====================================/other
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: 'title=' + encodeURIComponent('My awesome new article') + '&body=' + encodeURIComponent('This is the text of my article'),
	headers: {
		'Content-Type': 'application/json'
	},
	referrer: 'no-referrer'
}).then(function (response) {

	// The API call was successful!
	if (response.ok) {
		return response.json();
	}

	// There was an error
	return Promise.reject(response);

}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
===============================================================
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>

        <script>

            const url = 'https://raw.githubusercontent.com/benjamin-hg-marchant/datasets/main/modis_cloud_phase_time_series_analysis.json'

            fetch(url)
                .then( res => { return res.json(); } )
                .then( data => { console.log(data); } )
                .catch( err => { console.errror(error) } )

        </script>

    </body>
</html>