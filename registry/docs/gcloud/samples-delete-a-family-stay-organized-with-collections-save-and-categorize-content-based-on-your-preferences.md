-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Databases](https://docs.cloud.google.com/docs/databases)
-   [Bigtable](https://docs.cloud.google.com/bigtable/docs)
-   [Samples](https://docs.cloud.google.com/bigtable/docs/samples)

# Delete a family Stay organized with collections Save and categorize content based on your preferences.

Delete a column family.

## Code sample

### C++

To learn how to install and use the client library for Bigtable, see [Bigtable client libraries](/bigtable/docs/reference/libraries).

To authenticate to Bigtable, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
namespace cbt = ::google::cloud::bigtable;
namespace cbta = ::google::cloud::bigtable_admin;
using ::google::bigtable::admin::v2::ModifyColumnFamiliesRequest;
using ::google::cloud::StatusOr;
[](cbta::BigtableTableAdminClient admin, std::string const& project_id,
   std::string const& instance_id, std::string const& table_id,
   std::string const& family_name) {
  std::string table_name = cbt::TableName(project_id, instance_id, table_id);

  ModifyColumnFamiliesRequest::Modification mod;
  mod.set_id(family_name);
  mod.set_drop(true);

  StatusOr<google::bigtable::admin::v2::Table> schema =
      admin.ModifyColumnFamilies(table_name, {std::move(mod)});

  if (!schema) throw std::move(schema).status();
  std::cout << "Schema modified to: " << schema->DebugString() << "\n";
}
```

### C#

To learn how to install and use the client library for Bigtable, see [Bigtable client libraries](/bigtable/docs/reference/libraries).

To authenticate to Bigtable, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
// Delete a column family.
// Initialize request argument(s).
GcRule maxVersionsRule = new GcRule { MaxNumVersions = 1 };

TableName tableName = new TableName(projectId, instanceId, tableId);

// Modification to update column family
ModifyColumnFamiliesRequest.Types.Modification modification = new ModifyColumnFamiliesRequest.Types.Modification
{
    Drop = true,
    Id = "cf2"
};

ModifyColumnFamiliesRequest request = new ModifyColumnFamiliesRequest
{
    TableName = tableName,
    Modifications = { modification }
};
try
{
    // Make the request
    Table response = bigtableTableAdminClient.ModifyColumnFamilies(request);
    Console.WriteLine("Deleted column family");
}
catch (Exception ex)
{
    Console.WriteLine($"Error deleting column family {ex.Message}");
}
```

### Java

To learn how to install and use the client library for Bigtable, see [Bigtable client libraries](/bigtable/docs/reference/libraries).

To authenticate to Bigtable, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
// Deletes a column family.
try {
  String tableName =
      "projects/" + projectId + "/instances/" + instanceId + "/tables/" + tableId;
  ModifyColumnFamiliesRequest request =
      ModifyColumnFamiliesRequest.newBuilder()
          .setName(tableName)
          .addModifications(
              ModifyColumnFamiliesRequest.Modification.newBuilder()
                  .setId(COLUMN_FAMILY_2)
                  .setDrop(true))
          .build();
  adminClient.getBaseClient().modifyColumnFamilies(request);
  System.out.printf("Column family %s deleted successfully%n", COLUMN_FAMILY_2);
} catch (NotFoundException e) {
  System.err.println("Failed to delete a non-existent column family: " + e.getMessage());
}
```

### Node.js

To learn how to install and use the client library for Bigtable, see [Bigtable client libraries](/bigtable/docs/reference/libraries).

To authenticate to Bigtable, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
// Delete a column family
await adminClient.modifyColumnFamilies({
  name: table.name,
  modifications: [
    {
      id: 'cf2',
      drop: true,
    },
  ],
});
console.log('cf2 deleted successfully\n');
```

### PHP

To learn how to install and use the client library for Bigtable, see [Bigtable client libraries](/bigtable/docs/reference/libraries).

To authenticate to Bigtable, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
use Google\Cloud\Bigtable\Admin\V2\Client\BigtableTableAdminClient;
use Google\Cloud\Bigtable\Admin\V2\ModifyColumnFamiliesRequest;
use Google\Cloud\Bigtable\Admin\V2\ModifyColumnFamiliesRequest\Modification;

/**
 * Delete a column family in a table
 *
 * @param string $projectId The Google Cloud project ID
 * @param string $instanceId The ID of the Bigtable instance
 * @param string $tableId The ID of the table where the column family needs to be deleted
 * @param string $familyId The ID of the column family to be deleted
 */
function delete_family(
    string $projectId,
    string $instanceId,
    string $tableId,
    string $familyId = 'cf2'
): void {
    $tableAdminClient = new BigtableTableAdminClient();
    $tableName = $tableAdminClient->tableName($projectId, $instanceId, $tableId);

    print("Delete a column family $familyId..." . PHP_EOL);
    // Delete a column family
    $columnModification = new Modification();
    $columnModification->setId($familyId);
    $columnModification->setDrop(true);
    $modifyColumnFamiliesRequest = (new ModifyColumnFamiliesRequest())
        ->setName($tableName)
        ->setModifications([$columnModification]);
    $tableAdminClient->modifyColumnFamilies($modifyColumnFamiliesRequest);
    print("Column family $familyId deleted successfully." . PHP_EOL);
}
```

### Python

To learn how to install and use the client library for Bigtable, see [Bigtable client libraries](/bigtable/docs/reference/libraries).

To authenticate to Bigtable, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
print("Delete a column family cf2...")
# Delete a column family
column_family2.delete()
print("Column family cf2 deleted successfully.")
```

### Ruby

To learn how to install and use the client library for Bigtable, see [Bigtable client libraries](/bigtable/docs/reference/libraries).

To authenticate to Bigtable, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
column_families = table.column_families do |cfs|
  cfs.delete "cf2"
end
```

## What's next

To search and filter code samples for other Google Cloud products, see the [Google Cloud sample browser](/docs/samples?product=bigtable).

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.
