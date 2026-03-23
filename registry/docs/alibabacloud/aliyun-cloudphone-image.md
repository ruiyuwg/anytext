ALIYUN::CloudPhone::Image is used to create a custom image for a cloud phone.

## Syntax

```
{
  "Type": "ALIYUN::CloudPhone::Image",
  "Properties": {
    "ImageName": String,
    "Description": String,
    "InstanceId": String
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

The ID of the cloud phone.

None.

Description

String

No

Yes

The description of the image.

The description must be 2 to 256 characters in length. It can contain letters and cannot start with `http://` or `https://`.

ImageName

String

No

Yes

The image name.

The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

## Return values

Fn::GetAtt

-   ImageName: the image name.
    
-   Usage: indicates whether the image is already used by a cloud phone.
    
-   Progress: the progress of the image creation.
    
-   Description: the description of the image.
    
-   IsSelfShared: indicates whether the image is already shared with other users.
    
-   Platform: the OS distribution.
    
-   OsNameEn: the display name of the OS in English.
    
-   OsType: the OS type.
    
-   OsName: the display name of the OS in Chinese.
    
-   CreateTime: the time when the image was created.
    
-   ImageId: the image ID.
    
-   ImageCategory: the image source.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Description:
    AssociationProperty: TextArea
    Description:
      en: The image description. The description must be 2 to 256 characters in length.
        It cannot start with http:// or https://.
    Required: false
    Type: String
  ImageName:
    Description:
      en: The image name. The name must be 2 to 128 characters in length. It can contain
        letters, digits, colons (:), underscores (_), and hyphens (-). The name must
        start with a letter but cannot start with http:// or https://.
    Required: false
    Type: String
  InstanceId:
    Description:
      en: The ID of the mobile phone instance.
    Required: true
    Type: String
Resources:
  ExtensionResource:
    Properties:
      Description:
        Ref: Description
      ImageName:
        Ref: ImageName
      InstanceId:
        Ref: InstanceId
    Type: ALIYUN::CloudPhone::Image
Outputs:
  CreateTime:
    Description: The time when the image was created. The time follows the ISO 8601
      standard.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - CreateTime
  Description:
    Description: 'The image description. '
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Description
  ImageCategory:
    Description: The image type.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - ImageCategory
  ImageId:
    Description: The image ID.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - ImageId
  ImageName:
    Description: The image name.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - ImageName
  IsSelfShared:
    Description: Indicates whether the image is shared with other Alibaba Cloud accounts.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - IsSelfShared
  OsName:
    Description: The display name of the OS in Chinese.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - OsName
  OsNameEn:
    Description: The display name of the OS in English.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - OsNameEn
  OsType:
    Description: The image OS.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - OsType
  Platform:
    Description: The OS distribution.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Platform
  Progress:
    Description: The progress of image creation.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Progress
  Usage:
    Description: Whether the image is already running in the cloud phone instance.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Usage
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ImageName": {
      "Type": "String",
      "Description": {
        "en": "The image name. The name must be 2 to 128 characters in length. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://."
      },
      "Required": false
    },
    "Description": {
      "AssociationProperty": "TextArea",
      "Type": "String",
      "Description": {
        "en": "The image description. The description must be 2 to 256 characters in length. It cannot start with http:// or https://."
      },
      "Required": false
    },
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the mobile phone instance."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::CloudPhone::Image",
      "Properties": {
        "ImageName": {
          "Ref": "ImageName"
        },
        "Description": {
          "Ref": "Description"
        },
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
    }
  },
  "Outputs": {
    "ImageName": {
      "Description": "The image name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ImageName"
        ]
      }
    },
    "Usage": {
      "Description": "Whether the image is already running in the cloud phone instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Usage"
        ]
      }
    },
    "Progress": {
      "Description": "The progress of image creation.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Progress"
        ]
      }
    },
    "Description": {
      "Description": "The image description. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Description"
        ]
      }
    },
    "IsSelfShared": {
      "Description": "Indicates whether the image is shared with other Alibaba Cloud accounts.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "IsSelfShared"
        ]
      }
    },
    "Platform": {
      "Description": "The OS distribution.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Platform"
        ]
      }
    },
    "OsNameEn": {
      "Description": "The display name of the OS in English.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OsNameEn"
        ]
      }
    },
    "OsType": {
      "Description": "The image OS.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OsType"
        ]
      }
    },
    "OsName": {
      "Description": "The display name of the OS in Chinese.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OsName"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the image was created. The time follows the ISO 8601 standard.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "ImageId": {
      "Description": "The image ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ImageId"
        ]
      }
    },
    "ImageCategory": {
      "Description": "The image type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ImageCategory"
        ]
      }
    }
  }
}
                        
```
