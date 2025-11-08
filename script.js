// ✍️ Typing effect
function startTyping(text, callback, id = "typing-text") {
  const element = document.getElementById(id);
  element.innerHTML = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 80);
    } else if (callback) callback();
  }
  type();
}

// 🎆 Pink–Lavender Confetti (auto start)
function launchConfetti() {
  const colors = ["#f9c5d1", "#ffc8dd", "#cdb4db", "#ffafcc", "#bde0fe"];
  const duration = 2500;
  const end = Date.now() + duration;

  (function frame() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// 🎈 Balloons animation
function launchBalloons() {
  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor =
      ["#ffafcc", "#ffc8dd", "#cdb4db", "#bde0fe"][Math.floor(Math.random() * 4)];
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 6000);
  }
}

// 💗 Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.textContent = "💗";
  heart.classList.add("floating-heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 800);

// 💬 Pop-up love notes (for later pages)
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("heart")) {
    alert(e.target.dataset.note);
  }
});

// 🖼️ Simple slider controls (for photos page)
let currentSlide = 0;
function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
}
function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
function prevSlide() {
  const slides = document.querySelectorAll(".slide");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
// Typing effect
function startTyping(text, callback, elementId) {
  const element = document.getElementById(elementId);
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    } else if (callback) callback();
  }
  type();
}

// 🎈 Balloons
function launchBalloons() {
  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    const colors = ["#ff9ff3", "#ffb6c1", "#d8b4fe", "#fdb9fc", "#fff0f6"];
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 7000);
  }
}

// 💗 Floating Hearts
function launchFloatingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.textContent = "💗";
    heart.classList.add("floating-heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 400);
}

// Confetti
function launchConfetti() {
  const colors = ["#ffc8dd", "#ffafcc", "#bde0fe", "#cdb4db"];
  const duration = 2.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// Floating Hearts
function launchFloatingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.textContent = "💗";
    heart.classList.add("floating-heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 500);
}
