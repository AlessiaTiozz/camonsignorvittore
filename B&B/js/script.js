document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.getElementById('navLink');
  const openMenu = document.getElementById('open-btn');
  const closeMenu = document.getElementById('close-btn');

  openMenu.addEventListener('click', () => {
      navLinks.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
      navLinks.classList.remove('active');
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    observer
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});




   
window.addEventListener("scroll", function() {
  const cameras = document.querySelectorAll(".camera");
  
  cameras.forEach(function(camera) {
    const rect = camera.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      camera.classList.add("visible");
    }
  });
});



  AOS.init({
    duration: 2000, // durata animazione in ms
    once: true     // anima solo una volta
  });

    // Inizializza i18next con backend e lingua di default IT
    i18next
      .use(i18nextHttpBackend)
      .init({
        lng: 'it',                 // lingua di default
        fallbackLng: 'it',         // lingua di riserva
        backend: {
          loadPath: '/js/lang/{{lng}}.json'  // path corretto ai file JSON, senza slash finale
        }
      }, function(err, t) {
        if (err) return console.error(err);
        updateContent();
      });
  
    // Funzione per aggiornare il contenuto tradotto nel DOM
    function updateContent() {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = i18next.t(el.getAttribute('data-i18n'));
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.setAttribute('placeholder', i18next.t(el.getAttribute('data-i18n-placeholder')));
      });
    }
  
    // Funzione per cambiare lingua e aggiornare contenuti
    function changeLang(lang) {
      i18next.changeLanguage(lang, updateContent);
    }
  
    // Listener sulla select per cambiare lingua
    document.getElementById('languageSwitcher').addEventListener('change', function() {
      const selectedLang = this.value;
      changeLang(selectedLang);
    });
  
    // Sincronizza la select con la lingua corrente di i18next all'avvio
    i18next.on('initialized', () => {
      document.getElementById('languageSwitcher').value = i18next.language || 'it';
    });

    const slides = document.querySelectorAll('.camera-img .slide');
const prevBtn = document.querySelector('.camera-img .prev-btn');
const nextBtn = document.querySelector('.camera-img .next-btn');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length -1 : currentIndex - 1;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length -1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});

// Inizializza
showSlide(currentIndex);


