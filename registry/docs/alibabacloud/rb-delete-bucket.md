Use the `rb` command to delete an OSS bucket.

An empty bucket can be deleted directly. To delete a non-empty bucket, use `--force` to remove all objects before deletion.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:DeleteBucket` permission
    

## Command syntax

```
ossutil rb oss://<bucket-name> [flags]
```

## Flags

**Flag**

**Description**

`-f, --force`

Deletes all objects in the bucket before removing the bucket.

**Note**

For more information, see [Command-line options](/help/en/oss/command-line-options#65785a4884d85).

## Examples

**Delete an empty bucket**

```
ossutil rb oss://examplebucket
```

**Delete a non-empty bucket**

Use `--force` to delete all objects in the bucket, then remove the bucket.

```
ossutil rb oss://examplebucket --force
```
