-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class DatabaseInfo (6.49.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public class DatabaseInfo
```

Represents a Cloud Spanner database.

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> DatabaseInfo

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

## Constructors

### DatabaseInfo(DatabaseId id, DatabaseInfo.State state)

```
public DatabaseInfo(DatabaseId id, DatabaseInfo.State state)
```

**Parameters**

**Name**

**Description**

`id`

`[DatabaseId](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.DatabaseId)`  

`state`

`[DatabaseInfo.State](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.DatabaseInfo.State)`  

## Methods

### equals(Object o)

```
public boolean equals(Object o)
```

**Parameter**

**Name**

**Description**

`o`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

### getCreateTime()

```
public Timestamp getCreateTime()
```

Returns the creation time of the database.

**Returns**

**Type**

**Description**

`com.google.cloud.Timestamp`

### getDefaultLeader()

```
public String getDefaultLeader()
```

The read-write region which contains the database's leader replicas. If this value was not explicitly set during a create database or update database ddl operations, it will be `NULL`.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getDialect()

```
public Dialect getDialect()
```

The dialect that is used by the database. It can be one of the values as specified in [Dialect#values()](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.Dialect#com_google_cloud_spanner_Dialect_values__).

**Returns**

**Type**

**Description**

`[Dialect](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.Dialect)`

### getEarliestVersionTime()

```
public Timestamp getEarliestVersionTime()
```

Returns the earliest version time of the database. This is the oldest timestamp that can be used to read old versions of the data.

**Returns**

**Type**

**Description**

`com.google.cloud.Timestamp`

### getEncryptionConfig()

```
public CustomerManagedEncryption getEncryptionConfig()
```

Returns the [CustomerManagedEncryption](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.encryption.CustomerManagedEncryption) of the database if the database is encrypted, or `null` if this database is not encrypted.

**Returns**

**Type**

**Description**

`[CustomerManagedEncryption](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.encryption.CustomerManagedEncryption)`

### getId()

```
public DatabaseId getId()
```

Returns the database id.

**Returns**

**Type**

**Description**

`[DatabaseId](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.DatabaseId)`

### getProto()

```
public Database getProto()
```

Returns the raw proto instance that was used to construct this [Database](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.spanner.admin.database.v1.Database).

**Returns**

**Type**

**Description**

`[Database](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.spanner.admin.database.v1.Database)`

### getReconciling()

```
public boolean getReconciling()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getRestoreInfo()

```
public RestoreInfo getRestoreInfo()
```

Returns the [RestoreInfo](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.RestoreInfo) of the database if any is available, or `null` if no [RestoreInfo](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.RestoreInfo) is available for this database.

**Returns**

**Type**

**Description**

`[RestoreInfo](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.RestoreInfo)`

### getState()

```
public DatabaseInfo.State getState()
```

Returns the state of the database.

**Returns**

**Type**

**Description**

`[DatabaseInfo.State](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.DatabaseInfo.State)`

### getVersionRetentionPeriod()

```
public String getVersionRetentionPeriod()
```

Returns the version retention period of the database. This is the period for which Cloud Spanner retains all versions of data for the database. For instance, if set to 3 days, Cloud Spanner will retain data versions that are up to 3 days old.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### hashCode()

```
public int hashCode()
```

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

### isDropProtectionEnabled()

```
public boolean isDropProtectionEnabled()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### toString()

```
public String toString()
```

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

**Overrides**

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
