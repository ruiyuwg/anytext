Retrieves metadata.

## Operation description

Retrieves metadata.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/Search)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/Search)

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

dlf:Search

get

\*All Resource

`*`

None

None

## Request syntax

```
POST /api/metastore/catalogs/search HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

body

object

No

The request body.

CatalogId

string

No

The catalog ID.

1344371

SearchText

string

No

The search query.

tags:tag1 or comment:^iso and name=aliyun and (createTime > "20211111" and createTime < "20211117") and has category

SortCriteria

array

No

The sorting criteria.

[SortCriterion](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-sortcriterion)

No

The sorting criteria.

PageSize

integer

No

The number of entries per page.

1000

PageNumber

integer

No

The page number.

1

SearchType

string

No

The object type.

TABLE/DATABASE/CATALOG

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response body.

Code

string

The response code.

OK

Message

string

The response message.

""

RequestId

string

The request ID.

460C862F-BB91-5C04-BC3F-946EEF467862

Success

boolean

Indicates whether the request was successful.

True

DatabaseResult

object

The database result.

Databases

array<object>

A list of databases.

object

The database information.

Database

[Database](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-database)

The database.

HighLightList

array

The highlighted text.

HighLight

The highlighted text.

TotalCount

integer

The total number of databases that match the search criteria.

11000

TableResult

object

The table result.

Tables

array<object>

A list of tables.

object

The metadata table.

Table

[Table](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-table)

The table.

HighLightList

array

The highlighted text.

HighLight

The highlighted text.

TotalCount

integer

The total number of tables that match the search criteria.

1100

## Examples

Success response

`JSON` format

```
{
  "Code": "OK",
  "Message": "\"\"",
  "RequestId": "460C862F-BB91-5C04-BC3F-946EEF467862",
  "Success": true,
  "DatabaseResult": {
    "Databases": [
      {
        "Database": {
          "CreateTime": 0,
          "Description": "",
          "LocationUri": "oss://examplebuket/exampledb",
          "Name": "",
          "OwnerName": "",
          "OwnerType": "",
          "Parameters": {
            "key": ""
          },
          "Privileges": {
            "GroupPrivileges": {
              "key": [
                {
                  "CreateTime": 0,
                  "GrantOption": true,
                  "Grantor": "",
                  "GrantorType": "",
                  "Privilege": ""
                }
              ]
            },
            "RolePrivileges": {
              "key": [
                {
                  "CreateTime": 0,
                  "GrantOption": true,
                  "Grantor": "",
                  "GrantorType": "",
                  "Privilege": ""
                }
              ]
            },
            "UserPrivileges": {
              "key": [
                {
                  "CreateTime": 0,
                  "GrantOption": true,
                  "Grantor": "",
                  "GrantorType": "",
                  "Privilege": ""
                }
              ]
            }
          },
          "UpdateTime": 0,
          "CreatedBy": ""
        },
        "HighLightList": [
          {
            "Key": "name",
            "Value": "tab2"
          }
        ]
      }
    ],
    "TotalCount": 11000
  },
  "TableResult": {
    "Tables": [
      {
        "Table": {
          "Cascade": true,
          "CreateTime": 0,
          "CreatedBy": "",
          "DatabaseName": "",
          "LastAccessTime": 0,
          "LastAnalyzedTime": 0,
          "Owner": "",
          "OwnerType": "",
          "Parameters": {
            "key": ""
          },
          "PartitionKeys": [
            {
              "Comment": "",
              "Name": "",
              "Parameters": {
                "key": ""
              },
              "Type": ""
            }
          ],
          "Privileges": {},
          "Retention": 0,
          "RewriteEnabled": true,
          "Sd": {
            "BucketCols": [
              ""
            ],
            "Cols": [
              {
                "Comment": "",
                "Name": "",
                "Type": ""
              }
            ],
            "Compressed": true,
            "InputFormat": "",
            "Location": "",
            "NumBuckets": 0,
            "OutputFormat": "",
            "Parameters": {
              "key": ""
            },
            "SerDeInfo": {
              "Name": "",
              "SerializationLib": ""
            },
            "SkewedInfo": {
              "SkewedColNames": [
                ""
              ],
              "SkewedColValueLocationMaps": {
                "key": ""
              },
              "SkewedColValues": [
                [
                  ""
                ]
              ]
            },
            "SortCols": [
              {
                "Col": "",
                "Order": 0
              }
            ],
            "StoredAsSubDirectories": true
          },
          "TableName": "",
          "TableType": "",
          "Temporary": true,
          "UpdateTime": 0,
          "ViewExpandedText": "",
          "ViewOriginalText": "",
          "TableId": "59c6c8fefeaa46d8b599c1f790c59a19",
          "TableVersion": {
            "Table": {
              "Cascade": true,
              "CreateTime": 0,
              "CreatedBy": "",
              "DatabaseName": "",
              "LastAccessTime": 0,
              "LastAnalyzedTime": 0,
              "Owner": "",
              "OwnerType": "",
              "PartitionKeys": [
                {
                  "Comment": "",
                  "Name": "",
                  "Type": ""
                }
              ],
              "Privileges": {},
              "Retention": 0,
              "RewriteEnabled": true,
              "Sd": {
                "BucketCols": [
                  ""
                ],
                "Cols": [],
                "Compressed": true,
                "InputFormat": "",
                "Location": "",
                "NumBuckets": 0,
                "OutputFormat": "",
                "Parameters": {
                  "key": ""
                },
                "SerDeInfo": {
                  "Name": "",
                  "SerializationLib": ""
                },
                "SkewedInfo": {
                  "SkewedColNames": [
                    ""
                  ],
                  "SkewedColValueLocationMaps": {
                    "key": ""
                  },
                  "SkewedColValues": [
                    [
                      ""
                    ]
                  ]
                },
                "SortCols": [
                  {
                    "Col": "",
                    "Order": 0
                  }
                ],
                "StoredAsSubDirectories": true
              },
              "TableName": "",
              "TableType": "",
              "Temporary": true,
              "UpdateTime": 0,
              "ViewExpandedText": "",
              "ViewOriginalText": "",
              "TableId": "59c6c8fefeaa46d8b599c1f790c59a19",
              "TableVersion": {
                "Table": {
                  "Cascade": true,
                  "CreateTime": 0,
                  "CreatedBy": "",
                  "DatabaseName": "",
                  "LastAccessTime": 0,
                  "LastAnalyzedTime": 0,
                  "Owner": "",
                  "OwnerType": "",
                  "PartitionKeys": [],
                  "Retention": 0,
                  "RewriteEnabled": true,
                  "Sd": {
                    "BucketCols": [
                      ""
                    ],
                    "Cols": [],
                    "Compressed": true,
                    "InputFormat": "",
                    "Location": "",
                    "NumBuckets": 0,
                    "OutputFormat": "",
                    "Parameters": {
                      "key": ""
                    },
                    "SerDeInfo": {
                      "Name": "",
                      "SerializationLib": ""
                    },
                    "SkewedInfo": {
                      "SkewedColNames": [
                        ""
                      ],
                      "SkewedColValueLocationMaps": {
                        "key": ""
                      },
                      "SkewedColValues": [
                        [
                          ""
                        ]
                      ]
                    },
                    "SortCols": [
                      {
                        "Col": "",
                        "Order": 0
                      }
                    ],
                    "StoredAsSubDirectories": true
                  },
                  "TableName": "",
                  "TableType": "",
                  "Temporary": true,
                  "UpdateTime": 0,
                  "ViewExpandedText": "",
                  "ViewOriginalText": "",
                  "TableId": "59c6c8fefeaa46d8b599c1f790c59a19",
                  "TableVersion": {
                    "VersionId": 0
                  }
                },
                "VersionId": 0
              }
            },
            "VersionId": 0
          }
        },
        "HighLightList": [
          {
            "Key": "name",
            "Value": "tab2"
          }
        ]
      }
    ],
    "TotalCount": 1100
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/Search#workbench-doc-change-demo) for a complete list.
