This topic describes how to use Auto Scaling to manage non-Alibaba Cloud instances and Alibaba Cloud instances. You can use Cloud Assistant to register a non-Alibaba Cloud instance as an Alibaba Cloud instance and install a CloudMonitor agent on the registered instance. Then, you can add the registered instance to a scaling group. This way, you can monitor non-Alibaba Cloud instances and Alibaba Cloud instances in a centralized manner, and instances are automatically scaled based on the metric statistics.

## **Prerequisites**

-   An Alibaba Cloud account is created. If you do not have an Alibaba Cloud account, [sign up to Alibaba Cloud](https://account.aliyun.com/register/register.htm?).
    
-   One or more non-Alibaba Cloud instances that can access the Internet are prepared.
    

## **Scenarios**

For example, your stateless application that runs on non-Alibaba Cloud instances encounters significant fluctuations in business traffic, and you encounter difficulties in scaling your application instances in response to the fluctuations.

In this case, you can use the features provided by Cloud Assistant, CloudMonitor, and Auto Scaling to register your non-Alibaba Cloud instances as Alibaba Cloud instances and install the CloudMonitor agent on the registered instances. Then, you can add the registered instances to a scaling group for automatic scaling. Auto Scaling monitors the registered instances in the same manner as Alibaba Cloud instances, and automatically scales instances based on the metric statistics. This helps your business respond to the fluctuations in traffic in an efficient manner. Auto Scaling provides the following features:

-   During peak hours, Auto Scaling automatically adds Alibaba Cloud Elastic Computer Service (ECS) instances to your scaling group to respond to the increase in business traffic.
    
-   During off-peak hours, Auto Scaling automatically removes Alibaba Cloud ECS instances from your scaling group to reduce resource costs.
    

## **Concepts**

The following table describes the concepts that are used in this topic.

**Parameter**

**Description**

**References**

Managed instance

You can register a non-Alibaba Cloud server as an Alibaba Cloud instance by using Cloud Assistant. A registered instance is a managed instance. After the registration is complete, the registered instance can use various Alibaba Cloud online services such as Cloud Assistant, Auto Scaling, CloudOps Orchestration Service (OOS), and Apsara DevOps.

[Manage servers that are not provided by Alibaba Cloud](/help/en/ecs/user-guide/manage-servers-that-are-not-provided-by-alibaba-cloud)

Cloud Assistant agent

The Cloud Assistant agent is a lightweight plug-in that can be installed on non-Alibaba Cloud instances and Alibaba Cloud instances. You can send commands to non-Alibaba Cloud instances or Alibaba Cloud instances by using only the Cloud Assistant agent.

[Overview](/help/en/ecs/user-guide/overview-10)

CloudMonitor agent

CloudMonitor provides the system monitoring service after you install the CloudMonitor agent on your host regardless of whether your host is an ECS instance, a virtual machine provided by another cloud service vendor, or a physical machine.

[CloudMonitor agent](/help/en/cms/cloudmonitor-1-0/user-guide/cloudmonitor-agent/)

## **Procedure**

### **Step 1: Register non-Alibaba Cloud instances as Alibaba Cloud instances**

Before the registration, you must prepare at least one non-Alibaba Cloud instance. In this section, three non-Alibaba Cloud instances are used as an example to describe how to complete the registration. For more information, see [Manage servers that are not provided by Alibaba Cloud](/help/en/ecs/user-guide/manage-servers-that-are-not-provided-by-alibaba-cloud).

1.  Create a registration code.
    
    Create a registration code in the ECS console, generate an installation script, and save the installation script to your on-premises machine. For more information, see [Step 1: Create an activation code for managed instances](/help/en/ecs/user-guide/manage-servers-that-are-not-provided-by-alibaba-cloud#section-fhj-e5i-yr4). The following sample code provides an installation script of the `Linux(.deb)` type:
    
    ```
    # Download the DEB package of the Cloud Assistant client. 
    sudo wget https://aliyun-client-assist.oss-accelerate.aliyuncs.com/linux/aliyun_assist_latest.deb
    # Install the Cloud Assistant client of the latest version. 
    sudo dpkg -i aliyun_assist_latest.deb
    # Register the non-Alibaba Cloud instances. 
    sudo aliyun-service --register --RegionId "cn-hangzhou" \
       --ActivationCode "a-hz011wm7BNH3JnTMyx22****VJ6d" \
       --ActivationId "A4C23294-D8E9-5591-87A2-CCA2****2AC9"
    ```
    
2.  Install the Cloud Assistant agent and register the non-Alibaba Cloud instances.
    
    After you obtain the installation script, run the script on the three non-Alibaba Cloud instances to install the Cloud Assistant agent and register the instances as Alibaba Cloud instances.
    
    1.  Log on to a non-Alibaba Cloud instance.
        
    2.  Copy the installation script to the non-Alibaba Cloud instance and run the installation script to install the Cloud Assistant agent. Then, register the non-Alibaba Cloud instance as an Alibaba Cloud instance. If the registration is successful, Alibaba Cloud assigns an ID to the registered instance. The registered instance is a managed instance. ![2023-07-24_16-45-45.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1456062961/p697104.png)
        
3.  View the managed instance.
    
    After the registration is complete, you can go to the **Managed Instance** tab of the **Cloud Assistant** page in the ECS console to view the ID of the managed instance. Repeat the preceding steps to register the other two non-Alibaba Cloud instances as managed instances. In this example, the IDs of the managed instances are Test-01, Test-02, and Test-03.
    
    ![托管实例.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1456062961/p696023.png)
    
    **Note**
    
    The IDs of managed instances start with `mi-`, and the IDs of ECS instances start with `i-`.
    

### **Step 2: Install the CloudMonitor agent**

**Note**

For information about the CloudMonitor agent, see [Install and uninstall the CloudMonitor agent for C++](/help/en/cms/cloudmonitor-1-0/user-guide/install-and-uninstall-the-cloudmonitor-agent-for-cpp).

1.  Log on to a managed instance.
    
2.  Run the following command to install the CloudMonitor agent:
    
    ```
    ARGUS_VERSION=3.5.9.11 /bin/bash -c "$(curl -s https://cloudmonitor-agent.oss-cn-hangzhou.aliyuncs.com/Argus/agent_install_necs-1.8.sh)"
    ```
    
3.  Run the following command to install the CloudMonitor agent:
    
    ```
    ps aux | grep argusagent | grep -v grep
    ```
    
    If the following command output is returned, the CloudMonitor agent is normal and the installation is successful. Repeat the preceding steps to install the CloudMonitor agent on the other two registered instances.
    
    ```
    root      12590  0.0  0.1  33440  6924 ?        Ss   15:55   0:00 /usr/local/cloudmonitor/bin/argusagent -d
    root      12592  0.0  0.4 850972 16096 ?        Sl   15:44   0:00 /usr/local/cloudmonitor/bin/argusagent
    ```
    
    **Note**
    
    You can view the following information about the managed instances on the **Host Monitoring** page of the CloudMonitor console: CPU utilization, memory usage, and disk usage.
    

### **Step 3: Add the managed instances to a scaling group**

#### **Precautions**

Before you add the managed instances to a scaling group, take note of the following items:

-   You must create event-triggered tasks for your scaling group. The metrics that are monitored by the event-triggered tasks must meet your business requirements. For more information, see [Overview](/help/en/auto-scaling/user-guide/overview-11) of event-triggered tasks.
    
-   If your scaling group contains managed instances and Alibaba Cloud instances at the same time, the event-triggered tasks trigger alerts based on the metric statistics of all instances in the scaling group. Managed instances support only CloudMonitor system metrics. We recommend that you specify CloudMonitor system metrics in event-triggered tasks.
    
-   Scaling groups do not manage the lifecycles of managed instances. You must manually remove the managed instances that you no longer require from your scaling group. After managed instances are removed from scaling groups, the instances are not released.
    

#### **Procedure**

1.  Create a scaling group.
    
    You can add managed instances to only scaling groups of the ECS type. Therefore, you must create a scaling group of the ECS type in this step. In this example, the scaling group is named Scalinggroup\_ecs. For more information about how to create a scaling group, see [Create scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups#section-l2v-k5s-gnr).
    
2.  Create and enable a scaling configuration.
    
    For more information, see [Create a scaling configuration of the ECS type](/help/en/auto-scaling/user-guide/create-scaling-configurations-of-the-ecs-type/).
    
3.  Enable the scaling group.
    
    For information about how to enable a scaling group, see [Enable or disable scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups#section-8am-pah-fnc).
    
4.  Create scaling rules.
    
    In this example, two simple scaling rules are created. For more information, see [Create a scaling rule](/help/en/auto-scaling/user-guide/manage-scaling-rules#section-bry-qyu-qdr).
    
    -   Scale-out rule (Add1): adds one ECS instance to the scaling group.
        
    -   Scale-in rule (Reduce1): removes one ECS instance from the scaling group.
        
5.  Create event-triggered tasks.
    
    In this example, two event-triggered tasks are created to ensure that the overall CPU utilization of all instances in the scaling group ranges from 40% to 60%. The **(Agent) CPU Utilization** metric is specified in the event-triggered tasks. For more information about how to create event-triggered tasks, see [Manage event-triggered tasks](/help/en/auto-scaling/user-guide/manage-event-triggered-tasks/). ![报警.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1456062961/p697313.png)
    
    -   Event-triggered task for scale-out (ScaleOutAlarm): monitors the **(Agent) CPU Utilization** metric and triggers alerts when the average CPU utilization of all instances in the scaling group reaches or exceeds **60%**. When the average CPU utilization of all instances in the scaling group reaches or exceeds **60%**, Auto Scaling adds one ECS instance to the scaling group.
        
    -   Event-triggered task for scale-in (ScaleInAlarm): monitors the **(Agent) CPU Utilization** metric and triggers alerts when the average CPU utilization of all instances in the scaling group reaches or drops below **40%**. When the average CPU utilization of all instances in the scaling group reaches or drops below **40%**, Auto Scaling removes one ECS instance from the scaling group.
        
6.  Manually add the three managed instances to the Scalinggroup\_ecs scaling group.
    
    **Important**
    
    Managed instances in a scaling group can be only manually removed from the scaling group.
    
    1.  On the details page of the Scalinggroup\_ecs scaling group, click the **Instances** tab.
        
    2.  Click the **Managed Instance** tab, and then click **Add Instance**.
        
    3.  In the **Add Instance** dialog box, select the managed instances that you want to add and click the ![图标.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1456062961/p696230.png) icon.
        
    4.  Click **Add**.
        
        You can view the managed instances that you added to the scaling group on the **Managed Instance** tab.![以增加.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1456062961/p696314.png)
        

## **Check the monitoring effect**

### **Scenario 1: The scaling group contains only three load-free managed instances**

If the managed instances are load-free, the average CPU utilization of the managed instances in the scaling group drops below 40%. Theoretically, Auto Scaling executes the ScaleInAlarm event-triggered task in this case to remove one ECS instance from the scaling group. However, the scaling group contains only managed instances, and managed instances can be only manually removed from the scaling group. The following cases may occur:

-   For example, if the average CPU utilization of the managed instances drops below 40% from 22:01:00 to 22:07:00, exceptions occur when Auto Scaling executes the ScaleInAlarm event-triggered task.
    
    ![2023-07-21_16-39-22.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1456062961/p696391.png)
    
-   For example, the scale-in request is rejected and the number of managed instances remains unchanged in the scaling group from 22:01:00 to 22:07:00. In this case, you can click **View Rejection Reason** to troubleshoot the issue.
    
    ![伸缩活动.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1456062961/p697348.png)
    

### **Scenario 2: The scaling group contains only three managed instances whose average CPU utilization remains approximately 90%**

You use a stress testing tool, such as lookbusy, to test the workload stress of the three managed instances and detect that the average CPU utilization of the three managed instances remains approximately 90%, which exceeds the threshold of 60%. The following cases may occur:

-   For example, if the average CPU utilization of the managed instances in the scaling group is greater than 60% from 22:14:00 to 22:25:00, Auto Scaling executes the ScaleOutAlarm event-triggered task. ![2023-07-21_16-56-36.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1456062961/p696410.png)
    
-   For example, from 22:14:00 to 22:25:00, Auto Scaling executes the ScaleOutAlarm event-triggered task to add two ECS instances. In this case, the scaling group contains five instances in total. If the average CPU utilization of all the instances in the scaling group remains between 40% and 60% after 22:25:00, the scale-out ends. ![扩容1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1456062961/p697358.png)
    

### **Scenario 3: The scaling group contains two ECS instances and three stress testing-free managed instances**

The scaling group contains two ECS instances and three managed instances. The average CPU utilization of all instances in the scaling group ranges from 40% to 60%. If you cancel stress testing for the three managed instances, the average CPU utilization of all instances in the scaling group drops below 40%. Theoretically, Auto Scaling executes the ScaleInAlarm event-triggered task in this case to remove instances from the scaling group. However, the managed instances can be only manually removed from the scaling group. The following cases may occur:

-   For example, Auto Scaling triggers a scale-in to reduce the number of instances in the scaling group from five to three during the period between 22:48:00 and 22:54:00. If Auto Scaling detects that the average CPU utilization of the remaining instances in the scaling group still drops below 40% after 22:55:00, Auto Scaling does not trigger the scale-in and you must manually remove a specific number of the managed instances.
    
    ![缩容.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1456062961/p697363.png)
    
-   For example, if the average CPU utilization of all instances in the scaling group still drops below 40% after 22:55:00, exceptions occur when Auto Scaling continues to execute the ScaleInAlarm event-triggered task to remove instances from the scaling group. This is because managed instances can be only manually removed from the scaling group.
    
    ![2023-07-21_17-20-52.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1456062961/p696439.png)
