# Document nodes

Document nodes represent a complete native view tree. Apps using native navigation would provide a separate document node for each screen. Apps not using native navigation would generally provide a single document for the whole app (similar to single-page apps on Web).

***

## Reference[​](#reference "Direct link to Reference")

### Web-compatible API[​](#web-compatible-api "Direct link to Web-compatible API")

From [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement):

- Properties

  - [`childElementCount`](https://developer.mozilla.org/en-US/docs/Web/API/Document/childElementCount)
  - [`children`](https://developer.mozilla.org/en-US/docs/Web/API/Document/children)
  - [`documentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)
  - [`firstElementChild`](https://developer.mozilla.org/en-US/docs/Web/API/Document/firstElementChild)
  - [`lastElementChild`](https://developer.mozilla.org/en-US/docs/Web/API/Document/lastElementChild)

- Methods

  - [`getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

From [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node):

- Properties

  - [`childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)
  - [`firstChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild)
  - [`isConnected`](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected)
  - [`lastChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild)
  - [`nextSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)
  - [`nodeName`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName)
  - [`nodeType`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
  - [`nodeValue`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue)
  - [`ownerDocument`](https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument)
  - [`parentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
  - [`parentNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)
  - [`previousSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling)
  - [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

- Methods

  - [`compareDocumentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition)
  - [`contains()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/contains)
  - [`getRootNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode)
  - [`hasChildNodes()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes)

***

# DrawerLayoutAndroid

React component that wraps the platform `DrawerLayout` (Android only). The Drawer (typically used for navigation) is rendered with `renderNavigationView` and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the `drawerPosition` prop and its width can be set by the `drawerWidth` prop.

## Example[​](#example "Direct link to Example")

- TypeScript
- JavaScript

***
