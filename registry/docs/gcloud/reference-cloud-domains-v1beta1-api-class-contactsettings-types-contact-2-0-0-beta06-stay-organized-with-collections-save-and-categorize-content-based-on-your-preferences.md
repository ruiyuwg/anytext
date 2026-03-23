-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Domains v1beta1 API - Class ContactSettings.Types.Contact (2.0.0-beta06) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.0.0-beta06 (latest)](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings.Types.Contact)
-   [2.0.0-beta05](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/2.0.0-beta05/Google.Cloud.Domains.V1Beta1.ContactSettings.Types.Contact)
-   [1.0.0-beta04](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/1.0.0-beta04/Google.Cloud.Domains.V1Beta1.ContactSettings.Types.Contact)

```
public sealed class ContactSettings.Types.Contact : IMessage<ContactSettings.Types.Contact>, IEquatable<ContactSettings.Types.Contact>, IDeepCloneable<ContactSettings.Types.Contact>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Domains v1beta1 API class ContactSettings.Types.Contact.

Details required for a contact associated with a `Registration`.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ContactSettings.Types.Contact

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ContactSettings](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings)[Types](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings.Types)[Contact](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings.Types.Contact), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ContactSettings](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings)[Types](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings.Types)[Contact](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings.Types.Contact), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ContactSettings](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings)[Types](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings.Types)[Contact](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings.Types.Contact), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Domains.V1Beta1](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1)

## Assembly

Google.Cloud.Domains.V1Beta1.dll

## Constructors

### Contact()

```
public Contact()
```

### Contact(Contact)

```
public Contact(ContactSettings.Types.Contact other)
```

**Parameter**

**Name**

**Description**

`other`

`[ContactSettings](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings)[Types](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings.Types)[Contact](/dotnet/docs/reference/Google.Cloud.Domains.V1Beta1/latest/Google.Cloud.Domains.V1Beta1.ContactSettings.Types.Contact)`  

## Properties

### Email

```
public string Email { get; set; }
```

Required. Email address of the contact.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### FaxNumber

```
public string FaxNumber { get; set; }
```

Fax number of the contact in international format. For example, `"+1-800-555-0123"`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PhoneNumber

```
public string PhoneNumber { get; set; }
```

Required. Phone number of the contact in international format. For example, `"+1-800-555-0123"`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PostalAddress

```
public PostalAddress PostalAddress { get; set; }
```

Required. Postal address of the contact.

**Property Value**

**Type**

**Description**

`[PostalAddress](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Type.PostalAddress.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
