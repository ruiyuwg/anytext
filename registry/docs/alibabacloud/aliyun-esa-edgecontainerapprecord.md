The ALIYUN::ESA::EdgeContainerAppRecord type creates an associated domain name for an edge container application.

## Syntax

```
{
  "Type": "ALIYUN::ESA::EdgeContainerAppRecord",
  "Properties": {
    "AppId": String,
    "RecordName": String,
    "SiteId": Integer
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

AppId

String

Yes

No

The application ID.

None

RecordName

String

Yes

No

The associated domain name.

None

SiteId

Integer

Yes

No

The website ID.

None

## Return values

Fn::GetAtt

-   RecordName: The associated domain name.
    
-   SiteId: The website ID.
    
-   AppId: The application ID.
    
-   CreateTime: The time when the record was created.
    
-   UpdateTime: The time when the record was last updated.
    
-   RecordId: The record ID of the associated domain name.
    
-   ConfigId: The configuration ID of the associated domain name.
    
-   SchemdId: The scheduling domain ID of the associated domain name.
    
-   Cname: The CNAME of the associated domain name.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  RecordName:
    Type: String
    Description: The associated domain name.
    Required: true
  SiteId:
    Type: Number
    Description: The website ID.
    Required: true
  AppId:
    Type: String
    Description: The application ID.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::EdgeContainerAppRecord
    Properties:
      RecordName:
        Ref: RecordName
      SiteId:
        Ref: SiteId
      AppId:
        Ref: AppId
Outputs:
  RecordName:
    Description: The associated domain name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RecordName
  SiteId:
    Description: The website ID.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteId
  AppId:
    Description: The application ID.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AppId
  CreateTime:
    Description: The time when the domain name was added. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
  UpdateTime:
    Description: The time when the scheduling domain ID or CNAME was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - UpdateTime
  RecordId:
    Description: The record ID of the associated domain name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RecordId
  ConfigId:
    Description: The configuration ID of the associated domain name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConfigId
  SchemdId:
    Description: The scheduling domain ID of the associated domain name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SchemdId
  Cname:
    Description: The CNAME of the associated domain name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Cname
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "RecordName": {
      "Type": "String",
      "Description": "The associated domain name.",
      "Required": true
    },
    "SiteId": {
      "Type": "Number",
      "Description": "The website ID.",
      "Required": true
    },
    "AppId": {
      "Type": "String",
      "Description": "The application ID.",
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::EdgeContainerAppRecord",
      "Properties": {
        "RecordName": {
          "Ref": "RecordName"
        },
        "SiteId": {
          "Ref": "SiteId"
        },
        "AppId": {
          "Ref": "AppId"
        }
      }
    }
  },
  "Outputs": {
    "RecordName": {
      "Description": "The associated domain name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RecordName"
        ]
      }
    },
    "SiteId": {
      "Description": "The website ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteId"
        ]
      }
    },
    "AppId": {
      "Description": "The application ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AppId"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the domain name was added. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "UpdateTime": {
      "Description": "The time when the scheduling domain ID or CNAME was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "UpdateTime"
        ]
      }
    },
    "RecordId": {
      "Description": "The record ID of the associated domain name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RecordId"
        ]
      }
    },
    "ConfigId": {
      "Description": "The configuration ID of the associated domain name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ConfigId"
        ]
      }
    },
    "SchemdId": {
      "Description": "The scheduling domain ID of the associated domain name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SchemdId"
        ]
      }
    },
    "Cname": {
      "Description": "The CNAME of the associated domain name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Cname"
        ]
      }
    }
  }
}
                        
```
