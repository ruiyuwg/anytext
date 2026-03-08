On this page

The following APIs are shortcuts for equivalent calls to the underlying [`pointer()`](/docs/user-event/pointer) and [`keyboard()`](/docs/user-event/keyboard) APIs.

## Clicks[​](#clicks "Direct link to heading")

### click()[​](#click "Direct link to heading")

```
click(element: Element): Promise<void>
```

```
pointer([{target: element}, {keys: '[MouseLeft]', target: element}])
```

```
test('click', async () => {  const onChange = jest.fn()  const user = userEvent.setup()  render(<input type="checkbox" onChange={onChange} />)  const checkbox = screen.getByRole('checkbox')  await user.click(checkbox)  expect(onChange).toHaveBeenCalledTimes(1)  expect(checkbox).toBeChecked()})
```

The first action might be skipped per [`skipHover`](/docs/user-event/options#skiphover).

### dblClick()[​](#dblclick "Direct link to heading")

```
dblClick(element: Element): Promise<void>
```

```
pointer([{target: element}, {keys: '[MouseLeft][MouseLeft]', target: element}])
```

```
test('double click', async () => {  const onChange = jest.fn()  const user = userEvent.setup()  render(<input type="checkbox" onChange={onChange} />)  const checkbox = screen.getByRole('checkbox')  await user.dblClick(checkbox)  expect(onChange).toHaveBeenCalledTimes(2)  expect(checkbox).not.toBeChecked()})
```

### tripleClick()[​](#tripleclick "Direct link to heading")

```
tripleClick(element: Element): Promise<void>
```

```
pointer([  {target: element},  {keys: '[MouseLeft][MouseLeft][MouseLeft]', target: element},])
```

```
test('triple click', async () => {  const onChange = jest.fn()  const user = userEvent.setup()  render(<input type="checkbox" onChange={onChange} />)  const checkbox = screen.getByRole('checkbox')  await user.tripleClick(checkbox)  expect(onChange).toHaveBeenCalledTimes(3)  expect(checkbox).toBeChecked()})
```

## Mouse movement[​](#mouse-movement "Direct link to heading")

### hover()[​](#hover "Direct link to heading")

```
hover(element: Element): Promise<void>
```

```
pointer({target: element})
```

```
test('hover/unhover', async () => {  const user = userEvent.setup()  render(<div>Hover</div>)  const hoverBox = screen.getByText('Hover')  let isHover = false  hoverBox.addEventListener('mouseover', () => {    isHover = true  })  hoverBox.addEventListener('mouseout', () => {    isHover = false  })  expect(isHover).toBeFalsy()  await user.hover(hoverBox)  expect(isHover).toBeTruthy()  await user.unhover(hoverBox)  expect(isHover).toBeFalsy()})
```

### unhover()[​](#unhover "Direct link to heading")

```
unhover(element: Element): Promise<void>
```

```
pointer({target: element.ownerDocument.body})
```

## Keyboard[​](#keyboard "Direct link to heading")

### tab()[​](#tab "Direct link to heading")

```
tab(options: {shift?: boolean}): Promise<void>
```

```
// without shiftkeyboard('{Tab}')// with shift=truekeyboard('{Shift>}{Tab}{/Shift}')// with shift=falsekeyboard('[/ShiftLeft][/ShiftRight]{Tab}')
```

```
test('tab', async () => {  const user = userEvent.setup()  render(    <div>      <input type="checkbox" />      <input type="radio" />      <input type="number" />    </div>,  )  const checkbox = screen.getByRole('checkbox')  const radio = screen.getByRole('radio')  const number = screen.getByRole('spinbutton')  expect(document.body).toHaveFocus()  await user.tab()  expect(checkbox).toHaveFocus()  await user.tab()  expect(radio).toHaveFocus()  await user.tab()  expect(number).toHaveFocus()  await user.tab()  // cycle goes back to the body element  expect(document.body).toHaveFocus()  // simulate Shift-Tab  await user.tab({shift: true})  expect(number).toHaveFocus()})
```
