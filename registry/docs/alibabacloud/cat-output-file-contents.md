Displays the content of an object in a bucket to the screen.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:GetObject` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Syntax

```
ossutil cat oss://bucket/object [flags]
```

## Flags

Use `--head` or `--tail` to read from the start or end of an object. To read an arbitrary range, combine `--offset` and `--count`.

**Flag**

**Type**

**Description**

`--count`

int

Number of characters to read. Default: `-1` (read to the end of the object).

`--encoding-type`

string

Encoding type of the object name. Valid value: `url`.

`--head`

int

Read only the first N characters.

`--offset`

int

Starting position of the display. For example, `--offset 10 --count 20` reads 20 characters starting at position 10.

`--request-payer`

string

Payer of the request. If pay-by-requester is enabled for the bucket, set this to `requester`.

`--tail`

int

Read only the last N characters.

`--version-id`

string

Version ID of the object.

For all available flags, see [Command-line options](/help/en/oss/command-line-options).

## Examples

**Print full object content**

```
ossutil cat oss://examplebucket/example.txt
```

**Print the first 10 characters**

```
ossutil cat oss://examplebucket/example.txt --head 10
```

**Print the last 10 characters**

```
ossutil cat oss://examplebucket/example.txt --tail 10
```

**Print 20 characters starting at position 10**

```
ossutil cat oss://examplebucket/example.txt --offset 10 --count 20
```

**Print from position 10 to the end**

```
ossutil cat oss://examplebucket/example.txt --offset 10
```
