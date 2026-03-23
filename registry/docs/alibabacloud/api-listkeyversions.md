Queries all versions of a key.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms&api=ListKeyVersions&type=RPC&version=2016-01-20)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

ListKeyVersions

The operation that you want to perform. Set the value to **ListKeyVersions**.

KeyId

String

Yes

key-hzz630494463ejqjx\*\*\*\*

The ID, alias, or Alibaba Cloud Resource Name (ARN) of the key. For more information, see [Manage a key alias](/help/en/kms/key-management-service/user-guide/manage-a-key-alias).

**Note** When you access a key within another Alibaba Cloud account, you must enter the ARN of the key. The key ARN is in the `acs:kms:${region}:${account}:key/${keyid}` format.

PageNumber

Integer

Yes

1

The page number.

Pages start from page 1.

Default value: 1.

PageSize

Integer

No

10

The number of entries per page.

Valid values: 0 to 101.

Default value: 10.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

PageSize

Integer

10

The number of entries per page.

RequestId

String

f71204c4-53cd-4eea-b405-653ba2db7e86

The ID of the request, which is used to locate and troubleshoot issues.

PageNumber

Integer

1

The page number.

TotalCount

Integer

3

The total number of returned key versions.

KeyVersions

Array of KeyVersion

A list of key versions.

KeyVersion

KeyId

String

key-hzz630494463ejqjx\*\*\*\*

The ID of the key. If KeyId is set to the alias or ARN of the key, the ID of the key is returned.

KeyVersionId

String

1e3304fd-68ac-4d5b-8886-ae5f01a1\*\*\*\*

The ID of the key version. The ID must be globally unique.

CreationDate

String

2024-03-25T10:42:40Z

The date and time when the key version is created. The time is displayed in UTC.

## Examples

Sample requests

```
http(s)://[Endpoint]/?Action=ListKeyVersions
&KeyId=key-hzz630494463ejqjx****
&PageNumber=1
&PageSize=10
&Common request parameters
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<ListKeyVersionsResponse>
    <PageSize>10</PageSize>
    <RequestId>f71204c4-53cd-4eea-b405-653ba2db7e86</RequestId>
    <PageNumber>1</PageNumber>
    <TotalCount>3</TotalCount>
    <KeyVersions>
        <KeyId>key-hzz630494463ejqjx****</KeyId>
        <KeyVersionId>1e3304fd-68ac-4d5b-8886-ae5f01a1****</KeyVersionId>
        <CreationDate>2024-03-25T10:42:40Z</CreationDate>
    </KeyVersions>
</ListKeyVersionsResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "PageSize" : 10,
  "RequestId" : "f71204c4-53cd-4eea-b405-653ba2db7e86",
  "PageNumber" : 1,
  "TotalCount" : 3,
  "KeyVersions" : [ {
    "KeyId" : "key-hzz630494463ejqjx****",
    "KeyVersionId" : "1e3304fd-68ac-4d5b-8886-ae5f01a1****",
    "CreationDate" : "2024-03-25T10:42:40Z"
  } ]
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter

The specified parameter is not valid.

The specified parameter is invalid.

404

Forbidden.KeyNotFound

The specified Key is not found.

The specified key does not exist.

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Kms).
