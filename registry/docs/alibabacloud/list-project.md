Queries all projects.

## Request syntax

```
aliyunlog log list_project [--offset=<value>] [--size=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The list\_project command does not require specific parameters. For information about the global parameters of the Simple Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Query all the projects in the region to which the default account belongs.
    
    ```
    aliyunlog log list_project
    ```
    
-   Sample responses
    
    ```
    {
      "count": 2,
      "projects": [
        {
          "createTime": "1614075057",
          "description": "",
          "lastModifyTime": "1614075057",
          "owner": "",
          "projectName": "datalab-174649******745-cn-hangzhou",
          "region": "cn-hangzhou",
          "status": "Disable"
        },
        {
          "createTime": "1621930740",
          "description": "create project from cli",
          "lastModifyTime": "1621930740",
          "owner": "",
          "projectName": "project-ba",
          "region": "cn-hangzhou",
          "status": "Disable"
        }
      ],
      "total": 2
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-listproject#api-detail-45).

## API reference

[ListProject](/help/en/sls/developer-reference/api-sls-2020-12-30-listproject)
