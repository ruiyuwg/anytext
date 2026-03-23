ALIYUN::ICE::InsertMediaToSearchLib is used to add a media asset to a search library.

## Syntax

```
{
  "Type": "ALIYUN::ICE::InsertMediaToSearchLib",
  "Properties": {
    "Input": String,
    "MediaId": String,
    "MediaType": String,
    "MsgBody": Map,
    "SearchLibName": String
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

Input

String

Yes

No

The URL of the video, audio, or image file that you want to add to the search library.

None.

MediaId

String

No

No

The ID of the media asset.

None.

MediaType

String

No

No

The type of the media asset.

Valid values:

-   video (default)
    
-   image
    
-   audio
    

MsgBody

Map

No

Yes

The message body of the media asset.

None.

SearchLibName

String

No

No

The name of the search library.

None.

## Return values

Fn::GetAtt

MediaId: the ID of the media asset.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Input:
    Type: String
    Description:
      en: |-
        The URL of the video, audio, or image file that you want to import to the search library.
        Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
        Specify an Object Storage Service (OSS) URL in the following format: oss://[Bucket name]/[File path]. For example, you can specify oss://[example-bucket-]/[object_path-].
        Specify an HTTP URL in the following format: public endpoint. For example, you can specify http://example-test-****.mp4.
    Required: true
    Default: http://example-test.mp4
Resources:
  InsertMediaToSearchLib:
    Type: ALIYUN::ICE::InsertMediaToSearchLib
    Properties:
      Input:
        Ref: Input
Outputs:
  MediaId:
    Description: The ID of the media asset.
    Value:
      Fn::GetAtt:
        - InsertMediaToSearchLib
        - MediaId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Input": {
      "Type": "String",
      "Description": {
        "en": "The URL of the video, audio, or image file that you want to import to the search library.\nNote: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.\nSpecify an Object Storage Service (OSS) URL in the following format: oss://[Bucket name]/[File path]. For example, you can specify oss://[example-bucket-]/[object_path-].\nSpecify an HTTP URL in the following format: public endpoint. For example, you can specify http://example-test-****.mp4."
      },
      "Required": true,
      "Default": "http://example-test.mp4"
    }
  },
  "Resources": {
    "InsertMediaToSearchLib": {
      "Type": "ALIYUN::ICE::InsertMediaToSearchLib",
      "Properties": {
        "Input": {
          "Ref": "Input"
        }
      }
    }
  },
  "Outputs": {
    "MediaId": {
      "Description": "The ID of the media asset.",
      "Value": {
        "Fn::GetAtt": [
          "InsertMediaToSearchLib",
          "MediaId"
        ]
      }
    }
  }
}
                        
```
