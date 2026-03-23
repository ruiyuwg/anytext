This topic describes how to connect to an ApsaraDB RDS for MySQL instance by using the MySQL CLI and Java Database Connectivity (JDBC) after you configure the SSL encryption feature.

## Prerequisites

-   The SSL encryption feature is enabled for the RDS instance. If the feature is disabled, enable the feature based on the instructions provided in [Use a cloud certificate to enable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#prereq-67l-5eq-ahw)
    
-   The server CA certificate is obtained. For more information about how to obtain the certificate, see [Step 2: Download the CA certificate](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#1bf77be069zxo) or [Use a custom certificate to enable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-custom-certificate).
    

## Procedure

### **Use a cloud certificate to connect to your RDS instance**

After you enable the SSL encryption feature, the type and settings of the client determine whether to encrypt the connections between the client and the RDS instance. For example, the connections from the client to the RDS instance may be encrypted by default. You can modify the settings or code of the client to enable connection encryption and verify the identity of the RDS instance.

**Important**

The forced SSL encryption feature is supported only by RDS instances that run MySQL 5.7 and MySQL 8.0 and a minor engine version of 20241130 or later. If you enable the forced SSL encryption feature for an instance, the client can communicate with the instance only through SSL connections.

#### **CLI**

For clients that run MySQL 5.7.11 or later, you can add the --ssl-mode option to the connection command to configure the SSL encryption feature.

**Note**

For clients that run MySQL versions earlier than MySQL 5.7.11 and MariaDB clients, you can use options such as --ssl and --ssl-verify-server-cert to configure the SSL encryption feature. For more information, see official MariaDB and MySQL documentation.

-   If the --ssl-mode option is set to DISABLED, connections are not encrypted.
    
-   If the -- ssl-mode option is set to PREFERRED or is not used, the system attempts to establish encrypted connections. If the attempt fails, unencrypted connections are established.
    
-   If the -- ssl-mode option is set to REQUIRED, only encrypted connections are allowed. If the connections cannot be encrypted, the connections fail to be established.
    
-   If the -- ssl-mode option is set to VERIFY\_CA, only encrypted connections are allowed, and the CA certificate on the on-premises device must be used to check whether the server certificate is valid.
    
-   If the -- ssl-mode option is set to VERIFY\_IDENTITY, only encrypted connections are allowed, and the CA certificate on the on-premises device must be used to check whether the server certificate is valid and whether the hostname or IP address of the server certificate matches the hostname or IP address of the actual connection.
    

Example 1: The system attempts to establish encrypted connections. If the attempt fails, unencrypted connections are established.

```
mysql -h {Endpoint of the RDS instance} -u {Account of the RDS instance} -p --ssl-mode=PREFERRED
```

Example 2: Encrypted connections are required, and the validity of the server certificate must be verified.

```
mysql -h {Endpoint of the RDS instance} -u {Account of the RDS instance} -p --ssl-mode=VERIFY_CA --ssl-ca={Path to the CA certificate}/ApsaraDB-CA-Chain.pem
```

**Note**

-   You must configure the Endpoint of the RDS instance, Account of the RDS instance, and Path to the CA certificate parameters based on your business requirements.
    
-   For more information about the --ssl-mode option, see MySQL documentation.
    

#### **MySQL Workbench**

1.  Start MySQL Workbench and choose **Database** > **Manage Connections**.
    
2.  Enter the username and password of the account and the endpoint that are used to connect to the RDS instance.
    
3.  On the **SSL** tab, configure the **Use SSL** parameter, set the **SSL CA File** parameter to the downloaded PEM-formatted CA certificate, and then click **Test Connection** or **OK**.
    
    **Note**
    
    For more information about the options of the Use SSL parameter, see the description of the --ssl-mode option in the "CLI" section of this topic.
    

#### **DMS**

When you register the RDS instance with Data Management (DMS), you can configure the **Enable SSL** parameter. For more information, see [Register an Alibaba Cloud database instance](/help/en/dms/getting-started/register-an-apsaradb-instance).

You can also right-click an instance, select **Edit**, and then configure the Enable SSL parameter in the **Advanced Information** section.

#### **Application code**

### **Java**

MySQL Connector/J (mysql-connector-java) is the official JDBC driver for MySQL. In this example, mysql-connector-java 8.0.19 is used as the dependency.

```
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.19</version>
</dependency>
```

**Note**

The following code provides an example on how to use the sslMode property to specify the SSL mode. The property is supported from mysql-connector-java 8.0.13. If you use an earlier version, you must use the useSSL, requireSSL, and verifyServerCertificate properties. For more information, see [MySQL documentation](https://dev.mysql.com/doc/connector-j/en/connector-j-connp-props-security.html#cj-conn-prop_requireSSL).

Sample code:

```
package com.aliyun.sample;

import com.mysql.cj.jdbc.MysqlDataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class Sample {

    public static void main(String[] args) {

        Connection conn = null;
        MysqlDataSource mysqlDS=null;

        try{
            mysqlDS = new MysqlDataSource();
            //You can specify the sslMode property based on your business requirements. For more information about the options for this property, see the description in the "CLI" section of this topic. 
            mysqlDS.setSslMode("VERIFY_IDENTITY");
          
            //The truststore is used to store the CA certificate. In this example, the truststore type is set to JKS. 
            mysqlDS.setTrustCertificateKeyStoreType("JKS");
            //You must replace the content following file:/ with the actual path to your ApsaraDB-CA-Chain.jks file. 
            mysqlDS.setTrustCertificateKeyStoreUrl("file:/D:\\ApsaraDB-CA-Chain\\ApsaraDB-CA-Chain.jks");
            //The password of the downloaded JKS file is fixed as apsaradb. 
            mysqlDS.setTrustCertificateKeyStorePassword("apsaradb");
          
            //The endpoint of your RDS instance.
            mysqlDS.setServerName("rm-xxxxxx.mysql.rds.aliyuncs.com");
            //The port number of your RDS instance.
            mysqlDS.setPort(3306);
            //The username of the account that is used to connect to your RDS instance.
            mysqlDS.setUser("xxxxxx");
            //The password of the account that is used to connect to your RDS instance.
            mysqlDS.setPassword("xxxxxx");
            //The name of the database that you want to connect on your RDS instance.
            mysqlDS.setDatabaseName("xxxxxx");

            conn = mysqlDS.getConnection();

        }catch(Exception e){
            e.printStackTrace();
        } finally {
            try {
                if (conn != null)
                    conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

}
```

### **Python**

```
# Run the pip install pymysql command to install PyMySQL.

import pymysql

try:
    ssl_config = {"ca":"/path/to/path/ca.crt", "mode":"VERIFY_CA"} # You must set ca to the path to the certificate and mode to the SSL mode that you use.
    conn = pymysql.connect(host='******.mysql.rds.aliyuncs.com', user='*****', passwd='******', db='*****', ssl=ssl_config)
    cursor = conn.cursor()
    cursor.execute('select version()')
    data = cursor.fetchone()
    print('Database version:', data[0])
    cursor.close()
except pymysql.Error as e:
    print(e)
```

### **Use a custom certificate to connect to your RDS instance**

#### **CLI**

For clients that run MySQL 5.7.11 or later, you can add the --ssl-mode option to the connection command to configure the SSL encryption feature.

**Note**

For clients that run MySQL versions earlier than MySQL 5.7.11 and MariaDB clients, you can use options such as --ssl and --ssl-verify-server-cert to configure the SSL encryption feature. For more information, see official MariaDB and MySQL documentation.

-   If the --ssl-mode option is set to DISABLED, connections are not encrypted.
    
-   If the -- ssl-mode option is set to PREFERRED or is not used, the system attempts to establish encrypted connections. If the attempt fails, unencrypted connections are established.
    
-   If the -- ssl-mode option is set to REQUIRED, only encrypted connections are allowed. If the connections cannot be encrypted, the connections fail to be established.
    
-   If the -- ssl-mode option is set to VERIFY\_CA, only encrypted connections are allowed, and the CA certificate on the on-premises device must be used to check whether the server certificate is valid.
    
-   If the -- ssl-mode option is set to VERIFY\_IDENTITY, only encrypted connections are allowed, and the CA certificate on the on-premises device must be used to check whether the server certificate is valid and whether the hostname or IP address of the server certificate matches the hostname or IP address of the actual connection.
    

Examples:

1.  The system attempts to establish encrypted connections. If the attempt fails, unencrypted connections are established.
    
    ```
    mysql -h {Endpoint of the RDS instance} -u {Account of the RDS instance} -p --ssl-mode=PREFERRED
    ```
    
2.  Encrypted connections are required, and the validity of the server certificate must be verified.
    
    ```
    mysql -h {Endpoint of the RDS instance} -u {Account of the RDS instance} -p --ssl-mode=VERIFY_CA --ssl-ca={Path to the custom CA certificate}
    ```
    

**Note**

-   You must configure the `Endpoint of the RDS instance`, `Account of the RDS instance`, and `Path to the custom CA certificate` parameters based on your business requirements.
    
-   For more information about the --ssl-mode option, see [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/connecting.html).
    

#### **MySQL Workbench**

1.  Open MySQL Workbench and choose **Database > Manage Connections**.
    
2.  Enter the username and password of the account and the endpoint that are used to connect to the RDS instance.
    
3.  On the **SSL** tab, configure the **Use SSL** and **SSL CA File** parameters and click **Test Connection** or **OK**. If a cloud certificate is used, set the **SSL CA File** parameter to the downloaded PEM-formatted CA certificate. If a custom certificate is used, set the SSL CA File parameter to the custom CA certificate.
    

**Note**

For more information about the options of the Use SSL parameter, see the description of the --ssl-mode option in the "CLI" section of this topic.

#### **DMS**

When you register the RDS instance with DMS, you can configure the **Enable SSL** parameter. For more information, see [Register an Alibaba Cloud database instance](/help/en/dms/getting-started/register-an-apsaradb-instance).

You can also right-click an instance, select **Edit**, and then configure the Enable SSL parameter in the **Advanced Information** section.

#### **Application code**

##### **Java**

MySQL Connector/J (mysql-connector-java) is the official JDBC driver for MySQL. In this example, mysql-connector-java 8.0.19 is used as the dependency.

```
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.19</version>
</dependency>
```

**Important**

If a custom certificate is used, you must perform the following operations to create a JKS file:

1.  Use OpenSSL to convert your client certificate and private key to PKCS#12 files. The keytool utility does not support a PEM-formatted private key or certificate.
    
    ```
    openssl pkcs12 -export -in {Custom CA certificate} -inkey {Private key of the custom CA certificate} -out keystore.p12 -name ganyang -CAfile {Custom CA certificate}
    # Enter the password that is used to connect to the RDS instance.
    Enter Encryption Password:
    Verifying - Enter Encryption Password:
    ```
    
2.  Use keytool to import the newly created PKCS#12 files into a new JKS file:
    
    ```
    keytool -importkeystore -deststorepass JKS-password -destkeypass key-password -destkeystore keystore.jks -deststoretype pkcs12 -srckeystore keystore.p12 -srcstoretype pkcs12 -srcstorepass P12-password -alias your-alias
    ```
    
    Parameter description:
    
    ```
    -deststorepass: the password specified for the JKS file. 
    -destkeypass: the password specified for the key in the JKS file. 
    -destkeystore: the JKS file that you want to create or an existing JKS file. 
    -deststoretype: The format of the file that you want to create is PKCS#12. 
    -srckeystore: the previously created PKCS#12 files. 
    -srcstoretype: The format of the source file is PKCS#12. 
    -srcstorepass: the password that is used to protect the PKCS#12 files. 
    -alias: the alias specified for the client certificate and private key of the user.
    ```
    
3.  Obtain the created JKS file. After the keytool-based import succeeds, you can find the keystore.jks file in the execution directory.
    

**Note**

The following code provides an example on how to use the sslMode property to specify the SSL mode. The property is supported from mysql-connector-java 8.0.13. If you use an earlier version, you must use the useSSL, requireSSL, and verifyServerCertificate properties. For more information, see [MySQL documentation](https://dev.mysql.com/doc/connector-j/en/connector-j-connp-props-security.html#cj-conn-prop_requireSSL).

```
package com.aliyun.sample;

import com.mysql.cj.jdbc.MysqlDataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class Sample {

    public static void main(String[] args) {

        Connection conn = null;
        MysqlDataSource mysqlDS=null;

        try{
            mysqlDS = new MysqlDataSource();
            //You can specify the sslMode property based on your business requirements. For more information about the options for this property, see the description in the "CLI" section of this topic. 
            mysqlDS.setSslMode("VERIFY_IDENTITY");

            // The following code provides an example on how to use the JKS file of a cloud certificate. If a custom certificate is used, you must replace the related parameters with the path and password of the JKS file that is generated by using the custom certificate.
            //The truststore is used to store the CA certificate. In this example, the truststore type is set to JKS. 
            mysqlDS.setTrustCertificateKeyStoreType("JKS");
            //You must replace the content following file:/ with the actual path to your ApsaraDB-CA-Chain.jks file.
            mysqlDS.setTrustCertificateKeyStoreUrl("file:/D:\\ApsaraDB-CA-Chain\\ApsaraDB-CA-Chain.jks");
            //The password of the downloaded JKS file is fixed as apsaradb. 
            mysqlDS.setTrustCertificateKeyStorePassword("apsaradb");
          
            //The endpoint of your RDS instance.
            mysqlDS.setServerName("rm-xxxxxx.mysql.rds.aliyuncs.com");
            //The port number of your RDS instance.
            mysqlDS.setPort(3306);
            //The username of the account that is used to connect to your RDS instance.
            mysqlDS.setUser("xxxxxx");
            //The password of the account that is used to connect to your RDS instance.
            mysqlDS.setPassword("xxxxxx");
            //The name of the database that you want to connect on your RDS instance.
            mysqlDS.setDatabaseName("xxxxxx");

            conn = mysqlDS.getConnection();

        }catch(Exception e){
            e.printStackTrace();
        } finally {
            try {
                if (conn != null)
                    conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

}
```

##### **Python**

```
# Run the pip install pymysql command to install PyMySQL.

import pymysql

try:
    ssl_config = {"ca":"/path/to/path/ca.crt", "mode":"VERIFY_CA"} # You must set ca to the path to the certificate and mode to the SSL mode that you use.
    conn = pymysql.connect(host='******.mysql.rds.aliyuncs.com', user='*****', passwd='******', db='*****', ssl=ssl_config)
    cursor = conn.cursor()
    cursor.execute('select version()')
    data = cursor.fetchone()
    print('Database version:', data[0])
    cursor.close()
except pymysql.Error as e:
    print(e)
```
