The ALIYUN::ESA::Page type is used to create a custom response page.

## Syntax

```
{
  "Type": "ALIYUN::ESA::Page",
  "Properties": {
    "ContentType": String,
    "PageName": String,
    "Content": String,
    "Description": String
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

ContentType

String

Yes

Yes

The Content-Type field in the HTTP header.

Valid values:

-   text/html
    
-   application/json
    

PageName

String

Yes

Yes

The name of the custom response page.

None

Content

String

No

Yes

The Base64-encoded page content. 

Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which represents "hello page".

Description

String

No

Yes

The description of the page.

None

## Return values

Fn::GetAtt

-   PageId: The ID of the custom response page.
    
-   Description: The description of the page.
    
-   ContentType: The Content-Type field in the HTTP header.
    
-   Content: The Base64-encoded page content.
    
-   Kind: The type of the custom response page.
    
-   UpdateTime: The time when the custom response page was last modified.
    
-   PageName: The name of the custom response page.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ContentType:
    Type: String
    Description:
      en: |-
        The Content-Type field in the HTTP header. Valid values:
        text/html
        application/json
    AllowedValues:
      - text/html
      - application/json
    Required: true
  Content:
    Type: String
    Description:
      en: 'The Base64-encoded page content. Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".'
    Required: false
  PageName:
    Type: String
    Description:
      en: The name of the custom response page.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::Page
    Properties:
      ContentType:
        Ref: ContentType
      Content:
        Ref: Content
      PageName:
        Ref: PageName
Outputs:
  PageId:
    Description: The ID of the custom response page.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - PageId
  Description:
    Description: The description of the custom response page.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Description
  ContentType:
    Description: The Content-Type field in the HTTP header.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ContentType
  Content:
    Description: The Base64-encoded content of the response page. The content type is specified by the Content-Type field.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Content
  Kind:
    Description: The type of the custom response page.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Kind
  UpdateTime:
    Description: The time when the custom response page was last modified.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - UpdateTime
  PageName:
    Description: The name of the custom response page.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - PageName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ContentType": {
      "Type": "String",
      "Description": {
        "en": "The Content-Type field in the HTTP header. Valid values:\ntext/html\napplication/json"
      },
      "AllowedValues": [
        "text/html",
        "application/json"
      ],
      "Required": true
    },
    "Content": {
      "Type": "String",
      "Description": {
        "en": "The Base64-encoded page content. Example: \"PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=\", which indicates \"hello page\"."
      },
      "Required": false
    },
    "PageName": {
      "Type": "String",
      "Description": {
        "en": "The name of the custom response page."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::Page",
      "Properties": {
        "ContentType": {
          "Ref": "ContentType"
        },
        "Content": {
          "Ref": "Content"
        },
        "PageName": {
          "Ref": "PageName"
        }
      }
    }
  },
  "Outputs": {
    "PageId": {
      "Description": "The ID of the custom response page.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "PageId"
        ]
      }
    },
    "Description": {
      "Description": "The description of the custom response page.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Description"
        ]
      }
    },
    "ContentType": {
      "Description": "The Content-Type field in the HTTP header.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ContentType"
        ]
      }
    },
    "Content": {
      "Description": "The Base64-encoded content of the response page. The content type is specified by the Content-Type field.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Content"
        ]
      }
    },
    "Kind": {
      "Description": "The type of the custom response page.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Kind"
        ]
      }
    },
    "UpdateTime": {
      "Description": "The time when the custom response page was last modified.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "UpdateTime"
        ]
      }
    },
    "PageName": {
      "Description": "The name of the custom response page.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "PageName"
        ]
      }
    }
  }
}
                        
```
