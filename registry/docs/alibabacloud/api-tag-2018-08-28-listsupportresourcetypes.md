Queries the resource types supported by tags and tag-related capability items.

## Operation description

### [](#call-example)[](#)Call example

-   Query a list of resource types supported by TagResources or UntagResources. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG&params=%7B%22RegionId%22:%22cn-hangzhou%22,%22SupportCode%22:%22TAG_CONSOLE_SUPPORT%22%7D) .
-   Query a list of resource types supported by ListTagResources or ListResourcesByTag. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG&params=%7B%22RegionId%22:%22cn-hangzhou%22%7D) .
-   Query a list of resource types that support createdby tags. For more information, see [Example](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes?tab=DEBUG&params=%7B%22RegionId%22:%22cn-hangzhou%22,%22SupportCode%22:%22CREATED_BY_TAG_CONSOLE_SUPPORT%22%7D) .

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/ListSupportResourceTypes)

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

tag:ListSupportResourceTypes

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

RegionId

string

No

The region ID.

For more information about region IDs, see [Endpoints](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-endpoint) .

cn-hangzhou

MaxResult

integer

No

The number of entries to return on each page.

Maximum value: 1000. Default value: 50.

50

NextToken

string

No

The token that is used to start the next query.

AAAAAYws9fJ0Ur4MGm/5OkDoW/Y3wDNwUdssyKODK\*\*\*\*

ProductCode

string

No

The service code. This parameter specifies a filter condition for the query.

This parameter is obtained from the response.

ecs

ResourceTye

string

No

The resource type. This parameter specifies a filter condition for the query.

This parameter is obtained from the response.

instance

ShowItems

boolean

No

Specifies whether to return tag-related capability items. Valid values:

-   true: The system returns tag-related capability items.
-   false (default value): The system does not return tag-related capability items.

false

SupportCode

string

No

The code of the tag-related capability item. This parameter specifies a filter condition for the query.

For more information, see **Tag-related capability items**.

TAG\_CONSOLE\_SUPPORT

### [](#tag-related-capability-items)Tag-related capability items

Code of a tag-related capability item

Description

TAG\_CONSOLE\_SUPPORT

Specifies whether a resource type is supported by the Resource Management console.

CLOUD\_RESOURCE\_CONSOLE\_SUPPORT

Specifies whether the console of a service supports tags.

TAG\_RAM\_SUPPORT

Specifies whether tags can be used to verify the permissions of users on resources of a specific type.

CLOUD\_RESOURCE\_API\_SUPPORT

Specifies whether the API operations that are used to query resources support tags.

TAG\_API\_SUPPORT

Specifies whether a service provides tag-related API operations.Tag-related API operations include TagResources, UntagResources, and ListTagResources.

TAG\_BILL\_SUPPORT

Specifies whether cost allocation by tag is supported.

CREATED\_BY\_TAG\_BILL\_SUPPORT

Specifies whether cost allocation based on createdby tags is supported.

CREATED\_BY\_TAG\_CONSOLE\_SUPPORT

Specifies whether the console of a service supports createdby tags.

TAG\_POLICY\_PREVENTATIVE\_CHECK\_SUPPORT

Specifies whether the pre-detection feature of tag policies is supported. This feature enables the system to check whether a tag complies with the rules defined in a tag policy when you add the tag to a resource. If the tag does not comply with the rules, the tag fails to be added to the resource.

TAG\_POLICY\_CHECK\_REMEDIATION\_SUPPORT

Specifies whether the post-detection and automatic remediation features of tag policies are supported.The post-detection feature enables the system to check whether the tags that are added to a resource comply with the rules defined in a tag policy. The automatic remediation feature enables the system to correct the tags that do not comply with the rules.

TAG\_POLICY\_RG\_TAG\_INHERIT\_SUPPORT

Specifies whether resource group-based tag inheritance defined in a tag policy is supported. If resource group-based tag inheritance is enabled in a tag policy, resources inherit tags from the resource groups to which they belong.

## Response parameters

Parameter

Type

Description

Example

object

The returned result.

SupportResourceTypes

array<object>

The supported resource types.

SupportResourceType

object

A supported resource type.

ProductCode

string

The service code.

ecs

ResourceType

string

The resource type.

instance

SupportItems

array<object>

The supported tag-related capability items.

**Note** This parameter is returned only if the `ShowItems` parameter is set to `true`.

SupportItems

object

The supported tag-related capability items.

SupportCode

string

The code of the tag-related capability item.

TAG\_CONSOLE\_SUPPORT

Support

boolean

Indicates whether the tag-related capability item is supported. Valid values:

-   true
-   false

true

SupportDetails

array<object>

The details of the support for the tag-related capability item.

SupportDetails

object

The details of the support for the tag-related capability item.

string

The code of the support. For more information, see **Codes of the support for tag-related capability items**.

ApiName

ArnTemplate

string

The resource ARN template.

acs:ecs:\*:\*:instance/${ResourceId}

RequestId

string

The ID of the request.

ABC71772-F3A1-59CA-B811-4A5B0E0B72F8

NextToken

string

Indicates whether the next query is required.

-   If the value of this parameter is empty, all results are returned, and the next query is not required.
-   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.

AAAAAYws9fJ0Ur4MGm\*\*\*\*

### [](#codes-of-the-support-for-tag-related-capability-items)Codes of the support for tag-related capability items

Code

Description

ApiName

The name of the API operation supported by a tag-related capability item.

SupportEnforcedForTags

Indicates whether the API operation supports the strong verification feature for pre-event interception.

## Examples

Sample success responses

`JSON`format

```
{
  "SupportResourceTypes": [
    {
      "ProductCode": "ecs",
      "ResourceType": "instance",
      "SupportItems": [
        {
          "SupportCode": "TAG_CONSOLE_SUPPORT",
          "Support": true,
          "SupportDetails": [
            {
              "key": "ApiName"
            }
          ]
        }
      ],
      "ArnTemplate": "acs:ecs:*:*:instance/${ResourceId}"
    }
  ],
  "RequestId": "ABC71772-F3A1-59CA-B811-4A5B0E0B72F8",
  "NextToken": "AAAAAYws9fJ0Ur4MGm****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

InvalidParameter.SupportCode

SupportCode parameter is illegal.

SupportCode parameter is illegal.

404

Missing.Data

The data that you want to operate does not exist.

The data that you want to operate does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-04-25

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/Tag/2018-08-28/ListSupportResourceTypes?updateTime=2024-04-25#workbench-doc-change-demo)

2023-07-19

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Tag/2018-08-28/ListSupportResourceTypes?updateTime=2023-07-19#workbench-doc-change-demo)

2022-06-20

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Tag/2018-08-28/ListSupportResourceTypes?updateTime=2022-06-20#workbench-doc-change-demo)

2022-06-20

Add Operation

[View Change Details](https://api.alibabacloud.com/document/Tag/2018-08-28/ListSupportResourceTypes?updateTime=2022-06-20#workbench-doc-change-demo)
