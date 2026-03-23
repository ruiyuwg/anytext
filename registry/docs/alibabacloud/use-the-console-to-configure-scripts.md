In the CDN console, you can create scripts based on EdgeScript (ES) coding conventions and then publish the scripts to the production environment to configure custom CDN features. This topic describes how to configure scripts by using the console.

## Procedure

![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2910024761/p249648.png)

1.  Log on to the [Alibaba Cloud CDN console](https://cdn.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Manage** in the **Actions** column.
    
4.  Click **EdgeScript**.
    
5.  Create a script in the staging environment.
    
    1.  On the **Staging Environment** tab, click **Add Rule** to create a script.
        
        **Note**
        
        -   You can create only one script for each domain name. To create more scripts for a domain name, Contact your account manager or contact us by other means. For more information, see [Contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us#task-2155749).
            
        -   The staging environment supports only points of presence (POPs) in the Chinese mainland.
            
        
        ![Add Script](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7435277761/p543768.png)
        
        The following table describes the parameters.
        
        **Parameter**
        
        **Required**
        
        **Description**
        
        Script Name
        
        Yes
        
        The name of the script that you want to create. The name can contain letters, digits, and underscores (\_).
        
        Script Code
        
        Yes
        
        The content of the script.
        
        -   You can directly write a script or click **Use Code Template** to use a code template to write the script.
            
        -   Write a script based on your business requirements. For more information, see [EdgeScript common scenarios](/help/en/cdn/user-guide/edgescript-common-scenarios#concept-1322638).
            
        
        Priority
        
        Yes
        
        The priority of the script. Valid values are 0 to 999. A greater value indicates a lower priority. You can prioritize only scripts that are executed in the same position.
        
        Run Script At
        
        Yes
        
        The position at which you want to execute the script. For more information, see [Positions and priorities](/help/en/cdn/user-guide/how-edgescript-works#section-tc3-73d-woi).
        
        Enable
        
        Yes
        
        Specifies whether to enable the script.
        
        Break
        
        No
        
        Specifies whether to skip the subsequent scripts if the current script is executed. After you turn on the switch, subsequent scripts are skipped if the current script is executed.
        
        Extensions
        
        No
        
        The extensions that are supported by ES. Only `_es_dbg=signature` is supported. This field enables debugging.
        
    2.  Click **Publish to Staging Environment**.
        
6.  Test the script in the staging environment.
    
    Before you publish a script to the production environment, you must test the script in the staging environment. To obtain the IP address that is used to test the script in the staging environment, resolve the domain name staging.myalicdn.com. Then, map the IP address to the accelerated domain name on your client machine.
    
    Add the mapping between the test IP address and the accelerated domain name to the hosts file on your client machine. The path to the hosts file is:
    
    -   C:\\Windows\\System32\\drivers\\etc\\hosts if your client machine runs Windows.
        
    -   /etc/hosts if your client machine runs macOS.
        
    
7.  After you complete the test, click **Publish All Rules to Production Environment** to publish the script to the production environment.
    
    **Important**
    
    After you publish the script to the production environment, the script is automatically deleted from the staging environment.
    
    ![Publish scripts to the production environment](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7435277761/p543778.png)
    

## Roll back scripts

To clear the configurations in the staging environment and restore the staging environment to the initialized state, click **Roll Back Scripts**. In the message that appears, click **OK**.

![Roll back scripts](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7435277761/p543782.png)

## Modify or delete scripts

![Modify or delete scripts](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4057167561/p448878.png)

If you want to add, modify, or delete a script that is published to the production environment, we recommend that you copy the script from the production environment to the staging environment, modify and test the script in the staging environment, and then publish the modified script to the production environment. Perform the following steps:

1.  Click **Roll Back Scripts**. Make sure that the staging environment is initialized to prevent unexpected interference.
    
2.  Click **Copy Rules from Production Environment** to copy the script from the production environment to the staging environment. This prevents inconsistencies in the script caused by manual operations. ![Modify configuration parameters](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7435277761/p543784.png)
    
3.  Add, modify, or delete the script in the staging environment.
    
4.  Click **Publish to Staging Environment** to publish the modified script to the staging environment. Then, test the script in the staging environment. For information about how to test the script in the staging environment, see [Test scripts in the staging environment](#step-145-bwy-q7f).
    
5.  After you complete the test, click **Publish All Rules to Production Environment** to publish the script to the production environment and check whether the script can meet your business requirements.
    

You can also use the EdgeScript CLI to configure scripts. For more information, see [Use the EdgeScript CLI to manage scripts](/help/en/cdn/user-guide/use-the-edgescript-cli-to-configure-scripts#task-2058533).
