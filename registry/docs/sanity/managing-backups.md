# Managing backups

Sanity offers a backup feature that provides a robust solution for disaster recovery and content history auditing, ensuring your data's safety and integrity. With the ability to restore your production environment seamlessly and to inspect historical data states, this feature is a powerful tool for maintaining data continuity and compliance. Don't have a plan that supports backups? You can manually export your data with the [CLI's dataset command](https://www.sanity.io/docs/cli-reference/dataset).

*This is a paid feature, available on the Enterprise plan.*

## Core concepts

### Backup contents

A “backup” in the context of this article is an archived snapshot of the state of your dataset (documents and assets) at a specific time. You can use it to audit the history of your content or roll it back to a known safe state in case of data loss or unintended changes.

Each backup contains all documents and assets from your dataset in their state from when the backup job ran. This includes hidden documents used for settings and configuration by the studio and installed plugins. [Comments](https://www.sanity.io/docs/studio/comments) and [document history](https://www.sanity.io/docs/http-reference/history) (the timeline shown when you select "Review changes" in the studio) are not included in the backup.

When you download a backup, the resulting file contains an archive with all your documents exported into a single [NDJSON](https://github.com/ndjson/ndjson-spec) file alongside your files and images in separate folders, neatly collected into a single gzip-compressed archive file with a `.tar.gz` file type - colloquially known as a “tarball.”

```bash
production-backup-2024-02-23-a9bfa2d7-9ba1-42cc-beb2-f9f448bec656/
├── data.ndjson
├── files
│   └── file.txt
└── images
    └── image.png
```

### Backup frequency and retention time

Once you enable the backup service, as described in the next section of this article, Sanity will perform a backup of your dataset daily.

> \[!WARNING]
> Gotcha
> The backup service runs at set regular intervals, so your initial backup may take up to 24 hours to become available.

Your backups are managed by Sanity in an offsite third-party storage location for data redundancy and security. Daily backups are stored for 365 days. Weekly backups are stored for an additional 2 years on top of the 1 year of daily backups.

### Deleted datasets

If you delete a dataset then no new backups will be created. Any existing backups will continue to be accessible. If you later create a new dataset with the same name then:

1. You will need to actively enable backups for this new dataset to start the backup service up again.
2. Backups for the older, deleted, dataset will no longer be accessible directly through the CLI. Contact support if you require them.

## Enabling and disabling backups

Enabling and disabling the backup service is mainly done with the Sanity CLI.

### Prerequisites

- The relevant project is on a supported plan
- The backup feature is enabled for the project
- The Sanity CLI is up to date (v3.31.0 or later is required)
- The user has administrator permissions for the project

### Enable backups

To enable backups for a dataset, use the `sanity backup enable` CLI command in your project folder:

```sh
sanity backup enable [DATASET_NAME]
```

You should see a confirmation message in your CLI, and your first backup should be available within 24 hours.

### Disable backups

To disable backups for a dataset, use the `sanity backup disable` CLI command in your project folder:

```sh
sanity backup disable [DATASET_NAME]
```

No further backups will be scheduled. Your existing backups will continue to exist and be available for downloading.

## Common commands

### List available backups

To list all available backups for a dataset, use the following CLI command in your project folder:

```sh
sanity backup list [DATASET_NAME]
```

Running this command will list the available backups for the dataset in question.

```bash
┌──────────┬─────────────────────┬─────────────────────────────────────────────────┐
│ RESOURCE │ CREATED AT          │ BACKUP ID                                       │
├──────────┼─────────────────────┼─────────────────────────────────────────────────┤
│ Dataset  │ 2024-02-21 16:57:34 │ 2024-02-21-cf51334d-4caa-4487-a746-75a49b078e82 │
│ Dataset  │ 2024-02-22 02:40:30 │ 2024-02-22-c66adb69-cbed-4e4f-88a2-f97b5feeb464 │
│ Dataset  │ 2024-02-23 01:43:28 │ 2024-02-23-e1b1dcd3-fa9b-45a2-ab58-9f1c1eae45c7 │
└──────────┴─────────────────────┴─────────────────────────────────────────────────┘
```

By default, this command will list the 30 most recent backups. You can use the `limit` parameter to increase the listing threshold to a maximum of 100, or you can use the `after` and `before` parameters to target a specific time period from which to list backups.

```sh
sanity backup list production --after 2024-01-31 --before 2024-01-10 --limit 10
```

### Download backups

To download a specific backup for a dataset, use the following CLI command in your project folder:

```sh
sanity backup download [DATASETNAME] --backup-id [BACKUPID] --out [FILE_NAME]
```

`[BACKUP_ID]` needs to match the ID of an existing backup, and `[FILE_NAME]` should be a valid file name for the resulting downloaded file. A more realistic example is shown below.

```sh
sanity backup download production --backup-id 2024-02-23-a9bfa2d7-9ba1-42cc-beb2-f9f448bec656 --out backup_2024.tar.gz
```

If you don’t specify the file name in the `--out` flag, the backup file will follow the `[dataset name]-backup-[backup ID].tar.gz` convention.

To learn about all the options for this command, refer to the CLI reference article, or run `sanity backup download --help` in the CLI.

### Restore from a backup

You can use the `sanity dataset import` CLI command to restore from a downloaded backup.

```sh
sanity dataset import ~/Downloads/backup_2024.tar.gz production
```

> \[!WARNING]
> Gotcha
> If you are importing a backup into a different dataset than the one the backup originated from, you will have to use the `--allow-assets-in-different-dataset` option on import. Read about this and other parameters and options available for this command in the relevant [CLI reference article](https://www.sanity.io/docs/cli-reference/dataset), or by running `sanity dataset import --help` in the CLI.

Downloaded backups are structured to be ready for importing, both in their original compressed file state and in their decompressed file structure.

View our complete guide on [how to restore from a backup](https://www.sanity.io/docs/content-lake/restore-deleted-dataset).

### Conclusion

The backup feature from Sanity offers a straight-forward and easy to use solution for securing your content, providing data redundancy, means of compliance, and peace of mind. Contact your account manager to have backups enabled for your enterprise project, or visit our [pricing page](https://www.sanity.io/pricing), to learn more about Sanity's enterprise plan offerings.
