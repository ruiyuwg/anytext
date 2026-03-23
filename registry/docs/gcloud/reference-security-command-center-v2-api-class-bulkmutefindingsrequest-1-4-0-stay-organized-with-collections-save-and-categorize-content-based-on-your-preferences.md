-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Security Command Center v2 API - Class BulkMuteFindingsRequest (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.4.0 (latest)](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/latest/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/1.3.0/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/1.2.0/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/1.1.0/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/1.0.0/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest)

```
public sealed class BulkMuteFindingsRequest : IMessage<BulkMuteFindingsRequest>, IEquatable<BulkMuteFindingsRequest>, IDeepCloneable<BulkMuteFindingsRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Security Command Center v2 API class BulkMuteFindingsRequest.

Request message for bulk findings update.

Note:

1.  If multiple bulk update requests match the same resource, the order in which they get executed is not defined.
2.  Once a bulk operation is started, there is no way to stop it.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> BulkMuteFindingsRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[BulkMuteFindingsRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/latest/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[BulkMuteFindingsRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/latest/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[BulkMuteFindingsRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/latest/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.SecurityCenter.V2](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/latest/Google.Cloud.SecurityCenter.V2)

## Assembly

Google.Cloud.SecurityCenter.V2.dll

## Constructors

### BulkMuteFindingsRequest()

```
public BulkMuteFindingsRequest()
```

### BulkMuteFindingsRequest(BulkMuteFindingsRequest)

```
public BulkMuteFindingsRequest(BulkMuteFindingsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[BulkMuteFindingsRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/latest/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest)`  

## Properties

### Filter

```
public string Filter { get; set; }
```

Expression that identifies findings that should be updated. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`.

Restrictions have the form `<field> <operator> <value>` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource.

The supported operators are:

-   `=` for all value types.
-   `>`, `<`, `>=`, `<=` for integer values.
-   `:`, meaning substring matching, for strings.

The supported value types are:

-   string literals in quotes.
-   integer literals without quotes.
-   boolean literals `true` and `false` without quotes.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### MuteState

```
public BulkMuteFindingsRequest.Types.MuteState MuteState { get; set; }
```

Optional. All findings matching the given filter will have their mute state set to this value. The default value is `MUTED`. Setting this to `UNDEFINED` will clear the mute state on all matching findings.

**Property Value**

**Type**

**Description**

`[BulkMuteFindingsRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/latest/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest)[Types](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/latest/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest.Types)[MuteState](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/latest/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest.Types.MuteState)`

### Parent

```
public string Parent { get; set; }
```

Required. The parent, at which bulk action needs to be applied. If no location is specified, findings are updated in global. The following list shows some examples:

-   `organizations/[organization_id]`
-   `organizations/[organization_id]/locations/[location_id]`
-   `folders/[folder_id]`
-   `folders/[folder_id]/locations/[location_id]`
-   `projects/[project_id]`
-   `projects/[project_id]/locations/[location_id]`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsResourceName

```
public IResourceName ParentAsResourceName { get; set; }
```

[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V2/latest/Google.Cloud.SecurityCenter.V2.BulkMuteFindingsRequest#Google_Cloud_SecurityCenter_V2_BulkMuteFindingsRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
