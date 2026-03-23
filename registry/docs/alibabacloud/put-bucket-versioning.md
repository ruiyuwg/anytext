Configures the versioning state of a bucket.

## Prerequisites

Before you begin, make sure you have:

-   The `PutBucketVersioning` permission on the bucket
    

## Usage notes

A bucket can be in one of three versioning states:

**State**

**Behavior**

**Disabled** (default)

Versioning is off. Objects have no version IDs.

**Enabled**

OSS generates a unique version ID for every object uploaded. All versions are retained.

**Suspended**

OSS assigns version ID `null` to newly uploaded objects. Deleted or overwritten objects do not generate new versions.

For more information about versioning, see [Overview](/help/en/oss/user-guide/overview-78/).

## Command syntax

```
ossutil api put-bucket-versioning --bucket <bucket-name> --versioning-configuration <config> [flags]
```

**Parameters**

**Parameter**

**Type**

**Required**

**Description**

`--bucket`

string

Yes

The name of the bucket.

`--versioning-configuration`

string

Yes

The versioning configuration. Accepts XML or JSON. Valid `Status` values: `Enabled`, `Suspended`.

**Note**

`put-bucket-versioning` maps to the [PutBucketVersioning](/help/en/oss/developer-reference/putbucketversioning) API operation. For all supported flags, see [Command-line options](/help/en/oss/command-line-options).

### \--versioning-configuration format

Pass the configuration as a file reference or an inline JSON string.

**XML format:**

```
<VersioningConfiguration>
  <Status>Enabled</Status>
</VersioningConfiguration>
```

**JSON format:**

```
{
  "Status": "Enabled"
}
```

## Examples

### Enable versioning

**Using an XML configuration file:**

```
<?xml version="1.0" encoding="UTF-8"?>
<VersioningConfiguration>
  <Status>Enabled</Status>
</VersioningConfiguration>
```

```
ossutil api put-bucket-versioning --bucket examplebucket --versioning-configuration file://versioning-configuration.xml
```

**Using a JSON configuration file:**

```
{
  "Status": "Enabled"
}
```

```
ossutil api put-bucket-versioning --bucket examplebucket --versioning-configuration file://versioning-configuration.json
```

**Using inline JSON:**

```
ossutil api put-bucket-versioning --bucket examplebucket --versioning-configuration "{\"Status\":\"Enabled\"}"
```

### Suspend versioning

```
ossutil api put-bucket-versioning --bucket examplebucket --versioning-configuration "{\"Status\":\"Suspended\"}"
```

## What's next

-   [PutBucketVersioning](/help/en/oss/developer-reference/putbucketversioning) — full API reference with request and response details
    
-   [Overview](/help/en/oss/user-guide/overview-78/) — versioning concepts and behavior
