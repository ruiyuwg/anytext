Modifies the indexes of a specified Logstore.

## Request syntax

```
aliyunlog log update_index --project_name=<value> --logstore_name=<value> --index_detail=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the create\_index command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--project\_name

String

Yes

aliyun-test-project

The name of the project.

\--logstore\_name

String

Yes

logstroe-a

The name of the Logstore.

\--index\_detail

JSON Object

Yes

file://./indexdetail.json

The path of the configuration file that is used to configure indexes. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb) and [GitHub](https://github.com/aliyun/aliyun-log-cli/blob/master/tests/create_index.json).

For information about the global parameters of the Simple Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

1.  Modify the indexdetail.json file. The following example shows the content of the indexdetail.json file:
    
    ```
    {
      "keys": {
        "key1": {
          "caseSensitive": false,
          "token": [
            ",",
            " ",
            "'",
            "\"",
            ";",
            "=",
            "(",
            ")",
            "[",
            "]",
            "{",
            "}",
            "?",
            "@",
            "&",
            "<",
            ">",
            "/",
            ":",
            "\n",
            "\t"
          ],
          "type": "text",
          "doc_value": true
        },
        "key2": {
          "caseSensitive": false,
          "token": [
            ",",
            " ",
            "'",
            "\"",
            ";",
            "=",
            "(",
            ")",
            "[",
            "]",
            "{",
            "}",
            "?",
            "@",
            "&",
            "<",
            ">",
            "/",
            ":",
            "\n",
            "\t"
          ],
          "type": "text",
          "doc_value": true
        },
        "key3": {
          "caseSensitive": false,
          "token": [
            ",",
            " ",
            "'",
            "\"",
            ";",
            "=",
            "(",
            ")",
            "[",
            "]",
            "{",
            "}",
            "?",
            "@",
            "&",
            "<",
            ">",
            "/",
            ":",
            "\n",
            "\t"
          ],
          "type": "text",
          "doc_value": true
        },
        "key4": {
          "caseSensitive": false,
          "token": [
            ",",
            " ",
            "'",
            "\"",
            ";",
            "=",
            "(",
            ")",
            "[",
            "]",
            "{",
            "}",
            "?",
            "@",
            "&",
            "<",
            ">",
            "/",
            ":",
            "\n",
            "\t"
          ],
          "type": "text",
          "doc_value": true
        }
      },
      "storage": "pg",
      "ttl": 2,
      "index_mode": "v2",
      "line": {
        "caseSensitive": false,
        "token": [
          ",",
          " ",
          "'",
          "\"",
          ";",
          "=",
          "(",
          ")",
          "[",
          "]",
          "{",
          "}",
          "?",
          "@",
          "&",
          "<",
          ">",
          "/",
          ":",
          "\n",
          "\t"
        ]
      }
    }
    ```
    
2.  Use the default account to modify the index configurations of a Logstore named logstore-a. Run the following command:
    
    ```
    aliyunlog log update_index --project_name="aliyun-test-project" --logstore_name="logstore-a" --index_detail="file://./indexdetail.json"
    ```
    
3.  Query the index configurations. Run the following command:
    
    ```
    aliyunlog log get_index_config --project_name="aliyun-test-project" --logstore_name="logstore-a"
    ```
    
    The following output is returned:
    
    ```
    {
      "index_mode": "v2",
      "keys": {
        "key1": {
          "caseSensitive": false,
          "doc_value": true,
          "token": [
            ",",
            " ",
            "'",
            "\"",
            ";",
            "=",
            "(",
            ")",
            "[",
            "]",
            "{",
            "}",
            "?",
            "@",
            "&",
            "<",
            ">",
            "/",
            ":",
            "\n",
            "\t"
          ],
          "type": "text"
        },
        "key2": {
          "caseSensitive": false,
          "doc_value": true,
          "token": [
            ",",
            " ",
            "'",
            "\"",
            ";",
            "=",
            "(",
            ")",
            "[",
            "]",
            "{",
            "}",
            "?",
            "@",
            "&",
            "<",
            ">",
            "/",
            ":",
            "\n",
            "\t"
          ],
          "type": "text"
        },
        "key3": {
          "caseSensitive": false,
          "doc_value": true,
          "token": [
            ",",
            " ",
            "'",
            "\"",
            ";",
            "=",
            "(",
            ")",
            "[",
            "]",
            "{",
            "}",
            "?",
            "@",
            "&",
            "<",
            ">",
            "/",
            ":",
            "\n",
            "\t"
          ],
          "type": "text"
        },
        "key4": {
          "caseSensitive": false,
          "doc_value": true,
          "token": [
            ",",
            " ",
            "'",
            "\"",
            ";",
            "=",
            "(",
            ")",
            "[",
            "]",
            "{",
            "}",
            "?",
            "@",
            "&",
            "<",
            ">",
            "/",
            ":",
            "\n",
            "\t"
          ],
          "type": "text"
        }
      },
      "lastModifyTime": 0,
      "line": {
        "caseSensitive": false,
        "chn": false,
        "token": [
          ",",
          " ",
          "'",
          "\"",
          ";",
          "=",
          "(",
          ")",
          "[",
          "]",
          "{",
          "}",
          "?",
          "@",
          "&",
          "<",
          ">",
          "/",
          ":",
          "\n",
          "\t"
        ]
      },
      "storage": "pg",
      "ttl": 30
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-updateindex#api-detail-45).

## API reference

[UpdateIndex](/help/en/sls/developer-reference/api-sls-2020-12-30-updateindex)
