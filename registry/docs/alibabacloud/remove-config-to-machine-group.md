Removes a Logtail configuration from a machine group.

## Request syntax

```
aliyunlog log remove_config_to_machine_group --project_name=<value> --config_name=<value> --group_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the remove\_config\_to\_machine\_group command.

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

\--config\_name

String

Yes

config\_name2

The name of the Logtail configuration.

\--group\_name

String

Yes

group\_name2

The name of the machine group.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to remove a Logtail configuration from a machine group.
    
    ```
    aliyunlog log remove_config_to_machine_group --project_name="aliyun-test-project" --config_name="config_name2" --group_name="group_name2"
    ```
    
-   Sample responses
    
    After you run the command, no responses are returned.
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-removeconfigfrommachinegroup#api-detail-45).

## API reference

[RemoveConfigFromMachineGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-removeconfigfrommachinegroup)
