DATASOURCE::ESS::ScalingConfigurations is used to query the information about scaling configurations.

## Syntax

```
{
  "Type": "DATASOURCE::ESS::ScalingConfigurations",
  "Properties": {
    "ScalingGroupId": String,
    "ScalingConfigurationIds": List,
    "ScalingConfigurationNames": List,
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

ScalingGroupId

String

No

Yes

The ID of the scaling group.

None.

ScalingConfigurationIds

List

No

Yes

The IDs of the scaling configurations.

You can differentiate between active and inactive scaling configurations based on the return value of LifecycleState.

**Note**

You can query up to 10 scaling configuration IDs in a request.

ScalingConfigurationNames

List

No

Yes

The names of the scaling configurations.

For the names of inactive scaling configurations, the system does not display the names in the query result or report an error.

**Note**

You can query up to 10 scaling configuration names in a request.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   ScalingConfigurationIds: the IDs of the scaling configurations.
    
-   ScalingConfigurations: details of the scaling configurations.
    

**Property**

**Type**

**Description**

**Constraint**

ScalingConfigurationIds

List

The IDs of the scaling configurations.

None.

ScalingConfigurations

List

Details of the scaling configurations.

None.

ScalingConfigurationName

String

The name of the scaling configuration.

None.

LoadBalancerWeight

Number

The weight of the Elastic Compute Service (ECS) instance that is used as a backend server.

Valid values: 1 to 100.

IoOptimized

String

Indicates whether the instance is I/O optimized.

Valid values:

-   none: The instance is not I/O optimized.
    
-   optimized: The instance is I/O optimized.
    

ResourceGroupId

String

The ID of the resource group to which the ECS instance belongs.

None.

DataDisks

List

Details of the data disk.

Example: `{ "Size": 200, "Category": "cloud", "SnapshotId": "s-280s7****", "Device": "/dev/xvdb" }`.

SystemDiskSize

Number

The size of the system disk.

None.

ScalingGroupId

String

The ID of the scaling group to which the scaling configurations belong.

None.

SecurityGroupId

String

The ID of the security group to which the ECS instance belongs.

ECS instances in the same security group can access each other.

LifecycleState

String

The status of the scaling configuration in the scaling group.

Valid values:

-   Active: The scaling configuration is active in the scaling group. Auto Scaling uses the active scaling configuration to automatically create ECS instances.
    
-   Inactive: The scaling configuration is inactive in the scaling group.
    

SecurityGroupIds

List

The IDs of the security groups to which the ECS instances belong.

ECS instances in the same security group can access each other. Example of security group IDs: `["sg-bp18kz60mefs****", "sg-shankjdauw1****"]`.

SystemDiskCategory

String

The category of the system disk.

Valid values:

-   cloud: basic disk
    
-   cloud\_efficiency: ultra disk
    
-   cloud\_ssd: standard SSD
    
-   ephemeral\_ssd: local SSD
    
-   cloud\_essd: Enterprise SSD (ESSD)
    

InternetChargeType

String

The metering method for network usage.

Valid values:

-   PayByBandwidth: pay-by-bandwidth.
    
    You are charged for the fixed bandwidth that is specified by InternetMaxBandwidthOut.
    
-   PayByTraffic: pay-by-data-transfer.
    
    You are charged for the actual traffic that you use. InternetMaxBandwidthOut specifies only the maximum outbound public bandwidth.
    

InstanceName

String

The name of the ECS instance.

None.

InternetMaxBandwidthOut

Number

The maximum outbound public bandwidth.

Unit: Mbit/s.

-   Valid values when InternetChargeType is set to PayByBandwidth: 0 to 100.
    
    If you leave InternetMaxBandwidthOut empty, the outbound bandwidth is set to 0 Mbit/s.
    
-   Valid values when InternetChargeType is set to PayByTraffic: 0 to 100.
    
    If you leave InternetMaxBandwidthOut empty, an error is reported.
    

InternetMaxBandwidthIn

Number

The maximum inbound public bandwidth.

Unit: Mbit/s. Valid values: 1 to 200.

SystemDiskCategories

List

The categories of the system disks.

The priorities of values decrease based on a configured order. The first value has the highest priority. Valid values:

-   cloud: basic disk
    
-   cloud\_efficiency: ultra disk
    
-   cloud\_ssd: standard SSD
    
-   cloud\_essd: ESSD
    

**Note**

If Auto Scaling cannot create system disks of the category that has the highest priority, Auto Scaling automatically creates system disks of the category that has the next highest priority.

CreationTime

String

The time when the scaling configuration was created.

None.

ImageId

String

The image ID.

Auto Scaling uses the image to automatically create instances.

SystemDiskEncrypted

Boolean

Indicates whether the system disk is encrypted.

Valid values:

-   true
    
-   false (default)
    

InstanceGeneration

String

The generation of the ECS instance.

None.

InstanceTypes

List

The ECS instance types.

Example: `[ "ecs.g6.large", "ecs.g5.large"]`.

InstanceType

String

The ECS instance type.

None.

ScalingConfigurationId

String

The ID of the scaling configuration.

None.

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ScalingGroupId": {
      "Type": "String",
      "Description": "The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ESS::ScalingConfigurations",
      "Properties": {
        "ScalingGroupId": {
          "Ref": "ScalingGroupId"
        }
      }
    }
  },
  "Outputs": {
    "ScalingConfigurationIds": {
      "Description": "The list of scaling configuration IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScalingConfigurationIds"
        ]
      }
    },
    "ScalingConfigurations": {
      "Description": "The list of scaling configurations.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScalingConfigurations"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ScalingGroupId:
    Type: String
    Description: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ESS::ScalingConfigurations
    Properties:
      ScalingGroupId:
        Ref: ScalingGroupId
Outputs:
  ScalingConfigurationIds:
    Description: The list of scaling configuration IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScalingConfigurationIds
  ScalingConfigurations:
    Description: The list of scaling configurations.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScalingConfigurations
                    
```
