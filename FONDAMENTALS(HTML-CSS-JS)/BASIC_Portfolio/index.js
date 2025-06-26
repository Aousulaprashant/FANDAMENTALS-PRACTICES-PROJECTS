const toggle = document.getElementById("togglBnt");

toggle.addEventListener("click", function () {
  document.body.classList.toggle("darkMode");
  toggle.textContent = document.body.classList.contains("darkMode")
    ? "☀️"
    : "🌙";
});

const phrases = [
  "Full Stack Developer",
  "Problem Solver",
  "MERN Stack",
  "AI/ML Enthusiast",
];

let typeIdx = 0;
let letterIdx = 0;
let isDel = false;

const typeWriter = document.getElementById("typewriter-text");

function type() {
  const currPhrase = phrases[typeIdx];

  // Display typed portion of the current phrase
  typeWriter.textContent = currPhrase.substring(0, letterIdx);

  if (!isDel && letterIdx < currPhrase.length) {
    letterIdx++;
    setTimeout(type, 100);
  } else if (isDel && letterIdx > 0) {
    letterIdx--;
    setTimeout(type, 50);
  } else {
    // Phrase complete or deleted, change state
    if (!isDel) {
      isDel = true;
      setTimeout(type, 1000); // Pause before deleting
    } else {
      isDel = false;
      typeIdx = (typeIdx + 1) % phrases.length; // Move to next phrase
      setTimeout(type, 500); // Pause before typing next phrase
    }
  }
}

type();
