On this page

JSHandle represents an in-page JavaScript object. JSHandles can be created with the [page.evaluateHandle()](/docs/api/class-page#page-evaluate-handle) method.

```
const windowHandle = await page.evaluateHandle(() => window);// ...
```

JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with [jsHandle.dispose()](/docs/api/class-jshandle#js-handle-dispose). JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed.

JSHandle instances can be used as an argument in [page.$eval()](/docs/api/class-page#page-eval-on-selector), [page.evaluate()](/docs/api/class-page#page-evaluate) and [page.evaluateHandle()](/docs/api/class-page#page-evaluate-handle) methods.

* * *

## Methods[​](#methods "Direct link to Methods")

### asElement[​](#js-handle-as-element "Direct link to asElement")

Added before v1.9 jsHandle.asElement

Returns either `null` or the object handle itself, if the object handle is an instance of [ElementHandle](/docs/api/class-elementhandle "ElementHandle").

**Usage**

```
jsHandle.asElement();
```

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [ElementHandle](/docs/api/class-elementhandle "ElementHandle")[#](#js-handle-as-element-return)

* * *

### dispose[​](#js-handle-dispose "Direct link to dispose")

Added before v1.9 jsHandle.dispose

The `jsHandle.dispose` method stops referencing the element handle.

**Usage**

```
await jsHandle.dispose();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#js-handle-dispose-return)

* * *

### evaluate[​](#js-handle-evaluate "Direct link to evaluate")

Added before v1.9 jsHandle.evaluate

Returns the return value of [pageFunction](/docs/api/class-jshandle#js-handle-evaluate-option-expression).

This method passes this handle as the first argument to [pageFunction](/docs/api/class-jshandle#js-handle-evaluate-option-expression).

If [pageFunction](/docs/api/class-jshandle#js-handle-evaluate-option-expression) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"), then `handle.evaluate` would wait for the promise to resolve and return its value.

**Usage**

```
const tweetHandle = await page.$('.tweet .retweets');expect(await tweetHandle.evaluate(node => node.innerText)).toBe('10 retweets');
```

**Arguments**

-   `pageFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#js-handle-evaluate-option-expression)
    
    Function to be evaluated in the page context.
    
-   `arg` [EvaluationArgument](/docs/evaluating#evaluation-argument "EvaluationArgument") _(optional)_[#](#js-handle-evaluate-option-arg)
    
    Optional argument to pass to [pageFunction](/docs/api/class-jshandle#js-handle-evaluate-option-expression).
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable")\>[#](#js-handle-evaluate-return)

* * *

### evaluateHandle[​](#js-handle-evaluate-handle "Direct link to evaluateHandle")

Added before v1.9 jsHandle.evaluateHandle

Returns the return value of [pageFunction](/docs/api/class-jshandle#js-handle-evaluate-handle-option-expression) as a [JSHandle](/docs/api/class-jshandle "JSHandle").

This method passes this handle as the first argument to [pageFunction](/docs/api/class-jshandle#js-handle-evaluate-handle-option-expression).

The only difference between `jsHandle.evaluate` and `jsHandle.evaluateHandle` is that `jsHandle.evaluateHandle` returns [JSHandle](/docs/api/class-jshandle "JSHandle").

If the function passed to the `jsHandle.evaluateHandle` returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"), then `jsHandle.evaluateHandle` would wait for the promise to resolve and return its value.

See [page.evaluateHandle()](/docs/api/class-page#page-evaluate-handle) for more details.

**Usage**

```
await jsHandle.evaluateHandle(pageFunction);await jsHandle.evaluateHandle(pageFunction, arg);
```

**Arguments**

-   `pageFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#js-handle-evaluate-handle-option-expression)
    
    Function to be evaluated in the page context.
    
-   `arg` [EvaluationArgument](/docs/evaluating#evaluation-argument "EvaluationArgument") _(optional)_[#](#js-handle-evaluate-handle-option-arg)
    
    Optional argument to pass to [pageFunction](/docs/api/class-jshandle#js-handle-evaluate-handle-option-expression).
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[JSHandle](/docs/api/class-jshandle "JSHandle")\>[#](#js-handle-evaluate-handle-return)

* * *

### getProperties[​](#js-handle-get-properties "Direct link to getProperties")

Added before v1.9 jsHandle.getProperties

The method returns a map with **own property names** as keys and JSHandle instances for the property values.

**Usage**

```
const handle = await page.evaluateHandle(() => ({ window, document }));const properties = await handle.getProperties();const windowHandle = properties.get('window');const documentHandle = properties.get('document');await handle.dispose();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map "Map")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [JSHandle](/docs/api/class-jshandle "JSHandle")\>>[#](#js-handle-get-properties-return)

* * *

### getProperty[​](#js-handle-get-property "Direct link to getProperty")

Added before v1.9 jsHandle.getProperty

Fetches a single property from the referenced object.

**Usage**

```
await jsHandle.getProperty(propertyName);
```

**Arguments**

-   `propertyName` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#js-handle-get-property-option-property-name)
    
    property to get
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[JSHandle](/docs/api/class-jshandle "JSHandle")\>[#](#js-handle-get-property-return)

* * *

### jsonValue[​](#js-handle-json-value "Direct link to jsonValue")

Added before v1.9 jsHandle.jsonValue

Returns a JSON representation of the object. If the object has a `toJSON` function, it **will not be called**.

note

The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references.

**Usage**

```
await jsHandle.jsonValue();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable")\>[#](#js-handle-json-value-return)
