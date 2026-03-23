After you deploy Docker on a server, you can collect logs for query and analysis. Docker logs are categorized into two types: standard output and file logs. File logs are generated within a container and written to a specified file directory on the server. Standard output is the container's real-time output stream. This topic describes how to use Logtail to collect standard output from a container to a logstore.

## **Overview**

After you install Docker on a host, use Logtail to collect the standard output (stdout) and standard error (stderr) logs from application containers deployed in the Docker environment. The collected log data is sent to a logstore for easy query and analysis.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0648173671/CAEQLhiBgMCzi8ikjxkiIGE0YzYzOWEzOWVmYjQ2NTA5OTZlNmU4MGVhN2I5MTEz4580653_20240821132929.625.svg)

## Prerequisites

-   A project and a logstore are created. For more information, see [Manage projects](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb) and [Manage a logstore](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb).
    
-   The host has [installed and is using Docker and Docker Compose](/help/en/ecs/user-guide/install-and-use-docker) and can continuously generate standard output logs.
    
    **Note**
    
    Logtail collects only incremental logs. If a log file is not updated after a Logtail configuration is applied, Logtail does not collect logs from the file. For more information, see [Read logs](/help/en/sls/log-collection-process-of-logtail#section-u34-x5s-cfb).
    

## **Step 1: Install a Logtail container and create a machine group**

1.  Pull the Logtail image
    
    Log on to the host. Based on the region of your Simple Log Service project, obtain the corresponding `${region_id}`. Then, replace the `${region_id}` placeholder in the following command and run it to pull the Logtail image.
    
    **Important**
    
    -   For the `${region_id}` of each region, see [Regions and zones](/help/en/sls/sls-supported-regions1#title-noy-ano-5fm). For example, the `${region_id}` for China (Hangzhou) is `cn-hangzhou`.
        
    
    ```
    #Pull the Logtail image:
    docker pull registry.${region_id}.aliyuncs.com/log-service/logtail:v2.1.11.0-aliyun
    #If your server is in an Alibaba Cloud VPC, run the following command to pull the Logtail image:
    docker pull registry-vpc.${region_id}.aliyuncs.com/log-service/logtail:v2.1.11.0-aliyun
    ```
    
2.  Start the Logtail container
    
    1.  Parameter descriptions
        
        **Parameter**
        
        **Description**
        
        `${region_id}`
        
        Obtain the `${region_id}` that corresponds to the region of your Simple Log Service Project. For the `${region_id}` of each region, see [Available regions](/help/en/sls/sls-supported-regions1#title-noy-ano-5fm). For information about selecting a network type, see [Logtail network types, startup parameters, and configuration files](/help/en/sls/select-a-network-type#concept-st2-rwn-y2b).
        
        -   For example, if a Project is located in the China (Hangzhou) region, `${region_id}` is `cn-hangzhou` for Alibaba Cloud internal network access and `cn-hangzhou-internet` for public network access.
            
        
        `${aliyun_account_id}`
        
        The ID of the Alibaba Cloud account to which Simple Log Service belongs. For more information about how to obtain the ID, see [Obtain the ID of an Alibaba Cloud account](/help/en/sls/configure-a-user-identifier#section-dzm-o12-6id).
        
        `${user_defined_id}`
        
        Specifies the custom identifier for the machine group, such as `user-defined-docker-1`. The identifier must be unique within the region where the Project is located.
        
    2.  Based on the parameter descriptions, replace the `${region_id}`, `${aliyun_account_id}`, and `${user_defined_id}` placeholders in the command template. Then, run the command to start the Logtail container.
        
        ```
        # Start the Logtail container. Replace ${region_id}, ${aliyun_account_id}, and ${user_defined_id}.
        docker run -d \
            -v /:/logtail_host:ro \
            -v /var/run/docker.sock:/var/run/docker.sock \
            --env ALIYUN_LOGTAIL_CONFIG=/etc/ilogtail/conf/${region_id}/ilogtail_config.json \
            --env ALIYUN_LOGTAIL_USER_ID=${aliyun_account_id} \
            --env ALIYUN_LOGTAIL_USER_DEFINED_ID=${user_defined_id} \
            registry.${region_id}.aliyuncs.com/log-service/logtail:v2.1.11.0-aliyun
        ```
        
        **Important**
        
        Customize the startup parameters for the Logtail container only if the following conditions are met.
        
        -   At startup, you must configure the `ALIYUN_LOGTAIL_CONFIG`, `ALIYUN_LOGTAIL_USER_ID`, and `ALIYUN_LOGTAIL_USER_DEFINED_ID` environment variables.
            
        -   Mount the `/var/run` directory on the host to the `/var/run` directory of the Logtail container.
            
        -   Mount the root directory of the host to the `/logtail_host` directory in the Logtail container.
            
        -   If the `The parameter is invalid : uuid=none` error message appears in the Logtail log (`/usr/local/ilogtail/ilogtail.LOG`), create a `product_uuid` file on the host. Then, enter a valid UUID, such as `169E98C9-ABC0-4A92-B1D2-AA6239C0D261`, into the file and mount the file to the `/sys/class/dmi/id/product_uuid` directory in the Logtail container.
            
        
    3.  Run the `docker ps` command to check whether the container started successfully.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4093453671/p923008.png)
        
3.  Create a machine group with a custom identifier
    
    1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com). In the **Projects** section, click the one you want.
        
    2.  In the navigation pane on the left, choose **Resources** > **Machine Groups**. In the **Machine Groups** list, choose **![机器组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2123359951/p52484.png)** > **Create Machine Group**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2286682371/p867659.png)
        
    3.  On the Create Machine Group page, enter a **Name**. Select **Custom Identifier** as the machine group identifier. In the **Custom Identifier** field, enter the value of the `${user_defined_id}` parameter from Step 1, such as `user-defined-docker-1`.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8374122571/p921322.png)
        
        **Parameter**
        
        **Description**
        
        **Machine Group Topic**
        
        Optional. The [topic](/help/en/sls/log-topics#undefined) is used to identify the logs generated by different servers.
        
4.  Check the machine group status
    
    In the machine group list, click the target machine group. On the machine group configuration page, view the machine group configuration and server status.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8374122571/p921381.png)
    
    If the **Heartbeat** status is OK, the configuration is successful. If the status is **FAIL**, wait for 1 minute and click **Refresh**. If the **Heartbeat** status is still **FAIL**, check the following items:
    
    1.  Whether the Logtail container and the project are in the same region.
        
    2.  Whether the security group of the host allows outbound traffic from Logtail. The default port is 80.
        
    
    For more information about how to troubleshoot the issue, see [Troubleshoot container log collection errors](/help/en/sls/what-do-i-do-if-an-error-occurs-when-i-use-logtail-to-collect-logs-from-containers).
    

