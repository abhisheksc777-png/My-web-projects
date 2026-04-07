document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('video[controls]').forEach(vid => {
    vid.controlsList.add('nodownload');  // Adds safely
  });
});
