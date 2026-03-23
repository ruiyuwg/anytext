Runs a PowerShell or Batch script on one or more Elastic Cloud Desktop (ECD) instances that run Windows.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/RunCommand)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/RunCommand)

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

The region ID.

cn-hangzhou

Type

string

Yes

The language type of the O&M script.

**Valid values:**

-   RunPowerShellScript :
    
    Run a PowerShell script.
    
-   RunBatScript :
    
    Run a Batch script.
    

RunPowerShellScript

CommandContent

string

Yes

The plaintext or Base64-encoded content of the script.  
The Base64-encoded script content must not exceed 16 KB.  
  

**Note**

If you specify Base64-encoded script content, set ContentEncoding to Base64.

ipconfig

Timeout

integer

No

The timeout period for running the script, in seconds. Default value: 300.  
A timeout occurs if the script cannot run due to process issues, missing modules, or a missing Cloud Assistant client. After a timeout, the script process is forcibly stopped.  
  

3600

ContentEncoding

string

No

The encoding method for the script content.

**Note**

If you specify a value that is not in the enumeration list, the system treats it as PlainText.

**Valid values:**

-   Base64 :
    
    Base64 encoding.
    
-   PlainText :
    
    No encoding. The script is transmitted in plaintext. Default value.
    

Base64

DesktopId

array

Yes

A list of ECD instance IDs. Valid values of N: 1 to 50.  
If you specify multiple ECD instances, the API call succeeds if at least one instance runs the script successfully. If none of the specified instances can run the script, update this parameter and try again.  
  

string

No

The ID of an ECD instance.

ecd-7w78ozhjcwa3u\*\*\*\*

EndUserId

string

No

The ID of the end user. If you specify this parameter, the command runs with the permissions of the end user.

**Note**

The end user must have an active session on the ECD instance. This means the instance must be powered on, the user must have logged on and connected, and the connection must not have been preempted by another user. This parameter is not supported for Linux ECD instances.

alice

CommandRole

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response object.

InvokeId

string

The invocation ID of the script. You can call [DescribeInvocations](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeinvocations) and pass in this value to query the execution status of the script.

t-hz01qgsqj2n\*\*\*\*

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "InvokeId": "t-hz01qgsqj2n****",
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/RunCommand#workbench-doc-change-demo) for a complete list.
