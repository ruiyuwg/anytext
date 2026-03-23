Applies a Logtail configuration to a machine group.

## Request syntax

```
aliyunlog log apply_config_to_machine_group --project_name=<value> --config_name=<value> --group_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the apply\_config\_to\_machine\_group command.

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

1.  Query the existing Logtail configurations. Run the following command:
    
    ```
    aliyunlog log list_logtail_config --project_name="aliyun-test-project"
    ```
    
    The following output is returned:
    
    ```
    {
      "configs": [
        "windows_event_log",
        "test-zhengze4",
        "config_name2",
        "metric_system"
      ],
      "count": 4,
      "total": 4
    }
    ```
    
2.  Query the existing machine groups. Run the following command:
    
    ```
    aliyunlog log list_machine_group --project_name="aliyun-test-project"
    ```
    
    The following output is returned:
    
    ```
    {
      "count": 3,
      "machinegroups": [
        "group_name",
        "group_name2",
        "host_metric"
      ],
      "total": 3
    }
    ```
    
3.  Use the default account to apply a Logtail configuration to a machine group. Run the following command:
    
    ```
    aliyunlog log apply_config_to_machine_group --project_name="aliyun-test-project" --config_name="config_name2" --group_name="group_name2"
    ```
    
4.  Query a machine group named group\_name2 to which a Logtail configuration is applied. Run the following command:
    
    ```
    aliyunlog log get_machine_group_applied_configs --project_name="aliyun-test-project" --group_name="group_name2"
    ```
    
    The following output is returned:
    
    ```
    {
      "configs": [
        "config_name2"
      ],
      "count": 1
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-applyconfigtomachinegroup#api-detail-45).

## API reference

[ApplyConfigToMachineGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-applyconfigtomachinegroup)
