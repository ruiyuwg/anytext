-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ExecuteBatchDmlRequest.StatementOrBuilder (6.58.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public static interface ExecuteBatchDmlRequest.StatementOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsParamTypes(String key)

```
public abstract boolean containsParamTypes(String key)
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getParamTypes()

```
public abstract Map<String,Type> getParamTypes()
```

Use [#getParamTypesMap()](/java/docs/reference/google-cloud-spanner/6.58.0/com.google.spanner.v1.ExecuteBatchDmlRequest.StatementOrBuilder#com_google_spanner_v1_ExecuteBatchDmlRequest_StatementOrBuilder_getParamTypesMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Type](/java/docs/reference/google-cloud-spanner/6.58.0/com.google.spanner.v1.Type)>`

### getParamTypesCount()

```
public abstract int getParamTypesCount()
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getParamTypesMap()

```
public abstract Map<String,Type> getParamTypesMap()
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 3;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Type](/java/docs/reference/google-cloud-spanner/6.58.0/com.google.spanner.v1.Type)>`

### getParamTypesOrDefault(String key, Type defaultValue)

```
public abstract Type getParamTypesOrDefault(String key, Type defaultValue)
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 3;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[Type](/java/docs/reference/google-cloud-spanner/6.58.0/com.google.spanner.v1.Type)`  

**Returns**

**Type**

**Description**

`[Type](/java/docs/reference/google-cloud-spanner/6.58.0/com.google.spanner.v1.Type)`

### getParamTypesOrThrow(String key)

```
public abstract Type getParamTypesOrThrow(String key)
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Type](/java/docs/reference/google-cloud-spanner/6.58.0/com.google.spanner.v1.Type)`

### getParams()

```
public abstract Struct getParams()
```

Parameter names and values that bind to placeholders in the DML string.

A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores.

Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example:

`"WHERE id > @msg_id AND id < @msg_id + 100"`

It is an error to execute a SQL statement with unbound parameters.

`.google.protobuf.Struct params = 2;`

**Returns**

**Type**

**Description**

`[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)`

The params.

### getParamsOrBuilder()

```
public abstract StructOrBuilder getParamsOrBuilder()
```

Parameter names and values that bind to placeholders in the DML string.

A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores.

Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example:

`"WHERE id > @msg_id AND id < @msg_id + 100"`

It is an error to execute a SQL statement with unbound parameters.

`.google.protobuf.Struct params = 2;`

**Returns**

**Type**

**Description**

`[StructOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.StructOrBuilder.html)`

### getSql()

```
public abstract String getSql()
```

Required. The DML string.

`string sql = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sql.

### getSqlBytes()

```
public abstract ByteString getSqlBytes()
```

Required. The DML string.

`string sql = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sql.

### hasParams()

```
public abstract boolean hasParams()
```

Parameter names and values that bind to placeholders in the DML string.

A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores.

Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example:

`"WHERE id > @msg_id AND id < @msg_id + 100"`

It is an error to execute a SQL statement with unbound parameters.

`.google.protobuf.Struct params = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the params field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
