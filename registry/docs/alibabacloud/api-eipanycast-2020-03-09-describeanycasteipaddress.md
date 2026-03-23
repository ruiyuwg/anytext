Queries the details of a specified Anycast EIP instance, including its status, peak bandwidth, and associated cloud resources.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Eipanycast/2020-03-09/DescribeAnycastEipAddress)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Eipanycast/2020-03-09/DescribeAnycastEipAddress)

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

eipanycast:DescribeAnycastEipAddress

get

\*AnycastEipAddress

`acs:eipanycast:{#regionId}:{#accountId}:anycast/{#AnycastId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Ip

string

No

The IP address of the Anycast EIP instance.

**Note**

You must specify either **Ip** or **AnycastId**.

139.95.XX.XX

AnycastId

string

No

The ID of the Anycast EIP instance.

**Note**

You must specify either **Ip** or **AnycastId**.

aeip-bp1ix34fralt4ykf3\*\*\*\*

BindInstanceId

string

No

The ID of the cloud resource instance with which the Anycast EIP is associated.

lb-2zebb08phyczzawe\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The information that is returned.

Status

string

The status of the IP address.

-   **Associating**: The instance is being associated.
    
-   **Unassociating**: The instance is being disassociated.
    
-   **Allocated**: The instance is allocated.
    
-   **Associated**: The instance is associated.
    
-   **Modifying**: The instance is being modified.
    
-   **Releasing**: The instance is being released.
    
-   **Released**: The instance is released.
    

Associated

Description

string

The description of the Anycast EIP instance.

doctest

RequestId

string

The request ID.

4EC47282-1B74-4534-BD0E-403F3EE64CAF

InstanceChargeType

string

The billing method of the Anycast EIP instance.

The value is **PostPaid**, which indicates the pay-as-you-go billing method.

PostPaid

CreateTime

string

The time when the Anycast EIP instance was created.

The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.

2021-04-23T01:37:38Z

AnycastEipBindInfoList

array<object>

The list of cloud resources that are associated with the Anycast EIP instance.

array<object>

The list of cloud resources that are associated with the Anycast EIP instance.

BindInstanceType

string

The type of the associated cloud resource instance. Valid values:

-   **SlbInstance**: a Classic Load Balancer (CLB) instance in a virtual private cloud (VPC).
    
-   **NetworkInterface**: an elastic network interface (ENI).
    

SlbInstance

BindTime

string

The time when the cloud resource was associated.

The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.

2021-04-23T02:37:38Z

Status

string

The status of the associated cloud resource instance. Valid values:

-   **BINDING**: The cloud resource is being associated.
    
-   **BINDED**: The cloud resource is associated.
    
-   **UNBINDING**: The cloud resource is being disassociated.
    
-   **DELETED**: The cloud resource is deleted.
    
-   **MODIFYING**: The association is being modified.
    

BINDING

BindInstanceRegionId

string

The region ID of the associated cloud resource instance.

us-west-1

BindInstanceId

string

The ID of the associated cloud resource instance.

lb-2zebb08phyczzawe\*\*\*\*

PopLocations

array<object>

The information about the access points in the access areas that are connected to the associated cloud resource instance.

If you associate a cloud resource for the first time, the system returns the access points in all access areas.

object

The information about the access points in the access areas that are connected to the associated cloud resource instance.

If you associate a cloud resource for the first time, the system returns the access points in all access areas.

PopLocation

string

The information about the access points in the access areas that are connected to the associated cloud resource instance.

If you associate a cloud resource for the first time, the system returns the access points in all access areas.

us-west-1-pop

AssociationMode

string

The association mode. Valid values:

-   **Default**: The associated cloud resource instance is the default origin server.
    
-   **Normal**: The associated cloud resource instance is a normal origin server.
    

Default

PrivateIpAddress

string

The secondary private IP address of the associated ENI.

This parameter is returned only when **BindInstanceType** is set to **NetworkInterface**.

192.168.XX.XX

BusinessStatus

string

The service status of the Anycast EIP instance. Valid values:

-   **Normal**: The Anycast EIP is in a normal state.
    
-   **FinancialLocked**: The Anycast EIP is locked due to an overdue payment.
    
-   **RiskExpired**: The Anycast EIP is locked for security reasons.
    

Normal

InternetChargeType

string

The metering method of the Anycast EIP instance.

The value is **PayByTraffic**, which indicates the pay-by-data-transfer metering method.

PayByTraffic

Name

string

The name of the Anycast EIP instance.

docname

AnycastId

string

The ID of the Anycast EIP instance.

aeip-bp1ix34fralt4ykf3\*\*\*\*

ServiceLocation

string

The access area of the Anycast EIP instance.

The value is **international**, which indicates regions outside the Chinese mainland.

international

Bandwidth

integer

The peak bandwidth of the Anycast EIP instance. Unit: Mbit/s.

200

IpAddress

string

The IP address of the Anycast EIP instance.

139.95.XX.XX

Bid

string

The BID of the account that owns the Anycast EIP instance.

26842

AliUid

integer

The ID of the account that owns the Anycast EIP instance.

25346073170691\*\*\*\*

ResourceGroupId

string

The ID of the resource group to which the instance belongs.

rg-acfmzssisocarfy

Tags

array<object>

The tag information.

object

The tag information.

Key

string

The tag key.

FinanceDept

Value

string

The tag value.

FinanceJoshua

ServiceManaged

integer

Indicates whether the resource is created by a service account. 0: The resource is not created by a service account. 1: The resource is created by a service account.

1

## Examples

Success response

`JSON` format

```
{
  "Status": "Associated",
  "Description": "doctest",
  "RequestId": "4EC47282-1B74-4534-BD0E-403F3EE64CAF",
  "InstanceChargeType": "PostPaid",
  "CreateTime": "2021-04-23T01:37:38Z",
  "AnycastEipBindInfoList": [
    {
      "BindInstanceType": "SlbInstance",
      "BindTime": "2021-04-23T02:37:38Z",
      "Status": "BINDING",
      "BindInstanceRegionId": "us-west-1",
      "BindInstanceId": "lb-2zebb08phyczzawe****",
      "PopLocations": [
        {
          "PopLocation": "us-west-1-pop"
        }
      ],
      "AssociationMode": "Default",
      "PrivateIpAddress": "192.168.XX.XX"
    }
  ],
  "BusinessStatus": "Normal",
  "InternetChargeType": "PayByTraffic",
  "Name": "docname",
  "AnycastId": "aeip-bp1ix34fralt4ykf3****",
  "ServiceLocation": "international",
  "Bandwidth": 200,
  "IpAddress": "139.95.XX.XX",
  "Bid": "26842",
  "AliUid": 0,
  "ResourceGroupId": "rg-acfmzssisocarfy",
  "Tags": [
    {
      "Key": "FinanceDept",
      "Value": "FinanceJoshua"
    }
  ],
  "ServiceManaged": 1
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

200

MissingParam.ResourceIdentifier

Missing required parameter: Please provide at least one of AnycastId, IP, or BindInstanceId.

See [Error Codes](https://api.alibabacloud.com/document/Eipanycast/2020-03-09/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Eipanycast/2020-03-09/DescribeAnycastEipAddress#workbench-doc-change-demo) for a complete list.
