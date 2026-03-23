Object Storage Service (OSS) lifecycle rules automate storage class transitions and object expiration, helping you optimize costs and meet compliance requirements. Use the `ossutil lifecycle` command to create, query, and delete lifecycle rules for a bucket.

Lifecycle rules trigger actions based on an object's last modified time or last access time. For example, transition infrequently accessed objects to colder storage classes such as Archive, or expire (delete) objects after a specified number of days. When rules are based on last access time, OSS monitors access patterns to identify and transition less frequently accessed objects, enabling automated data tiering.

## Prerequisites

Before you begin, make sure that you have:

-   ossutil 1.6.16 or later installed. For versions earlier than 1.6.16, use the operating system-specific executable name. For more information, see [References for ossutil commands](/help/en/oss/developer-reference/ossutil)
    
-   The required RAM permissions for the operations you want to perform: For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
    **Operation**
    
    **Required permission**
    
    Create or modify lifecycle rules
    
    `oss:PutBucketLifecycle`
    
    Query lifecycle rules
    
    `oss:GetBucketLifecycle`
    
    Delete lifecycle rules
    
    `oss:DeleteBucketLifecycle`
    

## Usage notes

-   For details about lifecycle rules based on last modified time and last access time, see [Lifecycle rules based on the last modified time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time) and [Lifecycle rules based on the last access time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-access-time).
    
