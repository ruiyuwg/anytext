ALIYUN::REDIS::Connection is used to apply for a public endpoint for an ApsaraDB for Redis instance.

## Syntax

```
{
  "Type": "ALIYUN::REDIS::Connection",
  "Properties": {
    "ConnectionType": String,
    "InstanceId": String,
    "Port": Integer,
    "ConnectionStringPrefix": String
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

ConnectionType

String

Yes

No

The connection mode of the instance.

Valid values:

-   Public
    
-   Direct
    

InstanceId

String

Yes

No

The instance ID.

None.

Port

Integer

Yes

Yes

The port number of the instance.

Valid values: 1024 to 65535.

ConnectionStringPrefix

String

Yes

No

The prefix of the public endpoint.

The prefix must be to 8 to 40 characters in length, and can contain lowercase letters and digits. The prefix must start with a lowercase letter.

**Note**

A public endpoint is in the following format: `<Prefix>.redis.rds.aliyuncs.com`.

## Return values

Fn::GetAtt

ConnectionString: the public endpoint of the instance.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      InstanceId:
        Type: String
        Description: Instance ID (globally unique)
    Resources:
      Connection:
        Type: ALIYUN::REDIS::Connection
        Properties:
          ConnectionType: Public
          InstanceId:
            Ref: InstanceId
          Port: 1743
          ConnectionStringPrefix: demo
    Outputs:
      ConnectionString:
        Description: The allocated connection string.
        Value:
          Fn::GetAtt:
            - Connection
            - ConnectionString
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "InstanceId": {
          "Type": "String",
          "Description": "Instance ID (globally unique)"
        }
      },
      "Resources": {
        "Connection": {
          "Type": "ALIYUN::REDIS::Connection",
          "Properties": {
            "ConnectionType": "Public",
            "InstanceId": {
              "Ref": "InstanceId"
            },
            "Port": 1743,
            "ConnectionStringPrefix": "demo"
          }
        }
      },
      "Outputs": {
        "ConnectionString": {
          "Description": "The allocated connection string.",
          "Value": {
            "Fn::GetAtt": [
              "Connection",
              "ConnectionString"
            ]
          }
        }
      }
    }
    ```
