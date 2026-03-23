-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Sql Admin V1 Client - Class AclEntry (0.19.0) Stay organized with collections Save and categorize content based on your preferences.

1.8.0 (latest) 1.7.0 1.6.0 1.5.0 1.4.0 1.3.1 1.2.6 1.1.0 1.0.0 0.19.0 0.18.0 0.17.1 0.16.1 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.1 0.2.12

Reference documentation and code samples for the Google Cloud Sql Admin V1 Client class AclEntry.

An entry for an Access Control list.

Generated from protobuf message `google.cloud.sql.v1.AclEntry`

## Namespace

Google \\ Cloud \\ Sql \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ value`

`string`  

The allowlisted value for the access control list.

`↳ expiration_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.

`↳ name`

`string`  

Optional. A label to identify this entry.

`↳ kind`

`string`  

This is always `sql#aclEntry`.

### getValue

The allowlisted value for the access control list.

**Returns**

**Type**

**Description**

`string`

### setValue

The allowlisted value for the access control list.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getExpirationTime

The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasExpirationTime

### clearExpirationTime

### setExpirationTime

The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getName

Optional. A label to identify this entry.

**Returns**

**Type**

**Description**

`string`

### setName

Optional. A label to identify this entry.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getKind

This is always `sql#aclEntry`.

**Returns**

**Type**

**Description**

`string`

### setKind

This is always `sql#aclEntry`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
