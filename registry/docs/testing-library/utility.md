On this page

The following APIs don't have one-to-one equivalents in a real user interaction.  
Their behavior is therefore an interpretation how the "perceived" user interaction might be translated to actual events on the DOM.

## clear()[​](#clear "Direct link to heading")

```
clear(element: Element): Promise<void>
```

This API can be used to easily clear an editable element.

1.  Focus element
2.  Select all contents as per browser menu
3.  Delete contents as per browser menu

```
test('clear', async () => {  const user = userEvent.setup()  render(<textarea defaultValue="Hello, World!" />)  await user.clear(screen.getByRole('textbox'))  expect(screen.getByRole('textbox')).toHaveValue('')})
```

The `Promise` is rejected if the element can not be focused or contents can not be selected.

## selectOptions(), deselectOptions()[​](#-selectoptions-deselectoptions "Direct link to heading")

```
selectOptions(  element: Element,  values: HTMLElement | HTMLElement[] | string[] | string,): Promise<void>deselectOptions(  element: Element,  values: HTMLElement | HTMLElement[] | string[] | string,): Promise<void>
```

Select/deselect the given options in an [HTMLSelectElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement) or [listbox](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role).

The `values` parameter can refer to an option per its value, HTML content or just provide the element. It also accepts an array of these.

> Selecting multiple options and/or deselecting options of `HTMLSelectElement` is only possible if [multiple](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple) is specified.

```
test('selectOptions', async () => {  const user = userEvent.setup()  render(    <select multiple>      <option value="1">A</option>      <option value="2">B</option>      <option value="3">C</option>    </select>,  )  await user.selectOptions(screen.getByRole('listbox'), ['1', 'C'])  expect(screen.getByRole('option', {name: 'A'}).selected).toBe(true)  expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false)  expect(screen.getByRole('option', {name: 'C'}).selected).toBe(true)})
```

```
test('deselectOptions', async () => {  const user = userEvent.setup()  render(    <select multiple>      <option value="1">A</option>      <option value="2" selected>        B      </option>      <option value="3">C</option>    </select>,  )  await user.deselectOptions(screen.getByRole('listbox'), '2')  expect(screen.getByText('B').selected).toBe(false)})
```

Note that this API triggers pointer events and is therefore subject to [pointerEventsCheck](/docs/user-event/options#pointereventscheck).

## type()[​](#type "Direct link to heading")

```
type(  element: Element,  text: KeyboardInput,  options?: {    skipClick?: boolean    skipAutoClose?: boolean    initialSelectionStart?: number    initialSelectionEnd?: number  }): Promise<void>
```

Type into an input element.

> You should use [`keyboard()`](/docs/user-event/keyboard) if you want to just simulate pressing buttons on the keyboard.  
> You can use `type()` if you just want to conveniently insert some text into an input field or textarea.

1.  Unless [`skipClick`](/docs/user-event/options#skipclick) is `true`, click the element.
2.  If `initialSelectionStart` is set, set the selection on the element. If `initialSelectionEnd` is not set, this results in a collapsed selection.
3.  Type the given `text` per [`keyboard()`](/docs/user-event/keyboard).
4.  Unless [`skipAutoClose`](/docs/user-event/options#skipautoclose) is `true`, release all pressed keys.

```
test('type into an input field', async () => {  const user = userEvent.setup()  render(<input defaultValue="Hello," />)  const input = screen.getByRole('textbox')  await user.type(input, ' World!')  expect(input).toHaveValue('Hello, World!')})
```

## upload()[​](#upload "Direct link to heading")

```
upload(  element: HTMLElement,  fileOrFiles: File | File[],): Promise<void>
```

Change a file input as if a user clicked it and selected files in the resulting file upload dialog.

> Files that don't match an `accept` property will be automatically discarded, unless [`applyAccept`](/docs/user-event/options#applyaccept) is set to `false`.

```
test('upload file', async () => {  const user = userEvent.setup()  render(    <div>      <label htmlFor="file-uploader">Upload file:</label>      <input id="file-uploader" type="file" />    </div>,  )  const file = new File(['hello'], 'hello.png', {type: 'image/png'})  const input = screen.getByLabelText(/upload file/i)  await user.upload(input, file)  expect(input.files[0]).toBe(file)  expect(input.files.item(0)).toBe(file)  expect(input.files).toHaveLength(1)})test('upload multiple files', async () => {  const user = userEvent.setup()  render(    <div>      <label htmlFor="file-uploader">Upload file:</label>      <input id="file-uploader" type="file" multiple />    </div>,  )  const files = [    new File(['hello'], 'hello.png', {type: 'image/png'}),    new File(['there'], 'there.png', {type: 'image/png'}),  ]  const input = screen.getByLabelText(/upload file/i)  await user.upload(input, files)  expect(input.files).toHaveLength(2)  expect(input.files[0]).toBe(files[0])  expect(input.files[1]).toBe(files[1])})
```
