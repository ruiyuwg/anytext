You can use environment variables to flexibly adjust behavior of functions in Function Compute without the need to modify code. Environment variables are stored as key-value pairs as a part of function configurations. Different functions have different environment variables. This topic describes the basic information of environment variables and how to configure environment variables and use environment variables in code.

## Security

When you create or update environment variables, Function Compute encrypts the environment variables by using Advanced Encryption Standard 256 (AES 256) before they are stored. When function instances are initialized, their environment variables are decrypted and injected to the environments of the function instances.

## Limits

-   Rules for character sets
    
    -   A key must start with a letter and can only contain letters and digits.
        
-   Size
    
    The total size of all environment variables cannot exceed 4 KB.
    
-   System environment variables
    
    To prevent system confusion, when you configure environment variables, you cannot use the system environment variables that are reserved by Function Compute, including FC\_\*, accessKeyID, accessKeySecret, securityToken, and topic.
    
    You can use the following system environment variables:
    
    -   FC\_FUNC\_CODE\_PATH: the code deployment directory.
        
    -   ALIBABA\_CLOUD\_ACCESS\_KEY\_ID: the AccessKey ID of the role.
        
    -   ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET: the AccessKey secret of the role.
        
    -   ALIBABA\_CLOUD\_SECURITY\_TOKEN: the temporary token for the role.
        
    -   FC\_ACCOUNT\_ID: the user ID.
        
    -   FC\_FUNCTION\_HANDLER: the handler.
        
    -   FC\_FUNCTION\_MEMORY\_SIZE: the memory size of the function. Unit: MB.
        
    -   FC\_FUNCTION\_NAME: the name of the function.
        
    -   FC\_REGION: the region in which the function resides.
        
    -   FC\_SERVICE\_NAME: the name of the service to which the function belongs.
        
    -   FC\_CUSTOM\_LISTEN\_PORT: the custom listening port of the function.
        
    -   FC\_INSTANCE\_ID: the ID of the function instance.
        
    -   FC\_QUALIFIER: the alias of the service to which the function belongs. Default value: LATEST.
        
    
    **Important**
    
    The system environment variables, including accessKeyID, accessKeySecret, securityToken, ALIBABA\_CLOUD\_ACCESS\_KEY\_ID, ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET, and ALIBABA\_CLOUD\_SECURITY\_TOKEN are temporary sensitive information. Do not disclose these variables to the third party.
    

## Scenarios

-   Share code across platforms or services
    
    The configurations of the same code may vary between a test environment and production environment. You can use environment variables to select different Object Storage Service (OSS) buckets, databases, or tables. This way, you can deploy function code to different platforms without any modification.
    
-   Configure an AccessKey pair
    
    You can use environment variables to configure security-sensitive authentication information, such as your Alibaba Cloud AccessKey pair, and a username and password that are used to connect to a database.
    
-   Configure system variables
    
    You can configure the PATH and HOME variables in system directories.
    

## Configure environment variables by using the Function Compute console

### **Prerequisites**

