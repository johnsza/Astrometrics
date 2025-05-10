const quotes = [
    "Live long and prosper.<br>- Spock, <em>Star Trek: The Original Series</em>",
    "Resistance is futile.<br>– The Borg, <em>Star Trek: The Next Generation</em>",
    "Engage.<br>– Captain Picard, <em>Star Trek: The Next Generation</em>",
    "Space… the final frontier.<br>– Opening monologue, <em>Star Trek: The Original Series</em>",
    "The needs of the many outweigh the needs of the few.<br>– Spock, <em>Star Trek II: The Wrath of Khan</em>",
    "There’s coffee in that nebula.<br>– Captain Janeway, <em>Star Trek: Voyager</em>",
    "You can use logic to justify almost anything. That's its power. And its flaw.<br>– Captain Janeway, <em>Star Trek: Voyager</em>",
    "Make it so.<br>– Captain Picard, <em>Star Trek: The Next Generation</em>",
    "Today is a good day to die.<br>– Worf, <em>Star Trek: The Next Generation</em>",
    "Fear exists for one purpose: to be conquered.<br>– Captain Janeway, <em>Star Trek: Voyager</em>",
    "Computer, file complaint under ‘gross incompetence’ and forward to Starfleet Command.<br>– Dr. Bashir, Star Trek: Deep Space Nine",
    "Ad Astra per Aspera.<br>– Number 1, <em>Star Trek: Strange New Worlds</em>",
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[randomIndex];
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  } 