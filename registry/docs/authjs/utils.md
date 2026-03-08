[API reference](/reference/overview "API reference")[@auth/typeorm-adapter](/reference/typeorm-adapter "@auth/typeorm-adapter")utils

# utils

## parseDataSourceConfig()[](#parsedatasourceconfig)

```
function parseDataSourceConfig(configOrString): DataSourceOptions
```

Ensure configOrString is normalized to an object.

### Parameters[](#parameters)

Parameter

Type

`configOrString`

`string` | `DataSourceOptions`

### Returns[](#returns)

`DataSourceOptions`

* * *

## updateConnectionEntities()[](#updateconnectionentities)

```
function updateConnectionEntities(dataSource, entities): Promise<void>
```

### Parameters[](#parameters-1)

Parameter

Type

`dataSource`

`DataSource`

`entities`

`any`\[\]

### Returns[](#returns-1)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

[entities](/reference/typeorm-adapter/entities "entities")[@auth/unstorage-adapter](/reference/unstorage-adapter "@auth/unstorage-adapter")