A function is created. For more information, see the "Create a function" section of the [Manage functions](/help/en/functioncompute/fc-2-0/user-guide/manage-functions#section-b9y-zn1-5wr) topic.

### **Procedure**

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, click the desired service.
    
3.  On the **Functions** page, find the function that you modify and click **Configure** in the **Actions** column.
4.  In the **Environment Variables** section of the function details page, select a method to configure environment variables, and then click **Save**.
    
    -   Form Editor (default)
        
        1.  Click **\+ Add Variable**.
            
        2.  Configure the key-value pair of an environment variable.
            
            -   **Variable**: Enter a custom variable.
                
            -   **Value**: Enter a variable value.
                
            
            Sample code:
            
            ![sc_edit_environment_variables](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9060567361/p348504.png)
            
    -   JSON Editor
        
        1.  Click **JSON Editor**.
            
        2.  In the code editor, enter a key-value pair in the following JSON format:
            
            ```
            {
                "key": "value"
            }
            ```
            
            Sample code:
            
            ```
            {
                "BUCKET_NAME": "MY_BUCKET",
                "TABLE_NAME": "MY_TABLE"
            }
            ```
            
5.  Verify whether the environment variables are created.
    
    1.  On the function details page, click the **Code** tab.
        
    2.  In the code editor, write function code and click **Save and Deploy**. After the function is deployed, click **Test Function**.
        
        The following sample code provides an example on how to authenticate environment variables by using a Python event function:
        
        ```
        # -*- coding: utf-8 -*-
        import logging
        import os
        
        def handler(event, context):
            logger = logging.getLogger()
            value = os.environ.get('BUCKET_NAME')
            logger.info('BUCKET_NAME: {}'.format(value))
            value = os.environ.get('TABLE_NAME')
            logger.info('TABLE_NAME: {}'.format(value))
            return "done"
        ```
        
    3.  On the **Code** tab, you can view logs.
        
        As you can see from the printed log, the environment variable is created.
        

## Configure environment variables by using Serverless Devs

### **Prerequisites**

-   [Install Serverless Devs and Docker](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker#task-2093092)
    
-   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs#task-2093369)
    

### **Procedure**

1.  Create a code directory for testing. For example, the directory is named `test`.
    
2.  Go to the `test` directory and create a file named `index.py` based on the code in the "Configure environment variables by using the Function Compute console" section.
    
3.  Create an `s.yaml` file.
    
    File content:
    
    ```
    edition: 1.0.0
    name: transform_fun
    access: default
    vars:
      region: cn-shenzhen
    services:
      fc-Demo-envdemo:
        component: devsapp/fc
        props:
          region: ${vars.region}
          service:
            name: Demo    #  Declare a service named Demo.
            internetAccess: true
          function:
            name: envdemo   #  Declare a function named envdemo in the Demo service.
            handler: index.handler    #  Configure a handler for the function.
            runtime: python3          #  Specify the runtime for the function.
            environmentVariables:     #  Configure the following environment variables for the function:
              BUCKET_NAME: MY_BUCKET
              TABLE_NAME: MY_TABLE
            codeUri: ./               #  Deploy the function in the current directory ./. When Serverless Devs deploys the function, Serverless Devs packages and uploads the current directory.
    ```
    
4.  Run the `s deploy` command to deploy the project.
    
    After you run the s deploy command, you can log on to the [Function Compute console](https://fc.console.alibabacloud.com/) to view the service and function that you created, and the environment variables that you configured for the function.
    

## Configure environment variables by using SDKs

In this example, the SDK for Python is used. The environmentVariables parameter specifies environment variables. The values of this parameter are stored in the form of a dictionary. The following sample code shows how to create, update, and obtain environment variables:

-   Create environment variables
    
    ```
    # coding: utf-8
    import fc2
    import os
    
    client = fc2.Client(
        endpoint='your endpoint', # The endpoint. 
        # The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M. 
        # We recommend that you do not save the AccessKey ID and AccessKey secret in your project code. Otherwise, the AccessKey pair may be leaked and the security of all resources in your account may be compromised. 
        In this example, the AccessKey pair is stored in environment variables to implement identity authentication. 
        # Configure the ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variables in your local environment before you run the sample code. 
        # In runtimes of Function Compute, the ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variables are automatically configured after you configure the execution permissions. 
        accessKeyID=os.getenv('ALIBABA_CLOUD_ACCESS_KEY_ID'), # The AccessKey ID, which is created in the RAM console and used for identity authentication. 
        accessKeySecret=os.getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET') # The AccessKey secret, which is created in the RAM console and used for identity authentication. 
    
    client.create_service('test')
    
    client.create_function(
        'test', 'test_env', 'python3',  'main.handler',
        codeDir='/path/to/code/', environmentVariables={'testKey': 'testValue'})
    
    #test: the name of the service.
    #test_env: the name of the function.
    #python3: the runtime.
    #main.handler: the handler.
    #codeDir: the code directory.
    #environmentVariables: the environment variables that you want to configure.
    
    res = client.get_function('test', 'test_env')
    
    print(res.data)
    ```
    
-   Update environment variables
    
    ```
    client.update_function(
        'test', 'test_env', 'python3',  'main.handler',
        codeDir='/path/to/code/', environmentVariables={'newKey': 'newValue'})
    res = client.get_function('test', 'test_env')
    print(res.data)           
    ```
    
-   Obtain environment variables
    
    ```
    resp = client.get_function('test', 'test_env')
    env = func['environmentVariables']
    ```
    

## Use environment variables in code

Assume that you configured `{"key":"val"}` as an environment variable. The following code shows how each runtime reads and prints the value of the variable.

Node.js

```
var value = process.env.key
console.log(value)
```

Python

```
import os
value = os.environ.get('key')
print(value)
```

Java

```
System.out.println("value: "+ System.getenv("key"));
```

PHP

```
$value = getenv('key');
```

C

```
Console.WriteLine(Environment.GetEnvironmentVariable("key"));
```

## **Troubleshooting**

**Can I configure different environment variables for different versions of a function?**

Yes. After you configure environment variables for a function of the LATEST version and publish the version, you can modify environment variables in the LATEST version. This way, environment variables of a function between the LATEST version and published version are different.

**What do I do if I do not want to display the value of an environment variable in plaintext? How do I encrypt sensitive data when I configure environment variables of a function?**

You can encrypt and save environment variables in Key Management Service. Make sure that you encrypt environment variables before you store them in KMS. Before you execute a function, you can call the KMS API to decrypt environment variables and configure the variables in the runtime of the function. For more information, see [What is KMS?](/help/en/kms/key-management-service/support/what-is-key-management-service)
