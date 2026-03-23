Queries office network properties, including office network ID, name, status, and creation time.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeOfficeSites)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeOfficeSites)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) operation to query the most recent region list.

cn-hangzhou

OfficeSiteType

string

No

The account type of the office network.

**Valid values:**

-   SIMPLE :
    
    Convenience account
    
-   AD\_CONNECTOR :
    
    Enterprise Active Directory (AD) account
    

SIMPLE

MaxResults

integer

No

The number of entries to return on each page.

-   Maximum value: 100.
    
-   Default value: 10.
    

10

NextToken

string

No

The token that determines the start point of the next query.

caeba0bbb2be03f84eb48b699f0a4883

OfficeSiteId

array

No

The office network IDs. You can specify the IDs of 1 to 100 office networks.

cn-hangzhou+dir-363353\*\*\*\*

string

No

The office network ID.

cn-hangzhou+dir-363353\*\*\*\*

Status

string

No

The office network status.

**Valid values:**

-   REGISTERING :
    
    The office network is being registered.
    
-   DEREGISTERING :
    
    The office network is being deregistered.
    
-   REGISTERED :
    
    The office network is registered.
    
-   NEEDCONFIGTRUST :
    
    A trust relationship is required for the office network.
    
-   CONFIGTRUSTFAILED :
    
    A trust relationship fails to be configured for the office network.
    
-   DEREGISTERED :
    
    The office network is deregistered.
    
-   ERROR :
    
    One or more configurations of the office network are invalid.
    
-   CONFIGTRUSTING :
    
    A trust relationship is being configured for the office network.
    
-   NEEDCONFIGUSER :
    
    Users are required for the office network.
    

REGISTERED

SecurityProtection

string

No

The security protection setting of the office network.

**Valid values:**

-   SASE :
    
    SASE is configured.
    
-   OFF :
    
    No security protection setting is configured.
    

SASE

VpcId

string

No

The ID of the virtual private cloud (VPC).

AccountType

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

NextToken

string

The token that determines the start point of the next query. If this parameter is empty, all results are returned.

caeba0bbb2be03f84eb48b699f0a4883

RequestId

string

The ID of the request.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

TotalCount

integer

The total number of entries returned.

20

OfficeSites

array<object>

The office networks.

array<object>

The office network.

Status

string

The office network status.

**Valid values:**

-   REGISTERING :
    
    The office network is being registered.
    
-   DEREGISTERING :
    
    The office network is being deregistered.
    
-   REGISTERED :
    
    The office network is registered.
    
-   NEEDCONFIGTRUST :
    
    A trust relationship is required for the office network.
    
-   CONFIGTRUSTFAILED :
    
    A trust relationship fails to be configured for the office network.
    
-   DEREGISTERED :
    
    The office network is deregistered.
    
-   ERROR :
    
    One or more configurations of the office network are invalid.
    
-   CONFIGTRUSTING :
    
    A trust relationship is being configured for the office network.
    
-   NEEDCONFIGUSER :
    
    Users are required for the office network.
    

REGISTERED

CreationTime

string

The time when the office network was created.

2021-05-06T05:58Z

VpcId

string

The VPC ID.

vpc-uf6tz5k67puge5jn8\*\*\*\*

VpcType

string

The VPC type.

**Valid values:**

-   Basic :
    
-   Customized :
    
-   Standard :
    

Basic

EnableAdminAccess

boolean

Indicates whether the local administrator permissions are granted to users that are authorized to use cloud computers in the office network.

**Valid values:**

-   true :
    
    (default)
    
-   false :
    

true

EnableCrossDesktopAccess

boolean

Indicates whether the connection between cloud computers in the office network is enabled. After you enable the connection between cloud computers in the office network, cloud computers in the office network can access each other.

false

DesktopVpcEndpoint

string

The endpoint that is used to connect to cloud computers in the directory over a VPC.

http://ep-bp1s2vmbj55r5rzc\*\*\*\*.epsrv-bp1pcfhpwvlpny01\*\*\*\*.cn-hangzhou.privatelink.aliyuncs.com

