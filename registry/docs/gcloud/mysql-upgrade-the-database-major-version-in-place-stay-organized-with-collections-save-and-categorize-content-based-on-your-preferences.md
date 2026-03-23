-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Databases](https://docs.cloud.google.com/docs/databases)
-   [Cloud SQL](https://docs.cloud.google.com/sql/docs)
-   [MySQL](https://docs.cloud.google.com/sql/docs/mysql)
-   [Samples](https://docs.cloud.google.com/sql/docs/mysql/samples)

# Upgrade the database major version in-place Stay organized with collections Save and categorize content based on your preferences.

This sample demonstrates how to upgrade the database major version by upgrading your Cloud SQL for MySQL instance in-place.

## Explore further

For detailed documentation that includes this code sample, see the following:

-   [Upgrade the database major version in-place](/sql/docs/mysql/upgrade-major-db-version-inplace)

## Code sample

### Terraform

To learn how to apply or remove a Terraform configuration, see [Basic Terraform commands](/docs/terraform/basic-commands). For more information, see the [Terraform provider reference documentation](https://registry.terraform.io/providers/hashicorp/google/latest/docs).

```
resource "google_sql_database_instance" "default" {
  name             = "mysql-instance"
  region           = "us-central1"
  database_version = "MYSQL_8_0"
  settings {
    tier = "db-n1-standard-2"
  }
}
```

## What's next

To search and filter code samples for other Google Cloud products, see the [Google Cloud sample browser](/docs/samples?product=cloud_sql_mysql).

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.
