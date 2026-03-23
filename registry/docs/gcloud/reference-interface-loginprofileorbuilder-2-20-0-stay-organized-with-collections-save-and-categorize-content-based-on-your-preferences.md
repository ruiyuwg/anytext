-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface LoginProfileOrBuilder (2.20.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.7 2.0.15

```
public interface LoginProfileOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsSshPublicKeys(String key)

```
public abstract boolean containsSshPublicKeys(String key)
```

A map from SSH public key fingerprint to the associated key object.

`map<string, .google.cloud.oslogin.common.SshPublicKey> ssh_public_keys = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getName()

```
public abstract String getName()
```

Required. A unique user ID.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Required. A unique user ID.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPosixAccounts(int index)

```
public abstract OsLoginProto.PosixAccount getPosixAccounts(int index)
```

The list of POSIX accounts associated with the user.

`repeated .google.cloud.oslogin.common.PosixAccount posix_accounts = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OsLoginProto.PosixAccount](/java/docs/reference/google-cloud-os-login/2.20.0/com.google.cloud.oslogin.common.OsLoginProto.PosixAccount)`

### getPosixAccountsCount()

```
public abstract int getPosixAccountsCount()
```

The list of POSIX accounts associated with the user.

`repeated .google.cloud.oslogin.common.PosixAccount posix_accounts = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getPosixAccountsList()

```
public abstract List<OsLoginProto.PosixAccount> getPosixAccountsList()
```

The list of POSIX accounts associated with the user.

`repeated .google.cloud.oslogin.common.PosixAccount posix_accounts = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[PosixAccount](/java/docs/reference/google-cloud-os-login/2.20.0/com.google.cloud.oslogin.common.OsLoginProto.PosixAccount)>`

### getPosixAccountsOrBuilder(int index)

```
public abstract OsLoginProto.PosixAccountOrBuilder getPosixAccountsOrBuilder(int index)
```

The list of POSIX accounts associated with the user.

`repeated .google.cloud.oslogin.common.PosixAccount posix_accounts = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OsLoginProto.PosixAccountOrBuilder](/java/docs/reference/google-cloud-os-login/2.20.0/com.google.cloud.oslogin.common.OsLoginProto.PosixAccountOrBuilder)`

### getPosixAccountsOrBuilderList()

```
public abstract List<? extends OsLoginProto.PosixAccountOrBuilder> getPosixAccountsOrBuilderList()
```

The list of POSIX accounts associated with the user.

`repeated .google.cloud.oslogin.common.PosixAccount posix_accounts = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.oslogin.common.OsLoginProto.PosixAccountOrBuilder>`

### getSshPublicKeys()

```
public abstract Map<String,OsLoginProto.SshPublicKey> getSshPublicKeys()
```

Use [#getSshPublicKeysMap()](/java/docs/reference/google-cloud-os-login/2.20.0/com.google.cloud.oslogin.v1.LoginProfileOrBuilder#com_google_cloud_oslogin_v1_LoginProfileOrBuilder_getSshPublicKeysMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[SshPublicKey](/java/docs/reference/google-cloud-os-login/2.20.0/com.google.cloud.oslogin.common.OsLoginProto.SshPublicKey)>`

### getSshPublicKeysCount()

```
public abstract int getSshPublicKeysCount()
```

A map from SSH public key fingerprint to the associated key object.

`map<string, .google.cloud.oslogin.common.SshPublicKey> ssh_public_keys = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getSshPublicKeysMap()

```
public abstract Map<String,OsLoginProto.SshPublicKey> getSshPublicKeysMap()
```

A map from SSH public key fingerprint to the associated key object.

`map<string, .google.cloud.oslogin.common.SshPublicKey> ssh_public_keys = 3;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[SshPublicKey](/java/docs/reference/google-cloud-os-login/2.20.0/com.google.cloud.oslogin.common.OsLoginProto.SshPublicKey)>`

### getSshPublicKeysOrDefault(String key, OsLoginProto.SshPublicKey defaultValue)

```
public abstract OsLoginProto.SshPublicKey getSshPublicKeysOrDefault(String key, OsLoginProto.SshPublicKey defaultValue)
```

A map from SSH public key fingerprint to the associated key object.

`map<string, .google.cloud.oslogin.common.SshPublicKey> ssh_public_keys = 3;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[OsLoginProto.SshPublicKey](/java/docs/reference/google-cloud-os-login/2.20.0/com.google.cloud.oslogin.common.OsLoginProto.SshPublicKey)`  

**Returns**

**Type**

**Description**

`[OsLoginProto.SshPublicKey](/java/docs/reference/google-cloud-os-login/2.20.0/com.google.cloud.oslogin.common.OsLoginProto.SshPublicKey)`

### getSshPublicKeysOrThrow(String key)

```
public abstract OsLoginProto.SshPublicKey getSshPublicKeysOrThrow(String key)
```

A map from SSH public key fingerprint to the associated key object.

`map<string, .google.cloud.oslogin.common.SshPublicKey> ssh_public_keys = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[OsLoginProto.SshPublicKey](/java/docs/reference/google-cloud-os-login/2.20.0/com.google.cloud.oslogin.common.OsLoginProto.SshPublicKey)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
