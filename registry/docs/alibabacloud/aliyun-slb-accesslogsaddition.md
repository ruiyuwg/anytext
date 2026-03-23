ALIYUN::SLB::AccessLogsAddition is used to configure an access log forwarding rule for a Classic Load Balancer (CLB) instance.

## Syntax

```
{
  "Type": "ALIYUN::SLB::AccessLogsAddition",
  "Properties": {
    "LogStore": String,
    "LoadBalancerId": String,
    "LogProject": String
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

LogStore

String

Yes

No

The name of the Logstore in Simple Log Service (SLS).

None.

LoadBalancerId

String

Yes

No

The ID of the CLB instance.

None.

LogProject

String

Yes

No

The name of the project in SLS.

None.

## Return values

Fn::GetAtt

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  LogStore:
    Type: String
    Description:
      en: The log store name.
    Required: true
  LoadBalancerId:
    Type: String
    Description:
      en: The load balancer id. Only SLB Layer 7 load balancing (HTTP/HTTPS listening) supports the access log function. Prerequisites 1. A SLB instance has been created. For details, see Creating and Managing CLB Instances. 2. A virtual server group has been created. Backend servers have been added to the server group. 3. HTTP or HTTPS listening has been configured for CLB. 4. You have enabled the log service. For details, see Activating the Log Service.
    Required: true
  LogProject:
    Type: String
    Description:
      en: The log project name.
    Required: true
Resources:
  AccessLogsAddition:
    Type: ALIYUN::SLB::AccessLogsAddition
    Properties:
      LogStore:
        Ref: LogStore
      LoadBalancerId:
        Ref: LoadBalancerId
      LogProject:
        Ref: LogProject
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "LogStore": {
      "Type": "String",
      "Description": {
        "en": "The log store name."
      },
      "Required": true
    },
    "LoadBalancerId": {
      "Type": "String",
      "Description": {
        "en": "The load balancer id. Only SLB Layer 7 load balancing (HTTP/HTTPS listening) supports the access log function. Prerequisites 1. A SLB instance has been created. For details, see Creating and Managing CLB Instances. 2. A virtual server group has been created. Backend servers have been added to the server group. 3. HTTP or HTTPS listening has been configured for CLB. 4. You have enabled the log service. For details, see Activating the Log Service."
      },
      "Required": true
    },
    "LogProject": {
      "Type": "String",
      "Description": {
        "en": "The log project name."
      },
      "Required": true
    }
  },
  "Resources": {
    "AccessLogsAddition": {
      "Type": "ALIYUN::SLB::AccessLogsAddition",
      "Properties": {
        "LogStore": {
          "Ref": "LogStore"
        },
        "LoadBalancerId": {
          "Ref": "LoadBalancerId"
        },
        "LogProject": {
          "Ref": "LogProject"
        }
      }
    }
  }
}
                        
```
