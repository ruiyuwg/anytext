Deletes the indexes of a Logstore.

## Syntax

```
aliyunlog log delete_index --project_name=<value> --logstore_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Parameters

The following parameters are specific to `delete_index`. For global parameters such as `--access-id` and `--region-endpoint`, see [Global parameters](/help/en/sls/developer-reference/global-parameters).

**Parameter**

**Type**

**Required**

**Example**

**Description**

`--project_name`

String

Yes

`aliyun-test-project`

The name of the project.

`--logstore_name`

String

Yes

`logstore-a`

The name of the Logstore.

## Examples

### Delete indexes from a Logstore

Delete the indexes of a Logstore named `logstore-a` in the `aliyun-test-project` project:

```
aliyunlog log delete_index --project_name="aliyun-test-project" --logstore_name="logstore-a"
```

No output is returned on success.

### Verify the deletion

To confirm the indexes were deleted, run `get_index_config` on the same Logstore:

```
aliyunlog log get_index_config --project_name="aliyun-test-project" --logstore_name="logstore-a"
```

Expected response:

```
{
  "errorCode": "IndexConfigNotExist",
  "errorMessage": "index config doesn't exist",
  "requestId": "667BA89CA3741E0D5******"
}
```

The `IndexConfigNotExist` error confirms that the indexes have been deleted.

## Error codes

For error codes returned by this command, see [DeleteIndex API error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-deleteindex).

## Related API

-   [DeleteIndex](/help/en/sls/developer-reference/api-sls-2020-12-30-deleteindex)
