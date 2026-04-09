// loader
const loaders = document.createElement("div");
loaders.className = "loader";
loaders.id = "loader";
loaders.innerHTML = `
    <img src="../images/assia municipality logo removed background.png" alt="Loader Image" />
`;
document.body.appendChild(loaders);
const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  let opacity = 1;
  const fadeOut = setInterval(() => {
    opacity -= 0.05;
    loader.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(fadeOut);
      loader.style.display = "none";
    }
  }, 10);
});

// Header HTML
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const currentUrl = window.location.href;

  const navLinksData = [
    { url: "index.html", text: "رئيسية" },
    { url: "about.html", text: "عن البلدية" },
    { url: "news.html", text: "آخر الأخبار" },
    { url: "health.html", text: "صحة ورعاية إجتماعية" },
    { url: "tourismCulture.html", text: "سياحة وثقافة" },
    { url: "events.html", text: "مهرجانات ونشاطات" },
    { url: "Sports.html", text: "رياضة" },
    { url: "contact.html", text: "تواصل" },
    { url: "complaints.html", text: "تقديم شكوى" },
  ];

  header.innerHTML = `
    <label class="navlink-open" id="navlink-open"></label>
    <div class="logo-img">
        <img src="../images/assia municipality logo removed background.png" alt="Logo">
    </div>
    <section id="header1">
        <div class="part1"></div>
        <div class="part2">الجمهورية اللبنانية - بلدية أسيا</div>
    </section>
    <section id="header2">
        <nav class="navlinks" id="navlinks">
            ${navLinksData
              .map((link) => `<a href="${link.url}">${link.text}</a>`)
              .join("")}
        </nav>
        <div class="hamburger" id="hamburger"><i class="fa-solid fa-bars"></i></div>
    </section>
  `;

  const hamburger = document.getElementById("hamburger");
  const navlinks = document.getElementById("navlinks");
  const navlinkOpen = document.getElementById("navlink-open");

  // const header2 = document.getElementById("header2");
  // window.addEventListener("scroll", function () {
  //   if (window.scrollY > 100) {
  //     header2.style.position = "fixed";
  //     header2.style.top = "0";
  //     header2.style.width = "100%";
  //     header2.style.zIndex = "2";
  //   } else {
  //     header2.style.position = "relative";
  //   }
  // });

  // Highlight current page
  navLinksData.forEach((link) => {
    const navLink = navlinks.querySelector(`a[href="${link.url}"]`);
    if (navLink && currentUrl.includes(link.url)) {
      navLink.classList.add("active");
    }
  });

  // Hamburger menu toggle
  hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("show");
    hamburger.innerHTML = navlinks.classList.contains("show")
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
    navlinkOpen.style.display = navlinks.classList.contains("show")
      ? "block"
      : "none";
  });

  // Overlay click to close
  navlinkOpen.addEventListener("click", () => {
    navlinks.classList.remove("show");
    navlinkOpen.style.display = "none";
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });

  // Close menu when clicking a nav link
  navlinks.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", () => {
      navlinks.classList.remove("show");
      navlinkOpen.style.display = "none";
      hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
});

// footer code
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("footer");
  footer.innerHTML = ` 
          <div class="container">
              <div class="footer-grid">
                  <div class="footer-col">
                      <h3>بلدية أسيا</h3>
                      <p>نعمل من أجل خدمتكم وتطوير بلدتنا لتكون مكاناً أفضل للعيش والعمل.</p>
                      <div class="social-links">
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                          <a href="#"><i class="fab fa-instagram"></i></a>
                      </div>
                  </div>
                  <div class="footer-col">
                      <h3>النشرة البريدية</h3>
                      <p>اشترك في نشرتنا البريدية لتصلك آخر الأخبار والتحديثات شهرياً</p>
                      <form>
                          <input type="email" placeholder="بريدك الإلكتروني">
                          <button class="btn" type="submit">اشتراك</button>
                      </form>
                  </div>
              </div>
              <div class="footer-bottom">
                  <p>&copy; <script>document.write(new Date().getFullYear());</script> بلدية أسيا. جميع الحقوق محفوظة.</p>
                  <div class="footer-links">
                    <a href="#" id="privacy-policy-link">سياسة الخصوصية</a>
                    <a href="#" id="terms-of-use-link">شروط الاستخدام</a>
                  </div>

              <!-- developed by chedilex -->
              <div style="direction: ltr;">
                      <p style=" color: rgba(255, 255, 255, 0.7); font-size: 0.9rem; display: flex; justify-content: center; align-items: center;">
                  Developed by
                  <a href="https://chedilex.pages.dev/" style="display: flex; align-items: center; text-decoration: none; color: rgba(255, 255, 255, 0.7);">
                      <img src="https://lh3.googleusercontent.com/u/0/d/1FcuIbslkUGQmfqVicOfyHkeB3dlJ16v5" alt="chedix logo" style="height: 25px;">
                      <span style="color: rgba(255, 255, 255, 0.7);">Chedilex</span>
                  </a>
                      </p>
              </div>

            </div>
          </div>
  `;
});

// JSON file news reading
fetch("json/articles.json")
  .then((res) => res.json())
  .then((data) => {
    const section = document.getElementById("news-section");
    section.innerHTML = "";
    data.news.slice(0, 3).forEach((article) => {
      const div = document.createElement("div");
      div.className = "article-card";
      div.innerHTML = `
      <img src="${article.image}" alt="">
      <h3>${article.title}</h3>
    `;
      div.onclick = () => {
        window.location.href = `article.html?id=${article.id}`;
      };
      section.appendChild(div);
    });
  })
  .catch((err) => console.error("JSON ERROR:", err));

// back to top button
document.addEventListener("DOMContentLoaded", function () {
  const btt = document.createElement("div");
  btt.className = "back-to-top";
  btt.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;

  document.body.appendChild(btt);
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      btt.style.display = "flex";
    } else {
      btt.style.display = "none";
    }
  });

  // Scroll to top on click
  btt.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    const answer = question.nextElementSibling;

    // Close other items
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-answer").style.maxHeight = null;
        otherItem.querySelector(".faq-question i").className =
          "fas fa-chevron-down";
      }
    });

    // Toggle current item
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      question.querySelector("i").className = "fas fa-chevron-up";
    } else {
      answer.style.maxHeight = null;
      question.querySelector("i").className = "fas fa-chevron-down";
    }
  });
});
