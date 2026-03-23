ALIYUN::VPC::EIPPro is used to create an elastic IP address (EIP).

## Syntax

```
{
  "Type": "ALIYUN::VPC::EIPPro",
  "Properties": {
    "Description": String,
    "ResourceGroupId": String,
    "InstanceId": String,
    "InstanceChargeType": String,
    "PricingCycle": String,
    "ISP": String,
    "Period": Number,
    "DeletionProtection": Boolean,
    "AutoPay": Boolean,
    "Name": String,
    "InternetChargeType": String,
    "Netmode": String,
    "Bandwidth": Number,
    "IpAddress": String,
    "Tags": List,
    "SecurityProtectionTypes": List,
    "PublicIpAddressPoolId": String
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

Description

String

No

Yes

The description of the EIP.

The description must start with a letter but cannot start with `http://` or `https://`.

ResourceGroupId

String

No

Yes

The ID of the resource group to which the EIP belongs.

None

InstanceId

String

No

No

The ID of the EIP.

You must specify one of the IpAddress and InstanceId properties. If you leave both properties empty, the system randomly allocates an EIP.

InstanceChargeType

String

No

No

The billing method of the EIP.

Valid values:

-   Prepaid: subscription.
    
-   Postpaid (default): pay-as-you-go
    

PricingCycle

String

No

No

The billing cycle of the subscription EIP.

You must specify this property if InstanceChargeType is set to Prepaid.

Valid values:

-   Month (default)
    
-   Year
    

ISP

String

No

No

The line type of the EIP.

Valid values:

-   BGP: BGP (Multi-ISP). This type of line is supported in all regions.
    
-   BGP\_PRO: BGP (Multi-ISP) Pro. This type of line is supported only in the China (Hong Kong) region.
    
-   BGP\_FinanceCloud: This type of line is supported only in the China East 1 Finance region.
    

**Note**

If your Alibaba Cloud account is added to the whitelist for single-ISP bandwidth, you can set this property to ChinaTelecom, ChinaUnicom, or ChinaMobile.

Period

Number

No

No

The subscription period.

You must specify this property if InstanceChargeType is set to Prepaid.

-   Valid values if PricingCycle is set to Month: 1 to 9.
    
-   Valid values if PricingCycle is set to Year: 1 to 3.
    

DeletionProtection

Boolean

No

Yes

Specifies whether to enable deletion protection.

Valid values:

-   true
    
-   false (default)
    

AutoPay

Boolean

No

No

Specifies whether to enable automatic payment.

You must specify this property if InstanceChargeType is set to Prepaid.

Valid values:

-   false: disables automatic payment.
    
    After an order is generated, you must manually complete the payment in the [order center](https://usercenter2-intl.console.alibabacloud.com/order).
    
-   true (default): enables automatic payment.
    

Name

String

No

Yes

The name of the EIP.

The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.

InternetChargeType

String

No

No

The metering method of the EIP.

Valid values:

-   PayByBandwidth (default): pay-by-bandwidth
    
-   PayByTraffic: pay-by-data-transfer.
    

Netmode

String

No

No

The network type of the EIP.

Set the value to public. A value of public specifies that data is transferred over the Internet.

Bandwidth

Number

No

Yes

The bandwidth of the EIP.

Default value: 5. Unit: Mbit/s.

IpAddress

String

No

No

The IP address of the EIP.

You must specify one of the IpAddress and InstanceId properties. If you leave both properties empty, the system randomly allocates an EIP.

Tags

List

No

Yes

The tags.

You can specify up to 20 tags.

For more information, see [Tags properties](#section-2wl-0hp-o39).

SecurityProtectionTypes

List

No

No

The editions of Anti-DDoS.

Valid values:

-   Null: If you set this property to Null, Anti-DDoS Origin is used by default.
    
-   AntiDDoS\_Enhanced: If you set this property to AntiDDoS\_Enhanced, Anti-DDoS Pro or Premium is used.
    

**Note**

You can specify up to 10 editions of Anti-DDoS.

PublicIpAddressPoolId

String

No

No

The ID of the IP address pool.

EIPs are allocated from the specified IP address pool. The IP address pool feature is available only to users whose accounts are granted the required permissions for trial use. To use the feature, [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//smartservice.console.alibabacloud.com/%23).

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

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Key

String

Yes

No

The tag key.

The tag key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   ISP: the line type.
    
-   AllocationId: the EIP ID.
    
-   EipAddress: the EIP.
    
-   OrderId: the order ID of the subscription EIP.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      Description:
        Type: String
        Description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
        Default: test
      InstanceId:
        Type: String
        Description: The ID of the requested EIP.
        Default: eip-25877c70gddh****
      Name:
        Type: String
        Description: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
        Default: test
      Bandwidth:
        Type: Number
        Description: Bandwidth for the output network. Default is 5MB.
        Default: 5
    Resources:
      ElasticIpPro:
        Type: ALIYUN::VPC::EIPPro
        Properties:
          Description:
            Ref: Description
          InstanceId:
            Ref: InstanceId
          Name:
            Ref: Name
          Bandwidth:
            Ref: Bandwidth
    Outputs:
      ISP:
        Description: The line type.
        Value:
          Fn::GetAtt:
            - ElasticIpPro
            - ISP
      AllocationId:
        Description: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
        Value:
          Fn::GetAtt:
            - ElasticIpPro
            - AllocationId
      EipAddress:
        Description: IP address of created EIP.
        Value:
          Fn::GetAtt:
            - ElasticIpPro
            - EipAddress
      OrderId:
        Description: Order ID of prepaid EIP instance.
        Value:
          Fn::GetAtt:
            - ElasticIpPro
            - OrderId
                        
    ```
    

-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "Description": {
          "Type": "String",
          "Description": "Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.",
          "Default": "test"
        },
        "InstanceId": {
          "Type": "String",
          "Description": "The ID of the requested EIP.",
          "Default": "eip-25877c70gddh****"
        },
        "Name": {
          "Type": "String",
          "Description": "The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://",
          "Default": "test"
        },
        "Bandwidth": {
          "Type": "Number",
          "Description": "Bandwidth for the output network. Default is 5MB.",
          "Default": 5
        }
      },
      "Resources": {
        "ElasticIpPro": {
          "Type": "ALIYUN::VPC::EIPPro",
          "Properties": {
            "Description": {
              "Ref": "Description"
            },
            "InstanceId": {
              "Ref": "InstanceId"
            },
            "Name": {
              "Ref": "Name"
            },
            "Bandwidth": {
              "Ref": "Bandwidth"
            }
          }
        }
      },
      "Outputs": {
        "ISP": {
          "Description": "The line type.",
          "Value": {
            "Fn::GetAtt": [
              "ElasticIpPro",
              "ISP"
            ]
          }
        },
        "AllocationId": {
          "Description": "ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.",
          "Value": {
            "Fn::GetAtt": [
              "ElasticIpPro",
              "AllocationId"
            ]
          }
        },
        "EipAddress": {
          "Description": "IP address of created EIP.",
          "Value": {
            "Fn::GetAtt": [
              "ElasticIpPro",
              "EipAddress"
            ]
          }
        },
        "OrderId": {
          "Description": "Order ID of prepaid EIP instance.",
          "Value": {
            "Fn::GetAtt": [
              "ElasticIpPro",
              "OrderId"
            ]
          }
        }
      }
    }
    ```
