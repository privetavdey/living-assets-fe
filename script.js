// Get and display the current URL
document.getElementById('currentUrl').textContent = window.location.href;

// Add copy functionality
document.querySelector('.copy-btn').addEventListener('click', function() {
  navigator.clipboard.writeText(window.location.href)
    .then(() => {
      this.textContent = 'COPIED!';
      setTimeout(() => {
        this.textContent = 'COPY';
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy:', err);
    });
}); 