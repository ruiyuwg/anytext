Run `ossutil revert` to roll back a deleted object in a versioning-enabled bucket to a previous known-good version.

## How it works

The command uses one of two strategies depending on the version directive you specify:

-   **Delete marker removal** — When the latest version of an object is a delete marker, `HEAD~0` removes that delete marker, making the most recent actual version the current one again.
    
-   **Version copy** — When you specify `HEAD~n` (n > 0), the command copies the target version and makes it the new current version.
    

## Prerequisites

Before you begin, ensure that you have:

-   A versioning-enabled OSS bucket
    
-   The following permissions: `oss:GetObject`, `oss:PutObject`, `oss:ListObjectVersions`, and `oss:DeleteObject`
    

For information about granting permissions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Command syntax

```
ossutil revert oss://bucket[/prefix] version-directive [flags]
```

### Parameters

**Parameter**

**Type**

**Description**

`version-directive`

string

The version to restore to. Accepts a version ID, a version index, or a time index. See [Version directive formats](#section-39a8f90f).

`-d, --dirs`

/

Return objects and subdirectories in the current directory.

`--encoding-type`

string

Encoding method for object names. Valid value: `url`.

`--end-with`

string

Return only objects whose names are alphabetically before or equal to the specified value.

`--exclude`

stringArray

Exclusion rule for paths or object names. Example: `--exclude "*.jpg"`

`--exclude-from`

stringArray

Read the exclusion rule from a file. Example: `--exclude-from exclude_rules.txt`

`--files-from`

stringArray

Read source object names from a file. Empty lines and comment lines are ignored.

`--files-from-raw`

stringArray

Read source object names from a file. All lines are used as-is.

`--filter`

stringArray

Filter rule for paths or object names.

`--filter-from`

stringArray

Read the filter rule from a file.

`-f, --force`

/

Run without a confirmation prompt.

`--ignore-version-not-exist`

/

Ignore "version not found" errors during batch operations. Useful when objects in a directory may not all have the target version.

`--include`

stringArray

Inclusion rule for paths or object names. Example: `--include "/dir1/*.txt"`

`--include-from`

stringArray

Read the inclusion rule from a file. Example: `--include-from include_rules.txt`

`--max-age`

Duration

Skip objects whose last modified time is older than the specified age. Default unit: seconds. Accepted units: ms, s, m, h, d, w, m, y. Default: empty (no filter).

`--min-mtime`

Time

Skip objects whose last modified time is earlier than the specified UTC time. Default: empty (no filter).

`--page-size`

int

Maximum number of objects returned per page. Default: 1000. Valid range: 1–1000.

`-r, --recursive`

/

Apply the command recursively to all objects that meet the conditions in the bucket. Without this flag, only objects at the specified path are affected.

`--request-payer`

string

Payer of the request. If pay-by-requester is enabled on the bucket, set to `requester`.

`--start-after`

string

Return only objects whose names are alphabetically after the specified value.

For a full list of global flags, see [Command-line options](/help/en/oss/command-line-options).

### Version directive formats

The `version-directive` parameter accepts three formats:

**Version ID**

Specify the exact version ID of the version to restore to.

```
ossutil revert oss://examplebucket/example.txt CAEQIBiBgICAr6yv9hgiIDZiNmUzNjM5Njg0ZDRhOWQ4Yj
```

**Version index (\`HEAD~n\`)**

Specify a relative version offset. Version indexes exclude delete markers.

**Value**

**Behavior**

`HEAD~0`

If the latest version is a delete marker, removes it to reveal the previous version.

`HEAD~n` (n > 0)

Copies the n-th previous version (excluding delete markers) as the new current version.

```
# Restore to the most recent previous version
ossutil revert oss://examplebucket/example.txt HEAD~0

# Restore to the fourth most recent previous version
ossutil revert oss://examplebucket/example.txt HEAD~4
```

**Time index (\`NOW~time\`)**

Restore to the most recent version whose last modified time is not later than the specified time. Delete markers are excluded.

**Format**

**Example**

**Description**

`NOW~<duration>`

`NOW~1d`

Restore to the most recent version from within the past day. Valid time units: `ms`, `s`, `m`, `h`, `d`, `w`, `m`, `y`.

`NOW~<ISO 8601>`

`NOW~2024-04-12T14:00:00`

Restore to the most recent version not later than the specified date and time.

```
# Restore to the most recent version from within the past day
ossutil revert oss://examplebucket/example.txt NOW~1d

# Restore to the most recent version not later than a specific timestamp
ossutil revert oss://examplebucket/example.txt NOW~2024-04-12T14:00:00
```

**Important**

`ossutil revert` does not support restoring an object by deleting intermediate versions. To restore an object to a specific version by removing newer versions, use the `rm` command instead. For example, to delete the three most recent versions of `key123`:

```
ossutil rm oss://bucket/key123 --end-with key123 --limited-num 3 -rf --all-versions
```

## Examples

### Restore a single object

Restore `example.txt` in `examplebucket` to a specific version by version ID:

```
ossutil revert oss://examplebucket/example.txt 123
```

Restore `example.txt` to the most recent previous version:

```
ossutil revert oss://examplebucket/example.txt HEAD~0
```

Restore `example.txt` to the fourth most recent previous version:

```
ossutil revert oss://examplebucket/example.txt HEAD~4
```

Restore `example.txt` to the most recent version from within the past day:

```
ossutil revert oss://examplebucket/example.txt NOW~1d
```

Restore `example.txt` to the most recent version not later than a specific timestamp:

```
ossutil revert oss://examplebucket/example.txt NOW~2024-04-12T14:00:00
```

### Restore multiple objects

Restore all objects in the `dir` directory to the fourth most recent previous version:

```
ossutil revert oss://examplebucket/dir -r HEAD~4
```

Restore all objects in `dir`, and ignore errors for objects that don't have a fourth previous version:

```
ossutil revert oss://examplebucket/dir -r HEAD~4 --ignore-version-not-exist
```

Restore all objects except `.jpg` files in `examplebucket` to the most recent previous version:

```
ossutil revert oss://examplebucket -r --exclude "*.jpg" HEAD~0
```

Restore all `.txt` files in `dir1` and `dir2` to the most recent previous version:

```
ossutil revert oss://examplebucket -r --include "/dir1/*.txt" --include "/dir2/*.txt" HEAD~0
```

Read inclusion rules from `include_rules.txt` and restore matching objects in `dir` to the fourth most recent previous version. The `include_rules.txt` file contains:

```
*.log
*.csv
```

Command:

```
ossutil revert oss://examplebucket/dir -r HEAD~4 --include-from include_rules.txt
```

## What's next

-   [Versioning overview](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb)
    
-   [Delete markers](/help/en/oss/user-guide/delete-marker#concept-azw-shj-dgb)
    
-   [Command-line options](/help/en/oss/command-line-options)
