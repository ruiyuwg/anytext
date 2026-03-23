Queries a specified project.

## Request syntax

```
aliyunlog log get_project --project_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameter of the get\_project command.

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

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to query a project named project-a.
    
    ```
    aliyunlog log get_project --project_name="project-a"
    ```
    
-   Sample responses
    
    ```
    {
      "createTime": "2024-06-18 13:20:22",
      "dataRedundancyType": "LRS",
      "description": "",
      "lastModifyTime": "2024-06-18 13:20:22",
      "location": "cn-chengdu",
      "owner": "************",
      "projectName": "project-a",
      "quota": {
        "ETL": 100,
        "alert": 100,
        "chart": 200,
        "config": 200,
        "dashboard": 100,
        "export": 100,
        "ingestion": 100,
        "logstore": 200,
        "machineGroup": 200,
        "readQpsPerMin": 600000,
        "report": 100,
        "savedsearch": 100,
        "scheduledSQL": 100,
        "shard": 400,
        "storeView": 10,
        "storeViewStore": 50,
        "writeQpsPerMin": 600000,
        "writeSizePerMin": 100000000000
      },
      "region": "cn-chengdu",
      "resourceGroupId": "rg-acfmykd63gtpfpa",
      "status": "Normal",
      "transferAcceleration": "Enabled"
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-getproject#api-detail-45).

## API reference

[GetProject](/help/en/sls/developer-reference/api-sls-2020-12-30-getproject)
