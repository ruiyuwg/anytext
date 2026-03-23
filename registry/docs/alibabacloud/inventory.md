The bucket inventory feature exports metadata about objects in a bucket—such as count, size, storage class, and encryption state—on a scheduled basis. For buckets with a large number of objects, use bucket inventory instead of the `GetBucket (ListObjects)` API operation. Unlike `GetBucket (ListObjects)`, bucket inventory runs asynchronously on a schedule.

With bucket inventory, you can configure:

-   Which object metadata fields to include in the report
    
-   Whether to include all object versions or only current versions
    
-   The destination bucket where inventory lists are saved
    
-   The export frequency (weekly)
    
-   Encryption for the inventory list file
    

This topic describes how to run the `inventory` command in ossutil to create, query, list, and delete bucket inventories.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:PutBucketInventory` permission to create an inventory
    
-   The `oss:GetBucketInventory` permission to query an inventory
    
-   The `oss:DeleteBucketInventory` permission to delete an inventory
    
-   A Resource Access Management (RAM) role authorized to read objects from the source bucket and write to the destination bucket (required for creating an inventory)
    

For information about attaching permissions to a RAM user, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Usage notes

-   For ossutil 1.6.16 and later, use `ossutil` directly as the binary name on any operating system. For ossutil earlier than 1.6.16, use the OS-specific binary name. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    
-   For more information about the bucket inventory feature, see [Bucket inventory](/help/en/oss/user-guide/bucket-inventory#concept-2381539).
    

## Create an inventory

Creating an inventory involves three steps: setting up a RAM role, writing an XML configuration file, and running the `put` command.

### Step 1: Create a RAM role

Create a RAM role and grant it permission to read all objects from the source bucket and write objects to the destination bucket. For details, see [Create a RAM role for a trusted Alibaba Cloud service](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service#task-2448632).

### Step 2: Write the XML configuration file

Create a local XML file that defines the inventory configuration. The following example defines an inventory named `inventorytest` for the `examplebucket` bucket. OSS exports metadata for all objects with the `dir/` prefix to `destbucket` on a weekly basis. The exported fields include storage class, last modified date, multipart upload status, ETag, encryption status, and size. The inventory list is encrypted using SSE-OSS.

```
<?xml version="1.0" encoding="UTF-8"?>
<InventoryConfiguration>
    <Id>inventorytest</Id>
    <IsEnabled>true</IsEnabled>
    <Filter>
      <Prefix>dir/</Prefix>
    </Filter>
    <Destination>
        <OSSBucketDestination>
            <Format>CSV</Format>
            <AccountId>1746495857602745</AccountId>
            <RoleArn>acs:ram::174649585760****:role/AliyunOSSRole</RoleArn>
            <Bucket>acs:oss:::destbucket</Bucket>
            <Encryption>
                <SSE-OSS></SSE-OSS>
            </Encryption>
        </OSSBucketDestination>
    </Destination>
    <Schedule>
        <Frequency>Weekly</Frequency>
    </Schedule>
    <IncludedObjectVersions>All</IncludedObjectVersions>
    <OptionalFields>
        <Field>LastModifiedDate</Field>
        <Field>StorageClass</Field>
        <Field>IsMultipartUploaded</Field>
        <Field>ETag</Field>
        <Field>EncryptionStatus</Field>
        <Field>Size</Field>
    </OptionalFields>
</InventoryConfiguration>
```

The key XML fields are:

**Field**

**Description**

`Id`

The unique identifier for this inventory. If an inventory with the same ID already exists, the request returns HTTP status code 409.

`IsEnabled`

Whether the inventory is active. Set to `true` to enable.

`Filter` > `Prefix`

(Optional) Export metadata only for objects whose names contain this prefix. Omit to include all objects.

`Format`

The output file format. Supported value: `CSV`.

`AccountId`

The ID of the Alibaba Cloud account that owns the destination bucket.

`RoleArn`

The ARN of the RAM role authorized to write to the destination bucket.

`Bucket`

The destination bucket in the format `acs:oss:::<bucket-name>`.

`Encryption`

(Optional) Encryption method for the inventory list. Supported method: `SSE-OSS`.

`Frequency`

Export schedule. Supported values: `Weekly`.

`IncludedObjectVersions`

Object versions to include. Supported values: `All` (all versions), `Current` (current version only).

`OptionalFields` > `Field`

Additional metadata fields to include. Supported values: `LastModifiedDate`, `StorageClass`, `IsMultipartUploaded`, `ETag`, `EncryptionStatus`, `Size`.

### Step 3: Run the put command

**Syntax:**

```
ossutil inventory --method put oss://<bucket-name> <local-xml-file>
```

**Parameters:**

**Parameter**

**Description**

`bucket-name`

The name of the bucket for which to create the inventory.

`local-xml-file`

The path to the local XML configuration file, for example, `localfile.xml`.

**Example:**

```
ossutil inventory --method put oss://examplebucket localfile.xml
```

Expected output:

```
0.299514(s) elapsed
```

> Multiple inventories can be created for a single bucket. Each inventory is uniquely identified by its `Id`. If the specified `Id` already exists, the request returns HTTP status code 409.

## Query a specific inventory

**Syntax:**

```
ossutil inventory --method get oss://<bucket-name> <inventory-id> [--local_xml_file <file>]
```

**Parameters:**

**Parameter**

**Description**

`bucket-name`

The name of the bucket.

`inventory-id`

The ID of the inventory to query.

`--local_xml_file`

(Optional) The local file to save the inventory configuration. If not specified, the output is printed to the terminal.

**Example:**

```
ossutil inventory --method get oss://examplebucket inventorytest localfile.txt
```

Expected output:

```
0.212407(s) elapsed
```

## List all inventories for a bucket

**Syntax:**

```
ossutil inventory --method list oss://<bucket-name> [--local_xml_file <file>] [--marker <value>]
```

**Parameters:**

**Parameter**

**Description**

`bucket-name`

The name of the bucket.

`--local_xml_file`

(Optional) The local file to save the inventory list. If not specified, the output is printed to the terminal.

`--marker`

(Optional) The prefix-based filtering condition for inventories. Inventory lists are generated only for objects whose names contain the specified prefix. If not specified, inventory lists are generated for all objects in the bucket.

**Example:**

```
ossutil inventory --method list oss://examplebucket localfile.txt dest
```

Expected output:

```
0.216897(s) elapsed
```

## Delete an inventory

**Syntax:**

```
ossutil inventory --method delete oss://<bucket-name> <inventory-id>
```

**Parameters:**

**Parameter**

**Description**

`bucket-name`

The name of the bucket.

`inventory-id`

The ID of the inventory to delete.

**Example:**

```
ossutil inventory --method delete oss://examplebucket inventorytest
```

Expected output:

```
0.212407(s) elapsed
```

## Common options

To access a bucket in a different region or owned by a different Alibaba Cloud account, append the relevant options to any `inventory` command:

**Option**

**Description**

`-e <endpoint>`

The endpoint of the region where the bucket is located, for example, `oss-cn-hangzhou.aliyuncs.com`.

`-i <AccessKey-ID>`

The AccessKey ID of the account that owns the bucket.

`-k <AccessKey-secret>`

The AccessKey secret of the account that owns the bucket.

**Example** — create an inventory for a bucket in the China (Hangzhou) region owned by a different account:

```
ossutil inventory --method put oss://examplebucket local_xml_file -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For a full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).
