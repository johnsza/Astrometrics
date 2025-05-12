
//sets quotes for the home page quote generator
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

//Random quote generator fo home page
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[randomIndex];
}

// calls the function to open the navigation panel
function openNav() {
    console.log("openNav function called");
    document.getElementById("mySidenav").style.width = "250px";
}

// calls the function to close the navigation panel
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
} 

//Uses a warp effect to transition to the home page when clicked
function warpJump() {
    let warpOverlay = document.getElementById("warp-overlay");
    warpOverlay.classList.add("warp-effect");

    setTimeout(() => {
        window.location.href = "index.html"; 
    }, 600);
}

//interactive timeline for the chronology page
document.addEventListener("DOMContentLoaded", function () {
    const timelineContent = document.getElementById("timeline-content");

    const events = {
        "2151": "<strong>Star Trek: Enterprise</strong> The earliest series in the timeline, following Captain Jonathan Archer and the first warp-5 starship, the NX-01 Enterprise. A prequel exploring humanity’s first deep-space voyages and the founding of the Federation.",
        "2256": "Star Trek: Discovery Starts in the era just before The Original Series, with Michael Burnham navigating galactic conflicts and Starfleet mysteries.",
        "2259": "Star Trek: Strange New Worlds A return to classic Trek-style adventures, following Captain Pike, Spock, and the crew of the USS Enterprise before Captain Kirk takes command.",
        "2265": "Star Trek: The Original Series The legendary voyages of Captain Kirk, Spock, and the Enterprise, boldly going where no one has gone before.",
        "2269": "Star Trek: The Animated Series An animated continuation of The Original Series, with wild sci-fi concepts too ambitious for live action at the time.",
        "2364": "Star Trek: The Next Generation Set nearly a century after Kirk, this series follows Captain Picard’s Enterprise-D, filled with diplomacy, exploration, and existential dilemmas.",
        "2369": "Star Trek: Deep Space Nine Taking place alongside later seasons of The Next Generation, DS9 focuses on a space station near a wormhole, tackling war, politics, and moral conflicts.",
        "2371": "Star Trek: Voyager Captain Janeway and her crew are stranded 70,000 light-years from Earth, struggling to return home while encountering strange civilizations and dangerous foes in the Delta Quadrant.",
        "2379": "Star Trek: Lower Decks A comedic look at the lesser-known crew members of a mid-tier Federation ship. Set shortly after the events of Voyager and Deep Space Nine.",
        "2383": "Star Trek: Prodigy An animated series following alien teenagers who discover a derelict Starfleet vessel and learn what it means to be part of the Federation.",
        "2399": "Star Trek: Picard A sequel to The Next Generation, focusing on an aging Admiral Picard as he faces new personal and galactic crises.",
        "3300": "Star Trek: Discovery After a massive time jump, Discovery explores a far-future Federation, introducing new technologies, civilizations, and challenges.",
    };

    document.querySelectorAll(".year").forEach(button => {
        button.addEventListener("click", () => {
            timelineContent.innerHTML = `<p>${events[button.dataset.year]}</p>`;
        });
    });
});