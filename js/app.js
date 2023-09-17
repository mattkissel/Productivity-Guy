const container = document.querySelector(".container")
const dangers = [
    { name: "Firstly, Fuck Walter", image: "imgs/danger0.png" },
  { name: "Fuck Walter", image: "imgs/danger1.png" },
  { name: "But like really Fuck Walter", image: "imgs/danger2.png" },
  { name: "I'll do it, i'll Fuck Walter", image: "imgs/danger3.png" },
  { name: "again, lets all Fuck Walter", image: "imgs/danger4.png" },
  { name: " you know what's pretty cool? Fuck Walter", image: "imgs/danger5.png" },
  { name: "I had already started to learn Xamarin. Fuck Walter", image: "imgs/danger6.png" },
  { name: "PWA? more like Fuck Walter he's a POS", image: "imgs/danger7.png" },
  { name: "guess who Fuck Walter", image: "imgs/danger9.png" },
]

const showDangers = () => {
    let output = ""
    dangers.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Fuck 'em</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }