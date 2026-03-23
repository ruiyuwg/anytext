Retrieves the details of extensions.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeExtensions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeExtensions)

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

polardb:DescribeExtensions

get

\*All Resource

`*`

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

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBName

string

Yes

The database name.

song

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

309073D4-9C99-511C-AF84-0C67A6F52E67

UninstalledExtensions

array<object>

The extensions that are not installed in the specified database.

object

The extensions that are not installed in the specified database.

Name

string

The extension name.

jueming

DefaultVersion

string

The default version of the extension.

7.7

InstalledVersion

string

The currently installed version of the extension.

7.7

Comment

string

The purpose of the extension.

OK

Owner

string

The owner of the extension.

alton

Priority

string

The priority of the extension.

1

Requires

string

The extensions on which this extension depends.

ganos\_networking

Category

string

The extension type.

geography\_space, self\_develop

Restart

string

Specifies whether to restart the application. \`true\`: The application is restarted. \`false\`: The application is not restarted.

true

InstalledExtensions

array<object>

The extensions that are installed in the specified database.

object

The extensions that are installed in the specified database.

Name

string

The extension name.

jueming

DefaultVersion

string

The default version of the extension.

7.7

InstalledVersion

string

The currently installed version of the extension.

7.7

Comment

string

The description of the extension.

OK

Owner

string

The owner of the extension.

alton

Priority

string

The priority of the extension.

1

Requires

string

The extensions on which this extension depends.

ganos\_networking

Category

string

The extension type.

geography\_space, self\_develop

Restart

string

Specifies whether to restart the application. \`true\`: The application is restarted. \`false\`: The application is not restarted.

true

Overview

string

The overview of the extension.

测试建单，请忽略

## Examples

Success response

`JSON` format

```
{
  "RequestId": "309073D4-9C99-511C-AF84-0C67A6F52E67",
  "UninstalledExtensions": [
    {
      "Name": "jueming",
      "DefaultVersion": "7.7",
      "InstalledVersion": "7.7",
      "Comment": "OK",
      "Owner": "alton",
      "Priority": "1",
      "Requires": "ganos_networking",
      "Category": "geography_space, self_develop",
      "Restart": "true"
    }
  ],
  "InstalledExtensions": [
    {
      "Name": "jueming",
      "DefaultVersion": "7.7",
      "InstalledVersion": "7.7",
      "Comment": "OK",
      "Owner": "alton",
      "Priority": "1",
      "Requires": "ganos_networking",
      "Category": "geography_space, self_develop\n",
      "Restart": "true"
    }
  ],
  "Overview": "测试建单，请忽略"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

404

InvalidDBInstance.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeExtensions#workbench-doc-change-demo) for a complete list.
