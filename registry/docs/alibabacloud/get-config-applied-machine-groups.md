Obtains the list of machine groups to which a specified Logtail configuration is applied.

## Request syntax

```
aliyunlog log get_config_applied_machine_groups --project_name=<value> --config_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the get\_config\_applied\_machine\_groups command.

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

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Obtain the list of machine group to which a specified Logtail configuration is applied. Run the following command:
    
    ```
    aliyunlog log get_config_applied_machine_groups --project_name="aliyun-test-project" --config_name="config_name2"
    ```
    
-   Sample responses
    
    ```
    {
      "count": 1,
      "machinegroups": [
        "group_name2"
      ]
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-getappliedmachinegroups#api-detail-45).

## API reference

[GetAppliedMachineGroups](/help/en/sls/developer-reference/api-sls-2020-12-30-getappliedmachinegroups)
