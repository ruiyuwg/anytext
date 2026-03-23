ALIYUN::CMS::SiteMonitor is used to create a site monitoring task.

## Syntax

```
{
  "Type": "ALIYUN::CMS::SiteMonitor",
  "Properties": {
    "Address": String,
    "OptionsJson": String,
    "TaskName": String,
    "TaskType": String,
    "IspCities": List,
    "Interval": Integer,
    "AlertIds": List
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

Address

String

Yes

Yes

The URL or IP address that you want to monitor.

None.

TaskName

String

Yes

Yes

The name of the site monitoring task.

The name must be 4 to 100 characters in length, and can contain letters, digits, and underscores (\_).

TaskType

String

Yes

No

The type of the site monitoring task.

Valid values:

-   HTTP(S)
    
-   PING
    
-   TCP
    
-   UDP
    
-   DNS
    
-   SMTP
    
-   POP3
    
-   FTP
    

AlertIds

List

No

No

The IDs of the alert rules.

You can call the [DescribeMetricRuleList](/help/en/cms/cloudmonitor-1-0/api-describemetricrulelist#doc-api-Cms-DescribeMetricRuleList) operation to query the IDs of existing alert rules in CloudMonitor.

Interval

Integer

No

Yes

The monitoring frequency.

Valid values:

-   1 (default)
    
-   5
    
-   15
    

Unit: minutes.

IspCities

List

No

Yes

The information about the detection points.

If you leave this property empty, the system randomly selects three detection points.

For more information, see [IspCities properties](#section-run-2se-hms).

OptionsJson

String

No

Yes

The extended options of the protocol that you want to use for the site monitoring task. The options vary based on the protocol.

None.

## IspCities syntax

```
"IspCities": [
  {
    "Isp": String,
    "City": String
  }
]
```

## IspCities properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

City

String

Yes

No

The name or ID of the city where the detection point resides. City names support fuzzy match.

None.

Isp

String

Yes

No

The name or ID of the carrier to which the detection point belongs. Carrier names support fuzzy match.

For more information, see [DescribeSiteMonitorISPCityList](/help/en/cms/cloudmonitor-1-0/api-describesitemonitorispcitylist#doc-api-Cms-DescribeSiteMonitorISPCityList).

## Return values

Fn::GetAtt

TaskId: the ID of the site monitoring task.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  SiteMonitor:
    Type: ALIYUN::CMS::SiteMonitor
    Properties:
      Address: aliyun.com
      TaskName: DemoTask
      TaskType: http
Outputs:
  TaskId:
    Description: The ID of the site monitoring task.
    Value:
      Fn::GetAtt:
        - SiteMonitor
        - TaskId            
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "SiteMonitor": {
      "Type": "ALIYUN::CMS::SiteMonitor",
      "Properties": {
        "Address": "aliyun.com",
        "TaskName": "DemoTask",
        "TaskType": "http"
      }
    }
  },
  "Outputs": {
    "TaskId": {
      "Description": "The ID of the site monitoring task.",
      "Value": {
        "Fn::GetAtt": [
          "SiteMonitor",
          "TaskId"
        ]
      }
    }
  }
}
```
