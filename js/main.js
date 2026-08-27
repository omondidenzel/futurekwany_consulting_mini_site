// One-page site: highlights the nav link for the section in view, and
// builds a mailto link from the contact form (no backend to post to).
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link[href^='#']");
  var sections = Array.from(navLinks)
    .map(function (link) { return document.querySelector(link.getAttribute("href")); })
    .filter(Boolean);

  function setActiveLink() {
    var scrollPos = window.scrollY + 100;
    sections.forEach(function (section, i) {
      if (scrollPos >= section.offsetTop) {
        navLinks.forEach(function (link) { link.classList.remove("active"); });
        navLinks[i].classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  var revealItems = document.querySelectorAll(".section-intro, .list-row, .card-soft, .stat-card, .approach-step, .founder-avatar, .decision-panel");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    revealItems.forEach(function (item) {
      item.classList.add("reveal");
      revealObserver.observe(item);
    });
  }

  var navCollapse = document.getElementById("mainNav");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navCollapse && navCollapse.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  var form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    var subject = "Website inquiry from " + name;
    var body = message + "\n\nFrom: " + name + " (" + email + ")";
    var mailto =
      "mailto:denzel.omondi@futurekwany.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
  });
});
