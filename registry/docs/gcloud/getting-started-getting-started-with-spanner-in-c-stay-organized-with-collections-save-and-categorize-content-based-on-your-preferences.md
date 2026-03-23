-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Databases](https://docs.cloud.google.com/docs/databases)
-   [Spanner](https://docs.cloud.google.com/spanner/docs)
-   [Guides](https://docs.cloud.google.com/spanner/docs/create-query-database-console)

Send feedback

# Getting started with Spanner in C++ Stay organized with collections Save and categorize content based on your preferences.

## Objectives

**Note:** This tutorial uses the [C++ client library](https://github.com/googleapis/google-cloud-cpp) for Linux, with Bazel as the build tool. If you would like to use another build tool or platform, refer to the instructions in the [samples/](https://github.com/googleapis/google-cloud-cpp/blob/master/google/cloud/spanner/samples/) directory on GitHub.

This tutorial walks you through the following steps using the Spanner client library for C++:

-   Create a Spanner instance and database.
-   Write, read, and execute SQL queries on data in the database.
-   Update the database schema.
-   Update data using a read-write transaction.
-   Add a secondary index to the database.
-   Use the index to read and execute SQL queries on data.
-   Retrieve data using a read-only transaction.

## Costs

This tutorial uses Spanner, which is a billable component of the Google Cloud. For information on the cost of using Spanner, see [Pricing](https://cloud.google.com/spanner/pricing).

## Before you begin

Complete the steps described in [Set up](/spanner/docs/getting-started/set-up#set_up_a_project), which cover creating and setting a default Google Cloud project, enabling billing, enabling the Cloud Spanner API, and setting up OAuth 2.0 to get authentication credentials to use the Cloud Spanner API.

In particular, make sure that you run [`gcloud auth application-default login`](/sdk/gcloud/reference/auth/application-default/login) to set up your local development environment with authentication credentials.

**Note:** If you don't plan to keep the resources that you create in this tutorial, consider creating a new Google Cloud project instead of selecting an existing project. After you finish the tutorial, you can delete the project, removing all resources associated with the project.

## Prepare your local C++ environment

1.  Clone the sample app repository to your local machine:
    
    ```
    git clone https://github.com/googleapis/google-cloud-cpp $HOME/google-cloud-cpp
    ```
    
2.  Install Bazel for Linux using [these instructions](https://docs.bazel.build/versions/master/install.html).
    
3.  Change to the directory that contains the Spanner sample code:
    
    ```
    cd $HOME/google-cloud-cpp
    ```
    
4.  Build the samples with this command:
    
    ```
    bazel build //google/cloud/spanner/samples:samples
    ```
    
5.  Set up authentication and authorization for the `google-cloud-cpp` project.
    
    ```
    gcloud auth application-default login
    ```
    
6.  Create an environment variable called `PROJECT_ID`. Replace \[MY\_PROJECT\_ID\] with your Google Cloud project ID. You can find this ID in your project's [Welcome](https://console.cloud.google.com/welcome) page.
    
    ```
    export PROJECT_ID=[MY_PROJECT_ID]
    ```
    

## Create an instance

When you first use Spanner, you must create an instance, which is an allocation of resources that are used by Spanner databases. When you create an instance, you choose an _instance configuration_, which determines where your data is stored, and also the number of nodes to use, which determines the amount of serving and storage resources in your instance.

See [Create an instance](/spanner/docs/create-manage-instances#create-instance) to learn how to create a Spanner instance using any of the following methods. You can name your instance `test-instance` to use it with other topics in this document that reference an instance named `test-instance`.

-   The Google Cloud CLI
-   The Google Cloud console
-   A client library (C++, C#, Go, Java, Node.js, PHP, Python, or Ruby)

## Look through sample files

The samples repository contains a sample that shows how to use Spanner with C++.

Take a look through the `google/cloud/spanner/samples/samples.cc` file, which shows how to create a database and modify a database schema. The data uses the example schema shown in the [Schema and data model](/spanner/docs/schema-and-data-model#creating-interleaved-tables) page.

## Create a database

### GoogleSQL

```
bazel run //google/cloud/spanner/samples:samples -- \
      create-database PROJECT_ID test-instance example-db
```

### PostgreSQL

```
bazel run //google/cloud/spanner/samples:postgresql_samples -- \
      create-database PROJECT_ID test-instance example-db

bazel run //google/cloud/spanner/samples:postgresql_samples -- \
      interleaved-table PROJECT_ID test-instance example-db
```

**Note:** Some Bazel syntax, such as `--`, looks similar to bash syntax but is not. For more information, see the Bazel [Commands and Options](https://docs.bazel.build/versions/master/user-manual.html) page.

You should see:

```
Created database [projects/${PROJECT_ID}/instances/test-instance/databases/example-db]
```
The following code creates a database and two tables in the database.

**Note:** The subsequent code samples use these two tables. If you don't execute this code, then create the tables by using the Google Cloud console or the gcloud CLI. For more information, see the [example schema](/spanner/docs/schema-and-data-model#creating-interleaved-tables).

### GoogleSQL

```
void CreateDatabase(google::cloud::spanner_admin::DatabaseAdminClient client,
                    std::string const& project_id,
                    std::string const& instance_id,
                    std::string const& database_id) {
  google::cloud::spanner::Database database(project_id, instance_id,
                                            database_id);
  google::spanner::admin::database::v1::CreateDatabaseRequest request;
  request.set_parent(database.instance().FullName());
  request.set_create_statement("CREATE DATABASE `" + database.database_id() +
                               "`");
  request.add_extra_statements(R"""(
      CREATE TABLE Singers (
          SingerId   INT64 NOT NULL,
          FirstName  STRING(1024),
          LastName   STRING(1024),
          SingerInfo BYTES(MAX),
          FullName   STRING(2049)
              AS (ARRAY_TO_STRING([FirstName, LastName], " ")) STORED
      ) PRIMARY KEY (SingerId))""");
  request.add_extra_statements(R"""(
      CREATE TABLE Albums (
          SingerId     INT64 NOT NULL,
          AlbumId      INT64 NOT NULL,
          AlbumTitle   STRING(MAX)
      ) PRIMARY KEY (SingerId, AlbumId),
          INTERLEAVE IN PARENT Singers ON DELETE CASCADE)""");
  auto db = client.CreateDatabase(request).get();
  if (!db) throw std::move(db).status();
  std::cout << "Database " << db->name() << " created.\n";
}
```

### PostgreSQL

In the PostgreSQL dialect, the database needs to be created before submitting a DDL request to create a table.

The following example creates a database:

```
void CreateDatabase(google::cloud::spanner_admin::DatabaseAdminClient client,
                    google::cloud::spanner::Database const& database) {
  google::spanner::admin::database::v1::CreateDatabaseRequest request;
  request.set_parent(database.instance().FullName());
  request.set_create_statement("CREATE DATABASE \"" + database.database_id() +
                               "\"");
  request.set_database_dialect(
      google::spanner::admin::database::v1::DatabaseDialect::POSTGRESQL);
  auto db = client.CreateDatabase(request).get();
  if (!db) throw std::move(db).status();
  std::cout << "Database " << db->name() << " created.\n";
}
```

The following example creates the two tables in the database:

```
void InterleavedTable(google::cloud::spanner_admin::DatabaseAdminClient client,
                      google::cloud::spanner::Database const& database) {
  // The Spanner PostgreSQL dialect extends the PostgreSQL dialect with
  // certain Spanner specific features, such as interleaved tables. See
  // https://cloud.google.com/spanner/docs/postgresql/data-definition-language#create_table
  // for the full CREATE TABLE syntax.
  std::vector<std::string> statements = {
      R"""(
        CREATE TABLE Singers (
            SingerId        BIGINT NOT NULL,
            FirstName       CHARACTER VARYING(1024) NOT NULL,
            LastName        CHARACTER VARYING(1024) NOT NULL,
            PRIMARY KEY(SingerId)
        )
      )""",
      R"""(
        CREATE TABLE Albums (
            SingerId        BIGINT NOT NULL,
            AlbumId         BIGINT NOT NULL,
            AlbumTitle      CHARACTER VARYING NOT NULL,
            MarketingBudget BIGINT,
            PRIMARY KEY(SingerId, AlbumId)
        ) INTERLEAVE IN PARENT Singers ON DELETE CASCADE
      )""",
  };
  auto metadata =
      client.UpdateDatabaseDdl(database.FullName(), statements).get();
  google::cloud::spanner_testing::LogUpdateDatabaseDdl(  //! TODO(#4758)
      client, database, metadata.status());              //! TODO(#4758)
  if (!metadata) throw std::move(metadata).status();
  std::cout << "Tables created.\nNew DDL:\n" << metadata->DebugString();
}
```

The next step is to write data to your database.

## Create a database client

Before you can do reads or writes, you must create a `Client`:

```
auto database = spanner::Database(project_id, instance_id, database_id);
auto connection = spanner::MakeConnection(database);
auto client = spanner::Client(connection);
```

A `Client` lets you read, write, query, and execute transactions on a Spanner database. Typically you create a `Client` when your application starts up, then you re-use that `Client` to read, write, and execute transactions. Each client uses resources in Spanner. The destructor of `Client` automatically cleans up the `Client` resources, including network connections.

Read more about `Client` in the [Google Cloud Spanner C++ Reference](/cpp/docs/reference/spanner/latest).

## Write data with DML

You can insert data using Data Manipulation Language (DML) in a read-write transaction.

You use the `Client::ExecuteDml()` function to execute a DML statement.

```
void DmlGettingStartedInsert(google::cloud::spanner::Client client) {
  using ::google::cloud::StatusOr;
  namespace spanner = ::google::cloud::spanner;

  auto commit_result = client.Commit(
      [&client](spanner::Transaction txn) -> StatusOr<spanner::Mutations> {
        auto insert = client.ExecuteDml(
            std::move(txn),
            spanner::SqlStatement(
                "INSERT INTO Singers (SingerId, FirstName, LastName) VALUES"
                " (12, 'Melissa', 'Garcia'),"
                " (13, 'Russell', 'Morales'),"
                " (14, 'Jacqueline', 'Long'),"
                " (15, 'Dylan', 'Shaw')"));
        if (!insert) return std::move(insert).status();
        return spanner::Mutations{};
      });
  if (!commit_result) throw std::move(commit_result).status();
  std::cout << "Insert was successful [spanner_dml_getting_started_insert]\n";
}
```

Run the sample using the `getting-started-insert` argument.

```
bazel run //google/cloud/spanner/samples:samples -- \
    getting-started-insert PROJECT_ID test-instance example-db
```

You should see:

```
Insert was successful [spanner_dml_getting_started_insert]
```

**Note:** There are limits to commit size. See [CRUD limit](/spanner/quotas#limits-for) for more information.

## Write data with mutations

You can also insert data using [mutations](/spanner/docs/modify-mutation-api).

You write data using a `Client` object. The `Client::Commit()` function creates and commits a transaction for writes that execute atomically at a single logical point in time across columns, rows, and tables in a database.

This code shows how to write the data using mutations:

```
void InsertData(google::cloud::spanner::Client client) {
  namespace spanner = ::google::cloud::spanner;
  auto insert_singers = spanner::InsertMutationBuilder(
                            "Singers", {"SingerId", "FirstName", "LastName"})
                            .EmplaceRow(1, "Marc", "Richards")
                            .EmplaceRow(2, "Catalina", "Smith")
                            .EmplaceRow(3, "Alice", "Trentor")
                            .EmplaceRow(4, "Lea", "Martin")
                            .EmplaceRow(5, "David", "Lomond")
                            .Build();

  auto insert_albums = spanner::InsertMutationBuilder(
                           "Albums", {"SingerId", "AlbumId", "AlbumTitle"})
                           .EmplaceRow(1, 1, "Total Junk")
                           .EmplaceRow(1, 2, "Go, Go, Go")
                           .EmplaceRow(2, 1, "Green")
                           .EmplaceRow(2, 2, "Forever Hold Your Peace")
                           .EmplaceRow(2, 3, "Terrified")
                           .Build();

  auto commit_result =
      client.Commit(spanner::Mutations{insert_singers, insert_albums});
  if (!commit_result) throw std::move(commit_result).status();
  std::cout << "Insert was successful [spanner_insert_data]\n";
}
```

Run the sample using the `insert-data` argument.

```
bazel run //google/cloud/spanner/samples:samples -- \
    insert-data PROJECT_ID test-instance example-db
```

You should see:

```
Insert was successful [spanner_insert_data]
```

**Note:** There are limits to commit size. See [CRUD limit](/spanner/quotas#limits-for) for more information.

## Query data using SQL

Spanner supports a SQL interface for reading data, which you can access on the command line using the Google Cloud CLI or programmatically using the Spanner client library for C++.

### On the command line

Execute the following SQL statement to read the values of all columns from the `Albums` table:

```
gcloud spanner databases execute-sql example-db --instance=test-instance \
    --sql='SELECT SingerId, AlbumId, AlbumTitle FROM Albums'
```

**Note:** For the GoogleSQL reference, see [Query syntax in GoogleSQL](/spanner/docs/reference/standard-sql/query-syntax) and for PostgreSQL reference, see [PostgreSQL lexical structure and syntax](/spanner/docs/reference/postgresql/lexical).

The result shows:

```
SingerId AlbumId AlbumTitle
1        1       Total Junk
1        2       Go, Go, Go
2        1       Green
2        2       Forever Hold Your Peace
2        3       Terrified
```

### Use the Spanner client library for C++

In addition to executing a SQL statement on the command line, you can issue the same SQL statement programmatically using the Spanner client library for C++.

You use the `Client::ExecuteQuery()` function to run the SQL query. Here's how to issue the query and access the data:

```
void QueryData(google::cloud::spanner::Client client) {
  namespace spanner = ::google::cloud::spanner;

  spanner::SqlStatement select("SELECT SingerId, LastName FROM Singers");
  using RowType = std::tuple<std::int64_t, std::string>;
  auto rows = client.ExecuteQuery(std::move(select));
  for (auto& row : spanner::StreamOf<RowType>(rows)) {
    if (!row) throw std::move(row).status();
    std::cout << "SingerId: " << std::get<0>(*row) << "\t";
    std::cout << "LastName: " << std::get<1>(*row) << "\n";
  }

  std::cout << "Query completed for [spanner_query_data]\n";
}
```

Run the sample using the `query_data` argument.

```
bazel run //google/cloud/spanner/samples:samples -- \
    query-data PROJECT_ID test-instance example-db
```

You should see the following result:

```
SingerId: 1     LastName: Richards
SingerId: 2     LastName: Smith
SingerId: 3     LastName: Trentor
SingerId: 4     LastName: Martin
SingerId: 5     LastName: Lomond
SingerId: 12    LastName: Garcia
SingerId: 13    LastName: Morales
SingerId: 14    LastName: Long
SingerId: 15    LastName: Shaw
```

### Query using a SQL parameter

If your application has a frequently executed query, you can improve its performance by parameterizing it. The resulting parametric query can be cached and reused, which reduces compilation costs. For more information, see [Use query parameters to speed up frequently executed queries](/spanner/docs/sql-best-practices#query-parameters).

Here is an example of using a parameter in the `WHERE` clause to query records containing a specific value for `LastName`.

### GoogleSQL

```
void QueryWithParameter(google::cloud::spanner::Client client) {
  namespace spanner = ::google::cloud::spanner;

  spanner::SqlStatement select(
      "SELECT SingerId, FirstName, LastName FROM Singers"
      " WHERE LastName = @last_name",
      {{"last_name", spanner::Value("Garcia")}});
  using RowType = std::tuple<std::int64_t, std::string, std::string>;
  auto rows = client.ExecuteQuery(std::move(select));
  for (auto& row : spanner::StreamOf<RowType>(rows)) {
    if (!row) throw std::move(row).status();
    std::cout << "SingerId: " << std::get<0>(*row) << "\t";
    std::cout << "FirstName: " << std::get<1>(*row) << "\t";
    std::cout << "LastName: " << std::get<2>(*row) << "\n";
  }

  std::cout << "Query completed for [spanner_query_with_parameter]\n";
}
```

### PostgreSQL

```
void QueryWithParameter(google::cloud::spanner::Client client) {
  std::cout << "Listing all singers with a last name that starts with 'S'\n";
  auto sql = google::cloud::spanner::SqlStatement(
      "SELECT SingerId, FirstName, LastName FROM Singers"
      "  WHERE LastName LIKE $1",
      {{"p1", google::cloud::spanner::Value("S%")}});
  using RowType = std::tuple<std::int64_t, std::string, std::string>;
  auto rows = client.ExecuteQuery(std::move(sql));
  for (auto& row : google::cloud::spanner::StreamOf<RowType>(rows)) {
    if (!row) throw std::move(row).status();
    std::cout << "SingerId: " << std::get<0>(*row) << "\t";
    std::cout << "FirstName: " << std::get<1>(*row) << "\t";
    std::cout << "LastName: " << std::get<2>(*row) << "\n";
  }
  std::cout << "Query completed.\n";
}
```

Run the sample using the query-with-parameter command.

```
bazel run //google/cloud/spanner/samples:samples -- \
    query-with-parameter PROJECT_ID test-instance example-db
```

You should see the following result:

```
SingerId: 12    FirstName: Melissa      LastName: Garcia
```

## Read data using the read API

In addition to Spanner's SQL interface, Spanner also supports a read interface.

You use the `Client::Read()` function to read rows from the database. Use a `KeySet` object to define a collection of keys and key ranges to read.

Here's how to read the data:

```
void ReadData(google::cloud::spanner::Client client) {
  namespace spanner = ::google::cloud::spanner;

  auto rows = client.Read("Albums", google::cloud::spanner::KeySet::All(),
                          {"SingerId", "AlbumId", "AlbumTitle"});
  using RowType = std::tuple<std::int64_t, std::int64_t, std::string>;
  for (auto& row : spanner::StreamOf<RowType>(rows)) {
    if (!row) throw std::move(row).status();
    std::cout << "SingerId: " << std::get<0>(*row) << "\t";
    std::cout << "AlbumId: " << std::get<1>(*row) << "\t";
    std::cout << "AlbumTitle: " << std::get<2>(*row) << "\n";
  }

  std::cout << "Read completed for [spanner_read_data]\n";
}
```

Run the sample using the `read-data` argument.

```
bazel run //google/cloud/spanner/samples:samples -- \
    read-data PROJECT_ID test-instance example-db
```

You should see output similar to:

```
SingerId: 1, AlbumId: 1, AlbumTitle: Total Junk
SingerId: 1, AlbumId: 2, AlbumTitle: Go, Go, Go
SingerId: 2, AlbumId: 1, AlbumTitle: Green
SingerId: 2, AlbumId: 2, AlbumTitle: Forever Hold Your Peace
SingerId: 2, AlbumId: 3, AlbumTitle: Terrified
```

## Update the database schema

Assume you need to add a new column called `MarketingBudget` to the `Albums` table. Adding a new column to an existing table requires an update to your database schema. Spanner supports schema updates to a database while the database continues to serve traffic. Schema updates don't require taking the database offline and they don't lock entire tables or columns; you can continue writing data to the database during the schema update. Read more about supported schema updates and schema change performance in [Make schema updates](/spanner/docs/schema-updates).

### Add a column

You can add a column on the command line using the Google Cloud CLI or programmatically using the Spanner client library for C++.

#### On the command line

Use the following [`ALTER TABLE`](/spanner/docs/reference/standard-sql/data-definition-language#alter_table) command to add the new column to the table:

### GoogleSQL

```
gcloud spanner databases ddl update example-db --instance=test-instance \
    --ddl='ALTER TABLE Albums ADD COLUMN MarketingBudget INT64'
```

### PostgreSQL

```
gcloud spanner databases ddl update example-db --instance=test-instance \
    --ddl='ALTER TABLE Albums ADD COLUMN MarketingBudget BIGINT'
```

You should see:

```
Schema updating...done.
```

#### Use the Spanner client library for C++

Use the `DatabaseAdminClient::UpdateDatabase()` function to modify the schema.

### GoogleSQL

```
void AddColumn(google::cloud::spanner_admin::DatabaseAdminClient client,
               std::string const& project_id, std::string const& instance_id,
               std::string const& database_id) {
  google::cloud::spanner::Database database(project_id, instance_id,
                                            database_id);
  auto metadata =
      client
          .UpdateDatabaseDdl(
              database.FullName(),
              {"ALTER TABLE Albums ADD COLUMN MarketingBudget INT64"})
          .get();
  if (!metadata) throw std::move(metadata).status();
  std::cout << "Added MarketingBudget column\n";
}
```

### PostgreSQL

```
void AddColumn(google::cloud::spanner_admin::DatabaseAdminClient client,
               google::cloud::spanner::Database const& database) {
  std::vector<std::string> statements = {
      R"""(
        ALTER TABLE Albums
            ADD COLUMN MarketingBudget BIGINT
      )""",
  };
  auto metadata =
      client.UpdateDatabaseDdl(database.FullName(), statements).get();
  google::cloud::spanner_testing::LogUpdateDatabaseDdl(  //! TODO(#4758)
      client, database, metadata.status());              //! TODO(#4758)
  if (!metadata) throw std::move(metadata).status();
  std::cout << "Column added.\nNew DDL:\n" << metadata->DebugString();
}
```

Run the sample using the `add-column` command.

```
bazel run //google/cloud/spanner/samples:samples -- \
    add-column PROJECT_ID test-instance example-db
```

You should see:

```
Added MarketingBudget column
```

### Write data to the new column

The following code writes data to the new column. It sets `MarketingBudget` to `100000` for the row keyed by `Albums(1, 1)` and to `500000` for the row keyed by `Albums(2, 2)`.

```
void UpdateData(google::cloud::spanner::Client client) {
  namespace spanner = ::google::cloud::spanner;
  auto commit_result = client.Commit(spanner::Mutations{
      spanner::UpdateMutationBuilder("Albums",
                                     {"SingerId", "AlbumId", "MarketingBudget"})
          .EmplaceRow(1, 1, 100000)
          .EmplaceRow(2, 2, 500000)
          .Build()});
  if (!commit_result) throw std::move(commit_result).status();
  std::cout << "Update was successful [spanner_update_data]\n";
}
```

Run the sample using the `update-data` argument.

```
bazel run //google/cloud/spanner/samples:samples -- \
    update-data PROJECT_ID test-instance example-db
```

You can also execute a SQL query or a read call to fetch the values that you just wrote.

Here's the code to execute the query:

```
void QueryNewColumn(google::cloud::spanner::Client client) {
  namespace spanner = ::google::cloud::spanner;

  spanner::SqlStatement select(
      "SELECT SingerId, AlbumId, MarketingBudget FROM Albums");
  using RowType =
      std::tuple<std::int64_t, std::int64_t, absl::optional<std::int64_t>>;

  auto rows = client.ExecuteQuery(std::move(select));
  for (auto& row : spanner::StreamOf<RowType>(rows)) {
    if (!row) throw std::move(row).status();
    std::cout << "SingerId: " << std::get<0>(*row) << "\t";
    std::cout << "AlbumId: " << std::get<1>(*row) << "\t";
    auto marketing_budget = std::get<2>(*row);
    if (marketing_budget) {
      std::cout << "MarketingBudget: " << *marketing_budget << "\n";
    } else {
      std::cout << "MarketingBudget: NULL\n";
    }
  }
  std::cout << "Read completed for [spanner_read_data_with_new_column]\n";
}
```

To execute this query, run the sample using the `query-new-column` argument.

```
bazel run //google/cloud/spanner/samples:samples -- \
    query-new-column PROJECT_ID test-instance example-db
```

You should see:

```
SingerId: 1 AlbumId: 1  MarketingBudget: 100000
SingerId: 1 AlbumId: 2  MarketingBudget: NULL
SingerId: 2 AlbumId: 1  MarketingBudget: NULL
SingerId: 2 AlbumId: 2  MarketingBudget: 500000
SingerId: 2 AlbumId: 3  MarketingBudget: NULL
```

## Update data

You can update data using DML in a read-write transaction.

You use the `Client::ExecuteDml()` function to execute a DML statement.

### GoogleSQL

```
void DmlGettingStartedUpdate(google::cloud::spanner::Client client) {
  using ::google::cloud::StatusOr;
  namespace spanner = ::google::cloud::spanner;

  // A helper to read the budget for the given album and singer.
  auto get_budget = [&](spanner::Transaction txn, std::int64_t album_id,
                        std::int64_t singer_id) -> StatusOr<std::int64_t> {
    auto key = spanner::KeySet().AddKey(spanner::MakeKey(album_id, singer_id));
    auto rows = client.Read(std::move(txn), "Albums", key, {"MarketingBudget"});
    using RowType = std::tuple<absl::optional<std::int64_t>>;
    auto row = spanner::GetSingularRow(spanner::StreamOf<RowType>(rows));
    if (!row) return std::move(row).status();
    auto const budget = std::get<0>(*row);
    return budget ? *budget : 0;
  };

  // A helper to update the budget for the given album and singer.
  auto update_budget = [&](spanner::Transaction txn, std::int64_t album_id,
                           std::int64_t singer_id, std::int64_t budget) {
    auto sql = spanner::SqlStatement(
        "UPDATE Albums SET MarketingBudget = @AlbumBudget"
        "  WHERE SingerId = @SingerId AND AlbumId = @AlbumId",
        {{"AlbumBudget", spanner::Value(budget)},
         {"AlbumId", spanner::Value(album_id)},
         {"SingerId", spanner::Value(singer_id)}});
    return client.ExecuteDml(std::move(txn), std::move(sql));
  };

  auto const transfer_amount = 20000;
  auto commit_result = client.Commit(
      [&](spanner::Transaction const& txn) -> StatusOr<spanner::Mutations> {
        auto budget1 = get_budget(txn, 1, 1);
        if (!budget1) return std::move(budget1).status();
        if (*budget1 < transfer_amount) {
          return google::cloud::Status(
              google::cloud::StatusCode::kUnknown,
              "cannot transfer " + std::to_string(transfer_amount) +
                  " from budget of " + std::to_string(*budget1));
        }
        auto budget2 = get_budget(txn, 2, 2);
        if (!budget2) return std::move(budget2).status();
        auto update = update_budget(txn, 1, 1, *budget1 - transfer_amount);
        if (!update) return std::move(update).status();
        update = update_budget(txn, 2, 2, *budget2 + transfer_amount);
        if (!update) return std::move(update).status();
        return spanner::Mutations{};
      });
  if (!commit_result) throw std::move(commit_result).status();
  std::cout << "Update was successful [spanner_dml_getting_started_update]\n";
}
```

### PostgreSQL

```
void DmlGettingStartedUpdate(google::cloud::spanner::Client client) {
  // A helper to read the budget for the given album and singer.
  auto get_budget =
      [&](google::cloud::spanner::Transaction txn, std::int64_t album_id,
          std::int64_t singer_id) -> google::cloud::StatusOr<std::int64_t> {
    auto key = google::cloud::spanner::KeySet().AddKey(
        google::cloud::spanner::MakeKey(album_id, singer_id));
    auto rows = client.Read(std::move(txn), "Albums", key, {"MarketingBudget"});
    using RowType = std::tuple<absl::optional<std::int64_t>>;
    auto row = google::cloud::spanner::GetSingularRow(
        google::cloud::spanner::StreamOf<RowType>(rows));
    if (!row) return std::move(row).status();
    auto const budget = std::get<0>(*row);
    return budget ? *budget : 0;
  };

  // A helper to update the budget for the given album and singer.
  auto update_budget = [&](google::cloud::spanner::Transaction txn,
                           std::int64_t singer_id, std::int64_t album_id,
                           std::int64_t budget) {
    auto sql = google::cloud::spanner::SqlStatement(
        "UPDATE Albums SET MarketingBudget = $1"
        "  WHERE SingerId = $2 AND AlbumId = $3",
        {{"p1", google::cloud::spanner::Value(budget)},
         {"p2", google::cloud::spanner::Value(singer_id)},
         {"p3", google::cloud::spanner::Value(album_id)}});
    return client.ExecuteDml(std::move(txn), std::move(sql));
  };

  auto const transfer_amount = 20000;
  auto commit = client.Commit(
      [&](google::cloud::spanner::Transaction const& txn)
          -> google::cloud::StatusOr<google::cloud::spanner::Mutations> {
        auto budget1 = get_budget(txn, 1, 1);
        if (!budget1) return std::move(budget1).status();
        if (*budget1 < transfer_amount) {
          return google::cloud::Status(
              google::cloud::StatusCode::kUnknown,
              "cannot transfer " + std::to_string(transfer_amount) +
                  " from budget of " + std::to_string(*budget1));
        }
        auto budget2 = get_budget(txn, 2, 2);
        if (!budget2) return std::move(budget2).status();
        auto update = update_budget(txn, 1, 1, *budget1 - transfer_amount);
        if (!update) return std::move(update).status();
        update = update_budget(txn, 2, 2, *budget2 + transfer_amount);
        if (!update) return std::move(update).status();
        return google::cloud::spanner::Mutations{};
      });
  if (!commit) throw std::move(commit).status();
  std::cout << "Update was successful.\n";
}
```

Run the sample using the `getting-started-update` argument.

```
bazel run //google/cloud/spanner/samples:samples -- \
    getting-started-update PROJECT_ID test-instance example-db
```

You should see:

```
Update was successful [spanner_dml_getting_started_update]
```

**Note:** You can also [update data using mutations](/spanner/docs/modify-mutation-api#updating_rows_in_a_table).

## Use a secondary index

Suppose you wanted to fetch all rows of `Albums` that have `AlbumTitle` values in a certain range. You could read all values from the `AlbumTitle` column using a SQL statement or a read call, and then discard the rows that don't meet the criteria, but doing this full table scan is expensive, especially for tables with a lot of rows. Instead you can speed up the retrieval of rows when searching by non-primary key columns by creating a [secondary index](/spanner/docs/secondary-indexes) on the table.

Adding a secondary index to an existing table requires a schema update. Like other schema updates, Spanner supports adding an index while the database continues to serve traffic. Spanner automatically backfills the index with your existing data. Backfills might take a few minutes to complete, but you don't need to take the database offline or avoid writing to the indexed table during this process. For more details, see [Add a secondary index](/spanner/docs/secondary-indexes#adding_an_index).

After you add a secondary index, Spanner automatically uses it for SQL queries that are likely to run faster with the index. If you use the read interface, you must specify the index that you want to use.

### Add a secondary index

You can add an index on the command line using the gcloud CLI or programmatically using the Spanner client library for C++.

#### On the command line

Use the following [`CREATE INDEX`](/spanner/docs/reference/standard-sql/data-definition-language#create_index) command to add an index to the database:

```
gcloud spanner databases ddl update example-db --instance=test-instance \
    --ddl='CREATE INDEX AlbumsByAlbumTitle ON Albums(AlbumTitle)'
```

You should see:

```
Schema updating...done.
```

#### Using the Spanner client library for C++

You use the `DatabaseAdminClient::UpdateDatabase()` function to add an index:

```
void AddIndex(google::cloud::spanner_admin::DatabaseAdminClient client,
              std::string const& project_id, std::string const& instance_id,
              std::string const& database_id) {
  google::cloud::spanner::Database database(project_id, instance_id,
                                            database_id);
  auto metadata =
      client
          .UpdateDatabaseDdl(
              database.FullName(),
              {"CREATE INDEX AlbumsByAlbumTitle ON Albums(AlbumTitle)"})
          .get();
  if (!metadata) throw std::move(metadata).status();
  std::cout << "`AlbumsByAlbumTitle` Index successfully added, new DDL:\n"
            << metadata->DebugString();
}
```

Run the sample using the `add-index` argument.

```
bazel run //google/cloud/spanner/samples:samples -- \
    add-index PROJECT_ID test-instance example-db
```

Adding an index can take a few minutes. After the index is added, you should see output similar to this:

```
`AlbumsByAlbumTitle` Index successfully added, new DDL:
database: "projects/PROJECT_ID/instances/test-instance/databases/example-db"
statements: "CREATE INDEX AlbumsByAlbumTitle ON Albums(AlbumTitle)"
commit_timestamps {
  seconds: 1581011550
  nanos: 531102000
}
```

### Read using the index

For SQL queries, Spanner automatically uses an appropriate index. In the read interface, you must specify the index in your request.

To use the index in the read interface, use the `Client::Read()` function, which reads zero or more rows from a database using an index.

The following code fetches all `AlbumId`, and `AlbumTitle` columns from the `AlbumsByAlbumTitle` index.

```
void ReadDataWithIndex(google::cloud::spanner::Client client) {
  namespace spanner = ::google::cloud::spanner;

  auto rows =
      client.Read("Albums", google::cloud::spanner::KeySet::All(),
                  {"AlbumId", "AlbumTitle"},
                  google::cloud::Options{}.set<spanner::ReadIndexNameOption>(
                      "AlbumsByAlbumTitle"));
  using RowType = std::tuple<std::int64_t, std::string>;
  for (auto& row : spanner::StreamOf<RowType>(rows)) {
    if (!row) throw std::move(row).status();
    std::cout << "AlbumId: " << std::get<0>(*row) << "\t";
    std::cout << "AlbumTitle: " << std::get<1>(*row) << "\n";
  }
  std::cout << "Read completed for [spanner_read_data_with_index]\n";
}
```

Run the sample using the `read-data-with-index` argument.

```
bazel run //google/cloud/spanner/samples:samples -- \
    read-data-with-index PROJECT_ID test-instance example-db
```

You should see:

```
AlbumId: 2  AlbumTitle: Forever Hold Your Peace
AlbumId: 2  AlbumTitle: Go, Go, Go
AlbumId: 1  AlbumTitle: Green
AlbumId: 3  AlbumTitle: Terrified
AlbumId: 1  AlbumTitle: Total Junk
```

### Add an index for index-only reads

You might have noticed that the previous read example doesn't include reading the `MarketingBudget` column. This is because Spanner's read interface doesn't support the ability to join an index with a data table to look up values that are not stored in the index.

Create an alternate definition of `AlbumsByAlbumTitle` that stores a copy of `MarketingBudget` in the index.

#### On the command line

### GoogleSQL

```
gcloud spanner databases ddl update example-db --instance=test-instance \
    --ddl='CREATE INDEX AlbumsByAlbumTitle2 ON Albums(AlbumTitle) STORING (MarketingBudget)
```

### PostgreSQL

```
gcloud spanner databases ddl update example-db --instance=test-instance \
    --ddl='CREATE INDEX AlbumsByAlbumTitle2 ON Albums(AlbumTitle) INCLUDE (MarketingBudget)
```

Adding an index can take a few minutes. After the index is added, you should see:

```
Schema updating...done.
```

#### Using the Spanner client library for C++

You use the `DatabaseAdminClient::UpdateDatabase()` function to add an index with a `STORING` clause for :

```
void AddStoringIndex(google::cloud::spanner_admin::DatabaseAdminClient client,
                     std::string const& project_id,
                     std::string const& instance_id,
                     std::string const& database_id) {
  google::cloud::spanner::Database database(project_id, instance_id,
                                            database_id);
  auto metadata = client
                      .UpdateDatabaseDdl(database.FullName(), {R"""(
                        CREATE INDEX AlbumsByAlbumTitle2 ON Albums(AlbumTitle)
                            STORING (MarketingBudget))"""})
                      .get();
  if (!metadata) throw std::move(metadata).status();
  std::cout << "`AlbumsByAlbumTitle2` Index successfully added, new DDL:\n"
            << metadata->DebugString();
}
```

Run the sample using the `add-storing-index` argument.

```
bazel run //google/cloud/spanner/samples:samples -- \
    add-storing-index PROJECT_ID test-instance example-db
```

You should see output similar to this:

```
`AlbumsByAlbumTitle2` Index successfully added, new DDL:
database: "projects/PROJECT_ID/instances/test-instance/databases/example-db"
statements: "CREATE INDEX AlbumsByAlbumTitle2 ON Albums(AlbumTitle) STORING (MarketingBudget)"
commit_timestamps {
  seconds: 1581012328
  nanos: 416682000
}
```

Now you can execute a read that fetches all `AlbumId`, `AlbumTitle`, and `MarketingBudget` columns from the `AlbumsByAlbumTitle2` index:

Read data using the storing index you created by executing a query that explicitly specifies the index:

```
void ReadDataWithStoringIndex(google::cloud::spanner::Client client) {
  namespace spanner = ::google::cloud::spanner;

  auto rows =
      client.Read("Albums", google::cloud::spanner::KeySet::All(),
                  {"AlbumId", "AlbumTitle", "MarketingBudget"},
                  google::cloud::Options{}.set<spanner::ReadIndexNameOption>(
                      "AlbumsByAlbumTitle2"));
  using RowType =
      std::tuple<std::int64_t, std::string, absl::optional<std::int64_t>>;
  for (auto& row : spanner::StreamOf<RowType>(rows)) {
    if (!row) throw std::move(row).status();
    std::cout << "AlbumId: " << std::get<0>(*row) << "\t";
    std::cout << "AlbumTitle: " << std::get<1>(*row) << "\t";
    auto marketing_budget = std::get<2>(*row);
    if (marketing_budget) {
      std::cout << "MarketingBudget: " << *marketing_budget << "\n";
    } else {
      std::cout << "MarketingBudget: NULL\n";
    }
  }
  std::cout << "Read completed for [spanner_read_data_with_storing_index]\n";
}
```

Run the sample using the `read-data-with-storing-index` argument.

```
bazel run //google/cloud/spanner/samples:samples -- \
    read-data-with-storing-index PROJECT_ID test-instance example-db
```

You should see output similar to:

```
AlbumId: 2  AlbumTitle: Forever Hold Your Peace MarketingBudget: 520000
AlbumId: 2  AlbumTitle: Go, Go, Go  MarketingBudget: NULL
AlbumId: 1  AlbumTitle: Green   MarketingBudget: NULL
AlbumId: 3  AlbumTitle: Terrified   MarketingBudget: NULL
AlbumId: 1  AlbumTitle: Total Junk  MarketingBudget: 80000
```

## Retrieve data using read-only transactions

Suppose you want to execute more than one read at the same timestamp. [Read-only transactions](/spanner/docs/transactions#read-only_transactions) observe a consistent prefix of the transaction commit history, so your application always gets consistent data. The `Transaction` type is used to represent all kinds of transactions. Use the `MakeReadOnlyTransaction()` factory function to create a read-only transaction.

The following shows how to run a query and perform a read in the same read-only transaction:

```
void ReadOnlyTransaction(google::cloud::spanner::Client client) {
  namespace spanner = ::google::cloud::spanner;
  auto read_only = spanner::MakeReadOnlyTransaction();

  spanner::SqlStatement select(
      "SELECT SingerId, AlbumId, AlbumTitle FROM Albums");
  using RowType = std::tuple<std::int64_t, std::int64_t, std::string>;

  // Read#1.
  auto rows1 = client.ExecuteQuery(read_only, select);
  std::cout << "Read 1 results\n";
  for (auto& row : spanner::StreamOf<RowType>(rows1)) {
    if (!row) throw std::move(row).status();
    std::cout << "SingerId: " << std::get<0>(*row)
              << " AlbumId: " << std::get<1>(*row)
              << " AlbumTitle: " << std::get<2>(*row) << "\n";
  }
  // Read#2. Even if changes occur in-between the reads the transaction ensures
  // that Read #1 and Read #2 return the same data.
  auto rows2 = client.ExecuteQuery(read_only, select);
  std::cout << "Read 2 results\n";
  for (auto& row : spanner::StreamOf<RowType>(rows2)) {
    if (!row) throw std::move(row).status();
    std::cout << "SingerId: " << std::get<0>(*row)
              << " AlbumId: " << std::get<1>(*row)
              << " AlbumTitle: " << std::get<2>(*row) << "\n";
  }
}
```

Run the sample using the `read-only-transaction` argument.

```
bazel run //google/cloud/spanner/samples:samples -- \
    read-only-transaction PROJECT_ID test-instance example-db
```

You should see output similar to:

```
Read 1 results
SingerId: 2 AlbumId: 2 AlbumTitle: Forever Hold Your Peace
SingerId: 1 AlbumId: 2 AlbumTitle: Go, Go, Go
SingerId: 2 AlbumId: 1 AlbumTitle: Green
SingerId: 2 AlbumId: 3 AlbumTitle: Terrified
SingerId: 1 AlbumId: 1 AlbumTitle: Total Junk
Read 2 results
SingerId: 2 AlbumId: 2 AlbumTitle: Forever Hold Your Peace
SingerId: 1 AlbumId: 2 AlbumTitle: Go, Go, Go
SingerId: 2 AlbumId: 1 AlbumTitle: Green
SingerId: 2 AlbumId: 3 AlbumTitle: Terrified
SingerId: 1 AlbumId: 1 AlbumTitle: Total Junk
```

## Cleanup

To avoid incurring additional charges to your Cloud Billing account for the resources used in this tutorial, drop the database and delete the instance that you created.

### Delete the database

If you delete an instance, all databases within it are automatically deleted. This step shows how to delete a database without deleting an instance (you would still incur charges for the instance).

#### On the command line

```
gcloud spanner databases delete example-db --instance=test-instance
```

#### Using the Google Cloud console

1.  Go to the **Spanner Instances** page in the Google Cloud console.
    
    [Go to the Instances page](https://console.cloud.google.com/spanner/instances)
    
2.  Click the instance.
    
3.  Click the database that you want to delete.
    
4.  In the **Database details** page, click **Delete**.
    
5.  Confirm that you want to delete the database and click **Delete**.
    

### Delete the instance

Deleting an instance automatically drops all databases created in that instance.

#### On the command line

```
gcloud spanner instances delete test-instance
```

#### Using the Google Cloud console

1.  Go to the **Spanner Instances** page in the Google Cloud console.
    
    [Go to the Instances page](https://console.cloud.google.com/spanner/instances)
    
2.  Click your instance.
    
3.  Click **Delete**.
    
4.  Confirm that you want to delete the instance and click **Delete**.
    

## What's next

-   Learn how to [access Spanner with a virtual machine instance](/spanner/docs/configure-virtual-machine-instance).
    
-   Learn about authorization and authentication credentials in [Authenticate to Cloud services using client libraries](/docs/authentication/getting-started).
    
-   Learn more about Spanner [Schema design best practices](/spanner/docs/schema-design).
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
