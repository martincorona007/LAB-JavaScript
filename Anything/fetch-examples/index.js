//Syntax
let promise = fetch(url, [options])
//example e1
let response = await fetch(url);

if (response.ok) {
  let json = await response.json();
} else {
  alert("Error", response.status);
}
//=======================================================
async function getGitHubData(){
  let data = await fetch('https://api.github.com/users/KrunaLathiya');

  let main = await data.json();
  console.log(main);
}
//=======================================================
const controller = new AbortController();
const { signal } = controller;
fetch("http://localhost:8000", { signal }).then(response => {
    console.log(`Request 1 is complete!`);
}).catch(e => {
    console.warn(`Fetch 1 error: ${e.message}`);
});

// Abort request
controller.abort();