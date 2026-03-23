ALIYUN::ICE::UploadMedia is used to query the upload address and credential of a media asset.

## Syntax

```
{
  "Type": "ALIYUN::ICE::UploadMedia",
  "Properties": {
    "AppId": String,
    "EntityId": String,
    "FileInfo": Map,
    "MediaMetaData": Map,
    "PostProcessConfig": Map,
    "UserData": Map,
    "UploadTargetConfig": Map
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

AppId

String

No

No

The ID of the application.

None.

EntityId

String

No

No

The ID of the entity.

None.

FileInfo

Map

No

No

The information about the file.

This property includes the following fields:

-   Type: required. The file type. Valid values: video, image, audio, text, and other.
    
-   Name: required. The file name that does not contain an extension.
    
-   Size: optional. The file size.
    
-   Ext: required. The extension of the file name.
    

MediaMetaData

Map

No

No

The metadata of the media asset that you want to upload.

This property includes the following fields:

Title: required. The title.

-   The title can be up to 128 characters in length.
    
-   It must be encoded in UTF-8.
    

Description: optional. The description.

-   The description can be up to 1,024 characters in length.
    
-   It must be encoded in UTF-8.
    

CateId: optional. The ID of the category.

Tags: optional. The tags.

BusinessType: required. The business type.

-   Valid values when Type is set to video: opening and ending.
    
-   Valid values when Type is set to image: default and cover.
    
-   Valid values when Type is set to text: subtitles and font.
    
-   Valid value when Type is set to material: watermark.
    
-   Valid value when Type is set to general: CoverURL. CoverURL is optional.
    

DynamicMetaData: the dynamic metadata, which is of the string data type.

PostProcessConfig

Map

No

No

The post-upload processing configurations.

None.

UserData

Map

No

No

The custom configurations.

None.

UploadTargetConfig

Map

No

No

The destination storage address.

This property includes the following fields:

-   StorageType: the storage type. Set the value to oss.
    
-   StorageLocation: the storage address. The value must be an address in ApsaraVideo VOD (VOD). You cannot specify an address in Object Storage Service (OSS).
    

## Return values

Fn::GetAtt

-   FileURL: the OSS address of the file.
    
-   MediaURL: the address of the media asset.
    
-   UploadAddress: the upload address.
    
-   MediaId: the ID of the media asset.
    
-   UploadAuth: the upload credential.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  EntityId:
    Type: String
    Description:
      en: The entity ID. You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
    Required: false
  AppId:
    Type: String
    Description:
      en: 'The application ID. Default value: app-1000000.'
    Required: false
  FileInfo:
    Type: Json
    Description:
      en: |-
        The file information, which is in the JSON format and contains the following fields:
        Type: required. The file type. Valid values: video, image, audio, text, and other.
        Name: required. The file name without the extension.
        Size: optional. The file size.
        Ext: required. The file name extension.
    Required: false
  UserData:
    Type: Json
    Description:
      en: The user data. The value must be a JSON string. You can configure settings such as message callbacks.
    Required: false
  UploadTargetConfig:
    Type: Json
    Description:
      en: |-
        The destination storage address.
        Set StorageType to oss.
        Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
    Required: false
  MediaMetaData:
    Type: Json
    Description:
      en: |-
        The metadata of the media asset, which is a JSON string that contains the following fields:
        Title: required.
        The value can be up to 128 characters in length.
        The value must be encoded in UTF-8.
        Description: optional.
        The value can be up to 1,024 characters in length.
        The value must be encoded in UTF-8.
        CateId: optional.
        Tags: optional.
        BusinessType: required. Valid values:
        opening or ending if Type is set to video
        default or cover if Type is set to image
        subtitles or font if Type is set to text
        watermark if Type is set to material
        general CoverURL: optional.
        DynamicMetaData: The value is a string.
    Required: false
  PostProcessConfig:
    Type: Json
    Description:
      en: 'Type = video || audio There is a post-upload processing action. ProcessType Value: Workflow.'
    Required: false
Resources:
  UploadMedia:
    Type: ALIYUN::ICE::UploadMedia
    Properties:
      EntityId:
        Ref: EntityId
      AppId:
        Ref: AppId
      FileInfo:
        Ref: FileInfo
      UserData:
        Ref: UserData
      UploadTargetConfig:
        Ref: UploadTargetConfig
      MediaMetaData:
        Ref: MediaMetaData
      PostProcessConfig:
        Ref: PostProcessConfig
Outputs:
  FileURL:
    Description: The OSS URL of the file. The URL does not contain the information used for authentication.
    Value:
      Fn::GetAtt:
        - UploadMedia
        - FileURL
  MediaURL:
    Description: |-
      The URL of the media asset.
      Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
    Value:
      Fn::GetAtt:
        - UploadMedia
        - MediaURL
  UploadAddress:
    Description: |-
      The upload URL.
      Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
    Value:
      Fn::GetAtt:
        - UploadMedia
        - UploadAddress
  MediaId:
    Description: The ID of the media asset.
    Value:
      Fn::GetAtt:
        - UploadMedia
        - MediaId
  UploadAuth:
    Description: |-
      The upload credential.
      Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
    Value:
      Fn::GetAtt:
        - UploadMedia
        - UploadAuth
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "EntityId": {
      "Type": "String",
      "Description": {
        "en": "The entity ID. You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure."
      },
      "Required": false
    },
    "AppId": {
      "Type": "String",
      "Description": {
        "en": "The application ID. Default value: app-1000000."
      },
      "Required": false
    },
    "FileInfo": {
      "Type": "Json",
      "Description": {
        "en": "The file information, which is in the JSON format and contains the following fields:\nType: required. The file type. Valid values: video, image, audio, text, and other.\nName: required. The file name without the extension.\nSize: optional. The file size.\nExt: required. The file name extension."
      },
      "Required": false
    },
    "UserData": {
      "Type": "Json",
      "Description": {
        "en": "The user data. The value must be a JSON string. You can configure settings such as message callbacks."
      },
      "Required": false
    },
    "UploadTargetConfig": {
      "Type": "Json",
      "Description": {
        "en": "The destination storage address.\nSet StorageType to oss.\nSet StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL."
      },
      "Required": false
    },
    "MediaMetaData": {
      "Type": "Json",
      "Description": {
        "en": "The metadata of the media asset, which is a JSON string that contains the following fields:\nTitle: required.\nThe value can be up to 128 characters in length.\nThe value must be encoded in UTF-8.\nDescription: optional.\nThe value can be up to 1,024 characters in length.\nThe value must be encoded in UTF-8.\nCateId: optional.\nTags: optional.\nBusinessType: required. Valid values:\nopening or ending if Type is set to video\ndefault or cover if Type is set to image\nsubtitles or font if Type is set to text\nwatermark if Type is set to material\ngeneral CoverURL: optional.\nDynamicMetaData: The value is a string."
      },
      "Required": false
    },
    "PostProcessConfig": {
      "Type": "Json",
      "Description": {
        "en": "Type = video || audio There is a post-upload processing action. ProcessType Value: Workflow."
      },
      "Required": false
    }
  },
  "Resources": {
    "UploadMedia": {
      "Type": "ALIYUN::ICE::UploadMedia",
      "Properties": {
        "EntityId": {
          "Ref": "EntityId"
        },
        "AppId": {
          "Ref": "AppId"
        },
        "FileInfo": {
          "Ref": "FileInfo"
        },
        "UserData": {
          "Ref": "UserData"
        },
        "UploadTargetConfig": {
          "Ref": "UploadTargetConfig"
        },
        "MediaMetaData": {
          "Ref": "MediaMetaData"
        },
        "PostProcessConfig": {
          "Ref": "PostProcessConfig"
        }
      }
    }
  },
  "Outputs": {
    "FileURL": {
      "Description": "The OSS URL of the file. The URL does not contain the information used for authentication.",
      "Value": {
        "Fn::GetAtt": [
          "UploadMedia",
          "FileURL"
        ]
      }
    },
    "MediaURL": {
      "Description": "The URL of the media asset.\nNote If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.",
      "Value": {
        "Fn::GetAtt": [
          "UploadMedia",
          "MediaURL"
        ]
      }
    },
    "UploadAddress": {
      "Description": "The upload URL.\nNote The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.",
      "Value": {
        "Fn::GetAtt": [
          "UploadMedia",
          "UploadAddress"
        ]
      }
    },
    "MediaId": {
      "Description": "The ID of the media asset.",
      "Value": {
        "Fn::GetAtt": [
          "UploadMedia",
          "MediaId"
        ]
      }
    },
    "UploadAuth": {
      "Description": "The upload credential.\nNote The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.",
      "Value": {
        "Fn::GetAtt": [
          "UploadMedia",
          "UploadAuth"
        ]
      }
    }
  }
}
                        
```
