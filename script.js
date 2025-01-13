const waves = document.querySelectorAll('.wave');

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollX;

  waves.forEach((wave, index) => {
    const speed = (index + 1) * 0.5;
    wave.style.transform = `translateX(${scrollPosition * speed * -0.5}px)`;
  });
});