## Step 2: Create a Logtail configuration

1.  On the **Log Storage** > **Logstores** tab, click the logstore you want.
    
2.  In the menu bar of the Logstores, click **Logtail Configurations**, and then click **Add Logtail Configuration**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6783164371/p875143.png)
    
3.  On the **Quick Data Import** page, click **Docker Stdout and Stderr - Old Version**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4093453671/p923115.png)
    
4.  Because you created a machine group in Step 1, click **Use Existing Machine Groups**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4093453671/p923122.png)
    
5.  In the **Machine Group Configurations** step, select the machine group that you created in Step 1, click **\>** to add the machine group to the applied machine groups, and then click **Next**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4093453671/p923126.png)
    
6.  In the **Logtail Configuration** step, enter a **Configuration Name**, and click **Next**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4093453671/p923189.png)
    
7.  In the **Query and Analysis Configurations** step, click **Refresh** to preview the collected logs. If no logs are displayed, confirm that the container is continuously generating standard output logs. By default, standard output is stored in /var/lib/docker/containers/<Container ID>/<Container ID>-json.log. If you still cannot preview any logs, for more information, see [How to troubleshoot container log collection errors](/help/en/sls/what-do-i-do-if-an-error-occurs-when-i-use-logtail-to-collect-logs-from-containers).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4093453671/p923183.png)
    

## Step 3: View the results

**Important**

Logtail collects only incremental logs. If no new logs are generated for the standard output after the Logtail configuration is applied, Logtail does not collect previous logs. For more information, see [Read logs](/help/en/sls/use-logtail-to-collect-data/#c2b1039d5d6tm).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4568040471/p838081.png)

By default, each collected Docker standard output log contains the following fields:

**Field**

**Description**

**\_\_source\_\_**

The IP address of the Logtail container.

**\_\_tag\_\_:\_\_hostname\_\_**

The name of the Docker host where Logtail is located.

**\_\_tag\_\_:\_\_receive\_time\_\_**

The time when the log arrives at the server.

**\_time\_**

The time when the data is uploaded. Example: `2024-02-02T02:18:41.979147844Z`.

**\_source\_**

The type of the input source, stdout or stderr.

**\_image\_name\_**

The name of the image.

**\_container\_name\_**

The name of the container.

**\_container\_ip\_**

The IP address of the application container.

## **References**

-   For more information about how to view the Logtail running status, see [View the status of Logtail](/help/en/sls/collect-docker-container-text-logs#section-sxz-4pv-vdb).
    
-   For more information about how to use Docker, see [Install and use Docker and Docker Compose](/help/en/ecs/user-guide/install-and-use-docker#section-x1c-w5u-5wb).
    
-   To collect text logs from Docker containers, see [Collect Docker container logs (standard output and files)](/help/en/sls/collect-docker-container-text-logs).
    
-   To collect text logs from the host, see [Collect host text logs](/help/en/sls/collect-host-logs). By default, the root directory of the host is mounted on the `/logtail_host` directory of the Logtail container.
    
-   After logs are uploaded to a logstore, you must create indexes before querying and analyzing the logs. For more information, see [Create indexes](/help/en/sls/create-indexes#651a9568dffa1) and [Quick start for log query and analysis](/help/en/sls/quick-guide-to-query-and-analysis).
    
-   If an exception occurs when you use Logtail to collect Docker container logs, see [Troubleshoot container log collection errors](/help/en/sls/what-do-i-do-if-an-error-occurs-when-i-use-logtail-to-collect-logs-from-containers#concept-lrr-tch-1fb).
