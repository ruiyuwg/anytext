Binds tags to ApsaraDB for MongoDB instances.

## Operation description

If you have a large number of instances, you can create multiple tags, bind the tags to the instances, and filter the instances by tag.

-   A tag consists of a key and a value. Each key must be unique in a region for an Alibaba Cloud account. Different keys can be mapped to the same value.
    
-   If the tag that you specify does not exist, this tag is automatically created and bound to the specified instance.
    
-   If a tag that has the same key is already bound to the instance, the new tag overwrites the existing tag.
    
-   You can bind up to 20 tags to each instance.
    
-   You can bind tags to up to 50 instances each time you call the operation.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/TagResources)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/TagResources)

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

dds:TagResources

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

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmyiu4ekp\*\*\*\*

ResourceId

array

Yes

The details of the tags bound to the instance.

dds-bpxxxxxxxx

string

No

The ID of instance.

N specifies the serial number of the instance. The following example shows how to calculate consumption intervals:

-   **ResourceId.1** indicates the ID of the first instance.
    
-   **ResourceId.2** indicates the ID of the second instance.
    

dds-bp1fa5efaa93\*\*\*\*

Tag

array<object>

Yes

The tags that are attached to the resources.

object

No

The details of the tags bound to the instance.

Key

string

Yes

The key of tag.

N specifies the serial number of the tag. The following example shows how to calculate consumption intervals:

-   **Tag.1.Key** specifies the key of the first tag.
    
-   **Tag.2.Key** specifies the key of the second tag.
    

开发组

Value

string

Yes

The value of tag.

N specifies the serial number of the tag. The following example shows how to calculate consumption intervals:

-   **Tag.1.Value** specifies the value of the first tag.
    
-   **Tag.2.Value** specifies the value of the second tag.
    

4.0环境

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The information of parameters that is returned.

RequestId

string

The request ID.

0FDDC511-7252-4A4A-ADDA-5CB1BF63\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "0FDDC511-7252-4A4A-ADDA-5CB1BF63****"
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

NumberExceed.CustomTags

The Custom Tags parameter's number is exceed. Valid 20.

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

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/TagResources#workbench-doc-change-demo) for a complete list.
