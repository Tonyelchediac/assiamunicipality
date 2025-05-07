document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const currentUrl = window.location.href;

    const navLinksData = [
        { url: "index.html", text: "رئيسية" },
        { url: "about.html", text: "عن البلدية" },
        { url: "#", text: "أخبارنا" },
        { url: "#", text: "صحة ورعاية إجتماعية" },
        { url: "#", text: "سياحة وثقافة" },
        { url: "#", text: "رياضة ونشاطات" },
        { url: "#", text: "تواصل" },
        { url: "#electronic-services", text: "خدمات إلكترونية" },
    ];

header.innerHTML = `
    <div class="container">
        <div class="logo">
            <h1>بلدية أسيا</h1>
        </div>
        <nav>
            <ul class="nav-links">
                ${navLinksData.map(link => `<li><a href="${link.url}">${link.text}</a></li>`).join("")}
            </ul>
            <div class="hamburger" id="hamburger">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </div>
`;

footer.innerHTML =` 
          <div class="container">
              <div class="footer-grid">
                  <div class="footer-col">
                      <h3>بلدية المدينة</h3>
                      <p>نعمل من أجل خدمتكم وتطوير مدينتنا لتكون مكاناً أفضل للعيش والعمل.</p>
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
                    ${navLinksData.map(link => `<li><a href="${link.url}">${link.text}</a></li>`).join("")}
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

    navLinksData.forEach(link => {
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

    document.querySelectorAll(".nav-links a").forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
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
    newsCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.querySelector("img").style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseleave", () => {
            card.querySelector("img").style.transform = "scale(1)";
        });
    });
});