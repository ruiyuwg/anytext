# Real-time safe patches for input components

Sanity Studio is a real-time application. Therefore, signaling changes from the editor to the back end uses a different strategy than the typical one.

## Real-time syncing with mutations and patches

Traditionally, editing content online is based on the following model:

1. The editor interface reads the content to modify from the database.
2. Users introduce changes to their local copy of the document.
3. After completing their edits, users save their work; all the content of the document is sent back to the server and written to the database.

This is akin to downloading an MS Word document to a local computer, editing it, and sending it back to the server when done.

It’s an approach that works well if there’s only one user working on a single document at the time. If you’re collaborating with someone else, this model breaks down. You risk either overwriting someone else’s work or going through a tedious change conflict resolution process before you can save the document without losing any changes.

Sanity applies a different collaboration model:

1. The editor interface (Sanity Studio) loads the content to modify from the database (Content Lake.)
2. While users edit local versions of the document, the editor emits fine-grained, computer-readable descriptions of what exactly changed. We call these descriptions *mutations*.
3. The editor collects these mutations and sends them to the server, which then applies them directly to the stored document.
4. Then, the server distributes the mutations to any other collaborators who are working on the same document at the same time.
5. Finally, the editor applies the mutations to each concurrent user’s local version so that everything is in sync.

Because of this model, input components in Sanity are designed to work with granular mutations called *patches*.

### Examples

Following the traditional model, an input component for an object may look like this:

```typescript
function MyObjectInput(props) {
  const {fields, value, onChange} = props

  return (
    <>
      {fields.map((field) => (
        <div>
          <label>
            {field.title}
            <input
              type="text"
              value={value[field.name]}
              onChange={(event) => {
                onChange({...value, [field.name]: event.currentTarget.value})
              }}
            />
          </label>
        </div>
      ))}
    </>
  )
}
```

This model is easy to work with when you keep the input value in a state variable: all you need to do is call `setState` with the emitted value, and feed the state variable back to `<MyObjectInput>`.
However, this model doesn’t work as well in a real-time scenario where you don’t want to send and receive full values, but rather *granular change descriptions* (mutations).

In a real-time environment, the following works better:

```typescript
function MyObjectInput(props) {
  const {fields, value, onChange} = props

  return (
    <>
      {fields.map((field) => (
        <div>
          <label>
            {field.title}
            <input
              type="text"
              value={value[field.name]}
              onChange={(event) => {
                onChange({set: {[field.name]: event.currentTarget.value}})
              }}
            />
          </label>
        </div>
      ))}
    </>
  )
}
```

As a bonus, to set a new object input value, you don’t need to consider the current one.

## Patch utilities

The `PatchEvent` class offers a set of utilities for composing real-time safe patches when developing object and array inputs. Instead of manually constructing field paths and patches, you can import a set of patch creators from the Sanity package.

The `PatchEvent` class has several static [methods to declare a granular operation](https://www.sanity.io/docs/content-lake/http-patches):

> \[!NOTE]
> `path` can only accept an array of path segments.

### Patches for all data types

**set**

`set(value: any, path?: Path)`: sets the value at the specified path. It overwrites any existing value.

**unset**

`unset(path: Path?)`: unsets any value at the specified path.

**setIfMissing**

`setIfMissing(value: any, path?: Path)`: performs a [setIfMissing](https://www.sanity.io/docs/content-lake/http-patches) patch on the specified path.

### Patches for arrays

**insert**

`insert(items: any[], position: "before" | "after", path?: Path)`: performs an [insert](https://www.sanity.io/docs/content-lake/http-patches) patch, inserting the `items` provided before or after the node at the specified path.

### Patches for strings

**diffMatchPatch**

`diffMatchPatch(value: string, path?: Path)`: performs a [diffMatchPatch](https://www.sanity.io/docs/content-lake/http-patches) on the string at the specified path.

### Patches for numbers

inc

`inc(amount, path?: Path)`: performs an [increment](https://www.sanity.io/docs/content-lake/http-patches) operation on the number value at the specified path.

**dec**

`dec(amount, path?: Path)`: performs a `decrement` operation on the number value at the specified path.

## Best practices and considerations

### Consider the user's intention for a change

The change event you emit from the input component needs to consider what users want to achieve when they make a change.

For example:

- Do you want the change to only affect what a user sees on their screen, regardless of the corresponding value in the database (which might not be the same as what is displayed to the user)?
  Or do you want to modify the most recent value stored in the database, regardless of what is displayed to the user on the screen?
- When a user changes the value of a number, do they want to increase or decrease the original value? Or do they want to set it to a new arbitrary value?

The differences in the outcomes can be subtle. As a rule of thumb, when creating patches, it’s preferable to avoid reading input values locally. This is possible only when using the `insert`, `inc` and `dec` [patches](https://www.sanity.io/docs/content-lake/http-patches).

Create patches that are as fine-grained as possible. When creating a custom array or object input, you can optionally call [onChange](https://www.sanity.io/guides/usereducer-in-custom-component) with a patch that sets the whole array or object value.

### Avoid array indices

When creating patches that target array elements, avoid targeting the elements with their array index reference. Array indices are unreliable because users may add, remove, and change the order of the items in the array over time. For example: if you have an array with two items `A` and `B` with index `0` and `1`, respectively, their reference array index changes as soon as you or other users modify the order of the elements in the array.

### Diff match patch

Sanity supports [diff-match-patch](https://github.com/google/diff-match-patch), which offers a robust way to describe a change in plain text. Usually, you don’t need to create diff match patches; Sanity Studio does it for you under the hood.

Gotcha: if you implement emitting diff match patches from your custom input, you miss out on built-in optimizations. Therefore, it’s preferable to avoid creating diff match patches from custom input components.
