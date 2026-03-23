-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface NoteOrBuilder (2.16.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.5 2.3.1 2.2.3 2.1.3

```
public interface NoteOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAttestation()

```
public abstract AttestationNote getAttestation()
```

A note describing an attestation role.

`.grafeas.v1.AttestationNote attestation = 16;`

**Returns**

**Type**

**Description**

`[AttestationNote](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.AttestationNote)`

The attestation.

### getAttestationOrBuilder()

```
public abstract AttestationNoteOrBuilder getAttestationOrBuilder()
```

A note describing an attestation role.

`.grafeas.v1.AttestationNote attestation = 16;`

**Returns**

**Type**

**Description**

`[AttestationNoteOrBuilder](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.AttestationNoteOrBuilder)`

### getBuild()

```
public abstract BuildNote getBuild()
```

A note describing build provenance for a verifiable build.

`.grafeas.v1.BuildNote build = 11;`

**Returns**

**Type**

**Description**

`[BuildNote](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.BuildNote)`

The build.

### getBuildOrBuilder()

```
public abstract BuildNoteOrBuilder getBuildOrBuilder()
```

A note describing build provenance for a verifiable build.

`.grafeas.v1.BuildNote build = 11;`

**Returns**

**Type**

**Description**

`[BuildNoteOrBuilder](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.BuildNoteOrBuilder)`

### getCompliance()

```
public abstract ComplianceNote getCompliance()
```

A note describing a compliance check.

`.grafeas.v1.ComplianceNote compliance = 18;`

**Returns**

**Type**

**Description**

`[ComplianceNote](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.ComplianceNote)`

The compliance.

### getComplianceOrBuilder()

```
public abstract ComplianceNoteOrBuilder getComplianceOrBuilder()
```

A note describing a compliance check.

`.grafeas.v1.ComplianceNote compliance = 18;`

**Returns**

**Type**

**Description**

`[ComplianceNoteOrBuilder](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.ComplianceNoteOrBuilder)`

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. The time this note was created. This field can be used as a filter in list requests.

`.google.protobuf.Timestamp create_time = 7;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The time this note was created. This field can be used as a filter in list requests.

`.google.protobuf.Timestamp create_time = 7;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDeployment()

```
public abstract DeploymentNote getDeployment()
```

A note describing something that can be deployed.

`.grafeas.v1.DeploymentNote deployment = 14;`

**Returns**

**Type**

**Description**

`[DeploymentNote](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.DeploymentNote)`

The deployment.

### getDeploymentOrBuilder()

```
public abstract DeploymentNoteOrBuilder getDeploymentOrBuilder()
```

A note describing something that can be deployed.

`.grafeas.v1.DeploymentNote deployment = 14;`

**Returns**

**Type**

**Description**

`[DeploymentNoteOrBuilder](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.DeploymentNoteOrBuilder)`

### getDiscovery()

```
public abstract DiscoveryNote getDiscovery()
```

A note describing the initial analysis of a resource.

`.grafeas.v1.DiscoveryNote discovery = 15;`

**Returns**

**Type**

**Description**

`[DiscoveryNote](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.DiscoveryNote)`

The discovery.

### getDiscoveryOrBuilder()

```
public abstract DiscoveryNoteOrBuilder getDiscoveryOrBuilder()
```

A note describing the initial analysis of a resource.

`.grafeas.v1.DiscoveryNote discovery = 15;`

**Returns**

**Type**

**Description**

`[DiscoveryNoteOrBuilder](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.DiscoveryNoteOrBuilder)`

### getDsseAttestation()

```
public abstract DSSEAttestationNote getDsseAttestation()
```

A note describing a dsse attestation note.

`.grafeas.v1.DSSEAttestationNote dsse_attestation = 19;`

**Returns**

**Type**

**Description**

`[DSSEAttestationNote](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.DSSEAttestationNote)`

The dsseAttestation.

### getDsseAttestationOrBuilder()

```
public abstract DSSEAttestationNoteOrBuilder getDsseAttestationOrBuilder()
```

A note describing a dsse attestation note.

`.grafeas.v1.DSSEAttestationNote dsse_attestation = 19;`

**Returns**

**Type**

**Description**

`[DSSEAttestationNoteOrBuilder](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.DSSEAttestationNoteOrBuilder)`

### getExpirationTime()

```
public abstract Timestamp getExpirationTime()
```

Time of expiration for this note. Empty if note does not expire.

`.google.protobuf.Timestamp expiration_time = 6;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The expirationTime.

### getExpirationTimeOrBuilder()

```
public abstract TimestampOrBuilder getExpirationTimeOrBuilder()
```

Time of expiration for this note. Empty if note does not expire.

`.google.protobuf.Timestamp expiration_time = 6;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getImage()

```
public abstract ImageNote getImage()
```

A note describing a base image.

`.grafeas.v1.ImageNote image = 12;`

**Returns**

**Type**

**Description**

`[ImageNote](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.ImageNote)`

The image.

### getImageOrBuilder()

```
public abstract ImageNoteOrBuilder getImageOrBuilder()
```

A note describing a base image.

`.grafeas.v1.ImageNote image = 12;`

**Returns**

**Type**

**Description**

`[ImageNoteOrBuilder](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.ImageNoteOrBuilder)`

### getKind()

```
public abstract NoteKind getKind()
```

Output only. The type of analysis. This field can be used as a filter in list requests.

`.grafeas.v1.NoteKind kind = 4;`

**Returns**

**Type**

**Description**

`[NoteKind](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.NoteKind)`

The kind.

### getKindValue()

```
public abstract int getKindValue()
```

Output only. The type of analysis. This field can be used as a filter in list requests.

`.grafeas.v1.NoteKind kind = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for kind.

### getLongDescription()

```
public abstract String getLongDescription()
```

A detailed description of this note.

`string long_description = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The longDescription.

### getLongDescriptionBytes()

```
public abstract ByteString getLongDescriptionBytes()
```

A detailed description of this note.

`string long_description = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for longDescription.

### getName()

```
public abstract String getName()
```

Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPackage()

```
public abstract PackageNote getPackage()
```

A note describing a package hosted by various package managers.

`.grafeas.v1.PackageNote package = 13;`

**Returns**

**Type**

**Description**

`[PackageNote](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.PackageNote)`

The package.

### getPackageOrBuilder()

```
public abstract PackageNoteOrBuilder getPackageOrBuilder()
```

A note describing a package hosted by various package managers.

`.grafeas.v1.PackageNote package = 13;`

**Returns**

**Type**

**Description**

`[PackageNoteOrBuilder](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.PackageNoteOrBuilder)`

### getRelatedNoteNames(int index)

```
public abstract String getRelatedNoteNames(int index)
```

Other notes related to this note.

`repeated string related_note_names = 9;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The relatedNoteNames at the given index.

### getRelatedNoteNamesBytes(int index)

```
public abstract ByteString getRelatedNoteNamesBytes(int index)
```

Other notes related to this note.

`repeated string related_note_names = 9;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the relatedNoteNames at the given index.

### getRelatedNoteNamesCount()

```
public abstract int getRelatedNoteNamesCount()
```

Other notes related to this note.

`repeated string related_note_names = 9;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of relatedNoteNames.

### getRelatedNoteNamesList()

```
public abstract List<String> getRelatedNoteNamesList()
```

Other notes related to this note.

`repeated string related_note_names = 9;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the relatedNoteNames.

### getRelatedUrl(int index)

```
public abstract RelatedUrl getRelatedUrl(int index)
```

URLs associated with this note.

`repeated .grafeas.v1.RelatedUrl related_url = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[RelatedUrl](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.RelatedUrl)`

### getRelatedUrlCount()

```
public abstract int getRelatedUrlCount()
```

URLs associated with this note.

`repeated .grafeas.v1.RelatedUrl related_url = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getRelatedUrlList()

```
public abstract List<RelatedUrl> getRelatedUrlList()
```

URLs associated with this note.

`repeated .grafeas.v1.RelatedUrl related_url = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[RelatedUrl](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.RelatedUrl)>`

### getRelatedUrlOrBuilder(int index)

```
public abstract RelatedUrlOrBuilder getRelatedUrlOrBuilder(int index)
```

URLs associated with this note.

`repeated .grafeas.v1.RelatedUrl related_url = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[RelatedUrlOrBuilder](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.RelatedUrlOrBuilder)`

### getRelatedUrlOrBuilderList()

```
public abstract List<? extends RelatedUrlOrBuilder> getRelatedUrlOrBuilderList()
```

URLs associated with this note.

`repeated .grafeas.v1.RelatedUrl related_url = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends io.grafeas.v1.RelatedUrlOrBuilder>`

### getShortDescription()

```
public abstract String getShortDescription()
```

A one sentence description of this note.

`string short_description = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The shortDescription.

### getShortDescriptionBytes()

```
public abstract ByteString getShortDescriptionBytes()
```

A one sentence description of this note.

`string short_description = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for shortDescription.

### getTypeCase()

```
public abstract Note.TypeCase getTypeCase()
```

**Returns**

**Type**

**Description**

`[Note.TypeCase](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.Note.TypeCase)`

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. The time this note was last updated. This field can be used as a filter in list requests.

`.google.protobuf.Timestamp update_time = 8;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The time this note was last updated. This field can be used as a filter in list requests.

`.google.protobuf.Timestamp update_time = 8;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getUpgrade()

```
public abstract UpgradeNote getUpgrade()
```

A note describing available package upgrades.

`.grafeas.v1.UpgradeNote upgrade = 17;`

**Returns**

**Type**

**Description**

`[UpgradeNote](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.UpgradeNote)`

The upgrade.

### getUpgradeOrBuilder()

```
public abstract UpgradeNoteOrBuilder getUpgradeOrBuilder()
```

A note describing available package upgrades.

`.grafeas.v1.UpgradeNote upgrade = 17;`

**Returns**

**Type**

**Description**

`[UpgradeNoteOrBuilder](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.UpgradeNoteOrBuilder)`

### getVulnerability()

```
public abstract VulnerabilityNote getVulnerability()
```

A note describing a package vulnerability.

`.grafeas.v1.VulnerabilityNote vulnerability = 10;`

**Returns**

**Type**

**Description**

`[VulnerabilityNote](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.VulnerabilityNote)`

The vulnerability.

### getVulnerabilityAssessment()

```
public abstract VulnerabilityAssessmentNote getVulnerabilityAssessment()
```

A note describing a vulnerability assessment.

`.grafeas.v1.VulnerabilityAssessmentNote vulnerability_assessment = 20;`

**Returns**

**Type**

**Description**

`[VulnerabilityAssessmentNote](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.VulnerabilityAssessmentNote)`

The vulnerabilityAssessment.

### getVulnerabilityAssessmentOrBuilder()

```
public abstract VulnerabilityAssessmentNoteOrBuilder getVulnerabilityAssessmentOrBuilder()
```

A note describing a vulnerability assessment.

`.grafeas.v1.VulnerabilityAssessmentNote vulnerability_assessment = 20;`

**Returns**

**Type**

**Description**

`[VulnerabilityAssessmentNoteOrBuilder](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.VulnerabilityAssessmentNoteOrBuilder)`

### getVulnerabilityOrBuilder()

```
public abstract VulnerabilityNoteOrBuilder getVulnerabilityOrBuilder()
```

A note describing a package vulnerability.

`.grafeas.v1.VulnerabilityNote vulnerability = 10;`

**Returns**

**Type**

**Description**

`[VulnerabilityNoteOrBuilder](/java/docs/reference/grafeas/2.16.0/io.grafeas.v1.VulnerabilityNoteOrBuilder)`

### hasAttestation()

```
public abstract boolean hasAttestation()
```

A note describing an attestation role.

`.grafeas.v1.AttestationNote attestation = 16;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the attestation field is set.

### hasBuild()

```
public abstract boolean hasBuild()
```

A note describing build provenance for a verifiable build.

`.grafeas.v1.BuildNote build = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the build field is set.

### hasCompliance()

```
public abstract boolean hasCompliance()
```

A note describing a compliance check.

`.grafeas.v1.ComplianceNote compliance = 18;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the compliance field is set.

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. The time this note was created. This field can be used as a filter in list requests.

`.google.protobuf.Timestamp create_time = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasDeployment()

```
public abstract boolean hasDeployment()
```

A note describing something that can be deployed.

`.grafeas.v1.DeploymentNote deployment = 14;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the deployment field is set.

### hasDiscovery()

```
public abstract boolean hasDiscovery()
```

A note describing the initial analysis of a resource.

`.grafeas.v1.DiscoveryNote discovery = 15;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the discovery field is set.

### hasDsseAttestation()

```
public abstract boolean hasDsseAttestation()
```

A note describing a dsse attestation note.

`.grafeas.v1.DSSEAttestationNote dsse_attestation = 19;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the dsseAttestation field is set.

### hasExpirationTime()

```
public abstract boolean hasExpirationTime()
```

Time of expiration for this note. Empty if note does not expire.

`.google.protobuf.Timestamp expiration_time = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the expirationTime field is set.

### hasImage()

```
public abstract boolean hasImage()
```

A note describing a base image.

`.grafeas.v1.ImageNote image = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the image field is set.

### hasPackage()

```
public abstract boolean hasPackage()
```

A note describing a package hosted by various package managers.

`.grafeas.v1.PackageNote package = 13;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the package field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. The time this note was last updated. This field can be used as a filter in list requests.

`.google.protobuf.Timestamp update_time = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

### hasUpgrade()

```
public abstract boolean hasUpgrade()
```

A note describing available package upgrades.

`.grafeas.v1.UpgradeNote upgrade = 17;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the upgrade field is set.

### hasVulnerability()

```
public abstract boolean hasVulnerability()
```

A note describing a package vulnerability.

`.grafeas.v1.VulnerabilityNote vulnerability = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the vulnerability field is set.

### hasVulnerabilityAssessment()

```
public abstract boolean hasVulnerabilityAssessment()
```

A note describing a vulnerability assessment.

`.grafeas.v1.VulnerabilityAssessmentNote vulnerability_assessment = 20;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the vulnerabilityAssessment field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
