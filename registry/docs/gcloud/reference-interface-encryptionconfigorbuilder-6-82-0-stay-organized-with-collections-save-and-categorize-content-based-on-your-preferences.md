-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface EncryptionConfigOrBuilder (6.82.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public interface EncryptionConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getKmsKeyName()

```
public abstract String getKmsKeyName()
```

The Cloud KMS key to be used for encrypting and decrypting the database. Values are of the form `projects/<project>/locations/<location>/keyRings/<key_ring>/cryptoKeys/<kms_key_name>`.

`string kms_key_name = 2 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The kmsKeyName.

### getKmsKeyNameBytes()

```
public abstract ByteString getKmsKeyNameBytes()
```

The Cloud KMS key to be used for encrypting and decrypting the database. Values are of the form `projects/<project>/locations/<location>/keyRings/<key_ring>/cryptoKeys/<kms_key_name>`.

`string kms_key_name = 2 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for kmsKeyName.

### getKmsKeyNames(int index)

```
public abstract String getKmsKeyNames(int index)
```

Specifies the KMS configuration for the one or more keys used to encrypt the database. Values are of the form `projects/<project>/locations/<location>/keyRings/<key_ring>/cryptoKeys/<kms_key_name>`.

The keys referenced by kms\_key\_names must fully cover all regions of the database instance configuration. Some examples:

-   For single region database instance configs, specify a single regional location KMS key.
-   For multi-regional database instance configs of type GOOGLE\_MANAGED, either specify a multi-regional location KMS key or multiple regional location KMS keys that cover all regions in the instance config.
-   For a database instance config of type USER\_MANAGED, please specify only regional location KMS keys to cover each region in the instance config. Multi-regional location KMS keys are not supported for USER\_MANAGED instance configs.

`repeated string kms_key_names = 3 [(.google.api.resource_reference) = { ... }`

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

The kmsKeyNames at the given index.

### getKmsKeyNamesBytes(int index)

```
public abstract ByteString getKmsKeyNamesBytes(int index)
```

Specifies the KMS configuration for the one or more keys used to encrypt the database. Values are of the form `projects/<project>/locations/<location>/keyRings/<key_ring>/cryptoKeys/<kms_key_name>`.

The keys referenced by kms\_key\_names must fully cover all regions of the database instance configuration. Some examples:

-   For single region database instance configs, specify a single regional location KMS key.
-   For multi-regional database instance configs of type GOOGLE\_MANAGED, either specify a multi-regional location KMS key or multiple regional location KMS keys that cover all regions in the instance config.
-   For a database instance config of type USER\_MANAGED, please specify only regional location KMS keys to cover each region in the instance config. Multi-regional location KMS keys are not supported for USER\_MANAGED instance configs.

`repeated string kms_key_names = 3 [(.google.api.resource_reference) = { ... }`

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

The bytes of the kmsKeyNames at the given index.

### getKmsKeyNamesCount()

```
public abstract int getKmsKeyNamesCount()
```

Specifies the KMS configuration for the one or more keys used to encrypt the database. Values are of the form `projects/<project>/locations/<location>/keyRings/<key_ring>/cryptoKeys/<kms_key_name>`.

The keys referenced by kms\_key\_names must fully cover all regions of the database instance configuration. Some examples:

-   For single region database instance configs, specify a single regional location KMS key.
-   For multi-regional database instance configs of type GOOGLE\_MANAGED, either specify a multi-regional location KMS key or multiple regional location KMS keys that cover all regions in the instance config.
-   For a database instance config of type USER\_MANAGED, please specify only regional location KMS keys to cover each region in the instance config. Multi-regional location KMS keys are not supported for USER\_MANAGED instance configs.

`repeated string kms_key_names = 3 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of kmsKeyNames.

### getKmsKeyNamesList()

```
public abstract List<String> getKmsKeyNamesList()
```

Specifies the KMS configuration for the one or more keys used to encrypt the database. Values are of the form `projects/<project>/locations/<location>/keyRings/<key_ring>/cryptoKeys/<kms_key_name>`.

The keys referenced by kms\_key\_names must fully cover all regions of the database instance configuration. Some examples:

-   For single region database instance configs, specify a single regional location KMS key.
-   For multi-regional database instance configs of type GOOGLE\_MANAGED, either specify a multi-regional location KMS key or multiple regional location KMS keys that cover all regions in the instance config.
-   For a database instance config of type USER\_MANAGED, please specify only regional location KMS keys to cover each region in the instance config. Multi-regional location KMS keys are not supported for USER\_MANAGED instance configs.

`repeated string kms_key_names = 3 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the kmsKeyNames.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
