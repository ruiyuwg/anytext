Deletes a project.

## Request syntax

**Warning**

After you delete a project, all log data that is stored in the project and the configurations of the project are deleted and cannot be restored. Proceed with caution.

```
aliyunlog log delete_project --project_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the delete\_project command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--project\_name

String

Yes

project-a

The name of the project.

For information about the global parameters of the Simple Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to delete a project named project-a.
    
    ```
    aliyunlog log delete_project --project_name="project-a"
    ```
    
-   Sample responses
    
    After you run the command, no responses are returned. To check whether the project is deleted, use the following command example:
    
    ```
    aliyunlog log get_project --project_name="project-a" --format-output=json,no_escape
    ```
    
    If the query result returns the error `ProjectNotExist`, it means that the project is successfully deleted.
    
    ```
    {"errorCode": "ProjectNotExist", "errorMessage": "The Project does not exist : gs-cli-test", "requestId": "6679268F733026C5CC6ABA22"}
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-deleteproject#api-detail-45).

## API reference

[DeleteProject](/help/en/sls/developer-reference/api-sls-2020-12-30-deleteproject)
