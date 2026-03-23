DATASOURCE::CloudPhone::Image is used to query the information about an image.

## Syntax

```
{
  "Type": "DATASOURCE::CloudPhone::Image",
  "Properties": {
    "ImageId": String,
    "RefreshOptions": String
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

ImageId

String

Yes

Yes

The image ID.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   Status: the state of the image.
    
-   Usage: indicates whether the image is already used by a cloud phone.
    
-   Progress: the progress of the image creation.
    
-   Description: the description of the image.
    
-   IsSelfShared: indicates whether the image is already shared with other users.
    
-   Platform: the OS distribution.
    
-   OsName: the display name of the OS in Chinese.
    
-   CreateTime: the time when the image was created.
    
-   ImageCategory: the image source.
    
-   ImageName: the image name.
    
-   OsNameEn: the display name of the OS in English.
    
-   OsType: the OS type.
    
-   ImageId: the image ID.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ImageId:
    Description:
      en: Image ID.
    Required: true
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      ImageId:
        Ref: ImageId
    Type: DATASOURCE::CloudPhone::Image
Outputs:
  CreateTime:
    Description: Image creation time, in ISO 8601 format.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - CreateTime
  Description:
    Description: Image description.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Description
  ImageCategory:
    Description: Image type.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ImageCategory
  ImageId:
    Description: Image ID.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ImageId
  ImageName:
    Description: The name of the mirror image.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ImageName
  IsSelfShared:
    Description: Whether the image has been shared with other users.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - IsSelfShared
  OsName:
    Description: The Chinese display name of the operating system.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - OsName
  OsNameEn:
    Description: The English display name of the operating system.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - OsNameEn
  OsType:
    Description: Operating system type.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - OsType
  Platform:
    Description: Operating system distribution.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Platform
  Progress:
    Description: The progress of mirror image production.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Progress
  Status:
    Description: Image state.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Status
  Usage:
    Description: Whether the image is already running in the cloud phone instance.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Usage
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ImageId": {
      "Type": "String",
      "Description": {
        "en": "Image ID."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CloudPhone::Image",
      "Properties": {
        "ImageId": {
          "Ref": "ImageId"
        }
      }
    }
  },
  "Outputs": {
    "Status": {
      "Description": "Image state.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Status"
        ]
      }
    },
    "Usage": {
      "Description": "Whether the image is already running in the cloud phone instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Usage"
        ]
      }
    },
    "Progress": {
      "Description": "The progress of mirror image production.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Progress"
        ]
      }
    },
    "Description": {
      "Description": "Image description.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "IsSelfShared": {
      "Description": "Whether the image has been shared with other users.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "IsSelfShared"
        ]
      }
    },
    "Platform": {
      "Description": "Operating system distribution.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Platform"
        ]
      }
    },
    "OsName": {
      "Description": "The Chinese display name of the operating system.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "OsName"
        ]
      }
    },
    "CreateTime": {
      "Description": "Image creation time, in ISO 8601 format.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "ImageCategory": {
      "Description": "Image type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ImageCategory"
        ]
      }
    },
    "ImageName": {
      "Description": "The name of the mirror image.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ImageName"
        ]
      }
    },
    "OsNameEn": {
      "Description": "The English display name of the operating system.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "OsNameEn"
        ]
      }
    },
    "OsType": {
      "Description": "Operating system type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "OsType"
        ]
      }
    },
    "ImageId": {
      "Description": "Image ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ImageId"
        ]
      }
    }
  }
}
                        
```
