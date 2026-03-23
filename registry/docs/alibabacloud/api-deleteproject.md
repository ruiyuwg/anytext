Deletes a specified project.

## Operation description

### Description

-   The Host parameter consists of a project name and a Simple Log Service Endpoint. You must specify the project name in the Host parameter.
    
-   You must create and obtain an AccessKey pair. For more information, see [AccessKey pair](/help/en/sls/accesskey-pair).
    

An AccessKey pair for an Alibaba Cloud account has permissions on all API operations, which poses a high security threat. We recommend that you use a RAM user to call API operations or perform O&M. The RAM user must have the permissions to operate on Simple Log Service resources. For more information, see [Create and authorize a RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service).

-   When you delete a project, all its log data and configurations are released and cannot be recovered. To prevent data loss, confirm the action before you delete the project.
    

### Authorization

The following table lists the authorization information for this API operation. To grant a RAM user or RAM role the permissions to call this API operation, add this information to the Action element of a RAM access policy statement.

Action

Resource description in an authorization policy

`log:DeleteProject`

`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sls/2020-12-30/DeleteProject)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sls/2020-12-30/DeleteProject)

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

log:DeleteProject

delete

\*Project

`acs:log:{#regionId}:{#accountId}:project/{#project}`

-   log:TLSVersion

None

## Request syntax

```
DELETE / HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

project

string

Yes

The name of the project.

ali-project-test

forceDelete

boolean

No

Request example:

DELETE / HTTP/1.1 Host:ali-project-test.cn-hangzhou.log.aliyuncs.com Content-Type:application/json

Common request parameters

## Response elements

**Element**

**Type**

**Description**

**Example**

None defined.

Response example:

HTTP/1.1 200 OK

## Examples

Success response

`JSON` format

```
{}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Sls/2020-12-30/DeleteProject#workbench-doc-change-demo) for a complete list.
