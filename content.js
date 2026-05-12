function getPageName() {
  // Primary: h1 button div (page/group name header)
  const h1btn = document.querySelector('h1 div[role="button"]');
  if (h1btn) {
    const text = h1btn.childNodes[0]?.textContent?.trim();
    if (text && text.length > 0) return text;
  }

  // Fallback: any h1 text
  const h1 = document.querySelector('h1');
  if (h1) {
    const text = h1.textContent?.trim();
    if (text && text.length > 0) return text;
  }

  return null;
}

function updateTitle() {
  const name = getPageName();
  if (name && !document.title.startsWith(name)) {
    document.title = name + ' | Facebook';
  }
}

// Run on DOM mutations (Facebook is a SPA)
const observer = new MutationObserver(() => updateTitle());
observer.observe(document.body, { childList: true, subtree: true });

// Also run on history navigation
const _pushState = history.pushState.bind(history);
history.pushState = function (...args) {
  _pushState(...args);
  setTimeout(updateTitle, 500);
};

window.addEventListener('popstate', () => setTimeout(updateTitle, 500));

// Initial run
updateTitle();
