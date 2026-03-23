Updates an SAP HANA instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/UpdateHanaInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/UpdateHanaInstance)

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

hbr:UpdateHanaInstance

update

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

VaultId

string

No

The ID of the backup vault.

v-0003v4ah\*\*\*\*\*\*9xp

ClusterId

string

No

The ID of the SAP HANA instance.

cl-000axjt\*\*\*\*\*\*c6j8

HanaName

string

No

The name of the SAP HANA instance.

SAP-HANA-DEV

Host

string

No

The private or internal IP address of the host where the primary node of the SAP HANA instance resides.

47.100.XX.XX

InstanceNumber

integer

Yes

The instance number of the SAP HANA system.

00

UserName

string

No

The username of the SYSTEMDB database.

admin

Password

string

No

The password that is used to connect with the SAP HANA database.

\*\*\*\*\*\*\*\*\*\*

UseSsl

boolean

Yes

Specifies whether to connect with the SAP HANA database over Secure Sockets Layer (SSL). Valid values:

-   true: The SAP HANA database is connected over SSL.
-   false: The SAP HANA database is not connected over SSL.

true

ValidateCertificate

boolean

Yes

Specifies whether to verify the SSL certificate of the SAP HANA database. Valid values:

-   true: The SSL certificate of the SAP HANA database is verified.
-   false: The SSL certificate of the SAP HANA database is not verified.

false

AlertSetting

string

No

The alert settings. Valid value: INHERITED, which indicates that the Cloud Backup client sends alert notifications by using the same method configured for the backup vault.

INHERITED

ResourceGroupId

string

No

The ID of the resource group.

rg-aekzvx7d3c4kpny

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The response code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

A6AB6D5A-9D21-5529-9335-A894FB045ED6

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "A6AB6D5A-9D21-5529-9335-A894FB045ED6",
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
