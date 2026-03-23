DATASOURCE::FC::Functions is used to query functions.

## Syntax

```
{
  "Type": "DATASOURCE::FC::Functions",
  "Properties": {
    "ServiceName": String,
    "Qualifier": String,
    "Prefix": String,
    "RefreshOptions": String
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

ServiceName

String

Yes

Yes

The service name.

None.

Qualifier

String

No

Yes

The version or alias of the service.

None.

Prefix

String

No

Yes

The prefix of the resource name.

The resource name must start with the value of Prefix.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   Functions: details of the functions.
    
-   FunctionNames: the names of the functions.
    

**Property**

**Type**

**Description**

**Constraint**

FunctionNames

List

The names of the functions.

None.

Functions

List

Details of the functions.

None.

FunctionName

String

The function name.

None.

FunctionId

String

The function ID.

The ID is globally unique.

Description

String

The description of the function.

None.

Runtime

String

The runtime of the function.

The following runtimes are supported: `Node.js 6.x`, `Node.js 8.x`, `Node.js 10.x`, `Node.js 12.x`, `Node.js 14.x`, `Python 3`, `Java 8`, `Java 11`, `PHP 7.2`, `.NET Core 2.1`, `Go 1.x`, `Custom Runtime`, and `Custom Container`.

For more information about the runtimes supported by Function Compute, see [Manage functions](/help/en/functioncompute/fc-2-0/user-guide/manage-functions#section-rc8-6h1-dr0).

Handler

String

The handler of the function.

The format of the value varies based on the programming language.

For more information, see [Handler](/help/en/functioncompute/fc-2-0/user-guide/basics#section-byk-jmv-921).

Timeout

Number

The timeout period for the execution of the function.

Valid values: 1 to 86400.

Default value: 60.

Unit: seconds.

When the timeout period is exceeded, the execution of the function is terminated.

Initializer

String

The handler of the Initializer hook.

The format of the value varies based on the programming language.

For more information, see [Initializer hook](/help/en/functioncompute/fc-2-0/user-guide/basics#section-e2f-rv7-qlb).

InitializationTimeout

Number

The timeout period for the execution of the Initializer hook.

Valid values: 1 to 300.

Default value: 3.

Unit: seconds.

When the timeout period is exceeded, the execution of the Initializer hook is terminated.

CodeSize

Number

The size of the function code package.

Unit: bytes.

CodeChecksum

String

The 64-bit cyclic redundancy check (CRC-64) value of the function code package.

None.

MemorySize

Number

The memory size of the function.

Unit: MB.

The memory size must be a multiple of 64 MB.

The memory size of the function varies based on the type of the instance.

For more information, see [Instance specifications](/help/en/functioncompute/fc-2-0/user-guide/instance-types-and-instance-modes#section-mfv-5fb-ehw).

GpuMemorySize

Number

The size of the virtual GPU memory.

None.

EnvironmentVariables

Map

The environment variables configured for the function.

You can obtain the values of the environment variables from the function.

For more information, see [Environment variables](/help/en/functioncompute/fc-2-0/user-guide/fc-environment-variables#multiTask2981).

CreatedTime

String

The time when the function was created.

None.

LastModifiedTime

String

The most recent time when the function was modified.

None.

InstanceConcurrency

Number

The number of requests that a single instance can concurrently process at the same time.

None.

InstanceSoftConcurrency

Number

The soft concurrency of the instance.

None.

CustomContainerConfig

Map

The configurations of the custom container runtime.

After you configure the custom container runtime, you can use a custom container image to execute functions. For more information, see [CustomContainerConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-common-data-structures#CustomContainerConfig).

CaPort

Number

The port on which the HTTP server listens for the custom runtime or custom container runtime.

None.

InstanceType

String

The instance type.

None.

Layers

Map

The information about the layers.

For more information, see [Layer](/help/en/functioncompute/fc-2-0/developer-reference/api-common-data-structures#Layer).

InstanceLifecycleConfig

Map

The lifecycle function configurations of the instance.

For more information, see [InstanceLifecycleConfig](/help/en/doc-detail/415686.html#main-107864).

CustomDNS

Map

The custom Domain Name System (DNS) configurations of the function.

For more information, see [CustomDNS](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-struct-customdns#main-107864).

CustomRuntimeConfig

Map

The configurations of the custom runtime.

For more information, see [CustomRuntimeConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-struct-customruntimeconfig#main-107864).

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ServiceName": {
      "Type": "String",
      "Description": "Service name."
    }
  },
  "Resources": {
    "Functions": {
      "Type": "DATASOURCE::FC::Functions",
      "Properties": {
        "ServiceName": {
          "Ref": "ServiceName"
        }
      }
    }
  },
  "Outputs": {
    "Functions": {
      "Description": "The list of functions.",
      "Value": {
        "Fn::GetAtt": [
          "Functions",
          "Functions"
        ]
      }
    },
    "FunctionNames": {
      "Description": "The list of function names.",
      "Value": {
        "Fn::GetAtt": [
          "Functions",
          "FunctionNames"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ServiceName:
    Type: String
    Description: Service name.
Resources:
  Functions:
    Type: DATASOURCE::FC::Functions
    Properties:
      ServiceName:
        Ref: ServiceName
Outputs:
  Functions:
    Description: The list of functions.
    Value:
      Fn::GetAtt:
        - Functions
        - Functions
  FunctionNames:
    Description: The list of function names.
    Value:
      Fn::GetAtt:
        - Functions
        - FunctionNames
```
