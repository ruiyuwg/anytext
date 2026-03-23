This topic describes how to configure custom layers for a function.

## Use the Function Compute console

### Before you start

-   [Create a function](/help/en/functioncompute/fc-2-0/user-guide/manage-functions#section-b9y-zn1-5wr)
-   [Build a layer](/help/en/functioncompute/fc-2-0/user-guide/create-a-custom-layer#task-2130618 "Layers allow you to publish and deploy custom resources such as common dependencies, runtime environments, and function extensions. You can extract the public libraries on which functions depend into layers to reduce the sizes of code packages when you deploy and update the code. This topic describes the principles of layers, the descriptions of layers in different runtimes, and how to build the ZIP package of a layer.")

### Procedure

When you configure a layer for a function, one version of the layer is bound to the function based on your business requirements if the layer has multiple versions.

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click Services & Functions.
2.  In the top navigation bar, select a region. On the Services page, click the desired service.
3.  On the Functions page, find the desired function and click Configure in the Actions column.
4.  In the Layers section, click \+ Add Layer and select Add Custom Layer from the drop-down list. Select options from the Custom Layer and Layer Version drop-down lists, and then click Save.

**Note**

-   A function can be configured with a maximum of five layers, including custom layers and official public layers.
-   When multiple layers are configured for a function, the content of these layers is merged and stored in the /opt directory in reverse order. If layers contain files with the same name, the files in the first configured layer overwrites the files with the same names in the later configured layer.

## Use Serverless Devs

### Prerequisites

-   [Install Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker#task-2093092 "This topic describes how to install Serverless Devs in macOS, Linux, and Windows.")
-   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs#task-2093369 "You must configure Serverless Devs before you use it. This topic describes how to run s config commands to add, query, and remove keys used by Serverless Devs. In the following examples, Alibaba Cloud AccessKey pairs are used.")
-   [Build a layer](/help/en/functioncompute/fc-2-0/user-guide/create-a-custom-layer#task-2130618 "Layers allow you to publish and deploy custom resources such as common dependencies, runtime environments, and function extensions. You can extract the public libraries on which functions depend into layers to reduce the sizes of code packages when you deploy and update the code. This topic describes the principles of layers, the descriptions of layers in different runtimes, and how to build the ZIP package of a layer.")

### Procedure

1.  Run the following command to query the custom layers in the specified region:
    
    ```
    s cli fc layer list --custom --region cn-hangzhou
    ```
    
    After the execution, the custom layer list is returned. Obtain and record the value of `arn` of the desired layer.
    
    **Note** In the returned custom layer information, the value of the arn field is about to be deprecated. We recommend that you use the value of the arnV2 field as the ARN of the custom layer.
    
    ```
    -
      layerName:         java11_fc_auto_created
      arn:               ec284ee1c033fa7fc68ffcd44c******#java11_fc_auto_created#1
      arnV2:             acs:fc:cn-hangzhou:164901546557****:layers/java11_fc_auto_created/versions/1
      version:           1
      acl:               0
      description:
      compatibleRuntime:
        - custom
    ```
    
    The following items describe the code snippets in the sample code:
    
    -   layerName: the name of the layer.
    -   version: the version of the layer.
    -   arn: the original ARN of the layer. The original ARN can be used only in custom layers.
    -   arnV2: the new ARN of the layer. The new ARN can be used in custom layers and official public layers.
    -   acl: the permissions of the layer. The digit 0 specifies that the layer is private and the digit 1 specifies that the layer is public. By default, the official public layers are public. The custom layers can be set to private or public.
    -   description: the description of the layer.
    -   compatibleRuntime: specifies the list of compatible runtime environments.
    
2.  Create the s.yaml file in any directory and enter the obtained layer `arn`.
    
    Example:
    
    ```
    edition: 1.0.0          # The version of the YAML specification. The version complies with the semantic versioning specification.
    name: fcDeployApp       #  The name of the project.
    access: "default"  #  The alias of the key.
    
    services:
      fc-deploy-test: # The name of the service.
        component: fc  # The name of the component.
        props: #  The attribute value of the component.
          region: cn-hangzhou
          service:
            name: fctest
            description: 'test'
            internetAccess: true
          function:
            name: emoji # The name of the function.
            description: this is a emoji
            runtime: java11
            codeUri: ./
            handler: index.handler
            memorySize: 128
            timeout: 6
            layers:    # The layers bound to the function. The values are the ARNs of the layers.
              - acs:fc:cn-hangzhou:164901546557****:layers/java11_fc_auto_created/versions/1
    ```
    
3.  Run the following command in the directory in which the s.yaml file is stored to deploy the function and configure the layers for the function:
    
    ```
    s deploy
    ```
    

## Additional information

You can also use API operations or SDKs to manage and configure layers. You can configure layers by calling the following API operations:

-   [CreateFunction](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-createfunction#main-107864)
-   [UpdateFunction](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-updatefunction#main-107864)

You can use [OpenAPI Explorer](https://next.api.aliyun.com/api/) to call API operations and use SDKs.
