ALIYUN::KAFKA::SaslUser is used to create a Simple Authentication and Security Layer (SASL) user.

## Syntax

```
{
  "Type": "ALIYUN::KAFKA::SaslUser",
  "Properties": {
    "InstanceId": String,
    "Password": String,
    "Username": String,
    "Mechanism": String,
    "Type": String
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

InstanceId

String

Yes

No

The instance ID.

None.

Password

String

Yes

No

The password.

None.

Username

String

Yes

No

The username.

None.

Mechanism

String

No

No

The encryption method.

Valid values:

-   SCRAM-SHA-512 (default)
    
-   SCRAM-SHA-256
    

**Note**

This property is available only for serverless ApsaraMQ for Kafka V3 instances.

Type

String

No

No

The type.

Valid values:

-   **plain**: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
    
-   **SCRAM**: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses SCRAM-SHA-256.
    
-   **LDAP**: a Lightweight Directory Access Protocol (LDAP) mechanism. This value is available only when you create SASL users of ApsaraMQ for Confluent instances.
    

Default value: **plain**.

## Return values

Fn::GetAtt

-   InstanceId: the instance ID.
    
-   Username: the username.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      Username:
        Type: String
        Description:
          en: The name of the SASL user.
        AllowedPattern: ^[a-zA-Z][a-zA-Z0-9_]{2,63}$
        Required: true
      InstanceId:
        Type: String
        Description:
          en: The instance ID.
        Required: true
        MinLength: 1
        MaxLength: 64
      Password:
        Type: String
        Description:
          en: The password of the SASL user.
        Required: true
    Resources:
      SaslUser:
        Type: ALIYUN::KAFKA::SaslUser
        Properties:
          Username:
            Ref: Username
          InstanceId:
            Ref: InstanceId
          Password:
            Ref: Password
    Outputs:
      InstanceId:
        Description: The instance ID.
        Value:
          Fn::GetAtt:
            - SaslUser
            - InstanceId
      Username:
        Description: The user name of the instance.
        Value:
          Fn::GetAtt:
            - SaslUser
            - Username
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "Username": {
          "Type": "String",
          "Description": {
            "en": "The name of the SASL user."
          },
          "AllowedPattern": "^[a-zA-Z][a-zA-Z0-9_]{2,63}$",
          "Required": true
        },
        "InstanceId": {
          "Type": "String",
          "Description": {
            "en": "The instance ID."
          },
          "Required": true,
          "MinLength": 1,
          "MaxLength": 64
        },
        "Password": {
          "Type": "String",
          "Description": {
            "en": "The password of the SASL user."
          },
          "Required": true
        }
      },
      "Resources": {
        "SaslUser": {
          "Type": "ALIYUN::KAFKA::SaslUser",
          "Properties": {
            "Username": {
              "Ref": "Username"
            },
            "InstanceId": {
              "Ref": "InstanceId"
            },
            "Password": {
              "Ref": "Password"
            }
          }
        }
      },
      "Outputs": {
        "InstanceId": {
          "Description": "The instance ID.",
          "Value": {
            "Fn::GetAtt": [
              "SaslUser",
              "InstanceId"
            ]
          }
        },
        "Username": {
          "Description": "The user name of the instance.",
          "Value": {
            "Fn::GetAtt": [
              "SaslUser",
              "Username"
            ]
          }
        }
      }
    }
                            
    ```
