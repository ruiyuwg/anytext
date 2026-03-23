Queries all customer master keys (CMKs) of the current Alibaba Cloud account in the current region.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms&api=ListKeys&type=RPC&version=2016-01-20)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

ListKeys

The operation that you want to perform. Set the value to **ListKeys**.

PageNumber

Integer

No

1

The page number.

Pages start from page 1.

Default value: 1.

PageSize

Integer

No

10

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

Filters

String

No

\[{"Key":"KeyState", "Values":\["Enabled","Disabled"\]}\]

The CMK filter. The filter consists of one or more key-values pairs. You can specify a maximum of 10 key-values pairs.

-   Key
    -   Description: the property that you want to filter.
    -   Type: string.
-   Values
    -   Description: the value to be included after filtering.
    -   Format: string array.
    -   Length: 0 to 10.

Valid values:

-   If the Key field is set to **KeyState**, set the value to a key state. Valid values are Enabled, Disabled, PendingDeletion, or PendingImport.
-   If the Key field is set to **KeySpec**, set the value to a key type. Valid values are Aliyun\_AES\_256, Aliyun\_SM4, RSA\_2048, EC\_P256, EC\_P256K, EC\_SM2, and Aliyun\_SM4.
    
    Note: You can create EC\_SM2 or Aliyun\_SM4 keys only in regions where State Cryptography Administration (SCA)-certified managed hardware security modules (HSMs) reside. For more information about the regions, see [Supported regions](/help/en/kms/key-management-service/support/overview-12). If your region does not support EC\_SM2 and Aliyun\_SM4, the two values are ignored if they are specified.
    
-   If the Key field is set to **KeyUsage**, set the value to a key purpose. Valid values are ENCRYPT/DECRYPT and SIGN/VERIFY. ENCRYPT/DECRYPT indicates that the key is used to encrypt and decrypt data. SIGN/VERIFY indicates that the key is used to sign data and verify digital signatures.
-   If the Key field is set to **ProtectionLevel**, set the value to a key protection level. Valid values are SOFTWARE or HSM.
    
    You can set ProtectionLevel to HSM in only specific regions. For more information about the regions, see [Supported regions](/help/en/kms/key-management-service/support/overview-12). If the region does not support HSM, the value is ignored if the value is specified.
    
-   If the Key field is set to **CreatorType**, set the value to a creator type. Valid values are User and Service. User indicates that CMKs created by the current account are queried. Service indicates that CMKs automatically created by other cloud services authorized by the current account are queried.
-   If the Key field is set to **DKMSInstanceId**, set the value to the ID of your Key Management Service (KMS) instance.
-   If the Key field is set to **keyId**, set the value to a key ID.
-   If the Key field is set to **AliasName**, set the value to a key alias.
-   If the Key field is set to **Creator**, set the value to a key creator.
-   If the Key field is set to **TagKey**, set the value to a tag key.
-   If the Key field is set to **TagValue**, set the value to a tag value.

The logical relationship between different keys is AND. The logical relationship between values of the Values field in a key-value pair is OR. Example:

`[ {"Key":"KeyState", "Values":["Enabled","Disabled"]}, {"Key":"KeyState", "Values":["PendingDeletion"]}, {"Key":"KeySpec", "Values":["Aliyun_AES_256"]} ]`

. In this example, the semantics are:

`(KeyState=Enabled OR KeyState=Disabled OR KeyState=PendingDeletion) AND (KeySpec=Aliyun_AES_ 256)`.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

PageNumber

Integer

1

The page number.

PageSize

Integer

10

The number of entries per page.

RequestId

String

8252db58-2036-408c-a3d5-56e656dc2551

The request ID.

TotalCount

Integer

3

The total number of CMKs.

Keys

Array of Key

An array that consists of CMKs.

Key

KeyId

String

08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4\*\*\*\*

The ID of the CMK. The ID must be globally unique.

KeyArn

String

acs:kms:cn-hangzhou:123456:key/80e9409f-78fa-42ab-84bd-83f40c81\*\*\*\*

The Alibaba Cloud Resource Name (ARN) of the CMK.

## Examples

Sample requests

```
http(s)://[Endpoint]/?Action=ListKeys
&PageNumber=1
&PageSize=10
&Filters=[{"Key":"KeyState", "Values":["Enabled","Disabled"]}]
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<ListKeysResponse>
    <PageNumber>1</PageNumber>
    <PageSize>10</PageSize>
    <RequestId>8252db58-2036-408c-a3d5-56e656dc2551</RequestId>
    <TotalCount>3</TotalCount>
    <Keys>
        <KeyId>08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****</KeyId>
        <KeyArn>acs:kms:cn-hangzhou:123456:key/80e9409f-78fa-42ab-84bd-83f40c81****</KeyArn>
    </Keys>
</ListKeysResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "PageNumber" : 1,
  "PageSize" : 10,
  "RequestId" : "8252db58-2036-408c-a3d5-56e656dc2551",
  "TotalCount" : 3,
  "Keys" : [ {
    "KeyId" : "08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****",
    "KeyArn" : "acs:kms:cn-hangzhou:123456:key/80e9409f-78fa-42ab-84bd-83f40c81****"
  } ]
}
```

## Error codes

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Kms).
