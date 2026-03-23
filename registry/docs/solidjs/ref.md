JSX attributes

# ref

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/ref.mdx)

Refs are a way of getting access to underlying DOM elements in our JSX. While it is true one could just assign an element to a variable, it is more optimal to leave components in the flow of JSX. Refs are assigned at render time but before the elements are connected to the DOM. They come in 2 flavors.

```
// variable assigned directly by reflet myDiv;
// use onMount or createEffect to read after connected to the DOMonMount(() => console.log(myDiv));
<div ref={myDiv} />
// Or, callback function (called before connected to the DOM)<div ref={el => console.log(el)} />
```

Refs can also be used on Components. They still need to be attached on the other side.

```
function MyComp(props) {  return <div ref={props.ref} />;}
function App() {  let myDiv;  onMount(() => console.log(myDiv.clientWidth));  return <MyComp ref={myDiv} />;}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/jsx-attributes/ref.mdx\&page=https://docs.solidjs.com/reference/jsx-attributes/ref)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/ref.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/jsx-attributes/ref.mdx\&page=https://docs.solidjs.com/reference/jsx-attributes/ref)
