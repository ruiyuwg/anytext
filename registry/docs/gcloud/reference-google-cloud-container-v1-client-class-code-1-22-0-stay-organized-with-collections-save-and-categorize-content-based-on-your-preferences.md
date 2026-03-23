-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Container V1 Client - Class Code (1.22.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.1 (latest) 2.8.0 2.7.0 2.6.1 2.5.0 2.4.0 2.3.4 2.2.1 2.1.0 2.0.0 1.33.0 1.32.0 1.31.0 1.30.3 1.24.0 1.23.0 1.22.0 1.21.1 1.20.0 1.19.0 1.18.0 1.17.1 1.16.0 1.15.0 1.14.0 1.13.1 1.12.1 1.10.3 1.9.1

Reference documentation and code samples for the Google Cloud Container V1 Client class Code.

Code for each condition

Protobuf type `google.container.v1.StatusCondition.Code`

## Namespace

Google \\ Cloud \\ Container \\ V1 \\ StatusCondition

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

### UNKNOWN

```
Value: 0
```

UNKNOWN indicates a generic condition.

Generated from protobuf enum `UNKNOWN = 0;`

### GCE\_STOCKOUT

```
Value: 1
```

GCE\_STOCKOUT indicates that Google Compute Engine resources are temporarily unavailable.

Generated from protobuf enum `GCE_STOCKOUT = 1;`

### GKE\_SERVICE\_ACCOUNT\_DELETED

```
Value: 2
```

GKE\_SERVICE\_ACCOUNT\_DELETED indicates that the user deleted their robot service account.

Generated from protobuf enum `GKE_SERVICE_ACCOUNT_DELETED = 2;`

### GCE\_QUOTA\_EXCEEDED

```
Value: 3
```

Google Compute Engine quota was exceeded.

Generated from protobuf enum `GCE_QUOTA_EXCEEDED = 3;`

### SET\_BY\_OPERATOR

```
Value: 4
```

Cluster state was manually changed by an SRE due to a system logic error.

Generated from protobuf enum `SET_BY_OPERATOR = 4;`

### CLOUD\_KMS\_KEY\_ERROR

```
Value: 7
```

Unable to perform an encrypt operation against the CloudKMS key used for etcd level encryption.

Generated from protobuf enum `CLOUD_KMS_KEY_ERROR = 7;`

### CA\_EXPIRING

```
Value: 9
```

Cluster CA is expiring soon.

Generated from protobuf enum `CA_EXPIRING = 9;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
