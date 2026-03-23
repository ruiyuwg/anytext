Deletes a specified machine group.

## Request syntax

```
aliyunlog log delete_machine_group --project_name=<value> --group_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the delete\_machine\_group command.

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

group\_name2

The name of the machine group.

For information about the global parameters of the Simple Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to delete a machine group named group\_name2.
    
    ```
    aliyunlog log delete_machine_group --project_name="aliyun-test-project" --group_name="group_name2"
    ```
    
-   Sample responses
    
    After you run the command, no responses are returned. Run the following command to query the deleted machine groups.
    
    ```
    aliyunlog log get_machine_group --project_name="aliyun-test-project" --group_name="group_name2"
    ```
    
    The following response is returned.
    
    ```
    {"errorCode": "MachineGroupNotExist", "errorMessage": "MachineGroup group_name not exist", "requestId": "667A54DA7406B53EEEFE9D1A"}
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-deletemachinegroup#api-detail-45).

## API reference

[DeleteMachineGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-deletemachinegroup)
