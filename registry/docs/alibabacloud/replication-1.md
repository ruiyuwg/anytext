Use the `ossutil replication` command to manage data replication rules for an OSS bucket. Data replication supports two types: cross-region replication (CRR), which copies objects to a bucket in a different region, and same-region replication (SRR), which copies objects to a bucket in the same region.

## Prerequisites

Before you begin, make sure you have the required RAM permissions:

**Operation**

**Required permission**

Create a replication rule or enable RTC

`oss:PutBucketReplication`

Query replication rules

`oss:GetBucketReplication`

Delete replication rules

`oss:DeleteBucketReplication`

Query replication progress

`oss:GetBucketReplicationProgress`

Query replication destination regions

`oss:GetBucketReplicationLocation`

For instructions on granting these permissions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

> ossutil 1.6.16 and later let you use `ossutil` directly as the binary name on any operating system. Earlier versions require you to rename the binary based on your OS. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).

## Add a replication rule

Each bucket supports up to 100 replication rules. For a full description of the replication feature, see [CRR overview](/help/en/oss/user-guide/cross-region-replication-overview/).

**Synopsis**

```
ossutil replication --method put oss://<bucketname> <local_xml_file>
```

**Parameter**

**Description**

`bucketname`

Name of the source bucket

`local_xml_file`

Path to the local XML file that contains the replication rule. For the full XML schema, see [PutBucketReplication](/help/en/oss/developer-reference/putbucketreplication).

**Example**

The following example creates a rule that replicates objects with the `srcdir` prefix from `srcbucket` to `destbucket` in the China (Hangzhou) region. The rule covers only PUT operations, enables transfer acceleration, and includes historical objects.

1.  Create a local file named `localfile.xml` with the following content: Contents of `localfile.xml`:
    
    ```
       <?xml version="1.0" encoding="UTF-8"?>
       <ReplicationConfiguration>
          <Rule>
               <PrefixSet>
                   <Prefix>srcdir</Prefix>
               </PrefixSet>
               <Action>PUT</Action>
               <Destination>
                   <Bucket>destbucket</Bucket>
                   <Location>oss-cn-hangzhou</Location>
                   <TransferType>oss_acc</TransferType>
               </Destination>
               <HistoricalObjectReplication>enabled</HistoricalObjectReplication>
          </Rule>
       </ReplicationConfiguration>
    ```
    
2.  Apply the rule to `srcbucket`:
    
    ```
       ossutil replication --method put oss://srcbucket localfile.xml
    ```
    
    Expected output:
    
    ```
       0.856895(s) elapsed
    ```
    

## Enable or disable Replication Time Control (RTC)

Replication Time Control (RTC) guarantees faster, more predictable replication for CRR tasks. Enable RTC when your workload requires tighter replication latency. RTC can be enabled when you create a CRR rule or added to an existing rule. It applies to all objects in a bucket, or to objects filtered by prefix or tag.

**Synopsis**

```
ossutil replication --method put --item rtc oss://<bucketname> <local_xml_file>
```

**Parameter**

**Description**

`bucketname`

Name of the source bucket

`local_xml_file`

Path to the local XML file that contains the RTC configuration. For the full XML schema, see [PutBucketReplication](/help/en/oss/developer-reference/putbucketreplication).

**Example**

The following example enables and then disables RTC for an existing replication rule on `srcbucket`.

1.  Create the configuration file for the desired state. To enable RTC, use the following content in `local.xml`: Contents of `local.xml` (enable RTC):
    
    ```
       <?xml version="1.0" encoding="UTF-8"?>
       <ReplicationRule>
           <RTC>
               <Status>enabled</Status>
           </RTC>
           <ID>test-replication-id</ID>
       </ReplicationRule>
    ```
    
    To disable RTC, use the following content in `local.xml`: Contents of `local.xml` (disable RTC):
    
    ```
       <?xml version="1.0" encoding="UTF-8"?>
       <ReplicationRule>
           <RTC>
               <Status>disabled</Status>
           </RTC>
           <ID>test-replication-id</ID>
       </ReplicationRule>
    ```
    
2.  Apply the configuration to `srcbucket`:
    
    ```
       ossutil replication --method put --item rtc oss://srcbucket local.xml
    ```
    
    Expected output:
    
    ```
       0.856895(s) elapsed
    ```
    

## Query replication rules

**Synopsis**

```
ossutil replication --method get oss://<bucketname>
```

**Example**

Query the replication rules for `srcbucket`:

