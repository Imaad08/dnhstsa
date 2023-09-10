function toggleMobileMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    var mobileMenuButton = document.querySelector(".mobile-menu-button");
    var body = document.body;
    var pageContent = document.querySelector(".page-content");
  
    if (getComputedStyle(mobileMenu).display === "none") {
      mobileMenu.style.display = "block";
      mobileMenuButton.classList.add("active");
      pageContent.style.transform = "translateY(" + mobileMenu.clientHeight + "px)";
    } else {
      mobileMenu.style.display = "none";
      mobileMenuButton.classList.remove("active");
      body.classList.remove("mobile-menu-active");
      pageContent.style.transform = "translateY(0)";
    }
  }
  
  event.preventDefault();