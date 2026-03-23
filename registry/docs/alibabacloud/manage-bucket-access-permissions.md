Configures or modifies the access control list (ACL) of a bucket.

## **Syntax**

```
ossutil api put-bucket-acl --bucket value --acl value [flags]
```

**Parameter**

**Type**

**Description**

\--bucket

string

The name of the bucket for which you want to configure ACL or whose ACL you want to modify.

\--acl

string

The ACL that you want to configure or modify for the bucket. Valid values:

-   private
    
-   public-read
    
-   public-read-write
    

### Examples

Set the ACL of examplebucket to private:

```
ossutil api put-bucket-acl --bucket examplebucket --acl private
```
