Use the Cassandra CQL Java driver (3.x) to connect to LindormTable and run CQL statements for creating keyspaces, tables, and managing data.

## Prerequisites

Before you begin, make sure that you have:

-   A Java environment with JDK 1.8 or later
    
-   The Cassandra CQL Java driver installed. See [Install the Cassandra CQL driver](/help/en/lindorm/user-guide/install-and-upgrade-cassandra-cql-java-driver#concept-1948413)
    
-   The client IP address added to the whitelist for your Lindorm instance. See [Set a whitelist](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184)
    
-   The **CQL Connection** endpoint for LindormTable, obtained from the Lindorm console. See [View Connection Addresses](/help/en/lindorm/user-guide/view-endpoints#task-2143195)
    

### Maven dependency

Add the DataStax Cassandra Java driver (V3.7 or later) to your Maven project:

```
<dependency>
    <groupId>com.datastax.cassandra</groupId>
    <artifactId>cassandra-driver-core</artifactId>
    <version>3.8.0</version>
</dependency>
```

> This dependency introduces public libraries. To prevent dependency conflicts, test it in a new project first.

## Complete example

The following example connects to LindormTable, creates a keyspace and table, inserts and queries data, then cleans up resources.

```
import com.datastax.driver.core.Cluster;
import com.datastax.driver.core.Session;
import com.datastax.driver.core.ResultSet;
import com.datastax.driver.core.Row;
import com.datastax.driver.core.PlainTextAuthProvider;

public class LindormCqlExample {
    public static void main(String[] args) {
        String[] contactPoints = new String[]{
            "<host>"
        };

        // Build the cluster and connect.
        Cluster cluster = Cluster.builder()
            .addContactPoints(contactPoints)
            .withAuthProvider(new PlainTextAuthProvider("<username>", "<password>"))
            .build();
        cluster.init();
        Session session = cluster.connect();

        try {
            // Create a keyspace.
            session.execute(
                "CREATE KEYSPACE IF NOT EXISTS testKeyspace WITH replication "
                    + "= {'class':'SimpleStrategy', 'replication_factor':1};");

            // Create a table.
            session.execute(
                "CREATE TABLE IF NOT EXISTS testKeyspace.testTable ("
                    + "id int PRIMARY KEY,"
                    + "name text,"
                    + "age int,"
                    + "address text"
                    + ");");

            // Insert data.
            session.execute(
                "INSERT INTO testKeyspace.testTable (id, name, age, address) "
                    + "VALUES ("
                    + "1,"
                    + "'testname',"
                    + "11,"
                    + "'hangzhou');");

            // Query all columns.
            ResultSet res = session.execute(
                "SELECT * FROM testKeyspace.testTable ;");

            // Retrieve values from each row.
            for (Row row : res) {
                int id = row.getInt("id");
                String name = row.getString("name");
                int age = row.getInt("age");
                String address = row.getString("address");
            }

            // Truncate the table.
            session.execute("TRUNCATE TABLE testKeyspace.testTable;");

            // Drop the table.
            session.execute("DROP TABLE testKeyspace.testTable ");
        } finally {
            // Close the session first, then shut down the cluster.
            session.close();
            cluster.close();
        }
    }
}
```

## Connection parameters

**Parameter**

**Description**

**How to obtain**

`<host>`

The **CQL Connection** endpoint for LindormTable.

In the Lindorm console, go to the instance details page and find **CQL Connection**. Example: `ld-bp17j28j2y7pm****-proxy-lindorm.lindorm.rds.aliyuncs.com`

`<username>`

The username for the Lindorm instance. Default: `root`.

In the Lindorm console, view or create users in the **Cluster Management System**. See [Manage users](/help/en/doc-detail/174671.html).

`<password>`

The password for the Lindorm instance username.

If you forget the password, reset it in the **Cluster Management System** of LindormTable. See [Change a user password](/help/en/doc-detail/174671.html#section-n3z-64v-v73).

## Connection sequence

The driver connects to LindormTable through the following steps:

1.  Create a `Cluster` instance with `Cluster.builder()`.
    
2.  Add contact points with `.addContactPoints()`.
    
3.  Set authentication with `.withAuthProvider(new PlainTextAuthProvider())`.
    
4.  Call `.build()` to finalize the cluster configuration.
    
5.  Call `cluster.init()` to initialize the cluster.
    
6.  Call `cluster.connect()` to open a session.
    

## CQL operations reference

After connecting, run CQL statements through `session.execute()`. The following table summarizes the supported operations.

### DDL operations

**Operation**

**CQL statement**

**Example**

Create a keyspace

`CREATE KEYSPACE IF NOT EXISTS <keyspace> WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};`

Creates `testKeyspace` with `SimpleStrategy` and a replication factor of 1.

Create a table

`CREATE TABLE IF NOT EXISTS <keyspace>.<table> (<column definitions>);`

Creates `testKeyspace.testTable` with columns: `id` (int, PRIMARY KEY), `name` (text), `age` (int), `address` (text).

Truncate a table

`TRUNCATE TABLE <keyspace>.<table>;`

Removes all rows from `testKeyspace.testTable` without deleting the table.

Drop a table

`DROP TABLE <keyspace>.<table>`

Deletes `testKeyspace.testTable` and all its data.

### DML operations

**Operation**

**CQL statement**

**Example**

Insert data

`INSERT INTO <keyspace>.<table> (<columns>) VALUES (<values>);`

Inserts `(1, 'testname', 11, 'hangzhou')` into `testKeyspace.testTable`.

Query data

`SELECT * FROM <keyspace>.<table>;`

Returns all columns from `testKeyspace.testTable`. Specify column names to return specific columns.

Retrieve column values

Use typed getter methods on `Row`: `row.getInt()`, `row.getString()`

Retrieves `id`, `name`, `age`, and `address` from each row in the result set.

## Clean up resources

Always close the session before shutting down the cluster. Use a `try-finally` block to make sure resources are released even if an exception occurs.

```
session.close();
cluster.close();
```
