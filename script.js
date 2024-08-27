function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("show");
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("show");
}
// FAQ Accordion
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  accordion.addEventListener('click', function () {
    // Toggle active class
    this.classList.toggle('active');

    // Toggle panel visibility
    const panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});
