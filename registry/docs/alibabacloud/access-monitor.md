Run the `access-monitor` command to enable or disable access tracking for a bucket, or query its current configuration. Access tracking is required before you can configure lifecycle rules based on last access time to automatically identify cold data and transition its storage class, reducing storage costs.

## Prerequisites

Before you begin, ensure that you have:

-   ossutil 1.7.15 or later. Earlier versions do not support the `access-monitor` command.
    
-   The `oss:PutBucketAccessMonitor` permission to enable or disable access tracking.
    
-   The `oss:GetBucketAccessMonitor` permission to query access tracking configurations.
    

For ossutil 1.6.16 and later, use `ossutil` directly as the binary name. For earlier versions, update the binary name based on your operating system. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).

To grant the required permissions to a RAM user, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Enable or disable access tracking

**Syntax**

```
ossutil access-monitor --method put oss://<bucketname>/ <local_xml_file>
```

**Parameters**

**Parameter**

**Description**

`<bucketname>`

The name of the bucket for which to configure access tracking.

`<local_xml_file>`

The local XML file that specifies the access tracking configuration. Example: `config.xml`.

**XML configuration**

To enable access tracking, use:

```
<?xml version="1.0" encoding="UTF-8"?>
<AccessMonitorConfiguration>
    <Status>Enabled</Status>
</AccessMonitorConfiguration>
```

To disable access tracking, use:

```
<?xml version="1.0" encoding="UTF-8"?>
<AccessMonitorConfiguration>
    <Status>Disabled</Status>
</AccessMonitorConfiguration>
```

**Example**

Enable access tracking for `examplebucket` using `config.xml`:

```
ossutil access-monitor --method put oss://examplebucket/ config.xml
```

Expected output:

```
0.299514(s) elapsed
```

## Query access tracking configurations

**Syntax**

```
ossutil access-monitor --method get oss://<bucketname> [<local_xml_file>]
```

**Parameters**

**Parameter**

**Description**

`<bucketname>`

The name of the bucket whose access tracking configurations you want to query.

`<local_xml_file>`

(Optional) The local file to save the configurations to. Example: `local.xml`. If omitted, the configurations are printed to the terminal.

**Examples**

Query and display the access tracking configurations for `examplebucket`:

```
ossutil access-monitor --method get oss://examplebucket
```

Expected output:

```
<?xml version="1.0" encoding="UTF-8"?>
<AccessMonitorConfiguration>
  <Status>Enabled</Status>
</AccessMonitorConfiguration>

0.154689(s) elapsed
```

Query and save the configurations to `local.xml`:

```
ossutil access-monitor --method get oss://examplebucket/ local.xml
```

Expected output:

```
0.214483(s) elapsed
```

The `local.xml` file contains:

```
<?xml version="1.0" encoding="UTF-8"?>
<AccessMonitorConfiguration>
  <Status>Enabled</Status>
</AccessMonitorConfiguration>
```

## What's next

After enabling access tracking, configure lifecycle rules based on last access time to automatically transition cold data to a lower-cost storage class. For details, see [lifecycle](/help/en/oss/developer-reference/lifecycle).
