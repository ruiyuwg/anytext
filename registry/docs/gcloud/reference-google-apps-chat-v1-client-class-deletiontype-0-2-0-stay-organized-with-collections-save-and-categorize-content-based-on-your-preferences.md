-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Apps Chat V1 Client - Class DeletionType (0.2.0) Stay organized with collections Save and categorize content based on your preferences.

0.17.1 (latest) 0.17.0 0.16.1 0.15.0 0.14.0 0.13.1 0.12.1 0.11.2 0.10.0 0.9.0 0.8.1 0.7.2 0.6.1 0.5.0 0.4.0 0.3.0 0.2.0 0.1.4

Reference documentation and code samples for the Google Apps Chat V1 Client class DeletionType.

Who deleted the message and how it was deleted.

Protobuf type `google.chat.v1.DeletionMetadata.DeletionType`

## Namespace

Google \\ Apps \\ Chat \\ V1 \\ DeletionMetadata

## Methods

### static::name

**Parameter**

**Name**

**Description**

`value`

`mixed`  

### static::value

**Parameter**

**Name**

**Description**

`name`

`mixed`  

## Constants

### DELETION\_TYPE\_UNSPECIFIED

```
Value: 0
```

This value is unused.

Generated from protobuf enum `DELETION_TYPE_UNSPECIFIED = 0;`

### CREATOR

```
Value: 1
```

User deleted their own message.

Generated from protobuf enum `CREATOR = 1;`

### SPACE\_OWNER

```
Value: 2
```

The space owner deleted the message.

Generated from protobuf enum `SPACE_OWNER = 2;`

### ADMIN

```
Value: 3
```

A Google Workspace admin deleted the message.

Generated from protobuf enum `ADMIN = 3;`

### APP\_MESSAGE\_EXPIRY

```
Value: 4
```

A Chat app deleted its own message when it expired.

Generated from protobuf enum `APP_MESSAGE_EXPIRY = 4;`

### CREATOR\_VIA\_APP

```
Value: 5
```

A Chat app deleted the message on behalf of the user.

Generated from protobuf enum `CREATOR_VIA_APP = 5;`

### SPACE\_OWNER\_VIA\_APP

```
Value: 6
```

A Chat app deleted the message on behalf of the space owner.

Generated from protobuf enum `SPACE_OWNER_VIA_APP = 6;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
