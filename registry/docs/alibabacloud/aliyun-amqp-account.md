The ALIYUN::AMQP::Account type creates username and password for ApsaraMQ for RabbitMQ.

## Syntax

```
{
  "Type": "ALIYUN::AMQP::Account",
  "Properties": {
    "AccountAccessKey": String,
    "AccountAccessKeySecret": String,
    "InstanceId": String
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

AccountAccessKey

String

Yes

No

The AccessKey ID of your Alibaba Cloud account or Resource Access Management (RAM) user.

To obtain an AccessKey, see [Create an AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair).

**Note**

If you use a static username and password created from the AccessKey of a RAM user to connect to ApsaraMQ for RabbitMQ and manage messages, ensure the RAM user has the required permissions. For more information, see [Custom policies for ApsaraMQ for RabbitMQ](/help/en/apsaramq-for-rabbitmq/security-and-compliance/custom-permission-policy-reference-for-apsaramq-for-rabbitmq).

AccountAccessKeySecret

String

Yes

No

The AccessKey secret of your Alibaba Cloud account or RAM user.

None

InstanceId

String

Yes

No

The ID of the ApsaraMQ for RabbitMQ instance.

None

## Return values

Fn::GetAtt

-   UserName: The static username that is created.
    
-   AccountAccessKey: The AccessKey ID of your Alibaba Cloud account or RAM user.
    
-   CreateTimestamp: The UNIX timestamp that indicates when the static account was created.
    
-   Password: The static password that is created.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    Description:
      en: The ID of the ApsaraMQ for RabbitMQ instance for which to create a static username and password.
    Required: true
  AccountAccessKey:
    Type: String
    Description:
      en: |-
        The AccessKey ID of your Alibaba Cloud account or Resource Access Management (RAM) user. To obtain an AccessKey ID, go to the RAM console.
        If you use a static username and password created from the AccessKey of a RAM user to connect to ApsaraMQ for RabbitMQ and manage messages, ensure the RAM user has the required permissions. For more information, see RAM permission policies.
    Required: true
  AccountAccessKeySecret:
    Type: String
    Description:
      en: The AccessKey secret of your Alibaba Cloud account or RAM user.
    Required: true
Resources:
  Account:
    Type: ALIYUN::AMQP::Account
    Properties:
      InstanceId:
        Ref: InstanceId
      AccountAccessKey:
        Ref: AccountAccessKey
      AccountAccessKeySecret:
        Ref: AccountAccessKeySecret
Outputs:
  UserName:
    Description: The created username.
    Value:
      Fn::GetAtt:
        - Account
        - UserName
  AccountAccessKey:
    Description: The AccessKey ID used to create the username and password.
    Value:
      Fn::GetAtt:
        - Account
        - AccountAccessKey
  CreateTimestamp:
    Description: The UNIX timestamp when the account was created.
    Value:
      Fn::GetAtt:
        - Account
        - CreateTimestamp
  Password:
    Description: The created static password.
    Value:
      Fn::GetAtt:
        - Account
        - Password
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the ApsaraMQ for RabbitMQ instance for which to create a static username and password."
      },
      "Required": true
    },
    "AccountAccessKey": {
      "Type": "String",
      "Description": {
        "en": "The AccessKey ID of your Alibaba Cloud account or Resource Access Management (RAM) user. To obtain an AccessKey ID, go to the RAM console.\nIf you use a static username and password created from the AccessKey of a RAM user to connect to ApsaraMQ for RabbitMQ and manage messages, ensure the RAM user has the required permissions. For more information, see RAM permission policies."
      },
      "Required": true
    },
    "AccountAccessKeySecret": {
      "Type": "String",
      "Description": {
        "en": "The AccessKey secret of your Alibaba Cloud account or RAM user."
      },
      "Required": true
    }
  },
  "Resources": {
    "Account": {
      "Type": "ALIYUN::AMQP::Account",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "AccountAccessKey": {
          "Ref": "AccountAccessKey"
        },
        "AccountAccessKeySecret": {
          "Ref": "AccountAccessKeySecret"
        }
      }
    }
  },
  "Outputs": {
    "UserName": {
      "Description": "The created username.",
      "Value": {
        "Fn::GetAtt": [
          "Account",
          "UserName"
        ]
      }
    },
    "AccountAccessKey": {
      "Description": "The AccessKey ID used to create the username and password.",
      "Value": {
        "Fn::GetAtt": [
          "Account",
          "AccountAccessKey"
        ]
      }
    },
    "CreateTimestamp": {
      "Description": "The UNIX timestamp when the account was created.",
      "Value": {
        "Fn::GetAtt": [
          "Account",
          "CreateTimestamp"
        ]
      }
    },
    "Password": {
      "Description": "The created static password.",
      "Value": {
        "Fn::GetAtt": [
          "Account",
          "Password"
        ]
      }
    }
  }
}
                        
```
