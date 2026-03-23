-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# AlloyDB v1 API - Class User (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [1.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/latest/Google.Cloud.AlloyDb.V1.User)
-   [1.13.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.13.0/Google.Cloud.AlloyDb.V1.User)
-   [1.12.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.12.0/Google.Cloud.AlloyDb.V1.User)
-   [1.11.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.11.0/Google.Cloud.AlloyDb.V1.User)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.10.0/Google.Cloud.AlloyDb.V1.User)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.9.0/Google.Cloud.AlloyDb.V1.User)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.8.0/Google.Cloud.AlloyDb.V1.User)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.7.0/Google.Cloud.AlloyDb.V1.User)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.6.0/Google.Cloud.AlloyDb.V1.User)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.5.0/Google.Cloud.AlloyDb.V1.User)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.4.0/Google.Cloud.AlloyDb.V1.User)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.3.0/Google.Cloud.AlloyDb.V1.User)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.2.0/Google.Cloud.AlloyDb.V1.User)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.User)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.User)

```
public sealed class User : IMessage<User>, IEquatable<User>, IDeepCloneable<User>, IBufferMessage, IMessage
```

Reference documentation and code samples for the AlloyDB v1 API class User.

Message describing User object.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> User

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[User](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.User), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[User](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.User), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[User](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.User), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AlloyDb.V1](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1)

## Assembly

Google.Cloud.AlloyDb.V1.dll

## Constructors

### User()

```
public User()
```

### User(User)

```
public User(User other)
```

**Parameter**

**Name**

**Description**

`other`

`[User](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.User)`  

## Properties

### DatabaseRoles

```
public RepeatedField<string> DatabaseRoles { get; }
```

Optional. List of database roles this user has. The database role strings are subject to the PostgreSQL naming conventions.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Name

```
public string Name { get; set; }
```

Output only. Name of the resource in the form of projects/{project}/locations/{location}/cluster/{cluster}/users/{user}.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Password

```
public string Password { get; set; }
```

Input only. Password for the user.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### UserName

```
public UserName UserName { get; set; }
```

[UserName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.UserName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.User#Google_Cloud_AlloyDb_V1_User_Name) resource name property.

**Property Value**

**Type**

**Description**

`[UserName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.UserName)`

### UserType

```
public User.Types.UserType UserType { get; set; }
```

Optional. Type of this user.

**Property Value**

**Type**

**Description**

`[User](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.User)[Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.User.Types)[UserType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.User.Types.UserType)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
