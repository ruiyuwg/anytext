The FC component is a tool that is developed based on Serverless Devs. The FC component can be used to manage resources in Function Compute. For example, you can use the FC component to manage and create resources, such as services, functions, and triggers, and also to update, delete, and query the resources. The FC component allows developers to call the Function Compute API by running command lines.

## **Usage notes**

After you install Serverless Devs, you can use `cli` to wake up the FC component. For example, you can run the `s cli fc api --help` command in the command line interface (CLI) to obtain the list of API commands that are supported by the FC component. Alternatively, you can also run the `s cli fc api <apiName> --help` command to obtain the parameters and the calling method of a specific API command.

The FC component takes effect for API operations to provide the basic atomic capabilities. In this case, you can refer to the API operation document to learn more when you use the component. For more information, see [List of operations by function](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-overview).

## **API commands supported by the FC component**

**API command**

**Description**

CreateService

Creates a service.

DeleteService

Deletes a service.

UpdateService

Updates the configurations of a service.

GetService

Queries the configurations about a service.

ListServices

Queries services.

CreateFunction

Creates a function.

DeleteFunction

Deletes a function.

UpdateFunction

Modifies a function.

GetFunction

Queries the information about a function.

GetFunctionCode

Queries the code of a function.

ListFunctions

Queries a list of functions.

InvokeFunction

Invokes a function.

CreateTrigger

Creates a trigger.

DeleteTrigger

Deletes a trigger.

UpdateTrigger

Updates the configurations of a trigger.

GetTrigger

Queries the information about a trigger

ListTriggers

Queries a list of triggers.

PublishServiceVersion

Publishes a service version.

DeleteServiceVersion

Removes a service version.

ListServiceVersions

Queries all versions of a service.

CreateAlias

Creates an alias.

DeleteAlias

Deletes an alias.

UpdateAlias

Updates an alias.

GetAlias

Queries an alias.

ListAliases

Queries a list of aliases.

CreateCustomDomain

Creates a custom domain name.

DeleteCustomDomain

Deletes a custom domain name.

UpdateCustomDomain

Modifies a custom domain name.

GetCustomDomain

Obtains a custom domain name.

ListCustomDomains

Queries a list of custom domain names.

PutProvisionConfig

Configures the provisioned mode of function instances.

GetProvisionConfig

Queries the information about a provisioned instance.

ListProvisionConfigs

Queries the configurations of a provisioned instance.

TagResource

Adds a service tag.

UntagResource

Deletes a service tag.

GetResourceTags

Queries the information about a service tag.

PutFunctionAsyncInvokeConfig

Configures the asynchronous invocation settings of a function.

DeleteFunctionAsyncInvokeConfig

Creates or modifies asynchronous invocation configurations for a function in a service.

GetFunctionAsyncInvokeConfig

Queries the asynchronous invocation configurations of a specific function.

ListFunctionAsyncInvokeConfigs

Queries the asynchronous invocation configurations of a function.

PublishLayerVersion

Releases a layer version.

DeleteLayerVersion

Deletes a layer version.

GetLayerVersion

Queries the information about a specific layer version.

ListLayerVersions

Queries a list of layer versions.

ListLayers

Queries a list of layers.

ListEventSources

Queries a list of event sources for function invocations.

DeregisterEventSource

Deregisters an event source for a function invocation.

RegisterEventSource

Registers an event source for a function invocation.

ListVpcBindings

Queries a list of existing VPC connections.

CreateVpcBinding

Creates a VPC connection.

DeleteVpcBinding

Deletes an access control policy from a specified policy group for a VPC firewall.

ListStatefulAsyncInvocationFunctions

Queries all function resources that have enabled asynchronous tasks within the current account.

GetStatefulAsyncInvocation

Queries all asynchronous invocation records in an asynchronous task that meets specific conditions.

ListStatefulAsyncInvocations

Queries all asynchronous invocations in an asynchronous task that meets specific conditions.

StopStatefulAsyncInvocation

Stops an asynchronous task.
