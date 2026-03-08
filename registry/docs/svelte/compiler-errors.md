# Compiler errors

### animation\_duplicate

```
An element can only have one 'animate' directive
```

### animation\_invalid\_placement

```
An element that uses the `animate:` directive must be the only child of a keyed `{#each ...}` block
```

### animation\_missing\_key

```
An element that uses the `animate:` directive must be the only child of a keyed `{#each ...}` block. Did you forget to add a key to your each block?
```

### attribute\_contenteditable\_dynamic

```
'contenteditable' attribute cannot be dynamic if element uses two-way binding
```

### attribute\_contenteditable\_missing

```
'contenteditable' attribute is required for textContent, innerHTML and innerText two-way bindings
```

### attribute\_duplicate

```
Attributes need to be unique
```

### attribute\_empty\_shorthand

```
Attribute shorthand cannot be empty
```

### attribute\_invalid\_event\_handler

```
Event attribute must be a JavaScript expression, not a string
```

### attribute\_invalid\_multiple

```
'multiple' attribute must be static if select uses two-way binding
```

### attribute\_invalid\_name

```
'%name%' is not a valid attribute name
```

### attribute\_invalid\_sequence\_expression

```
Comma-separated expressions are not allowed as attribute/directive values in runes mode, unless wrapped in parentheses
```

An attribute value cannot be a comma-separated sequence of expressions — in other words this is disallowed:

```svelte
<div class={size, color}>...</div>
```

Instead, make sure that the attribute value contains a single expression. In the example above it's likely that this was intended (see the [class documentation](class) for more details):

```svelte
<div class={[size, color]}>...</div>
```

If you *do* need to use the comma operator for some reason, wrap the sequence in parentheses:

```svelte
<div class={(size, color)}>...</div>
```

Note that this will evaluate to `color`, ignoring `size`.

### attribute\_invalid\_type

```
'type' attribute must be a static text value if input uses two-way binding
```

### attribute\_unquoted\_sequence

```
Attribute values containing `{...}` must be enclosed in quote marks, unless the value only contains the expression
```

### bind\_group\_invalid\_expression

```
`bind:group` can only bind to an Identifier or MemberExpression
```

### bind\_group\_invalid\_snippet\_parameter

```
Cannot `bind:group` to a snippet parameter
```

### bind\_invalid\_expression

```
Can only bind to an Identifier or MemberExpression or a `{get, set}` pair
```

### bind\_invalid\_name

```
`bind:%name%` is not a valid binding
```

```
`bind:%name%` is not a valid binding. %explanation%
```

### bind\_invalid\_parens

```
`bind:%name%={get, set}` must not have surrounding parentheses
```

### bind\_invalid\_target

```
`bind:%name%` can only be used with %elements%
```

### bind\_invalid\_value

```
Can only bind to state or props
```

### bindable\_invalid\_location

```
`$bindable()` can only be used inside a `$props()` declaration
```

### block\_duplicate\_clause

```
%name% cannot appear more than once within a block
```

### block\_invalid\_continuation\_placement

```
{:...} block is invalid at this position (did you forget to close the preceding element or block?)
```

### block\_invalid\_elseif

```
'elseif' should be 'else if'
```

### block\_invalid\_placement

```
{#%name% ...} block cannot be %location%
```

### block\_unclosed

```
Block was left open
```

### block\_unexpected\_character

```
Expected a `%character%` character immediately following the opening bracket
```

### block\_unexpected\_close

```
Unexpected block closing tag
```

### component\_invalid\_directive

```
This type of directive is not valid on components
```

### const\_tag\_cycle

```
Cyclical dependency detected: %cycle%
```

### const\_tag\_invalid\_expression

```
{@const ...} must consist of a single variable declaration
```

### const\_tag\_invalid\_placement

```
`{@const}` must be the immediate child of `{#snippet}`, `{#if}`, `{:else if}`, `{:else}`, `{#each}`, `{:then}`, `{:catch}`, `<svelte:fragment>`, `<svelte:boundary>` or `<Component>`
```

### const\_tag\_invalid\_reference

```
The `{@const %name% = ...}` declaration is not available in this snippet
```

The following is an error:

```svelte
<svelte:boundary>
    {@const foo = 'bar'}

    {#snippet failed()}
        {foo}
    {/snippet}
</svelte:boundary>
```

Here, `foo` is not available inside `failed`. The top level code inside `<svelte:boundary>` becomes part of the implicit `children` snippet, in other words the above code is equivalent to this:

```svelte
<svelte:boundary>
    {#snippet children()}
        {@const foo = 'bar'}
    {/snippet}

    {#snippet failed()}
        {foo}
    {/snippet}
</svelte:boundary>
```

The same applies to components:

```svelte
<Component>
    {@const foo = 'bar'}

    {#snippet someProp()}
        <!-- error -->
        {foo}
    {/snippet}
</Component>
```

### constant\_assignment

```
Cannot assign to %thing%
```

### constant\_binding

```
Cannot bind to %thing%
```

### css\_empty\_declaration

```
Declaration cannot be empty
```

### css\_expected\_identifier

```
Expected a valid CSS identifier
```

### css\_global\_block\_invalid\_combinator

```
A `:global` selector cannot follow a `%name%` combinator
```

### css\_global\_block\_invalid\_declaration

```
A top-level `:global {...}` block can only contain rules, not declarations
```

### css\_global\_block\_invalid\_list

```
A `:global` selector cannot be part of a selector list with entries that don't contain `:global`
```

The following CSS is invalid:

```css
:global, x {
    y {
        color: red;
    }
}
```

This is mixing a `:global` block, which means "everything in here is unscoped", with a scoped selector (`x` in this case). As a result it's not possible to transform the inner selector (`y` in this case) into something that satisfies both requirements. You therefore have to split this up into two selectors:

```css
:global {
    y {
        color: red;
    }
}

x y {
    color: red;
}
```

### css\_global\_block\_invalid\_modifier

```
A `:global` selector cannot modify an existing selector
```

### css\_global\_block\_invalid\_modifier\_start

```
A `:global` selector can only be modified if it is a descendant of other selectors
```

### css\_global\_block\_invalid\_placement

```
A `:global` selector cannot be inside a pseudoclass
```

### css\_global\_invalid\_placement

```
`:global(...)` can be at the start or end of a selector sequence, but not in the middle
```

### css\_global\_invalid\_selector

```
`:global(...)` must contain exactly one selector
```

### css\_global\_invalid\_selector\_list

```
`:global(...)` must not contain type or universal selectors when used in a compound selector
```

### css\_nesting\_selector\_invalid\_placement

```
Nesting selectors can only be used inside a rule or as the first selector inside a lone `:global(...)`
```

### css\_selector\_invalid

```
Invalid selector
```

### css\_type\_selector\_invalid\_placement

```
`:global(...)` must not be followed by a type selector
```

### debug\_tag\_invalid\_arguments

```
{@debug ...} arguments must be identifiers, not arbitrary expressions
```

### declaration\_duplicate

```
`%name%` has already been declared
```

### declaration\_duplicate\_module\_import

```
Cannot declare a variable with the same name as an import inside `<script module>`
```

### derived\_invalid\_export

```
Cannot export derived state from a module. To expose the current derived value, export a function returning its value
```

### directive\_invalid\_value

```
Directive value must be a JavaScript expression enclosed in curly braces
```

### directive\_missing\_name

```
`%type%` name cannot be empty
```

### dollar\_binding\_invalid

```
The $ name is reserved, and cannot be used for variables and imports
```

### dollar\_prefix\_invalid

```
The $ prefix is reserved, and cannot be used for variables and imports
```

### duplicate\_class\_field

```
`%name%` has already been declared
```

### each\_item\_invalid\_assignment

```
Cannot reassign or bind to each block argument in runes mode. Use the array and index variables instead (e.g. `array[i] = value` instead of `entry = value`, or `bind:value={array[i]}` instead of `bind:value={entry}`)
```

In legacy mode, it was possible to reassign or bind to the each block argument itself:

```svelte
<script>
	let array = [1, 2, 3];
</script>

{#each array as entry}
	<!-- reassignment -->
	<button on:click={() => entry = 4}>change</button>

	<!-- binding -->
	<input bind:value={entry}>
{/each}
```

This turned out to be buggy and unpredictable, particularly when working with derived values (such as `array.map(...)`), and as such is forbidden in runes mode. You can achieve the same outcome by using the index instead:

```svelte
<script>
	let array = $state([1, 2, 3]);
</script>

{#each array as entry, i}
	<!-- reassignment -->
	<button onclick={() => array[i] = 4}>change</button>

	<!-- binding -->
	<input bind:value={array[i]}>
{/each}
```

### each\_key\_without\_as

```
An `{#each ...}` block without an `as` clause cannot have a key
```

### effect\_invalid\_placement

```
`$effect()` can only be used as an expression statement
```

### element\_invalid\_closing\_tag

```
`</%name%>` attempted to close an element that was not open
```

### element\_invalid\_closing\_tag\_autoclosed

```
`</%name%>` attempted to close element that was already automatically closed by `<%reason%>` (cannot nest `<%reason%>` inside `<%name%>`)
```

### element\_unclosed

```
`<%name%>` was left open
```

### event\_handler\_invalid\_component\_modifier

```
Event modifiers other than 'once' can only be used on DOM elements
```

### event\_handler\_invalid\_modifier

```
Valid event modifiers are %list%
```

### event\_handler\_invalid\_modifier\_combination

```
The '%modifier1%' and '%modifier2%' modifiers cannot be used together
```

### expected\_attribute\_value

```
Expected attribute value
```

### expected\_block\_type

```
Expected 'if', 'each', 'await', 'key' or 'snippet'
```

### expected\_identifier

```
Expected an identifier
```

### expected\_pattern

```
Expected identifier or destructure pattern
```

### expected\_tag

```
Expected 'html', 'render', 'attach', 'const', or 'debug'
```

### expected\_token

```
Expected token %token%
```

### expected\_whitespace

```
Expected whitespace
```

### experimental\_async

```
Cannot use `await` in deriveds and template expressions, or at the top level of a component, unless the `experimental.async` compiler option is `true`
```

### export\_undefined

```
`%name%` is not defined
```

### global\_reference\_invalid

```
`%name%` is an illegal variable name. To reference a global variable called `%name%`, use `globalThis.%name%`
```

### host\_invalid\_placement

```
`$host()` can only be used inside custom element component instances
```

### illegal\_await\_expression

```
`use:`, `transition:` and `animate:` directives, attachments and bindings do not support await expressions
```

### illegal\_element\_attribute

```
`<%name%>` does not support non-event attributes or spread attributes
```

### import\_svelte\_internal\_forbidden

```
Imports of `svelte/internal/*` are forbidden. It contains private runtime code which is subject to change without notice. If you're importing from `svelte/internal/*` to work around a limitation of Svelte, please open an issue at https://github.com/sveltejs/svelte and explain your use case
```

### inspect\_trace\_generator

```
`$inspect.trace(...)` cannot be used inside a generator function
```

### inspect\_trace\_invalid\_placement

```
`$inspect.trace(...)` must be the first statement of a function body
```

### invalid\_arguments\_usage

```
The arguments keyword cannot be used within the template or at the top level of a component
```

### js\_parse\_error

```
%message%
```

### legacy\_await\_invalid

```
Cannot use `await` in deriveds and template expressions, or at the top level of a component, unless in runes mode
```

### legacy\_export\_invalid

```
Cannot use `export let` in runes mode — use `$props()` instead
```

### legacy\_props\_invalid

```
Cannot use `$$props` in runes mode
```

### legacy\_reactive\_statement\_invalid

```
`$:` is not allowed in runes mode, use `$derived` or `$effect` instead
```

### legacy\_rest\_props\_invalid

```
Cannot use `$$restProps` in runes mode
```

### let\_directive\_invalid\_placement

```
`let:` directive at invalid position
```

### mixed\_event\_handler\_syntaxes

```
Mixing old (on:%name%) and new syntaxes for event handling is not allowed. Use only the on%name% syntax
```

### module\_illegal\_default\_export

```
A component cannot have a default export
```

### node\_invalid\_placement

```
%message%. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
```

HTML restricts where certain elements can appear. In case of a violation the browser will 'repair' the HTML in a way that breaks Svelte's assumptions about the structure of your components. Some examples:

- `<p>hello <div>world</div></p>` will result in `<p>hello </p><div>world</div><p></p>` (the `<div>` autoclosed the `<p>` because `<p>` cannot contain block-level elements)
- `<option><div>option a</div></option>` will result in `<option>option a</option>` (the `<div>` is removed)
- `<table><tr><td>cell</td></tr></table>` will result in `<table><tbody><tr><td>cell</td></tr></tbody></table>` (a `<tbody>` is auto-inserted)

### options\_invalid\_value

```
Invalid compiler option: %details%
```

### options\_removed

```
Invalid compiler option: %details%
```

### options\_unrecognised

```
Unrecognised compiler option %keypath%
```

### props\_duplicate

```
Cannot use `%rune%()` more than once
```

### props\_id\_invalid\_placement

```
`$props.id()` can only be used at the top level of components as a variable declaration initializer
```

### props\_illegal\_name

```
Declaring or accessing a prop starting with `$$` is illegal (they are reserved for Svelte internals)
```

### props\_invalid\_identifier

```
`$props()` can only be used with an object destructuring pattern
```

### props\_invalid\_pattern

```
`$props()` assignment must not contain nested properties or computed keys
```

### props\_invalid\_placement

```
`$props()` can only be used at the top level of components as a variable declaration initializer
```

### reactive\_declaration\_cycle

```
Cyclical dependency detected: %cycle%
```

### render\_tag\_invalid\_call\_expression

```
Calling a snippet function using apply, bind or call is not allowed
```

### render\_tag\_invalid\_expression

```
`{@render ...}` tags can only contain call expressions
```

### render\_tag\_invalid\_spread\_argument

```
cannot use spread arguments in `{@render ...}` tags
```

### rune\_invalid\_arguments

```
`%rune%` cannot be called with arguments
```

### rune\_invalid\_arguments\_length

```
`%rune%` must be called with %args%
```

### rune\_invalid\_computed\_property

```
Cannot access a computed property of a rune
```

### rune\_invalid\_name

```
`%name%` is not a valid rune
```

### rune\_invalid\_spread

```
`%rune%` cannot be called with a spread argument
```

### rune\_invalid\_usage

```
Cannot use `%rune%` rune in non-runes mode
```

### rune\_missing\_parentheses

```
Cannot use rune without parentheses
```

### rune\_removed

```
The `%name%` rune has been removed
```

### rune\_renamed

```
`%name%` is now `%replacement%`
```

### runes\_mode\_invalid\_import

```
%name% cannot be used in runes mode
```

### script\_duplicate

```
A component can have a single top-level `<script>` element and/or a single top-level `<script module>` element
```

### script\_invalid\_attribute\_value

```
If the `%name%` attribute is supplied, it must be a boolean attribute
```

### script\_invalid\_context

```
If the context attribute is supplied, its value must be "module"
```

### script\_reserved\_attribute

```
The `%name%` attribute is reserved and cannot be used
```

### slot\_attribute\_duplicate

```
Duplicate slot name '%name%' in <%component%>
```

### slot\_attribute\_invalid

```
slot attribute must be a static value
```

### slot\_attribute\_invalid\_placement

```
Element with a slot='...' attribute must be a child of a component or a descendant of a custom element
```

### slot\_default\_duplicate

```
Found default slot content alongside an explicit slot="default"
```

### slot\_element\_invalid\_attribute

```
`<slot>` can only receive attributes and (optionally) let directives
```

### slot\_element\_invalid\_name

```
slot attribute must be a static value
```

### slot\_element\_invalid\_name\_default

```
`default` is a reserved word — it cannot be used as a slot name
```

### slot\_snippet\_conflict

```
Cannot use `<slot>` syntax and `{@render ...}` tags in the same component. Migrate towards `{@render ...}` tags completely
```

### snippet\_conflict

```
Cannot use explicit children snippet at the same time as implicit children content. Remove either the non-whitespace content or the children snippet block
```

### snippet\_invalid\_export

```
An exported snippet can only reference things declared in a `<script module>`, or other exportable snippets
```

It's possible to export a snippet from a `<script module>` block, but only if it doesn't reference anything defined inside a non-module-level `<script>`. For example you can't do this...

```svelte
<script module>
	export { greeting };
</script>

<script>
	let message = 'hello';
</script>

{#snippet greeting(name)}
	<p>{message} {name}!</p>
{/snippet}
```

...because `greeting` references `message`, which is defined in the second `<script>`.

### snippet\_invalid\_rest\_parameter

```
Snippets do not support rest parameters; use an array instead
```

### snippet\_parameter\_assignment

```
Cannot reassign or bind to snippet parameter
```

### snippet\_shadowing\_prop

```
This snippet is shadowing the prop `%prop%` with the same name
```

### state\_field\_duplicate

```
`%name%` has already been declared on this class
```

An assignment to a class field that uses a `$state` or `$derived` rune is considered a *state field declaration*. The declaration can happen in the class body...

```js
class Counter {
	count = $state(0);
}
```

...or inside the constructor...

```js
class Counter {
	constructor() {
		this.count = $state(0);
	}
}
```

...but it can only happen once.

### state\_field\_invalid\_assignment

```
Cannot assign to a state field before its declaration
```

### state\_invalid\_export

```
Cannot export state from a module if it is reassigned. Either export a function returning the state value or only mutate the state value's properties
```

### state\_invalid\_placement

```
`%rune%(...)` can only be used as a variable declaration initializer, a class field declaration, or the first assignment to a class field at the top level of the constructor.
```

### store\_invalid\_scoped\_subscription

```
Cannot subscribe to stores that are not declared at the top level of the component
```

### store\_invalid\_subscription

```
Cannot reference store value inside `<script module>`
```

### store\_invalid\_subscription\_module

```
Cannot reference store value outside a `.svelte` file
```

Using a `$` prefix to refer to the value of a store is only possible inside `.svelte` files, where Svelte can automatically create subscriptions when a component is mounted and unsubscribe when the component is unmounted. Consider migrating to runes instead.

### style\_directive\_invalid\_modifier

```
`style:` directive can only use the `important` modifier
```

### style\_duplicate

```
A component can have a single top-level `<style>` element
```

### svelte\_body\_illegal\_attribute

```
`<svelte:body>` does not support non-event attributes or spread attributes
```

### svelte\_boundary\_invalid\_attribute

```
Valid attributes on `<svelte:boundary>` are `onerror` and `failed`
```

### svelte\_boundary\_invalid\_attribute\_value

```
Attribute value must be a non-string expression
```

### svelte\_component\_invalid\_this

```
Invalid component definition — must be an `{expression}`
```

### svelte\_component\_missing\_this

```
`<svelte:component>` must have a 'this' attribute
```

### svelte\_element\_missing\_this

```
`<svelte:element>` must have a 'this' attribute with a value
```

### svelte\_fragment\_invalid\_attribute

```
`<svelte:fragment>` can only have a slot attribute and (optionally) a let: directive
```

### svelte\_fragment\_invalid\_placement

```
`<svelte:fragment>` must be the direct child of a component
```

### svelte\_head\_illegal\_attribute

```
`<svelte:head>` cannot have attributes nor directives
```

### svelte\_meta\_duplicate

```
A component can only have one `<%name%>` element
```

### svelte\_meta\_invalid\_content

```
<%name%> cannot have children
```

### svelte\_meta\_invalid\_placement

```
`<%name%>` tags cannot be inside elements or blocks
```

### svelte\_meta\_invalid\_tag

```
Valid `<svelte:...>` tag names are %list%
```

### svelte\_options\_deprecated\_tag

```
"tag" option is deprecated — use "customElement" instead
```

### svelte\_options\_invalid\_attribute

```
`<svelte:options>` can only receive static attributes
```

### svelte\_options\_invalid\_attribute\_value

```
Value must be %list%, if specified
```

### svelte\_options\_invalid\_customelement

```
"customElement" must be a string literal defining a valid custom element name or an object of the form { tag?: string; shadow?: "open" | "none" | `ShadowRootInit`; props?: { [key: string]: { attribute?: string; reflect?: boolean; type: .. } } }
```

### svelte\_options\_invalid\_customelement\_props

```
"props" must be a statically analyzable object literal of the form "{ [key: string]: { attribute?: string; reflect?: boolean; type?: "String" | "Boolean" | "Number" | "Array" | "Object" }"
```

### svelte\_options\_invalid\_customelement\_shadow

```
"shadow" must be either "open", "none" or `ShadowRootInit` object.
```

See https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#options for more information on valid shadow root constructor options

### svelte\_options\_invalid\_tagname

```
Tag name must be lowercase and hyphenated
```

See https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name for more information on valid tag names

### svelte\_options\_reserved\_tagname

```
Tag name is reserved
```

See https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name for more information on valid tag names

### svelte\_options\_unknown\_attribute

```
`<svelte:options>` unknown attribute '%name%'
```

### svelte\_self\_invalid\_placement

```
`<svelte:self>` components can only exist inside `{#if}` blocks, `{#each}` blocks, `{#snippet}` blocks or slots passed to components
```

### tag\_invalid\_name

```
Expected a valid element or component name. Components must have a valid variable name or dot notation expression
```

### tag\_invalid\_placement

```
{@%name% ...} tag cannot be %location%
```

### textarea\_invalid\_content

```
A `<textarea>` can have either a value attribute or (equivalently) child content, but not both
```

### title\_illegal\_attribute

```
`<title>` cannot have attributes nor directives
```

### title\_invalid\_content

```
`<title>` can only contain text and {tags}
```

### transition\_conflict

```
Cannot use `%type%:` alongside existing `%existing%:` directive
```

### transition\_duplicate

```
Cannot use multiple `%type%:` directives on a single element
```

### typescript\_invalid\_feature

```
TypeScript language features like %feature% are not natively supported, and their use is generally discouraged. Outside of `<script>` tags, these features are not supported. For use within `<script>` tags, you will need to use a preprocessor to convert it to JavaScript before it gets passed to the Svelte compiler. If you are using `vitePreprocess`, make sure to specifically enable preprocessing script tags (`vitePreprocess({ script: true })`)
```

### unexpected\_eof

```
Unexpected end of input
```

### unexpected\_reserved\_word

```
'%word%' is a reserved word in JavaScript and cannot be used here
```

### unterminated\_string\_constant

```
Unterminated string constant
```

### void\_element\_invalid\_content

```
Void elements cannot have children or closing tags
```
