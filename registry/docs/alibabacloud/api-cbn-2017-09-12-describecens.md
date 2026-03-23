You can call the DescribeCens operation to query information about Cloud Enterprise Network (CEN) instances that belong to your Alibaba Cloud account. This information includes the status of the instances, whether IPv6 is enabled, and a list of attached bandwidth plans.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeCens)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeCens)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:DescribeCens

get

\*CenInstance

`acs:cen:*:{#accountId}:ceninstance/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

PageNumber

integer

No

The page number. Default value: **1**.

1

PageSize

integer

No

The number of entries to return on each page. Valid values: **1** to **50**. Default value: **10**.

10

ResourceGroupId

string

No

The ID of the resource group to which the CEN instance belongs.

rg-acfm3unpnuw\*\*\*\*

Filter

array<object>

No

The filter conditions.

You can specify up to five filter conditions.

object

No

Key

string

No

The filter key. Valid values:

-   **CenId**: The ID of the CEN instance.
    
-   **Name**: The name of the CEN instance.
    

The logical relationship among multiple filter conditions is **AND**. All filter conditions must be met.

You can specify up to five filter conditions.

CenId

Value

array

No

The filter value.

Specify the filter value based on the **Key**. You can specify multiple values for a key. The logical relationship among the values is **OR**. A resource is a match if it meets any of the specified values.

You can specify up to five filter values for a filter condition.

cen-0xyeagctz5sfg9\*\*\*\*

string

No

The filter value.

Specify the filter value by **Key**. A single **Key** can have multiple filter values. The relationship between multiple values is a logical **OR**, which means that an item is considered a match for the filter condition if it matches any of the specified values.

Each filter condition supports a maximum of 5 filter values.

cen-44m0p68spvlrqq\*\*\*\*

Tag

array<object>

No

The tags.

You can specify up to 20 tags.

object

No

Key

string

No

The tag key of the resource.

The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

You can specify up to 20 tag keys.

tagtest

Value

string

No

The tag value of the resource.

The tag value can be an empty string or a string of up to 128 characters. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

Each tag key must have a corresponding tag value. You can specify up to 20 tag values.

tagtest

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response parameters.

PageSize

integer

The number of entries returned per page.

10

RequestId

string

The request ID.

2BFA6822-240E-4E27-B4C8-AA400EF7474D

PageNumber

integer

The page number of the returned page.

1

TotalCount

integer

The total number of entries returned.

1

Cens

object

Cen

array<object>

A list of CEN instances.

object

The information about the CEN instance.

Status

string

The status of the CEN instance.

-   **Creating**: The instance is being created.
    
-   **Active**: The instance is running.
    
-   **Deleting**: The instance is being deleted.
    

Active

CreationTime

string

The time when the CEN instance was created.

The time is displayed in the `YYYY-MM-DDThh:mmZ` format. It is expressed in Coordinated Universal Time (UTC).

2019-10-22T07:44Z

Ipv6Level

string

Indicates whether IPv6 is enabled for the CEN instance.

-   **ENABLE**: IPv6 is enabled.
    
-   **DISABLED**: IPv6 is disabled.
    

DISABLED

Description

string

The description of the CEN instance.

desctest

ResourceGroupId

string

The ID of the resource group to which the CEN instance belongs.

rg-acfm3unpnuw\*\*\*\*

CenId

string

The ID of the CEN instance.

cen-0xyeagctz5sfg9\*\*\*\*

ProtectionLevel

string

The level of CIDR block overlap.

**REDUCED**: CIDR blocks can overlap but cannot be the same.

REDUCED

Name

string

The name of the CEN instance.

nametest

Tags

object

Tag

array<object>

A list of tags attached to the CEN instance.

object

The information about the tag attached to the CEN instance.

Key

string

The tag key.

tagtest

Value

string

The tag value.

tagtest

CenBandwidthPackageIds

object

CenBandwidthPackageId

array

A list of bandwidth plans that are attached to the CEN instance.

string

The ID of the bandwidth plan.

cenbwp-4c2zaavbvh5f42\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "PageSize": 10,
  "RequestId": "2BFA6822-240E-4E27-B4C8-AA400EF7474D",
  "PageNumber": 1,
  "TotalCount": 1,
  "Cens": {
    "Cen": [
      {
        "Status": "Active",
        "CreationTime": "2019-10-22T07:44Z",
        "Ipv6Level": "DISABLED",
        "Description": "desctest",
        "ResourceGroupId": "rg-acfm3unpnuw****",
        "CenId": "cen-0xyeagctz5sfg9****",
        "ProtectionLevel": "REDUCED",
        "Name": "nametest",
        "Tags": {
          "Tag": [
            {
              "Key": "tagtest",
              "Value": "tagtest"
            }
          ]
        },
        "CenBandwidthPackageIds": {
          "CenBandwidthPackageId": [
            "cenbwp-4c2zaavbvh5f42****"
          ]
        }
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidTagKey

The tag keys are not valid.

The error message returned because the specified tag key is invalid.

400

InvalidTagValue

The tag values are not valid.

The error message returned because the specified tag value is invalid.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DescribeCens#workbench-doc-change-demo) for a complete list.
