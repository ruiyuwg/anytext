You can create aliases for service versions in Function Compute. You can use the versioning feature to release different versions of services. This can help implement the continuous integration (CI) and continuous delivery (CD) during the software development process. This topic describes the concept of aliases and how to manage aliases in the Function Compute console.

## What is an alias?

Function Compute allows you to create aliases for service versions. An alias can be regarded as a pointer to a specific version of a service. You can use an alias to perform version publish, rollback, or canary release with ease. An alias relies on a service or a version. When you use an alias to access a service or functions, Function Compute parses the alias as a specific service version.

For example, an HTTP trigger does not have aliases. Each time a new version is rolled out, you must manually change the version that is associated with the trigger. This may deteriorate user experience on the client. If you use aliases to manage versions, you can implement smooth updates of versions. The following figure shows the version publish process. In this example, the alias PROD is configured to point to Version 1. When the client receives a request, the client invokes functions in a service of Version 1 whose alias is PROD.

Figure 1 - Publish Version 1

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9804795071/b2d8f010f5pj0.svg)

After Version 1 is published, you can continue developing new features based on the LATEST version. The client uses an alias to invoke functions in the service of the related version. To publish Version 2, you need to only change the pointing of alias PROD to Version 2. When the client invokes functions, Version 2 is parsed out. This way, the version is iterated and updated. In addition, you can change the version to which the alias points. For example, you can change the version to which the alias PROD points to a version earlier than Version 1. This way, you can publish a version without deteriorating user experience on the client.

Figure 2 - Publish Version 2

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9804795071/cc35d4d5295jb.svg)

## Prerequisites

-   [Create a service](/help/en/functioncompute/fc-2-0/user-guide/manage-services#section-765-0zj-cc4)
    
-   [Create a function](/help/en/functioncompute/fc-2-0/user-guide/manage-functions#section-b9y-zn1-5wr)
    
-   [Publish a version](/help/en/functioncompute/fc-2-0/user-guide/manage-versions#section-jdg-qkr-9xv)
    

## Create an alias

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, click the desired service.
    
3.  In the left-side navigation pane, click **Aliases**. On the **Aliases** page, click **Create Alias**.
    
4.  In the Create Alias for Service panel, configure parameters and click **OK**.
    
    The following table describes the parameters that are used to create an alias.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    Enter the name of the alias that you want to create.
    
    **Description**
    
    Enter the description of the alias.
    
    **Major Version**
    
    Specify the major version of the alias.
    
    **Enable Canary Release**
    
    Specify whether to enable the canary release version. To enable canary release, select Yes and configure the following parameters based on your business requirements.
    
    **Canary Release Version**
    
    Specify the canary release version of the alias.
    
    **Canary Release Type**
    
    Select a canary release type, which can be **Random** or **By Rules**.
    
    -   **Random**: Specify a weight to divert a proportion of traffic to the canary release version.
        
    -   **By Rules**: Specify the rules based on which the canary release is performed.
        
    
    **Note**
    
    **By Rules** takes effect only when you use an HTTP trigger to call an alias.
    
    **Canary Release Version Weight**
    
    Specify the weight of canary release version. This parameter is required if you set **Canary Release Type** to **Random**.
    
    The value of this parameter specifies the percentage of traffic diverted to the canary release version. For example, if you set the value to 5%, Function Compute diverts 5% of the traffic to the canary release version and 95% of the traffic to the major version.
    
    **Rule Mode**
    
    Specify the rule mode. This parameter is required if you set **Canary Release Type** to **By Rules**.
    
    This parameter specifies the mode to match the specified rules. Valid values:
    
    -   **Meet All**
        
    -   **Meet Any**
        
    
    **Rules**
    
    Specify the rules. This parameter is required if you set **Canary Release Type** to **By Rules**.
    
    Each rule contains the following fields:
    
    -   **Parameter Type**: Specify the type of the parameter. Valid values: Header, Cookie, and Query.
        
    -   **Parameter**: Specify the name of the parameter that is used to control the canary release.
        
    -   **Condition**: Specify the condition for comparison. When a request is submitted, Function Compute compares the actual value of the parameter in **Parameter** and the parameter value that you specify based on the specified condition. If the condition is matched, the request is routed to the canary release version. Valid values:
        
        -   `=, !=, >, <, >=, <=`: comparison operators. For example, if you set **Condition** to`=`, the request is routed to the canary release version only when the actual value of the request parameter is equal to the specified value.
            
        -   `Include`: the string matching condition. A request is routed to the canary release version only when the actual values of the request parameters are included in the value of **Value**.
            
        -   `Value Distribution`: Perform the canary release based on the distribution of specified parameter values. For example, if you set **Parameter Type** to Header, **Parameter** to `user-id`, and **Value** to `20`, 20% HTTP requests are routed to the canary release version based on the distribution of the values of the request header `user-id`.
            
    -   **Value**: Specify the parameter value that is used to control the canary release.
        
    
    You can click **\+ Add Rule** to add more rules.
    
    Advanced Settings
    
    **Canary Release Weight of Provisioned Instances**
    
    Specify the proportion to control the canary release weight of instances in provisioned mode. If the number of provisioned instances is greater than 1, Function Compute generates instances based on the specified weight. If you do not specify this parameter, the default weight is 1%.
    
    **Important**
    
    The value of this parameter is valid only when the number of provisioned instances is greater than 1.
    
    On the **Aliases** page, the alias that you created appears. You can also modify or delete the aliases that are no longer required. You can click **Logstore** that corresponds to the desired alias in the **Actions** column to go to the [Simple Log Service console](https://sls.console.alibabacloud.com) to view logs.
    

**Note**

When you delete an alias, only the alias is deleted. The version to which the alias points and the triggers that points to the alias are retained.

## More information

You can also use Serverless Devs to configure aliases for a service version. For more information, see [Serverless Devs commands](/help/en/functioncompute/fc-2-0/developer-reference/serverless-devs-commands#task-2182726).
