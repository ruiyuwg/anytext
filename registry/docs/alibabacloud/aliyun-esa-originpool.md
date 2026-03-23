The ALIYUN::ESA::OriginPool type creates an origin address pool.

## Syntax

```
{
  "Type": "ALIYUN::ESA::OriginPool",
  "Properties": {
    "OriginPoolName": String,
    "SiteId": Integer,
    "Enabled": Boolean,
    "Origins": List
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

OriginPoolName

String

Yes

No

The name of the origin address pool.

The name of the origin address pool must be unique within a site.

SiteId

Integer

Yes

No

The site ID.

None

Enabled

Boolean

No

Yes

Specifies whether to enable the origin address pool.

Valid values:

-   true: Enabled.
    
-   false: Disabled.
    

Origins

List

No

Yes

The information about the origin servers added to the origin address pool.

To specify multiple origin servers, use an array. For more information, see [Origins properties](#ec7068446fd66).

## Origins syntax

```
"Origins": [
  {
    "Type": String,
    "Header": String,
    "Address": String,
    "Enabled": Boolean,
    "AuthConf": Map,
    "OriginId": Integer,
    "Weight": Integer,
    "Name": String
  }
]
```

## Origins properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Address

String

No

Yes

The address of the origin server.

None

AuthConf

Map

No

Yes

The authentication information.

If the origin server is an OSS or S3 bucket that requires authentication, you must provide the authentication configuration. For more information, see [AuthConf properties](#234a47f36fyvc).

Enabled

Boolean

No

Yes

Specifies whether to enable the origin server.

Valid values:

-   true
    
-   false
    

Header

String

No

Yes

The request header sent during origin rules requests.

Only the Host header is supported.

Name

String

No

Yes

The name of the origin server.

The name of the origin server must be unique within an origin address.

OriginId

Integer

No

No

The origin server ID.

None

Type

String

No

Yes

The type of the origin server.

Valid values:

-   ip\_domain: An origin server of the IP or domain name type.
    
-   OSS: An OSS bucket.
    
-   S3: An AWS S3 bucket.
    

Weight

Integer

No

Yes

The weight.

An integer from 0 to 100.

## AuthConf syntax

```
"AuthConf": {
  "SecretKey": String,
  "Version": String,
  "Region": String,
  "AccessKey": String,
  "AuthType": String
}
```

## AuthConf properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

AccessKey

String

No

Yes

The AccessKey for private authentication.

None

AuthType

String

No

Yes

The authentication type.

Valid values:

-   public: Public-read-write. Use this value if the origin server is an OSS or S3 bucket with public-read-write permissions.
    
-   private\_same\_account: Private (same account). Use this value if the origin server is an OSS bucket that uses private authentication within the same account.
    
-   private\_cross\_account: Private (cross-account). Use this value if the origin server is an OSS bucket that uses private cross-account authentication.
    
-   private: Private. Use this value if the origin server is an S3 bucket that uses private authentication.
    

Region

String

No

Yes

The region of the origin server. This parameter is required if the origin server is an AWS S3 bucket.

None

SecretKey

String

No

Yes

The SecretKey for private authentication.

None

Version

String

No

Yes

The signature version. This parameter is required if the origin server is an AWS S3 bucket.

None

## Return values

Fn::GetAtt

-   RecordName: The name of the record.
    
-   Origins: Information about the origin servers in the origin address pool.
    
-   SiteId: The ID of the site.
    
-   OriginPoolId: The ID of the origin address pool.
    
-   ReferenceLBCount: The number of Server Load Balancers that reference the pool.
    
-   References: The references to the origin address pool.
    
-   Enabled: Indicates whether the origin address pool is enabled.
    
-   OriginPoolName: The name of the origin address pool.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Origins:
    AssociationPropertyMetadata:
      Parameter:
        AssociationPropertyMetadata:
          Parameters:
            Type:
              Type: String
              Description:
                en: |-
                  The type of the origin server. Valid values:
                  - ip_domain: An origin server of the IP or domain name type.
                  - OSS: An OSS bucket.
                  - S3: An AWS S3 bucket.
              AllowedValues:
                - ip_domain
                - OSS
                - S3
              Required: false
            Header:
              Type: String
              Description:
                en: The request header sent during origin rules requests. Only the Host header is supported.
              Required: false
            Address:
              Type: String
              Description:
                en: The address of the origin server.
              Required: false
            Enabled:
              Type: Boolean
              Description:
                en: |-
                  Specifies whether to enable the origin server. Valid values:
                  - true: The origin server is enabled.
                  - false: The origin server is disabled.
              Required: false
            AuthConf:
              AssociationPropertyMetadata:
                Parameters:
                  SecretKey:
                    Type: String
                    Description:
                      en: The SecretKey for private authentication. This parameter is required if AuthType is set to private_cross_account or private.
                    Required: false
                  Version:
                    Type: String
                    Description:
                      en: The signature version. This parameter is required if the origin server is an AWS S3 bucket.
                    Required: false
                  Region:
                    Type: String
                    Description:
                      en: The region of the origin server. This parameter is required if the origin server is an AWS S3 bucket.
                    Required: false
                  AccessKey:
                    Type: String
                    Description:
                      en: The AccessKey for private authentication. This parameter is required if AuthType is set to private_cross_account or private.
                    Required: false
                  AuthType:
                    Type: String
                    Description:
                      en: |-
                        The authentication type. Valid values:
                        - public: Public-read-write. Use this value if the origin server is an OSS or S3 bucket with public-read-write permissions.
                        - private_same_account: Private (same account). Use this value if the origin server is an OSS bucket that uses private authentication within the same account.
                        - private_cross_account: Private (cross-account). Use this value if the origin server is an OSS bucket that uses private cross-account authentication.
                        - private: Private. Use this value if the origin server is an S3 bucket that uses private authentication.
                    AllowedValues:
                      - public
                      - private_same_account
                      - private_cross_account
                      - private
                    Required: false
              Type: Json
              Description:
                en: The authentication information. This parameter is required if the origin server is an OSS or S3 bucket that requires authentication.
              Required: false
            OriginId:
              Type: Number
              Description:
                en: The origin server ID.
              Required: false
            Weight:
              Type: Number
              Description:
                en: The weight. The value must be an integer from 0 to 100.
              Required: false
              MinValue: 0
              MaxValue: 100
            Name:
              Type: String
              Description:
                en: The name of the origin server. The name must be unique within an origin address.
              Required: false
        Type: Json
        Description:
          en: The information about the origin servers in the address pool. To specify multiple origin servers, use an array.
        Required: false
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: The information about the origin servers in the address pool. To specify multiple origin servers, use an array.
    Required: false
  SiteId:
    Type: Number
    Description:
      en: The site ID.
    Required: true
  OriginPoolName:
    Type: String
    Description:
      en: The name of the origin address pool.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::OriginPool
    Properties:
      Origins:
        Ref: Origins
      SiteId:
        Ref: SiteId
      OriginPoolName:
        Ref: OriginPoolName
Outputs:
  RecordName:
    Description: The domain name assigned to the origin address pool. You can use this domain name as the origin address for the site.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RecordName
  Origins:
    Description: The information about the origin servers added to the origin address pool. To specify multiple origin servers, use an array.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Origins
  SiteId:
    Description: The site ID.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteId
  OriginPoolId:
    Description: The ID of the origin address pool.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - OriginPoolId
  ReferenceLBCount:
    Description: The number of Server Load Balancers that reference the pool.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ReferenceLBCount
  References:
    Description: The reference information of the origin address pool. This information is available when the pool is configured by a Server Load Balancer or used as an origin server.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - References
  Enabled:
    Description: Indicates whether the origin address pool is enabled.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Enabled
  OriginPoolName:
    Description: The name of the origin address pool.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - OriginPoolName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Origins": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "AssociationPropertyMetadata": {
            "Parameters": {
              "Type": {
                "Type": "String",
                "Description": {
                  "en": "The type of the origin server. Valid values:\nip_domain: An origin server of the IP or domain name type.\nOSS: An OSS bucket.\nS3: An AWS S3 bucket."
                },
                "AllowedValues": [
                  "ip_domain",
                  "OSS",
                  "S3"
                ],
                "Required": false
              },
              "Header": {
                "Type": "String",
                "Description": {
                  "en": "The request header sent during origin rules requests. Only the Host header is supported."
                },
                "Required": false
              },
              "Address": {
                "Type": "String",
                "Description": {
                  "en": "The address of the origin server."
                },
                "Required": false
              },
              "Enabled": {
                "Type": "Boolean",
                "Description": {
                  "en": "Specifies whether to enable the origin server. Valid values:\n- true: The origin server is enabled.\n- false: The origin server is disabled."
                },
                "Required": false
              },
              "AuthConf": {
                "AssociationPropertyMetadata": {
                  "Parameters": {
                    "SecretKey": {
                      "Type": "String",
                      "Description": {
                        "en": "The SecretKey for private authentication. This parameter is required if AuthType is set to private_cross_account or private."
                      },
                      "Required": false
                    },
                    "Version": {
                      "Type": "String",
                      "Description": {
                        "en": "The signature version. This parameter is required if the origin server is an AWS S3 bucket."
                      },
                      "Required": false
                    },
                    "Region": {
                      "Type": "String",
                      "Description": {
                        "en": "The region of the origin server. This parameter is required if the origin server is an AWS S3 bucket."
                      },
                      "Required": false
                    },
                    "AccessKey": {
                      "Type": "String",
                      "Description": {
                        "en": "The AccessKey for private authentication. This parameter is required if AuthType is set to private_cross_account or private."
                      },
                      "Required": false
                    },
                    "AuthType": {
                      "Type": "String",
                      "Description": {
                        "en": "The authentication type. Valid values:\n- public: Public-read-write. Use this value if the origin server is an OSS or S3 bucket with public-read-write permissions.\n- private_same_account: Private (same account). Use this value if the origin server is an OSS bucket that uses private authentication within the same account.\n- private_cross_account: Private (cross-account). Use this value if the origin server is an OSS bucket that uses private cross-account authentication.\n- private: Private. Use this value if the origin server is an S3 bucket that uses private authentication."
                      },
                      "AllowedValues": [
                        "public",
                        "private_same_account",
                        "private_cross_account",
                        "private"
                      ],
                      "Required": false
                    }
                  }
                },
                "Type": "Json",
                "Description": {
                  "en": "The authentication information. This parameter is required if the origin server is an OSS or S3 bucket that requires authentication."
                },
                "Required": false
              },
              "OriginId": {
                "Type": "Number",
                "Description": {
                  "en": "The origin server ID."
                },
                "Required": false
              },
              "Weight": {
                "Type": "Number",
                "Description": {
                  "en": "The weight. The value must be an integer from 0 to 100."
                },
                "Required": false,
                "MinValue": 0,
                "MaxValue": 100
              },
              "Name": {
                "Type": "String",
                "Description": {
                  "en": "The name of the origin server. The name must be unique within an origin address."
                },
                "Required": false
              }
            }
          },
          "Type": "Json",
          "Description": {
            "en": "The information about the origin servers in the address pool. To specify multiple origin servers, use an array."
          },
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The information about the origin servers in the address pool. To specify multiple origin servers, use an array."
      },
      "Required": false
    },
    "SiteId": {
      "Type": "Number",
      "Description": {
        "en": "The site ID."
      },
      "Required": true
    },
    "OriginPoolName": {
      "Type": "String",
      "Description": {
        "en": "The name of the origin address pool."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::OriginPool",
      "Properties": {
        "Origins": {
          "Ref": "Origins"
        },
        "SiteId": {
          "Ref": "SiteId"
        },
        "OriginPoolName": {
          "Ref": "OriginPoolName"
        }
      }
    }
  },
  "Outputs": {
    "RecordName": {
      "Description": "The domain name assigned to the origin address pool. You can use this domain name as the origin address for the site.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RecordName"
        ]
      }
    },
    "Origins": {
      "Description": "The information about the origin servers added to the origin address pool. To specify multiple origin servers, use an array.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Origins"
        ]
      }
    },
    "SiteId": {
      "Description": "The site ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteId"
        ]
      }
    },
    "OriginPoolId": {
      "Description": "The ID of the origin address pool.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OriginPoolId"
        ]
      }
    },
    "ReferenceLBCount": {
      "Description": "The number of Server Load Balancers that reference the pool.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ReferenceLBCount"
        ]
      }
    },
    "References": {
      "Description": "The reference information of the origin address pool. This information is available when the pool is configured by a Server Load Balancer or used as an origin server.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "References"
        ]
      }
    },
    "Enabled": {
      "Description": "Indicates whether the origin address pool is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Enabled"
        ]
      }
    },
    "OriginPoolName": {
      "Description": "The name of the origin address pool.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OriginPoolName"
        ]
      }
    }
  }
}
                        
```
