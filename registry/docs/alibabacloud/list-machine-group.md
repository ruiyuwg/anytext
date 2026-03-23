Queries all machine groups.

## Request syntax

```
aliyunlog log list_machine_group --project_name=<value> [--offset=<value>] [--size=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the list\_machine\_group command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--project\_name

String

Yes

aliyun-test-project

The name of the project.

\--offset

Integer

No

0

The start position of entries to return. Default value: 0.

\--size

Integer

No

3

The maximum number of entries to return on each page. Maximum value: 500.

For information about the global parameters of the Simple Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Query the first three machine groups of the account named test.
    
    ```
    aliyunlog log list_machine_group --project_name="aliyun-test-project" --offset=0 --size=3 --client-name="test"
    ```
    
-   Sample responses
    
    ```
    {
      "count": 3,
      "machinegroups": [
        "2021042-doctestecs",
        "apache-log",
        "doctest"
      ],
      "total": 10
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-listmachinegroup#api-detail-45).

## API reference

[ListMachineGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-listmachinegroup)
