Deletes all cross-origin resource sharing (CORS) rules from a bucket.

## Syntax

```
ossutil api delete-bucket-cors --bucket value [flags]
```

## Parameters

**Parameter**

**Type**

**Description**

`--bucket`

string

The name of the bucket whose CORS rules you want to delete.

**Note**

For global flags, see [Command-line options](/help/en/oss/command-line-options).

## Example

The following command deletes all CORS rules from a bucket named `examplebucket`:

```
ossutil api delete-bucket-cors --bucket examplebucket
```
