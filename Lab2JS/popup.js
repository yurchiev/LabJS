document.getElementById('clickButton').addEventListener('click', function() {
  // Open a new tab with the specified URL
  chrome.tabs.create({ url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' });
});
