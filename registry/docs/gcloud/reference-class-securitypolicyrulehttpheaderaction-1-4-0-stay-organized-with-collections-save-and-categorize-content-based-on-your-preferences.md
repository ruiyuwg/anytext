-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class SecurityPolicyRuleHttpHeaderAction (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class SecurityPolicyRuleHttpHeaderAction : IMessage<SecurityPolicyRuleHttpHeaderAction>, IEquatable<SecurityPolicyRuleHttpHeaderAction>, IDeepCloneable<SecurityPolicyRuleHttpHeaderAction>, IBufferMessage, IMessage
```

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> SecurityPolicyRuleHttpHeaderAction

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[SecurityPolicyRuleHttpHeaderAction](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.4.0/Google.Cloud.Compute.V1.SecurityPolicyRuleHttpHeaderAction)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[SecurityPolicyRuleHttpHeaderAction](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.4.0/Google.Cloud.Compute.V1.SecurityPolicyRuleHttpHeaderAction)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[SecurityPolicyRuleHttpHeaderAction](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.4.0/Google.Cloud.Compute.V1.SecurityPolicyRuleHttpHeaderAction)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.4.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### SecurityPolicyRuleHttpHeaderAction()

```
public SecurityPolicyRuleHttpHeaderAction()
```

### SecurityPolicyRuleHttpHeaderAction(SecurityPolicyRuleHttpHeaderAction)

```
public SecurityPolicyRuleHttpHeaderAction(SecurityPolicyRuleHttpHeaderAction other)
```

**Parameter**

**Name**

**Description**

`other`

`[SecurityPolicyRuleHttpHeaderAction](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.4.0/Google.Cloud.Compute.V1.SecurityPolicyRuleHttpHeaderAction)`  

## Properties

### RequestHeadersToAdds

```
public RepeatedField<SecurityPolicyRuleHttpHeaderActionHttpHeaderOption> RequestHeadersToAdds { get; }
```

The list of request headers to add or overwrite if they're already present.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[SecurityPolicyRuleHttpHeaderActionHttpHeaderOption](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.4.0/Google.Cloud.Compute.V1.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
