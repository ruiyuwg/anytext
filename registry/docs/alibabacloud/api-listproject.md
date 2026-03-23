Lists projects that meet the specified criteria.

## Operation description

### API description

The host consists of a project name and a Simple Log Service endpoint. You must specify the project in the host.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sls/2020-12-30/ListProject)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sls/2020-12-30/ListProject)

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

log:ListProject

get

\*Project

`acs:log:{#regionId}:{#accountId}:project/*`

-   log:TLSVersion

None

## Request syntax

```
GET / HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

projectName

string

No

The name of the project. Fuzzy queries are supported.

ali-test-project

offset

integer

No

The line from which the query starts. The default value is 0.

0

size

integer

No

The number of rows to return on each page for a paged query. The default value is 100. A maximum of 500 projects can be returned.

10

resourceGroupId

string

No

The ID of the resource group.

rg-aekzf\*\*\*\*\*\*sxby

fetchQuota

boolean

No

Specifies whether to retrieve the quota information for the project.

**Valid values:**

-   true :
    
    true
    
-   false :
    
    false
    

false

Sample request:

GET /?projectName=ali-test-project&offset=0&size=10 HTTP/1.1 Host:ali-test-project.cn-hangzhou.log.aliyuncs.com Content-Type:application/json

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The list of projects.

count

integer

The number of projects returned on the current page.

2

total

integer

The total number of projects that meet the query criteria.

11

projects

array

The list of projects that meet the query criteria.

不涉及

[project](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-project)

A project that meets the query criteria.

不涉及

## Examples

Success response

`JSON` format

```
{
  "count": 2,
  "total": 11,
  "projects": [
    {
      "createTime": "2021-07-07 14:08:09",
      "lastModifyTime": "2022-04-18 13:30:19",
      "description": "Description of my-project",
      "owner": "\"\"",
      "projectName": "ali-test-project",
      "region": "cn-hangzhou",
      "status": "Normal",
      "resourceGroupId": "rg-acf******sq",
      "dataRedundancyType": "LRS",
      "quota": {
        "key": ""
      },
      "recycleBinEnabled": false,
      "location": ""
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Sls/2020-12-30/ListProject#workbench-doc-change-demo) for a complete list.
