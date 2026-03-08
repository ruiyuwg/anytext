[API reference](/reference/overview "API reference")[@auth/hasura-adapter](/reference/hasura-adapter "@auth/hasura-adapter")libClient

# lib/client

## HasuraClientError[](#hasuraclienterror)

### Extends[](#extends)

-   [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

### Constructors[](#constructors)

#### new HasuraClientError()[](#new-hasuraclienterror)

```
new HasuraClientError(
   errors, 
   query, 
   variables): HasuraClientError
```

##### Parameters[](#parameters)

Parameter

Type

`errors`

`any`\[\]

`query`

`TypedDocumentString`<`any`, `any`\>

`variables`

`any`

##### Returns[](#returns)

[`HasuraClientError`](client#hasuraclienterror)

##### Overrides[](#overrides)

`Error.constructor`

### Properties[](#properties)

#### message[](#message)

```
message: string;
```

##### Inherited from[](#inherited-from)

`Error.message`

#### name[](#name)

```
name: string = "HasuraClientError";
```

##### Overrides[](#overrides-1)

`Error.name`

#### stack?[](#stack)

```
optional stack: string;
```

##### Inherited from[](#inherited-from-1)

`Error.stack`

#### prepareStackTrace()?[](#preparestacktrace)

```
static optional prepareStackTrace: (err, stackTraces) => any;
```

Optional override for formatting stack traces

##### Parameters[](#parameters-1)

Parameter

Type

`err`

[`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

`stackTraces`

`CallSite`\[\]

##### Returns[](#returns-1)

`any`

##### See[](#see)

[https://v8.dev/docs/stack-trace-api#customizing-stack-traces](https://v8.dev/docs/stack-trace-api#customizing-stack-traces)

##### Inherited from[](#inherited-from-2)

`Error.prepareStackTrace`

#### stackTraceLimit[](#stacktracelimit)

```
static stackTraceLimit: number;
```

##### Inherited from[](#inherited-from-3)

`Error.stackTraceLimit`

### Methods[](#methods)

#### captureStackTrace()[](#capturestacktrace)

```
static captureStackTrace(targetObject, constructorOpt?): void
```

Create .stack property on a target object

##### Parameters[](#parameters-2)

Parameter

Type

`targetObject`

`object`

`constructorOpt`?

[`Function`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function)

##### Returns[](#returns-2)

`void`

##### Inherited from[](#inherited-from-4)

`Error.captureStackTrace`

* * *

## HasuraAdapterClient[](#hasuraadapterclient)

### Properties[](#properties-1)

#### adminSecret[](#adminsecret)

```
adminSecret: string;
```

`x-hasura-admin-secret` header value

[Hasura Authentication](https://hasura.io/docs/search/?q=x-hasura-admin-secret)

#### endpoint[](#endpoint)

```
endpoint: string;
```

* * *

## client()[](#client)

```
function client(__namedParameters): {
  run: Promise<T>;
}
```

### Parameters[](#parameters-3)

Parameter

Type

`__namedParameters`

[`HasuraAdapterClient`](client#hasuraadapterclient)

### Returns[](#returns-3)

```
{
  run: Promise<T>;
}
```

#### run()[](#run)

##### Type Parameters[](#type-parameters)

Type Parameter

`Q` _extends_ `TypedDocumentString`<`any`, `any`\>

`T` _extends_ `any`

`V` _extends_ `any`

##### Parameters[](#parameters-4)

Parameter

Type

`query`

`Q`

`variables`?

`V`

##### Returns[](#returns-4)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`T`\>

[@auth/hasura-adapter](/reference/hasura-adapter "@auth/hasura-adapter")[@auth/kysely-adapter](/reference/kysely-adapter "@auth/kysely-adapter")
