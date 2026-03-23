Queries the access control list (ACL) of a bucket.

## Syntax

```
ossutil api get-bucket-acl --bucket value [flags]
```

## Parameters

**Parameter**

**Type**

**Description**

`--bucket`

string

The name of the bucket whose ACL you want to query.

> **Note:** For all available flags, see [Command-line options](/help/en/oss/command-line-options).

## Examples

**Get the ACL of a bucket:**

```
ossutil api get-bucket-acl --bucket examplebucket
```

**Get the ACL and display the response in JSON format:**

```
ossutil api get-bucket-acl --bucket examplebucket --output-format json
```

Sample response:

```
{
  "AccessControlList": {
    "Grant": "public-read-write"
  },
  "Owner": {
    "DisplayName": "137918634953****",
    "ID": "137918634953****"
  }
}

0.409493(s) elapsed
```

**Get the ACL and display the response in YAML format:**

```
ossutil api get-bucket-acl --bucket examplebucket --output-format yaml
```

Sample response:

```
AccessControlList:
    Grant: public-read-write
Owner:
    DisplayName: "137918634953****"
    ID: "137918634953****"

0.313081(s) elapsed
```

## Output

The response contains the following fields:

**Field**

**Type**

**Description**

`AccessControlList.Grant`

string

The ACL of the bucket.

`Owner.DisplayName`

string

The display name of the bucket owner.

`Owner.ID`

string

The account ID of the bucket owner.
