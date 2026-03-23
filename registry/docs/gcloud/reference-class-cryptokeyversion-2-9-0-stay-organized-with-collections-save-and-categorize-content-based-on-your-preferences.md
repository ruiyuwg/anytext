-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class CryptoKeyVersion (2.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.9.0keyboard\_arrow\_down

-   [3.23.0 (latest)](/dotnet/docs/reference/Google.Cloud.Kms.V1/latest/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.22.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.22.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.21.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.21.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.20.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.20.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.19.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.19.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.18.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.18.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.17.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.17.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.16.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.16.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.15.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.14.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.13.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.12.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.11.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.10.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.9.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.8.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.7.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.6.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.5.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.4.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.3.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.2.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.1.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.0.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.8.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.7.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.6.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.5.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.3.0/Google.Cloud.Kms.V1.CryptoKeyVersion)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.2.0/Google.Cloud.Kms.V1.CryptoKeyVersion)

```
public sealed class CryptoKeyVersion : IMessage<CryptoKeyVersion>, IEquatable<CryptoKeyVersion>, IDeepCloneable<CryptoKeyVersion>, IBufferMessage, IMessage
```

A \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\] represents an individual cryptographic key, and the associated key material.

An \[ENABLED\]\[google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.ENABLED\] version can be used for cryptographic operations.

For security reasons, the raw cryptographic key material represented by a \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\] can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> CryptoKeyVersion

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[CryptoKeyVersion](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.CryptoKeyVersion)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[CryptoKeyVersion](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.CryptoKeyVersion)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[CryptoKeyVersion](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.CryptoKeyVersion)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Kms.V1](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1)

## Assembly

Google.Cloud.Kms.V1.dll

## Constructors

### CryptoKeyVersion()

```
public CryptoKeyVersion()
```

### CryptoKeyVersion(CryptoKeyVersion)

```
public CryptoKeyVersion(CryptoKeyVersion other)
```

**Parameter**

**Name**

**Description**

`other`

`[CryptoKeyVersion](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.CryptoKeyVersion)`  

## Properties

### Algorithm

```
public CryptoKeyVersion.Types.CryptoKeyVersionAlgorithm Algorithm { get; set; }
```

Output only. The \[CryptoKeyVersionAlgorithm\]\[google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm\] that this \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\] supports.

**Property Value**

**Type**

**Description**

`[CryptoKeyVersion.Types.CryptoKeyVersionAlgorithm](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.CryptoKeyVersion.Types.CryptoKeyVersionAlgorithm)`

### Attestation

```
public KeyOperationAttestation Attestation { get; set; }
```

Output only. Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only provided for key versions with \[protection\_level\]\[google.cloud.kms.v1.CryptoKeyVersion.protection\_level\] \[HSM\]\[google.cloud.kms.v1.ProtectionLevel.HSM\].

**Property Value**

**Type**

**Description**

`[KeyOperationAttestation](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.KeyOperationAttestation)`

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

Output only. The time at which this \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\] was created.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### CryptoKeyVersionName

```
public CryptoKeyVersionName CryptoKeyVersionName { get; set; }
```

[CryptoKeyVersionName](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.CryptoKeyVersionName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.CryptoKeyVersion#Google_Cloud_Kms_V1_CryptoKeyVersion_Name) resource name property.

**Property Value**

**Type**

**Description**

`[CryptoKeyVersionName](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.CryptoKeyVersionName)`

### DestroyEventTime

```
public Timestamp DestroyEventTime { get; set; }
```

Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if \[state\]\[google.cloud.kms.v1.CryptoKeyVersion.state\] is \[DESTROYED\]\[google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.DESTROYED\].

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### DestroyTime

```
public Timestamp DestroyTime { get; set; }
```

Output only. The time this \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\]'s key material is scheduled for destruction. Only present if \[state\]\[google.cloud.kms.v1.CryptoKeyVersion.state\] is \[DESTROY\_SCHEDULED\]\[google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.DESTROY\_SCHEDULED\].

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### ExternalProtectionLevelOptions

```
public ExternalProtectionLevelOptions ExternalProtectionLevelOptions { get; set; }
```

ExternalProtectionLevelOptions stores a group of additional fields for configuring a \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\] that are specific to the \[EXTERNAL\]\[google.cloud.kms.v1.ProtectionLevel.EXTERNAL\] protection level and \[EXTERNAL\_VPC\]\[google.cloud.kms.v1.ProtectionLevel.EXTERNAL\_VPC\] protection levels.

**Property Value**

**Type**

**Description**

`[ExternalProtectionLevelOptions](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.ExternalProtectionLevelOptions)`

### GenerateTime

```
public Timestamp GenerateTime { get; set; }
```

Output only. The time this \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\]'s key material was generated.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### ImportFailureReason

```
public string ImportFailureReason { get; set; }
```

Output only. The root cause of the most recent import failure. Only present if \[state\]\[google.cloud.kms.v1.CryptoKeyVersion.state\] is \[IMPORT\_FAILED\]\[google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.IMPORT\_FAILED\].

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ImportJob

```
public string ImportJob { get; set; }
```

Output only. The name of the \[ImportJob\]\[google.cloud.kms.v1.ImportJob\] used in the most recent import of this \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\]. Only present if the underlying key material was imported.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ImportTime

```
public Timestamp ImportTime { get; set; }
```

Output only. The time at which this \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\]'s key material was most recently imported.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### Name

```
public string Name { get; set; }
```

Output only. The resource name for this \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\] in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*`.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ProtectionLevel

```
public ProtectionLevel ProtectionLevel { get; set; }
```

Output only. The \[ProtectionLevel\]\[google.cloud.kms.v1.ProtectionLevel\] describing how crypto operations are performed with this \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\].

**Property Value**

**Type**

**Description**

`[ProtectionLevel](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.ProtectionLevel)`

### ReimportEligible

```
public bool ReimportEligible { get; set; }
```

Output only. Whether or not this key version is eligible for reimport, by being specified as a target in \[ImportCryptoKeyVersionRequest.crypto\_key\_version\]\[google.cloud.kms.v1.ImportCryptoKeyVersionRequest.crypto\_key\_version\].

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### State

```
public CryptoKeyVersion.Types.CryptoKeyVersionState State { get; set; }
```

The current state of the \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\].

**Property Value**

**Type**

**Description**

`[CryptoKeyVersion.Types.CryptoKeyVersionState](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.CryptoKeyVersion.Types.CryptoKeyVersionState)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
