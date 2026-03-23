This topic describes how to use Cassandra client drivers for multiple languages, such as C++, Python, Node.js, and Go, to connect to and use LindormTable over Cassandra Query Language (CQL).

## Prerequisites

-   The LindormTable endpoint for Cassandra SQL is obtained.![CQL连接地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5553131661/p421900.png)
    
-   The official driver package in the language that you want to use is downloaded and installed. For more information, see [Cassandra client drivers](https://cassandra.apache.org/doc/3.11/cassandra/getting_started/drivers.html).
    

## Use a Cassandra Python client driver to connect to LindormTable over CQL

1.  Install a DataStax Python dependency package. For more information, see [Install the SDK for Python](https://docs.datastax.com/en/developer/python-driver/3.25/installation/).
    
    ```
    # Install a DataStax Python driver of the specified version. We recommend that you install DataStax Python driver 3.x.
    pip install cassandra-driver==3.19.0
    # Install a DataStax Python driver of the latest version.
    pip install cassandra-driver
    ```
    
2.  Connect to LindormTable. The following code provides an example on how to connect to LindormTable:
    
    ```
    #!/usr/bin/env python
    # -*- coding: UTF-8 -*-
    import logging
    import sys
    from cassandra.cluster import Cluster
    from cassandra.auth import PlainTextAuthProvider
    
    logging.basicConfig(stream=sys.stdout, level=logging.INFO)
    
    cluster = Cluster(
        # Specify the LindormTable endpoint for CQL. You do not need to specify the port number.
        contact_points=["ld-bp17j28j2y7pm****-proxy-lindorm.lindorm.rds.aliyuncs.com"],
        # Specify the username and password. The default username and password are root.
        auth_provider=PlainTextAuthProvider("cassandra", "****"))
    
    session = cluster.connect()
    # Create a keyspace.
    session.execute(
                    "CREATE KEYSPACE IF NOT EXISTS testKeyspace WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};");
    
    # Create a table.
    session.execute(
                    "CREATE TABLE IF NOT EXISTS testKeyspace.testTable (id int PRIMARY KEY, name text,age int,address text);");
    
    # Insert data.
    session.execute(
                    "INSERT INTO testKeyspace.testTable (id, name, age, address) VALUES ( 1, 'testname', 11, 'hangzhou');");
    
    # Query data.
    rows = session.execute(
                    "SELECT * FROM testKeyspace.testTable ;");
    
    # Display each row of data in the console.
    for row in rows:
        print("# row: {}".format(row))
    
    # Close a session.
    session.shutdown()
    
    # Shut down the cluster.
    cluster.shutdown()
    ```
    

## Use a Cassandra C++ client driver to connect to LindormTable over CQL

1.  Download the C++ dependency package. You can click [DataStax C++](https://github.com/datastax/cpp-driver) to download the package.
    
2.  Connect to LindormTable. The following code provides an example on how to connect to LindormTable:
    
    ```
    CassFuture* connect_future = NULL;
    CassCluster* cluster = cass_cluster_new();
    CassSession* session = cass_session_new();
    // Specify the LindormTable endpoint for CQL. You do not need to specify the port number.
    char* hosts = "ld-bp17j28j2y7pm****-proxy-lindorm.lindorm.rds.aliyuncs.com";
    
    // Establish a connection.
    cass_cluster_set_contact_points(cluster, hosts);
    connect_future = cass_session_connect(session, cluster);
    
    // Execute DDL statements.
    if (cass_future_error_code(connect_future) == CASS_OK) {
        CassFuture* close_future = NULL;
    
        
        const char* query = "SELECT  name FROM testKeyspace.testTable ";
        CassStatement* statement = cass_statement_new(query, 0);
    
        CassFuture* result_future = cass_session_execute(session, statement);
    
        if (cass_future_error_code(result_future) == CASS_OK) {
          // Obtain the query result.
          const CassResult* result = cass_future_get_result(result_future);
          const CassRow* row = cass_result_first_row(result);
    
          if (row) {
            const CassValue* value = cass_row_get_column_by_name(row, "name");
            // Display the result.
            const char* name;
            size_t name_length;
            cass_value_get_string(value, &name, &name_length);
            printf("release_version: '%.*s'\n", (int)name_length, name);
          }
    
          cass_result_free(result);
        } else {
          // Handle the exceptions.
          const char* message;
          size_t message_length;
          cass_future_error_message(result_future, &message, &message_length);
          fprintf(stderr, "Unable to run query: '%.*s'\n", (int)message_length, message);
        }
    
        cass_statement_free(statement);
        cass_future_free(result_future);
    
        // Release resources.
        close_future = cass_session_close(session);
        cass_future_wait(close_future);
        cass_future_free(close_future);
      } else {
        // Handle the exceptions.
        const char* message;
        size_t message_length;
        cass_future_error_message(connect_future, &message, &message_length);
        fprintf(stderr, "Unable to connect: '%.*s'\n", (int)message_length, message);
      }
    
      cass_future_free(connect_future);
      cass_cluster_free(cluster);
      cass_session_free(session);           
    ```
    

## Use a Cassandra Node.js client driver to connect to LindormTable over CQL

1.  Install the Node.js dependency package.
    
    ```
    npm install cassandra-driver 
    ```
    
2.  Connect to LindormTable. The following code provides an example on how to connect to LindormTable:
    
    ```
    const cassandra = require('cassandra-driver');
    
    /**
    * Specify the LindormTable endpoint for CQL. You do not need to specify the port number. Specify datacenter1 as the name of the data center.
    * Specify the username and password. The default username and password are root.
    */
    const client = new cassandra.Client({ contactPoints: ['ld-bp17j28j2y7pm****-proxy-lindorm.lindorm.rds.aliyuncs.com'], localDataCenter: 'datacenter1', credentials: { username: 'Username', password: 'Password' } });
    
    client.connect()
    .then(() => client.execute("CREATE KEYSPACE IF NOT EXISTS lindormtest WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '2' }"))
    .then(() => client.execute("CREATE TABLE IF NOT EXISTS lindormtest.nodejs (name text PRIMARY KEY, age int)"))
    .then(() => {
     return client.execute("INSERT INTO lindormtest.nodejs (name, age) VALUES ('lindorm', 10)");
    })
    .then(() => {
     return client.execute("SELECT name, age FROM lindormtest.nodejs WHERE name = 'lindorm' ");
    })
    .then(result => {
     const row = result.first();
     console.log('Obtained row: ', row);
     const p = row.age;
    })
    .finally(() => client.shutdown());
                
    ```
    

## Use a Cassandra Go client driver to connect to LindormTable over CQL

1.  Install the gocql package.
    
    ```
    go get github.com/gocql/gocql
    ```
    
2.  Connect to LindormTable. The following code provides an example on how to connect to LindormTable:
    
    ```
    package main
    
    import (
        "fmt"
        "log"
    
        "github.com/gocql/gocql"
    )
    
    func main() {
        // Specify the LindormTable endpoint for CQL. You do not need to specify the port number.
        cluster := gocql.NewCluster("ld-bp17j28j2y7pm****-proxy-lindorm.lindorm.rds.aliyuncs.com")
        cluster.Authenticator = gocql.PasswordAuthenticator{
            Username:"Username",
            Password: "Password",
        }
    
        session, _ := cluster.CreateSession()
        defer session.Close()
    
        //create keyspace
        if err := session.Query(`CREATE KEYSPACE ks WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 2}`).Exec(); err != nil {
            log.Fatal(err)
        }
    
        // create table
        if err := session.Query(`CREATE TABLE ks.tb (cn1 text PRIMARY KEY, cn2 text, cn3 text)`).Exec(); err != nil {
            log.Fatal(err)
        }
    
        // insert value
        if err := session.Query(`INSERT INTO ks.tb (cn1, cn2, cn3) VALUES (?, ?, ?)`,
            "v11", "v12", "v13").Exec(); err != nil {
            log.Fatal(err)
        }
    
        var column1 string
        var column2 string
    
        if err := session.Query(`SELECT cn1, cn2 FROM ks.tb WHERE cn1 = ?`,
            "v11").Consistency(gocql.One).Scan(&column1, &column2); err != nil {
            log.Fatal(err)
        }
        fmt.Println("ALL values:", column1, column2)
    
        var column3 string
        // list all tweets
        iter := session.Query(`SELECT * FROM ks.tb WHERE cn1 = ? `, "v11").Iter()
        for iter.Scan(&column1, &column2, &column3) {
            fmt.Println("ALL value:", column1, column2, column3)
        }
        if err := iter.Close(); err != nil {
            log.Fatal(err)
        }
    }
    ```
