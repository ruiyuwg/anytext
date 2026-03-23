Data transmitted between client applications and your AnalyticDB for PostgreSQL instance travels over the network in plain text by default. SSL encryption secures these connections at the transport layer, protecting data integrity and preventing unauthorized interception.

## Prerequisites

Before you begin, make sure that you have:

-   An AnalyticDB for PostgreSQL instance
    
-   Access to the [AnalyticDB for PostgreSQL console](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list)
    

## Usage notes

-   The SSL certificate is valid for **one year**. Renew the certificate before it expires. If the certificate expires, applications that use encrypted connections cannot connect to the instance.
    
-   SSL encryption can significantly increase CPU utilization and adds network round-trip time. Enable SSL only when you need to encrypt public connections to the instance.
    

## Enable SSL encryption

**Warning**

This operation restarts the instance. Perform this operation during off-peak hours.

1.  Log in to the [AnalyticDB for PostgreSQL console](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list).
    
2.  In the upper-left corner of the console, select the region where the instance resides.
    
3.  Find the instance and click its ID.
    
4.  In the left-side navigation pane, click **Security Controls**.
    
5.  Click the **SSL Encryption** tab.
    
6.  Turn on **SSL Encryption**.
    
7.  In the **Enable SSL Encryption** message, click **OK**. The instance restarts. After the restart completes and the SSL status shows **Enabled**, proceed to download the certificate.
    
8.  Click **Download Certificate**.
    

## Certificate files

The downloaded package contains three certificate files:

**File**

**Format**

**Use case**

PEM file

PEM

Non-Windows applications: psql, Python, Go, Linux, or macOS clients

P7B file

PKCS#7

Windows applications

JKS file

Java KeyStore

Java applications. Default truststore password: `apsaradb`

### JDK 7 and JDK 8 configuration

If you use the JKS file with JDK 7 or JDK 8, modify the following properties in the `jre/lib/security/Java.security` file on the application host:

```
jdk.tls.disabledAlgorithms=SSLv3, RC4, DH keySize < 224
jdk.certpath.disabledAlgorithms=MD2, RSA keySize < 1024
```

Without this change, the SSL handshake fails with the following error:

```
javax.net.ssl.SSLHandshakeException: DHPublicKey does not comply to algorithm constraints
```

## Connect with SSL

After you enable SSL encryption and download the certificate, configure your client to use SSL.

### psql

Use the `sslmode` and `sslrootcert` parameters to connect with SSL:

```
psql "host=<your-instance-endpoint> port=<port> dbname=<database> user=<username> sslmode=verify-ca sslrootcert=<path-to-pem-file>"
```

Replace the following placeholders:

**Placeholder**

**Description**

**Example**

`<your-instance-endpoint>`

Instance connection address

gp-bp1xxxxx-master.gpdb.rds.aliyuncs.com

`<port>`

Service port

5432

`<database>`

Target database name

postgres

`<username>`

Database account

dbadmin

`<path-to-pem-file>`

Path to the downloaded PEM certificate file

/home/user/certs/ca-cert.pem

### JDBC

For Java applications, add the SSL parameters to the JDBC connection URL:

```
jdbc:postgresql://<your-instance-endpoint>:<port>/<database>?sslmode=verify-ca&sslrootcert=<path-to-pem-file>
```

If you use the JKS file instead of the PEM file, configure the truststore as JVM arguments:

```
java -Djavax.net.ssl.trustStore=<path-to-jks-file> \
     -Djavax.net.ssl.trustStorePassword=apsaradb \
     -jar your-application.jar
```

### sslmode options

PostgreSQL clients support the following `sslmode` values:

**sslmode**

**Encryption**

**Certificate verification**

**Recommended**

`disable`

No

No

No

`allow`

Only if server requires it

No

No

`prefer`

Yes, if server supports it

No

No

`require`

Yes

No

Minimum for public connections

`verify-ca`

Yes

Verifies server certificate against CA

Yes

`verify-full`

Yes

Verifies certificate and hostname

Most secure

For public connections, use `verify-ca` or `verify-full` to validate the server certificate and prevent man-in-the-middle attacks.

## Verify SSL connections

After connecting with SSL, verify that encryption is active.

### Check the psql login banner

When you connect with psql, the login banner displays SSL connection details. The output is similar to:

```
Password for user dbadmin:
psql (14.0)
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256)
Type "help" for help.
```

The `SSL connection` line confirms that the connection is encrypted.

### Query connection status

To view SSL status for all active connections:

```
SELECT datname, usename, ssl, client_addr
FROM pg_stat_ssl
JOIN pg_stat_activity ON pg_stat_ssl.pid = pg_stat_activity.pid
ORDER BY ssl;
```

A value of `t` in the `ssl` column confirms that the connection uses SSL.

## Renew the SSL certificate

The SSL certificate expires after one year. Renew it before expiration to avoid connection failures.

**Warning**

This operation restarts the instance. Perform this operation during off-peak hours.

1.  Log in to the [AnalyticDB for PostgreSQL console](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list).
    
2.  In the upper-left corner of the console, select the region where the instance resides.
    
3.  Find the instance and click its ID.
    
4.  In the left-side navigation pane, click **Security Controls**.
    
5.  Click the **SSL Encryption** tab.
    
6.  Click **Update Validity** to the right of **SSL Encryption**.
    
7.  In the **Update SSL Certificate Validity** message, click **OK**.
    

After the instance restarts, download the new certificate and update it on all client applications.

## Disable SSL encryption

**Warning**

This operation restarts the instance. Perform this operation during off-peak hours.

1.  Log in to the [AnalyticDB for PostgreSQL console](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list).
    
2.  In the upper-left corner of the console, select the region where the instance resides.
    
3.  Find the instance and click its ID.
    
4.  In the left-side navigation pane, click **Security Controls**.
    
5.  Click the **SSL Encryption** tab.
    
6.  Turn off **SSL Encryption**.
    
7.  In the **Disable SSL Encryption** message, click **OK**.
    

After disabling SSL, update client connection strings to remove SSL-specific parameters such as `sslrootcert`.

## Troubleshooting

### SSLHandshakeException: DHPublicKey does not comply to algorithm constraints

**Cause:** The default JDK 7 or JDK 8 security configuration rejects the DH key size used by the server.

**Solution:** Modify the `jre/lib/security/Java.security` file:

```
jdk.tls.disabledAlgorithms=SSLv3, RC4, DH keySize < 224
jdk.certpath.disabledAlgorithms=MD2, RSA keySize < 1024
```

Restart the application after making this change.

### Connection refused after enabling SSL

**Cause:** The instance is still restarting after SSL was enabled.

**Solution:** Wait for the instance status to return to **Running** in the console before connecting.

### Certificate expired errors

**Cause:** The SSL certificate has exceeded its one-year validity period.

**Solution:** Renew the certificate by clicking **Update Validity** in the console, then download and deploy the new certificate to all clients.

## API reference

**Operation**

**Description**

[DescribeDBInstanceSSL](/help/en/doc-detail/208334.html#doc-api-gpdb-DescribeDBInstanceSSL)

Query SSL encryption settings for an instance

[ModifyDBInstanceSSL](/help/en/doc-detail/208322.html#doc-api-gpdb-ModifyDBInstanceSSL)

Enable or disable SSL encryption, or renew the SSL certificate
