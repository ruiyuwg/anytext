Queries a list of filters.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListFilters)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListFilters)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

resourcecenter:ListFilters

list

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

The current API does not require request parameters

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

AA39FB9C-CB74-5E73-8DFE-3A2B096F0759

Filters

array<object>

The configurations of the filter.

Filter

object

FilterName

string

The name of the filter.

My devices

FilterConfiguration

string

The configurations of the filter.

{ "regions": \[\], "tagFilters": \[ \[{ "type": "notContainTagKey", "tagKey": "xxx", "tagValue": "" }\], \[{ "tagKey": "xxx", "tagValue": "xxx" }\] \], "resourceTypes": \[ "ACS::ECS::AutoSnapshotPolicy" \] }

DefaultFilterName

string

The name of the default filter.

My Filters

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "AA39FB9C-CB74-5E73-8DFE-3A2B096F0759",
  "Filters": [
    {
      "FilterName": "My devices",
      "FilterConfiguration": {
        "regions": [],
        "tagFilters": [
          [
            {
              "type": "notContainTagKey",
              "tagKey": "xxx",
              "tagValue": ""
            }
          ],
          [
            {
              "tagKey": "xxx",
              "tagValue": "xxx"
            }
          ]
        ],
        "resourceTypes": [
          "ACS::ECS::AutoSnapshotPolicy"
        ]
      }
    }
  ],
  "DefaultFilterName": "My Filters"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
