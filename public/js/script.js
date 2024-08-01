document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Navbar fixed
    window.onscroll = function() {
      console.log('Scroll event detected');
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;
  
      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        console.log('Added navbar-fixed class');
      } else {
        header.classList.remove('navbar-fixed');
        console.log('Removed navbar-fixed class');
      }
    };
  
    // Hamburger menu toggle
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
  
    if (hamburger) {
      console.log('Hamburger button found');
      hamburger.addEventListener('click', function() {
        console.log('Hamburger clicked');
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
      });
    } else {
      console.log('Hamburger button not found');
    }
  });

  // nav-active
document.addEventListener("DOMContentLoaded", function() {
  // Dapatkan URL saat ini
  const currentUrl = window.location.pathname.split("/").pop();

  // Dapatkan semua link di dalam navigasi
  const navLinks = document.querySelectorAll("nav ul li a");

  // Loop melalui setiap link
  navLinks.forEach(link => {
    // Dapatkan href dari link
    const linkHref = link.getAttribute("href");

    // Jika href sama dengan URL saat ini, tambahkan kelas 'active'
    if (linkHref === currentUrl) {
      link.classList.add("active");
    }
  });
});


//carousel
const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 1;

    function updateCarousel() {
        items.forEach((item, index) => {
            const img = item.querySelector('img');
            item.classList.remove('active', 'prev', 'next');
            if (index === currentIndex) {
                item.classList.add('active');
                img.classList.add('rounded-2xl');
            } else if (index === (currentIndex - 1 + items.length) % items.length) {
                item.classList.add('prev');
            } else if (index === (currentIndex + 1) % items.length) {
                item.classList.add('next');
            }
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex) {
                indicator.classList.add('active');
            }
        });
    }

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    indicators.forEach((indicator) => {
        indicator.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.getAttribute('data-index'));
            updateCarousel();
        });
    });

    updateCarousel();