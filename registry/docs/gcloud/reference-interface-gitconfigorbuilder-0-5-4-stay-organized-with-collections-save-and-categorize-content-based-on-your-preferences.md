-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface GitConfigOrBuilder (0.5.4) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.81.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.6 1.2.1 1.1.0 1.0.1 0.5.4

```
public interface GitConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getGcpServiceAccountEmail()

```
public abstract String getGcpServiceAccountEmail()
```

The GCP Service Account Email used for auth when secret\_type is gcpServiceAccount.

`string gcp_service_account_email = 8;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The gcpServiceAccountEmail.

### getGcpServiceAccountEmailBytes()

```
public abstract ByteString getGcpServiceAccountEmailBytes()
```

The GCP Service Account Email used for auth when secret\_type is gcpServiceAccount.

`string gcp_service_account_email = 8;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for gcpServiceAccountEmail.

### getHttpsProxy()

```
public abstract String getHttpsProxy()
```

URL for the HTTPS proxy to be used when communicating with the Git repo.

`string https_proxy = 7;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The httpsProxy.

### getHttpsProxyBytes()

```
public abstract ByteString getHttpsProxyBytes()
```

URL for the HTTPS proxy to be used when communicating with the Git repo.

`string https_proxy = 7;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for httpsProxy.

### getPolicyDir()

```
public abstract String getPolicyDir()
```

The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository.

`string policy_dir = 3;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The policyDir.

### getPolicyDirBytes()

```
public abstract ByteString getPolicyDirBytes()
```

The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository.

`string policy_dir = 3;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for policyDir.

### getSecretType()

```
public abstract String getSecretType()
```

Type of secret configured for access to the Git repo.

`string secret_type = 6;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The secretType.

### getSecretTypeBytes()

```
public abstract ByteString getSecretTypeBytes()
```

Type of secret configured for access to the Git repo.

`string secret_type = 6;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for secretType.

### getSyncBranch()

```
public abstract String getSyncBranch()
```

The branch of the repository to sync from. Default: master.

`string sync_branch = 2;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The syncBranch.

### getSyncBranchBytes()

```
public abstract ByteString getSyncBranchBytes()
```

The branch of the repository to sync from. Default: master.

`string sync_branch = 2;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for syncBranch.

### getSyncRepo()

```
public abstract String getSyncRepo()
```

The URL of the Git repository to use as the source of truth.

`string sync_repo = 1;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The syncRepo.

### getSyncRepoBytes()

```
public abstract ByteString getSyncRepoBytes()
```

The URL of the Git repository to use as the source of truth.

`string sync_repo = 1;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for syncRepo.

### getSyncRev()

```
public abstract String getSyncRev()
```

Git revision (tag or hash) to check out. Default HEAD.

`string sync_rev = 5;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The syncRev.

### getSyncRevBytes()

```
public abstract ByteString getSyncRevBytes()
```

Git revision (tag or hash) to check out. Default HEAD.

`string sync_rev = 5;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for syncRev.

### getSyncWaitSecs()

```
public abstract long getSyncWaitSecs()
```

Period in seconds between consecutive syncs. Default: 15.

`int64 sync_wait_secs = 4;`

**Returns**

**Type**

**Description**

[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The syncWaitSecs.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
