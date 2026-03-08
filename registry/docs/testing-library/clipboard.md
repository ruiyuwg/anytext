On this page

Note that the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard) is usually not available outside of secure context.  
To enable testing of workflows involving the clipboard, [`userEvent.setup()`](/docs/user-event/setup) replaces `window.navigator.clipboard` with a stub.

## copy()[​](#copy "Direct link to heading")

```
copy(): Promise<DataTransfer|undefined>
```

Copy the current selection.

If [`writeToClipboard`](/docs/user-event/options#writetoclipboard) is `true`, this will also write the data to the `Clipboard`.

## cut()[​](#cut "Direct link to heading")

```
cut(): Promise<DataTransfer|undefined>
```

Cut the current selection.

If [`writeToClipboard`](/docs/user-event/options#writetoclipboard) is `true`, this will also write the data to the `Clipboard`.

When performed in editable context, it removes the selected content from the document.

## paste()[​](#paste "Direct link to heading")

```
paste(clipboardData?: DataTransfer|string): Promise<void>
```

Paste data into the document.

When called without `clipboardData`, the content to be pasted is read from the `Clipboard`.

When performed in editable context, the pasted content is inserted into the document.
