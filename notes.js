  console.log('%cWelcome to Notes.ovh',
    'font-weight: bold; font-size: 2em;');
  console.log('%cYou can take quick notes here which are saved automatically to localstorage.',
    'color: gray; font-weight: bold; font-size: 2em;');
  console.log('%cOr you can use it as a simple text editor to copy/paste -> edit -> copy/paste.',
    'color: gray; font-weight: bold; font-size: 2em;');

  var contentEditableElement = document.querySelector('[contenteditable]');
  var localStorageKey = 'contenteditable';
  var debounceTimeout = 1000;

  function load() {
    var saved = localStorage.getItem(localStorageKey);

    if (saved) {
      contentEditableElement.innerHTML = saved;
      console.log('Your content just loaded from localstorage.')
    }
  }

  function save() {
    var html = contentEditableElement.innerHTML;

    localStorage.setItem(localStorageKey, html);
    console.log('Your content just saved to localstorage.');
  }

  function debounced(delay, fn) {
    var timerId;

    return function () {
      if (timerId) {
        clearTimeout(timerId);
      }

      timerId = setTimeout(function () {
        fn();
        timerId = null;
      }, delay);
    }
  }

  var debouncedSave = debounced(debounceTimeout, save);

  load();

  contentEditableElement.addEventListener('input', function() {
    debouncedSave();
  }, false);