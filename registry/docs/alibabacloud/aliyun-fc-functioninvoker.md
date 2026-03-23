ALIYUN::FC::FunctionInvoker is used to invoke a function.

## Syntax

```
{
  "Type": "ALIYUN::FC::FunctionInvoker",
  "Properties": {
    "Qualifier": String,
    "ServiceName": String,
    "ExecuteVersion": Integer,
    "Async": Boolean,
    "Event": String,
    "FunctionName": String,
    "CheckError": Boolean,
    "ServiceRegionId": String,
    "CheckAsyncInvocation": Map
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

The name of the service.

The name must be 1 to 128 characters in length.

FunctionName

String

Yes

Yes

The name of the function.

None.

Async

Boolean

No

Yes

Specifies whether to enable the asynchronous invocation feature.

Valid values:

-   true
    
-   false (default)
    

Event

String

No

Yes

The custom input property of the function.

The value is encoded as a UTF-8 string and passed to the function during the function exection. If you want to pass the value as a binary string or non-UTF-8 encoded string, encode the value in Base64 before you pass it to the function.

Qualifier

String

No

Yes

The version of the service.

Valid values:

-   versionId
    
-   aliasName
    

ExecuteVersion

Integer

No

Yes

The version of the identifier for the function to be invoked. If you specify this property when you create the resource, the function is invoked. Otherwise, the function is not invoked.

If you change the property value and the changed value is an integer when you update the resource, the function is invoked. Otherwise, the function is not invoked.

None.

CheckError

Boolean

No

No

Specifies whether to check the invocation result.

Valid values:

-   true
    
    **Note**
    
    If this property is set to true and the invocation fails, the resource fails to be created.
    
-   false (default)
    

ServiceRegionId

String

No

No

The region ID of the function service.

None.

CheckAsyncInvocation

Map

No

No

The configurations of checks on the asynchronous invocation.

For more information, see the "CheckAsyncInvocation properties" of this topic.

## CheckAsyncInvocation syntax

```
"CheckAsyncInvocation": {
  "Enabled": Boolean,
  "CheckInterval": Integer,
  "CheckTimes": Integer
}
```

## CheckAsyncInvocation properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Enabled

Boolean

Yes

No

Specifies whether to check the asynchronous invocation result.

If you set this property and Async to true, the system creates the resource after the asynchronous invocation is complete and the asynchronous invocation result is checked.

Default value: false.

CheckInterval

Integer

Yes

No

The time interval between two consective checks on the asynchronous invocation result.

Default value: 10. Unit: seconds.

CheckTimes

Integer

Yes

No

The number of checks on the asynchronous invocation result.

Default value: 10.

## Return values

Fn::GetAtt

-   ResultType:
    
    -   If Async is set to true and ResultType is set to NoResult, no result is returned.
        
    -   If Async is set to false and ResultType is set to Success, the invocation is successful.
        
    -   If Async is set to false and ResultType is set to Failure, the invocation fails.
        
-   Result:
    
    -   If ResultType is set to NoResult, the value of Result is null.
        
    -   If ResultType is set to Success, the value of Result is the function invocation result. You can interpret the result based on the function implementation. The returned result must be a UTF-8 encoded string. Otherwise, the function invocation fails. If the result to be returned is a binary string or non-UTF-8 encoded string, the result must be encoded in Base64 before it is returned.
        
    -   If ResultType is set to Failure, an error message is returned for Result.
        

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  FunctionInvoker:
    Type: ALIYUN::FC::FunctionInvoker
    Properties:
      ServiceName: mytest
      FunctionName: PythonFunc
      ExecuteVersion: 1
Outputs: {}
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "FunctionInvoker": {
      "Type": "ALIYUN::FC::FunctionInvoker",
      "Properties": {
        "ServiceName": "mytest",
        "FunctionName": "PythonFunc",
        "ExecuteVersion": 1.0
      }
    }
  },
  "Outputs": {
  }
}
```
