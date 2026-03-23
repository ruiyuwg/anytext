-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Databases](https://docs.cloud.google.com/docs/databases)
-   [Cloud SQL](https://docs.cloud.google.com/sql/docs)
-   [MySQL](https://docs.cloud.google.com/sql/docs/mysql)
-   [Guides](https://docs.cloud.google.com/sql/docs/mysql/features)

Send feedback

# Cloud SQL overview Stay organized with collections Save and categorize content based on your preferences.

MySQL   |  [PostgreSQL](/sql/docs/postgres/introduction "View this page for the PostgreSQL database engine")   |  [SQL Server](/sql/docs/sqlserver/introduction "View this page for the SQL Server database engine")

Cloud SQL is a fully managed relational database service for MySQL, PostgreSQL, and SQL Server. This frees you from database administration tasks so that you have more time to manage your data.

This page discusses basic concepts and terminology for Cloud SQL, which provides SQL data storage for Google Cloud. For a more in-depth explanation of key concepts, see the [key terms](/sql/docs/key-terms) and [features](/sql/docs/features) pages. For information about how Cloud SQL databases compare with one another, see [Cloud SQL feature support by database engine](/sql/docs/feature_support).

## Use cases for Cloud SQL

Cloud SQL provides a cloud-based alternative to local MySQL, PostgreSQL, and SQL Server databases. You should use Cloud SQL if you want to spend less time managing your database and more time using it.

Many applications running on Compute Engine, App Engine and other services in Google Cloud use Cloud SQL for database storage.

## What Cloud SQL provides

Cloud SQL offers many services so you don't have to build and maintain them yourself. You can focus on your data and let Cloud SQL handle the following operations:

-   [Backups](/sql/docs/mysql/backup-recovery/backups)
-   [High availability and failover](/sql/docs/mysql/high-availability)
-   [Data encryption](/sql/docs/mysql/faq#encryption)
-   [Network connectivity](/sql/docs/mysql/connect-overview)
-   [Storage](/sql/docs/mysql/faq#data-storage,-replication,-and-authentication)
-   [Export and import](/sql/docs/mysql/import-export)
-   [Replication](/sql/docs/mysql/replication)
-   [Maintenance and updates](/sql/docs/mysql/maintenance)
-   [Monitoring](/sql/docs/mysql/monitor-instance)
-   [Logging](/sql/docs/mysql/logging)

## What is a Cloud SQL instance?

Each Cloud SQL instance is powered by a virtual machine (VM) running on a host Google Cloud server. Each VM operates the database program, such as MySQL Server, PostgreSQL, or SQL Server, and service agents that provide supporting services, such as logging and monitoring. The high availability option also provides a standby VM in another zone with a configuration that's identical to the primary VM.

The database is stored on a scalable, durable network storage device called a `persistent disk` that attaches to the VM. A static IP address sits in front of each VM to help make sure that the IP address an application connects to persists throughout the lifetime of the Cloud SQL instance.

Cloud SQL instance overview:

![](/static/sql/images/intro2.png)

## Database administration

Cloud SQL lets you create and delete databases and database users, but it isn't a database administration tool. There are many database administration tools you can choose from, depending on your database engine, including the following:

-   [phpMyAdmin](https://www.phpmyadmin.net/) for MySQL
-   [MySQL Workbench](https://www.mysql.com/products/workbench/) for MySQL
-   [Toad Edge](https://www.quest.com/products/toad-edge/) for MySQL and PostgreSQL
-   [pgAdmin.org](https://www.pgadmin.org/) for PostgreSQL
-   [SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15) for SQL Server
-   [Visual Studio Code](https://code.visualstudio.com/) for SQL Server

## Cloud SQL pricing

Cloud SQL pricing varies with your configuration settings, and depends on:

-   How much storage you provision, in GiB per month
-   How many CPUs you select for your Cloud SQL instance
-   How much memory you select for your Cloud SQL instance
-   Where you choose to host your data
-   How much network traffic leaves your instance
-   How many IP addresses you assign and use

For more information, see the [pricing](https://cloud.google.com/sql/pricing) page or the [pricing calculator](https://cloud.google.com/products/calculator).

You can create an account to evaluate how Cloud SQL performs in real-world scenarios. New customers also get $300 in free credits to spend on Cloud SQL to run, test, and deploy workloads. You won't be charged until you upgrade.

Sign up to [try Cloud SQL](https://console.cloud.google.com/freetrial?redirectPath=/sql).

## Connect to a Cloud SQL managed database

Connecting to a Cloud SQL managed database is similar to connecting to a self-managed database. Depending on how you configure it, your Cloud SQL instance has a public IP address (which can be accessed from outside of Google Cloud, using the internet), or a private IP address (which can only be accessed through a [Virtual Private Cloud (VPC) network](/vpc/docs/overview)). In addition, Cloud SQL provides different authorization options to control who is allowed to connect to your instance, such as the [Cloud SQL Auth Proxy](/sql/docs/mysql/sql-proxy).

For more details on how to connect, authorize, and authenticate to your Cloud SQL instance, see the [Connecting Overview](/sql/docs/mysql/connect-overview) page.

## Cloud SQL updates

Over the life of a Cloud SQL instance, two kinds of updates can occur:

-   **Configuration updates**, which are done by the user.
-   **System updates**, which are performed by Cloud SQL.

### Configuration updates

As your database's usage grows and new workloads are added, you might want to update your database configuration to adapt accordingly. Configuration updates include:

-   Increasing compute resources
-   Modifying a database flag
-   Enabling high availability

Although Cloud SQL makes these updates possible with the click of a [button](/sql/docs/mysql/edit-instance), some configuration updates can require downtime. However, Cloud SQL offers several options to minimize downtime so that your databases can remain available.

### System updates

Keeping the database instance up and running requires operational effort beyond configuration updates. Servers and disks need to be replaced and upgraded. Operating systems need to be patched as new vulnerabilities are discovered. Database programs need to be upgraded as the database software provider releases new features and fixes new issues. Normally, a database administrator performs each of these updates regularly in order to ensure their systems stay reliable, protected, and up-to-date. Cloud SQL attends to these regular system updates for you, so you can spend less time managing your database and more time developing great applications.

The process Cloud SQL uses to perform system updates varies based on which part of the system is getting updated. In general, Cloud SQL system updates are divided into three categories: hardware updates, online updates, and maintenance.

**Hardware updates** improve the physical infrastructure, such as swapping out a defective machine host or replacing an old disk. Google Cloud performs hardware updates without interruption to your application. For example, when updating a database server, Google Cloud uses live migration, an advanced technology that reliably migrates a VM from the original host to a new one while the VM stays running.

**Online updates** enhance the software of the supporting service agents that sit adjacent to the database program on the VM. These updates are performed while the database is up and running, serving traffic. Online updates do not cause downtime for your application.

[**Maintenance updates**](/sql/docs/mysql/maintenance) apply upgrades to the operating system and the database program. Because these updates require an instance restart, they incur some downtime. For this reason, Cloud SQL lets you schedule maintenance to occur at a time that is the least disruptive to your application. If you're using [Cloud SQL Enterprise Plus edition](/sql/docs/mysql/editions-intro#availability-enhancements), then you can limit that downtime to [sub-second downtime](/sql/docs/mysql/maintenance#nearzero).

## What's next

Try out one or more of the quickstarts for:

-   [MySQL](/sql/docs/mysql/connect-instance-cloud-shell)
-   [PostgreSQL](/sql/docs/postgres/connect-instance-cloud-shell)
-   [SQL Server](/sql/docs/sqlserver/connect-instance-cloud-shell)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
