-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Sql Admin V1 Client - Class DemoteMasterMySqlReplicaConfiguration (0.18.0) Stay organized with collections Save and categorize content based on your preferences.

1.8.0 (latest) 1.7.0 1.6.0 1.5.0 1.4.0 1.3.1 1.2.6 1.1.0 1.0.0 0.19.0 0.18.0 0.17.1 0.16.1 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.1 0.2.12

Reference documentation and code samples for the Google Cloud Sql Admin V1 Client class DemoteMasterMySqlReplicaConfiguration.

Read-replica configuration specific to MySQL databases.

Generated from protobuf message `google.cloud.sql.v1.DemoteMasterMySqlReplicaConfiguration`

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

`↳ kind`

`string`  

This is always `sql#demoteMasterMysqlReplicaConfiguration`.

`↳ username`

`string`  

The username for the replication connection.

`↳ password`

`string`  

The password for the replication connection.

`↳ client_key`

`string`  

PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. The format of the replica's private key can be either PKCS #1 or PKCS #8.

`↳ client_certificate`

`string`  

PEM representation of the replica's x509 certificate.

`↳ ca_certificate`

`string`  

PEM representation of the trusted CA's x509 certificate.

### getKind

This is always `sql#demoteMasterMysqlReplicaConfiguration`.

**Returns**

**Type**

**Description**

`string`

### setKind

This is always `sql#demoteMasterMysqlReplicaConfiguration`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getUsername

The username for the replication connection.

**Returns**

**Type**

**Description**

`string`

### setUsername

The username for the replication connection.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPassword

The password for the replication connection.

**Returns**

**Type**

**Description**

`string`

### setPassword

The password for the replication connection.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getClientKey

PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. The format of the replica's private key can be either PKCS #1 or PKCS #8.

**Returns**

**Type**

**Description**

`string`

### setClientKey

PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. The format of the replica's private key can be either PKCS #1 or PKCS #8.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getClientCertificate

PEM representation of the replica's x509 certificate.

**Returns**

**Type**

**Description**

`string`

### setClientCertificate

PEM representation of the replica's x509 certificate.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCaCertificate

PEM representation of the trusted CA's x509 certificate.

**Returns**

**Type**

**Description**

`string`

### setCaCertificate

PEM representation of the trusted CA's x509 certificate.

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
