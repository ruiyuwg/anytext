You can use the ALIYUN::ESA::Site resource type to create a site.

## Syntax

```
{
  "Type": "ALIYUN::ESA::Site",
  "Properties": {
    "InstanceId": String,
    "SiteName": String,
    "AccessType": String,
    "Coverage": String,
    "PaymentType": String,
    "ResourceGroupId": String,
    "Tags": List
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

InstanceId

String

Yes

No

The instance ID.

Specify at least the instance ID or the site ID. If you specify both, the instance ID takes precedence.

SiteName

String

Yes

No

The site name.

None

AccessType

String

No

No

The access type of the site.

Valid values:

-   **NS**: Connect using a managed name server (NS).
    
-   **CNAME**: Connect by configuring a canonical name (CNAME).
    

Coverage

String

No

Yes

The acceleration area.

Valid values:

-   **domestic**: the Chinese mainland only.
    
-   **global**
    
-   **overseas**: global (excluding the Chinese mainland).
    

PaymentType

String

No

No

The payment type.

None

ResourceGroupId

String

No

Yes

The resource group ID.

None

Tags

List

No

Yes

The tags attached to the site.

Up to 20 tags can be added.

For more information, see [Tags properties](#8287fd33ceixe).

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

The value must be 1 to 128 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

Value

String

No

No

The tag value.

The value can be 0 to 128 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

-   ModifyTime: The time when the site was last modified.
    
-   SiteId: The site ID.
    
-   NameServerList: A comma-separated list of NSs assigned to the site. This parameter is returned only when the access type is set to NS. To activate the site, change your domain's DNS servers to these NSs and then verify site ownership.
    
-   SiteName: The site name.
    
-   ResourceGroupId: The resource group ID.
    
-   InstanceId: The instance ID.
    
-   CreateTime: The time when the site was created.
    
-   Coverage: The acceleration area.
    
-   Tags: The tags attached to the site.
    
-   AccessType: The access type of the site.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SiteName:
    Type: String
    Description:
      en: The name of the Site.
    Required: true
  InstanceId:
    Type: String
    Description:
      en: The ID of the associated package instance.
    Required: true
  Coverage:
    Type: String
    Description:
      en: Acceleration area.
    Required: false
  AccessType:
    Type: String
    Description:
      en: The Access Type of the Site.
    AllowedValues:
      - CNAME
      - NS
    Required: false
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::Site
    Properties:
      SiteName:
        Ref: SiteName
      InstanceId:
        Ref: InstanceId
      Coverage:
        Ref: Coverage
      AccessType:
        Ref: AccessType
Outputs:
  ModifyTime:
    Description: Modification time.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ModifyTime
  SiteId:
    Description: The ID of the Site.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteId
  NameServerList:
    Description: Site Resolution Name Server List.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - NameServerList
  SiteName:
    Description: The name of the Site.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteName
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ResourceGroupId
  InstanceId:
    Description: The ID of the associated package instance.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - InstanceId
  CreateTime:
    Description: Creation time.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
  Coverage:
    Description: Acceleration area.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Coverage
  Tags:
    Description: The tags of the Site.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Tags
  AccessType:
    Description: Site Access Type.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AccessType
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SiteName": {
      "Type": "String",
      "Description": {
        "en": "The name of the Site."
      },
      "Required": true
    },
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the associated package instance."
      },
      "Required": true
    },
    "Coverage": {
      "Type": "String",
      "Description": {
        "en": "Acceleration area."
      },
      "Required": false
    },
    "AccessType": {
      "Type": "String",
      "Description": {
        "en": "The Access Type of the Site."
      },
      "AllowedValues": [
        "CNAME",
        "NS"
      ],
      "Required": false
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::Site",
      "Properties": {
        "SiteName": {
          "Ref": "SiteName"
        },
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "Coverage": {
          "Ref": "Coverage"
        },
        "AccessType": {
          "Ref": "AccessType"
        }
      }
    }
  },
  "Outputs": {
    "ModifyTime": {
      "Description": "Modification time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ModifyTime"
        ]
      }
    },
    "SiteId": {
      "Description": "The ID of the Site.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteId"
        ]
      }
    },
    "NameServerList": {
      "Description": "Site Resolution Name Server List.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "NameServerList"
        ]
      }
    },
    "SiteName": {
      "Description": "The name of the Site.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteName"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ResourceGroupId"
        ]
      }
    },
    "InstanceId": {
      "Description": "The ID of the associated package instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "InstanceId"
        ]
      }
    },
    "CreateTime": {
      "Description": "Creation time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "Coverage": {
      "Description": "Acceleration area.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Coverage"
        ]
      }
    },
    "Tags": {
      "Description": "The tags of the Site.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Tags"
        ]
      }
    },
    "AccessType": {
      "Description": "Site Access Type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AccessType"
        ]
      }
    }
  }
}
                        
```
