Add or edit tags on an object.

## Usage notes

-   By default, an Alibaba Cloud account has permission to add or edit object tags. RAM users and Security Token Service (STS) require the `oss:PutObjectTagging` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   Each tag is a key-value pair. An object can have up to 10 tags. Tag keys must be unique per object. Tag keys can be up to 128 characters; tag values can be up to 256 characters. Both are case-sensitive and can contain letters, digits, spaces, and the following special characters: `+ - = . _ : /`.
    
-   Adding or editing tags does not update the `Last-Modified` timestamp of the object.
    

## Command syntax

```
ossutil api put-object-tagging --bucket <value> --key <value> --tagging <value> [--version-id <value>] [flags]
```

**Parameter**

**Type**

**Required**

**Description**

`--bucket`

string

Yes

Bucket name

`--key`

string

Yes

Full path of the object

`--tagging`

string

Yes

Tag configuration in XML or JSON format. Tag keys must be unique; up to 10 tags per object

`--version-id`

string

No

Version ID of the object

> This command corresponds to the PutObjectTagging API operation. For all supported parameters, see [PutObjectTagging](/help/en/oss/developer-reference/putobjecttagging). For supported global flags, see [Command-line options](/help/en/oss/command-line-options#65785a4884d85).

### \--tagging format

The `--tagging` parameter accepts XML or JSON. To read the configuration from a file, prefix the file path with `file://`.

**XML format:**

```
<Tagging>
  <TagSet>
    <Tag>
      <Key>string</Key>
      <Value>string</Value>
    </Tag>
    ...
  </TagSet>
</Tagging>
```

**JSON format:**

```
{
  "TagSet": {
    "Tag": [
      {
        "Key": "string",
        "Value": "string"
      },
      ...
    ]
  }
}
```

## Examples

All examples set two tags (`key1=value1`, `key2=value2`) on `exampleobject` in `examplebucket`.

### Set tags inline

Pass the tag configuration directly in the command as an inline JSON string:

```
ossutil api put-object-tagging --bucket examplebucket --key exampleobject --tagging "{\"TagSet\":{\"Tag\":[{\"Key\":\"key1\",\"Value\":\"value1\"},{\"Key\":\"key2\",\"Value\":\"value2\"}]}}"
```

### Set tags from an XML file

1.  Create a file named `tagging.xml` with the following content:
    
    ```
       <?xml version="1.0" encoding="UTF-8"?>
       <Tagging>
         <TagSet>
           <Tag>
             <Key>key1</Key>
             <Value>value1</Value>
           </Tag>
           <Tag>
             <Key>key2</Key>
             <Value>value2</Value>
           </Tag>
         </TagSet>
       </Tagging>
    ```
    
2.  Run the command:
    
    ```
       ossutil api put-object-tagging --bucket examplebucket --key exampleobject --tagging file://tagging.xml
    ```
    

### Set tags from a JSON file

1.  Create a file named `tagging.json` with the following content:
    
    ```
       {
         "TagSet": {
           "Tag": [
             {
               "Key": "key1",
               "Value": "value1"
             },
             {
               "Key": "key2",
               "Value": "value2"
             }
           ]
         }
       }
    ```
    
2.  Run the command:
    
    ```
       ossutil api put-object-tagging --bucket examplebucket --key exampleobject --tagging file://tagging.json
    ```
