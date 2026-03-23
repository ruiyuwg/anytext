-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# App Engine v1 API - Class CreateIngressRuleRequest (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/latest/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.4.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.3.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.2.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.0.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.3.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.2.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.1.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.0.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest)

```
public sealed class CreateIngressRuleRequest : IMessage<CreateIngressRuleRequest>, IEquatable<CreateIngressRuleRequest>, IDeepCloneable<CreateIngressRuleRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the App Engine v1 API class CreateIngressRuleRequest.

Request message for `Firewall.CreateIngressRule`.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CreateIngressRuleRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[CreateIngressRuleRequest](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.3.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CreateIngressRuleRequest](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.3.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[CreateIngressRuleRequest](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.3.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AppEngine.V1](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.3.0/Google.Cloud.AppEngine.V1)

## Assembly

Google.Cloud.AppEngine.V1.dll

## Constructors

### CreateIngressRuleRequest()

```
public CreateIngressRuleRequest()
```

### CreateIngressRuleRequest(CreateIngressRuleRequest)

```
public CreateIngressRuleRequest(CreateIngressRuleRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[CreateIngressRuleRequest](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.3.0/Google.Cloud.AppEngine.V1.CreateIngressRuleRequest)`  

## Properties

### Parent

```
public string Parent { get; set; }
```

Name of the parent Firewall collection in which to create a new rule. Example: `apps/myapp/firewall/ingressRules`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Rule

```
public FirewallRule Rule { get; set; }
```

A FirewallRule containing the new resource.

The user may optionally provide a position at which the new rule will be placed. The positions define a sequential list starting at 1. If a rule already exists at the given position, rules greater than the provided position will be moved forward by one.

If no position is provided, the server will place the rule as the second to last rule in the sequence before the required default allow-all or deny-all rule.

**Property Value**

**Type**

**Description**

`[FirewallRule](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.3.0/Google.Cloud.AppEngine.V1.FirewallRule)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
