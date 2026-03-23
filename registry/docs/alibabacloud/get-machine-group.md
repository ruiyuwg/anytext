Queries the information of a specified machine group.

## Request syntax

```
aliyunlog log get_machine_group --project_name=<value> --group_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the get\_machine\_group command.

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

group\_name

The name of the machine group.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the account named test to query the information of a machine group named group\_name2.
    
    ```
    aliyunlog log get_machine_group --project_name="aliyun-test-project" --group_name="group_name" --client-name="test"
    ```
    
-   Sample responses
    
    ```
    {
      "createTime": 1622105480,
      "groupAttribute": {
        "externalName": "",
        "groupTopic": "",
        "osType": "",
        "policy": "",
        "region": ""
      },
      "groupName": "group_name",
      "groupType": "",
      "lastModifyTime": 1622105480,
      "machineIdentifyType": "userdefined",
      "machineList": [
        "machine1",
        "machine2"
      ]
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-getmachinegroup#api-detail-45).

## API reference

[GetMachineGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-getmachinegroup)
