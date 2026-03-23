Queries the key usage details for a specified PolarDB cluster.

## Operation description

## Description

-   You can call this operation to query the key usage details for a PolarDB cluster, such as the key ID, status, and type.
    
-   The `DBClusterId` parameter is required. It specifies the ID of the PolarDB cluster to query.
    
-   Before you call this operation, make sure that the required Resource Access Management (RAM) roles and policies are configured.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterEncryptionKey)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterEncryptionKey)

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

polardb:DescribeDBClusterEncryptionKey

get

\*All Resource

`*`

None

None

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ClientToken

string

No

A client token to ensure the idempotence of the request.

6000170000591aed949d0f\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBClusterId

string

No

The cluster ID.

**Note**

Call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query the details of all clusters in your account, including cluster IDs.

pc-\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response body.

RequestId

string

The request ID.

137ECCC0-920E-5B3B-9F8E-B81632108BBE

EncryptionKeyList

array<object>

The list of keys.

object

The key details.

AliasName

string

The alias of the key.

alias/your\_default\_key

Creator

string

The UID of the Alibaba Cloud account that created the key.

1\*\*\*\*1

DeleteDate

string

The scheduled time to delete the key. The format is yyyy-MM-ddTHH:mm:ssZ (UTC).

-   This field is empty if the key is not scheduled for deletion.
    

2026-05-08T08:14:16Z

Description

string

The description of the key.

Description of the key

EncryptionKey

string

The key ID.

51858179-afb3-4369-8329-\*\*\*\*\*\*\*\*\*

EncryptionKeyStatus

string

The status of the key. Valid values:

-   Enabled: The key is enabled.
    
-   Disabled: The key is not enabled.
    

Enabled

KeyType

string

The type of the key. Valid values:

-   CMK: customer master key
    
-   ServiceKey: service key
    

ServiceKey

KeyUsage

string

The purpose of the key.

ENCRYPT/DECRYPT

MaterialExpireTime

string

The expiration time of the key. The format is yyyy-MM-ddTHH:mm:ssZ (UTC).

2025-10-18T08:14:16Z

Origin

string

The source of the key.

Aliyun\_KMS

UsedBy

string

The service that uses the key. Valid values:

-   TDE: transparent data encryption (TDE).
    
-   DiskEncryption: disk encryption.
    

DiskEncryption

## Examples

Success response

`JSON` format

```
{
  "RequestId": "137ECCC0-920E-5B3B-9F8E-B81632108BBE",
  "EncryptionKeyList": [
    {
      "AliasName": "alias/your_default_key",
      "Creator": "1****1",
      "DeleteDate": "2026-05-08T08:14:16Z",
      "Description": "Description of the key",
      "EncryptionKey": "51858179-afb3-4369-8329-*********",
      "EncryptionKeyStatus": "Enabled",
      "KeyType": "ServiceKey",
      "KeyUsage": "ENCRYPT/DECRYPT",
      "MaterialExpireTime": "2025-10-18T08:14:16Z",
      "Origin": "Aliyun_KMS",
      "UsedBy": "DiskEncryption"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IdempotentParameterMismatch

The request uses the same client token as a previous, but non-identical request. Do not reuse a client token with different requests, unless the requests are identical.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBInstance.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBClusterEncryptionKey#workbench-doc-change-demo) for a complete list.
