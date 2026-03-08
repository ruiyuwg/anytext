# Copy and paste for fields

The field copy and paste feature in Sanity Studio enables you to copy and paste field values or entire documents within your studio. This feature can be a significant time saver when you need to duplicate content or move it between different document types.

You can access these specialized copy-and-paste actions in the following ways:

- Through the **Field Actions** menu on individual fields.
- Using the standard **Ctrl/Cmd+C** and **Ctrl/Cmd+V** keyboard shortcuts on supported field types.

## Copy and paste fields

To copy and paste individual fields within a document:

1. Hover over a field to reveal the **Field Actions** menu.

2. Select **Copy field** to copy the contents of that field.

3. Navigate to another field of the same type and select **Paste field** in the **Field Actions** menu to paste the copied content.

Additionally, certain field types support using the standard **Ctrl/Cmd+C** and **Ctrl/Cmd+V** keyboard shortcuts for copying and pasting:

- Array fields
- Object fields
- Reference fields
- Image and File fields

Using keyboard shortcuts can be a quick way to duplicate content within these field types.

## Copy and paste documents

To copy and paste entire documents:

1. Open the **Document Actions** menu and select **Copy** to copy the current document to your clipboard.

![Shows the Document Actions menu with options for copying and pasting documents](https://cdn.sanity.io/images/3do82whm/next/37300fc59a415e495fe7baaafdcae1bddeeae6d9-491x330.png)

1. Navigate to the document list where you want to create a new document.
2. Create a new document.
3. Select **Paste** from the **Document Actions** menu or use the keyboard shortcut **Ctrl/Cmd+V**.

Another advantage of the copy/paste workflow over using the **Duplicate** action is that you can paste documents across different document types. Sanity Studio will try to map the fields from the source to the destination document.

## Examples

Here are some examples where copy-and-paste for fields can come in handy.

### Copying between array types

There might be cases where it’s more efficient to copy-start existing items from an array into a new one and edit them. For example, if you use array fields to build landing pages, newsletters, etc, and want to keep the same structure or have minor variations between them.

\*\*Note that pasting into an array will replace all the items in it. \*\*However, if you do this accidentally, you can use Review changes and restore to the content you want to keep.

### Copying between object types

Say you have an `object` field of type `bio` with the fields `name`, `image`, and `history`. If you copy that entire object and paste it into an object field of type `author` which has the fields `name` and `image`, Sanity Studio will transfer over the field values that are in common between the two types (`name` and `image`) and discard the field that doesn't exist in the destination (`history`).

### Copying between document types

Similarly, if you copy a whole document of type `author` and paste it into a document of type `person`, Sanity Studio will copy over any fields that the two document types have in common (e.g., `name` and `image`). Fields that do not exist in the destination type (e.g., `publicationsList` in `author`) will be discarded.

If there are no fields in common between the source and destination, you will see a warning listing the fields that were discarded. If there is nothing currently on your clipboard when you try to paste, you'll get a notification informing you there's nothing to paste.

## Limitations

There are a few known limitations to be aware of with the new copy-and-paste feature:

- References cannot be fully validated when pasting except to check that the reference type matches the target field. Complete validation would require making the paste operation asynchronous to fetch the referenced document, adding significant complexity. Full validation will happen after the reference value has been added.
- For images and files, validating the MIME type against the field's accept configuration is impossible without fetching the full asset document.
- When focused inside a text input, copy/paste is handled by the input's own clipboard event management to avoid interfering with the native editing experience, undo/redo functionality, etc.
- Pasting into an array field will overwrite the entire array rather than appending the pasted content. This behavior might be unexpected for users accustomed to appending when pasting in other contexts.
- Arrays of anonymous object types, sometimes referred to as inline objects, are currently not supported and attempts to paste such values into an array field will fail.
