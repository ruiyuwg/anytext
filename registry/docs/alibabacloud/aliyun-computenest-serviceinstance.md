The ALIYUN::ComputeNest::ServiceInstance type is used to create and deploy a service instance.

## Syntax

```
{
  "Type": "ALIYUN::ComputeNest::ServiceInstance",
  "Properties": {
    "SpecificationCode": String,
    "Parameters": Map,
    "ResourceGroupId": String,
    "OperationName": String,
    "EnableInstanceOps": Boolean,
    "Service": Map,
    "PredefinedParameterName": String,
    "Commodity": Map,
    "EnableUserPrometheus": Boolean,
    "TemplateName": String,
    "ContactGroup": String,
    "Tags": List,
    "ServiceInstanceName": String,
    "ResourceAutoPay": Boolean,
    "DryRun": Boolean
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Service

Map

Yes

No

The details of the service.

For more information, see [Service properties](#3e5efcdf14srt)

Commodity

Map

No

No

The order information for a purchase from Alibaba Cloud Marketplace. This parameter is not required if the service is not available in the Alibaba Cloud Marketplace or uses the pay-as-you-go billing method.

For more information, see [Commodity properties](#3e5f23f5149lh)

ContactGroup

String

No

No

The Cloud Monitor contact group that receives alerts.

None

EnableInstanceOps

Boolean

No

No

Specifies whether to enable the O&M feature for the service instance.

Valid values:

-   true: The O&M feature is enabled for the service instance.
    
-   false: The O&M feature is not enabled for the service instance.
    

EnableUserPrometheus

Boolean

No

Yes

Specifies whether to enable Prometheus monitoring.

Valid values:

-   true: Prometheus monitoring is enabled.
    
-   false: Prometheus monitoring is disabled.
    

OperationName

String

No

No

The name of the action.

None

Parameters

Map

No

Yes

The parameters for deploying the service instance.

Example:

```
{"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}
```

PredefinedParameterName

String

No

Yes

The name of the package.

None

ResourceGroupId

String

No

Yes

The ID of the resource group.

None

SpecificationCode

String

No

No

The commodity code.

None

Tags

List

No

No

The custom tags.

```
{'Length': {'Max': 20}}
```

TemplateName

String

No

No

The name of the template.

You must specify this parameter when the service supports multiple templates.

ServiceInstanceName

String

No

No

The name of the service instance.

None

ResourceAutoPay

Boolean

No

No

Specifies whether to enable automatic payment for the resource.

Valid values:

-   **true**: Automatic payment is enabled.
    
-   **false**: Automatic payment is disabled.
    

DryRun

Boolean

No

No

Specifies whether to perform a dry run for the creation request.

The dry run checks permissions and the instance status. Valid values:

-   **true**: sends the request but does not create the service instance.
    
-   **false**: sends the request and creates the service instance after the check is passed.
    

## Service syntax

```
"Service": {
  "ServiceInfos": List,
  "ServiceDocUrl": String,
  "DeployType": String,
  "ServiceProductUrl": String,
  "ServiceType": String,
  "SupplierUrl": String,
  "Status": String,
  "SupplierName": String,
  "PublishTime": String,
  "UpgradableServiceVersions": List,
  "DeployMetadata": String,
  "VersionName": String,
  "UpgradeMetadata": String,
  "Version": String,
  "ServiceId": String
}
```

## Service properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

ServiceInfos

List

No

No

The information about the service.

For more information, see [ServiceInfos properties](#0f27b21ce266o).

ServiceDocUrl

String

No

No

The URL of the product document.

None

DeployType

String

No

No

The deployment type.

Valid values:

-   ros: The service is deployed using ROS.
    
-   terraform: The service is deployed using Terraform.
    
-   ack: The service is deployed using ACK.
    
-   spi: The service is deployed by invoking an SPI.
    
-   operation: The service is an Alibaba Cloud Managed Service.
    

Version

String

No

No

The version of the service provider.

None

ServiceId

String

Yes

No

The service ID.

None

ServiceProductUrl

String

No

No

The URL of the product page.

None

ServiceType

String

No

No

The service type.

Valid values:

-   private: The service is deployed in the user's account.
    
-   managed: The service is deployed in the service provider's account.
    
-   operation: The service is an Alibaba Cloud Managed Service.
    

SupplierUrl

String

No

No

The URL of the service provider.

None

Status

String

No

No

The deployment status of the service instance.

Valid values:

-   Created: The service instance is created.
    
-   Deploying: The service instance is being deployed.
    
-   DeployedFailed: The service instance failed to be deployed.
    
-   Deployed: The service instance is deployed.
    
-   Upgrading: The service instance is being upgraded.
    
-   Deleting: The service instance is being deleted.
    
-   Deleted.
    
-   DeletedFailed: The service instance failed to be deleted.
    

SupplierName

String

No

No

The name of the service provider.

None

PublishTime

String

No

No

The time when the service was published.

None

UpgradableServiceVersions

List

No

No

The list of service versions to which the service can be upgraded.

None

DeployMetadata

String

No

No

The information about the deployment configuration of the service.

None

VersionName

String

No

No

The custom version name defined by the service provider.

None

UpgradeMetadata

String

No

No

The upgrade metadata.

None

## ServiceInfos syntax

```
"ServiceInfos": [
  {
    "Image": String,
    "Locale": String,
    "Name": String,
    "ShortDescription": String
  }
]
```

## ServiceInfos properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Image

String

No

No

The URL of the service icon.

None

Locale

String

No

No

The language of the service instance.

None

Name

String

No

No

The name of the service.

None

ShortDescription

String

No

No

The description of the service.

None

## Commodity syntax

```
"Commodity": {
  "PayPeriod": Integer,
  "PayPeriodUnit": String,
  "AutoRenew": Boolean,
  "CouponId": String,
  "AutoPay": Boolean
}
```

## Commodity properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

PayPeriod

Integer

No

No

The subscription duration.

None

PayPeriodUnit

String

No

No

The unit of the subscription duration.

Valid values:

-   Year
    
-   Month
    
-   Day
    

AutoRenew

Boolean

No

No

Specifies whether to enable auto-renewal.

Valid values:

-   **true**: Auto-renewal is enabled.
    
-   **false**: Auto-renewal is disabled.
    

CouponId

String

No

No

The coupon ID.

None

AutoPay

Boolean

No

No

Specifies whether to enable automatic payment for the order.

Valid values:

-   **true**: Automatic payment is enabled.
    
-   **false**: Automatic payment is disabled.
    

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

**Update allowed**

**Description**

**Constraints**

Key

String

Yes

No

The key of the tag.

The tag key must be 1 to 128 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

Value

String

No

No

The value of the tag.

The tag value must be 0 to 128 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

Progress: The deployment progress of the service instance.

Parameters: The deployment parameters for the service instance.

ResourceGroupId: The ID of the resource group.

EnableInstanceOps: Indicates whether the Operations and Maintenance (O&M) feature is enabled for the service instance.

CreateTime: The time when the service instance was created.

NetworkConfig: The network configuration.

Service: The details of the service.

PredefinedParameterName: The name of the package.

Source: The source of the service instance.

Components: The billable items from Alibaba Cloud Marketplace.

LicenseEndTime: The time when the license expires.

ServiceInstanceId: The ID of the service instance.

UserId: The user's Alibaba Cloud account ID.

EnableUserPrometheus: Indicates whether Prometheus monitoring is enabled.

ServiceType: The type of the service.

StatusDetail: The details of the instance deployment status.

UpdateTime: The time of the last update.

Outputs: The fields returned when a service instance is created.

TemplateName: The name of the template.

IsOperated: Indicates whether the O&M feature is enabled for the service instance.

SupplierUid: The service provider's Alibaba Cloud account ID.

Tags: The custom tags.

Output: The output fields returned after the service instance is created.

ServiceInstanceName: The name of the service instance.

MarketInstanceId: The ID of the Alibaba Cloud Marketplace instance.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Parameters:
    Type: Json
    Description: The parameters for deploying the service instance.
    Default:
      NodeCount: 3
      SystemDiskSize: 40
      InstancePassword: '******'
  Service:
    Type: Json
    Description: The details of the service.
    Default:
      Version: 1
      ServiceId: service-9c8a3522528b4fe8****
Resources:
  ExtensionResource:
    Type: ALIYUN::ComputeNest::ServiceInstance
    Properties:
      Parameters:
        Ref: Parameters
      Service:
        Ref: Service
Outputs:
  Progress:
    Description: The deployment progress of the service instance. Unit: %.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Progress
  Parameters:
    Description: The parameters for deploying the service instance.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Parameters
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Parameters": {
      "Type": "Json",
      "Description": "The parameters for deploying the service instance.",
      "Default": {
        "NodeCount": 3,
        "SystemDiskSize": 40,
        "InstancePassword": "******"
      }
    },
    "Service": {
      "Type": "Json",
      "Description": "The details of the service.",
      "Default": {
        "Version": 1,
        "ServiceId": "service-9c8a3522528b4fe8****"
      }
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ComputeNest::ServiceInstance",
      "Properties": {
        "Parameters": {
          "Ref": "Parameters"
        },
        "Service": {
          "Ref": "Service"
        }
      }
    }
  },
  "Outputs": {
    "Progress": {
      "Description": "The deployment progress of the service instance. Unit: %.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Progress"
        ]
      }
    },
    "Parameters": {
      "Description": "The parameters for deploying the service instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Parameters"
        ]
      }
    }
  }
}
```
