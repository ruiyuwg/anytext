Run `ossutil restore` to restore Archive, Cold Archive, or Deep Cold Archive objects before accessing them.

Archive objects without real-time access enabled, and all Cold Archive and Deep Cold Archive objects, must be restored before they can be read. Restoration is asynchronous: Archive objects typically take a few minutes, Cold Archive objects several hours, and Deep Cold Archive objects 12–48 hours. Actual times may vary.

## Prerequisites

Before you begin, make sure you have:

-   The `oss:RestoreObject` permission to restore a single object
    
-   Both `oss:RestoreObject` and `oss:ListObjects` permissions to restore objects in a directory
    

For instructions on granting permissions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

For details on the restoration process and billing, see [Restore objects](/help/en/oss/user-guide/restore-objects-for-access#concept-wx5-szt-tdb).

## Command syntax

```
ossutil restore oss://bucket/object [flags]
```

## Parameters

**Parameter**

**Type**

**Description**

`--days`

int

Number of days the object stays in the restored state. Valid values: 1–365. If the value exceeds a storage class's maximum, it is automatically capped. For example, Archive supports a maximum of 7 days; if you set `--days 100`, Archive objects are set to 7 days and Deep Cold Archive objects are set to 100 days.

`--dirs`

/

Lists objects and subdirectories in the current directory only, without recursing into subdirectories.

`--encoding-type`

string

Encoding method for object names. Valid value: `url`.

`--end-with`

string

Returns objects whose names are alphabetically before or equal to the specified value.

`--exclude`

stringArray

Exclusion rule for paths or object names.

`--exclude-from`

stringArray

Reads exclusion rules from a file.

`--files-from`

stringArray

Reads object names from a file, ignoring empty and comment lines.

`--files-from-raw`

stringArray

Reads object names from a file, including empty and comment lines.

`--filter`

stringArray

Filter rule for paths or object names.

`--filter-from`

stringArray

Reads filter rules from a file.

`-f, --force`

/

Forces the operation without prompting for confirmation.

`--include`

stringArray

Inclusion rule for paths or object names.

`--include-from`

stringArray

Reads inclusion rules from a file.

`--limited-num`

int

Maximum number of results to return.

`--list-format`

string

Format of the list file. Valid values: `plain` and `inventory`.

`--list-manifest-from`

string

Reads the format description of the list file from a file. Required when the format is `inventory`.

`--list-objects`

/

Lists objects using the ListObjects operation.

`--max-age`

Duration

Excludes objects whose last modified time is older than the specified value. Default unit: seconds. Accepts time suffixes.

`--max-mtime`

Time

Excludes objects last modified after the specified UTC time. Format: `2006-01-02T15:04:05`.

`--max-size`

SizeSuffix

Maximum object size to process. Default unit: bytes. Supports 1024-based suffixes: B, K, M, G, T, P.

`--metadata-exclude`

stringArray

Exclusion rule for object metadata.

`--metadata-filter`

stringArray

Filter rule for object metadata.

`--metadata-filter-from`

stringArray

Reads metadata filter rules from a file.

`--metadata-include`

stringArray

Inclusion rule for object metadata.

`--min-age`

Duration

Excludes objects whose last modified time is more recent than the specified value. Default unit: seconds. Accepts time suffixes (for example, `1h` for one hour).

**Note**

`--min-age 1h` processes only objects modified more than one hour ago.

`--min-mtime`

Time

Excludes objects last modified before the specified UTC time. Format: `2006-01-02T15:04:05`.

**Note**

`--min-mtime "2006-01-02T15:04:05"` processes only objects modified after that time.

`--min-size`

SizeSuffix

Minimum object size to process. Default unit: bytes. Supports 1024-based suffixes: B, K, M, G, T, P.

`--page-size`

int

Maximum objects per page in paginated batch listing. Valid values: 1–1000. Default: 1000.

`-r, --recursive`

/

Applies the operation recursively to all matching objects in the bucket. Without this flag, only the specified object is processed.

`--request-payer`

string

Payer for the request. Set to `requester` when pay-by-requester is enabled.

`--start-after`

string

Returns objects whose names are alphabetically after the specified value.

`--tier`

string

Restoration priority for Cold Archive and Deep Cold Archive objects. Not required for Archive (approximately 1 minute). See [Choose a restoration tier](#section-0d6c8d5c) for details.

`--version-id`

string

Version ID of a specific object version to restore.

> For a complete list of flags, see [Command-line options](/help/en/oss/command-line-options).

## Choose a restoration tier

The `--tier` flag controls how quickly Cold Archive and Deep Cold Archive objects are restored. Archive objects do not require a tier — restoration takes approximately 1 minute.

**Tier**

**Cold Archive**

**Deep Cold Archive**

**When to use**

**Expedited**

Within 1 hour

Within 12 hours

Urgent, time-sensitive access to a small number of objects

**Standard**

Within 2–5 hours

Within 48 hours

Default choice when you can wait a few hours

**Bulk**

Within 5–12 hours

Not supported

Large-scale retrieval where cost matters more than speed

> When restoring objects from multiple storage classes in a single command, if the specified tier is not supported by a storage class, it is automatically adjusted to that class's lowest-priority tier. For example, if you set `--tier Bulk` and the selection includes Deep Cold Archive objects, those objects are automatically adjusted to Standard.

## Examples

### Restore Archive objects

Restore a single Archive object:

```
ossutil restore oss://examplebucket/exampleobject.txt
```

Restore an Archive object and keep it in the restored state for 3 days:

```
ossutil restore oss://examplebucket/exampleobject.txt --days 3
```

Restore objects from a list file. Each line in the list file is an OSS path in the format `oss://{bucket}/{key}`:

```
oss://examplebucket/key1
oss://examplebucket/key2
```

```
ossutil restore list://list.txt
```

Restore objects from a list file without checking their current status:

```
ossutil restore list://list.txt --no-check-status
```

Restore objects from an inventory list file. A CSV and a manifest file are generated when OSS inventory is configured:

```
ossutil restore list://ca8007fc-4123-493e-9a01-dd1511fbac54.csv.gz --list-format inventory --list-manifest-from manifest.json
```

Restore objects from an inventory list file without checking their current status:

```
ossutil restore list://ca8007fc-4123-493e-9a01-dd1511fbac54.csv.gz --list-format inventory --list-manifest-from manifest.json --no-check-status
```

### Restore Cold Archive objects

Restore a Cold Archive object using Bulk tier and keep it in the restored state for 5 days:

```
ossutil restore oss://examplebucket/exampleobject.txt --tier Bulk --days 5
```

### Restore Deep Cold Archive objects

Restore a Deep Cold Archive object using Standard tier and keep it in the restored state for 10 days:

```
ossutil restore oss://examplebucket/exampleobject.txt --tier Standard --days 10
```

## Billing

**Fee type**

**When charged**

Data retrieval fee

When restoring Archive, Cold Archive, or Deep Cold Archive objects, based on object size. See [Data processing fees](/help/en/oss/data-processing-fees#concept-2558464).

API call fee

Per PUT request when restoring Archive objects. See [API operation calling fees](/help/en/oss/api-operation-calling-fees).

Data retrieval request fee

When restoring Cold Archive or Deep Cold Archive objects. See [API operation calling fees](/help/en/oss/api-operation-calling-fees).

Storage fee

During and after restoration, per the billing rules for each storage class. See [Storage fees](/help/en/oss/storage-fees).

Temporary Standard replica fee

When restoring Cold Archive or Deep Cold Archive objects, a Standard replica is generated for temporary access. Charged at Standard storage rates until the object returns to the frozen state. See [Temporary storage fees](/help/en/oss/temporary-storage-fees#concept-2558617).

**Restored state duration limits:**

-   Archive: up to 7 days
    
-   Cold Archive and Deep Cold Archive: up to 365 days
    

No data retrieval fee is charged while the object is in the restored state. After the restored state expires, the object returns to the frozen state. Restoring it again incurs data retrieval fees.
