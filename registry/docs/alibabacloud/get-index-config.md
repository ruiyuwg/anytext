Queries the indexes of a specified Logstore.

## Request syntax

```
aliyunlog log get_index_config --project_name=<value> --logstore_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the get\_index\_config command.

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

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to obtain the indexes of a Logstore named logstore-a.
    
    ```
    aliyunlog log get_index_config --project_name="aliyun-test-project" --logstore_name="logstore-a"
    ```
    
    To save the indexes to a specified file, run the following command:
    
    ```
    aliyunlog log get_index_config --project_name="aliyun-test-project" --logstore_name="logstore-a" >>export_index_config.json
    ```
    
-   Sample responses
    
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

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-getindex#api-detail-45).

## API reference

[GetIndex](/help/en/sls/developer-reference/api-sls-2020-12-30-getindex)
