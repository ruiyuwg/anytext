-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Assured Workloads v1beta1 API - Class Workload (2.0.0-beta07) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0-beta07keyboard\_arrow\_down

-   [2.0.0-beta09 (latest)](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/latest/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)
-   [2.0.0-beta08](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta08/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)
-   [1.0.0-beta08](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/1.0.0-beta08/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)

```
public sealed class Workload : IMessage<Workload>, IEquatable<Workload>, IDeepCloneable<Workload>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Assured Workloads v1beta1 API class Workload.

An Workload object for managing highly regulated workloads of cloud customers.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Workload

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AssuredWorkloads.V1Beta1](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1)

## Assembly

Google.Cloud.AssuredWorkloads.V1Beta1.dll

## Constructors

### Workload()

```
public Workload()
```

### Workload(Workload)

```
public Workload(Workload other)
```

**Parameter**

**Name**

**Description**

`other`

`[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)`  

## Properties

### BillingAccount

```
public string BillingAccount { get; set; }
```

Output only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### CjisSettings

```
[Obsolete]
public Workload.Types.CJISSettings CjisSettings { get; set; }
```

Input only. Immutable. Settings specific to resources needed for CJIS.

**Property Value**

**Type**

**Description**

`[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)[Types](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types)[CJISSettings](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types.CJISSettings)`

### ComplianceRegime

```
public Workload.Types.ComplianceRegime ComplianceRegime { get; set; }
```

Required. Immutable. Compliance Regime associated with this workload.

**Property Value**

**Type**

**Description**

`[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)[Types](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types)[ComplianceRegime](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types.ComplianceRegime)`

### ComplianceRegimeSettingsCase

```
public Workload.ComplianceRegimeSettingsOneofCase ComplianceRegimeSettingsCase { get; }
```

**Property Value**

**Type**

**Description**

`[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)[ComplianceRegimeSettingsOneofCase](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.ComplianceRegimeSettingsOneofCase)`

### CompliantButDisallowedServices

```
public RepeatedField<string> CompliantButDisallowedServices { get; }
```

Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment."

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

Output only. Immutable. The Workload creation timestamp.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### DisplayName

```
public string DisplayName { get; set; }
```

Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces.

Example: My Workload

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### EnableSovereignControls

```
public bool EnableSovereignControls { get; set; }
```

Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Etag

```
public string Etag { get; set; }
```

Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### FedrampHighSettings

```
[Obsolete]
public Workload.Types.FedrampHighSettings FedrampHighSettings { get; set; }
```

Input only. Immutable. Settings specific to resources needed for FedRAMP High.

**Property Value**

**Type**

**Description**

`[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)[Types](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types)[FedrampHighSettings](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types.FedrampHighSettings)`

### FedrampModerateSettings

```
[Obsolete]
public Workload.Types.FedrampModerateSettings FedrampModerateSettings { get; set; }
```

Input only. Immutable. Settings specific to resources needed for FedRAMP Moderate.

**Property Value**

**Type**

**Description**

`[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)[Types](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types)[FedrampModerateSettings](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types.FedrampModerateSettings)`

### Il4Settings

```
[Obsolete]
public Workload.Types.IL4Settings Il4Settings { get; set; }
```

Input only. Immutable. Settings specific to resources needed for IL4.

**Property Value**

**Type**

**Description**

`[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)[Types](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types)[IL4Settings](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types.IL4Settings)`

### KajEnrollmentState

```
public Workload.Types.KajEnrollmentState KajEnrollmentState { get; set; }
```

Output only. Represents the KAJ enrollment state of the given workload.

**Property Value**

**Type**

**Description**

`[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)[Types](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types)[KajEnrollmentState](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types.KajEnrollmentState)`

### KmsSettings

```
[Obsolete]
public Workload.Types.KMSSettings KmsSettings { get; set; }
```

Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION\_KEYS\_PROJECT or KEYRING in ResourceSettings.resource\_type field.

**Property Value**

**Type**

**Description**

`[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)[Types](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types)[KMSSettings](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types.KMSSettings)`

### Labels

```
public MapField<string, string> Labels { get; }
```

Optional. Labels applied to the workload.

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Name

```
public string Name { get; set; }
```

Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload}

Read-only.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ProvisionedResourcesParent

```
public string ProvisionedResourcesParent { get; set; }
```

Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder\_id}

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ResourceSettings

```
public RepeatedField<Workload.Types.ResourceSettings> ResourceSettings { get; }
```

Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)[Types](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types)[ResourceSettings](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types.ResourceSettings)`

### Resources

```
public RepeatedField<Workload.Types.ResourceInfo> Resources { get; }
```

Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)[Types](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types)[ResourceInfo](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types.ResourceInfo)`

### SaaEnrollmentResponse

```
public Workload.Types.SaaEnrollmentResponse SaaEnrollmentResponse { get; set; }
```

Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during GetWorkload call. In failure cases, user friendly error message is shown in SAA details page.

**Property Value**

**Type**

**Description**

`[Workload](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload)[Types](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types)[SaaEnrollmentResponse](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload.Types.SaaEnrollmentResponse)`

### WorkloadName

```
public WorkloadName WorkloadName { get; set; }
```

[WorkloadName](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.WorkloadName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.Workload#Google_Cloud_AssuredWorkloads_V1Beta1_Workload_Name) resource name property.

**Property Value**

**Type**

**Description**

`[WorkloadName](/dotnet/docs/reference/Google.Cloud.AssuredWorkloads.V1Beta1/2.0.0-beta07/Google.Cloud.AssuredWorkloads.V1Beta1.WorkloadName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
