If you want to use the always-confidential database feature to encrypt data of specific data columns in a table and use a Java application to connect to the required database, you can use EncJDBC. This facilitates database connection and simplifies the usage of the always-confidential database feature. This topic describes how to connect to an always-confidential database by using EncJDBC.

If you have the required master encryption key (MEK), EncJDBC can automatically decrypt ciphertext data and return plaintext data. The process is transparent to your application, and you can connect the application to your always-confidential database with a few changes to the application code. This simplifies the usage of the always-confidential database feature.

## **Prerequisites**

-   The always-confidential database feature is enabled for your ApsaraDB RDS for MySQL instance. For more information, see [Enable the always-confidential database feature](/help/en/rds/apsaradb-rds-for-mysql/enable-the-always-confidential-feature).
    
-   The connection information about the RDS instance for which the always-confidential database feature is enabled is obtained. The connection information includes the domain name (host), port number (port), instance name (dbname), username (username), and password (password).
    
-   A data protection rule is configured. For more information, see [Configure data protection rules](/help/en/rds/apsaradb-rds-for-mysql/configure-sensitive-data-protection-rules-by-using-sql).
    

## **Usage notes**

-   You must store the `MEK` and keep it confidential.
    
-   JDK 1.8 or later is used.
    
    **Note**
    
    In this topic, the version of Maven is `3.9.2`, and the development tool is `IntelliJ IDEA Community Edition 2022.3.2`.
    

## **Procedure**

### **Step 1:** **Add a Maven dependency**

Add the following dependency to the pom.xml file of your project in Maven.

```
<dependencies>
  <dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-encdb-mysql-jdbc</artifactId>
    <version>1.0.9-1</version>
  </dependency>
</dependencies>
```

### Step 2: **Configure EncJDBC based on sample code**

You can use `EncJDBC` in the same manner as you use JDBC. Before you use `EncJDBC`, you must configure the required parameters, such as `MEK` and `ENC_ALGO`, in EncJDBC for data security. MEK specifies a master encryption key, and ENC\_ALGO specifies an encryption algorithm.

The following table describes the parameters and provides example values.

**Parameter**

**Example (string type)**

**Description**

MEK

00112233445566778899aabbccddeeff

The MEK that is specified by the data owner.

MEK generation: You can use password generation tools such as OpenSSL and openssl rand -hex 16, call the random function in a programming language, or obtain keys from Key Management Service (KMS).

Valid value: a 16-byte hexadecimal string that is 32 characters in length.

**Warning**

An MEK is the root credential that you use to access encrypted data. For security purposes, the RDS instance for which the always-confidential database feature is enabled does not generate, store, or back up your MEK. You must generate an MEK and keep it confidential. If you lose your MEK, you can no longer access the data that is encrypted by using the MEK. We recommend that you back up your MEK.

ENC\_ALGO

SM4\_128\_CBC

The encryption algorithms that are used to protect the data.

Valid values:

-   Internationally accepted algorithms:
    
    -   AES\_128\_GCM
        
    -   AES\_128\_CTR
        
    -   AES\_128\_CBC
        
    -   AES\_128\_ECB (not recommended)
        
-   SM algorithms:
    
    -   SM4\_128\_GCM (default)
        
    -   SM4\_128\_CTR
        
    -   SM4\_128\_CBC
        
    -   SM4\_128\_ECB (not recommended)
        

**Note**

-   The AES\_128\_ECB and SM4\_128\_ECB encryption algorithms cannot provide high security. We recommend that you select other encryption algorithms that provide higher security than the AES\_128\_ECB and SM4\_128\_ECB encryption algorithms.
    
-   Optional. The default value is SM4\_128\_GCM.
    

#### **Configure** the MEK and ENC\_ALGO parameters

The following section describes the methods that you can use to configure the `MEK` and `ENC_ALGO` parameters. If you want to use more than two methods to configure the parameters in JDBC, the methods are prioritized in the following order: JDBC properties configuration, configuration file, and URL configuration.

**Note**

-   You can use ampersands (`&`) to concatenate multiple parameters.
    
-   In the following methods, `MEK` is configured on an on-premises machine at the client side and distributed to the server by using envelope encryption to ensure that `MEK` is not leaked.
    

##### **Configure JDBC properties**

When you connect to an RDS instance from a standard JDBC, you must configure the `Properties` settings. Sample code:

```
// Obtain the connection information such as the domain name (hostname), port number (port), instance name (dbname), username (username), and password (password).
// ...

String mek=...;
String encAlgo=...;

Properties props = new Properties();
props.setProperty("user", username);
props.setProperty("password", password);
props.setProperty("MEK", mek);
props.setProperty("ENC_ALGO", encAlgo);

String dbUrl = String.format("jdbc:mysql:encdb://%s:%s/%s", hostname, port, dbname);
Class.forName("com.aliyun.encdb.mysql.jdbc.EncDriver");
Connection connection = DriverManager.getConnection(dbUrl, props);

// ... Initiate a query. ...
```

