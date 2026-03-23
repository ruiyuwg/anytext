-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Interface IDataStore (1.59.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.59.0keyboard\_arrow\_down

-   [1.73.0 (latest)](/dotnet/docs/reference/Google.Apis/latest/Google.Apis.Util.Store.IDataStore)
-   [1.69.0](/dotnet/docs/reference/Google.Apis/1.69.0/Google.Apis.Util.Store.IDataStore)
-   [1.68.0](/dotnet/docs/reference/Google.Apis/1.68.0/Google.Apis.Util.Store.IDataStore)
-   [1.60.0](/dotnet/docs/reference/Google.Apis/1.60.0/Google.Apis.Util.Store.IDataStore)
-   [1.59.0](/dotnet/docs/reference/Google.Apis/1.59.0/Google.Apis.Util.Store.IDataStore)
-   [1.55.0](/dotnet/docs/reference/Google.Apis/1.55.0/Google.Apis.Util.Store.IDataStore)
-   [1.50.0](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Util.Store.IDataStore)

```
public interface IDataStore
```

Stores and manages data objects, where the key is a string and the value is an object.

`null` keys are not allowed.

## Namespace

[Google.Apis.Util.Store](/dotnet/docs/reference/Google.Apis/1.59.0/Google.Apis.Util.Store)

## Assembly

Google.Apis.Core.dll

## Methods

### ClearAsync()

```
Task ClearAsync()
```

Asynchronously clears all values in the data store.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

### DeleteAsync<T>(String)

```
Task DeleteAsync<T>(string key)
```

Asynchronously deletes the given key. The type is provided here as well because the "real" saved key should contain type information as well, so the data store will be able to store the same key for different types.

**Parameter**

**Name**

**Description**

`key`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The key to delete.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

**Type Parameter**

**Name**

**Description**

`T`

The type to delete from the data store.

### GetAsync<T>(String)

```
Task<T> GetAsync<T>(string key)
```

Asynchronously returns the stored value for the given key or `null` if not found.

**Parameter**

**Name**

**Description**

`key`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The key to retrieve its value.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<T>`

The stored object.

**Type Parameter**

**Name**

**Description**

`T`

The type to retrieve from the data store.

### StoreAsync<T>(String, T)

```
Task StoreAsync<T>(string key, T value)
```

Asynchronously stores the given value for the given key (replacing any existing value).

**Parameters**

**Name**

**Description**

`key`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The key.

`value`

`T`  

The value to store.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

**Type Parameter**

**Name**

**Description**

`T`

The type to store in the data store.

## Extension Method

[Utilities.ThrowIfNull<T>(T, String)](/dotnet/docs/reference/Google.Apis/1.59.0/Google.Apis.Util.Utilities#Google_Apis_Util_Utilities_ThrowIfNull__1___0_System_String_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
