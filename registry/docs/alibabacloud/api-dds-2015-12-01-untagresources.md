Removes a tag if the tag is not added to another instance.

## Operation description

**Note**

-   You can remove up to 20 tags at a time.
    
-   If you remove a tag from all instances, the tag is automatically deleted.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/UntagResources)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/UntagResources)

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

dds:UntagResources

update

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeDBInstanceAttribute](/help/en/mongodb/api-describedbinstanceattribute) operation to query the region ID of the instance.

cn-hangzhou

ResourceType

string

Yes

The resource type. Set the value to **INSTANCE**.

INSTANCE

All

boolean

No

Specifies whether to remove all tags from the instances. Valid values:

-   **true**: removes all tags from the instances.
    
-   **false**: does not remove all tags from the instances.
    

**Note**

-   Default value: **false**.
    
-   If you specify the **TagKey** parameter together with this parameter, this parameter does not take effect.
    

false

ResourceGroupId

string

No

The ID of the resource group.

sg-bpxxxxxxxxxxxxxxxxxx

ResourceId

array

Yes

The resource IDs.

dds-bpxxxxxxxx

string

No

The ID of the resource.

dds-bpxxxxxxxx

TagKey

array

No

The tag keys of the resource.

开发组

string

No

The key of the tag.

PRODUCT

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

FA3A7F36-DB57-4281-8935-4B9DF61554EB

## Examples

Success response

`JSON` format

```
{
  "RequestId": "FA3A7F36-DB57-4281-8935-4B9DF61554EB"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidTagKey.Malformed

The specified parameter 'Tag.n.Key' or 'TagKey.n' is not valid.

400

InvalidTagValue.Malformed

The specified parameter 'Tag.n.Value' is not valid.

400

InvalidParameter.ResourceId

The specified parameter 'ResourceId.n' is not valid.

400

MissParameter.TagOrResourceId

The parameter 'Tag.n'' or 'ResourceId.n' is needed.

400

InvalidParameter.Scope

The specified parameter 'Scope' is not valid.

400

NumberExceed.ResourceIds

The ResourceIds parameter's number is exceed.

400

NumberExceed.Tags

The Tags parameter's number is exceed.

400

Duplicate.TagKey

The specified parameter 'Tag.n.Key' is duplicated.

400

InvalidParameter.ResourceType

The specified parameter 'ResourceType' is not valid.

404

InvalidDbInstanceId.NotFound

Specified instance does not exist.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/UntagResources#workbench-doc-change-demo) for a complete list.
