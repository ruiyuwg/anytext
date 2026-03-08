# Restore a deleted dataset from a backup

*This is a paid feature, available on the Enterprise plan.*

The [Backups](https://www.sanity.io/docs/content-lake/backups) feature allows you to automatically create daily and weekly backups. This article guides you through the process required to restore a deleted dataset from a backup.

Prerequisites:

- Project admin access.
- Sanity CLI v3+ (use `npx` so you don't need a global install).
- The dataset name that was deleted (e.g., `production`).
- A backup ID or backup file (.tar.gz) for that dataset from before deletion. See the next section for details on creating and retrieving a backup.

> \[!WARNING]
> If you have accidentally deleted a dataset without backups enabled or dowloaded, contact Support as soon as possible.

## Before you delete a dataset

### Ensure you have enabled backups for your dataset

Always enable backups for critical datasets before any deletion. The recovery process requires a Backup tarball of your deleted dataset. If you don't have Backups enabled, or cannot obtain the relevant backup, stop here and contact Support.

**CLI**

```sh
npx sanity backup enable <DATASET_NAME>
```

> \[!NOTE]
> It may take up to 24 hours before the first backup is created. New datasets or datasets deleted less than 24 hours since enabling backups may not have backups available.

### Pause writes and automations

Ask editors to pause changes. Temporarily disable webhooks, functions, and automations to avoid a downstream rebuild storm. Re-enable them after you validate the restore.

### Download and secure your backup

Before deleting a dataset, download the backup file locally:

**CLI**

```sh
npx sanity backup download <DATASET_NAME> --backup-id <BACKUP_ID> --out ./backup-<DATASET_NAME>.tar.gz
```

> \[!TIP]
> Dataset exports
> If you don't have backups enabled or need to immediately create a backup, [CLI's dataset export command](https://www.sanity.io/docs/cli-reference/dataset) can initiate and download an export that's compatible with the import steps below. This is only possible if you have not yet deleted the dataset.

## Restore from the backup

### Create a new dataset with the same name

Make sure that your previous dataset has successfully deleted, then create the new dataset with the same name.

- It is important that the same name is used to ensure asset names and document IDs are correctly referenced.
- Cross‑dataset references store the target dataset name in the document. If the target dataset’s name changed, those references still point to the old name.
- Circular references *inside the dataset* are handled automatically during import—you don’t need to order documents manually.

**CLI**

```sh
npx sanity@latest dataset create <DATASET_NAME> --visibility private
# or for public datasets:
npx sanity@latest dataset create <DATASET_NAME> --visibility public
```

If you have multiple datasets to restore, create each with the names of the previously deleted datasets.

### Locate and download the backup for the deleted dataset

If the dataset still existed when you enabled Backups, you should have one or more backups from before deletion.

> \[!TIP]
> What's inside the backup tarball?
> A complete snapshot of your dataset documents and assets (images/files).

#### List backups with the CLI

List backups for the original dataset name (the one that was deleted):

**CLI**

```sh
npx sanity@latest backup list <DATASET_NAME>
```

Backups for deleted datasets won't appear in the CLI popup, but you can still access them by specifying the dataset name directly.

The output of available backups should look similar to this example:

**Output**

```text
┌──────────┬─────────────────────┬─────────────────────────────────────────────────┐
│ RESOURCE │ CREATED AT          │ BACKUP ID                                       │
├──────────┼─────────────────────┼─────────────────────────────────────────────────┤
│ Dataset  │ 2025-09-24 13:08:44 │ 2025-09-24-ca5a2833-dc31-457e-9a74-b0ebe99a6753 │
│ Dataset  │ 2025-09-23 02:40:30 │ 2025-09-23-c66adb69-cbed-4e4f-88a2-f97b5feeb464 │
└──────────┴─────────────────────┴─────────────────────────────────────────────────┘
```

Select the correct `BACKUP ID` by verifying the timestamp, then substitute it and the dataset name in the command below:

**CLI**

```sh
npx sanity@latest backup download <DATASET_NAME> \
  --backup-id <BACKUP_ID> \
  --out ./backup-<DATASET_NAME>.tar.gz
```

> \[!TIP]
> Important timing consideration
> All changes made after the backup timestamp and before dataset deletion cannot be restored, including uploaded assets.

#### If you cannot list backups for the deleted dataset

Reach out to Support as soon as possible. Provide your project ID, the deleted dataset name, and the approximate deletion time.

### Import the backup into your new dataset

Import the tarball (.tar.gz file) into the new dataset you created earlier:

**CLI**

```sh
npx sanity@latest dataset import ./<DELETED_DATASET_NAME>-backup.tar.gz <DATASET_NAME> --replace --allow-assets-in-different-dataset
```

A few things to note about this command:

- `-replace` ensures the backup becomes the new source of truth. This shouldn't be necessary because you're importing into a brand new dataset, but it's good practice.
- `-allow-assets-in-different-dataset` is needed because the tarball’s assets originated in the old dataset name.
- Document references *within* the dataset are handled automatically during import.
- If restoring multiple datasets that reference each other, repeat this step for each dataset.

#### Common import failures and how to handle them

The following are some of the most common causes of import failures and how to resolve them.

**Cross-dataset references (CDRs) to another deleted dataset**

If your CDRs aren't circular—for example: dataset A references dataset B, but not the other way around—you can resolve this by importing the other dataset first.

If this isn't an option, you can disable CDR validation with the `--skip-cross-dataset-references` flag.

**CLI**

```sh
npx sanity@latest dataset import ./backup-<DELETED_DATASET_NAME>-backup.tar.gz <DATASET_NAME> \
  --replace \
  --allow-assets-in-different-dataset \
  --skip-cross-dataset-references
```

**Documents referencing non-existent assets**

Because an asset can be deleted without deleting the asset document reference, you may run into this error. Skip asset validation with the `--allow-failing-assets` flag.

**CLI**

```sh
npx sanity@latest dataset import ./backup-<DELETED_DATASET_NAME>-backup.tar.gz <DATASET_NAME> \
  --replace \
  --allow-assets-in-different-dataset \
  --allow-failing-assets
```

### Update any alias or dataset references in your apps

If you're using the same dataset name for the new dataset as instructed in this guide, you shouldn't need to update any of your applications. If you previously used an alias, you can confirm it is still active with `sanity dataset list`.

If you pointed an alias at a different dataset for this restore, you can link it again with the following command:

**CLI**

```sh
npx sanity@latest dataset alias link production <DATASET_NAME>
```

### Validate your data and enable automations

#### Confirm data exists as expected

Launch your Studio and spot check critical documents. Confirm the following:

- References resolve without "unavailable" warnings.
- Assets load in previews
- Compare totals for key document types between the restored dataset an the backup.

If assets don't load, contact Support promptly. (Assets are only retained for a limited time after deletion.)

The following are some optional CLI checks you can run. Update the queries with relevant types for your data.

**CLI**

```sh
# Find documents with references
npx sanity@latest documents query '*[count(* references(^._id)) > 0][0..20]{_id, _type}'

# Find broken references
npx sanity@latest documents query '*[defined(yourRefField._ref) && !defined(yourRefField->._id)][0..20]{_id, _type}'
```

#### Enable webhooks, functions, and automations

Re-enable any webhooks and automations you disabled in the earlier step.

### Enable backups for this "new" dataset

As this is a new dataset, albeit with the same name, enable backups as described in the beginning of this guide.

**CLI**

```sh
npx sanity backup enable <DATASET_NAME>
```

## Troubleshooting

Common troubleshooting errors:

- **"Document exists" warnings while importing**: Use `--replace` (as shown) for a clean rollback from a complete backup.
- **Assets missing after import**: Always import from the backup tarball. Try using `--allow-failing-assets` flag if assets were deleted.
- **Can't list backups for a deleted dataset**: Contact Support with your project ID, deleted dataset name, and deletion time to retrieve the correct backup.
- **Cross-dataset reference errors**: Use `--skip-cross-dataset-references` flag during import if references point to other deleted datasets.

## Common commands

The following are commands commonly used when restoring from a backup.

```sh
# Enable backups (do this before any deletion)
npx sanity backup enable <DATASET_NAME>

# Create a new dataset
npx sanity@latest dataset create <DATASET_NAME> --visibility private/public

# List & download backups (if available via CLI)
npx sanity@latest backup list <DELETED_DATASET_NAME>
npx sanity@latest backup download <DELETED_DATASET_NAME> \
  --backup-id <BACKUP_ID> \
  --out ./backup-<DATASET_NAME>.tar.gz

# Import the backup tarball into the *new* dataset
npx sanity@latest dataset import ./backup-<DATASET_NAME>.tar.gz <DATASET_NAME> \
  --replace \
  --allow-assets-in-different-dataset

# Import with additional flags if needed
npx sanity@latest dataset import ./backup-<DATASET_NAME>.tar.gz <DATASET_NAME> \
  --replace \
  --allow-assets-in-different-dataset \
  --skip-cross-dataset-references \
  --allow-failing-assets

# Alias cutover (if you use an alias like "production")
npx sanity@latest dataset alias link production <DATASET_NAME>
```
