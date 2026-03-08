## Storages (API)

### deleteGlobalConfig

Deletes the global configuration.

```ts
v.deleteGlobalConfig();
```

### deleteGlobalMessage

Deletes a global error message.

```ts
v.deleteGlobalMessage(lang);
```

#### Parameters

- `lang`

### deleteSchemaMessage

Deletes a schema error message.

```ts
v.deleteSchemaMessage(lang);
```

#### Parameters

- `lang`

### deleteSpecificMessage

Deletes a specific error message.

```ts
v.deleteSpecificMessage(reference, lang);
```

#### Parameters

- `reference`
- `lang`

### getGlobalConfig

Returns the global configuration.

```ts
const config = v.getGlobalConfig<TIssue>(merge);
```

#### Generics

- `TIssue`

#### Parameters

- `merge`

##### Explanation

Properties that you want to explicitly override can be optionally specified with `merge`.

#### Returns

- `config`

### getGlobalMessage

Returns a global error message.

```ts
const message = v.getGlobalMessage(lang);
```

#### Parameters

- `lang`

#### Returns

- `message`

### getSchemaMessage

Returns a schema error message.

```ts
const message = v.getSchemaMessage(lang);
```

#### Parameters

- `lang`

#### Returns

- `message`

### getSpecificMessage

Returns a specific error message.

```ts
const message = v.getSpecificMessage(reference, lang);
```

#### Parameters

- `reference`
- `lang`

#### Returns

- `message`

### setGlobalConfig

Sets the global configuration.

```ts
v.setGlobalConfig(merge);
```

#### Parameters

- `config`

##### Explanation

The properties specified by `config` are merged with the existing global configuration. If a property is already set, it will be overwritten.

### setGlobalMessage

Sets a global error message.

```ts
v.setGlobalMessage(message, lang);
```

#### Parameters

- `message`
- `lang`

### setSchemaMessage

Sets a schema error message.

```ts
v.setSchemaMessage(message, lang);
```

#### Parameters

- `message`
- `lang`

### setSpecificMessage

Sets a specific error message.

```ts
v.setSpecificMessage<TReference>(reference, message, lang);
```

#### Generics

- `TReference`

#### Parameters

- `reference`
- `message`
- `lang`
