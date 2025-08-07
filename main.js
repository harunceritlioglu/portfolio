const scrollText = document.getElementById('scroll-text');

let currentText = "";

const getNewText = (scroll) => {
  if (scroll < 1000) return 'HELLO!';
  else if (scroll < 2000) return 'THIS IS';
  else return 'HARUN EMRE CERİTLİOĞLU.';
};

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const newText = getNewText(scroll);

  if (newText !== currentText) {
    scrollText.style.opacity = 0;

    setTimeout(() => {
      scrollText.textContent = newText;
      scrollText.style.opacity = 1;
      currentText = newText;
    }, 150); // 300ms animasyon süresi
  }
});

let lastScroll = window.scrollY;

  const container = document.getElementById("background-effects");

  const handleScrollEffect = (direction) => {
    const line = document.createElement("div");
    line.classList.add("background-line");

    const x = Math.random() * window.innerWidth;
    line.style.left = `${x}px`;

    if (direction === "up") {
      line.style.bottom = "0";
      line.style.animation = "move-up 1.8s ease-out forwards";
    } else {
      line.style.top = "0";
      line.style.animation = "move-down 1.8s ease-out forwards";
    }

    container.appendChild(line);

    line.addEventListener("animationend", () => {
      line.remove();
    });
  };

  let scrollDirection = "up";

  window.addEventListener("wheel", (e) => {
    scrollDirection = e.deltaY > 0 ? "up" : "down";
    handleScrollEffect(scrollDirection);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    const currentScroll = window.scrollY;
    scrollDirection = currentScroll > lastScroll ? "up" : "down";
    lastScroll = currentScroll;
    handleScrollEffect(scrollDirection);
  }, { passive: true });