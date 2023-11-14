const React = window.React;
const ReactDOM = window.ReactDOM;

window.addEventListener('DOMContentLoaded', () => {
  const script = document.createElement('script');
  script.src = 'dist/chat-widget.umd.cjs';
  script.type = 'text/javascript';

  script.onload = () => {
    console.log('Chat widget script loaded.');

    // Additional debugging: Check if ChatWidget is correctly attached to window
    console.dir(window.ChatWidget);

    if (window.ChatWidget) {
      const ChatWidget = window.ChatWidget;
      console.dir(ChatWidget); // More detailed logging of ChatWidget

      const chatContainer = document.createElement('div');
      document.body.appendChild(chatContainer);

      // Additional check: Verify that ChatWidget is a valid React component
      if (React.isValidElement(React.createElement(ChatWidget))) {
        ReactDOM.render(React.createElement(ChatWidget), chatContainer);
      } else {
        console.error('ChatWidget is not a valid React component.');
      }
    } else {
      console.error('ChatWidget is not defined.');
    }
  };

  script.onerror = () => {
    console.error('Failed to load chat widget script.');
  };

  document.head.appendChild(script);
});
