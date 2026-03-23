ALIYUN::ROCKETMQ::Instance is used to create a Standard Edition instance.

## Syntax

```
{
  "Type": "ALIYUN::ROCKETMQ::Instance",
  "Properties": {
    "Remark": String,
    "InstanceName": String,
    "Tags": List,
    "DeletionForce": Boolean
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

Remark

String

No

Yes

The description.

The description can be up to 128 characters in length.

InstanceName

String

Yes

Yes

The instance name.

The name must be 3 to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (\_).

Tags

List

No

Yes

The tags.

You can add up to 20 tags.

For more information, see [Tags properties](#section-gor-asi-f84).

DeletionForce

Boolean

No

Yes

Specifies whether to forcefully delete the instance.

None.

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
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

Key

String

Yes

No

The tag key.

The tag key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Value

String

No

No

The tag value.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   InstanceId: the instance ID.
    
-   InstanceType: the edition of the instance. A value of 1 indicates Standard Edition.
    
-   HttpInternetEndpoint: the public HTTP endpoint.
    
-   HttpInternetSecureEndpoint: the public HTTPS endpoint.
    
-   TcpEndpoint: the TCP endpoint.
    
-   HttpInternalEndpoint: the private HTTP endpoint.
    
-   InstanceName: the instance name.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  Instance:
    Type: ALIYUN::ROCKETMQ::Instance
    Properties:
      InstanceName: TestRocketMQ
Outputs:
  InstanceName:
    Description: Instance name
    Value:
      Fn::GetAtt:
        - Instance
        - InstanceName
  HttpInternalEndpoint:
    Description: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
    Value:
      Fn::GetAtt:
        - Instance
        - HttpInternalEndpoint
  InstanceId:
    Description: Instance ID created
    Value:
      Fn::GetAtt:
        - Instance
        - InstanceId
  TcpEndpoint:
    Description: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
    Value:
      Fn::GetAtt:
        - Instance
        - TcpEndpoint
  HttpInternetEndpoint:
    Description: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
    Value:
      Fn::GetAtt:
        - Instance
        - HttpInternetEndpoint
  InstanceType:
    Description: Instance Type
    Value:
      Fn::GetAtt:
        - Instance
        - InstanceType
  HttpInternetSecureEndpoint:
    Description: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
    Value:
      Fn::GetAtt:
        - Instance
        - HttpInternetSecureEndpoint
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "Instance": {
      "Type": "ALIYUN::ROCKETMQ::Instance",
      "Properties": {
        "InstanceName": "TestRocketMQ"
      }
    }
  },
  "Outputs": {
    "InstanceName": {
      "Description": "Instance name",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InstanceName"
        ]
      }
    },
    "HttpInternalEndpoint": {
      "Description": "The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "HttpInternalEndpoint"
        ]
      }
    },
    "InstanceId": {
      "Description": "Instance ID created",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InstanceId"
        ]
      }
    },
    "TcpEndpoint": {
      "Description": "The TCP endpoint for the Message Queue for Apache RocketMQ instance.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "TcpEndpoint"
        ]
      }
    },
    "HttpInternetEndpoint": {
      "Description": "The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "HttpInternetEndpoint"
        ]
      }
    },
    "InstanceType": {
      "Description": "Instance Type",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InstanceType"
        ]
      }
    },
    "HttpInternetSecureEndpoint": {
      "Description": "The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "HttpInternetSecureEndpoint"
        ]
      }
    }
  }
}
```
