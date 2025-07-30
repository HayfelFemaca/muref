// Carrusel de fondo del hero
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000); // cambia cada 5 segundos

document.addEventListener("DOMContentLoaded", () => {
  const lema = document.querySelector(".lema-texto");
  lema.style.opacity = 0;
  lema.style.transform = "translateY(20px)";

  setTimeout(() => {
    lema.style.transition = "opacity 1s ease, transform 1s ease";
    lema.style.opacity = 1;
    lema.style.transform = "translateY(0)";
  }, 200);
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

/* carrusel */ 

 document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const seccion3 = document.getElementById("seccion-3");
  let started = false;
  let animationId;
  let x = 0;

  function setupInfiniteScroll() {
    const items = Array.from(track.children);

    // Duplicar artículos para asegurar fluidez
    const totalClones = Math.ceil(window.innerWidth / track.offsetWidth) + 2;
    for (let i = 0; i < totalClones; i++) {
      items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
      });
    }

    const speed = 0.5;
    const totalWidth = track.scrollWidth;

    function scroll() {
      x += speed;

      // Reinicio invisible al llegar a la mitad (ciclo sin corte)
      if (x >= totalWidth / 2) {
        x = 0;
      }

      // Movimiento de izquierda a derecha
      track.style.transform = `translateX(-${x}px)`;
      animationId = requestAnimationFrame(scroll);
    }

    scroll(); // inicia la animación
  }

  function observeScrollStart() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          started = true;
          setupInfiniteScroll();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(seccion3);
  }

  observeScrollStart();
});



/*carrusel historia*/
  const track = document.querySelector('#sliderEspacios .slide-track');
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  let currentIndex = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  next.addEventListener('click', () => {
    if (currentIndex < track.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlide();
  });

  prev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = track.children.length - 1;
    }
    updateSlide();
  });



