In the DCDN console, you can create scripts based on EdgeScript (ES) coding conventions and then publish the scripts to the production environment to configure custom DCDN features. This topic describes how to configure scripts by using the console.

## Configuration process

![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2910024761/p249648.png)

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  Click **EdgeScript**.
    
5.  Create a script in the staging environment.
    
    1.  On the **Staging Environment** tab, click **Add Rule** and set the parameters.
        
        **Note**
        
        -   You can create only one script for each domain name. To create more scripts for a domain name, [or submit a ticket.](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex)
            
        -   The staging environment supports only points of presence (POPs) in the Chinese mainland.
            
        
        ![Create Script](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6737886761/p554865.png)
        
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
        
        Status
        
        Yes
        
        Specifies whether to enable the script.
        
        Break
        
        No
        
        Specifies whether to skip the subsequent scripts if the current script is executed. After you turn on the switch, subsequent scripts are skipped if the current script is executed.
        
        Extensions
        
        No
        
        The extensions that are supported by EdgeScript. Only `_es_dbg=signature` is supported. This field enables debugging.
        
    2.  Click **Publish to Staging Environment**.
        
6.  Test the script in the staging environment.
    
    Before you publish a script to the production environment, you must test the script in the staging environment. To obtain the IP address that is used to test the script in the staging environment, resolve the domain name staging.myalicdn.com. Then, map the IP address to the accelerated domain name on your client machine.
    
    Add the mapping between the test IP address and the accelerated domain name to the hosts file on your client machine. The path to the hosts file is:
    
    -   C:\\Windows\\System32\\drivers\\etc\\hosts if your client machine runs Windows.
        
    -   /etc/hosts if your client machine runs macOS.
        
    
7.  Click **Publish All Rules to Production Environment** after the test is complete to publish all scripts from the staging environment to the production environment.
    
    **Important**
    
    After you publish the scripts from the staging environment to the production environment, the scripts are automatically deleted from the staging environment.
    
    ![Publish All Scripts to Production Environment](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7737886761/p554882.png)
    

## Roll back scripts

To clear the configurations in the staging environment and restore the staging environment to the initialized state, click **Roll Back Scripts**. In the message that appears, click **OK**.

![Roll Back Scripts](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7737886761/p554893.png)

## Modify or delete scripts

![Modify or delete scripts](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4057167561/p448878.png)

If you want to add, modify, or delete a script that is published to the production environment, we recommend that you copy the script from the production environment to the staging environment, modify and test the script in the staging environment, and then publish the modified script to the production environment. Perform the following steps:

1.  Click **Roll Back Scripts**. Make sure that the staging environment is initialized to prevent unexpected interference.
    
2.  Click **Copy Rules from Production Environment** to copy the scripts from the production environment to the staging environment. This prevents inconsistencies in the script caused by manual operations. ![Copy Scripts from Production Environment](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6737886761/p554901.png)
    
3.  Add, modify, or delete the script in the staging environment.
    
4.  Click **Publish to Staging Environment** to publish the modified script to the staging environment. Then, test the script in the staging environment. For information about how to test the script in the staging environment, see [Test scripts in the staging environment](#step-145-bwy-q7f).
    
5.  Click **Publish All Rules to Production Environment** after the test is complete to publish the script to the production environment and check whether the script can meet your business requirements.
    

You can also use the EdgeScript command-line interface (CLI) to configure scripts. For more information, see [Use the EdgeScript CLI to manage scripts](/help/en/cdn/user-guide/use-the-edgescript-cli-to-configure-scripts#task-2058533).
