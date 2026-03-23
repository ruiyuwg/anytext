Replicates resources from a source project to a destination project.

You can run the copy\_project command to replicate the following Log Service resources from a project to another project:

-   Logstores
    
-   Indexes
    
-   Logtail configurations
    
-   Machine groups
    
-   Mappings between machine groups and Logtail configurations
    

For more information, see [Examples](#section-5sq-ihq-0q9).

## Request syntax

```
aliyunlog log copy_project --from_project=<value> --to_project=<value> [--to_client=<value>] [--copy_machine_group=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the copy\_project command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--from\_project

String

Yes

project-a

The name of the source project.

\--to\_project

String

Yes

project-b

The name of the destination project.

\--to\_client

String

No

test

The account to which the destination project belongs. For information about how to configure an account, see [Configure Simple Log Service CLI](/help/en/sls/developer-reference/configure-log-service-cli#task-2085812).

\--copy\_machine\_group

Boolean

No

false

Specifies whether to replicate the resources that are related to machine groups. Valid values:

-   true: The resources that are related to machine groups in the source project are replicated to the destination project.
    
-   false: The resources that are related to machine groups in the source project are not replicated to the destination project.
    

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    -   Use the default account to replicate resources from project-a to project-b. The two projects reside in the same region.
        
        ```
        aliyunlog log copy_project --from_project="project-a" --to_project="project-b"
        ```
        
    -   Replicate resources from project-a to project-b. project-a belongs to the default account and project-b belongs to an account named test. project-a resides in the China (Chengdu) region, and project-b resides in the China (Hangzhou) region.
        
        1.  Configure two accounts for the China (Hangzhou) region and the China (Chengdu) region. For more information, see [Request syntax](/help/en/sls/developer-reference/request-syntax#section-dgz-642-ewv).
            
            -   Configure the account for the China (Hangzhou) region.
                
                ```
                aliyunlog configure yourAccessKeyID yourAccessKeySecret cn-hangzhou.log.aliyuncs.com test
                ```
                
            -   Configure the default account for the China (Chengdu) region.
                
                ```
                aliyunlog configure yourAccessKeyID yourAccessKeySecret cn-chengdu.log.aliyuncs.com
                ```
                
        2.  Replicate resources from project-a to project-b.
            
            ```
            aliyunlog log copy_project --from_project="project-a" --to_project="project-b" --to_client="test"  --client-name="main"
            ```
            
    -   Replicate resources from project-a to project-b. project-a belongs to the default account and project-b belongs to an account named test. The Logtail configurations and machine groups in project-a are also replicated to project-b. The two projects reside in different regions.
        
        ```
        aliyunlog log copy_project --from_project="project-a" --to_project="project-b" --copy_machine_group=true --to_client="test"  --client-name="main"
        ```
        
-   Sample responses
    
    After you run the command, no responses are returned.
