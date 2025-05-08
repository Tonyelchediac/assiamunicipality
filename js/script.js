// header and footer code
// scroll smooth to the target section
// hamburger menu functionality

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const currentUrl = window.location.href;

  const navLinksData = [
    { url: "index.html", text: "رئيسية" },
    { url: "about.html", text: "عن البلدية" },
    { url: "news.html", text: "أخبارنا" },
    { url: "health.html", text: "صحة ورعاية إجتماعية" },
    { url: "tourismCulture.html", text: "سياحة وثقافة" },
    { url: "#", text: "رياضة ونشاطات" },
    { url: "#", text: "نظافة البيئة" },
    { url: "#", text: "تواصل" },
    { url: "#electronic-services", text: "خدمات إلكترونية" },
  ];

  header.innerHTML = `
    <div class="container">
        <div class="logo">
            <img src="images/lebanese cedar.png" alt="Logo" class="logo-img">
            <h1> الجمهورية اللبنانية - بلدية أسيا </h1>
        </div>
        <nav>
            <ul class="nav-links">
                ${navLinksData
                  .map(
                    (link) => `<li><a href="${link.url}">${link.text}</a></li>`
                  )
                  .join("")}    
                <li><div class="gtranslate_wrapper"></div></li>
            </ul>

            <div class="hamburger" id="hamburger">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </div>
`;

  window.gtranslateSettings = {
    default_language: "ar",
    native_language_names: true,
    detect_browser_language: true,
    languages: ["ar", "fr", "en"],
    wrapper_selector: ".gtranslate_wrapper",
  };

  const script = document.createElement("script");
  script.src = "https://cdn.gtranslate.net/widgets/latest/lc.js ";
  script.defer = true;
  document.body.appendChild(script);

  footer.innerHTML = ` 
          <div class="container">
              <div class="footer-grid">
                  <div class="footer-col">
                      <h3>بلدية أسيا</h3>
                      <p>نعمل من أجل خدمتكم وتطوير بلدتنا لتكون مكاناً أفضل للعيش والعمل.</p>
                      <div class="social-links">
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                          <a href="#"><i class="fab fa-x-twitter"></i></a>
                          <a href="#"><i class="fab fa-instagram"></i></a>
                          <a href="#"><i class="fab fa-youtube"></i></a>
                      </div>
                  </div>
                  <div class="footer-col">
                      <h3>روابط سريعة</h3>
                <ul>
                    ${navLinksData
                      .map(
                        (link) =>
                          `<li><a href="${link.url}">${link.text}</a></li>`
                      )
                      .join("")}
                </ul>
                  </div>
                  <div class="footer-col" id="electronic-services">
                      <h3>خدمات إلكترونية</h3>
                      <ul>
                          <li><a href="#">طلب وثيقة</a></li>
                          <li><a href="#">تقديم شكوى</a></li>
                          <li><a href="#">حجز موعد</a></li>
                      </ul>
                  </div>
                  <div class="footer-col">
                      <h3>النشرة البريدية</h3>
                      <p>اشترك في نشرتنا البريدية لتصلك آخر الأخبار والتحديثات</p>
                      <form>
                          <input type="email" placeholder="بريدك الإلكتروني">
                          <button type="submit">اشتراك</button>
                      </form>
                  </div>
              </div>
              <div class="footer-bottom">
                  <p>&copy; 2023 بلدية المدينة. جميع الحقوق محفوظة.</p>
                  <p>تصميم وتطوير قسم التكنولوجيا والمعلومات TX</p>
                  <div class="footer-links">
                      <a href="#">سياسة الخصوصية</a>
                      <a href="#">شروط الاستخدام</a>
                  </div>
              </div>
          </div>
  `;

  navLinksData.forEach((link) => {
    const navLink = header.querySelector(`a[href="${link.url}"]`);
    if (navLink && currentUrl.includes(link.url)) {
      navLink.classList.add("active");
    }
  });

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  const headerElem = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      headerElem.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
    } else {
      headerElem.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  });

  const newsCards = document.querySelectorAll(".news-card");
  newsCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.querySelector("img").style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
      card.querySelector("img").style.transform = "scale(1)";
    });
  });
});



// News Page Functionality
// News Filter Functionality
const filterBtns = document.querySelectorAll(".filter-btn");
const newsItems = document.querySelectorAll(".news-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    newsItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Search Functionality
const searchBox = document.querySelector(".search-box input");
searchBox.addEventListener("keyup", () => {
  const searchTerm = searchBox.value.toLowerCase();

  newsItems.forEach((item) => {
    const title = item.querySelector(".news-title").textContent.toLowerCase();
    const excerpt = item
      .querySelector(".news-excerpt")
      .textContent.toLowerCase();

    if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