##### **Use a configure file**

You can create a configuration file and configure the required parameters such as MEK in the configure file. Then, you can specify a property named encJdbcConfigFile in the project and set the value of the property to the directory of the configuration file. If you do not specify directory, the system uses the `encjdbc.conf` file by default.

Content of the configuration file:

```
MEK=
ENC_ALGO=
```

You can specify the directory of the configuration file by using the following methods.

-   Store the configuration file in the resources directory of the project. ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6951117071/p732211.png)
    
-   Store the configuration file in the root directory of the project. The root directory is the directory that is used by the application at runtime.
    

After the file configuration is complete, you do not need to configure additional settings in the application.

```
// Obtain the connection information such as the domain name (hostname), port number (port), instance name (dbname), username (username), and password (password).
// ...

String dbUrl = String.format("jdbc:mysql:encdb://%s:%s/%s", hostname, port, dbname);
Class.forName("com.aliyun.encdb.mysql.jdbc.EncDriver");
Connection connection = DriverManager.getConnection(dbUrl, username, password);

// ... Initiate a query. ...
```

##### **Configure an URL**

You can configure the `MEK` and `ENC_ALGO` parameters in an URL.

```
// Obtain the connection information such as the domain name (hostname), port number (port), instance name (dbname), username (username), and password (password).
// ...

String mek=...;
String encAlgo=...;

String dbUrl = String.format("jdbc:mysql:encdb://%s:%s/%s?MEK=%s&ENC_ALGO=%s", hostname, port, dbname, mek, encAlgo);
Class.forName("com.aliyun.encdb.mysql.jdbc.EncDriver");
Connection connection = DriverManager.getConnection(dbUrl, username, password);

// ... Initiate a query. ...
```

#### **Complete sample code of JDBC properties configuration**

```
// Update the connection information such as the domain name (hostname), port number (port), instance name (dbname), username (username), and password (password) to your instance information.
String hostname = "hostname";
String port = "port";
String dbname = "db";
String username = "user";
String password = "password";

String mek="00112233445566778899aabbccddeeff"; // This is an example value. We recommend that you use a more complex MEK.
String encAlgo="SM4_128_CBC";

Properties props = new Properties();
props.setProperty("user", username);
props.setProperty("password", password);
props.setProperty("MEK", mek);
props.setProperty("ENC_ALGO", encAlgo);

String dbUrl = String.format("jdbc:mysql:encdb://%s:%s/%s", hostname, port, dbname);
Class.forName("com.aliyun.encdb.mysql.jdbc.EncDriver");
Connection connection = DriverManager.getConnection(dbUrl, props);

int[] intData = {1, 2, 3, 4, 5, 6};
String[] strData = {"abc", "bcd", "1", "def", "efg", "fgi"};

// create table
connection.createStatement().executeUpdate("drop table if exists test");
connection.createStatement().executeUpdate("create table test (a int, b text)");

// insert data
for (int i = 0; i < 6; i++) {
    PreparedStatement pstmt = connection.prepareStatement("insert into test values (?,?)");
    pstmt.setInt(1, intData[i]);
    pstmt.setString(2, strData[i]);
    pstmt.executeUpdate();
}

// check plaintext data
ResultSet rs = connection.createStatement().executeQuery("select * from test");
while (rs.next()) {
    for (int i = 0; i < rs.getMetaData().getColumnCount(); i++) {
        System.out.print(rs.getString(i + 1));
        System.out.print("\t");
    }
    System.out.print("\n");
}
```

Output:

```
1	abc	
2	bcd	
3	cde	
4	def	
5	efg	
6	fgi	
```

## **FAQ**

-   What do I do if the `Exception in thread "main" java.lang.IllegalAccessError: class com.alibaba.encdb.common.SymCrypto (in unnamed module @0x5c0369c4) cannot access class com.sun.crypto.provider.SunJCE (in module java.base) because module java.base does not export com.sun.crypto.provider to unnamed module @0x5c0369c4` error message is displayed when I run a program?
    
    The error message may be displayed due to the inter-module permission issues that occur when the JDK version is later than the required version. To resolve the error, you must add the VM option `--add-exports=java.base/com.sun.crypto.provider=ALL-UNNAMED` when you run the program to export com.sun.crypto.provider to the Unnamed module.
    
-   What do I do if the `failed in mek provision: you might have an incorrect mek setting. Detail:gcmEncrypt error` error message is displayed when I run a program?
    
    The error is a common error in Oracle JDK. To resolve the error, you can use one of the following methods:
    
    -   Use Amazon Corretto instead.
        
    -   If you use Oracle JDK, you must perform the following steps to configure a security provider:
        
        1.  Find the JDK installation path.
            
        2.  In the `Installation path/conf/security/` directory, find the `java.security` file.
            
        3.  Edit the `java.security` file. In the `List of providers and their preference orders (see above):` section, add the following content:
            
            ```
            security.provider.14=org.bouncycastle.jce.provider.BouncyCastleProvider
            ```
