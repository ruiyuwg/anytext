Serverless Devs is an open source platform for serverless application developers. Serverless Devs frees you from underlying resource management and allows you to use serverless services and frameworks in a pluggable manner and develop components and plug-ins. This helps improve O&M efficiency. Serverless Devs also allows you to efficiently develop, create, test, and deploy projects with ease. You can use Serverless Devs to manage the full lifecycles of projects.

**Note**

Funcraft is no longer maintained in Function Compute. If you are using Funcraft to manage resources, we recommend that you migrate resources to Serverless Devs for better user experience.

For more information about how to migrate Function Compute-related resources from Funcraft to Serverless Devs, see [Migrate resources from Funcraft to Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/migrate-resources-from-funcraft-to-serverless-devs#concept-2100642).

We apologize for any inconvenience caused.

## Supported runtime environments

Runtime environments supported by Serverless Devs:

-   Node.js 8, Node.js 10, Node.js 12, and Node.js 14
    
-   Python 2.7, Python 3, and Python 3.9
    
-   Java 8 and Java 11
    
-   PHP 7.2
    
-   .NET Core 2.1
    
-   Custom Runtime
    
-   Custom Container
    

## Benefits

Serverless Devs provides higher flexibility and openness than other developer tools and delivers the following benefits:

-   Full lifecycle management
    
    Serverless Devs allows you to manage the full lifecycles of projects. You can use Serverless Devs to create, develop, debug, and deploy projects.
    
-   Secure release
    
    Serverless Devs automatically detects and securely updates the changes in functions when you use the console or SDKs to modify the functions.
    
-   Quick integration
    
    Serverless Devs can integrate with common continuous integration or continuous delivery (CI/CD) platforms and tools.
    
-   Observability
    
    Serverless Devs provides excellent observability. You can run metric query and log query commands on your client to observe data metrics and execution logs of your business.
    
-   Multi-mode debugging
    
    Serverless Devs allows multi-mode debugging that can meet the debugging requirements during the development and O&M of applications. For example, you can debug an application that runs on your on-premises machine or on the cloud.
    

Serverless Devs is a flexible and open platform that plays an important role in scenarios such as automatic deployment and O&M. If you integrate Serverless Devs into the full lifecycles of your projects, the O&M efficiency of the projects can be increased by 90%. For more information, see [Serverless Devs](https://www.serverless-devs.com/).

## Components

Alibaba Cloud Function Compute provides various components that are supported by Serverless Devs. The following section describes the FC and FC-API components in Function Compute.

### FC

The FC component supports the full lifecycles of Alibaba Cloud serverless applications. This component is similar to Funcraft and works as an advanced edition of Funcraft. The FC component supports rapid development, construction, testing, and deployment of applications to Function Compute by using s.yaml.

-   Usage modes of the FC component:
    
    -   YAML mode
        
        You can use the s.yml file based on the YAML syntax of Function Compute components to define resources for your serverless applications. The resources that can be defined in the file include the services, functions, triggers, and custom domain names of Function Compute. For more information about the YAML syntax of Function Compute components, see [YAML syntax and permission management](/help/en/functioncompute/fc-2-0/developer-reference/serverless-devs-commands#section-pkh-tcl-y3z).
        
    -   Non-YAML mode
        
        The non-YAML mode of the FC component is the CLI mode. In this mode, you do not need to create and configure the s.yaml file on your on-premises machine to manage resources. For example, if you want to synchronize managed resources and you do not want to manually configure parameters after you deploy resources online, you need to only run the `s cli fc sync` command to synchronize resources such as function configurations and code from the cloud to your computer.
        
-   Benefits
    
    -   Simplicity: The FC component allows you to create and modify resources such as services in an efficient manner. In addition, all features are loaded on demand. This prevents interruptions when you use the FC component.
        
    -   Efficiency: The FC component provides capabilities in development and O&M. You can use the FC component to deploy and remove online resources, build resources, query data, install dependencies, and perform debugging on your on-premises computer. The FC component helps improve the efficiency in developing and testing applications.
        
    -   Diversity: The FC component allows you to deploy resources by using Pulumi or SDKs.
        

**Note**

The FC component is suitable for scenarios in which applications are deployed to Function Compute. For example, you can use the FC component to migrate a conventional framework to Function Compute or manage functions.

For more information about features and permissions of the FC component, see [Serverless Devs commands](/help/en/functioncompute/fc-2-0/developer-reference/serverless-devs-commands#task-2182726).

### FC-API

The FC-API component is developed based on Serverless Devs. You can use FC-API to perform Function Compute API-related operations. FC-API is similar to fcli and works as an advanced edition of fcli. You can use interactive commands to perform Function Compute API-related operations.

Benefits

-   The FC-API component allows you to perform Function Compute API-related operations and manage permissions by API operation with ease.
    
-   You can use FC-API without the need to use the s.yml file to define resources. You need to only run commands to manage resources. FC-API is suitable for automation processes, such as the scenarios in which CI/CD tools are used.
    
-   The FC-API component allows you to manage Function Compute resources. For example, you can use the FC-API component to create, delete, modify, and query services, functions, and triggers.
    

Scenarios

-   Automation processes
    
    The FC-API component allows you to develop applications by using commands. The s.yml file is not required. You can enable specific atomic features by passing parameters. This allows you to easily manage permissions and implement automation processes. You can run a single command to perform an operation. For example, you can modify function code, modify function configurations, modify a service, create a trigger, and change an alias.
    
-   Function management
    
    The FC-API component is a CLI tool that is developed based on the Function Compute API and provides built-in resource management capabilities. For example, you can use the FC-API component to modify, delete, and query services, functions, and triggers.
    

The FC-API component provides the following commands for you to use different features:

-   [Service-related commands](/help/en/functioncompute/fc-2-0/developer-reference/service-related-commands#concept-2099815)
    
-   [Function-related commands](/help/en/functioncompute/fc-2-0/developer-reference/function-related-commands#concept-2099980)
    
-   [Trigger-related commands](/help/en/functioncompute/fc-2-0/developer-reference/trigger-related-commands#concept-2100069)
    
-   [Version-related commands](/help/en/functioncompute/fc-2-0/developer-reference/version-related-commands#concept-2100075)
    
-   [Alias-related commands](/help/en/functioncompute/fc-2-0/developer-reference/alias-related-commands#concept-2100095)
    
-   [Custom domain name-related commands](/help/en/functioncompute/fc-2-0/developer-reference/custom-domain-name-related-commands#concept-2100164)
    
-   [Provisioned configuration-related commands](/help/en/functioncompute/fc-2-0/developer-reference/provisioned-configuration-related-commands#concept-2100188)
    
-   [Asynchronous invocation-related commands](/help/en/functioncompute/fc-2-0/developer-reference/asynchronous-invocation-configuration-related-commands#concept-2100215)
    

For information about the permissions that may be involved when you use the FC-API component, see [API commands of the FC component](/help/en/functioncompute/fc-2-0/developer-reference/custom-policies-for-the-fc-api-component#concept-2102896).

## References

-   [Install Serverless Devs and Docker](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker#task-2093092)
    
-   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs#task-2093369)
