-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ReplicationStatusOrBuilder (2.87.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.10 2.2.0 2.1.7 2.0.7

```
public interface ReplicationStatusOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAutomatic()

```
public abstract ReplicationStatus.AutomaticStatus getAutomatic()
```

Describes the replication status of a SecretVersion with automatic replication.

Only populated if the parent Secret has an automatic replication policy.

`.google.cloud.secretmanager.v1.ReplicationStatus.AutomaticStatus automatic = 1;`

**Returns**

**Type**

**Description**

`[ReplicationStatus.AutomaticStatus](/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.ReplicationStatus.AutomaticStatus)`

The automatic.

### getAutomaticOrBuilder()

```
public abstract ReplicationStatus.AutomaticStatusOrBuilder getAutomaticOrBuilder()
```

Describes the replication status of a SecretVersion with automatic replication.

Only populated if the parent Secret has an automatic replication policy.

`.google.cloud.secretmanager.v1.ReplicationStatus.AutomaticStatus automatic = 1;`

**Returns**

**Type**

**Description**

`[ReplicationStatus.AutomaticStatusOrBuilder](/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.ReplicationStatus.AutomaticStatusOrBuilder)`

### getReplicationStatusCase()

```
public abstract ReplicationStatus.ReplicationStatusCase getReplicationStatusCase()
```

**Returns**

**Type**

**Description**

`[ReplicationStatus.ReplicationStatusCase](/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.ReplicationStatus.ReplicationStatusCase)`

### getUserManaged()

```
public abstract ReplicationStatus.UserManagedStatus getUserManaged()
```

Describes the replication status of a SecretVersion with user-managed replication.

Only populated if the parent Secret has a user-managed replication policy.

`.google.cloud.secretmanager.v1.ReplicationStatus.UserManagedStatus user_managed = 2;`

**Returns**

**Type**

**Description**

`[ReplicationStatus.UserManagedStatus](/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.ReplicationStatus.UserManagedStatus)`

The userManaged.

### getUserManagedOrBuilder()

```
public abstract ReplicationStatus.UserManagedStatusOrBuilder getUserManagedOrBuilder()
```

Describes the replication status of a SecretVersion with user-managed replication.

Only populated if the parent Secret has a user-managed replication policy.

`.google.cloud.secretmanager.v1.ReplicationStatus.UserManagedStatus user_managed = 2;`

**Returns**

**Type**

**Description**

`[ReplicationStatus.UserManagedStatusOrBuilder](/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.ReplicationStatus.UserManagedStatusOrBuilder)`

### hasAutomatic()

```
public abstract boolean hasAutomatic()
```

Describes the replication status of a SecretVersion with automatic replication.

Only populated if the parent Secret has an automatic replication policy.

`.google.cloud.secretmanager.v1.ReplicationStatus.AutomaticStatus automatic = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the automatic field is set.

### hasUserManaged()

```
public abstract boolean hasUserManaged()
```

Describes the replication status of a SecretVersion with user-managed replication.

Only populated if the parent Secret has a user-managed replication policy.

`.google.cloud.secretmanager.v1.ReplicationStatus.UserManagedStatus user_managed = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the userManaged field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