DesktopAccessType

string

The method that is used to connect cloud computers that reside in the office network from Alibaba Cloud Workspace clients.

**Note**

The VPC connection depends on Alibaba Cloud PrivateLink. You can use Alibaba Cloud PrivateLink for free. When you set this parameter to `VPC` or `Any`, PrivateLink is automatically activated.

**Valid values:**

-   INTERNET :
    
    (default) Cloud computers are connected from Alibaba Cloud Workspace clients over the Internet.
    
-   VPC :
    
    Cloud computers are connected from Alibaba Cloud Workspace clients over the VPC.
    
-   ANY :
    
    Cloud computers are connected from Alibaba Cloud Workspace clients over the Internet or the VPC. When end users connect to cloud computers from Alibaba Cloud Workspace clients, you can choose a connection method based on your business requirements.
    

INTERNET

SsoEnabled

boolean

Indicates whether single sign-on (SSO) is enabled.

false

CidrBlock

string

The IPv4 CIDR block of the VPC that the office network uses.

47.100.XX.XX

Bandwidth

integer

The maximum public bandwidth value. Valid values: 0 to 1000.  
If you leave this parameter empty or set this parameter to 0, Internet access is not enabled.

10

TrustPassword

string

**Note**

This parameter is unavailable.

To be hidden.

Name

string

The name of the office network. The name is unique in a region.

test

EnableInternetAccess

boolean

Indicates whether Internet access is enabled.

false

DomainPassword

string

The password of the domain administrator.

testPassword

CustomSecurityGroupId

string

The ID of the security group.

sg-bp1ce64o4g9mdf5u\*\*\*\*

OuName

string

The organizational unit (OU) in the AD domain to which the office network is connected.

example.com/Domain Controllers

DomainUserName

string

The username of the domain administrator.

Administrator

SubDomainName

string

The username of enterprise AD subdomain.

testSubDnsUserName

OfficeSiteId

string

The IDs of the office networks.

cn-hangzhou+dir-363353\*\*\*\*

CenId

string

The CEN instance ID.

cen-3gwy16dojz1m65\*\*\*\*

CenAttachStatus

string

The CEN instance status.

attached

MfaEnabled

boolean

Indicates whether multi-factor authentication (MFA) is enabled.

false

NetworkPackageId

string

The premium bandwidth plan ID.

np-amtp8e8q1o9e4\*\*\*\*

DnsUserName

string

The username of a Domain Name System (DNS) user.

testDnsUserName

OfficeSiteType

string

The account type of the office network.

**Valid values:**

-   SIMPLE :
    
    Convenience account
    
-   AD\_CONNECTOR :
    
    Enterprise AD account
    

AD\_CONNECTOR

ADConnectors

array<object>

Details of AD connectors.

object

The AD connector.

ConnectorStatus

string

The status of the AD connector.

**Valid values:**

-   CONNECT\_ERROR :
    
-   RUNNING :
    
-   CONNECTING :
    
    You must configure the AD domain in which the AD connector is used.
    
-   EXPIRED :
    
-   CREATING :
    

RUNNING

VSwitchId

string

The ID of the vSwitch that resides in the network of the AD connector.

vsw-bp19ocz3erfx15uon\*\*\*\*

ADConnectorAddress

string

The connection address of the AD connector.

172.24.\*.\*

TrustKey

string

The trust password that is specified when you configure the AD trust relationship.

password123\*\*\*

NetworkInterfaceId

string

The ID of an elastic network interface (ENI) to which the AD connector is mounted.

eni-bp1i4wx78lgosrj6\*\*\*\*

Specification

string

The AD connector type.

**Valid values:**

-   1 :
    
    General
    
-   2 :
    
    Advanced
    

1

Logs

array<object>

Details about registration logs.

object

The registration log.

Step

string

The step in the log entry.

CREATE\_CONNECTOR

Message

string

Details of the log entry.

code:success | message:Create Connector complete

TimeStamp

string

The time when the log entry was printed.

2021-05-12T09:42Z

