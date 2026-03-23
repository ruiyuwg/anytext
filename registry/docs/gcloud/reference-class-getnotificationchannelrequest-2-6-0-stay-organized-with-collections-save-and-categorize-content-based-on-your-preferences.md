-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class GetNotificationChannelRequest (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.6.0keyboard\_arrow\_down

-   [3.16.0 (latest)](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/latest/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.15.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.14.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.12.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.11.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.10.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.9.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.8.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.7.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.6.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.4.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.3.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.1.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.5.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.4.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.3.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)

```
public sealed class GetNotificationChannelRequest : IMessage<GetNotificationChannelRequest>, IEquatable<GetNotificationChannelRequest>, IDeepCloneable<GetNotificationChannelRequest>, IBufferMessage, IMessage
```

The `GetNotificationChannel` request.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> GetNotificationChannelRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[GetNotificationChannelRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[GetNotificationChannelRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[GetNotificationChannelRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Monitoring.V3](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3)

## Assembly

Google.Cloud.Monitoring.V3.dll

## Constructors

### GetNotificationChannelRequest()

```
public GetNotificationChannelRequest()
```

### GetNotificationChannelRequest(GetNotificationChannelRequest)

```
public GetNotificationChannelRequest(GetNotificationChannelRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetNotificationChannelRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest)`  

## Properties

### Name

```
public string Name { get; set; }
```

Required. The channel for which to execute the request. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/notificationChannels/\[CHANNEL\_ID\]

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### NotificationChannelName

```
public NotificationChannelName NotificationChannelName { get; set; }
```

[NotificationChannelName](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.NotificationChannelName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest#Google_Cloud_Monitoring_V3_GetNotificationChannelRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[NotificationChannelName](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.NotificationChannelName)`

### ResourceName

```
public IResourceName ResourceName { get; set; }
```

[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.GetNotificationChannelRequest#Google_Cloud_Monitoring_V3_GetNotificationChannelRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
