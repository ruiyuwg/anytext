Queries all Group IDs in a specified instance.

## Operation description

**Important** Alibaba Cloud OpenAPI is a management API used to manage and query resources of Alibaba Cloud services. Integrate OpenAPI only into management data links. Do not rely on OpenAPI in core data links for sending and receiving messages because this can create threats to your data links.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ons/2019-02-14/OnsGroupList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ons/2019-02-14/OnsGroupList)

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

mq:ListGroup

list

Group

`acs:mq:{#regionId}:{#accountId}:{#InstanceId}`

None

-   mq:QueryInstanceBaseInfo

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

InstanceId

string

No

The ID of the instance to which the Group IDs belong.

MQ\_INST\_111111111111\_DOxxxxxx

GroupId

string

No

Specify a Group ID to perform a fuzzy query. If you leave this parameter empty, all Group IDs are queried.

If you enter GID\_ABC, a fuzzy query is performed by matching prefixes and suffixes. All Group IDs that contain \*GID\_ABC\* are returned, such as GID\_test\_GID\_ABC\_123 and GID\_ABC\_356.

GID\_test\_group\_id

GroupType

string

No

The protocol that the queried Group IDs support. Group IDs for the TCP protocol and the HTTP protocol cannot be shared. You must create them separately. Valid values:

-   **tcp**: This is the default value. It indicates that the Group ID applies only to sending and receiving messages over the TCP protocol.
    
-   **http**: Indicates that the Group ID applies only to sending and receiving messages over the HTTP protocol.
    

tcp

Tag

array<object>

No

The list of tags that are attached to the Group ID. The number of elements in the list cannot exceed 20.

object

No

Key

string

Yes

The tag key of the Group ID. Specify both **Key** and **Value**, or leave both empty. If both are specified, the system filters for matching Group IDs. If both are left empty, all Group IDs are queried.

-   If you specify this parameter, its value cannot be an empty string.
    
-   The value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
    

CartService

Value

string

Yes

The tag value of the Group ID. Specify both **Key** and **Value**, or leave both empty. If both are specified, the system filters for matching Group IDs. If both are left empty, all Group IDs are queried.

-   If you specify this parameter, its value can be an empty string.
    
-   The value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
    

ServiceA

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request. This is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.

16996623-AC4A-43AF-9248-FD9D2D75\*\*\*\*

Data

object

SubscribeInfoDo

array<object>

The set of subscription relationships that are returned.

array<object>

Owner

string

The owner of the publish information.

138015630679\*\*\*\*

UpdateTime

integer

The time when the Group ID was updated.

1570700979000

IndependentNaming

boolean

Indicates whether the instance has a namespace. Valid values:

-   **true**: The instance has an independent namespace. The resource name must be unique within the instance. The resource name can be the same across instances.
    
-   **false**: The instance does not have an independent namespace. The resource name must be globally unique within or across instances.
    

true

GroupId

string

The Group ID, which is the ID of the consumer group.

GID\_test\_group\_id

Remark

string

The remarks.

test

CreateTime

integer

The time when the Group ID was created.

1568896605000

Tags

object

Tag

array<object>

The tags that are attached to the Group ID.

object

Key

string

The tag key.

CartService

Value

string

The tag value.

ServiceA

InstanceId

string

The instance ID.

MQ\_INST\_111111111111\_DOxxxxxx

GroupType

string

The protocol that the queried Group IDs support. Group IDs for the TCP protocol and the HTTP protocol cannot be shared. You must create them separately. Valid values:

-   **tcp**: Indicates that the Group ID applies only to sending and receiving messages over the TCP protocol.
    
-   **http**: Indicates that the Group ID applies only to sending and receiving messages over the HTTP protocol.
    

tcp

## Examples

Success response

`JSON` format

```
{
  "RequestId": "16996623-AC4A-43AF-9248-FD9D2D75****",
  "Data": {
    "SubscribeInfoDo": [
      {
        "Owner": "138015630679****",
        "UpdateTime": 1570700979000,
        "IndependentNaming": true,
        "GroupId": "GID_test_group_id",
        "Remark": "test",
        "CreateTime": 1568896605000,
        "Tags": {
          "Tag": [
            {
              "Key": "CartService",
              "Value": "ServiceA"
            }
          ]
        },
        "InstanceId": "MQ_INST_111111111111_DOxxxxxx",
        "GroupType": "tcp"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ons/2019-02-14/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ons/2019-02-14/OnsGroupList#workbench-doc-change-demo) for a complete list.
