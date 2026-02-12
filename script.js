const yesButton = document.getElementById("yesButton");

yesButton.addEventListener("click", () => {
  // Optionnel : petit message dans la console ou alerte
  // alert("Merci mon amour ❤️");

  // Générer plusieurs cœurs
  for (let i = 0; i < 25; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  // Position horizontale aléatoire
  const x = Math.random() * window.innerWidth;
  // Position verticale de départ (proche du bouton ou bas de l'écran)
  const y = window.innerHeight - 80 - Math.random() * 60;

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  // Taille aléatoire
  const size = 20 + Math.random() * 20;
  heart.style.fontSize = size + "px";

  // Légère rotation
  const rotate = (Math.random() - 0.5) * 40;
  heart.style.transform = `rotate(${rotate}deg)`;

  document.body.appendChild(heart);

  // Supprimer le cœur après l’animation
  setTimeout(() => {
    heart.remove();
  }, 2500);
}

function rainHearts() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.textContent = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.getElementById("heartRain").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(rainHearts, 400);

