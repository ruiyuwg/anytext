DATASOURCE::ALB::LoadBalancers is used to query the basic information about created Application Load Balancer (ALB) instances.

## Syntax

```
{
  "Type": "DATASOURCE::ALB::LoadBalancers",
  "Properties": {
    "LoadBalancerNames": List,
    "LoadBalancerBussinessStatus": String,
    "ZoneId": String,
    "ResourceGroupId": String,
    "VpcIds": List,
    "LoadBalancerIds": List,
    "PayType": String,
    "AddressType": String,
    "LoadBalancerStatus": String,
    "Tags": List,
    "RefreshOptions": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

LoadBalancerNames

List

No

Yes

The names of the ALB instances that you want to query.

You can specify up to 10 names. Each name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter.

LoadBalancerBussinessStatus

String

No

Yes

The business status of the ALB instance.

Valid values:

-   Abnormal
    
-   Normal
    

ZoneId

String

No

Yes

The ID of the zone in which the ALB instance resides.

You can call the [DescribeRegions](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-describeregions) operation to query information about the zone that is specified by ZoneId.

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

VpcIds

List

No

Yes

The IDs of the virtual private clouds (VPCs) in which the ALB instances reside.

You can specify up to 10 IDs.

LoadBalancerIds

List

No

Yes

The IDs of the ALB instances.

You can specify up to 20 IDs.

PayType

String

No

Yes

The billing method of the ALB instance.

Valid values:

-   PostPay (default): pay-as-you-go
    
-   PrePay: subscription
    

AddressType

String

No

Yes

The address type of the ALB instance.

Valid values:

-   Internet: The ALB instance uses a public IP address. The domain name of the instance is resolved to the public IP address. Therefore, the instance can be accessed over the Internet.
    
-   Intranet: The ALB instance uses a private IP address. The domain name of the instance is resolved to the private IP address. Therefore, the instance can be accessed only over the VPC of the instance.
    

LoadBalancerStatus

String

No

Yes

The status of the ALB instance.

Valid values:

-   Inactive: The ALB instance is stopped. The listener does not forward traffic.
    
-   Active: The ALB instance is running.
    
-   Provisioning: The ALB instance is being created.
    
-   Configuring: The configurations of the ALB instance are being changed.
    
-   CreateFailed: The ALB instance fails to be created. In this case, you are not charged, and the instance must be deleted. By default, the system deletes the ALB instances that remain in the CreateFailed state in the most recent day.
    

Tags

List

No

Yes

The tags of the ALB instance.

You can specify up to 20 tags. For more information, see [Tags properties](#section-wo3-krd-syw).

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Value

String

No

No

The tag value.

You can specify up to 20 tag values. The tag value can be an empty string. The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Key

String

Yes

No

The tag key.

You can specify up to 20 tag keys. The tag key cannot be an empty string. The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`

## Return values

Fn::GetAtt

-   LoadBalancerIds: the IDs of the ALB instances.
    
-   LoadBalancers: details of the ALB instances.
    

**Property**

**Type**

**Description**

**Constraint**

LoadBalancerIds

List

The IDs of the ALB instances.

None.

LoadBalancers

List

Details of the ALB instances.

None.

AddressAllocatedMode

String

The mode in which an IP address is allocated.

Valid values:

-   Fixed: static IP mode. In this mode, a static IP address is allocated.
    
-   Dynamic: dynamic IP mode. In this mode, an IP address is dynamically allocated to each zone.
    

AddressType

String

The address type of the ALB instance.

Valid values:

-   Internet: The ALB instance uses a public IP address. The domain name of the instance is resolved to the public IP address. Therefore, the instance can be accessed over the Internet.
    
-   Intranet: The ALB instance uses a private IP address. The domain name of the instance is resolved to the private IP address. Therefore, the instance can be accessed only over the VPC of the instance.
    

BandwidthPackageId

String

The ID of the Internet Shared Bandwidth instance that is associated with the Internet-facing ALB instance.

None.

CreateTime

String

The time when the ALB instance was created.

None.

DNSName

String

The domain name of the ALB instance.

None.

LoadBalancerBussinessStatus

String

The business status of the ALB instance.

Valid values:

-   Abnormal
    
-   Normal
    

LoadBalancerEdition

String

The edition of the ALB instance.

The features and billing policies for an ALB instance vary based on the edition of the instance. Valid values:

-   Standard: Standard Edition
    
-   Basic: Basic Edition
    
-   StandardWithWaf: WAF-enabled Edition
    

LoadBalancerId

String

The ID of the ALB instance.

None.

LoadBalancerName

String

The name of the ALB instance.

None.

LoadBalancerStatus

String

The status of the ALB instance.

Valid values:

-   Inactive: The ALB instance is stopped. The listener does not forward traffic.
    
-   Active: The ALB instance is running.
    
-   Provisioning: The ALB instance is being created.
    
-   Configuring: The configurations of the ALB instance are being changed.
    
-   CreateFailed: The ALB instance failed to be created. In this case, you are not charged, and the instance must be deleted. By default, the system deletes the ALB instances that remain in the CreateFailed state in the most recent day.
    

ResourceGroupId

String

The ID of the resource group.

None.

VpcId

String

The ID of the VPC in which the ALB instance resides.

None.

AddressIpVersion

String

The protocol version.

Valid values:

-   IPv4
    
-   DualStack
    

Ipv6AddressType

String

The type of the IPv6 address that is used by the ALB instance.

Valid values:

-   Internet: The ALB instance uses a public IP address. The domain name of the instance is resolved to the public IP address. Therefore, the instance can be accessed over the Internet.
    
-   Intranet: The ALB instance uses a private IP address. The domain name of the instance is resolved to the private IP address. Therefore, the instance can be accessed only over the VPC of the instance.
    

Tags

List

The tags.

Example:

```
[ {
      "Key" : "KeyTest",
      "Value" : "alueTest"
    } ]
```

LogProject

String

The project of Simple Log Service (SLS).

None.

LogStore

String

The Logstore.

None.

PayType

String

The billing method of the ALB instance.

Valid values:

-   PostPay: pay-as-you-go
    
-   PrePay: subscription
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters: {}
    Resources:
      ExtensionDataSource:
        Type: DATASOURCE::ALB::LoadBalancers
        Properties:
          LoadBalancerBussinessStatus: Normal
    Outputs:
      LoadBalancerIds:
        Description: The list of load balancer IDs.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - LoadBalancerIds
      LoadBalancers:
        Description: The list of load balancers.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - LoadBalancers
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
      },
      "Resources": {
        "ExtensionDataSource": {
          "Type": "DATASOURCE::ALB::LoadBalancers",
          "Properties": {
            "LoadBalancerBussinessStatus": "Normal"
          }
        }
      },
      "Outputs": {
        "LoadBalancerIds": {
          "Description": "The list of load balancer IDs.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "LoadBalancerIds"
            ]
          }
        },
        "LoadBalancers": {
          "Description": "The list of load balancers.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "LoadBalancers"
            ]
          }
        }
      }
    }
    ```
