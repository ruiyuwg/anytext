Modifies the endpoints of a PolarDB cluster, including the primary endpoint, default cluster endpoint, custom cluster endpoint, and private domain name.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyDBEndpointAddress)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyDBEndpointAddress)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

polardb:ModifyDBEndpointAddress

update

\*dbcluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The cluster ID.

**Note**

You can call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query the details of all clusters in your account, including cluster IDs.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBEndpointId

string

Yes

The endpoint ID.

**Note**

You can call the [DescribeDBClusterEndpoints](/help/en/polardb/polardb-for-mysql/api-describedbclusterendpoints) operation to query endpoint IDs.

pe-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

NetType

string

Yes

The network type of the endpoint. Valid values:

-   **Public**: The public network.
    
-   **Private**: The private network.
    

Public

ConnectionStringPrefix

string

No

The new prefix of the endpoint. The prefix must meet the following requirements:

-   It must consist of lowercase letters, digits, and hyphens (-).
    
-   It must start with a letter and end with a digit or a letter.
    
-   It must be 6 to 30 characters in length.
    

example

PrivateZoneAddressPrefix

string

No

The prefix of the private domain name. The prefix must meet the following requirements:

-   It must consist of lowercase letters, digits, and hyphens (-).
    
-   It must start with a letter and end with a digit or a letter.
    
-   It must be 6 to 30 characters in length.
    

**Note**

-   You can attach a private domain name to each private endpoint of a PolarDB cluster. The domain name takes effect only in the specified virtual private cloud (VPC) within the current region. Private domain names are managed using PrivateZone. They are mapped to the private endpoints of PolarDB clusters using canonical name (CNAME) records. PrivateZone charges a small fee for this feature. For more information, see [Pricing](/help/en/privatezone/latest/pricing).
    
-   This parameter is valid only when NetType is set to **Private**.
    

aliyundoc

PrivateZoneName

string

No

The name of the private domain zone.

**Note**

This parameter is valid only when NetType is set to **Private**.

aliyundoc.com

Port

string

No

The port number. Valid values: 3000 to 5999.

**Note**

-   This parameter is supported only for PolarDB for MySQL clusters. If you leave this parameter empty, the default port number 3306 is used.
    

3306

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

D0CEC6AC-7760-409A-A0D5-E6CD86\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "D0CEC6AC-7760-409A-A0D5-E6CD86******"
}
```

Error response

`JSON` format

```
{
  "RequestId": "D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

DnsConflict

ParamsError.DnsConflict(Dns is already used, ConnAddrCust:%s).

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyDBEndpointAddress#workbench-doc-change-demo) for a complete list.
