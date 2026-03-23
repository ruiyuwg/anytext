ALIYUN::ICE::MediaInfo is used to register a media asset in Intelligent Media Services (IMS).

## Syntax

```
{
  "Type": "ALIYUN::ICE::MediaInfo",
  "Properties": {
    "InputURL": String,
    "BusinessType": String,
    "CateId": Integer,
    "CoverURL": String,
    "Description": String,
    "MediaType": String,
    "MediaTags": List,
    "Overwrite": Boolean,
    "RegisterConfig": String,
    "ReferenceId": String,
    "SmartTagTemplateId": String,
    "Title": String,
    "UserData": Map,
    "WorkflowId": String
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

InputURL

String

Yes

No

The URL of the media asset in another service.

The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once the media asset is registered. The following types of URLs are supported:

-   Object Storage Service (OSS) URL. Two formats are supported.
    

-   URL of an ApsaraVideo VOD (VOD) media asset.
    

BusinessType

String

No

No

The business type of the media asset.

Valid values:

-   subtitles
    
-   watermark
    
-   opening
    
-   ending
    
-   general
    

CateId

Integer

No

Yes

The ID of the category.

None.

CoverURL

String

No

Yes

The thumbnail URL.

-   The URL can be up to 128 bytes in length.
    
-   The URL must be encoded in UTF-8.
    

Description

String

No

Yes

The description of the media asset.

-   The description can be up to 1,024 bytes in length.
    
-   The description must be encoded in UTF-8.
    

MediaType

String

No

No

The type of the media asset.

Valid values:

-   image
    
-   video
    
-   audio
    
-   text
    

MediaTags

List

No

Yes

The tags.

-   You can add up to 16 tags.
    
-   Separate multiple tags with commas (,).
    
-   Each tag can be up to 32 bytes in length.
    
-   The tags must be encoded in UTF-8.
    

Overwrite

Boolean

No

No

Specifies whether to overwrite the media asset that has been registered by using the URL specified by InputURL.

-   true: If a media asset has been registered by using the URL, the media asset is deleted and a new media asset is registered.
    
-   false (default): If a media asset has been registered by using the URL, a new media asset is not registered. The URL cannot be used to register multiple media assets.
    

RegisterConfig

String

No

No

The registration configurations.

By default, a sprite sheet is generated for the media asset. You can set NeedSprite to false to disable automatic sprite sheet generation.

By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.

ReferenceId

String

No

Yes

The custom ID.

The ID can be 6 to 64 characters in length, and can contain only letters, digits, hyphens (-), and underscores (\_). The ID must be unique within an account.

SmartTagTemplateId

String

No

No

The ID of the smart tagging template.

Valid values:

-   S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
    
-   S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities. For more information, see [Analyze the content of media assets](/help/en/ims/use-cases/how-to-understand-the-content-of-media-resources).
    
-   S00000103-000002: the system template that does not support NLP for content recognition but supports all tagging capabilities. For more information, see [Analyze the content of media assets](/help/en/ims/use-cases/how-to-understand-the-content-of-media-resources).
    

Title

String

No

Yes

The title.

If you do not specify this property, the system generates a title based on the current date.

-   The title can be up to 128 bytes in length.
    
-   The title must be encoded in UTF-8.
    

UserData

Map

No

Yes

The user data.

You can configure a custom callback URL. For more information, see [Configure callback settings for completed editing jobs](/help/en/ims/use-cases/to-configure-a-callback-when-a-clip-completes).

-   The user data can be up to 1,024 bytes in length.
    
-   The user data must be encoded in UTF-8.
    
-   The user data must be in the JSON format.
    

WorkflowId

String

No

No

The ID of the workflow.

None.

## Return values

Fn::GetAtt

MediaId: the ID of the IMS media asset.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InputURL:
    Type: String
    Description:
      en: |-
        The URL of the media asset in another service. The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
        OSS URL in one of the following formats:
        http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
        oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
        URL of an ApsaraVideo VOD media asset
        vod://***20b48fb04483915d4f2cd8ac****
    Required: true
Resources:
  MediaInfo:
    Type: ALIYUN::ICE::MediaInfo
    Properties:
      InputURL:
        Ref: InputURL
Outputs:
  MediaId:
    Description: The ID of the media asset in IMS.
    Value:
      Fn::GetAtt:
        - MediaInfo
        - MediaId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InputURL": {
      "Type": "String",
      "Description": {
        "en": "The URL of the media asset in another service. The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:\nOSS URL in one of the following formats:\nhttp(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4\noss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.\nURL of an ApsaraVideo VOD media asset\nvod://***20b48fb04483915d4f2cd8ac****"
      },
      "Required": true
    }
  },
  "Resources": {
    "MediaInfo": {
      "Type": "ALIYUN::ICE::MediaInfo",
      "Properties": {
        "InputURL": {
          "Ref": "InputURL"
        }
      }
    }
  },
  "Outputs": {
    "MediaId": {
      "Description": "The ID of the media asset in IMS.",
      "Value": {
        "Fn::GetAtt": [
          "MediaInfo",
          "MediaId"
        ]
      }
    }
  }
}
                        
```
