You can use a Java Database Connectivity (JDBC) driver to send SQL requests to the search engine service (LindormSearch) provided by Lindorm. This topic describes how to use the Solr JDBC driver provided by Lindorm to access LindormSearch.

## Prerequisites

-   LindormSearch is activated for you Lindorm instance. For more information, see [Activate LindormSearch](/help/en/lindorm/user-guide/activate-the-lindormsearch-service#concept-2411851).
-   The IP address of your LindormSearch client is added to the allowlist of the Lindorm instance. For more information, see [Configure whitelists](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
-   The SQL endpoint of the LindormSearch cluster of your Lindorm instance is obtained. For more information, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints#task-2143195).

## Add Maven dependencies

Add the following dependency to the `pom.xml` file of your application in Java:

```
<dependency> 
  <groupId>com.aliyun.lindorm</groupId>  
  <artifactId>lindorm-all-client</artifactId>
  <version>2.1.2</version>
</dependency>
```

## Create a collection

You can create a collection on the Cluster Management page in the Lindorm console. For more information, see [Manage collections](/help/en/lindorm/user-guide/manage-collections#concept-1955960).

## Sample code

```
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Properties;

public class SearchSqlDemo {
    public static void main(String[] args) {
        Connection pconn = null;
        Statement stmt = null;
        try {
            // Loads the LindormSearch driver.
            Class.forName("com.aliyun.lindorm.search.client.Driver");

            // Specifies the SQL endpoint of the LindormSearch cluster of your Lindorm instance.
            String url = "jdbc:lindorm:search:url=http://ld-xxxx:30070";

            Properties props = new Properties();
            props.put("user", "testuser");
            props.put("password", "password");

            // Establishes a connection.
            pconn = DriverManager.getConnection(url, props);

            // Creates a statement object.
            stmt = pconn.createStatement();
            // Creates a table.
            stmt.execute("create table if not exists test(c1 int, c2 varchar, primary key(c1))");

            // Writes a single row of data.
            stmt.execute("upsert into test(c1,c2) values(1,'Shenzhen')");
            stmt.execute("upsert into test(c1,c2) values(2,'Shanghai')");

            // Writes multiple rows of data.
            stmt.execute("upsert into test(c1,c2) values(3,'Beijing'),(4,'Guangzhou'),(5,'Hangzhou')");

            // Queries data.
            ResultSet rs = stmt.executeQuery("select * from test order by c1 ");
            System.out.println("#####before delete:");
            while (rs.next()) {
                System.out.println("c1=" + rs.getInt("c1") + ",c2=" + rs.getString("c2"));
            }

            // Deletes a record.
            stmt.execute("delete from test where c1 >3");

            // Queries data.
            rs = stmt.executeQuery("select * from test order by c1 ");
            System.out.println("#####after delete:");
            while (rs.next()) {
                System.out.println("c1=" + rs.getInt("c1") + ",c2=" + rs.getString("c2"));
            }

            // Deletes a table.
            stmt.execute("drop table if exists test");
        } catch (Throwable e) {
            e.printStackTrace();
        } finally {
            // Closes statements and connections.
            // We recommend that you use a connection pool to manage connections. This way, you do not need to establish a connection for each operation and close the connection after an operation is complete. This helps improve query performance. 
            try {
                if (stmt != null) {
                    stmt.close();
                }
                if (pconn != null) {
                    pconn.close();
                }
            } catch (Throwable e) {
                e.printStackTrace();
            }
        }
    }
}
```
