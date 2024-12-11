document.addEventListener('DOMContentLoaded', function () {
  const collapsibleButtons = document.querySelectorAll('.collapsible-button');
  collapsibleButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
        this.textContent = this.textContent.replace('Click to Collapse', 'Click to Expand');
      } else {
        content.style.display = 'block';
        this.textContent = this.textContent.replace('Click to Expand', 'Click to Collapse');
      }
    });
  });
});
