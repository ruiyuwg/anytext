# Backup

*This is a paid feature, available on the Enterprise plan.*

This is reference documentation for the CLI's backup command. If you're new to the backup feature, check out our getting started guide.
[Get started](https://www.sanity.io/docs/content-lake/backups)

**CLI output**

```sh
npx sanity backup --help
```

## Commands

### `disable`

**CLI output**

```sh
USAGE
  $ sanity backup disable [DATASET] [-p <id>]

ARGUMENTS
  [DATASET]  Dataset name to disable backup for

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to disable backups for (overrides CLI configuration)

DESCRIPTION
  Disable backup for a dataset.

EXAMPLES
  Interactively disable backup for a dataset

    $ sanity backup disable

  Disable backup for the production dataset

    $ sanity backup disable production
```

### `download`

**CLI output**

```sh
USAGE
  $ sanity backup download [DATASET] [-p <id>] [--backup-id <value>] [--concurrency <value>] [--out <value>] [--overwrite]

ARGUMENTS
  [DATASET]  Dataset name to download backup from

FLAGS
      --backup-id=<value>    The backup ID to download
      --concurrency=<value>  Concurrent number of backup item downloads (max: 24)
      --out=<value>          The file or directory path the backup should download to
      --overwrite            Allows overwriting of existing backup file

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to download backup from (overrides CLI configuration)

DESCRIPTION
  Download a dataset backup to a local file.

EXAMPLES
  Interactively download a backup

    $ sanity backup download

  Download a specific backup for the production dataset

    $ sanity backup download production --backup-id 2024-01-01-backup-1

  Download backup to a specific file

    $ sanity backup download production --backup-id 2024-01-01-backup-2 --out /path/to/file

  Download backup and overwrite existing file

    $ sanity backup download production --backup-id 2024-01-01-backup-3 --out /path/to/file --overwrite
```

### `enable`

**CLI output**

```sh
USAGE
  $ sanity backup enable [DATASET] [-p <id>]

ARGUMENTS
  [DATASET]  Dataset name to enable backup for

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to enable backups for (overrides CLI configuration)

DESCRIPTION
  Enable backup for a dataset.

EXAMPLES
  Interactively enable backup for a dataset

    $ sanity backup enable

  Enable backup for the production dataset

    $ sanity backup enable production
```

### `list`

**CLI output**

```sh
USAGE
  $ sanity backup list [DATASET] [-l <value>] [-p <id>] [--after <value>] [--before <value>]

ARGUMENTS
  [DATASET]  Dataset name to list backups for

FLAGS
  -l, --limit=<value>   Maximum number of backups returned
      --after=<value>   Only return backups after this date (inclusive, YYYY-MM-DD format)
      --before=<value>  Only return backups before this date (exclusive, YYYY-MM-DD format)

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to list backups for (overrides CLI configuration)

DESCRIPTION
  List available backups for a dataset.

EXAMPLES
  List backups for a dataset interactively

    $ sanity backup list

  List backups for the production dataset

    $ sanity backup list production

  List up to 50 backups for the production dataset

    $ sanity backup list production --limit 50

  List up to 10 backups created after 2024-01-31

    $ sanity backup list production --after 2024-01-31 --limit 10
```
