This topic describes how to connect to an ApsaraDB RDS for MySQL instance by using a Java, Python, or C application.

## Parameters

The following table describes the parameters in the sample code.

**Parameter**

**Description**

Host

The internal or public endpoint of the RDS instance.

-   If your client is deployed on an Elastic Compute Service (ECS) instance that resides in the same region and has the same network type as the RDS instance, use the internal endpoint. For example, if the ECS instance and RDS instance are both in a virtual private cloud (VPC) located in the China (Hangzhou) region, you can use the internal endpoint of the RDS instance to create a secure connection.
    
-   In other scenarios, use the public endpoint.
    

For more information about how to view the internal and public endpoints and ports of an RDS instance, see [View and change the internal and public endpoints and port numbers of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance#concept-fbd-ypv-ydb).

Port

If you connect to the RDS instance over an internal network, enter the internal port number of the instance. If you connect to the RDS instance over the Internet, enter the public port number of the instance.

myDatabase

The name of the database.

myUsername

The username of the account that is used to connect to the RDS instance.

myPassword

The password of the account.

## Sample code

**Note**

The following sample code is used to query the courses table in a database. You must use the actual code based on your business requirements.

### **Sample code in Java**

**Note**

In this example, a Maven project is used. You need to add the DriverManager dependency in the pom.xml file.

```
<dependency>
 <groupId>mysql</groupId>
 <artifactId>mysql-connector-java</artifactId>
 <version>8.0.27</version>
</dependency>
```

```
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class DatabaseConnection
{
    public static void main(String args[]) {
        String connectionUrl= "jdbc:mysql://<Host>:<Port>/<myDatabase>";    

        ResultSet resultSet;

        try (Connection connection=DriverManager.getConnection(connectionUrl,"<myUsername>","<myPassword>");  
             Statement statement = connection.createStatement()) {

            String selectSql = "SELECT * FROM `courses`";            //Enter the SQL statement that you want to execute. 
            resultSet = statement.executeQuery(selectSql);

            while (resultSet.next()) {
                System.out.println(resultSet.getString("name"));
            }
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

### **Sample code in Python 3**

**Note**

Install PyMySQL first.

-   If you use Python 3, run the `pip3 install PyMySQL` command.
    
-   If you use Python 2, run the `pip install pymysql==0.9.3` command.
    

```
import pymysql

connection = pymysql.connect(host='<Host>',     
                       port=<Port>,
                       user='<myUsername>',
                       passwd='<myPassword>',
                       db='<myDatabase>')

try:
    with connection.cursor() as cursor:
        sql = "SELECT * FROM `courses`"
        cursor.execute(sql)
        for result in cursor:
             print(result)
finally:
    connection.close()
```

### **Sample code in C**

**Note**

Install the mysql.h header file. In this example, CentOS is used.

```
sudo yum install mysql-devel
```

```
#include <stdio.h>
#include <mysql.h>
#include <string.h>

int main(void)
{
    MYSQL *t_mysql;

    MYSQL_RES       *res = NULL;
    MYSQL_ROW       row;
    char            *query_str = NULL;
    int             rc, i, fields;
    int             rows;

    char select[] = "select * from courses";    // Enter the SQL statement that you want to execute. 
    t_mysql = mysql_init(NULL);

    if(NULL == t_mysql){
        printf("init failed\n");
    }

    if(NULL == mysql_real_connect(t_mysql, "<Host>", "<myUsername>", "<myPassword>", "<myDatabase>",
            <Port>, NULL, 0)){
        printf("connect failed\n");
    }

    if(mysql_real_query(t_mysql, select, strlen(select)) != 0){
        printf("select failed\n");
    }

    res = mysql_store_result(t_mysql);
    if (NULL == res) {
         printf("mysql_restore_result(): %s\n", mysql_error(t_mysql));
         return 0;
    }

    fields = mysql_num_fields(res);
    while ((row = mysql_fetch_row(res))) {
        for (i = 0; i < fields; i++) {
            printf("%s\t", row[i]);
        }
        printf("\n");
    }
    mysql_close(t_mysql);

}
                    
```

## Troubleshooting

If the connection fails, we recommend that you troubleshoot the failure based on the returned error information. For more information, see [Resolve the issue that you cannot connect to an RDS instance](/help/en/rds/support/what-do-i-do-if-i-fail-to-connect-to-an-apsaradb-rds-instance).

## **References**

-   You can also use Function Compute to connect to an ApsaraDB RDS for MySQL instance by configuring VPCs for functions and whitelists for the RDS for MySQL instance. For more information, see [Access an ApsaraDB RDS for MySQL database](/help/en/functioncompute/fc/user-guide/access-the-rds-mysql-example).
    
-   For more examples on how to connect to an RDS for MySQL instance, visit [Python access to mysql in Function Compute](https://github.com/devsapp/start-fc-db/tree/main/python/mysql/src).