-   For general information about lifecycle rules, see [Lifecycle](/help/en/oss/user-guide/overview-54/#concept-2118096).
    
-   For supported storage class transitions, see [Configure lifecycle rules to automatically convert the storage classes of objects](/help/en/oss/user-guide/convert-storage-classes#section-yuy-2b0-giv).
    
-   Lifecycle rules can delete objects from a CloudBox bucket but cannot change the storage class of objects in a CloudBox bucket.
    

## XML element reference

Lifecycle rules are defined in XML format. The following table describes the available XML elements.

**XML element**

**Parent**

**Description**

`LifecycleConfiguration`

(root)

Root element that contains one or more lifecycle rules.

`Rule`

`LifecycleConfiguration`

Defines an individual lifecycle rule. A configuration can contain multiple rules.

`ID`

`Rule`

Unique identifier for the rule. Each rule in a lifecycle configuration must have a unique ID. Duplicate IDs cause the operation to fail with HTTP status code 400.

`Prefix`

`Rule`

Object key prefix that limits the scope of the rule. Set to an empty value to apply the rule to all objects in the bucket.

`Status`

`Rule`

Whether the rule is active. Valid values: `Enabled`, `Disabled`.

`Expiration`

`Rule`

Container for expiration actions on current object versions.

`Days`

`Expiration`

Number of days after last modification before objects expire.

`CreatedBeforeDate`

`Expiration`

Date in ISO 8601 format (for example, `2019-12-30T00:00:00.000Z`). Objects last modified before this date expire.

`Transition`

`Rule`

Container for storage class transition actions on current object versions.

`Days`

`Transition`

Number of days after last modification (or last access, if `IsAccessTime` is `true`) before objects transition.

`StorageClass`

`Transition`

Target storage class. Valid values include `IA`, `Archive`, and other supported classes.

`IsAccessTime`

`Transition`

Set to `true` to base the transition on last access time instead of last modified time.

`ReturnToStdWhenVisit`

`Transition`

When `IsAccessTime` is `true`, set to `false` to keep objects in the target storage class even if accessed again. Set to `true` to return objects to Standard when accessed.

`NoncurrentVersionTransition`

`Rule`

Container for storage class transition actions on noncurrent object versions (versioning-enabled buckets only).

`NoncurrentDays`

`NoncurrentVersionTransition`

Number of days after an object version becomes noncurrent before it transitions.

`StorageClass`

`NoncurrentVersionTransition`

Target storage class for noncurrent versions.

`NoncurrentVersionExpiration`

`Rule`

Container for expiration actions on noncurrent object versions (versioning-enabled buckets only).

`NoncurrentDays`

`NoncurrentVersionExpiration`

Number of days after an object version becomes noncurrent before it is deleted.

## Create or modify lifecycle rules

Create a lifecycle configuration in a local XML file, then upload it to the target bucket. The `--method put` operation **replaces the entire existing lifecycle configuration** on the bucket. To retain existing rules, include them in the XML file along with any new rules.

### Command syntax

```
ossutil lifecycle --method put oss://bucketname local_xml_file
```

**Parameter**

**Description**

`bucketname`

Name of the bucket for which to create or modify lifecycle rules.

`local_xml_file`

Path to the local XML file that contains the lifecycle configuration. Example: `localfile.xml`.

### Examples

**Important**

Each rule in a lifecycle configuration must have a unique ID. Submitting a configuration with duplicate rule IDs causes the operation to fail with HTTP status code 400.

#### Example 1: Expire objects and transition by prefix

The following configuration contains two rules. The first rule (`test-rule1`) applies to all objects in `examplebucket` (Prefix is empty) and expires them 365 days after their last modification. The second rule (`test-rule2`) applies to objects with the `test/` prefix and transitions them to the Archive storage class 30 days after their last modification.

1.  Create a file named `localfile.xml` with the following content:
    
    ```
       <?xml version="1.0" encoding="UTF-8"?>
       <LifecycleConfiguration>
         <Rule>
           <ID>test-rule1</ID>
           <Prefix></Prefix>
           <Status>Enabled</Status>
           <Expiration>
             <Days>365</Days>
           </Expiration>
         </Rule>
         <Rule>
           <ID>test-rule2</ID>
           <Prefix>test/</Prefix>
           <Status>Enabled</Status>
           <Transition>
             <Days>30</Days>
             <StorageClass>Archive</StorageClass>
           </Transition>
         </Rule>
       </LifecycleConfiguration>
    ```
    
2.  Run the following command to apply the configuration to `examplebucket`: If the command succeeds, the output shows the elapsed time:
    
    ```
       ossutil lifecycle --method put oss://examplebucket localfile.xml
    ```
    
    ```
       0.299514(s) elapsed
    ```
    

#### Example 2: Expire objects by date

The following rule expires all objects in `examplebucket` whose last modified time is earlier than December 30, 2019.

```
<?xml version="1.0" encoding="UTF-8"?>
<LifecycleConfiguration>
  <Rule>
    <ID>test-rule0</ID>
    <Prefix></Prefix>
    <Status>Enabled</Status>
    <Expiration>
      <CreatedBeforeDate>2019-12-30T00:00:00.000Z</CreatedBeforeDate>
    </Expiration>
  </Rule>
</LifecycleConfiguration>
```

#### Example 3: Manage current and noncurrent object versions

For a versioning-enabled bucket named `examplebucket`, the following rule performs three actions on all objects:

-   Transitions current object versions to the Infrequent Access (IA) storage class 10 days after their last modification.
    
-   Transitions noncurrent object versions to the Archive storage class 60 days after they become noncurrent.
    
-   Deletes noncurrent object versions 90 days after they become noncurrent.
    

```
<?xml version="1.0" encoding="UTF-8"?>
<LifecycleConfiguration>
  <Rule>
    <ID>test-rule3</ID>
    <Prefix></Prefix>
    <Status>Enabled</Status>
    <Transition>
      <Days>10</Days>
      <StorageClass>IA</StorageClass>
    </Transition>
    <NoncurrentVersionTransition>
      <NoncurrentDays>60</NoncurrentDays>
      <StorageClass>Archive</StorageClass>
    </NoncurrentVersionTransition>
    <NoncurrentVersionExpiration>
      <NoncurrentDays>90</NoncurrentDays>
    </NoncurrentVersionExpiration>
  </Rule>
</LifecycleConfiguration>
```

#### Example 4: Transition based on last access time

The following rule applies to objects with the `data/` prefix. It transitions these objects to the IA storage class 200 days after they were last accessed. Because `ReturnToStdWhenVisit` is set to `false`, the objects remain in the IA storage class even if accessed again.

```
<?xml version="1.0" encoding="UTF-8"?>
<LifecycleConfiguration>
  <Rule>
    <ID>test-rule4</ID>
    <Prefix>data/</Prefix>
    <Status>Enabled</Status>
    <Transition>
      <Days>200</Days>
      <StorageClass>IA</StorageClass>
      <IsAccessTime>true</IsAccessTime>
      <ReturnToStdWhenVisit>false</ReturnToStdWhenVisit>
    </Transition>
  </Rule>
</LifecycleConfiguration>
```

## Query lifecycle rules

Retrieve the lifecycle configuration of a bucket. Optionally save the output to a local file.

### Command syntax

```
ossutil lifecycle --method get oss://bucketname [local_xml_file]
```

**Parameter**

**Description**

`bucketname`

Name of the bucket whose lifecycle rules to query.

`local_xml_file`

(Optional) Path to a local file in which to save the lifecycle configuration. Example: `localfile.xml`. If omitted, the configuration is displayed on screen.

### Example

Run the following command to query the lifecycle rules of `examplebucket` and save the configuration to `localfile.xml`:

```
ossutil lifecycle --method get oss://examplebucket localfile.xml
```

If the command succeeds, the output shows the elapsed time:

```
0.212407(s) elapsed
```

The lifecycle configuration is written to `localfile.xml`. To display the configuration on screen, omit the file name:

```
ossutil lifecycle --method get oss://examplebucket
```

Sample output:

```
<?xml version="1.0" encoding="UTF-8"?>
<LifecycleConfiguration>
  <Rule>
    <ID>test-rule1</ID>
    <Prefix></Prefix>
    <Status>Enabled</Status>
    <Expiration>
      <Days>365</Days>
    </Expiration>
  </Rule>
</LifecycleConfiguration>
```

## Delete the lifecycle configuration

Delete all lifecycle rules configured for a bucket. This operation removes the entire lifecycle configuration.

### Command syntax

```
ossutil lifecycle --method delete oss://bucketname
```

### Example

Run the following command to delete the lifecycle rules configured for `examplebucket`:

```
ossutil lifecycle --method delete oss://examplebucket
```

If the command succeeds, the output shows the elapsed time:

```
0.530750(s) elapsed
```

## Common options

When operating on a bucket in a different region or owned by another Alibaba Cloud account, specify the following options:

**Option**

**Description**

`-e`

Endpoint of the region where the bucket is located.

`-i`

AccessKey ID of the Alibaba Cloud account that owns the bucket.

`-k`

AccessKey secret of the Alibaba Cloud account that owns the bucket.

For example, to create lifecycle rules for `examplebucket`, which is located in the China (Hangzhou) region and owned by another Alibaba Cloud account:

```
ossutil lifecycle --method put oss://examplebucket localfile.xml -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For a complete list of common options, see [Common options](/help/en/oss/developer-reference/view-options#section-yhn-ko6-gqj).
