The ALIYUN::ESA::WaitingRoom type is used to create a waiting room.

## Syntax

```
{
  "Type": "ALIYUN::ESA::WaitingRoom",
  "Properties": {
    "CookieName": String,
    "HostNameAndPath": List,
    "NewUsersPerMinute": Integer,
    "QueuingStatusCode": Integer,
    "QueuingMethod": String,
    "Status": String,
    "SiteId": Integer,
    "SessionDuration": Integer,
    "TotalActiveUsers": String,
    "WaitingRoomType": String,
    "WaitingRoomName": String,
    "CustomPageHtml": String,
    "Description": String,
    "DisableSessionRenewalEnable": String,
    "JsonResponseEnable": String,
    "Language": String,
    "QueueAllEnable": String
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

CookieName

String

Yes

Yes

The custom cookie name.

None

HostNameAndPath

List

Yes

Yes

The hostname and path.

For more information, see [the HostNameAndPath property](#04824132b2oov).

NewUsersPerMinute

Integer

Yes

Yes

The number of new users admitted per minute.

None

QueuingStatusCode

Integer

Yes

Yes

The status code for the waiting room.

Valid values:

-   **200**
    
-   **202**
    
-   **429**
    

QueuingMethod

String

Yes

Yes

The queuing method.

Valid values:

-   **random**: At random.
    
-   **fifo**: Users are admitted in the order they arrive (first in, first out).
    
-   **passthrough**: Forwards data directly without any processing.
    
-   **reject-all**: rejects all requests.
    

Status

String

Yes

Yes

The status of the waiting room.

Valid values:

-   **on**: Enabled.
    
-   **off**: Disabled.
    

SiteId

Integer

Yes

No

The site ID.

None

SessionDuration

Integer

Yes

Yes

The session duration.

The unit is minutes.

TotalActiveUsers

String

Yes

Yes

The total number of active users.

None

WaitingRoomType

String

Yes

Yes

The type of the waiting room.

The following types are supported:

-   **default**: The default type.
    
-   **custom**: The custom type.
    

WaitingRoomName

String

Yes

Yes

The name of the waiting room.

None

CustomPageHtml

String

No

Yes

The custom HTML content for the waiting room page.

This property is required when WaitingRoomType is set to custom. The content must be Base64-encoded.

Description

String

No

Yes

The description of the waiting room.

None

DisableSessionRenewalEnable

String

No

Yes

Specifies whether to disable session renewal.

Valid values:

-   **on**: Enabled.
    
-   **off**: Disabled.
    

JsonResponseEnable

String

No

Yes

The response is in JSON format.

If enabled, a JSON-formatted response is returned when the accept request header contains "application/json". Valid values:

-   **on**: Enabled.
    
-   **off**: Disabled.
    

Language

String

No

Yes

The language of the waiting room page.

This property is required when WaitingRoomType is set to default. The following types are supported:

-   **enus**: English.
    
-   **zhcn**: Simplified Chinese.
    
-   **zhhk**: Traditional Chinese.
    

QueueAllEnable

String

No

Yes

Specifies whether to force all incoming requests into the queue.

Valid values:

-   **on**: Enabled.
    
-   **off**: Disabled.
    

## HostNameAndPath syntax

```
"HostNameAndPath": [
  {
    "Path": String,
    "Subdomain": String,
    "Domain": String
  }
]
```

## HostNameAndPath properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Domain

String

Yes

Yes

The domain name.

None

Path

String

Yes

Yes

The path.

None

Subdomain

String

Yes

Yes

The subdomain.

None

## Return values

Fn::GetAtt

-   HostNameAndPath: The hostname and path.
    
-   JsonResponseEnable: Indicates whether JSON-formatted responses are enabled.
    
-   Description: The description of the waiting room.
    
-   WaitingRoomType: The type of the waiting room.
    
-   DisableSessionRenewalEnable: Indicates whether session renewal is disabled.
    
-   CookieName: The custom cookie name.
    
-   WaitingRoomName: The name of the waiting room.
    
-   CustomPageHtml: The custom HTML content for the waiting room page.
    
-   QueueAllEnable: Indicates whether all users are queued.
    
-   QueuingStatusCode: The status code of the waiting room.
    
-   NewUsersPerMinute: The number of new users admitted per minute.
    
-   SessionDuration: The session duration.
    
-   Language: The language of the waiting room page.
    
-   TotalActiveUsers: The total number of active users.
    
-   WaitingRoomId: The ID of the waiting room.
    
-   QueuingMethod: The queuing method.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Status:
    Type: String
    Description:
      en: |-
        The status of the waiting room. Valid values:
        - on: Enables the waiting room.
        - off: Disables the waiting room.
    AllowedValues:
      - 'on'
      - 'off'
    Required: true
  HostNameAndPath:
    AssociationPropertyMetadata:
      Parameters:
        Path:
          Type: String
          Description:
            en: The path.
          Required: true
        Subdomain:
          Type: String
          Description:
            en: The subdomain.
          Required: true
        Domain:
          Type: String
          Description:
            en: The domain name.
          Required: true
    AssociationProperty: List[Parameters]
    Type: Json
    Description:
      en: The hostname and path.
    Required: true
  SiteId:
    Type: Number
    Description:
      en: The site ID.
    Required: true
  WaitingRoomType:
    Type: String
    Description:
      en: |-
        The type of the waiting room. Valid values:
        - default: The default type.
        - custom: The custom type.
    AllowedValues:
      - default
      - custom
    Required: true
  CookieName:
    Type: String
    Description:
      en: The name of the custom cookie.
    Required: true
  WaitingRoomName:
    Type: String
    Description:
      en: The name of the waiting room.
    Required: true
  QueuingStatusCode:
    Type: Number
    Description:
      en: |-
        The status code for the waiting room. Valid values:
        - 200
        - 202
        - 429
    AllowedValues:
      - 200
      - 202
      - 429
    Required: true
  NewUsersPerMinute:
    Type: Number
    Description:
      en: The number of new users admitted per minute.
    Required: true
    MinValue: 200
  SessionDuration:
    Type: Number
    Description:
      en: The session duration in minutes.
    Required: true
    MinValue: 1
  Language:
    Type: String
    Description:
      en: |-
        The language of the waiting room page. This property is required when WaitingRoomType is set to default. Valid values:
        - enus: English.
        - zhcn: Simplified Chinese.
        - zhhk: Traditional Chinese.
    AllowedValues:
      - enus
      - zhcn
      - zhhk
    Required: false
  QueuingMethod:
    Type: String
    Description:
      en: |-
        The queuing method. Valid values:
        - random: Users are admitted randomly.
        - fifo: Users are admitted in the order they arrive (first in, first out).
        - Passthrough: Users bypass the waiting room.
        - Reject-all: All users are denied access.
    AllowedValues:
      - random
      - fifo
      - Passthrough
      - Reject-all
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::WaitingRoom
    Properties:
      Status:
        Ref: Status
      HostNameAndPath:
        Ref: HostNameAndPath
      SiteId:
        Ref: SiteId
      WaitingRoomType:
        Ref: WaitingRoomType
      CookieName:
        Ref: CookieName
      QueueAllEnable:
        Ref: QueueAllEnable
      WaitingRoomName:
        Ref: WaitingRoomName
      QueuingStatusCode:
        Ref: QueuingStatusCode
      NewUsersPerMinute:
        Ref: NewUsersPerMinute
      SessionDuration:
        Ref: SessionDuration
      Language:
        Ref: Language
      QueuingMethod:
        Ref: QueuingMethod
Outputs:
  HostNameAndPath:
    Description: The hostname and path.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - HostNameAndPath
  JsonResponseEnable:
    Description: Indicates whether JSON-formatted responses are enabled.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - JsonResponseEnable
  Description:
    Description: The description of the waiting room.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Description
  WaitingRoomType:
    Description: The type of the waiting room.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - WaitingRoomType
  DisableSessionRenewalEnable:
    Description: Indicates whether session renewal is disabled.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - DisableSessionRenewalEnable
  CookieName:
    Description: The custom cookie name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CookieName
  WaitingRoomName:
    Description: The name of the waiting room.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - WaitingRoomName
  CustomPageHtml:
    Description: The custom HTML content for the waiting room page. This value is returned only when WaitingRoomType is set to custom. The content is Base64-encoded.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CustomPageHtml
  QueueAllEnable:
    Description: Indicates whether all users are queued.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - QueueAllEnable
  QueuingStatusCode:
    Description: The status code for the waiting room.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - QueuingStatusCode
  NewUsersPerMinute:
    Description: The number of new users admitted per minute.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - NewUsersPerMinute
  SessionDuration:
    Description: The session duration in minutes.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SessionDuration
  Language:
    Description: The language of the waiting room page. This value is returned only when WaitingRoomType is set to default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Language
  TotalActiveUsers:
    Description: The total number of active users.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - TotalActiveUsers
  WaitingRoomId:
    Description: The ID of the waiting room.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - WaitingRoomId
  QueuingMethod:
    Description: The queuing method.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - QueuingMethod
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Status": {
      "Type": "String",
      "Description": {
        "en": "The status of the waiting room. Valid values:\n- on: Enables the waiting room.\n- off: Disables the waiting room."
      },
      "AllowedValues": [
        "on",
        "off"
      ],
      "Required": true
    },
    "HostNameAndPath": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "Path": {
            "Type": "String",
            "Description": {
              "en": "The path."
            },
            "Required": true
          },
          "Subdomain": {
            "Type": "String",
            "Description": {
              "en": "The subdomain."
            },
            "Required": true
          },
          "Domain": {
            "Type": "String",
            "Description": {
              "en": "The domain name."
            },
            "Required": true
          }
        }
      },
      "AssociationProperty": "List[Parameters]",
      "Type": "Json",
      "Description": {
        "en": "The hostname and path."
      },
      "Required": true
    },
    "SiteId": {
      "Type": "Number",
      "Description": {
        "en": "The site ID."
      },
      "Required": true
    },
    "WaitingRoomType": {
      "Type": "String",
      "Description": {
        "en": "The type of the waiting room. Valid values:\n- default: The default type.\n- custom: The custom type."
      },
      "AllowedValues": [
        "default",
        "custom"
      ],
      "Required": true
    },
    "CookieName": {
      "Type": "String",
      "Description": {
        "en": "The name of the custom cookie."
      },
      "Required": true
    },
    "WaitingRoomName": {
      "Type": "String",
      "Description": {
        "en": "The name of the waiting room."
      },
      "Required": true
    },
    "QueuingStatusCode": {
      "Type": "Number",
      "Description": {
        "en": "The status code for the waiting room. Valid values:\n- 200\n- 202\n- 429"
      },
      "AllowedValues": [
        200,
        202,
        429
      ],
      "Required": true
    },
    "NewUsersPerMinute": {
      "Type": "Number",
      "Description": {
        "en": "The number of new users admitted per minute."
      },
      "Required": true,
      "MinValue": 200
    },
    "SessionDuration": {
      "Type": "Number",
      "Description": {
        "en": "The session duration in minutes."
      },
      "Required": true,
      "MinValue": 1
    },
    "Language": {
      "Type": "String",
      "Description": {
        "en": "The language of the waiting room page. This property is required when WaitingRoomType is set to default. Valid values:\n- enus: English.\n- zhcn: Simplified Chinese.\n- zhhk: Traditional Chinese."
      },
      "AllowedValues": [
        "enus",
        "zhcn",
        "zhhk"
      ],
      "Required": false
    },
    "QueuingMethod": {
      "Type": "String",
      "Description": {
        "en": "The queuing method. Valid values:\n- random: Users are admitted randomly.\n- fifo: Users are admitted in the order they arrive (first in, first out).\n- Passthrough: Users bypass the waiting room.\n- Reject-all: All users are denied access."
      },
      "AllowedValues": [
        "random",
        "fifo",
        "Passthrough",
        "Reject-all"
      ],
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::WaitingRoom",
      "Properties": {
        "Status": {
          "Ref": "Status"
        },
        "HostNameAndPath": {
          "Ref": "HostNameAndPath"
        },
        "SiteId": {
          "Ref": "SiteId"
        },
        "WaitingRoomType": {
          "Ref": "WaitingRoomType"
        },
        "CookieName": {
          "Ref": "CookieName"
        },
        "QueueAllEnable": {
          "Ref": "QueueAllEnable"
        },
        "WaitingRoomName": {
          "Ref": "WaitingRoomName"
        },
        "QueuingStatusCode": {
          "Ref": "QueuingStatusCode"
        },
        "NewUsersPerMinute": {
          "Ref": "NewUsersPerMinute"
        },
        "SessionDuration": {
          "Ref": "SessionDuration"
        },
        "Language": {
          "Ref": "Language"
        },
        "QueuingMethod": {
          "Ref": "QueuingMethod"
        }
      }
    }
  },
  "Outputs": {
    "HostNameAndPath": {
      "Description": "The hostname and path.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "HostNameAndPath"
        ]
      }
    },
    "JsonResponseEnable": {
      "Description": "Indicates whether JSON-formatted responses are enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "JsonResponseEnable"
        ]
      }
    },
    "Description": {
      "Description": "The description of the waiting room.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Description"
        ]
      }
    },
    "WaitingRoomType": {
      "Description": "The type of the waiting room.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "WaitingRoomType"
        ]
      }
    },
    "DisableSessionRenewalEnable": {
      "Description": "Indicates whether session renewal is disabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "DisableSessionRenewalEnable"
        ]
      }
    },
    "CookieName": {
      "Description": "The custom cookie name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CookieName"
        ]
      }
    },
    "WaitingRoomName": {
      "Description": "The name of the waiting room.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "WaitingRoomName"
        ]
      }
    },
    "CustomPageHtml": {
      "Description": "The custom HTML content for the waiting room page. This value is returned only when WaitingRoomType is set to custom. The content is Base64-encoded.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CustomPageHtml"
        ]
      }
    },
    "QueueAllEnable": {
      "Description": "Indicates whether all users are queued.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "QueueAllEnable"
        ]
      }
    },
    "QueuingStatusCode": {
      "Description": "The status code for the waiting room.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "QueuingStatusCode"
        ]
      }
    },
    "NewUsersPerMinute": {
      "Description": "The number of new users admitted per minute.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "NewUsersPerMinute"
        ]
      }
    },
    "SessionDuration": {
      "Description": "The session duration in minutes.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SessionDuration"
        ]
      }
    },
    "Language": {
      "Description": "The language of the waiting room page. This value is returned only when WaitingRoomType is set to default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Language"
        ]
      }
    },
    "TotalActiveUsers": {
      "Description": "The total number of active users.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "TotalActiveUsers"
        ]
      }
    },
    "WaitingRoomId": {
      "Description": "The ID of the waiting room.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "WaitingRoomId"
        ]
      }
    },
    "QueuingMethod": {
      "Description": "The queuing method.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "QueuingMethod"
        ]
      }
    }
  }
}
                        
```
