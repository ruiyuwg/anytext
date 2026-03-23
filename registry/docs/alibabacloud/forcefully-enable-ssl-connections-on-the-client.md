After you enable Secure Sockets Layer (SSL) encryption, clients can still connect without SSL using the `PGSSLMODE=disable` parameter if client access control is not configured. To force clients to use SSL connections, follow the steps described in this topic.

## **Prerequisites**

-   SSL encryption is enabled for your RDS instance. This applies if you want your client to connect to the RDS instance only over SSL connections. For more information, see [Configure SSL encryption](/help/en/rds/apsaradb-rds-for-postgresql/configure-ssl-encryption-for-an-apsaradb-rds-for-postgresql-instance#task-1079262) or [Configure a custom certificate](/help/en/rds/apsaradb-rds-for-postgresql/configure-a-custom-certificate-on-an-apsaradb-rds-for-postgresql-instance#task-1079262).
    
-   A client CA certificate is configured. This applies if you want to verify the client certificate when the client connects to the RDS instance over SSL connections. For more information, see [Configure a client CA certificate](/help/en/rds/apsaradb-rds-for-postgresql/configure-a-client-ca-certificate-on-an-apsaradb-rds-for-postgresql-instance).
    

## **Procedure**

You can use one of the following methods to forcefully enable the client to connect to the RDS instance over SSL connections:

#### **Method 1: Configure a client ACL**

After a client CA certificate is configured, you can configure an ACL on the RDS instance. Then, the client can connect to the RDS instance only after the RDS instance validates the client based on the SSL mode that you specify. The RDS instance validates the client using the client certificate and the private key of the client certificate.

**Note**

-   When you configure an ACL, no operations can be performed on the RDS instance. This configuration process requires approximately 1 minute.
    
-   If client access control is not configured for an RDS for PostgreSQL instance, the default authentication method is `prefer`. In this case, a client can use the `PGSSLMODE=disable` parameter to connect without SSL. To block non-SSL connections, enable SSL encryption and then configure the ACL to use an authentication method other than `prefer`.
    

Click **Modify** to the right of **Configure ACL** and select an appropriate authentication method.

You can use one of the following authentication methods to forcefully enable the client to connect to the RDS instance over SSL connections:

-   cert: A client certificate rather than a password is used to validate the client. An SSL connection is established. In addition, the system validates the client certificate and checks whether the Common Name (CN) specified in the client certificate is consistent with the username that is used to connect to the RDS instance.
    
-   verify-ca: An SSL connection is established, and the system validates the client certificate.
    
-   verify-full: An SSL connection is established. The system validates the client certificate and checks whether the CN specified in the client certificate is consistent with the username that is used to connect to the RDS instance. This SSL mode is supported for PostgreSQL 12 or later.
    

#### **Method 2: Configure the pg\_hba.cnf file**

After you configure SSL encryption, you can use the **AD Domain Service Configuration** feature of RDS for PostgreSQL to modify the `pg_hba.cnf` file. This forces clients to use SSL to connect to the database.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Accounts** and then click the **AD Domain Services** tab.
    
3.  In the first record, change the value in the TYPE column to `hostssl`.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6219191071/p742574.png)
    
4.  Click **Submit**.
    
    **Note**
    
    After you click Submit, the status of your RDS instance changes to **Maintaining Instance** for approximately 1 minute. The new configurations take effect only for new connections. You must close the existing connections and re-establish these connections for the new configurations to take effect.
