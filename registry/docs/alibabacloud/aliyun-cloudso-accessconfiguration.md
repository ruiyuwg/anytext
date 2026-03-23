ALIYUN::CloudSSO::AccessConfiguration is used to create an access configuration.

## Syntax

```
{
  "Type": "ALIYUN::CloudSSO::AccessConfiguration",
  "Properties": {
    "SessionDuration": Integer,
    "AccessConfigurationName": String,
    "DirectoryId": String,
    "RelayState": String,
    "Description": String
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

AccessConfigurationName

String

Yes

No

The name of the access configuration.

The name can contain letters, digits, and hyphens (-).

It can be up to 32 characters in length.

DirectoryId

String

Yes

No

The directory ID.

None.

Description

String

No

Yes

The description of the access configuration.

The description can be up to 1,024 characters in length.

RelayState

String

No

Yes

The initial web page displayed after a CloudSSO user uses the access configuration to access an account in your resource directory.

The web page must be a page of the Alibaba Cloud Management Console. By default, this property is empty. This indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.

SessionDuration

Integer

No

Yes

The duration of a session in which a CloudSSO user uses the access configuration to access an account in your resource directory.

Unit: seconds.

Valid values: 900 to 43200. The valid values are equivalent to a time range from 15 minutes to 12 hours.

Default value: 3600. A value of 3600 specifies 1 hour.

## Return values

Fn::GetAtt

AccessConfigurationId: the ID of the access configuration.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AccessConfigurationName:
    AllowedPattern: ^[a-zA-Z0-9-]{1,32}$
    Description:
      en: 'The name of the access configuration.

        The name can contain letters, digits, and hyphens (-).

        The name can be up to 32 characters in length.'
    Required: true
    Type: String
  Description:
    AssociationProperty: TextArea
    Description:
      en: 'The description of the access configuration.

        The description can be up to 1,024 characters in length.'
    MaxLength: 1024
    Required: false
    Type: String
  DirectoryId:
    Description:
      en: The ID of the directory.
    Required: true
    Type: String
  RelayState:
    Description:
      en: 'The initial web page that is displayed after a CloudSSO user accesses an
        account in your resource directory by using the access configuration.

        The web page must be a page of the Alibaba Cloud Management Console. By default,
        this parameter is empty, which indicates that the initial web page is the
        homepage of the Alibaba Cloud Management Console.'
    Required: false
    Type: String
  SessionDuration:
    Description:
      en: 'The duration of a session in which a CloudSSO user accesses an account
        in your resource directory by using the access configuration.

        Unit: seconds.

        Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value
        43200 indicates 12 hours.

        Default value: 3600. The value indicates 1 hour.'
    MaxValue: 43200
    MinValue: 900
    Required: false
    Type: Number
Resources:
  AccessConfiguration:
    Properties:
      AccessConfigurationName:
        Ref: AccessConfigurationName
      Description:
        Ref: Description
      DirectoryId:
        Ref: DirectoryId
      RelayState:
        Ref: RelayState
      SessionDuration:
        Ref: SessionDuration
    Type: ALIYUN::CloudSSO::AccessConfiguration
Outputs:
  AccessConfigurationId:
    Description: The ID of the access configuration.
    Value:
      Fn::GetAtt:
      - AccessConfiguration
      - AccessConfigurationId
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SessionDuration": {
      "Type": "Number",
      "Description": {
        "en": "The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.\nUnit: seconds.\nValid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.\nDefault value: 3600. The value indicates 1 hour."
      },
      "Required": false,
      "MinValue": 900,
      "MaxValue": 43200
    },
    "AccessConfigurationName": {
      "Type": "String",
      "Description": {
        "en": "The name of the access configuration.\nThe name can contain letters, digits, and hyphens (-).\nThe name can be up to 32 characters in length."
      },
      "AllowedPattern": "^[a-zA-Z0-9-]{1,32}$",
      "Required": true
    },
    "DirectoryId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the directory."
      },
      "Required": true
    },
    "RelayState": {
      "Type": "String",
      "Description": {
        "en": "The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.\nThe web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console."
      },
      "Required": false
    },
    "Description": {
      "AssociationProperty": "TextArea",
      "Type": "String",
      "Description": {
        "en": "The description of the access configuration.\nThe description can be up to 1,024 characters in length."
      },
      "Required": false,
      "MaxLength": 1024
    }
  },
  "Resources": {
    "AccessConfiguration": {
      "Type": "ALIYUN::CloudSSO::AccessConfiguration",
      "Properties": {
        "SessionDuration": {
          "Ref": "SessionDuration"
        },
        "AccessConfigurationName": {
          "Ref": "AccessConfigurationName"
        },
        "DirectoryId": {
          "Ref": "DirectoryId"
        },
        "RelayState": {
          "Ref": "RelayState"
        },
        "Description": {
          "Ref": "Description"
        }
      }
    }
  },
  "Outputs": {
    "AccessConfigurationId": {
      "Description": "The ID of the access configuration.",
      "Value": {
        "Fn::GetAtt": [
          "AccessConfiguration",
          "AccessConfigurationId"
        ]
      }
    }
  }
}
                        
```
