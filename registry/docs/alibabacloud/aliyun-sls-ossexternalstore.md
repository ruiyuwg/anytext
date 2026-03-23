ALIYUN::SLS::OssExternalStore is used to create an Object Storage Service (OSS) external store.

## Syntax

```
{
  "Type": "ALIYUN::SLS::OssExternalStore",
  "Properties": {
    "AccessId": String,
    "AccessKey": String,
    "Bucket": String,
    "Columns": List,
    "Endpoint": String,
    "ExternalStoreName": String,
    "Objects": List,
    "Project": String,
    "StoreType": String
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

AccessId

String

Yes

Yes

The AccessKey ID.

None.

AccessKey

String

Yes

Yes

The AccessKey secret.

None.

Bucket

String

Yes

Yes

The name of the OSS bucket.

None.

Columns

List

Yes

Yes

The fields that you want to associate with the external store.

None.

Endpoint

String

Yes

Yes

The OSS endpoint.

None.

ExternalStoreName

String

Yes

No

The name of the external store.

None.

Objects

List

Yes

Yes

The names of the OSS objects that you want to associate with the external store.

You can associate up to 100 OSS objects.

Project

String

Yes

No

The project name.

None.

StoreType

String

Yes

No

The type of the external store.

Set the value to oss.

## Columns syntax

```
"Columns": [
  {
    "Type": String,
    "Name": String
  }
]
```

## Columns properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Name

String

Yes

Yes

The field name.

None.

Type

String

Yes

Yes

The data type of the field.

Valid values:

-   varchar
    
-   bigint
    
-   double
    

## Return values

Fn::GetAtt

-   Project: the project name.
    
-   ExternalStoreName: the name of the external store.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  StoreType:
    Type: String
    Description:
      en: The type of the external store. Set the value to oss.
    AllowedValues:
      - oss
    Required: true
  Project:
    Type: String
    Description:
      en: A short description of struct
    Required: true
  Endpoint:
    Type: String
    Description:
      en: The OSS endpoint.
    Required: true
  Bucket:
    Type: String
    Description:
      en: The name of the OSS bucket.
    Required: true
  AccessId:
    Type: String
    Description:
      en: The AccessKey ID.
    Required: true
  Objects:
    AssociationPropertyMetadata:
      Parameter:
        Type: String
        Required: false
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: 'The associated OSS objects. Valid values of n: 1 to 100.'
    Required: true
    MinLength: 1
    MaxLength: 100
  Columns:
    AssociationPropertyMetadata:
      Parameters:
        Type:
          Type: String
          Description:
            en: The data type of the field.
          AllowedValues:
            - varchar
            - bigint
            - double
          Required: true
        Name:
          Type: String
          Description:
            en: The name of the field.
          Required: true
    AssociationProperty: List[Parameters]
    Type: Json
    Description:
      en: The associated fields.
    Required: true
  AccessKey:
    Type: String
    Description:
      en: The AccessKey secret.
    Required: true
  ExternalStoreName:
    Type: String
    Description:
      en: The name of the external store.
    Required: true
Resources:
  OssExternalStore:
    Type: ALIYUN::SLS::OssExternalStore
    Properties:
      StoreType:
        Ref: StoreType
      Project:
        Ref: Project
      Endpoint:
        Ref: Endpoint
      Bucket:
        Ref: Bucket
      AccessId:
        Ref: AccessId
      Objects:
        Ref: Objects
      Columns:
        Ref: Columns
      AccessKey:
        Ref: AccessKey
      ExternalStoreName:
        Ref: ExternalStoreName
Outputs:
  Project:
    Description: The name of the project to which the external store belongs.
    Value:
      Fn::GetAtt:
        - OssExternalStore
        - Project
  ExternalStoreName:
    Description: The name of the external store.
    Value:
      Fn::GetAtt:
        - OssExternalStore
        - ExternalStoreName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "StoreType": {
      "Type": "String",
      "Description": {
        "en": "The type of the external store. Set the value to oss."
      },
      "AllowedValues": [
        "oss"
      ],
      "Required": true
    },
    "Project": {
      "Type": "String",
      "Description": {
        "en": "A short description of struct"
      },
      "Required": true
    },
    "Endpoint": {
      "Type": "String",
      "Description": {
        "en": "The OSS endpoint."
      },
      "Required": true
    },
    "Bucket": {
      "Type": "String",
      "Description": {
        "en": "The name of the OSS bucket."
      },
      "Required": true
    },
    "AccessId": {
      "Type": "String",
      "Description": {
        "en": "The AccessKey ID."
      },
      "Required": true
    },
    "Objects": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The associated OSS objects. Valid values of n: 1 to 100."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 100
    },
    "Columns": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "Type": {
            "Type": "String",
            "Description": {
              "en": "The data type of the field."
            },
            "AllowedValues": [
              "varchar",
              "bigint",
              "double"
            ],
            "Required": true
          },
          "Name": {
            "Type": "String",
            "Description": {
              "en": "The name of the field."
            },
            "Required": true
          }
        }
      },
      "AssociationProperty": "List[Parameters]",
      "Type": "Json",
      "Description": {
        "en": "The associated fields."
      },
      "Required": true
    },
    "AccessKey": {
      "Type": "String",
      "Description": {
        "en": "The AccessKey secret."
      },
      "Required": true
    },
    "ExternalStoreName": {
      "Type": "String",
      "Description": {
        "en": "The name of the external store."
      },
      "Required": true
    }
  },
  "Resources": {
    "OssExternalStore": {
      "Type": "ALIYUN::SLS::OssExternalStore",
      "Properties": {
        "StoreType": {
          "Ref": "StoreType"
        },
        "Project": {
          "Ref": "Project"
        },
        "Endpoint": {
          "Ref": "Endpoint"
        },
        "Bucket": {
          "Ref": "Bucket"
        },
        "AccessId": {
          "Ref": "AccessId"
        },
        "Objects": {
          "Ref": "Objects"
        },
        "Columns": {
          "Ref": "Columns"
        },
        "AccessKey": {
          "Ref": "AccessKey"
        },
        "ExternalStoreName": {
          "Ref": "ExternalStoreName"
        }
      }
    }
  },
  "Outputs": {
    "Project": {
      "Description": "The name of the project to which the external store belongs.",
      "Value": {
        "Fn::GetAtt": [
          "OssExternalStore",
          "Project"
        ]
      }
    },
    "ExternalStoreName": {
      "Description": "The name of the external store.",
      "Value": {
        "Fn::GetAtt": [
          "OssExternalStore",
          "ExternalStoreName"
        ]
      }
    }
  }
}
                        
```
