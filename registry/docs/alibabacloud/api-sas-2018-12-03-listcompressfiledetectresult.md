Queries the detection results of the files extracted from a package.

## Operation description

You can call this operation to query the detection results of files only if the files are pushed to the cloud for detection and in the form of packages. You can repeatedly query the detection results of files within 5 hours because the results are retained for 5 hours. For more information about how to push a file to the cloud for detection, see the CreateFileDetect operation. For more information about how to query file detection results, see the GetFileDetectResult operation.

The HashKey parameter is included in all API operations that are related to the file detection feature. The parameter specifies the unique identifier of a file. Only hexadecimal MD5 hash values of complete file content are supported. You must calculate the required MD5 hash value before you call this operation.

To calculate the hexadecimal MD5 hash value for a file, you can perform the following steps:

1\. Use the MD5 algorithm to encrypt data and generate a 128-bit hash value. You can use a tool such as MessageDigest for Java and the hashlib module for Python.

2\. Convert the hash value to a hexadecimal string. You can use a tool such as Codec for Java and the hex() function for Python.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Sas/2018-12-03/ListCompressFileDetectResult)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Sas/2018-12-03/ListCompressFileDetectResult)

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

yundun-sas:ListCompressFileDetectResult

list

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

27.9.XX.XX

HashKey

string

No

The identifier of the file. Only MD5 hash values are supported.

0a212417e65c26ff133cfff28f6c\*\*\*\*

CurrentPage

integer

Yes

The page number. Default value: 1.

1

PageSize

integer

Yes

The number of entries per page. Default value: 20.

20

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

E10BAF1C-A6C5-51E2-866C-76D5922E\*\*\*\*

PageInfo

object

The pagination information.

CurrentPage

integer

The page number.

1

PageSize

integer

The number of entries per page.

20

TotalCount

integer

The total number of entries returned.

55

ResultList

array<object>

The detection results of files.

ResultList

object

The detection results of the file.

HashKey

string

The identifier of the file.

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

The score of the file detection result. The following list describes mappings between the score ranges and risk levels:

-   0 to 60: normal
-   61 to 70: risky
-   71 to 80: suspicious
-   81 to 100: malicious

**Note** A higher score indicates a more suspicious file.

100

VirusType

string

The type of the virus. Valid values:

-   **Trojan**: self-mutating trojan
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
-   **Backdoor**: reverse shell
-   **RiskWare**: software that has risks
-   **Proxytool**: proxy
-   **Suspicious**: suspicious program
-   **MalScript**: malicious script
-   **Rootkit**: rootkit
-   **Exploit**: exploit

WebShell

Ext

string

The extended information about the file detection result.

{ "HighLight": \[ \[ 23245, 23212 \] \], "FileLabel": \[ "PE32", "Zip", "SFX", "encrypted" \] }

Path

string

The path to the file within the package.

/root/1.zip/test\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "E10BAF1C-A6C5-51E2-866C-76D5922E****",
  "PageInfo": {
    "CurrentPage": 1,
    "PageSize": 20,
    "TotalCount": 55
  },
  "ResultList": [
    {
      "HashKey": "0a212417e65c26ff133cfff28f6c****",
      "Result": 0,
      "Score": 100,
      "VirusType": "WebShell",
      "Ext": {
        "HighLight": [
          [
            23245,
            23212
          ]
        ],
        "FileLabel": [
          "PE32",
          "Zip",
          "SFX",
          "encrypted"
        ]
      },
      "Path": "/root/1.zip/test****"
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

No change history
