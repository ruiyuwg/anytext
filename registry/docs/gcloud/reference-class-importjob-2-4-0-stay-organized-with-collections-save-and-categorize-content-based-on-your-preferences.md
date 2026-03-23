-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ImportJob (2.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.4.0keyboard\_arrow\_down

-   [3.23.0 (latest)](/dotnet/docs/reference/Google.Cloud.Kms.V1/latest/Google.Cloud.Kms.V1.ImportJob)
-   [3.22.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.22.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.21.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.21.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.20.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.20.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.19.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.19.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.18.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.18.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.17.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.17.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.16.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.16.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.15.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.14.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.13.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.12.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.11.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.10.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.9.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.8.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.7.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.6.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.5.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.4.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.3.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.2.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.1.0/Google.Cloud.Kms.V1.ImportJob)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.0.0/Google.Cloud.Kms.V1.ImportJob)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.ImportJob)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.8.0/Google.Cloud.Kms.V1.ImportJob)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.7.0/Google.Cloud.Kms.V1.ImportJob)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.6.0/Google.Cloud.Kms.V1.ImportJob)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.5.0/Google.Cloud.Kms.V1.ImportJob)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.ImportJob)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.3.0/Google.Cloud.Kms.V1.ImportJob)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.2.0/Google.Cloud.Kms.V1.ImportJob)

```
public sealed class ImportJob : IMessage<ImportJob>, IEquatable<ImportJob>, IDeepCloneable<ImportJob>, IBufferMessage, IMessage
```

An \[ImportJob\]\[google.cloud.kms.v1.ImportJob\] can be used to create \[CryptoKeys\]\[google.cloud.kms.v1.CryptoKey\] and \[CryptoKeyVersions\]\[google.cloud.kms.v1.CryptoKeyVersion\] using pre-existing key material, generated outside of Cloud KMS.

When an \[ImportJob\]\[google.cloud.kms.v1.ImportJob\] is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of \[import\_method\]\[google.cloud.kms.v1.ImportJob.import\_method\]. When the wrapping key generation is complete, the \[state\]\[google.cloud.kms.v1.ImportJob.state\] will be set to \[ACTIVE\]\[google.cloud.kms.v1.ImportJob.ImportJobState.ACTIVE\] and the \[public\_key\]\[google.cloud.kms.v1.ImportJob.public\_key\] can be fetched. The fetched public key can then be used to wrap your pre-existing key material.

Once the key material is wrapped, it can be imported into a new \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\] in an existing \[CryptoKey\]\[google.cloud.kms.v1.CryptoKey\] by calling \[ImportCryptoKeyVersion\]\[google.cloud.kms.v1.KeyManagementService.ImportCryptoKeyVersion\]. Multiple \[CryptoKeyVersions\]\[google.cloud.kms.v1.CryptoKeyVersion\] can be imported with a single \[ImportJob\]\[google.cloud.kms.v1.ImportJob\]. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key.

An \[ImportJob\]\[google.cloud.kms.v1.ImportJob\] expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the \[ImportJob\]\[google.cloud.kms.v1.ImportJob\]'s public key.

For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ImportJob

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ImportJob](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.ImportJob)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ImportJob](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.ImportJob)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ImportJob](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.ImportJob)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Kms.V1](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1)

## Assembly

Google.Cloud.Kms.V1.dll

## Constructors

### ImportJob()

```
public ImportJob()
```

### ImportJob(ImportJob)

```
public ImportJob(ImportJob other)
```

**Parameter**

**Name**

**Description**

`other`

`[ImportJob](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.ImportJob)`  

## Properties

### Attestation

```
public KeyOperationAttestation Attestation { get; set; }
```

Output only. Statement that was generated and signed by the key creator (for example, an HSM) at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only present if the chosen \[ImportMethod\]\[google.cloud.kms.v1.ImportJob.ImportMethod\] is one with a protection level of \[HSM\]\[google.cloud.kms.v1.ProtectionLevel.HSM\].

**Property Value**

**Type**

**Description**

`[KeyOperationAttestation](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.KeyOperationAttestation)`

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

Output only. The time at which this \[ImportJob\]\[google.cloud.kms.v1.ImportJob\] was created.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### ExpireEventTime

```
public Timestamp ExpireEventTime { get; set; }
```

Output only. The time this \[ImportJob\]\[google.cloud.kms.v1.ImportJob\] expired. Only present if \[state\]\[google.cloud.kms.v1.ImportJob.state\] is \[EXPIRED\]\[google.cloud.kms.v1.ImportJob.ImportJobState.EXPIRED\].

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### ExpireTime

```
public Timestamp ExpireTime { get; set; }
```

Output only. The time at which this \[ImportJob\]\[google.cloud.kms.v1.ImportJob\] is scheduled for expiration and can no longer be used to import key material.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### GenerateTime

```
public Timestamp GenerateTime { get; set; }
```

Output only. The time this \[ImportJob\]\[google.cloud.kms.v1.ImportJob\]'s key material was generated.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### ImportJobName

```
public ImportJobName ImportJobName { get; set; }
```

[ImportJobName](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.ImportJobName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.ImportJob#Google_Cloud_Kms_V1_ImportJob_Name) resource name property.

**Property Value**

**Type**

**Description**

`[ImportJobName](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.ImportJobName)`

### ImportMethod

```
public ImportJob.Types.ImportMethod ImportMethod { get; set; }
```

Required. Immutable. The wrapping method to be used for incoming key material.

**Property Value**

**Type**

**Description**

`[ImportJob.Types.ImportMethod](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.ImportJob.Types.ImportMethod)`

### Name

```
public string Name { get; set; }
```

Output only. The resource name for this \[ImportJob\]\[google.cloud.kms.v1.ImportJob\] in the format `projects/*/locations/*/keyRings/*/importJobs/*`.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ProtectionLevel

```
public ProtectionLevel ProtectionLevel { get; set; }
```

Required. Immutable. The protection level of the \[ImportJob\]\[google.cloud.kms.v1.ImportJob\]. This must match the \[protection\_level\]\[google.cloud.kms.v1.CryptoKeyVersionTemplate.protection\_level\] of the \[version\_template\]\[google.cloud.kms.v1.CryptoKey.version\_template\] on the \[CryptoKey\]\[google.cloud.kms.v1.CryptoKey\] you attempt to import into.

**Property Value**

**Type**

**Description**

`[ProtectionLevel](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.ProtectionLevel)`

### PublicKey

```
public ImportJob.Types.WrappingPublicKey PublicKey { get; set; }
```

Output only. The public key with which to wrap key material prior to import. Only returned if \[state\]\[google.cloud.kms.v1.ImportJob.state\] is \[ACTIVE\]\[google.cloud.kms.v1.ImportJob.ImportJobState.ACTIVE\].

**Property Value**

**Type**

**Description**

`[ImportJob.Types.WrappingPublicKey](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.ImportJob.Types.WrappingPublicKey)`

### State

```
public ImportJob.Types.ImportJobState State { get; set; }
```

Output only. The current state of the \[ImportJob\]\[google.cloud.kms.v1.ImportJob\], indicating if it can be used.

**Property Value**

**Type**

**Description**

`[ImportJob.Types.ImportJobState](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.ImportJob.Types.ImportJobState)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
