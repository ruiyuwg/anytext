A machine group heartbeat reflects the communication status between a server and Simple Log Service (SLS). If the heartbeat is abnormal, data cannot be sent to SLS. This topic explains the causes of abnormal heartbeats and provides solutions for common use cases.

## **Causes of abnormal heartbeats**

LoongCollector on a server uses the following configuration items to identify the destination project and report heartbeats. Troubleshooting abnormal heartbeats involves checking the configuration items and verifying network connectivity.

-   **The Alibaba Cloud account that owns the SLS project**: This account must have the permissions to access the server and collect its logs.
    
-   **The region and network type of the project**: The SLS endpoint is dynamically generated based on the region and network type. Ensure that the server can connect to the endpoint. For more information, see [Network types and endpoints](/help/en/sls/loongcollector-installation-linux#38d9d775dbmhd).
    
-   **Custom identifier or IP address**: A heartbeat is established by associating the server with a machine group using its IP address or a custom identifier.
    

### **Heartbeat establishment procedure**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9454946671/CAEQShiBgMDV9vnbxhkiIGYzMzkxZmVmOTJjNzRkN2Q5ZGMwMTMzNTIyMzNkMjdi5450499_20250821143630.338.svg)

1.  LoongCollector reads its configuration to get the Alibaba Cloud account ID, the endpoint, and the server's IP address or custom identifier.
    
2.  LoongCollector reports a heartbeat with this information to a project in the specified region.
    
3.  The SLS backend compares the IP address or custom identifier reported by LoongCollector with the configurations in your machine groups.
    
4.  If the information matches, a heartbeat is successfully established with one or more matching projects. The heartbeat status of the machine group changes to OK.
    

## **Common use cases of abnormal heartbeats**

### **The heartbeat of a new server is FAIL**

When the heartbeat status is FAIL, it may take some time to establish the initial heartbeat. Wait for about two minutes and then refresh the heartbeat status. If the status is still FAIL, perform the following steps:

1.  Verify that you selected the correct installation use case for LoongCollector. If the use case is correct, proceed to the next step. Otherwise, uninstall and then reinstall LoongCollector.
    
    **Installation method**
    
    **Use case**
    
    [Same account and region](/help/en/sls/loongcollector-installation-linux#441577d855d62)
    
    This method applies only when the server is an Alibaba Cloud ECS instance, and both the ECS instance and the project belong to the same Alibaba Cloud account and are in the same [region](/help/en/sls/loongcollector-installation-linux#c6871713371el).
    
    [Same account but different regions](/help/en/sls/loongcollector-installation-linux#6ddb57ee7df2v)
    
    This method applies when the server is an Alibaba Cloud ECS instance, and both the ECS instance and the project belong to the same Alibaba Cloud account but are in different [regions](/help/en/sls/loongcollector-installation-linux#c6871713371el).
    
    [Different accounts but same region](/help/en/sls/loongcollector-installation-linux#0c8b2ee8ffwjz)
    
    This method applies when the server is an Alibaba Cloud ECS instance, and both the ECS instance and the project are in the same [region](/help/en/sls/loongcollector-installation-linux#c6871713371el) but belong to different Alibaba Cloud accounts.
    
    [Other cloud or on-premises servers](/help/en/sls/loongcollector-installation-linux#4514d34b2akzj)
    
    -   This method applies when the server is not an Alibaba Cloud ECS instance, such as an on-premises server or a server from another cloud provider.
        
    -   This method applies when the server is an Alibaba Cloud ECS instance, but the ECS instance and the project belong to different Alibaba Cloud accounts and are in different [regions](/help/en/sls/loongcollector-installation-linux#c6871713371el). In this case, the server can be treated as an on-premises server.
        
    
2.  On the server, run the `sudo /etc/init.d/loongcollectord status` command to check the status of LoongCollector. If \`loongcollector is running\` is returned, LoongCollector has started. Otherwise, run the following command to start LoongCollector:
    
    > If you use the Logtail collector, run `sudo /etc/init.d/ilogtaild status` to check its status and `sudo /etc/init.d/ilogtaild start` to start it.
    
    ```
    sudo /etc/init.d/loongcollectord start
    ```
    
3.  If you are in a cross-account use case where the project and the server belong to different Alibaba Cloud accounts, you must manually configure a user ID file to grant the project's account the permissions to access the server and collect its logs.
    
    **Check the content of the user ID file**
    
    1.  Check whether the `/etc/ilogtail/users/{Alibaba Cloud account ID}` file exists. If it does not, create it.
        
        1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/). Hover the mouse over the profile picture in the upper-right corner. In the menu that appears, view and copy the Alibaba Cloud account ID.
            
        2.  On the server where LoongCollector is installed, create a user ID file named after the Alibaba Cloud account ID.
            
            ```
            touch /etc/ilogtail/users/{Alibaba Cloud account ID} # Use the Alibaba Cloud account ID as the filename, and no file extension configuration is required.
            ```
            
    2.  Check whether the filename meets the following requirements. If it does not, modify it.
        
        -   `{Alibaba Cloud account ID}` must be the ID of the Alibaba Cloud account.
            
        -   `{Alibaba Cloud account ID}` must be the ID of the Alibaba Cloud account that owns the SLS project, not the account that owns the server.
            
    
4.  Confirm that the region and network type are correct and that you can connect to the endpoint. Check whether the `/usr/local/ilogtail/ilogtail_config.json` file on the server contains the correct `region` information that is consistent with the [Region ID](/help/en/sls/loongcollector-installation-linux#c6871713371el) of the SLS project. If it is consistent, proceed to the next step. If it is not, modify it:
    
    **Test the endpoint connectivity and modify the server configuration**
    
    1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com). In the Projects section, click the target project.
        
    2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4287915571/p995186.png) icon to the right of the project name to go to the project overview page.
        
    3.  In the **Endpoints** section, view the domain name information of the current project. Replace `${project_name}` with the project name and `${domain_name_information}` with the Internet endpoint. Then, run the command on the server.
        
        ```
        curl https://${project_name}.${domain_name_information}
        ```
        
    4.  If a response similar to `{"Error":{"Code":"OLSInvalidMethod","Message":"The script name is invalid : /","RequestId":"5D****09"}}` is returned, the network connection is normal. Otherwise, check whether the destination address is blocked and perform other network checks. For example, check whether ports 80 (HTTP) and 443 (HTTPS) are open for outbound traffic and check the DNS and security group configurations.
        
        > This error is expected and indicates that the network connection is working. The error occurs because the curl command tests only network connectivity and does not include the required API parameters for a valid request.
        
    5.  Modify the parameters in `/usr/local/ilogtail/ilogtail_config.json`:
        
        -   config\_servers: This parameter specifies the path to obtain the collection configuration. Change its value to `"http://logtail.${domain_name_information}"`, where `${domain_name_information}` is the Internet endpoint.
            
        -   data\_servers:
            
            -   region: This parameter specifies the region for data transmission. Change its value to `"${RegionID}"`, where `${RegionID}` is the [Region ID](/help/en/sls/loongcollector-installation-linux#c6871713371el) of the SLS project.
                
            -   endpoint\_list: This parameter specifies the path for data transmission. Change its value to `"${domain_name_information}"`, where `${domain_name_information}` is the Internet endpoint.
                
    6.  After saving the changes, restart LoongCollector.
        
        > If you use the Logtail collector, run `sudo /etc/init.d/ilogtaild restart`
        
        ```
        sudo /etc/init.d/loongcollectord restart
        ```
        
    
5.  Check the value of the custom identifier or IP address:
    
    1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/). In the Projects section, click the target project.
        
    2.  In the navigation pane on the left, choose **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6202272571/p982429.png)** Resources > Machine Groups. On the Machine Groups page, click the target machine group.
        
    3.  On the **Machine Group Settings** page, view the **Machine Group Identifier** and perform the corresponding operation:
        
        ## Custom identifier
        
        1.  Confirm that the `/etc/ilogtail/user_defined_id` file exists on the server. If it does not, create it.
            
        2.  Write a custom string to the file as the custom identifier. This example uses `user-defined-test-1`.
            
            ```
            # Write a custom string to the specified file.
            echo "user-defined-test-1" > /etc/ilogtail/user_defined_id 
            ```
            
        3.  Set **Custom Identifier** to the custom string. In this example, the value is `user-defined-test-1`.
            
        
        ## IP address
        
        Add the value of the `ip` field from `/usr/local/ilogtail/app_info.json` on the server to the **IP Address** field.
        
        > IP value rule: If you have set a hostname-to-IP address mapping in the /etc/hosts file on the server, the mapped IP address is automatically retrieved. If no hostname mapping is set, the IP address of the first network interface card (NIC) is automatically retrieved. If the working\_ip parameter is set in /usr/local/ilogtail/ilogtail\_config.json, its value is used as the server's IP address. Ensure that the IP address can be retrieved in at least one of these ways. Otherwise, the ip field is empty and a heartbeat cannot be established.
        

### **The heartbeat was previously successful but is now FAIL**

A previously successful heartbeat indicates that the configuration items are correct. If the machine group uses a custom identifier, the configuration is static. The issue is likely network-related. Verify the network connectivity to the SLS endpoint. If the machine group uses an IP address, the FAIL status is most likely caused by an IP address conflict or a change in the IP address. Perform the following steps to resolve the issue:

1.  On the server, restart LoongCollector to retrieve the latest IP address information.
    
    > If you use the Logtail collector, run `sudo /etc/init.d/ilogtaild restart`
    
    ```
    sudo /etc/init.d/loongcollectord restart
    ```
    
2.  On the server, view the information in the `ip` field of the `/usr/local/ilogtail/app_info.json` file.
    
    > IP value rule: If you have set a hostname-to-IP address mapping in the /etc/hosts file on the server, the mapped IP address is automatically retrieved. If no hostname mapping is set, the IP address of the first NIC is automatically retrieved. If the working\_ip parameter is set in /usr/local/ilogtail/ilogtail\_config.json, its value is used as the server's IP address.
    
3.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/). In the Projects section, click the target project.
    
4.  In the navigation pane on the left, choose **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6202272571/p982429.png)** Resources > Machine Groups. On the Machine Groups page, click the target machine group.
    
5.  On the **Machine Group Settings** page, check whether the **IP Address** field contains the value of the `ip` field from `/usr/local/ilogtail/app_info.json`. If it does not, add the value of the `ip` field to the **IP Address** field.
    
6.  If the IP address matches but the heartbeat remains FAIL, it may indicate that the server's IP is unstable or conflicting. Consider switching to a custom identifier for more reliable identification.
    

### **The heartbeat is FAIL after switching the machine group identifier type**

When an IP address conflict or change occurs, an IP-based machine group is no longer suitable. You need to switch to a machine group that uses a custom identifier. Switching the machine group type does not affect network connectivity, Alibaba Cloud account information, or region and network type settings. Therefore, you only need to ensure that the value of the custom identifier is correct.

1.  Confirm that the `/etc/ilogtail/user_defined_id` file exists. If it does not, create it.
    
2.  Write a custom string to the file as the custom identifier. This example uses `user-defined-test-1`.
    
    ```
    # Write a custom string to the specified file.
    echo "user-defined-test-1" > /etc/ilogtail/user_defined_id 
    ```
    
3.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/). In the Projects section, click the target project.
    
4.  In the navigation pane on the left, choose **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6202272571/p982429.png)** Resources > Machine Groups. On the Machine Groups page, click the target machine group.
    
5.  On the **Machine Group Settings** page, confirm the values of the following two parameters. If they are incorrect, click **Modify** in the upper-right corner, make the necessary changes, and then save them.
    
    -   **Machine Group Identifier**: Custom identifier.
        
    -   **Custom Identifier**: The custom string. In this example, the value is `user-defined-test-1`.
        

## **FAQ**

### **Why is the heartbeat status FAIL even when all configurations are correct?**

If you confirm that the configurations are correct and the network is normal, the heartbeat status may be FAIL for the following two reasons:

-   The collector reduces the frequency of heartbeats because no collection configuration has been applied in the region for a long time.
    
    -   To reduce server load, the collector reduces the frequency of configuration requests from a region if no configuration is returned. The request interval can increase up to a maximum of 12 minutes. If this interval exceeds the region's heartbeat FAIL threshold, the heartbeat status changes to FAIL.
        
    -   Solution: Ignore the FAIL heartbeat status. Apply a collection configuration to the machine group that contains the server. The heartbeat will recover during the next request to the region. To recover the heartbeat immediately, restart the collector.
        
-   The active configuration does not match the `ilogtail_config.json` file.
    
    -   Example: The collector starts with a non-default configuration. Then, the `ilogtail_config.json` file is modified, but the collector is not restarted.
        
    -   How to check:
        
        -   The most direct method is to restart the collector to automatically load the latest configuration.
            
        -   If you are concerned about the impact on log collection, view the `/usr/local/ilogtail/ilogtail.LOG` file. From the beginning of the file, search for the keyword `load logtail config file`. The log entry on that line contains the configuration that is in use. Check whether it matches the local file.
