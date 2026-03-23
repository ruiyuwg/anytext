Creates a project.

## Usage notes

Before you use a Log Service CLI command, make sure that the following conditions are met:

-   Log Service is activated. For more information, see [How do I get started with Simple Log Service?](/help/en/sls/faq-3#section-1ne-yts-fl5)
    
-   Log Service CLI is installed and configured. For more information, see [Install Simple Log Service CLI](/help/en/sls/developer-reference/install-log-service-cli#task-2082420) and [Configure Simple Log Service CLI](/help/en/sls/developer-reference/configure-log-service-cli#task-2085812).
    

## Command syntax

```
aliyunlog log create_project --project_name=<value> --project_des=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Command parameters

The following table describes the required and specific parameters of the create\_project command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--project\_name

String

Yes

project-a

The name of the project. The name must meet the following requirements:

-   The name must be globally unique.
    
-   The name can contain only lowercase letters, digits, and hyphens (-).
    
-   The name must start and end with a lowercase letter or a digit.
    
-   The name must be 3 to 63 characters in length.
    

\--project\_des

String

Yes

project created from cli

The description of the project.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Use the default account to create a project named project-a.
    
    -   Sample command
        
        ```
        aliyunlog log create_project --project_name="project-a" --project_des="project created from cli"
        ```
        
    -   Sample response
        
        After you run the command, no responses are returned. You can run the `aliyunlog log get_project --project_name="project-a" --format-output=json` command to query the details of the project.
        
-   Use the AccessKey pair of a specified account to create a project named project-b.
    
    -   Sample command
        
        ```
        aliyunlog log create_project --project_name="project-b" --project_des="project created from cli" --access-id="your_accesskey_id" --access-key="your_accesskey_secret"  --region-endpoint=your-endpoint
        ```
        
    -   Sample response
        
        After you run the command, no responses are returned. You can run the aliyunlog log get\_project --project\_name="project-b" --access-id="your\_accesskey\_id" --access-key="your\_accesskey\_secret" --region-endpoint=your-endpoint --format-output=json command to query the details of the project.
        
-   Use the AccessKey pair of a specified account to create a project named project-c in the China (Shanghai) region.
    
    -   Sample command
        
        ```
        aliyunlog log create_project --project_name="project-c" --project_des="project created from cli" --access-id="your_accesskey_id" --access-key="your_accesskey_secret" --region-endpoint="cn-shanghai.log.aliyuncs.com"
        ```
        
    -   Sample response
        
        After you run the command, no responses are returned. You can run the `aliyunlog log get_project --project_name="project-c" --access-id="your_accesskey_id" --access-key="your_accesskey_secret" --region-endpoint="cn-shanghai.log.aliyuncs.com" --format-output=json` command to query the details of the project.
        

## References

-   If the response that is returned by Log Service contains error information after you call an API operation, the call fails. You can handle errors based on the error codes that are returned when API calls fail. For more information, see [Error codes](/help/en/sls/developer-reference/error-codes#reference-ypb-rtq-12b).
-   Alibaba Cloud OpenAPI Explorer provides debugging capabilities, SDKs, examples, and related documents. You can use OpenAPI Explorer to debug Log Service API operations without the need to manually encapsulate or sign requests. For more information, visit [OpenAPI Portal](https://next.api.alibabacloud.com/api/Sls/2020-12-30/CreateProject?lang=JAVA&sdkStyle=dara&params=%7B%7D).
-   For more information about the API operation, see [CreateProject](/help/en/sls/developer-reference/api-sls-2020-12-30-createproject).