Level

string

The log severity.

**Valid values:**

-   ERROR :
    
-   INFO :
    
-   WARN :
    

INFO

VSwitchIds

array

An array of VSwitch IDs.

string

The vSwitch ID.

vsw-bp19ocz3erfx15uon\*\*\*\*

FileSystemIds

array

An array of File Storage NAS (NAS) file system IDs.

string

The NAS file system ID.

\["05b534\*\*\*\*"\]

SubDnsAddress

array

The DNS addresses for the AD subdomains.

string

The DNS address for the AD subdomain.

\["172.24.XX.XX"\]

DnsAddress

array

The DNS addresses for the AD domains.

string

The DNS address for the AD domain.

\["172.24.XX.XX"\]

CustomDnsAddress

array

The custom DNS addresses.

string

The custom DNS address.

\["172.24.XX.XX"\]

NeedVerifyLoginRisk

boolean

Indicates whether two-factor verification is enabled when an end user logs on to an Alibaba Cloud Workspace client. This parameter is required only for convenience office networks. If two-factor verification is enabled, the system checks whether security risks exist within the logon account when a convenience user logs on to the client. If risks are detected, the system sends a verification code to the email address that is associated with the account. Then, the convenience user can log on to the client only after the user enters the correct verification code.

false

DesktopCount

integer

The number of cloud computers that are created.

1

TotalEdsCount

integer

The total number of cloud computers.

0

TotalEdsCountForGroup

integer

The number of cloud computers in the cloud computer share.

0

NeedVerifyZeroDevice

boolean

Indicates whether the trusted device verification is enabled.

**Valid values:**

-   true :
    
-   false :
    

true

CloudBoxOfficeSite

boolean

Indicates whether the CloudBox-based office network is created.

**Valid values:**

-   true :
    
-   false :
    

true

SsoType

string

The SSO type.

**Valid values:**

-   SAML :
    
    SAML
    

SAML

ProtocolType

string

The protocol type.

**Valid values:**

-   HDX :
    
-   ASP :
    

ASP

AdHostname

string

The hostname of the domain controller. The hostname must comply with the hostname naming convention of Windows.

beijing-ad01

RdsLicenseStatus

string

The remote desktop service (RDS) license status.

2

RdsLicenseAddress

string

The IP address of the RDS license.

47.100.XX.XX

RdsLicenseDomainName

string

The domain name of the RDS license.

example.com

BackupDns

string

The DNS address of the secondary domain controller.

172.24.XX.XX

BackupDCHostname

string

The hostname of the secondary domain controller.

beijing-ad02

EnableServiceRoute

boolean

Indicates whether route access control is enabled for cloud services.

false

SubnetMode

string

The subnet mode of the office network.

**Valid values:**

-   0 :
    
    Disabled.
    
-   1 :
    
    Enabled.
    

0

SecurityProtection

string

The security protection setting of the office network.

**Valid values:**

-   SASE :
    
    SASE is configured.
    
-   OFF :
    
    No security protection setting is configured.
    

SASE

CustomAccessPoint

string

The custom endpoint of the access gateway.

gw-\*\*\*\*.com

ResourceAmounts

array<object>

The number of resources.

object

resourceType

string

The resource type.

**Valid values:**

-   desktop :
    
    The cloud computer.
    
-   desktopGroup :
    
    The cloud computer share.
    

desktop

amount

integer

The number of resources.

1

TotalResourceAmount

integer

The number of network interface controllers (NICs).

1

NmVersion

string

The network version. The new version supports App Streaming.

**Valid values:**

-   DEFAULT :
    
    the old version.
    
-   NM :
    
    The new version.
    

NM

AcceleratorId

string

The ID of the GA instance.

ga-bp1astu3yrplkzoo2\*\*\*\*

LdapUrl

string

IsLdap

boolean

DomainName

string

The domain name of the enterprise AD.

example.com

AccountType

string

AuthorityHost

string

TenantId

string

ClientId

string

EnvType

string

VplVersion

string

ClientSecret

string

Eid

string

