-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class UpdateUserFeedbackRequest (2.0.0-alpha01) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0-alpha01keyboard\_arrow\_down

-   [2.0.0-alpha02 (latest)](/dotnet/docs/reference/Google.Cloud.DataQnA.V1Alpha/latest/Google.Cloud.DataQnA.V1Alpha.UpdateUserFeedbackRequest)
-   [2.0.0-alpha01](/dotnet/docs/reference/Google.Cloud.DataQnA.V1Alpha/2.0.0-alpha01/Google.Cloud.DataQnA.V1Alpha.UpdateUserFeedbackRequest)
-   [1.0.0-alpha03](/dotnet/docs/reference/Google.Cloud.DataQnA.V1Alpha/1.0.0-alpha03/Google.Cloud.DataQnA.V1Alpha.UpdateUserFeedbackRequest)

```
public sealed class UpdateUserFeedbackRequest : IMessage<UpdateUserFeedbackRequest>, IEquatable<UpdateUserFeedbackRequest>, IDeepCloneable<UpdateUserFeedbackRequest>, IBufferMessage, IMessage
```

Request to updates user feedback.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> UpdateUserFeedbackRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[UpdateUserFeedbackRequest](/dotnet/docs/reference/Google.Cloud.DataQnA.V1Alpha/2.0.0-alpha01/Google.Cloud.DataQnA.V1Alpha.UpdateUserFeedbackRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[UpdateUserFeedbackRequest](/dotnet/docs/reference/Google.Cloud.DataQnA.V1Alpha/2.0.0-alpha01/Google.Cloud.DataQnA.V1Alpha.UpdateUserFeedbackRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[UpdateUserFeedbackRequest](/dotnet/docs/reference/Google.Cloud.DataQnA.V1Alpha/2.0.0-alpha01/Google.Cloud.DataQnA.V1Alpha.UpdateUserFeedbackRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.DataQnA.V1Alpha](/dotnet/docs/reference/Google.Cloud.DataQnA.V1Alpha/2.0.0-alpha01/Google.Cloud.DataQnA.V1Alpha)

## Assembly

Google.Cloud.DataQnA.V1Alpha.dll

## Constructors

### UpdateUserFeedbackRequest()

```
public UpdateUserFeedbackRequest()
```

### UpdateUserFeedbackRequest(UpdateUserFeedbackRequest)

```
public UpdateUserFeedbackRequest(UpdateUserFeedbackRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[UpdateUserFeedbackRequest](/dotnet/docs/reference/Google.Cloud.DataQnA.V1Alpha/2.0.0-alpha01/Google.Cloud.DataQnA.V1Alpha.UpdateUserFeedbackRequest)`  

## Properties

### UpdateMask

```
public FieldMask UpdateMask { get; set; }
```

The list of fields to be updated.

**Property Value**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`

### UserFeedback

```
public UserFeedback UserFeedback { get; set; }
```

Required. The user feedback to update. This can be called even if there is no user feedback so far. The feedback's name field is used to identify the user feedback (and the corresponding question) to update.

**Property Value**

**Type**

**Description**

`[UserFeedback](/dotnet/docs/reference/Google.Cloud.DataQnA.V1Alpha/2.0.0-alpha01/Google.Cloud.DataQnA.V1Alpha.UserFeedback)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
