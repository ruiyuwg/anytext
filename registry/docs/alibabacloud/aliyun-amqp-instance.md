ALIYUN::AMQP::Instance is used to create an ApsaraMQ for RabbitMQ instance.

## Syntax

```
{
  "Type": "ALIYUN::AMQP::Instance",
  "Properties": {
    "MaxTps": Number,
    "MaxEipTps": Number,
    "SupportEip": String,
    "Period": Number,
    "StorageSize": Number,
    "PayType": String,
    "QueueCapacity": Number,
    "TracingStorageTime": Number,
    "InstanceName": String,
    "OrderNum": Number,
    "SupportTracing": String,
    "InstanceType": String,
    "PeriodUnit": String
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

InstanceType

String

No

No

The instance edition.

Valid values:

-   professional: Professional Edition
    
-   enterprise: Enterprise Edition
    
-   vip: Enterprise Platinum Edition
    

MaxTps

Number

No

Yes

The peak transactions per second (TPS) for accessing the instance in a virtual private cloud (VPC).

Valid values:

-   1000
    
-   1500
    
-   2000
    
-   2500
    
-   3000
    
-   4000
    
-   5000
    
-   8000
    
-   10000
    
-   15000
    
-   20000
    
-   25000
    
-   30000
    
-   40000
    
-   50000
    
-   100000
    
-   200000
    
-   300000
    
-   500000
    
-   800000
    
-   1000000
    

QueueCapacity

Number

No

Yes

The maximum number of queues that can be created on the instance.

Valid values: 50 to 6000.

**Note**

The maximum number of queues that can be created on an instance must be an integer multiple of 50. If the value that you specify for this property is not an integer multiple of 50, the value is rounded up to the nearest integer multiple of 50 when the system creates the instance.

For example, if you set this property to 60, the value 100 is used.

StorageSize

Number

No

Yes

The size of the storage that is used to store messages.

Valid values:

-   Set the value to 200 if you create a Professional Edition or Enterprise Edition instance.
    
-   Set the value to m × 100 if you create an Enterprise Platinum Edition instance. m ranges from 7 to 28.
    

Unit: GB.

InstanceName

String

No

Yes

The instance name.

None.

MaxEipTps

Number

No

Yes

The peak TPS for accessing the instance over the Internet.

Valid values: 128 to 45000.

**Note**

The peak TPS for accessing the instance over the Internet must be an integer multiple of 128. If the value that you specify for this property is not an integer multiple of 128, the value is rounded up to the nearest integer multiple of 128 when the system creates the instance.

For example, if you set this property to 130, the value 256 is used.

OrderNum

Number

No

No

The number of instances that you want to create.

Valid values: 1 to 9999.

PayType

String

No

No

The billing method.

Set the value to Subscription.

Period

Number

No

No

The unit of the subscription duration.

Valid values:

-   1
    
-   2
    
-   3
    
-   6
    
-   12
    
-   24
    
-   36
    

Unit: month.

PeriodUnit

String

No

No

The auto-renewal cycle.

Valid values:

-   Month
    
-   Year
    

SupportEip

String

No

Yes

Specifies whether the instance can be accessed over the Internet.

Valid values:

-   True
    
-   False
    

SupportTracing

String

No

Yes

Specifies whether to enable the message trace feature.

Valid values:

-   True
    
-   False
    

TracingStorageTime

Number

No

Yes

The retention period for message traces.

Valid values:

-   3
    
-   5
    
-   7
    

Unit: day.

## Return values

Fn::GetAtt

InstanceId: the instance ID.

PrivateEndpoint: the VPC endpoint.

ClassicEndpoint: the classic endpoint.

PublicEndpoint: the public endpoint.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  MaxTps:
    Type: Number
    Description: |
      If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
      If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
      If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
    AllowedValues:
      - 1000
      - 1500
      - 2000
      - 2500
      - 3000
      - 4000
      - 5000
      - 8000
      - 10000
      - 15000
      - 20000
      - 25000
      - 30000
      - 40000
      - 50000
      - 100000
      - 200000
      - 300000
      - 500000
      - 800000
      - 1000000
  StorageSize:
    Type: Number
    Description: |-
      The storage size. It is valid when instance_type is vip.
      If instance type is professional or enterprise, the valid value is 200.
      If instance type is vip, the valid value is [700, 2800] with the step size 100
    MinValue: 200
    MaxValue: 2800
  QueueCapacity:
    Type: Number
    Description: |-
      The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
      If instance type is enterprise, the valid value is [200, 6000] with the step size 100
      If instance type is vip, the valid value is [200, 80000] with the step size 100
    MinValue: 50
    MaxValue: 80000
  InstanceType:
    Type: String
    Description: 'The Instance Type. Valid values: professional, enterprise, vip.'
    AllowedValues:
      - professional
      - enterprise
      - vip
Resources:
  Instance:
    Type: ALIYUN::AMQP::Instance
    Properties:
      MaxTps:
        Ref: MaxTps
      StorageSize:
        Ref: StorageSize
      QueueCapacity:
        Ref: QueueCapacity
      InstanceType:
        Ref: InstanceType
Outputs:
  InstanceId:
    Description: The ID of the instance.
    Value:
      Fn::GetAtt:
        - Instance
        - InstanceId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "MaxTps": {
      "Type": "Number",
      "Description": "If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].\nIf instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].\nIf instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].\n",
      "AllowedValues": [
        1000,
        1500,
        2000,
        2500,
        3000,
        4000,
        5000,
        8000,
        10000,
        15000,
        20000,
        25000,
        30000,
        40000,
        50000,
        100000,
        200000,
        300000,
        500000,
        800000,
        1000000
      ]
    },
    "StorageSize": {
      "Type": "Number",
      "Description": "The storage size. It is valid when instance_type is vip.\nIf instance type is professional or enterprise, the valid value is 200.\nIf instance type is vip, the valid value is [700, 2800] with the step size 100",
      "MinValue": 200,
      "MaxValue": 2800
    },
    "QueueCapacity": {
      "Type": "Number",
      "Description": "The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.\nIf instance type is enterprise, the valid value is [200, 6000] with the step size 100\nIf instance type is vip, the valid value is [200, 80000] with the step size 100",
      "MinValue": 50,
      "MaxValue": 80000
    },
    "InstanceType": {
      "Type": "String",
      "Description": "The Instance Type. Valid values: professional, enterprise, vip.",
      "AllowedValues": [
        "professional",
        "enterprise",
        "vip"
      ]
    }
  },
  "Resources": {
    "Instance": {
      "Type": "ALIYUN::AMQP::Instance",
      "Properties": {
        "MaxTps": {
          "Ref": "MaxTps"
        },
        "StorageSize": {
          "Ref": "StorageSize"
        },
        "QueueCapacity": {
          "Ref": "QueueCapacity"
        },
        "InstanceType": {
          "Ref": "InstanceType"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "The ID of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InstanceId"
        ]
      }
    }
  }
}
```
