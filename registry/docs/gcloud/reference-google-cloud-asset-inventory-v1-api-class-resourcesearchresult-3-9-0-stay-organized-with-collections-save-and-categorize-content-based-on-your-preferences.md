-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Asset Inventory v1 API - Class ResourceSearchResult (3.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.9.0keyboard\_arrow\_down

-   [3.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.Asset.V1/latest/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.13.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.12.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.11.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.10.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.8.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.7.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.6.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.5.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.4.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.3.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.2.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.1.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.0.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.10.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.9.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.8.0/Google.Cloud.Asset.V1.ResourceSearchResult)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.7.0/Google.Cloud.Asset.V1.ResourceSearchResult)

```
public sealed class ResourceSearchResult : IMessage<ResourceSearchResult>, IEquatable<ResourceSearchResult>, IDeepCloneable<ResourceSearchResult>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Asset Inventory v1 API class ResourceSearchResult.

A result of Resource Search, containing information of a cloud resource. Next ID: 34

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ResourceSearchResult

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ResourceSearchResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.ResourceSearchResult), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ResourceSearchResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.ResourceSearchResult), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ResourceSearchResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.ResourceSearchResult), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Asset.V1](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1)

## Assembly

Google.Cloud.Asset.V1.dll

## Constructors

### ResourceSearchResult()

```
public ResourceSearchResult()
```

### ResourceSearchResult(ResourceSearchResult)

```
public ResourceSearchResult(ResourceSearchResult other)
```

**Parameter**

**Name**

**Description**

`other`

`[ResourceSearchResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.ResourceSearchResult)`  

## Properties

### AdditionalAttributes

```
public Struct AdditionalAttributes { get; set; }
```

The additional searchable attributes of this resource. The attributes may vary from one resource type to another. Examples: `projectId` for Project, `dnsName` for DNS ManagedZone. This field contains a subset of the resource metadata fields that are returned by the List or Get APIs provided by the corresponding Google Cloud service (e.g., Compute Engine). see [API references and supported searchable attributes](https://cloud.google.com/asset-inventory/docs/supported-asset-types) to see which fields are included.

You can search values of these fields through free text search. However, you should not consume the field programically as the field names and values may change as the Google Cloud service updates to a new incompatible API version.

To search against the `additional_attributes`:

-   Use a free text query to match the attributes values. Example: to search `additional_attributes = { dnsName: "foobar" }`, you can issue a query `foobar`.

**Property Value**

**Type**

**Description**

`[Struct](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Struct.html)`

### AssetType

```
public string AssetType { get; set; }
```

The type of this resource. Example: `compute.googleapis.com/Disk`.

To search against the `asset_type`:

-   Specify the `asset_type` field in your search request.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### AttachedResources

```
public RepeatedField<AttachedResource> AttachedResources { get; }
```

Attached resources of this resource. For example, an OSConfig Inventory is an attached resource of a Compute Instance. This field is repeated because a resource could have multiple attached resources.

This `attached_resources` field is not searchable. Some attributes of the attached resources are exposed in `additional_attributes` field, so as to allow users to search on them.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[AttachedResource](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.AttachedResource)`

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

The create timestamp of this resource, at which the resource was created. The granularity is in seconds. Timestamp.nanos will always be 0. This field is available only when the resource's Protobuf contains it.

To search against `create_time`:

-   Use a field query.
    -   value in seconds since unix epoch. Example: `createTime > 1609459200`
    -   value in date string. Example: `createTime > 2021-01-01`
    -   value in date-time string (must be quoted). Example: `createTime > "2021-01-01T00:00:00"`

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### Description

```
public string Description { get; set; }
```

One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes. This field is available only when the resource's Protobuf contains it.

To search against the `description`:

-   Use a field query. Example: `description:"important instance"`
-   Use a free text query. Example: `"important instance"`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DisplayName

```
public string DisplayName { get; set; }
```

The display name of this resource. This field is available only when the resource's Protobuf contains it.

To search against the `display_name`:

-   Use a field query. Example: `displayName:"My Instance"`
-   Use a free text query. Example: `"My Instance"`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### EffectiveTags

```
public RepeatedField<EffectiveTagDetails> EffectiveTags { get; }
```

