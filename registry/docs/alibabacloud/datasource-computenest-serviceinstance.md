DATASOURCE::ComputeNest::ServiceInstance type is used to query the information about a service instance.

## Syntax

```
{
  "Type": "DATASOURCE::ComputeNest::ServiceInstance",
  "Properties": {
    "ServiceInstanceId": String,
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

ServiceInstanceId

String

Yes

Yes

The ID of the service instance.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   Progress: the deployment progress of the service instance. Unit: %.
    
-   Parameters: the parameters that are configured for the service.
    
-   ResourceGroupId: the ID of the resource group.
    
-   EnableInstanceOps: indicates whether the service instance supports the hosted O&M feature.
    
-   ServiceInstanceName: the name of the service instance.
    
-   CreateTime: the creation time.
    
-   NetworkConfig: the network configurations.
    
-   Service: the information about the service.
    
-   PredefinedParameterName: the name of the plan.
    
-   Source: the source of the service instance.
    
-   Components: the product components.
    
-   LicenseEndTime: the expiration time of the license.
    
-   ServiceInstanceId: the ID of the service instance.
    
-   UserId: the Alibaba Cloud account ID of the customer.
    
-   EnableUserPrometheus: indicates whether the Prometheus monitoring feature is enabled.
    
-   ServiceType: the category of the service.
    
-   StatusDetail: details of the deployment status of the service instance.
    
-   UpdateTime: the update time.
    
-   Outputs: the outputs that are returned after the service instance is created.
    
-   TemplateName: the name of the template.
    
-   IsOperated: indicates whether the hosted O&M feature is enabled for the service instance.
    
-   SupplierUid: the Alibaba Cloud account ID of the service provider.
    
-   MarketInstanceId: the ID of the service instance in Alibaba Cloud Marketplace.
    
-   Tags: the custom tags that are added by the customer.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ServiceInstanceId:
    Type: String
    Description:
      en: The ID of the service instance.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ComputeNest::ServiceInstance
    Properties:
      ServiceInstanceId:
        Ref: ServiceInstanceId
Outputs:
  Progress:
    Description: 'The deployment progress of the service instance. Unit: percentage.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Progress
  Parameters:
    Description: The parameters configured for the service instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Parameters
  ResourceGroupId:
    Description: The resource group ID.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroupId
  EnableInstanceOps:
    Description: Indicates whether the service instance supports the operation feature.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - EnableInstanceOps
  ServiceInstanceName:
    Description: The name of the resource.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ServiceInstanceName
  CreateTime:
    Description: The time when the serviceInstance was created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  NetworkConfig:
    Description: The network configurations.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - NetworkConfig
  Service:
    Description: The information about the service to which the service instance belongs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Service
  PredefinedParameterName:
    Description: The name of the package .
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - PredefinedParameterName
  Source:
    Description: The source of the service instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Source
  Components:
    Description: Cloud Marketplace additional billing items.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Components
  LicenseEndTime:
    Description: The expiration time of licence.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LicenseEndTime
  ServiceInstanceId:
    Description: The ID of the service instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ServiceInstanceId
  UserId:
    Description: The AliUid of the user.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - UserId
  EnableUserPrometheus:
    Description: Whether to enable Prometheus monitoring.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - EnableUserPrometheus
  ServiceType:
    Description: The type of the service.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ServiceType
  StatusDetail:
    Description: The description of the deployment state of the service instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - StatusDetail
  UpdateTime:
    Description: The time when the serviceInstance was last updated.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - UpdateTime
  Outputs:
    Description: The outputs returned from creating the service instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Outputs
  TemplateName:
    Description: The name of the template.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TemplateName
  IsOperated:
    Description: Indicates whether the hosted O&M feature is enabled for the service instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - IsOperated
  SupplierUid:
    Description: The Alibaba Cloud account ID of the service provider.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SupplierUid
  MarketInstanceId:
    Description: The ID of the cloud marketplace instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MarketInstanceId
  Tags:
    Description: The tags of the service instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Tags
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ServiceInstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the service instance."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ComputeNest::ServiceInstance",
      "Properties": {
        "ServiceInstanceId": {
          "Ref": "ServiceInstanceId"
        }
      }
    }
  },
  "Outputs": {
    "Progress": {
      "Description": "The deployment progress of the service instance. Unit: percentage.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Progress"
        ]
      }
    },
    "Parameters": {
      "Description": "The parameters configured for the service instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Parameters"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The resource group ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "EnableInstanceOps": {
      "Description": "Indicates whether the service instance supports the operation feature.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EnableInstanceOps"
        ]
      }
    },
    "ServiceInstanceName": {
      "Description": "The name of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ServiceInstanceName"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the serviceInstance was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "NetworkConfig": {
      "Description": "The network configurations.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "NetworkConfig"
        ]
      }
    },
    "Service": {
      "Description": "The information about the service to which the service instance belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Service"
        ]
      }
    },
    "PredefinedParameterName": {
      "Description": "The name of the package .",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PredefinedParameterName"
        ]
      }
    },
    "Source": {
      "Description": "The source of the service instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Source"
        ]
      }
    },
    "Components": {
      "Description": "Cloud Marketplace additional billing items.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Components"
        ]
      }
    },
    "LicenseEndTime": {
      "Description": "The expiration time of licence.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LicenseEndTime"
        ]
      }
    },
    "ServiceInstanceId": {
      "Description": "The ID of the service instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ServiceInstanceId"
        ]
      }
    },
    "UserId": {
      "Description": "The AliUid of the user.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "UserId"
        ]
      }
    },
    "EnableUserPrometheus": {
      "Description": "Whether to enable Prometheus monitoring.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EnableUserPrometheus"
        ]
      }
    },
    "ServiceType": {
      "Description": "The type of the service.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ServiceType"
        ]
      }
    },
    "StatusDetail": {
      "Description": "The description of the deployment state of the service instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StatusDetail"
        ]
      }
    },
    "UpdateTime": {
      "Description": "The time when the serviceInstance was last updated.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "UpdateTime"
        ]
      }
    },
    "Outputs": {
      "Description": "The outputs returned from creating the service instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Outputs"
        ]
      }
    },
    "TemplateName": {
      "Description": "The name of the template.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TemplateName"
        ]
      }
    },
    "IsOperated": {
      "Description": "Indicates whether the hosted O&M feature is enabled for the service instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "IsOperated"
        ]
      }
    },
    "SupplierUid": {
      "Description": "The Alibaba Cloud account ID of the service provider.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SupplierUid"
        ]
      }
    },
    "MarketInstanceId": {
      "Description": "The ID of the cloud marketplace instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MarketInstanceId"
        ]
      }
    },
    "Tags": {
      "Description": "The tags of the service instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    }
  }
}
                        
```
