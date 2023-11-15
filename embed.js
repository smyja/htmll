(function() {
  function loadIframe() {
    const iframe = document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.right = '20px';
    iframe.style.zIndex = '1000';
    iframe.style.width = '100%'; // Full width to accommodate the widget
    iframe.style.height = '100%'; // Full height to accommodate the widget
    iframe.style.backgroundColor = 'transparent';
    iframe.style.boxShadow = 'none';
    

    document.body.appendChild(iframe);

    iframe.onload = function() {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      iframe.contentWindow.process = { env: { NODE_ENV: 'production' } };
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'style.css'; // Replace with the path to your CSS file
      iframeDocument.head.appendChild(link);
      loadStylesAndScripts(iframeDocument, function() {
        initializeChatWidget(iframe);
      });
    };

    return iframe;
  }

  function loadStylesAndScripts(doc, callback) {
    loadScript(doc, 'https://unpkg.com/react@18.2.0/umd/react.production.min.js', function() {
      loadScript(doc, 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js', function() {
        loadScript(doc, 'chat-widget.umd.cjs', callback);
      });
    });
  }

  function initializeChatWidget(iframe) {
    if (iframe.contentWindow.ChatWidget) {
      const ChatWidget = iframe.contentWindow.ChatWidget.ChatWidget;
      const chatContainer = iframe.contentDocument.createElement('div');
      iframe.contentDocument.body.appendChild(chatContainer);

      iframe.contentWindow.ReactDOM.render(iframe.contentWindow.React.createElement(ChatWidget), chatContainer);
    } else {
      console.error('ChatWidget is not defined.');
    }
  }

  function loadScript(doc, url, callback) {
    const script = doc.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    script.onerror = function() {
      console.error('Failed to load script:', url);
    };
    doc.head.appendChild(script);
  }

  window.addEventListener('DOMContentLoaded', loadIframe);
})();
