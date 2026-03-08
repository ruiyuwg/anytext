# How form paths work

A form path provides a unique and stable address for a value in a Sanity document. This is an important piece of the puzzle that makes Sanity a real-time platform where several people can work on editing the same document simultaneously.

## What are form paths?

Consider a scenario where two people work on the same document. When one of the two users edits the document, the modification is technically represented as a [patch](https://www.sanity.io/docs/studio/from-input-components-to-real-time-safe-patches)—a description of the change.

The patch may look something like this:

`set ["name"] to "Buddy"`

The patch goes places:

- It’s sent to the Sanity API.
- It’s applied to the document in the API datastore.
- It’s redistributed to any other user editing the same document.

In this example, the `["name"]` array is a path that always and uniquely points to the `firstName` field. The contents of this field may change, but its location within the document doesn’t.

The `pets` array in the following example behaves differently:

```json
{"pets": [{"name": "Buddy"}, {"name": "Daisy"}]}
```

To point to Daisy in the array, use the following form path: `["pets", 1, "name"]` What’s the problem here? Let’s find out.

Consider two editors—Alice and Bob—updating the pet list at the same time: Alice moves Daisy to the top of the list, while Bob renames Buddy to Buds.

The patches that the studio generates for these two edits are similar to the following pseudocode:

- Bob: `set ["pets", 0, "name"] to "Buds"`
- Alice: `move ["pets", 1, 0]`

If these two patches are received in the order above, everything is fine: Buddy becomes Buds, and Daisy moves to the top of the list.
However, networks make it hard to set the order of actions reliably. For example, latency may cause Bob’s change to be received and processed after Alice’s:

- Alice: `move ["pets", 1, 0]`
- Bob: `set ["pets", 0, "name"] to "Buds"`

If the Sanity data store receives Alice's patch first, Buddy and Daisy swap places, and Daisy is located at array index `0`. When Bob’s patch is processed, Daisy is renamed to Buds, which isn’t what Bob meant to do! And poor Daisy now has to learn again what humans call her! Luckily, there’s a solution.

## Unique key IDs

To prevent this problem, array objects in Sanity must have a unique `_key` value.

This unique key is generated upon object creation. The key uniquely identifies the object it refers to, and it’s immutable throughout the lifetime of the object.

This is the pet array with the key IDs:

```json
{
  "pets": [
    {_key: "m99vcit2pho", "name": "Buddy"},
    {_key: "v1uf44s5hu8", "name": "Daisy"}
  ]
}
```

Instead of referencing the object by its index number—which may point to a different object if the order in the array changes—you can specify its unique key ID in the form path.
Here’s how you can use `_key` to point to Buddy’s name in a form path: `["pets", {_key: "m99vcit2pho"}, "name"]`

The order of the actions no longer matters. If you rerun the previous wrong-order scenario, everything is ok:

- Alice: `move ["pets", 1, 0]`
- Bob: `set ["pets", {_key: "m99vcit2pho"}, "name"] to "Buds"`

When Bob’s patch is received, Buddy has already been moved on the list. However, the datastore now identifies the pet name to update by its `_key`. Daisy is safe!

You probably noticed that Alice’s `move` patch still refers to the object by its array index.
Currently, this is a bit of a gray area: when an editor moves an item to the top of the array, what is their goal? Do they want to move the item *to the top*, or do they want to move it just *one level up from their current position* in the array?

![Alice and Bob both try to move an array member. In the example, Daisy is the array member they want to move.](https://cdn.sanity.io/images/3do82whm/next/804354b8fd7fad8e9a4afced96e6bdeb142ca649-1600x704.png)

Although this area is a bit ambiguous, changing the order of the array members doesn’t modify the wrong object, and Daisy is safe!

## Using form paths in Sanity Studio

When customizing Sanity Studio, you may sometimes run into situations where you’d like to point to a specific piece of content in a document. This is when form paths are helpful. For example:

- Reading the value of a node inside the active document being edited.
- Deep linking to a specific form node.
- Opening a dialog to edit an array item—for more information about this topic, see the article about [disclosure elements](https://www.sanity.io/docs/studio/focus-and-ui-state-in-custom-inputs).

To support working efficiently with paths, we offer a set of utility functions in the [@sanity/util](https://www.npmjs.com/package/@sanity/util) package at the `@sanity/util/paths` export.

## Known limitations

This approach has limitations with arrays of primitive values and multidimensional arrays:

- It’s not possible to assign a key to a [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive). Therefore, arrays of primitive values rely on the array index to locate a specific member. Since index references point to the position of an object in the array, not to the object itself, they’re also more likely to produce unexpected effects when multiple users modify the same array at the same time.
- It’s not possible to assign a key to multidimensional arrays, or arrays of arrays. Instead of creating multidimensional arrays, we recommend defining the data as an array of objects, where a field holds the inner array.

Example:

```json
"multiDimensional": [
  {_key: "3u285aqn8uo" inner: [1, 2, 3]},
  {_key: "0c3afift948" inner: [4, 9, 3]},
]
```
