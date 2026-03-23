ALIYUN::CloudSSO::SCIMSynchronization is used to enable or disable System for Cross-domain Identity Management (SCIM) synchronization.

## Syntax

```
{
  "Type": "ALIYUN::CloudSSO::SCIMSynchronization",
  "Properties": {
    "DirectoryId": String,
    "SCIMSynchronizationStatus": String
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

DirectoryId

String

Yes

No

The directory ID.

None.

SCIMSynchronizationStatus

String

No

Yes

The status of SCIM synchronization.

Valid values:

-   Enabled
    
-   Disabled
    

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DirectoryId:
    Description:
      en: The ID of the directory.
    Required: true
    Type: String
  SCIMSynchronizationStatus:
    AllowedValues:
    - Enabled
    - Disabled
    Default: Enabled
    Description:
      en: 'The status of SCIM synchronization. Valid values:
        - Enabled
        - Disabled
        The default value is Enabled.'
    Required: false
    Type: String
Resources:
  ScimSynchronization:
    Properties:
      DirectoryId:
        Ref: DirectoryId
      SCIMSynchronizationStatus:
        Ref: SCIMSynchronizationStatus
    Type: ALIYUN::CloudSSO::SCIMSynchronization
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DirectoryId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the directory."
      },
      "Required": true
    },
    "SCIMSynchronizationStatus": {
      "Type": "String",
      "Description": {
        "en": "The status of SCIM synchronization. Valid values:\n- Enabled\n- Disabled\nThe default value is Enabled."
      },
      "AllowedValues": [
        "Enabled",
        "Disabled"
      ],
      "Required": false,
      "Default": "Enabled"
    }
  },
  "Resources": {
    "ScimSynchronization": {
      "Type": "ALIYUN::CloudSSO::SCIMSynchronization",
      "Properties": {
        "DirectoryId": {
          "Ref": "DirectoryId"
        },
        "SCIMSynchronizationStatus": {
          "Ref": "SCIMSynchronizationStatus"
        }
      }
    }
  }
}
                        
```
