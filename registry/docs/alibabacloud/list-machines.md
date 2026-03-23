Queries the servers in a specified machine group.

## Request syntax

```
aliyunlog log list_machines --project_name=<value> --group_name=<value> [--offset=<value>] [--size=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the list\_machines command.

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

\--group\_name

String

Yes

test-group

The name of the machine group.

\--offset

Integer

No

0

The start position of entries to return. Default value: 0.

\--size

Integer

No

5

The maximum number of entries to return on each page. Maximum value: 500.

For information about the global parameters of the Simple Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Query the servers in the test-group machine group that belongs to the default account.
    
    ```
    aliyunlog log list_machines --project_name="aliyun-test-project" --group_name="test-group" --offset=0 --size=5
    ```
    
-   Sample responses
    
    ```
    {
      "count": 1,
      "machines": [
        {
          "ip": "203.0.*.*",
          "lastHeartbeatTime": 1622106889,
          "machine-uniqueid": "26964724-6767-443c-a5fc-5d7b8e4fd06c",
          "userdefined-id": ""
        }
      ],
      "total": 1
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-listmachines#api-detail-45).

## API reference

[ListMachines](/help/en/sls/developer-reference/api-sls-2020-12-30-listmachines)
