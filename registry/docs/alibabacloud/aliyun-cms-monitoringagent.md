ALIYUN::CMS::MonitoringAgent is used to install the CloudMonitor agent on Alibaba Cloud hosts.

## Syntax

```
{
  "Type": "ALIYUN::CMS::MonitoringAgent",
  "Properties": {
    "Force": Boolean,
    "InstallCommand": String,
    "InstanceIds": List
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

Force

Boolean

No

No

Specifies whether to forcefully install the CloudMonitor agent.

Valid values:

-   true (default)
    
-   false
    

InstallCommand

String

No

No

Specifies whether to install the CloudMonitor agent on all Alibaba Cloud hosts that belong to the current Alibaba Cloud account.

Valid values:

-   `onlyInstallNotHasAgent`: only installs the CloudMonitor agent of the latest version on Alibaba Cloud hosts on which the agent is not installed.
    
-   `onlyUpgradeAgent`: only upgrades the CloudMonitor agent to the latest version for Alibaba Cloud hosts on which the agent of an earlier version is installed.
    
-   `installAndUpgrade`: installs the CloudMonitor agent of the latest version on Alibaba Cloud hosts on which the agent is not installed, and upgrades the CloudMonitor agent to the latest version for Alibaba Cloud hosts on which the agent of an earlier version is installed.
    

InstanceIds

List

No

No

The IDs of the Alibaba Cloud hosts.

You can specify up to 10 IDs.

**Note**

You must specify `InstallCommand` or `InstanceIds`.

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Force:
    Description:
      en: 'Specifies whether to install the CloudMonitor agent. Valid values:

        true (default value): yes

        false: no'
    Required: false
    Type: Boolean
  InstanceIds:
    Description:
      en: 'Alibaba Cloud host ID.
        The range of n: 1 ~ 10.
        Explain that InstallCommand and InstanceIds must be selected one by one.'
    MaxLength: 10
    MinLength: 1
    Required: false
    Type: Json
Resources:
  MonitoringAgent:
    Properties:
      Force:
        Ref: Force
      InstanceIds:
        Ref: InstanceIds
    Type: ALIYUN::CMS::MonitoringAgent
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Force": {
      "Type": "Boolean",
      "Description": {
        "en": "Specifies whether to install the CloudMonitor agent. Valid values:\ntrue (default value): yes\nfalse: no"
      },
      "Required": false
    },
    "InstanceIds": {
      "Type": "Json",
      "Description": {
        "en": "Alibaba Cloud host ID.\nThe range of n: 1 ~ 10.\nExplain that InstallCommand and InstanceIds must be selected one by one."
      },
      "Required": false,
      "MinLength": 1,
      "MaxLength": 10
    }
  },
  "Resources": {
    "MonitoringAgent": {
      "Type": "ALIYUN::CMS::MonitoringAgent",
      "Properties": {
        "Force": {
          "Ref": "Force"
        },
        "InstanceIds": {
          "Ref": "InstanceIds"
        }
      }
    }
  }
}
                        
```
