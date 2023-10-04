
// require the components file
req('AllComponents');

// get the root element
const rootElement = document.getElementById('root');

// render the App in the root element
h.App(
    {
      parent: rootElement,
      resetParent: true
    }
);