The effective tags on this resource. All of the tags that are both attached to and inherited by a resource are collectively called the effective tags. For more information, see [tag inheritance](https://cloud.google.com/resource-manager/docs/tags/tags-overview#inheritance).

To search against the `effective_tags`:

-   Use a field query. Example:
    -   `effectiveTagKeys:"123456789/env*"`
    -   `effectiveTagKeys="123456789/env"`
    -   `effectiveTagKeys:"env"`
    -   `effectiveTagValues:"env"`
    -   `effectiveTagValues:"env/prod"`
    -   `effectiveTagValues:"123456789/env/prod*"`
    -   `effectiveTagValues="123456789/env/prod"`
    -   `effectiveTagValueIds="tagValues/456"`

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[EffectiveTagDetails](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.EffectiveTagDetails)`

### Folders

```
public RepeatedField<string> Folders { get; }
```

The folder(s) that this resource belongs to, in the form of folders/{FOLDER\_NUMBER}. This field is available when the resource belongs to one or more folders.

To search against `folders`:

-   Use a field query. Example: `folders:(123 OR 456)`
-   Use a free text query. Example: `123`
-   Specify the `scope` field as this folder in your search request.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### KmsKey

```
[Obsolete]
public string KmsKey { get; set; }
```

The Cloud KMS [CryptoKey](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys) name or [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions) name.

This field only presents for the purpose of backward compatibility. Use the `kms_keys` field to retrieve Cloud KMS key information. This field is available only when the resource's Protobuf contains it and will only be populated for [these resource types](https://cloud.google.com/asset-inventory/docs/legacy-field-names#resource_types_with_the_to_be_deprecated_kmskey_field) for backward compatible purposes.

To search against the `kms_key`:

-   Use a field query. Example: `kmsKey:key`
-   Use a free text query. Example: `key`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### KmsKeys

```
public RepeatedField<string> KmsKeys { get; }
```

The Cloud KMS [CryptoKey](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys) names or [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions) names. This field is available only when the resource's Protobuf contains it.

To search against the `kms_keys`:

-   Use a field query. Example: `kmsKeys:key`
-   Use a free text query. Example: `key`

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Labels

```
public MapField<string, string> Labels { get; }
```

Labels associated with this resource. See [Labelling and grouping Google Cloud resources](https://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information. This field is available only when the resource's Protobuf contains it.

To search against the `labels`:

-   Use a field query:
    -   query on any label's key or value. Example: `labels:prod`
    -   query by a given label. Example: `labels.env:prod`
    -   query by a given label's existence. Example: `labels.env:*`
-   Use a free text query. Example: `prod`

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Location

```
public string Location { get; set; }
```

Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`. This field is available only when the resource's Protobuf contains it.

To search against the `location`:

-   Use a field query. Example: `location:us-west*`
-   Use a free text query. Example: `us-west*`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Name

```
public string Name { get; set; }
```

The full resource name of this resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Cloud Asset Inventory Resource Name Format](https://cloud.google.com/asset-inventory/docs/resource-name-format) for more information.

To search against the `name`:

-   Use a field query. Example: `name:instance1`
-   Use a free text query. Example: `instance1`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### NetworkTags

```
public RepeatedField<string> NetworkTags { get; }
```

Network tags associated with this resource. Like labels, network tags are a type of annotations used to group Google Cloud resources. See [Labelling Google Cloud resources](https://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information. This field is available only when the resource's Protobuf contains it.

To search against the `network_tags`:

-   Use a field query. Example: `networkTags:internal`
-   Use a free text query. Example: `internal`

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Organization

```
public string Organization { get; set; }
```

The organization that this resource belongs to, in the form of organizations/{ORGANIZATION\_NUMBER}. This field is available when the resource belongs to an organization.

To search against `organization`:

-   Use a field query. Example: `organization:123`
-   Use a free text query. Example: `123`
-   Specify the `scope` field as this organization in your search request.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAssetType

```
public string ParentAssetType { get; set; }
```

The type of this resource's immediate parent, if there is one.

To search against the `parent_asset_type`:

-   Use a field query. Example: `parentAssetType:"cloudresourcemanager.googleapis.com/Project"`
-   Use a free text query. Example: `cloudresourcemanager.googleapis.com/Project`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentFullResourceName

```
public string ParentFullResourceName { get; set; }
```

The full resource name of this resource's parent, if it has one. To search against the `parent_full_resource_name`:

-   Use a field query. Example: `parentFullResourceName:"project-name"`
-   Use a free text query. Example: `project-name`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Project

```
public string Project { get; set; }
```

The project that this resource belongs to, in the form of projects/{PROJECT\_NUMBER}. This field is available when the resource belongs to a project.

To search against `project`:

-   Use a field query. Example: `project:12345`
-   Use a free text query. Example: `12345`
-   Specify the `scope` field as this project in your search request.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Relationships

```
public MapField<string, RelatedResources> Relationships { get; }
```

A map of related resources of this resource, keyed by the relationship type. A relationship type is in the format of {SourceType}_{ACTION}_{DestType}. Example: `DISK_TO_INSTANCE`, `DISK_TO_NETWORK`, `INSTANCE_TO_INSTANCEGROUP`. See [supported relationship types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#supported_relationship_types).

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[RelatedResources](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.RelatedResources)`

### SccSecurityMarks

```
public MapField<string, string> SccSecurityMarks { get; }
```

The actual content of Security Command Center security marks associated with the asset.

To search against SCC SecurityMarks field:

-   Use a field query:
    -   query by a given key value pair. Example: `sccSecurityMarks.foo=bar`
    -   query by a given key's existence. Example: `sccSecurityMarks.foo:*`

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### State

```
public string State { get; set; }
```

The state of this resource. Different resources types have different state definitions that are mapped from various fields of different resource types. This field is available only when the resource's Protobuf contains it.

Example: If the resource is an instance provided by Compute Engine, its state will include PROVISIONING, STAGING, RUNNING, STOPPING, SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED. See `status` definition in [API Reference](https://cloud.google.com/compute/docs/reference/rest/v1/instances). If the resource is a project provided by Resource Manager, its state will include LIFECYCLE\_STATE\_UNSPECIFIED, ACTIVE, DELETE\_REQUESTED and DELETE\_IN\_PROGRESS. See `lifecycleState` definition in [API Reference](https://cloud.google.com/resource-manager/reference/rest/v1/projects).

To search against the `state`:

-   Use a field query. Example: `state:RUNNING`
-   Use a free text query. Example: `RUNNING`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### TagKeys

```
[Obsolete]
public RepeatedField<string> TagKeys { get; }
```

This field is only present for the purpose of backward compatibility. Use the `tags` field instead.

TagKey namespaced names, in the format of {ORG\_ID}/{TAG\_KEY\_SHORT\_NAME}. To search against the `tagKeys`:

-   Use a field query. Example:
    
    -   `tagKeys:"123456789/env*"`
    -   `tagKeys="123456789/env"`
    -   `tagKeys:"env"`
-   Use a free text query. Example:
    
    -   `env`

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### TagValueIds

```
[Obsolete]
public RepeatedField<string> TagValueIds { get; }
```

This field is only present for the purpose of backward compatibility. Use the `tags` field instead.

TagValue IDs, in the format of tagValues/{TAG\_VALUE\_ID}. To search against the `tagValueIds`:

-   Use a field query. Example:
    
    -   `tagValueIds="tagValues/456"`
-   Use a free text query. Example:
    
    -   `456`

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### TagValues

```
[Obsolete]
public RepeatedField<string> TagValues { get; }
```

This field is only present for the purpose of backward compatibility. Use the `tags` field instead.

TagValue namespaced names, in the format of {ORG\_ID}/{TAG\_KEY\_SHORT\_NAME}/{TAG\_VALUE\_SHORT\_NAME}. To search against the `tagValues`:

-   Use a field query. Example:
    
    -   `tagValues:"env"`
    -   `tagValues:"env/prod"`
    -   `tagValues:"123456789/env/prod*"`
    -   `tagValues="123456789/env/prod"`
-   Use a free text query. Example:
    
    -   `prod`

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Tags

```
public RepeatedField<Tag> Tags { get; }
```

The tags directly attached to this resource.

To search against the `tags`:

-   Use a field query. Example:
    
    -   `tagKeys:"123456789/env*"`
    -   `tagKeys="123456789/env"`
    -   `tagKeys:"env"`
    -   `tagValues:"env"`
    -   `tagValues:"env/prod"`
    -   `tagValues:"123456789/env/prod*"`
    -   `tagValues="123456789/env/prod"`
    -   `tagValueIds="tagValues/456"`
-   Use a free text query. Example:
    
    -   `env/prod`

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[Tag](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.Tag)`

### UpdateTime

```
public Timestamp UpdateTime { get; set; }
```

The last update timestamp of this resource, at which the resource was last modified or deleted. The granularity is in seconds. Timestamp.nanos will always be 0. This field is available only when the resource's Protobuf contains it.

To search against `update_time`:

-   Use a field query.
    -   value in seconds since unix epoch. Example: `updateTime < 1609459200`
    -   value in date string. Example: `updateTime < 2021-01-01`
    -   value in date-time string (must be quoted). Example: `updateTime < "2021-01-01T00:00:00"`

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### VersionedResources

```
public RepeatedField<VersionedResource> VersionedResources { get; }
```

Versioned resource representations of this resource. This is repeated because there could be multiple versions of resource representations during version migration.

This `versioned_resources` field is not searchable. Some attributes of the resource representations are exposed in `additional_attributes` field, so as to allow users to search on them.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[VersionedResource](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.VersionedResource)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
