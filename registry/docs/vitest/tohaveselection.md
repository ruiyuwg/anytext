## toHaveSelection

```ts
function toHaveSelection(selection?: string): Promise<void>
```

This allows to assert that an element has a
[text selection](https://developer.mozilla.org/en-US/docs/Web/API/Selection).

This is useful to check if text or part of the text is selected within an
element. The element can be either an input of type text, a textarea, or any
other element that contains text, such as a paragraph, span, div etc.

The expected selection is a string, it does not allow to check for
selection range indices.

```html
<div>
  <input type="text" value="text selected text" data-testid="text" />
  <textarea data-testid="textarea">text selected text</textarea>
  <p data-testid="prev">prev</p>
  <p data-testid="parent">
    text <span data-testid="child">selected</span> text
  </p>
  <p data-testid="next">next</p>
</div>
```

```ts
getByTestId('text').element().setSelectionRange(5, 13)
await expect.element(getByTestId('text')).toHaveSelection('selected')

getByTestId('textarea').element().setSelectionRange(0, 5)
await expect.element('textarea').toHaveSelection('text ')

const selection = document.getSelection()
const range = document.createRange()
selection.removeAllRanges()
selection.empty()
selection.addRange(range)

// selection of child applies to the parent as well
range.selectNodeContents(getByTestId('child').element())
await expect.element(getByTestId('child')).toHaveSelection('selected')
await expect.element(getByTestId('parent')).toHaveSelection('selected')

// selection that applies from prev all, parent text before child, and part child.
range.setStart(getByTestId('prev').element(), 0)
range.setEnd(getByTestId('child').element().childNodes[0], 3)
await expect.element(queryByTestId('prev')).toHaveSelection('prev')
await expect.element(queryByTestId('child')).toHaveSelection('sel')
await expect.element(queryByTestId('parent')).toHaveSelection('text sel')
await expect.element(queryByTestId('next')).not.toHaveSelection()

// selection that applies from part child, parent text after child and part next.
range.setStart(getByTestId('child').element().childNodes[0], 3)
range.setEnd(getByTestId('next').element().childNodes[0], 2)
await expect.element(queryByTestId('child')).toHaveSelection('ected')
await expect.element(queryByTestId('parent')).toHaveSelection('ected text')
await expect.element(queryByTestId('prev')).not.toHaveSelection()
await expect.element(queryByTestId('next')).toHaveSelection('ne')
```
