-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class EnrolledService (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/latest/Google.Cloud.AccessApproval.V1.EnrolledService)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/2.5.0/Google.Cloud.AccessApproval.V1.EnrolledService)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/2.4.0/Google.Cloud.AccessApproval.V1.EnrolledService)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/2.3.0/Google.Cloud.AccessApproval.V1.EnrolledService)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/2.2.0/Google.Cloud.AccessApproval.V1.EnrolledService)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/2.1.0/Google.Cloud.AccessApproval.V1.EnrolledService)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/2.0.0/Google.Cloud.AccessApproval.V1.EnrolledService)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/1.4.0/Google.Cloud.AccessApproval.V1.EnrolledService)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/1.3.0/Google.Cloud.AccessApproval.V1.EnrolledService)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/1.2.0/Google.Cloud.AccessApproval.V1.EnrolledService)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/1.1.0/Google.Cloud.AccessApproval.V1.EnrolledService)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/1.0.0/Google.Cloud.AccessApproval.V1.EnrolledService)

```
public sealed class EnrolledService : IMessage<EnrolledService>, IEquatable<EnrolledService>, IDeepCloneable<EnrolledService>, IBufferMessage, IMessage
```

Represents the enrollment of a cloud resource into a specific service.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> EnrolledService

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[EnrolledService](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/1.3.0/Google.Cloud.AccessApproval.V1.EnrolledService)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[EnrolledService](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/1.3.0/Google.Cloud.AccessApproval.V1.EnrolledService)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[EnrolledService](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/1.3.0/Google.Cloud.AccessApproval.V1.EnrolledService)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.AccessApproval.V1](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/1.3.0/Google.Cloud.AccessApproval.V1)

## Assembly

Google.Cloud.AccessApproval.V1.dll

## Constructors

### EnrolledService()

```
public EnrolledService()
```

### EnrolledService(EnrolledService)

```
public EnrolledService(EnrolledService other)
```

**Parameter**

**Name**

**Description**

`other`

`[EnrolledService](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/1.3.0/Google.Cloud.AccessApproval.V1.EnrolledService)`  

## Properties

### CloudProduct

```
public string CloudProduct { get; set; }
```

The product for which Access Approval will be enrolled. Allowed values are listed below (case-sensitive):

-   all
-   GA
-   App Engine
-   BigQuery
-   Cloud Bigtable
-   Cloud Key Management Service
-   Compute Engine
-   Cloud Dataflow
-   Cloud DLP
-   Cloud EKM
-   Cloud HSM
-   Cloud Identity and Access Management
-   Cloud Logging
-   Cloud Pub/Sub
-   Cloud Spanner
-   Cloud SQL
-   Cloud Storage
-   Google Kubernetes Engine
-   Organization Policy Serivice
-   Persistent Disk
-   Resource Manager
-   Speaker ID

Note: These values are supported as input for legacy purposes, but will not be returned from the API.

-   all
-   ga-only
-   appengine.googleapis.com
-   bigquery.googleapis.com
-   bigtable.googleapis.com
-   container.googleapis.com
-   cloudkms.googleapis.com
-   cloudresourcemanager.googleapis.com
-   cloudsql.googleapis.com
-   compute.googleapis.com
-   dataflow.googleapis.com
-   dlp.googleapis.com
-   iam.googleapis.com
-   logging.googleapis.com
-   orgpolicy.googleapis.com
-   pubsub.googleapis.com
-   spanner.googleapis.com
-   speakerid.googleapis.com
-   storage.googleapis.com

Calls to UpdateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.).

Note: 'all' will enroll the resource in all products supported at both 'GA' and 'Preview' levels.

More information about levels of support is available at [https://cloud.google.com/access-approval/docs/supported-services](https://cloud.google.com/access-approval/docs/supported-services)

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### EnrollmentLevel

```
public EnrollmentLevel EnrollmentLevel { get; set; }
```

The enrollment level of the service.

**Property Value**

**Type**

**Description**

`[EnrollmentLevel](/dotnet/docs/reference/Google.Cloud.AccessApproval.V1/1.3.0/Google.Cloud.AccessApproval.V1.EnrollmentLevel)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
