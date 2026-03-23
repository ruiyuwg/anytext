DATASOURCE::CloudPhone::Images is used to query the information about available images.

## Syntax

```
{
  "Type": "DATASOURCE::CloudPhone::Images",
  "Properties": {
    "ImageName": String,
    "ImageCategory": String,
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

ImageName

String

No

Yes

The image name.

The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

ImageCategory

String

No

Yes

The image source.

Valid values:

-   system: a public image provided by Alibaba Cloud
    
-   self: a custom image that you create
    
-   others: a shared image from another Alibaba Cloud account
    

ImageId

String

No

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

-   ImageIds: the IDs of the images.
    
-   Images: details of the images.
    

**Property**

**Type**

**Description**

**Constraint**

ImageIds

List

The IDs of the images.

None.

Images

List

Details of the images.

None.

Status

String

The state of the image.

None.

Description

String

The description of the image.

None.

Usage

String

Indicates whether the image is used by a cloud phone.

None.

Platform

String

The distribution of the OS.

None.

OsNameEn

String

The display name of the OS in English.

None.

RegionId

String

The region ID.

None.

OsName

String

The display name of the OS in Chinese.

None.

ImageId

String

The image ID.

None.

IsSelfShared

String

Indicates whether the image is shared with other Alibaba Cloud accounts.

None.

ImageName

String

The image name.

None.

OsType

String

The OS type.

None.

Progress

String

The progress of image creation.

None.

CreateTime

String

The time when the image was created.

None.

ImageCategory

String

The image type.

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ImageName:
    Description: The name of the mirror image.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      ImageName:
        Ref: ImageName
    Type: DATASOURCE::CloudPhone::Images
Outputs:
  ImageIds:
    Description: The list of image IDs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ImageIds
  Images:
    Description: The list of images.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Images
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ImageName": {
      "Type": "String",
      "Description": "The name of the mirror image."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CloudPhone::Images",
      "Properties": {
        "ImageName": {
          "Ref": "ImageName"
        }
      }
    }
  },
  "Outputs": {
    "ImageIds": {
      "Description": "The list of image IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ImageIds"
        ]
      }
    },
    "Images": {
      "Description": "The list of images.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Images"
        ]
      }
    }
  }
}
```
