Retrieves the cross-origin resource sharing (CORS) configuration of a bucket.

## Syntax

```
ossutil api get-bucket-cors --bucket <value> [flags]
```

## Parameters

**Parameter**

**Type**

**Required**

**Description**

`--bucket`

string

Yes

The name of the bucket.

For all supported flags, see [Command-line options](/help/en/oss/command-line-options).

## Examples

**Query the CORS configuration of a bucket:**

```
ossutil api get-bucket-cors --bucket examplebucket
```

**Query the CORS configuration and display the output in JSON format:**

```
ossutil api get-bucket-cors --bucket examplebucket --output-format json
```
