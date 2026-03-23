-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class Mutation.Types.Write (4.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 4.0.0keyboard\_arrow\_down

-   [5.13.0-beta04](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.13.0-beta04/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.13.0-beta03](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.13.0-beta03/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.12.0 (latest)](/dotnet/docs/reference/Google.Cloud.Spanner.V1/latest/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.11.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.11.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.10.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.10.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.9.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.9.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.8.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.8.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.7.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.7.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.6.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.6.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.5.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.5.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.4.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.4.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.3.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.3.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.2.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.2.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.1.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.1.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [5.0.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.0.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [4.6.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.6.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [4.5.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.5.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.4.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.3.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.2.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.1.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.0.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [3.15.1](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.15.1/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.14.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.13.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.12.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.11.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.10.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.9.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.8.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.7.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.6.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.5.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)

```
public sealed class Write : IMessage<Mutation.Types.Write>, IEquatable<Mutation.Types.Write>, IDeepCloneable<Mutation.Types.Write>, IBufferMessage, IMessage
```

Arguments to \[insert\]\[google.spanner.v1.Mutation.insert\], \[update\]\[google.spanner.v1.Mutation.update\], \[insert\_or\_update\]\[google.spanner.v1.Mutation.insert\_or\_update\], and \[replace\]\[google.spanner.v1.Mutation.replace\] operations.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> Mutation.Types.Write

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[Mutation.Types.Write](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.0.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[Mutation.Types.Write](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.0.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[Mutation.Types.Write](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.0.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Spanner.V1](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.0.0/Google.Cloud.Spanner.V1)

## Assembly

Google.Cloud.Spanner.V1.dll

## Constructors

### Write()

```
public Write()
```

### Write(Mutation.Types.Write)

```
public Write(Mutation.Types.Write other)
```

**Parameter**

**Name**

**Description**

`other`

`[Mutation.Types.Write](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.0.0/Google.Cloud.Spanner.V1.Mutation.Types.Write)`  

## Properties

### Columns

```
public RepeatedField<string> Columns { get; }
```

The names of the columns in \[table\]\[google.spanner.v1.Mutation.Write.table\] to be written.

The list of columns must contain enough columns to allow Cloud Spanner to derive values for all primary key columns in the row(s) to be modified.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

### Table

```
public string Table { get; set; }
```

Required. The table whose rows will be written.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Values

```
public RepeatedField<ListValue> Values { get; }
```

The values to be written. `values` can contain more than one list of values. If it does, then multiple rows are written, one for each entry in `values`. Each list in `values` must have exactly as many entries as there are entries in \[columns\]\[google.spanner.v1.Mutation.Write.columns\] above. Sending multiple lists is equivalent to sending multiple `Mutation`s, each containing one `values` entry and repeating \[table\]\[google.spanner.v1.Mutation.Write.table\] and \[columns\]\[google.spanner.v1.Mutation.Write.columns\]. Individual values in each list are encoded as described \[here\]\[google.spanner.v1.TypeCode\].

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[ListValue](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.ListValue.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
