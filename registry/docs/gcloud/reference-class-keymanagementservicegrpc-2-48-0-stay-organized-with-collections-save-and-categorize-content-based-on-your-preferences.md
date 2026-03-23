-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class KeyManagementServiceGrpc (2.48.0) Stay organized with collections Save and categorize content based on your preferences.

2.90.0 (latest) 2.88.0 2.86.0 2.85.0 2.84.0 2.83.0 2.81.0 2.79.0 2.78.0 2.77.0 2.76.0 2.75.0 2.73.0 2.71.0 2.70.0 2.67.0 2.66.0 2.65.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.8 2.5.3 2.4.4 2.3.1

```
public final class KeyManagementServiceGrpc
```

Google Cloud Key Management Service Manages cryptographic keys and operations using those keys. Implements a REST model with the following objects:

-   KeyRing
-   CryptoKey
-   CryptoKeyVersion
-   ImportJob If you are using manual gRPC libraries, see [Using gRPC with Cloud KMS](https://cloud.google.com/kms/docs/grpc).

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> KeyManagementServiceGrpc

## Inherited Members

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

### SERVICE\_NAME

```
public static final String SERVICE_NAME
```

**Field Value**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

## Static Methods

### bindService(KeyManagementServiceGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(KeyManagementServiceGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[KeyManagementServiceGrpc.AsyncService](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.KeyManagementServiceGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getAsymmetricDecryptMethod()

```
public static MethodDescriptor<AsymmetricDecryptRequest,AsymmetricDecryptResponse> getAsymmetricDecryptMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[AsymmetricDecryptRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.AsymmetricDecryptRequest),[AsymmetricDecryptResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.AsymmetricDecryptResponse)>`

### getAsymmetricSignMethod()

```
public static MethodDescriptor<AsymmetricSignRequest,AsymmetricSignResponse> getAsymmetricSignMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[AsymmetricSignRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.AsymmetricSignRequest),[AsymmetricSignResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.AsymmetricSignResponse)>`

### getCreateCryptoKeyMethod()

```
public static MethodDescriptor<CreateCryptoKeyRequest,CryptoKey> getCreateCryptoKeyMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateCryptoKeyRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CreateCryptoKeyRequest),[CryptoKey](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CryptoKey)>`

### getCreateCryptoKeyVersionMethod()

```
public static MethodDescriptor<CreateCryptoKeyVersionRequest,CryptoKeyVersion> getCreateCryptoKeyVersionMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateCryptoKeyVersionRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CreateCryptoKeyVersionRequest),[CryptoKeyVersion](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CryptoKeyVersion)>`

### getCreateImportJobMethod()

```
public static MethodDescriptor<CreateImportJobRequest,ImportJob> getCreateImportJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateImportJobRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CreateImportJobRequest),[ImportJob](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.ImportJob)>`

### getCreateKeyRingMethod()

```
public static MethodDescriptor<CreateKeyRingRequest,KeyRing> getCreateKeyRingMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateKeyRingRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CreateKeyRingRequest),[KeyRing](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.KeyRing)>`

### getDecryptMethod()

```
public static MethodDescriptor<DecryptRequest,DecryptResponse> getDecryptMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DecryptRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.DecryptRequest),[DecryptResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.DecryptResponse)>`

### getDestroyCryptoKeyVersionMethod()

```
public static MethodDescriptor<DestroyCryptoKeyVersionRequest,CryptoKeyVersion> getDestroyCryptoKeyVersionMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DestroyCryptoKeyVersionRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.DestroyCryptoKeyVersionRequest),[CryptoKeyVersion](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CryptoKeyVersion)>`

### getEncryptMethod()

```
public static MethodDescriptor<EncryptRequest,EncryptResponse> getEncryptMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[EncryptRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.EncryptRequest),[EncryptResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.EncryptResponse)>`

### getGenerateRandomBytesMethod()

```
public static MethodDescriptor<GenerateRandomBytesRequest,GenerateRandomBytesResponse> getGenerateRandomBytesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GenerateRandomBytesRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.GenerateRandomBytesRequest),[GenerateRandomBytesResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.GenerateRandomBytesResponse)>`

### getGetCryptoKeyMethod()

```
public static MethodDescriptor<GetCryptoKeyRequest,CryptoKey> getGetCryptoKeyMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetCryptoKeyRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.GetCryptoKeyRequest),[CryptoKey](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CryptoKey)>`

### getGetCryptoKeyVersionMethod()

```
public static MethodDescriptor<GetCryptoKeyVersionRequest,CryptoKeyVersion> getGetCryptoKeyVersionMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetCryptoKeyVersionRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.GetCryptoKeyVersionRequest),[CryptoKeyVersion](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CryptoKeyVersion)>`

### getGetImportJobMethod()

```
public static MethodDescriptor<GetImportJobRequest,ImportJob> getGetImportJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetImportJobRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.GetImportJobRequest),[ImportJob](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.ImportJob)>`

### getGetKeyRingMethod()

```
public static MethodDescriptor<GetKeyRingRequest,KeyRing> getGetKeyRingMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetKeyRingRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.GetKeyRingRequest),[KeyRing](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.KeyRing)>`

### getGetPublicKeyMethod()

```
public static MethodDescriptor<GetPublicKeyRequest,PublicKey> getGetPublicKeyMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetPublicKeyRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.GetPublicKeyRequest),[PublicKey](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.PublicKey)>`

### getImportCryptoKeyVersionMethod()

```
public static MethodDescriptor<ImportCryptoKeyVersionRequest,CryptoKeyVersion> getImportCryptoKeyVersionMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ImportCryptoKeyVersionRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.ImportCryptoKeyVersionRequest),[CryptoKeyVersion](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CryptoKeyVersion)>`

### getListCryptoKeyVersionsMethod()

```
public static MethodDescriptor<ListCryptoKeyVersionsRequest,ListCryptoKeyVersionsResponse> getListCryptoKeyVersionsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListCryptoKeyVersionsRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.ListCryptoKeyVersionsRequest),[ListCryptoKeyVersionsResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.ListCryptoKeyVersionsResponse)>`

### getListCryptoKeysMethod()

```
public static MethodDescriptor<ListCryptoKeysRequest,ListCryptoKeysResponse> getListCryptoKeysMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListCryptoKeysRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.ListCryptoKeysRequest),[ListCryptoKeysResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.ListCryptoKeysResponse)>`

### getListImportJobsMethod()

```
public static MethodDescriptor<ListImportJobsRequest,ListImportJobsResponse> getListImportJobsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListImportJobsRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.ListImportJobsRequest),[ListImportJobsResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.ListImportJobsResponse)>`

### getListKeyRingsMethod()

```
public static MethodDescriptor<ListKeyRingsRequest,ListKeyRingsResponse> getListKeyRingsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListKeyRingsRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.ListKeyRingsRequest),[ListKeyRingsResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.ListKeyRingsResponse)>`

### getMacSignMethod()

```
public static MethodDescriptor<MacSignRequest,MacSignResponse> getMacSignMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[MacSignRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.MacSignRequest),[MacSignResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.MacSignResponse)>`

### getMacVerifyMethod()

```
public static MethodDescriptor<MacVerifyRequest,MacVerifyResponse> getMacVerifyMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[MacVerifyRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.MacVerifyRequest),[MacVerifyResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.MacVerifyResponse)>`

### getRawDecryptMethod()

```
public static MethodDescriptor<RawDecryptRequest,RawDecryptResponse> getRawDecryptMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[RawDecryptRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.RawDecryptRequest),[RawDecryptResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.RawDecryptResponse)>`

### getRawEncryptMethod()

```
public static MethodDescriptor<RawEncryptRequest,RawEncryptResponse> getRawEncryptMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[RawEncryptRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.RawEncryptRequest),[RawEncryptResponse](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.RawEncryptResponse)>`

### getRestoreCryptoKeyVersionMethod()

```
public static MethodDescriptor<RestoreCryptoKeyVersionRequest,CryptoKeyVersion> getRestoreCryptoKeyVersionMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[RestoreCryptoKeyVersionRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.RestoreCryptoKeyVersionRequest),[CryptoKeyVersion](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CryptoKeyVersion)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getUpdateCryptoKeyMethod()

```
public static MethodDescriptor<UpdateCryptoKeyRequest,CryptoKey> getUpdateCryptoKeyMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateCryptoKeyRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.UpdateCryptoKeyRequest),[CryptoKey](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CryptoKey)>`

### getUpdateCryptoKeyPrimaryVersionMethod()

```
public static MethodDescriptor<UpdateCryptoKeyPrimaryVersionRequest,CryptoKey> getUpdateCryptoKeyPrimaryVersionMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateCryptoKeyPrimaryVersionRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest),[CryptoKey](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CryptoKey)>`

### getUpdateCryptoKeyVersionMethod()

```
public static MethodDescriptor<UpdateCryptoKeyVersionRequest,CryptoKeyVersion> getUpdateCryptoKeyVersionMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateCryptoKeyVersionRequest](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.UpdateCryptoKeyVersionRequest),[CryptoKeyVersion](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.CryptoKeyVersion)>`

### newBlockingStub(Channel channel)

```
public static KeyManagementServiceGrpc.KeyManagementServiceBlockingStub newBlockingStub(Channel channel)
```

Creates a new blocking-style stub that supports unary and streaming output calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[KeyManagementServiceGrpc.KeyManagementServiceBlockingStub](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.KeyManagementServiceGrpc.KeyManagementServiceBlockingStub)`

### newFutureStub(Channel channel)

```
public static KeyManagementServiceGrpc.KeyManagementServiceFutureStub newFutureStub(Channel channel)
```

Creates a new ListenableFuture-style stub that supports unary calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[KeyManagementServiceGrpc.KeyManagementServiceFutureStub](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.KeyManagementServiceGrpc.KeyManagementServiceFutureStub)`

### newStub(Channel channel)

```
public static KeyManagementServiceGrpc.KeyManagementServiceStub newStub(Channel channel)
```

Creates a new async stub that supports all call types for the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[KeyManagementServiceGrpc.KeyManagementServiceStub](/java/docs/reference/google-cloud-kms/2.48.0/com.google.cloud.kms.v1.KeyManagementServiceGrpc.KeyManagementServiceStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
