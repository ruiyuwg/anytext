Updates project information.

## Operation description

### Usage notes

-   The Host parameter consists of a project name and a Simple Log Service endpoint. You must specify a project in the Host parameter.
    
-   Make sure that you have an AccessKey pair. For more information, see [AccessKey pair](/help/en/sls/accesskey-pair).
    

An AccessKey pair for an Alibaba Cloud account has permissions on all API operations, which poses a high security risk. For security, we recommend that you create and use a Resource Access Management (RAM) user to make API calls or perform routine O&M. The RAM user must have permissions to operate on Simple Log Service resources. For more information, see [Create a RAM user and grant permissions](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service).

### Authorization resources

The following table describes the authorization information for this operation. Add this information to the Action element of a RAM policy statement to grant a RAM user or RAM role the permissions to call this operation.

Action

Resource

`log:UpdateProject`

`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sls/2020-12-30/UpdateProject)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sls/2020-12-30/UpdateProject)

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

log:UpdateProject

update

\*Project

`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`

-   log:TLSVersion
    

None

## Request syntax

```
PUT / HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

body

object

Yes

The request body.

description

string

Yes

The description of the project. The default value is an empty string.

Description of my-project-test

recycleBinEnabled

boolean

No

Specifies whether to enable the recycle bin.

**Valid values:**

-   true :
    
    Yes
    
-   false :
    
    No
    

true

project

string

Yes

The project name.

ali-project-test

Sample request

PUT / HTTP/1.1 Host:ali-project-test.cn-hangzhou.log.aliyuncs.com Content-Type: application/json

{ "description" : "Description of my-project-test", "recycleBinEnabled": true }

## Response elements

**Element**

**Type**

**Description**

**Example**

None defined.

Sample response

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

See [Release Notes](https://api.alibabacloud.com/document/Sls/2020-12-30/UpdateProject#workbench-doc-change-demo) for a complete list.
