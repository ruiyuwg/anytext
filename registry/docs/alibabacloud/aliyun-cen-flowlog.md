The ALIYUN::CEN::Flowlog type creates a flow log.

## Syntax

```
{
  "Type": "ALIYUN::CEN::Flowlog",
  "Properties": {
    "CenId": String,
    "Description": String,
    "FlowLogName": String,
    "Interval": Integer,
    "LogStoreName": String,
    "LogFormatString": String,
    "ProjectName": String,
    "TransitRouterAttachmentId": String,
    "Tags": List,
    "TransitRouterId": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

CenId

String

Yes

No

The ID of the CEN instance.

None

Description

String

No

Yes

The description of the flow log.

The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.

FlowLogName

String

No

Yes

The name of the flow log.

The name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://.

Interval

Integer

No

Yes

The aggregation interval for the flow log to capture traffic.

Unit: seconds. Valid values: 60 and 600. Default value: 600.

LogStoreName

String

No

No

The Logstore that stores the captured traffic.

-   If you have created a Logstore in the current region, enter the name of the Logstore.
    
-   If you have not created a Logstore in the current region, you can specify a custom name for the Logstore. The system automatically creates the Logstore. The naming conventions for the Logstore are as follows:
    
    -   The Logstore name must be unique within a project.
        
    -   The name can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
        
    -   The name must start and end with a lowercase letter or a digit.
        
    -   The name must be 3 to 63 characters in length.
        

LogFormatString

String

No

No

A string that defines the custom log fields for the flow log record.

The format is defined as: `${Field 1}${Field 2}${Field 3}...${Field n}`

-   If you do not specify this parameter, all default fields are recorded.
    
-   If you use this field, because `${srcaddr}${dstaddr}${bytes}` are required parameters, it must start with `${srcaddr}${dstaddr}${bytes}`. For a list of all supported flow log fields, see [Configure Flow Logs](/help/en/cen/user-guide/configure-a-flow-log).
    

ProjectName

String

No

No

The project that stores the captured traffic.

-   If you have created a project in the current region, enter the name of the project.
    
-   If you have not created a project in the current region, you can specify a custom name for the project. The system automatically creates the project.
    
    The project name must be globally unique within an Alibaba Cloud region and cannot be modified after creation. The naming conventions are as follows:
    
    -   The project name must be globally unique.
        
    -   The name can contain only lowercase letters, digits, and hyphens (-).
        
    -   The name must start and end with a lowercase letter or a digit.
        
    -   The name must be 3 to 63 characters in length.
        

TransitRouterAttachmentId

String

No

No

The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.

If you configure a flow log for a Transit Router instance, do not specify this parameter.

Tags

List

No

Yes

The tags.

For more information, see [Tags properties](#6eb477e35f85k).

TransitRouterId

String

No

No

The ID of the Transit Router instance.

None

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Tags properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Key

String

Yes

No

The tag key.

None

Value

String

No

No

The tag value.

None

## Return values

Fn::GetAtt

-   FlowLogVersion: The version of the flow log.
    
-   TransitRouterAttachmentId: The ID of the network instance connection.
    
-   Description: The description of the flow log.
    
-   ProjectName: The name of the project where the captured traffic is stored.
    
-   CreateTime: The time when the flow log was created.
    
-   FlowLogId: The ID of the flow log.
    
-   FlowLogName: The name of the flow log.
    
-   LogStoreName: The name of the Logstore where the captured traffic is stored.
    
-   LogFormatString: The string that specifies the custom format of a flow log record.
    
-   CenId: The ID of the CEN instance.
    
-   Tags: tag
    
-   TransitRouterId: The ID of the Transit Router instance.
    
-   Interval: The aggregation interval for capturing traffic.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  TransitRouterAttachmentId:
    Type: String
    Description:
      en: |-
        The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
        If you configure a flow log for a Transit Router instance, do not specify this parameter.
    Required: false
  FlowLogName:
    Type: String
    Description:
      en: |-
        The name of the flow log.
        The name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://.
    Required: false
    MinLength: 1
    MaxLength: 128
  Description:
    AssociationProperty: TextArea
    Type: String
    Description:
      en: |-
        The description of the flow log.
        The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.
    Required: false
    MinLength: 1
    MaxLength: 256
  LogStoreName:
    Type: String
    Description:
      en: |-
        The Logstore that stores the captured traffic.
        * If you have created a Logstore in the current region, enter the name of the Logstore.
        * If you have not created a Logstore in the current region, specify a custom name. The system automatically creates a Logstore. The naming conventions for the Logstore are as follows:
            ** The name must be unique within a project.
            ** The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
            ** The name must start and end with a lowercase letter or a digit.
            ** The name must be 3 to 63 characters in length.
    Required: false
    MinLength: 3
    MaxLength: 63
  ProjectName:
    Type: String
    Description:
      en: |-
        The project that stores the captured traffic. 
        * If you have created a project in the current region, enter the name of the project.
        * If you have not created a project in the current region, specify a custom name. The system automatically creates a project.
            The project name must be globally unique within an Alibaba Cloud region and cannot be modified after creation. The naming conventions are as follows:
                ** The name must be globally unique.
                ** The name can contain only lowercase letters, digits, and hyphens (-).
                ** The name must start and end with a lowercase letter or a digit.
                ** The name must be 3 to 63 characters in length.
    Required: false
    MinLength: 3
    MaxLength: 63
  LogFormatString:
    Type: String
    Description:
      en: |-
        A string that defines the custom log fields for the flow log record.
        Format: ${Field 1}${Field 2}${Field 3}...${Field n}
            * If you do not specify this parameter, all default fields are recorded.
            * If you use this parameter, the string must start with ${srcaddr}${dstaddr}${bytes} because these are required parameters.
    Required: false
  CenId:
    Type: String
    Description:
      en: The ID of the CEN instance.
    Required: true
  TransitRouterId:
    Type: String
    Description:
      en: The ID of the Transit Router instance.
    Required: false
  Interval:
    Type: Number
    Description:
      en: 'The aggregation interval for the flow log to capture traffic. Unit: seconds. Valid values: 60 and 600. Default value: 600.'
    Required: false
    MinValue: 60
    MaxValue: 600
Resources:
  ExtensionResource:
    Type: ALIYUN::CEN::Flowlog
    Properties:
      TransitRouterAttachmentId:
        Ref: TransitRouterAttachmentId
      FlowLogName:
        Ref: FlowLogName
      Description:
        Ref: Description
      LogStoreName:
        Ref: LogStoreName
      ProjectName:
        Ref: ProjectName
      LogFormatString:
        Ref: LogFormatString
      CenId:
        Ref: CenId
      TransitRouterId:
        Ref: TransitRouterId
      Interval:
        Ref: Interval
Outputs:
  FlowLogVersion:
    Description: The version of the flow log.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - FlowLogVersion
  TransitRouterAttachmentId:
    Description: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - TransitRouterAttachmentId
  Description:
    Description: The description of the flow log.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Description
  ProjectName:
    Description: The name of the project that stores the captured traffic.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ProjectName
  CreateTime:
    Description: The time when the flow log was created.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
  FlowLogId:
    Description: The ID of the flow log.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - FlowLogId
  FlowLogName:
    Description: The name of the flow log.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - FlowLogName
  LogStoreName:
    Description: The name of the Logstore that stores the captured traffic.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - LogStoreName
  LogFormatString:
    Description: The string that defines the custom log fields for the flow log record.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - LogFormatString
  CenId:
    Description: The ID of the CEN instance.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CenId
  Tags:
    Description: The tags of the flow log.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Tags
  TransitRouterId:
    Description: The ID of the Transit Router instance.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - TransitRouterId
  Interval:
    Description: The aggregation interval for the flow log to capture traffic.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Interval
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TransitRouterAttachmentId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.\nIf you configure a flow log for a Transit Router instance, do not specify this parameter."
      },
      "Required": false
    },
    "FlowLogName": {
      "Type": "String",
      "Description": {
        "en": "The name of the flow log.\nThe name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://."
      },
      "Required": false,
      "MinLength": 1,
      "MaxLength": 128
    },
    "Description": {
      "AssociationProperty": "TextArea",
      "Type": "String",
      "Description": {
        "en": "The description of the flow log.\nThe description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://."
      },
      "Required": false,
      "MinLength": 1,
      "MaxLength": 256
    },
    "LogStoreName": {
      "Type": "String",
      "Description": {
        "en": "The Logstore that stores the captured traffic.\n* If you have created a Logstore in the current region, enter the name of the Logstore.\n* If you have not created a Logstore in the current region, specify a custom name. The system automatically creates a Logstore. The naming conventions for the Logstore are as follows:\n    ** The name must be unique within a project.\n    ** The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).\n    ** The name must start and end with a lowercase letter or a digit.\n    ** The name must be 3 to 63 characters in length."
      },
      "Required": false,
      "MinLength": 3,
      "MaxLength": 63
    },
    "ProjectName": {
      "Type": "String",
      "Description": {
        "en": "The project that stores the captured traffic. \n* If you have created a project in the current region, enter the name of the project.\n* If you have not created a project in the current region, specify a custom name. The system automatically creates a project.\n    The project name must be globally unique within an Alibaba Cloud region and cannot be modified after creation. The naming conventions are as follows:\n        ** The name must be globally unique.\n        ** The name can contain only lowercase letters, digits, and hyphens (-).\n        ** The name must start and end with a lowercase letter or a digit.\n        ** The name must be 3 to 63 characters in length."
      },
      "Required": false,
      "MinLength": 3,
      "MaxLength": 63
    },
    "LogFormatString": {
      "Type": "String",
      "Description": {
        "en": "A string that defines the custom log fields for the flow log record.\nFormat: ${Field 1}${Field 2}${Field 3}...${Field n}\n    * If you do not specify this parameter, all default fields are recorded.\n    * If you use this parameter, the string must start with ${srcaddr}${dstaddr}${bytes} because these are required parameters."
      },
      "Required": false
    },
    "CenId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the CEN instance."
      },
      "Required": true
    },
    "TransitRouterId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the Transit Router instance."
      },
      "Required": false
    },
    "Interval": {
      "Type": "Number",
      "Description": {
        "en": "The aggregation interval for the flow log to capture traffic. Unit: seconds. Valid values: 60 and 600. Default value: 600."
      },
      "Required": false,
      "MinValue": 60,
      "MaxValue": 600
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::CEN::Flowlog",
      "Properties": {
        "TransitRouterAttachmentId": {
          "Ref": "TransitRouterAttachmentId"
        },
        "FlowLogName": {
          "Ref": "FlowLogName"
        },
        "Description": {
          "Ref": "Description"
        },
        "LogStoreName": {
          "Ref": "LogStoreName"
        },
        "ProjectName": {
          "Ref": "ProjectName"
        },
        "LogFormatString": {
          "Ref": "LogFormatString"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "TransitRouterId": {
          "Ref": "TransitRouterId"
        },
        "Interval": {
          "Ref": "Interval"
        }
      }
    }
  },
  "Outputs": {
    "FlowLogVersion": {
      "Description": "The version of the flow log.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "FlowLogVersion"
        ]
      }
    },
    "TransitRouterAttachmentId": {
      "Description": "The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "TransitRouterAttachmentId"
        ]
      }
    },
    "Description": {
      "Description": "The description of the flow log.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Description"
        ]
      }
    },
    "ProjectName": {
      "Description": "The name of the project that stores the captured traffic.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ProjectName"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the flow log was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "FlowLogId": {
      "Description": "The ID of the flow log.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "FlowLogId"
        ]
      }
    },
    "FlowLogName": {
      "Description": "The name of the flow log.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "FlowLogName"
        ]
      }
    },
    "LogStoreName": {
      "Description": "The name of the Logstore that stores the captured traffic.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "LogStoreName"
        ]
      }
    },
    "LogFormatString": {
      "Description": "The string that defines the custom log fields for the flow log record.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "LogFormatString"
        ]
      }
    },
    "CenId": {
      "Description": "The ID of the CEN instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CenId"
        ]
      }
    },
    "Tags": {
      "Description": "The tags of the flow log.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Tags"
        ]
      }
    },
    "TransitRouterId": {
      "Description": "The ID of the Transit Router instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "TransitRouterId"
        ]
      }
    },
    "Interval": {
      "Description": "The aggregation interval for the flow log to capture traffic.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Interval"
        ]
      }
    }
  }
}
                        
```
