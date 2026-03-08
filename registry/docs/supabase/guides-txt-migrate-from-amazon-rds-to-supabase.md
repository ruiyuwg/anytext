# Migrate from Amazon RDS to Supabase

Migrate your Amazon RDS MySQL or MS SQL database to Supabase.

This guide aims to exhibit the process of transferring your Amazon RDS database from any of these engines Postgres, MySQL or MS SQL to Supabase's Postgres database. Although Amazon RDS is a favored managed database service provided by AWS, it may not suffice for all use cases. Supabase, on the other hand, provides an excellent free and open source option that encompasses all the necessary backend features to develop a product: a Postgres database, authentication, instant APIs, edge functions, real-time subscriptions, and storage.

Supabase's core is Postgres, enabling the use of row-level security and providing access to over 40 Postgres extensions. By migrating from Amazon RDS to Supabase, you can leverage Postgres to its fullest potential and acquire all the features you need to complete your project.

## Retrieve your Amazon RDS database credentials \[#retrieve-rds-credentials]

1. Log in to your [Amazon RDS account](https://aws.amazon.com/rds/).
2. Select the region where your RDS database is located.
3. Navigate to the **Databases** tab.
4. Select the database that you want to migrate.
5. In the **Connectivity & Security** tab, note down the Endpoint and the port number.
6. In the **Configuration** tab, note down the Database name and the Username.
7. If you do not have the password, create a new one and note it down.

![Copying RDS credentials from AWS Management Console](/docs/img/guides/resources/migrating-to-supabase/amazon-rds/amazon-rds_credentials.png)

## Retrieve your Supabase host \[#retrieve-supabase-host]

1. If you're new to Supabase, [create a project](https://database.new). Make a note of your password, you will need this later. If you forget it, you can [reset it here](/dashboard/project/_/database/settings).
2. On your project dashboard, click [Connect](/dashboard/project/_?showConnect=true\&method=session)
3. Under the Session pooler, click on the View parameters under the connect string. Note your Host (`$SUPABASE_HOST`).

![Finding Supabase host address](/docs/img/guides/resources/migrating-to-supabase/amazon-rds/database-settings-host.png)

## Migrate the database

The fastest way to migrate your database is with the Supabase migration tool on
[Google Colab](https://colab.research.google.com/github/mansueli/Supa-Migrate/blob/main/Amazon_RDS_to_Supabase.ipynb).

Alternatively, you can use [pgloader](https://github.com/dimitri/pgloader), a flexible and powerful data migration tool that supports a wide range of source database engines, including MySQL and MS SQL, and migrates the data to a Postgres database. For databases using the Postgres engine, we recommend using the [`pg_dump`](https://www.postgresql.org/docs/current/app-pgdump.html) and [psql](https://www.postgresql.org/docs/current/app-psql.html) command line tools, which are included in a full Postgres installation.

````
1.  Select the Database Engine from the Source database in the dropdown
2.  Set the environment variables (`HOST`, `USER`, `SOURCE_DB`,`PASSWORD`, `SUPABASE_URL`, and `SUPABASE_PASSWORD`) in the Colab notebook.
3.  Run the first two steps in [the notebook](https://colab.research.google.com/github/mansueli/Supa-Migrate/blob/main/Amazon_RDS_to_Supabase.ipynb) in order. The first sets engine and installs the necessary files.
4.  Run the third step to start the migration. This will take a few minutes.



1.  Install pgloader.

2.  Create a configuration file (e.g., config.load).

    For your destination, use your Supabase connection string with `Use connection pooling` enabled, and the mode set to `Session`. You can get the string from your [`Database Settings`](/dashboard/project/_/settings/general).

    ```sql
    load database
      from mysql://user:password@host/source_db
      into postgres://postgres.xxxx:password@xxxx.pooler.supabase.com:5432/postgres
    alter schema 'public' owner to 'postgres';
    set wal_buffers = '64MB', max_wal_senders = 0, statement_timeout = 0, work_mem to '2GB';
    ```

3.  Run the migration with pgloader

    ```bash
    pgloader config.load
    ```



1.  Install pgloader.

2.  Create a configuration file (e.g., config.load).

    ```sql
    LOAD DATABASE
        FROM mssql://USER:PASSWORD@HOST/SOURCE_DB
        INTO postgres://postgres.xxxx:password@xxxx.pooler.supabase.com:6543/postgres
    ALTER SCHEMA 'public' OWNER TO 'postgres';
    set wal_buffers = '64MB', max_wal_senders = 0, statement_timeout = 0, work_mem to '2GB';
    ```

3.  Run the migration with pgloader

    ```bash
    pgloader config.load
    ```
````

- If you're planning to migrate a database larger than 6 GB, we recommend [upgrading to at least a Large compute add-on](/docs/guides/platform/compute-add-ons). This will ensure you have the necessary resources to handle the migration efficiently.

- We strongly advise you to pre-provision the disk space you will need for your migration. On paid projects, you can do this by navigating to the [Compute and Disk Settings](/dashboard/project/_/settings/compute-and-disk) page. For more information on disk scaling and disk limits, check out our [disk settings](/docs/guides/platform/compute-and-disk#disk) documentation.

## Enterprise

[Contact us](https://forms.supabase.com/enterprise) if you need more help migrating your project.
