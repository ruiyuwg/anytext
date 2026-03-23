Parameter

Type

Description

Example

object

The information about the restoration of the Tablestore instance.

OverwriteExisting

boolean

Specifies whether to overwrite existing tables.

true

RestoreIndex

boolean

Specifies whether to restore indexes.

true

IndexNameSuffix

string

The name prefixes of the indexes that you want to restore.

2022xxxx143933

RestoreSearchIndex

boolean

Specifies whether to restore search indexes.

true

SearchIndexNameSuffix

string

The name prefixes of the search indexes that you want to restore.

2022xxxx143933

ReGenerateAutoIncrementPK

boolean

Specifies whether to regenerate auto-increment primary keys.

true

BatchChannelCount

integer

The number of concurrent processes for each restore job.

0