```
ossutil replication --method get oss://srcbucket
```

Expected output:

```
<?xml version="1.0" encoding="UTF-8"?>
<ReplicationConfiguration>
  <Rule>
    <ID>37417af4-f2dc-4b24-92d3-82092af6****</ID>
    <Action>ALL</Action>
    <Destination>
      <Bucket>destbucket</Bucket>
      <Location>oss-cn-beijing</Location>
    </Destination>
    <Status>doing</Status>
    <HistoricalObjectReplication>enabled</HistoricalObjectReplication>
  </Rule>
</ReplicationConfiguration>


0.069195(s) elapsed
```

## Query replication destination regions

Retrieve the list of regions that the source bucket can replicate data to. The output also shows which regions require transfer acceleration (`oss_acc`) when replicating to them.

**Synopsis**

```
ossutil replication --method get --item location oss://<bucketname>
```

**Example**

Query the replication destination regions for `srcbucket`:

```
ossutil replication --method get --item location oss://srcbucket
```

Expected output:

```
<?xml version="1.0" ?>
<ReplicationLocation>
  <Location>oss-cn-beijing</Location>
  <Location>oss-cn-qingdao</Location>
  <Location>oss-cn-shenzhen</Location>
  <Location>oss-cn-hongkong</Location>
  <Location>oss-us-west-1</Location>
  <LocationTransferTypeConstraint>
    <LocationTransferType>
      <Location>oss-cn-hongkong</Location>
        <TransferTypes>
          <Type>oss_acc</Type>
        </TransferTypes>
      </LocationTransferType>
      <LocationTransferType>
        <Location>oss-us-west-1</Location>
        <TransferTypes>
          <Type>oss_acc</Type>
        </TransferTypes>
      </LocationTransferType>
    </LocationTransferTypeConstraint>
  </ReplicationLocation>

0.226523(s) elapsed
```

## Query replication progress

Track how far a replication task has progressed. Progress is displayed on screen only and cannot be written to a file.

**Synopsis**

```
ossutil replication --method get --item progress oss://<bucketname> [ruleID]
```

**Parameter**

**Description**

`bucketname`

Name of the bucket

`ruleID`

(Optional) ID of the replication rule. If omitted, progress for all rules is returned.

**Example**

Query progress for a specific rule on `srcbucket`:

```
ossutil replication --method get --item progress oss://srcbucket 37417af4-f2dc-4b24-92d3-82092af6****
```

Query progress for all rules on `srcbucket`:

```
ossutil replication --method get --item progress oss://srcbucket
```

Expected output:

```
<?xml version="1.0" encoding="UTF-8"?>
<ReplicationProgress>
  <Rule>
    <ID>37417af4-f2dc-4b24-92d3-82092af6****</ID>
    <Action>ALL</Action>
    <Destination>
      <Bucket>destbucket</Bucket>
      <Location>oss-cn-beijing</Location>
    </Destination>
    <Status>doing</Status>
    <HistoricalObjectReplication>enabled</HistoricalObjectReplication>
    <Progress>
      <HistoricalObject>1.00</HistoricalObject>
      <NewObject>2021-08-09T06:00:59.000Z</NewObject>
    </Progress>
  </Rule>
</ReplicationProgress>


0.125002(s) elapsed
```

In this output:

-   `HistoricalObject: 1.00` — 100% of historical objects have been replicated.
    
-   `NewObject: 2021-08-09T06:00:59.000Z` — all objects written to `srcbucket` before 06:00:59 UTC+8 on August 9, 2021 have been replicated to `destbucket`.
    

## Delete a replication rule

**Synopsis**

```
ossutil replication --method delete oss://<bucketname> <ruleID>
```

**Example**

Delete a specific replication rule from `srcbucket`:

```
ossutil replication --method delete oss://srcbucket 37417af4-f2dc-4b24-92d3-82092af6****
```

Expected output:

```
0.069195(s) elapsed
```

## Common options

To operate on a bucket in a different region or owned by a different Alibaba Cloud account, append the following options:

**Option**

**Description**

`-e <endpoint>`

Endpoint of the region where the bucket is located

`-i <AccessKey ID>`

AccessKey ID of the target account

`-k <AccessKey Secret>`

AccessKey Secret of the target account

**Example**

Add a replication rule to `testbucket` in the China (Shanghai) region, owned by a different account:

```
ossutil replication --method put oss://testbucket localfile.txt -e oss-cn-shanghai.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For a full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).
