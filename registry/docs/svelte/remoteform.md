## RemoteForm

The return value of a remote `form` function. See [Remote functions](/docs/kit/remote-functions#form) for full documentation.

````dts
type RemoteForm<
	Input extends RemoteFormInput | void,
	Output
> = {
	/** Attachment that sets up an event handler that intercepts the form submission on the client to prevent a full page reload */
	[attachment: symbol]: (node: HTMLFormElement) => void;
	method: 'POST';
	/** The URL to send the form to. */
	action: string;
	/** Use the `enhance` method to influence what happens when the form is submitted. */
	enhance(
		callback: (opts: {
			form: HTMLFormElement;
			data: Input;
			submit: () => Promise<void> & {
				updates: (
					...queries: Array<
						RemoteQuery<any> | RemoteQueryOverride
					>
				) => Promise<void>;
			};
		}) => void | Promise<void>
	): {
		method: 'POST';
		action: string;
		[attachment: symbol]: (node: HTMLFormElement) => void;
	};
	/**
	 * Create an instance of the form for the given `id`.
	 * The `id` is stringified and used for deduplication to potentially reuse existing instances.
	 * Useful when you have multiple forms that use the same remote form action, for example in a loop.
	 * ```svelte
	 * {#each todos as todo}
	 *	{@const todoForm = updateTodo.for(todo.id)}
	 *	<form {...todoForm}>
	 *		{#if todoForm.result?.invalid}<p>Invalid data</p>{/if}
	 *		...
	 *	</form>
	 *	{/each}
	 * ```
	 */
	for(
		id: ExtractId<Input>
	): Omit<RemoteForm<Input, Output>, 'for'>;
	/** Preflight checks */
	preflight(
		schema: StandardSchemaV1<Input, any>
	): RemoteForm<Input, Output>;
	/** Validate the form contents programmatically */
	validate(options?: {
		/** Set this to `true` to also show validation issues of fields that haven't been touched yet. */
		includeUntouched?: boolean;
		/** Set this to `true` to only run the `preflight` validation. */
		preflightOnly?: boolean;
	}): Promise<void>;
	/** The result of the form submission */
	get result(): Output | undefined;
	/** The number of pending submissions */
	get pending(): number;
	/** Access form fields using object notation */
	fields: RemoteFormFieldsRoot<Input>;
};
````

## RemoteFormField

Form field accessor type that provides name(), value(), and issues() methods

````dts
type RemoteFormField<Value extends RemoteFormFieldValue> =
	RemoteFormFieldMethods<Value> & {
		/**
		 * Returns an object that can be spread onto an input element with the correct type attribute,
		 * aria-invalid attribute if the field is invalid, and appropriate value/checked property getters/setters.
		 * @example
		 * ```svelte
		 * <input {...myForm.fields.myString.as('text')} />
		 * <input {...myForm.fields.myNumber.as('number')} />
		 * <input {...myForm.fields.myBoolean.as('checkbox')} />
		 * ```
		 */
		as<T extends RemoteFormFieldType<Value>>(
			...args: AsArgs<T, Value>
		): InputElementProps<T>;
	};
````

## RemoteFormFieldType

```dts
type RemoteFormFieldType<T> = {
	[K in keyof InputTypeMap]: T extends InputTypeMap[K]
		? K
		: never;
}[keyof InputTypeMap];
```

## RemoteFormFieldValue

```dts
type RemoteFormFieldValue =
	| string
	| string[]
	| number
	| boolean
	| File
	| File[];
```

## RemoteFormFields

Recursive type to build form fields structure with proxy access

```dts
type RemoteFormFields<T> =
	WillRecurseIndefinitely<T> extends true
		? RecursiveFormFields
		: NonNullable<T> extends
					| string
					| number
					| boolean
					| File
			? RemoteFormField<NonNullable<T>>
			: T extends string[] | File[]
				? RemoteFormField<T> & {
						[K in number]: RemoteFormField<T[number]>;
					}
				: T extends Array<infer U>
					? RemoteFormFieldContainer<T> & {
							[K in number]: RemoteFormFields<U>;
						}
					: RemoteFormFieldContainer<T> & {
							[K in keyof T]-?: RemoteFormFields<T[K]>;
						};
```

## RemoteFormInput

```dts
interface RemoteFormInput {/*…*/}
```

```dts
[key: string]: MaybeArray<string | number | boolean | File | RemoteFormInput>;
```

## RemoteFormIssue

```dts
interface RemoteFormIssue {/*…*/}
```

```dts
message: string;
```

```dts
path: Array<string | number>;
```

## RemotePrerenderFunction

The return value of a remote `prerender` function. See [Remote functions](/docs/kit/remote-functions#prerender) for full documentation.

```dts
type RemotePrerenderFunction<Input, Output> = (
	arg: undefined extends Input ? Input | void : Input
) => RemoteResource<Output>;
```

## RemoteQuery

````dts
type RemoteQuery<T> = RemoteResource<T> & {
	/**
	 * On the client, this function will update the value of the query without re-fetching it.
	 *
	 * On the server, this can be called in the context of a `command` or `form` and the specified data will accompany the action response back to the client.
	 * This prevents SvelteKit needing to refresh all queries on the page in a second server round-trip.
	 */
	set(value: T): void;
	/**
	 * On the client, this function will re-fetch the query from the server.
	 *
	 * On the server, this can be called in the context of a `command` or `form` and the refreshed data will accompany the action response back to the client.
	 * This prevents SvelteKit needing to refresh all queries on the page in a second server round-trip.
	 */
	refresh(): Promise<void>;
	/**
	 * Temporarily override the value of a query. This is used with the `updates` method of a [command](https://svelte.dev/docs/kit/remote-functions#command-Updating-queries) or [enhanced form submission](https://svelte.dev/docs/kit/remote-functions#form-enhance) to provide optimistic updates.
	 *
	 * ```svelte
	 * <script>
	 *   import { getTodos, addTodo } from './todos.remote.js';
	 *   const todos = getTodos();
	 * </script>
	 *
	 * <form {...addTodo.enhance(async ({ data, submit }) => {
	 *   await submit().updates(
	 *     todos.withOverride((todos) => [...todos, { text: data.get('text') }])
	 *   );
	 * })}>
	 *   <input type="text" name="text" />
	 *   <button type="submit">Add Todo</button>
	 * </form>
	 * ```
	 */
	withOverride(
		update: (current: Awaited<T>) => Awaited<T>
	): RemoteQueryOverride;
};
````

## RemoteQueryFunction

The return value of a remote `query` function. See [Remote functions](/docs/kit/remote-functions#query) for full documentation.

```dts
type RemoteQueryFunction<Input, Output> = (
	arg: undefined extends Input ? Input | void : Input
) => RemoteQuery<Output>;
```

## RemoteQueryOverride

```dts
interface RemoteQueryOverride {/*…*/}
```

```dts
_key: string;
```

```dts
release(): void;
```

## RemoteResource

```dts
type RemoteResource<T> = Promise<Awaited<T>> & {
	/** The error in case the query fails. Most often this is a [`HttpError`](https://svelte.dev/docs/kit/@sveltejs-kit#HttpError) but it isn't guaranteed to be. */
	get error(): any;
	/** `true` before the first result is available and during refreshes */
	get loading(): boolean;
} & (
		| {
				/** The current value of the query. Undefined until `ready` is `true` */
				get current(): undefined;
				ready: false;
		  }
		| {
				/** The current value of the query. Undefined until `ready` is `true` */
				get current(): Awaited<T>;
				ready: true;
		  }
	);
```
