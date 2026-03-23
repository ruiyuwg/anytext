-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ListBreakpointsResponse (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [3.2.0 (latest)](/dotnet/docs/reference/Google.Cloud.Debugger.V2/latest/Google.Cloud.Debugger.V2.ListBreakpointsResponse)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Debugger.V2/3.1.0/Google.Cloud.Debugger.V2.ListBreakpointsResponse)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Debugger.V2/3.0.0/Google.Cloud.Debugger.V2.ListBreakpointsResponse)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Debugger.V2/2.4.0/Google.Cloud.Debugger.V2.ListBreakpointsResponse)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Debugger.V2/2.3.0/Google.Cloud.Debugger.V2.ListBreakpointsResponse)

```
public sealed class ListBreakpointsResponse : IMessage<ListBreakpointsResponse>, IEquatable<ListBreakpointsResponse>, IDeepCloneable<ListBreakpointsResponse>, IBufferMessage, IMessage
```

Response for listing breakpoints.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ListBreakpointsResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ListBreakpointsResponse](/dotnet/docs/reference/Google.Cloud.Debugger.V2/2.3.0/Google.Cloud.Debugger.V2.ListBreakpointsResponse)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ListBreakpointsResponse](/dotnet/docs/reference/Google.Cloud.Debugger.V2/2.3.0/Google.Cloud.Debugger.V2.ListBreakpointsResponse)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ListBreakpointsResponse](/dotnet/docs/reference/Google.Cloud.Debugger.V2/2.3.0/Google.Cloud.Debugger.V2.ListBreakpointsResponse)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Debugger.V2](/dotnet/docs/reference/Google.Cloud.Debugger.V2/2.3.0/Google.Cloud.Debugger.V2)

## Assembly

Google.Cloud.Debugger.V2.dll

## Constructors

### ListBreakpointsResponse()

```
public ListBreakpointsResponse()
```

### ListBreakpointsResponse(ListBreakpointsResponse)

```
public ListBreakpointsResponse(ListBreakpointsResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListBreakpointsResponse](/dotnet/docs/reference/Google.Cloud.Debugger.V2/2.3.0/Google.Cloud.Debugger.V2.ListBreakpointsResponse)`  

## Properties

### Breakpoints

```
public RepeatedField<Breakpoint> Breakpoints { get; }
```

List of breakpoints matching the request. The fields `id` and `location` are guaranteed to be set on each breakpoint. The fields: `stack_frames`, `evaluated_expressions` and `variable_table` are cleared on each breakpoint regardless of its status.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[Breakpoint](/dotnet/docs/reference/Google.Cloud.Debugger.V2/2.3.0/Google.Cloud.Debugger.V2.Breakpoint)>`

### NextWaitToken

```
public string NextWaitToken { get; set; }
```

A wait token that can be used in the next call to `list` (REST) or `ListBreakpoints` (RPC) to block until the list of breakpoints has changes.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
