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
    { url: "news.html", text: "آخر الاخبار" },
    { url: "health.html", text: "صحة ورعاية إجتماعية" },
    { url: "tourismCulture.html", text: "سياحة وثقافة" },
    { url: "festivals.html", text: "مهرجانات ونشاطات" },
    { url: "SportsActivities.html", text: "رياضة ونشاطاتها" },
    { url: "environmentCleanliness.html", text: "نظافة البيئة" },
    { url: "contact.html", text: "تواصل" },
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
    <div id="overlay"></div>
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
                  <a href="#" id="privacy-policy-link">سياسة الخصوصية</a>
                  <a href="#" id="terms-of-use-link">شروط الاستخدام</a>
                  </div>
              </div>
          </div>
  `;

  navLinksData.forEach((link) => {
    const navLink = header.querySelector(`a[href="${link.url}"]`);
    if (navLink && currentUrl.includes(link.url)) {
      navLink.classList.add("active");
      document.getElementById("overlay").classList.remove("active");
      document.getElementById("header").classList.remove("active");
    }
  });

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
  });

  overlay.addEventListener("click", function () {
    navLinks.classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  });

  document.querySelectorAll(".nav-links a").forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
      document.getElementById("overlay").classList.remove("active");
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
});

// privacy policy and terms of use custom alert code
document.addEventListener("DOMContentLoaded", function () {
  const styles = `
    .custom-modal {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      padding: 10px;
    }
    .custom-modal-content {
      background: #fff;
      color: #000;
      padding: 20px;
      border-radius: 12px;
      width: 100%;
      max-width: 600px;
      max-height: 90dvh;
      overflow-y: auto;
      direction: rtl;
      text-align: right;
      font-family: 'Arial', sans-serif;
      line-height: 1.8;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    .custom-modal-content h2 {
      margin-top: 0;
      font-size: 1.5rem;
    }
    .custom-modal-content h3 {
      font-size: 1.2rem;
      margin-top: 1em;
    }
    .custom-modal-content p {
      font-size: 1rem;
      margin: 0.5em 0;
    }
    .custom-modal-content a {
      color: #3498db;
      text-decoration: none;
    }
    .custom-modal-content a:hover {
      text-decoration: underline;
    }
    .custom-modal-content button {
      margin-top: 20px;
      padding: 12px 20px;
      background-color: #3498db;
      border: none;
      color: white;
      font-size: 1rem;
      border-radius: 6px;
      cursor: pointer;
      width: 100%;
      max-width: 150px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      transition: transform 0.3s ease;
    }
    .custom-modal-content button:hover {
      transform: scale(1.05);
    }
    @media (max-width: 992px) {
      .custom-modal-content {
        margin: 10px;
        padding: 15px;
        font-size: 0.95rem;
      }
      .custom-modal-content button {
        font-size: 0.95rem;
        padding: 10px;
      }
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  function createModal(id, title, content) {
    if (document.getElementById(id)) return;

    const modal = document.createElement("div");
    modal.id = id;
    modal.className = "custom-modal";
    modal.innerHTML = `
      <div class="custom-modal-content">
        <h2>${title}</h2>
        ${content}
        <button id="${id}-close">فهمت</button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById(`${id}-close`).addEventListener("click", () => {
      modal.remove();
    });
  }

  const privacyContent = `
        <p>تحديث أخر في : 5/15/2025</p>
        <p>شكرًا لزيارتكم لموقعنا. نحن نولي اهتمامًا كبيرًا بخصوصية زوارنا. يرجى قراءة سياسة الخصوصية هذه بعناية لفهم كيفية جمعنا واستخدامنا وحماية معلوماتكم الشخصية.</p>
        <h3>المعلومات التي نجمعها</h3>
        <p>عند زيارتكم لموقعنا، قد نقوم بجمع بعض المعلومات الشخصية التي تقدمونها بشكل طوعي. يمكن أن تشمل هذه المعلومات الاسم، البريد الإلكتروني، عنوان الإنترنت (IP)، المتصفح الذي تستخدمونه، وغيرها من المعلومات التي تساعدنا في تحسين تجربتكم على الموقع.</p>
        <h3>كيف نستخدم معلوماتكم</h3>
        <p>نحن نستخدم المعلومات التي نجمعها لفهم اهتماماتكم وتحسين خدماتنا. قد نستخدم المعلومات أيضًا للاتصال بكم بشأن منتجات وخدمات جديدة، أو لأغراض تسويقية أخرى تعتبر ذات صلة.</p>
        <h3>مشاركة المعلومات مع الآخرين</h3>
        <p>نحن لا نبيع أو نتاجر بمعلوماتكم الشخصية لأطراف ثالثة. قد نشارك المعلومات مع الشركاء الموثوق بهم لتحسين خدماتنا وتخصيص تجربتكم.</p>
        <h3>حقوقكم</h3>
        <p>لديكم الحق في الوصول إلى المعلومات التي جمعناها عنكم وطلب تحديثها أو حذفها. يمكنكم أيضًا اختيار عدم استلام رسائل التسويق منا في المستقبل.</p>
        <h3>تحديثات على سياسة الخصوصية</h3>
        <p>نحتفظ بحق تحديث أو تغيير سياسة الخصوصية هذه بمرور الوقت. يرجى مراجعة هذه الصفحة بشكل دوري للحصول على أحدث المعلومات.</p>
        <h3>الاتصال بنا</h3>
        <p>إذا كان لديكم أي أسئلة أو استفسارات حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر البريد الإلكتروني: <a href="mailto:info.txmena@gmail.com">info.txmena@gmail.com</a></p>
  `;

 const termsContent = `
  <p>مرحبًا بكم في موقعنا. باستخدام هذا الموقع، فإنك توافق على شروط الاستخدام التالية:</p>

  <h3>الاستخدام المقبول</h3>
  <p>لا يجوز استخدام الموقع في أي أنشطة غير قانونية أو تنتهك حقوق الآخرين أو تعرقل عمل الموقع.</p>

  <h3>حقوق النشر</h3>
  <p>جميع المحتويات المنشورة على هذا الموقع، بما في ذلك النصوص، الصور، التصاميم، الرسومات، الشعارات، الملفات الصوتية، مقاطع الفيديو، والبرمجيات، هي ملك حصري للموقع أو الجهات التي منحتنا ترخيص استخدامها، وهي محمية بموجب قوانين حقوق النشر والملكية الفكرية المحلية والدولية.</p>

  <h3>الاستخدام الشخصي</h3>
  <p>
    يُسمح للمستخدمين بتصفح وتحميل أو طباعة المواد من الموقع لاستخدامهم الشخصي غير التجاري فقط، مع الالتزام بعدم تعديل أو حذف أي إشعار بحقوق النشر أو حقوق الملكية الأخرى المصاحبة للمحتوى.<br>
    كما يُسمح بمشاركة محتوى الموقع عبر <strong>رابط الصفحة المباشر فقط</strong>، بشرط عدم إعادة نشر المحتوى بشكل كامل أو جزئي على مواقع أو منصات أخرى دون إذن خطي مسبق.
  </p>

  <h3>العلامات التجارية</h3>
  <p>جميع العلامات التجارية والشعارات وأسماء الخدمات المعروضة على هذا الموقع، سواء كانت مسجلة أو غير مسجلة، هي ملك لأصحابها وتُستخدم هنا بإذن منهم أو لغرض التعريف فقط.</p>

  <h3>تعديلات</h3>
  <p>يحق لنا تعديل شروط الاستخدام في أي وقت دون إشعار مسبق، ويُعتبر استمرارك في استخدام الموقع موافقة ضمنية على التعديلات.</p>

  <h3>الإبلاغ عن انتهاك</h3>
  <p>إذا كنت تعتقد أن هناك محتوى على هذا الموقع ينتهك حقوق النشر الخاصة بك، يرجى التواصل معنا مع تقديم وصف دقيق للمحتوى ورابط الصفحة المعنية.</p>

  <h3>اتصل بنا</h3>
  <p>لأي استفسار، يرجى التواصل عبر: <a href="mailto:info.txmena@gmail.com">info.txmena@gmail.com</a></p>
`;

  const privacyLink = document.getElementById("privacy-policy-link");
  if (privacyLink) {
    privacyLink.addEventListener("click", (e) => {
      e.preventDefault();
      createModal("privacy-modal", "سياسة الخصوصية", privacyContent);
    });
  }

  const termsLink = document.getElementById("terms-of-use-link");
  if (termsLink) {
    termsLink.addEventListener("click", (e) => {
      e.preventDefault();
      createModal("terms-modal", "شروط الاستخدام", termsContent);
    });
  }
});

// News Page Functionality
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

document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
});


// alert for errors
document.addEventListener("DOMContentLoaded", function () {
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      margin: 0;
      padding: 0;
    }
    #tip-modal {
      position: fixed;
      inset: 0;
      background-color: rgba(0,0,0,0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 11;
    }
    #tip-modal-content {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      width: 90%;
      max-width: 600px;
      max-height: 90dvh;
      overflow-y: auto;
      font-family: 'Arial', sans-serif;
      direction: rtl;
      text-align: right;
      box-sizing: border-box;
    }
    #tip-modal-content h3 {
      margin-top: 0;
    }
    #close-tip-btn {
      margin-top: 20px;
      padding: 10px 20px;
      background: #3498db;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  const tipModal = document.createElement("div");
  tipModal.id = "tip-modal";
  tipModal.innerHTML = `
    <div id="tip-modal-content">
      <h3>تنبيه</h3>
      <p>المحتوى غير متوفر.</p>
      <button id="close-tip-btn">إغلاق</button>
    </div>
  `;

  const openModal = () => {
    if (!document.body.contains(tipModal)) {
      document.body.appendChild(tipModal);
      document.getElementById("close-tip-btn").addEventListener("click", closeModal);
    }
  };

  const closeModal = () => {
    if (document.body.contains(tipModal)) {
      tipModal.remove();
    }
  };

  const tipLink = document.getElementById("errorAlert");
  if (tipLink) {
    tipLink.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  }
});