## Examples

Success response

`JSON` format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "TotalCount": 20,
  "OfficeSites": [
    {
      "Status": "REGISTERED",
      "CreationTime": "2021-05-06T05:58Z",
      "VpcId": "vpc-uf6tz5k67puge5jn8****",
      "VpcType": "Basic",
      "EnableAdminAccess": true,
      "EnableCrossDesktopAccess": false,
      "DesktopVpcEndpoint": "http://ep-bp1s2vmbj55r5rzc****.epsrv-bp1pcfhpwvlpny01****.cn-hangzhou.privatelink.aliyuncs.com",
      "DesktopAccessType": "INTERNET",
      "SsoEnabled": false,
      "CidrBlock": "47.100.XX.XX",
      "Bandwidth": 10,
      "TrustPassword": "To be hidden.",
      "Name": "test",
      "EnableInternetAccess": false,
      "DomainPassword": "testPassword",
      "CustomSecurityGroupId": "sg-bp1ce64o4g9mdf5u****",
      "OuName": "example.com/Domain Controllers",
      "DomainUserName": "Administrator",
      "SubDomainName": "testSubDnsUserName",
      "OfficeSiteId": "cn-hangzhou+dir-363353****",
      "CenId": "cen-3gwy16dojz1m65****",
      "CenAttachStatus": "attached",
      "MfaEnabled": false,
      "NetworkPackageId": "np-amtp8e8q1o9e4****",
      "DnsUserName": "testDnsUserName\t",
      "OfficeSiteType": "AD_CONNECTOR",
      "ADConnectors": [
        {
          "ConnectorStatus": "RUNNING",
          "VSwitchId": "vsw-bp19ocz3erfx15uon****",
          "ADConnectorAddress": "172.24.*.*",
          "TrustKey": "password123***",
          "NetworkInterfaceId": "eni-bp1i4wx78lgosrj6****",
          "Specification": "1"
        }
      ],
      "Logs": [
        {
          "Step": "CREATE_CONNECTOR",
          "Message": "code:success | message:Create Connector complete",
          "TimeStamp": "2021-05-12T09:42Z",
          "Level": "INFO"
        }
      ],
      "VSwitchIds": [
        "vsw-bp19ocz3erfx15uon****"
      ],
      "FileSystemIds": [
        "[\"05b534****\"]"
      ],
      "SubDnsAddress": [
        " [\"172.24.XX.XX\"]"
      ],
      "DnsAddress": [
        " [\"172.24.XX.XX\"]"
      ],
      "CustomDnsAddress": [
        " [\"172.24.XX.XX\"]"
      ],
      "NeedVerifyLoginRisk": false,
      "DesktopCount": 1,
      "TotalEdsCount": 0,
      "TotalEdsCountForGroup": 0,
      "NeedVerifyZeroDevice": true,
      "CloudBoxOfficeSite": true,
      "SsoType": "SAML",
      "ProtocolType": "ASP",
      "AdHostname": "beijing-ad01",
      "RdsLicenseStatus": "2",
      "RdsLicenseAddress": "47.100.XX.XX",
      "RdsLicenseDomainName": "example.com",
      "BackupDns": "172.24.XX.XX",
      "BackupDCHostname": "beijing-ad02",
      "EnableServiceRoute": false,
      "SubnetMode": "0",
      "SecurityProtection": "SASE",
      "CustomAccessPoint": "gw-****.com",
      "ResourceAmounts": [
        {
          "resourceType": "desktop",
          "amount": 1
        }
      ],
      "TotalResourceAmount": 1,
      "NmVersion": "NM",
      "AcceleratorId": "ga-bp1astu3yrplkzoo2****",
      "LdapUrl": "",
      "IsLdap": false,
      "DomainName": "example.com",
      "AccountType": "",
      "AuthorityHost": "",
      "TenantId": "",
      "ClientId": "",
      "EnvType": "",
      "VplVersion": "",
      "ClientSecret": "",
      "Eid": ""
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeOfficeSites#workbench-doc-change-demo) for a complete list.
