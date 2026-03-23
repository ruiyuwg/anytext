Modifies the IP address whitelist of an ApsaraDB for MongoDB instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifySecurityIps)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifySecurityIps)

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

dds:ModifySecurityIps

update

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBInstanceId

string

Yes

The instance ID.

dds-bp\*\*\*\*\*

SecurityIps

string

Yes

The IP addresses in the IP address whitelist. Separate multiple IP addresses with commas (,). You can add a maximum of 1,000 different IP addresses to the IP address whitelist. The entries in the IP address whitelist must be in one of the following formats:

-   IP addresses, such as 127.0.0.1.
    
-   CIDR blocks, such as 127.0.0.1/24. In this example, 24 indicates that the prefix of each IP address in the IP address whitelist is 24 bits in length. You can replace 24 with a value within the range of 1 to 32.
    

127.0.0.1/24,127.0.0.1

ModifyMode

string

No

The method that is used to modify the IP address whitelist. Valid values:

-   **Cover**: overwrites the original IP address whitelist.
    
-   **Append**: appends data to the IP address whitelist.
    
-   **Delete**: deletes the IP address whitelist.
    

Default value: **Cover**.

Append

SecurityIpGroupName

string

No

The name of the IP address whitelist that you want to modify. Default value: **default**.

allowserver

SecurityIpGroupAttribute

string

No

The attribute of the IP address whitelist. It can contain a maximum of 120 characters in length and can contain uppercase letters, lowercase letters, and digits.

This parameter is empty by default.

test

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

61B05CCF-EBAB-4BF3-BA67-D77256A721E2

## Examples

Success response

`JSON` format

```
{
  "RequestId": "61B05CCF-EBAB-4BF3-BA67-D77256A721E2"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidSecurityIps.MalFormed

The specified parameter "SecurityIps" is not valid.

400

InvalidSecurityIPListLength.Malformed

The Security IP address is not in the available range or occupied.

400

InvalidInstanceIp.Duplicate

The quota of security ip exceeds.

400

InvalidGroupName.Format

Sepecified group name is not valid.

404

InvalidSecurityIPs.NotFound

The Specified same security IP does not exist or at least one security IP need.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifySecurityIps#workbench-doc-change-demo) for a complete list.
