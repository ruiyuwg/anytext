Lists the details of database partitions in a data lake.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/ListPartitions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/ListPartitions)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

dlf:ListPartitions

list

\*All Resource

`*`

None

None

## Request syntax

```
POST /api/metastore/catalogs/databases/tables/partitions/list HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Body

object

No

The HTTP request body.

CatalogId

string

No

The ID of the data catalog.

1344371

DatabaseName

string

No

The name of the database.

database\_test

NextPageToken

string

No

The token for the next page of results. This token is returned in the response. For the first request, pass an empty string.

2cb472ec1bf84f8d92f9c4baa0d21c19aa

PageSize

integer

No

The number of entries per page. The maximum value is 1000.

10

PartialPartValues

[ListString](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-liststring)

No

The list of partition values. You can provide a partial list of values to query the names of all sub-partitions.

TableName

string

No

The name of the data table.

test\_table\_20200715162543389

IsShareSd

boolean

No

Specifies whether to share the column information in the storage descriptor (SD) of the partition. Valid values:

-   true: Shares the partition column information in the SD. This way, identical columns are returned only once. This reduces network traffic and improves the performance of this API operation.
    
-   false: Does not share the information.
    

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response body.

Code

string

The status code.

OK

Message

string

The returned message.

.

NextPageToken

string

The pagination token.

2cb472ec1bf84f8d92f9c4baa0d21c19aa

Partitions

array

The list of partition details.

[Partition](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-partition)

The partition details.

RequestId

string

The request ID.

B7F4B621-E41E-4C84-B97F-42B5380A32BB

Success

boolean

Indicates whether the call was successful. Valid values:

-   true: The call was successful.
    
-   false: The call failed.
    

true

PartitionSpecs

array

The list of partition specifications.

[PartitionSpec](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-partitionspec)

The partition specification.

Error codes for the Code parameter:

-   NoSuchObject: The specified database or table does not exist.
    
-   InternalError: An internal error occurred. For more information, see the error message.
    

## Examples

Success response

`JSON` format

```
{
  "Code": "OK",
  "Message": ".",
  "NextPageToken": "2cb472ec1bf84f8d92f9c4baa0d21c19aa",
  "Partitions": [
    {
      "CreateTime": 1608730999,
      "DatabaseName": "database_test",
      "LastAccessTime": 1608730999,
      "LastAnalyzedTime": 1608730999,
      "Parameters": {
        "key": "key"
      },
      "Privileges": {
        "GroupPrivileges": {
          "key": [
            {
              "CreateTime": 1606226844,
              "GrantOption": true,
              "Grantor": "Grantor",
              "GrantorType": "GrantorType",
              "Privilege": "Privilege"
            }
          ]
        },
        "RolePrivileges": {
          "key": [
            {
              "CreateTime": 1606226844,
              "GrantOption": true,
              "Grantor": "Grantor",
              "GrantorType": "GrantorType",
              "Privilege": "Privilege"
            }
          ]
        },
        "UserPrivileges": {
          "key": [
            {
              "CreateTime": 1606226844,
              "GrantOption": true,
              "Grantor": "Grantor",
              "GrantorType": "GrantorType",
              "Privilege": "Privilege"
            }
          ]
        }
      },
      "Sd": {
        "BucketCols": [
          "2010"
        ],
        "Cols": [
          {
            "Comment": "comment_day",
            "Name": "day",
            "Parameters": {
              "key": "key"
            },
            "Type": "int"
          }
        ],
        "Compressed": false,
        "InputFormat": "org.apache.hadoop.hive.ql.io.avro.AvroContainerInputFormat",
        "Location": "file:///tmp/table",
        "NumBuckets": 10,
        "OutputFormat": "org.apache.hadoop.hive.ql.io.avro.AvroContainerOutputFormat",
        "Parameters": {
          "key": "key"
        },
        "SerDeInfo": {
          "Name": "name",
          "Parameters": {
            "key": "key"
          },
          "SerializationLib": "org.apache.hadoop.hive.serde2.OpenCSVSerde"
        },
        "SkewedInfo": {
          "SkewedColNames": [
            "col1"
          ],
          "SkewedColValueLocationMaps": {
            "key": "{“col1”:\"val1\"}"
          },
          "SkewedColValues": [
            [
              "\"123\""
            ]
          ]
        },
        "SortCols": [
          {
            "Col": "col1",
            "Order": 1
          }
        ],
        "StoredAsSubDirectories": false
      },
      "TableName": "test_table_20201223",
      "Values": [
        "part1"
      ]
    }
  ],
  "RequestId": "B7F4B621-E41E-4C84-B97F-42B5380A32BB",
  "Success": true,
  "PartitionSpecs": [
    {
      "SharedSDPartitions": [
        {
          "CreateTime": 1608730999,
          "DatabaseName": "database_test",
          "LastAccessTime": 1608730999,
          "LastAnalyzedTime": 1608730999,
          "Parameters": {
            "key": "key"
          },
          "Privileges": {},
          "Sd": {
            "BucketCols": [
              "2010"
            ],
            "Cols": [
              {
                "Comment": "comment_day",
                "Name": "day",
                "Parameters": {
                  "key": "key"
                },
                "Type": "int"
              }
            ],
            "Compressed": false,
            "InputFormat": "org.apache.hadoop.hive.ql.io.avro.AvroContainerInputFormat",
            "Location": "file:///tmp/table",
            "NumBuckets": 10,
            "OutputFormat": "org.apache.hadoop.hive.ql.io.avro.AvroContainerOutputFormat",
            "Parameters": {
              "key": "key"
            },
            "SerDeInfo": {
              "Name": "name",
              "SerializationLib": "org.apache.hadoop.hive.serde2.OpenCSVSerde"
            },
            "SkewedInfo": {
              "SkewedColNames": [
                "col1"
              ],
              "SkewedColValueLocationMaps": {
                "key": "{“col1”:\"val1\"}"
              },
              "SkewedColValues": [
                [
                  "\"123\""
                ]
              ]
            },
            "SortCols": [
              {
                "Col": "col1",
                "Order": 1
              }
            ],
            "StoredAsSubDirectories": false
          },
          "TableName": "test_table_20201223",
          "Values": [
            "part1"
          ]
        }
      ],
      "SharedStorageDescriptor": {
        "Cols": [
          {
            "Comment": "comment_day",
            "Name": "day",
            "Type": "int"
          }
        ],
        "Location": "相对路径"
      }
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/ListPartitions#workbench-doc-change-demo) for a complete list.
