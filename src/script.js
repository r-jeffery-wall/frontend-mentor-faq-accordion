const accordions = document.getElementsByClassName("faq-item-header");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function(event) {
    this.parentElement.classList.toggle("inactive");
    const panel = this.nextElementSibling;
    const icon = this.children[1];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      icon.src = './assets/images/icon-plus.svg';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      icon.src = './assets/images/icon-minus.svg';
    }
  });
}