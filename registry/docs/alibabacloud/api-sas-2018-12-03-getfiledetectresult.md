Obtains file detection results.

## Operation description

The HashKey parameter is included in all API operations that are related to the file detection feature. The parameter specifies the unique identifier of a file. Only MD5 hash values are supported. Before you call this operation, calculate the MD5 hash value of the file.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Sas/2018-12-03/GetFileDetectResult)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Sas/2018-12-03/GetFileDetectResult)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

yundun-sas:GetFileDetectResult

get

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

SourceIp

string

No

The source IP address of the request.

183.46.XX.XX

HashKeyList

array

Yes

The identifiers of files. Only MD5 hash values are supported.

string

Yes

The identifier of the file. Only MD5 hash values are supported.

0a212417e65c26ff133cfff28f9c\*\*\*\*

Type

integer

Yes

The type of the file. Valid values:

-   **0**: unknown file
-   **1**: binary file
-   **2**: webshell file
-   **4**: script file

**Note** If you do not know the type of the file, set this parameter to 0.

0

## Response parameters

Parameter

Type

Description

Example

object

The data returned.

RequestId

string

The ID of the request, which is used to locate and troubleshoot issues.

24A20733-10A0-4AF6-BE6B-E3322413BB68

ResultList

array<object>

An array that consists of file detection results.

Result

object

The information about the file detection result.

HashKey

string

The identifier of the file. Only MD5 hash values are supported.

0a212417e65c26ff133cfff28f6c\*\*\*\*

Result

integer

The file detection result. Valid values:

-   **0**: The file is normal.
-   **1**: The file is suspicious.
-   **3**: The detection is in progress.

0

Score

integer

The score of file detection result.

**Note** A higher score indicates a more suspicious file.

100

VirusType

string

The type of the virus. Valid values:

-   **Trojan**: trojan horse
-   **WebShell**: webshell
-   **Backdoor**: backdoor program
-   **RansomWare**: ransomware
-   **Scanner**: scanner
-   **Stealer**: tool that is used to steal information
-   **Malbaseware**: tainted basic software
-   **Hacktool**: attacker tool
-   **Engtest**: engine test program
-   **Downloader**: trojan downloader
-   **Virus**: infectious virus
-   **Miner**: mining program
-   **Worm**: worm
-   **DDoS**: DDoS trojan
-   **Malware**: malicious program
-   **RiskWare**: software that has risks
-   **Proxytool**: proxy
-   **Suspicious**: suspicious program
-   **MalScript**: malicious script
-   **Rootkit**: rootkit
-   **Exploit**: exploit

WEBSHELL

Code

string

The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.

200

Message

string

The error message returned.

successful

Ext

string

The extended information about the file detection result.

{"HighLight":\[\[23245,23212\]\]}

Compress

boolean

Whether to identify as a compressed package. Valid values:

-   **true**: Yes.
-   **false**: No.

false

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "24A20733-10A0-4AF6-BE6B-E3322413BB68",
  "ResultList": [
    {
      "HashKey": "0a212417e65c26ff133cfff28f6c****",
      "Result": 0,
      "Score": 100,
      "VirusType": "WEBSHELL",
      "Code": 200,
      "Message": "successful",
      "Ext": {
        "HighLight": [
          [
            23245,
            23212
          ]
        ]
      },
      "Compress": false
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

RequestTooFrequently

Request too frequently, please try again later

\-

400

GetResultFail

Get result fail, found no detect record for this file or result has been expired

\-

400

InvalidApiDetectType

Unsupported Api Detect Type.

The file type is not supported.

403

NoPermission

caller has no permission

You are not authorized to do this operation.

500

ServerError

ServerError

\-

500

SystemBusy

System busy, please try again later.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Sas/2018-12-03/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-04-16

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Sas/2018-12-03/GetFileDetectResult?updateTime=2024-04-16#workbench-doc-change-demo)

2023-06-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Sas/2018-12-03/GetFileDetectResult?updateTime=2023-06-19#workbench-doc-change-demo)
