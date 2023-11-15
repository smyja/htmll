document.addEventListener('DOMContentLoaded', function() {
  // Create the iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'http://localhost:3000/chat'; // Replace with your chat page URL
  iframe.style.border = 'none';
  iframe.style.height = '500px'; // Adjust size as needed
  iframe.style.width = '350px'; // Adjust size as needed
  iframe.style.position = 'fixed';
  iframe.style.bottom = '20px';
  iframe.style.right = '20px';
  iframe.style.display = 'none'; // Start with the iframe hidden

  // Create the toggle button
  const button = document.createElement('button');
  button.textContent = 'Chat';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.zIndex = '1000';

  // Toggle function
  button.onclick = function() {
    const isIframeOpen = iframe.style.display !== 'none';
    iframe.style.display = isIframeOpen ? 'none' : 'block';
  };

  // Append the iframe and button to the body
  document.body.appendChild(iframe);
  document.body.appendChild(button);
});
