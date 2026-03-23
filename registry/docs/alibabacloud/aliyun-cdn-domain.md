ALIYUN::CDN::Domain is used to add an accelerated domain name.

**Note**

-   Before you add an accelerated domain name, activate Alibaba Cloud CDN (CDN). For more information, see [Activate Alibaba Cloud CDN](/help/en/cdn/activate-alibaba-cloud-cdn#task-187531).
    
-   The domain name must be ICP filed.
    
-   You can add only a single domain name to CDN in each call. You can add up to 50 domain names by using an Alibaba Cloud account.
    
-   If the content of the origin server is not stored on Alibaba Cloud, the content must be reviewed. The review will be completed by the end of the next business day after you submit the application.
    
-   The maximum number of times that each user can call this operation per second is 30.
    

## Syntax

```
{
  "Type": "ALIYUN::CDN::Domain",
  "Properties": {
    "CdnType": String,
    "Sources": String,
    "CheckUrl": String,
    "DomainName": String,
    "ResourceGroupId": String,
    "Scope": String,
    "TopLevelDomain": String,
    "Tags": List,
    "OriginServers": List
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

CdnType

String

Yes

No

The workload type of the accelerated domain name.

Valid values:

-   web: images and small files
    
-   download: downloads of large files
    
-   video: on-demand video and audio streaming
    

DomainName

String

Yes

No

The accelerated domain name that you want to add to CDN.

Wildcard domain names are supported. The domain name must start with a period (.).

Example: `.example.com`.

CheckUrl

String

No

No

The URL that is used for health checks.

Example: `example.com/test.html`.

OriginServers

List

No

No

The configurations of the addresses of origin servers.

The OriginServers property has the same effect as the Sources property. However, the OriginServers property takes precedence over the Sources property. You can specify up to 20 sets of configurations. For more information, see [OriginServers properties](#36a8a32371ptk).

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

Scope

String

No

No

The acceleration region.

Valid values:

-   domestic (default): Chinese mainland
    
-   overseas: global (excluding the Chinese mainland)
    
-   global: global
    

Sources

String

No

Yes

The configurations of the addresses of origin servers.

Example: `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`.

Tags

List

No

Yes

The tags.

You can add up to 20 tags.

For more information, see [Tags properties](#section-ou8-h7a-6nx).

TopLevelDomain

String

No

Yes

The root domain name.

Example: www.yourTopLevelDomain.

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]  
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The tag key.

The tag key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Value

String

No

No

The tag value.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## OriginServers syntax

```
"OriginServers": [
  {
    "Port": Integer,
    "Weight": String,
    "Priority": String,
    "Content": String,
    "Type": String
  }
]  
```

## OriginServers properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Content

String

Yes

No

The address of the origin server.

You can specify an IP address or a domain name.

Type

String

Yes

No

The type of the origin server.

Valid values:

-   ipaddr: The origin server uses an IP address.
    
-   domain: The origin server uses a domain name.
    
-   oss: The origin server uses an Object Storage Service (OSS) bucket.
    
-   fc\_domain: The origin server uses a Function Compute domain name.
    

Port

Integer

No

No

The port.

You can specify port 443, port 80, or a custom port. Default value: 80. If you specify port 443, CDN communicates with the origin server over HTTPS.

Priority

String

No

No

The priority of the origin server.

Valid values: 20 and 30. Default value: 20. A value of 20 indicates that the origin server is a primary one. A value of 30 indicates that the origin server is a secondary one.

Weight

String

No

No

The weight of the origin server.

Valid values: a numeric value that is less than 100. Default value: 10.

## Return values

Fn::GetAtt

-   DomainName: the accelerated domain name that is added to CDN.
    
-   Cname: the alias of the accelerated domain name. A canonical name (CNAME) is provided to the Domain Name System (DNS) to map the accelerated domain name to the CNAME.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
 CdnType:
  AllowedValues:
  - video
  - download
  - web
  - liveStream
  Description: 'The business type. Valid values: web, download, video, livestream,
   and httpsdelivery. web: acceleration of images and small files download. download:
   acceleration of large file downloads. video: live streaming acceleration. httpsdelivery:
   SSL acceleration for HTTPS.'
  Type: String
 CheckUrl:
  Description: The validation of the origin.
  Type: String
 DomainName:
  Description: The CDN domain name. Wildcard domain names that start with periods
   (.) are supported. For example, .example.com.
  Type: String
 ResourceGroupId:
  Description: The ID of the resource group. If this is left blank, the system automatically
   fills in the ID of the default resource group.
  Type: String
 Scope:
  Description: 'Valid values: domestic, overseas, and global. Default value: domestic.
   The setting is supported for users outside mainland China, users in mainland
   China of level 3 or above.'
  Type: String
 Sources:
  Description: The list of origin URLs.
  Type: String
 Tags:
  Description: Tags to attach to instance. Max support 20 tags to add during create
   instance. Each tag with two properties Key and Value, and Key is required.
  MaxLength: 20
  Type: Json
 TopLevelDomain:
  Description: The top-level domain, which can only be configured by users on the
   whitelist.
  Type: String
Resources:
 Domain:
  Properties:
   CdnType:
    Ref: CdnType
   CheckUrl:
    Ref: CheckUrl
   DomainName:
    Ref: DomainName
   ResourceGroupId:
    Ref: ResourceGroupId
   Scope:
    Ref: Scope
   Sources:
    Ref: Sources
   Tags:
    Ref: Tags
   TopLevelDomain:
    Ref: TopLevelDomain
  Type: ALIYUN::CDN::Domain
Outputs:
 Cname:
  Description: The CNAME generated for the CDN domain.You must add a CNAME record
   with your DNS provider to map the CDN domain name to the CNAME.
  Value:
   Fn::GetAtt:
   - Domain
   - Cname
 DomainName:
  Description: The CDN domain name. Wildcard domain names that start with periods
   (.) are supported. For example, .example.com.
  Value:
   Fn::GetAtt:
   - Domain
   - DomainName
```

## `JSON` format

```
{
 "ROSTemplateFormatVersion": "2015-09-01",
 "Parameters": {
  "CheckUrl": {
   "Type": "String",
   "Description": "The validation of the origin."
  },
  "ResourceGroupId": {
   "Type": "String",
   "Description": "The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group."
  },
  "Scope": {
   "Type": "String",
   "Description": "Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above."
  },
  "DomainName": {
   "Type": "String",
   "Description": "The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .example.com."
  },
  "CdnType": {
   "Type": "String",
   "Description": "The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.",
   "AllowedValues": [
    "video",
    "download",
    "web",
    "liveStream"
   ]
  },
  "TopLevelDomain": {
   "Type": "String",
   "Description": "The top-level domain, which can only be configured by users on the whitelist."
  },
  "Sources": {
   "Type": "String",
   "Description": "The list of origin URLs."
  },
  "Tags": {
   "Type": "Json",
   "Description": "Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.",
   "MaxLength": 20
  }
 },
 "Resources": {
  "Domain": {
   "Type": "ALIYUN::CDN::Domain",
   "Properties": {
    "CheckUrl": {
     "Ref": "CheckUrl"
    },
    "ResourceGroupId": {
     "Ref": "ResourceGroupId"
    },
    "Scope": {
     "Ref": "Scope"
    },
    "DomainName": {
     "Ref": "DomainName"
    },
    "CdnType": {
     "Ref": "CdnType"
    },
    "TopLevelDomain": {
     "Ref": "TopLevelDomain"
    },
    "Sources": {
     "Ref": "Sources"
    },
    "Tags": {
     "Ref": "Tags"
    }
   }
  }
 },
 "Outputs": {
  "DomainName": {
   "Description": "The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .example.com.",
   "Value": {
    "Fn::GetAtt": [
     "Domain",
     "DomainName"
    ]
   }
  },
  "Cname": {
   "Description": "The CNAME generated for the CDN domain.You must add a CNAME record with your DNS provider to map the CDN domain name to the CNAME.",
   "Value": {
    "Fn::GetAtt": [
     "Domain",
     "Cname"
    ]
   }
  }
 }
}
```
