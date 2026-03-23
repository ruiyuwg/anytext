-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class DeleteEventsRequest (2.0.0-beta05) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0-beta05keyboard\_arrow\_down

-   [3.0.0-beta06 (latest)](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.DeleteEventsRequest)
-   [3.0.0-beta05](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/3.0.0-beta05/Google.Cloud.ErrorReporting.V1Beta1.DeleteEventsRequest)
-   [2.0.0-beta05](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/2.0.0-beta05/Google.Cloud.ErrorReporting.V1Beta1.DeleteEventsRequest)

```
public sealed class DeleteEventsRequest : IMessage<DeleteEventsRequest>, IEquatable<DeleteEventsRequest>, IDeepCloneable<DeleteEventsRequest>, IBufferMessage, IMessage
```

Deletes all events in the project.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> DeleteEventsRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[DeleteEventsRequest](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/2.0.0-beta05/Google.Cloud.ErrorReporting.V1Beta1.DeleteEventsRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[DeleteEventsRequest](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/2.0.0-beta05/Google.Cloud.ErrorReporting.V1Beta1.DeleteEventsRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[DeleteEventsRequest](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/2.0.0-beta05/Google.Cloud.ErrorReporting.V1Beta1.DeleteEventsRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.ErrorReporting.V1Beta1](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/2.0.0-beta05/Google.Cloud.ErrorReporting.V1Beta1)

## Assembly

Google.Cloud.ErrorReporting.V1Beta1.dll

## Constructors

### DeleteEventsRequest()

```
public DeleteEventsRequest()
```

### DeleteEventsRequest(DeleteEventsRequest)

```
public DeleteEventsRequest(DeleteEventsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DeleteEventsRequest](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/2.0.0-beta05/Google.Cloud.ErrorReporting.V1Beta1.DeleteEventsRequest)`  

## Properties

### ProjectName

```
public string ProjectName { get; set; }
```

Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840).

Example: `projects/my-project-123`.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ProjectNameAsProjectName

```
public ProjectName ProjectNameAsProjectName { get; set; }
```

[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)\-typed view over the [ProjectName](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/2.0.0-beta05/Google.Cloud.ErrorReporting.V1Beta1.DeleteEventsRequest#Google_Cloud_ErrorReporting_V1Beta1_DeleteEventsRequest_ProjectName) resource name property.

**Property Value**

**Type**

**Description**

`[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
