Connect to LindormTable from your Java application by using the HBase Java API. This topic covers connection setup, DDL operations (create, disable, truncate, and delete tables), and DML operations (insert, read, delete, and scan data).

## Prerequisites

Before you begin, make sure that you have:

-   Java Development Kit (JDK) V1.8 or later installed
    
-   The [HBase Java SDK](/help/en/lindorm/user-guide/install-and-upgrade-hbase-sdk-for-java#concept-2560866) installed
    
-   The endpoint for [HBase Java API access](/help/en/lindorm/user-guide/view-endpoints#task-2143195) obtained from the Lindorm console
    
-   Your client IP address added to the [Lindorm whitelist](/help/en/lindorm/user-guide/configure-whitelist#task-2045184)
    

## Connection parameters

**Parameter**

**Config key**

**Example**

**Description**

host:port

`hbase.zookeeper.quorum`

`ld-bp17j28j2y7pm****-proxy-lindorm-pub.lindorm.rds.aliyuncs.com:30020`

The LindormTable endpoint displayed after **Access by Using HBase Java API** on the **Wide Table Engine** tab of the Lindorm console. For more information, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints#task-2143195).

username

`hbase.client.username`

`testuser`

The username for the Lindorm instance. The default value is `root`. You can change the password in the cluster management system of LindormTable. For more information, see [Change the password of a user](/help/en/doc-detail/174671.html#section-n3z-64v-v73).

password

`hbase.client.password`

`password`

The password for the Lindorm instance. The default value is `root`.

## Connect to LindormTable

Configure the client to connect to a Lindorm instance by using one of the following methods.

### Method 1: Programmatic configuration

Create a `Configuration` object in your code:

```
// Create a Configuration object.
Configuration conf = HBaseConfiguration.create();
// The endpoint of the Lindorm instance. Obtain it from the Database Connection page in the console.
conf.set("hbase.zookeeper.quorum", "host:port");
// The username and password. The default value for both is root.
conf.set("hbase.client.username", "username");
conf.set("hbase.client.password", "password");
```

### Method 2: XML configuration file

Add the following properties to the `hbase-site.xml` configuration file:

```
<configuration>
    <!--
    The endpoint of the Lindorm instance.
    Obtain it from the Database Connection page in the console.
    Note the difference between public and VPC endpoints.
    -->
    <property>
        <name>hbase.zookeeper.quorum</name>
        <value>ld-xxxx-proxy-hbaseue.lindormue.xxx.rds.aliyuncs.com:30020</value>
    </property>
    <!--
    The username and password. The default value for both is root.
    -->
    <property>
        <name>hbase.client.username</name>
        <value>testuser</value>
    </property>
    <property>
        <name>hbase.client.password</name>
        <value>password</value>
    </property>
</configuration>
```

## Create a connection

Create a connection to the database:

```
Connection connection = ConnectionFactory.createConnection(conf);
```

**Note**

Create the `Connection` object only once during the lifecycle of the program. The object is thread-safe and can be shared among all threads. Close the `Connection` object when the program stops to prevent connection leaks. Use a `try-finally` statement to ensure the connection is closed.

## DDL operations

Use the `Admin` interface to create, disable, truncate, and delete tables.

```
try (Admin admin = connection.getAdmin()) {
    // Create a table with a single region.
    HTableDescriptor htd = new HTableDescriptor(TableName.valueOf("tablename"));
    htd.addFamily(new HColumnDescriptor(Bytes.toBytes("family")));
    admin.createTable(htd);

    // Create a table with multiple pre-split regions.
    // A single region limits parallel processing and load balancing across the cluster.
    // Pre-split the table based on data characteristics to avoid performance bottlenecks
    // and data hot spots.
    // The following example creates two regions: [-inf, 10) and [10, inf).
    // int numRegions = 2;
    // byte[][] splitKeys = new byte[numRegions - 1][];
    // for (int i = 1; i < numRegions; i++) {
    //     splitKeys[i - 1] = new byte[]{(byte)(i * 10)};
    // }
    // admin.createTable(htd, splitKeys);

    // Disable the table.
    admin.disableTable(TableName.valueOf("tablename"));

    // Truncate the table. The table must be disabled before truncation.
    admin.truncateTable(TableName.valueOf("tablename"), true);

    // Delete the table. The table must be disabled before deletion.
    admin.deleteTable(TableName.valueOf("tablename"));
}
```

## DML operations

Use the `Table` interface to insert, read, delete, and scan data.

**Note**

The `Table` object is not thread-safe. Each thread must obtain its own `Table` object from the `Connection`.

```
try (Table table = connection.getTable(TableName.valueOf("tablename"))) {
    // Insert data.
    Put put = new Put(Bytes.toBytes("row"));
    put.addColumn(Bytes.toBytes("family"), Bytes.toBytes("qualifier"), Bytes.toBytes("value"));
    table.put(put);

    // Read a single row.
    Get get = new Get(Bytes.toBytes("row"));
    Result res = table.get(get);

    // Delete a row.
    Delete delete = new Delete(Bytes.toBytes("row"));
    table.delete(delete);

    // Scan a range of data.
    Scan scan = new Scan(Bytes.toBytes("startRow"), Bytes.toBytes("endRow"));
    ResultScanner scanner = table.getScanner(scan);
    for (Result result : scanner) {
        // Process the result.
    }
    scanner.close();
}
```
