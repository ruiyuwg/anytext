To make illegal profits or launch unfair competition, attackers exploit vulnerabilities in a container environment to tamper with files by inserting malicious code or hidden links. The container file protection feature can monitor directories and files in containers in real time, and generate alerts or block tampering operations when the directories or files are tampered with. This ensures the security of the container environment. This topic describes how to create a rule for the container file protection feature to protect files in containers.

## **Limits**

-   Only the Ultimate edition of Security Center supports this feature. For more information about how to purchase and upgrade Security Center, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#task-lxj-3bc-zdb) and [Upgrade and downgrade Security Center](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#task-o55-wgb-b2b).
    
-   Only clusters that are connected to Security Center can be protected. If you want to use Security Center to protect a self-managed cluster, you must connect the cluster to Security Center. For more information, see [Connect a self-managed Kubernetes cluster to Security Center](/help/en/security-center/user-guide/connect-a-self-managed-kubernetes-cluster-to-security-center).
    
-   The operating systems and kernel versions of the servers on which your cluster is deployed must be supported by the container file protection feature. For more information about the operating systems and kernel versions that are supported by the container file protection feature, see [Supported operating systems and kernel versions](#87b6af00d8q8u).
    
-   The number of protected directories to which a pod label is added in a cluster cannot exceed 10. Only the protected directories for which rules are enabled are counted. If the number of protected directories exceeds 10, the container file protection feature becomes unavailable for the cluster.
    
-   The number of pod labels that are specified in all enabled rules in a cluster cannot exceed 10 after deduplication. If the number of pod labels exceeds 10, the container file protection feature becomes unavailable for the cluster.
    
    For example, Cluster01 is created and contains Pod01. Only Label01 is added to Pod01. In addition, 12 rules are created for Cluster01. The rules range from Rule01 to Rule12.
    
    In Rule01, Label01 of Cluster01 is specified as the pod label.
    
    In Rule02, Label02 of Cluster01 is specified as the pod label. You can use Label02 regardless of whether it is added to a pod in Cluster01.
    
    ...
    
    In Rule09, Label09 of Cluster01 is specified as the pod label.
    
    In Rule10, Label10 of Cluster01 is specified as the pod label.
    
    In Rule11. Label10 of Cluster01 is specified as the pod label.
    
    In Rule12, Label10 of Cluster01 is specified as the pod label.
    
    A total of 12 pod labels are specified for Cluster01. After deduplication, the number becomes 10. In this case, the container file protection feature can take effect for the cluster as expected.
    
    If you create Rule13 by specifying Label10 and Label11 for Cluster01, the total number of pod labels after deduplication is 11. In this case, the container file protection feature becomes unavailable for Cluster01.
    

## **Prerequisites**

The Security Center agent is installed on the servers on which your cluster is deployed. For more information, see [Install the Security Center agent](/help/en/security-center/user-guide/install-the-security-center-agent).

## **Create a rule**

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to protect. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Container Protection** > **Container File Protection**.
    
3.  On the **Container File Protection** page, click **Create Rule**.
    
4.  In the **Create Rule** panel, configure the parameters and click **Next**.
    
    You can use wildcard characters when you specify values for the **Protected File Directory**, **Whitelist**, and **Excluded File Path** parameters. A rule takes effect in exact match mode. In the following list, the /dir1/test directory is used as an example to describe the matching logic of rules:
    
    -   If you specify /dir1/test for the Protected File Directory, Whitelist, or Excluded File Path parameter, only the /dir1/test directory is matched when the rule takes effect. Directories such as /dir1/test/1.html and /dir1/test/dir1/2.html are not matched.
        
        -   If you specify /dir1/test for the **Protected File Directory** parameter, only the /dir1/test directory is protected. If the /dir1/test directory is deleted or renamed, an alert is generated or the process is blocked. Subdirectories and files in the /dir1/test directory are not protected.
            
        -   If you specify /dir1/test for the **Whitelist** parameter, only the /dir1/test directory is added to the whitelist. If the processes created by the executable file /dir1/test access the protected directory, no alert is generated and the processes are not blocked. However, if the processes created by the /dir1/test/1.html directory access the protected directory, an alert is generated or the processes are blocked.
            
        -   If you specify /dir1/\* for the **Protected File Directory** parameter and /dir1/test for the **Excluded File Path** parameter, only the /dir1/test directory is added to the whitelist. If the /dir1/test directory is deleted or renamed, no alert is generated and the process is not blocked. If the content in the /dir1/test/1.html directory is modified, an alert is generated or the process is blocked.
            
            **Note**
            
            All rules take effect only on the paths that are matched based on the **Protected File Directory**, **Whitelist**, and **Excluded File Path** parameters.
            
    -   If you specify /dir1/test\* for the Protected File Directory, Whitelist, or Excluded File Path parameter, directories such as /dir1/test, /dir1/test/1.html, /dir1/test/dir1/2.html, /dir1/test1/1.html, and /dir1/test2/2.html can be matched.
        
    -   If you specify /dir1/test/\*.html for the Protected File Directory, Whitelist, or Excluded File Path parameter, directories such as /dir1/test/index.html and /test/dir1/index.html can be matched.
        
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Rule Name**
    
    Enter a name for the rule. The name must be 6 to 50 characters in length and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter.
    
    Cluster01
    
    **Rule Configuration**
    
    **Protected File Directory**
    
    Enter the directory that you want to protect. When you configure this parameter, take note of the following items:
    
    -   The directory must start with a forward slash (/). You can enter only one directory.
        
    -   The length of a directory must be less than 500 characters.
        
    -   You can enter only one directory each time. To protect multiple directories, click **Add** in the **Actions** column.
        
    -   You can specify up to 10 directories in a rule.
        
    
    /home/app/label/\*
    
    **Note**
    
    If you want to protect the /home directory and all subdirectories and files in the directory, we recommend that you create two rules for the following directories:
    
    -   /home
        
    -   /home/\*
        
    
    You can also create a rule for the /home\* directory. In this case, directories such as /home1/ and /home2/ can also be protected.
    
    **Whitelist**
    
    Enter the processes that are allowed to modify the protected directory, or enter the directories that can be modified. If a process is added to the whitelist or a directory is added to the Excluded File Path parameter, no alert is generated and the process is not blocked when the process modifies files or the directory is modified. When you configure the two parameters, take note of the following items:
    
    -   A single process or directory can be up to 50 characters in length.
        
    -   You must separate multiple processes or directories with semicolons (;).
        
    -   You can specify a maximum of 10 whitelist processes and 10 excluded file paths for a protected directory.
        
    
    You must follow the following principles when you configure a whitelist and excluded file path:
    
    -   **Least privilege**: Specify a process, file, or directory only when access of the process, file, or directory is required in the normal workloads of your containers.
        
    -   **Exactness**: Specify an exact process, file, or directory. Use wildcard characters with caution to minimize security risks.
        
    
    /bin/cp;/usr/bin/mv;/bin/vi
    
    **Excluded File Path**
    
    /home/app/label/logs/\*
    
    **Action**
    
    Select the action that you want Security Center to perform when a tampering operation is detected. Valid values:
    
    -   **Alert**: When Security Center detects tampering operations on files in the directory, Security Center only generates alerts.
        
    -   **Block**: When Security Center detects tampering operations on files in the directory, Security Center generates alerts and blocks the tampering processes.
        
    
    **Note**
    
    We recommend that you first set the Action parameter to Alert. After you confirm that no false alerts are generated, change the Action parameter to Block. This prevents normal processes from being blocked. If a blocked process is required in your workloads, you can add the process to the whitelist.
    
    Alert
    
5.  Select the cluster on which you want the rule to take effect in the Cluster Name column, select a pod label in the Pod Tag column, and then click **OK**.
    
    We recommend that you select a pod label that starts with `app`. In Kubernetes, labels are key-value pairs and are used to label and classify Kubernetes resources, such as pods, Deployments, and services. You can add custom labels to Kubernetes resources based on scenarios, features, or purposes to better manage the resources. Labels that start with `app` are used to organize resources by application. For more information about labels, see [Recommended Labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/).
    
    If no labels are displayed in the drop-down list, you must enter a label. If you want the rule to take effect on multiple clusters or multiple pod labels in a cluster, you can click **Add** in the **Actions** column to specify multiple clusters or pod labels.
    

## **Manage a rule**

After you create a rule, you can perform the following operations on the **Container File Protection** page:

-   Enable or disable the rule
    
    Find the rule and turn on or turn off the switch in the **Enable** column to enable or disable the rule.
    
-   Modify the rule
    
    Find the rule and click **Edit** in the **Actions** column to modify the name, configurations, and scope of the rule.
    
-   Delete the rule
    
    **Important**
    
    After a rule is deleted, it cannot be restored. Make sure that you no longer need a rule before you delete it.
    
    Find the rule and click **Delete** in the **Actions** column. In the message that appears, click **OK**.
    

## **View alerting results**

After you create and enable a rule, choose **Detection and Response** > **Alerts**, click the tab, and then set Alert Type to **Container Active Defense**. In the alert list, you can view the alerts that are generated by the container file protection feature. The names of the alerts start with **File Defense**. Alert states vary based on the action specified in the rule that triggers the alerts.

-   If an alert is triggered by a rule whose Action is **Alert**, the alert is in the **Container** state. We recommend that you handle this type of alert at the earliest opportunity. For more information, see [View and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2660913861/p628684.png)
    
-   If an alert is triggered by a rule whose Action is **Block**, the alert is in the **Blocked** state. This type of alert is automatically handled by Security Center. You can view this type of alert in the list of handled alerts.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2660913861/p628686.png)
    

## **Supported operating systems and kernel versions**

**Operating system**

**Kernel version**

CentOS (64-bit)

-   3.10.0-123.9.3.el7.x86\_64
    
-   3.10.0-229.el7.x86\_64
    
-   3.10.0-327.10.1.el7.x86\_64
    
-   3.10.0-327.13.1.el7.x86\_64
    
-   3.10.0-327.22.2.el7.x86\_64
    
-   3.10.0-327.36.3.el7.x86\_64
    
-   3.10.0-327.el7.x86\_64
    
-   3.10.0-514.10.2.el7.x86\_64
    
-   3.10.0-514.16.1.el7.x86\_64
    
-   3.10.0-514.21.1.el7.x86\_64
    
-   3.10.0-514.26.2.el7.x86\_64
    
-   3.10.0-514.6.2.el7.x86\_64
    
-   3.10.0-514.el7.x86\_64
    
-   3.10.0-693.11.1.el7.x86\_64
    
-   3.10.0-693.11.6.el7.x86\_64
    
-   3.10.0-693.17.1.el7.x86\_64
    
-   3.10.0-693.2.2.el7.x86\_64
    
-   3.10.0-693.21.1.el7.x86\_64
    
-   3.10.0-693.5.2.el7.x86\_64
    
-   3.10.0-693.el7.x86\_64
    
-   3.10.0-862.11.6.el7.x86\_64
    
-   3.10.0-862.14.4.el7.x86\_64
    
-   3.10.0-862.2.3.el7.x86\_64
    
-   3.10.0-862.3.2.el7.x86\_64
    
-   3.10.0-862.3.3.el7.x86\_64
    
-   3.10.0-862.6.3.el7.x86\_64
    
-   3.10.0-862.9.1.el7.x86\_64
    
-   3.10.0-862.el7.x86\_64
    
-   3.10.0-957.1.3.el7.x86\_64
    
-   3.10.0-957.10.1.el7.x86\_64
    
-   3.10.0-957.12.1.el7.x86\_64
    
-   3.10.0-957.12.2.el7.x86\_64
    
-   3.10.0-957.21.2.el7.x86\_64
    
-   3.10.0-957.21.3.el7.x86\_64
    
-   3.10.0-957.27.2.el7.x86\_64
    
-   3.10.0-957.5.1.el7.x86\_64
    
-   3.10.0-957.el7.x86\_64
    
-   3.10.0-1062.1.1.el7.x86\_64
    
-   3.10.0-1062.1.2.el7.x86\_64
    
-   3.10.0-1062.12.1.el7.x86\_64
    
-   3.10.0-1062.18.1.el7.x86\_64
    
-   3.10.0-1062.4.1.el7.x86\_64
    
-   3.10.0-1062.4.2.el7.x86\_64
    
-   3.10.0-1062.4.3.el7.x86\_64
    
-   3.10.0-1062.7.1.el7.x86\_64
    
-   3.10.0-1062.9.1.el7.x86\_64
    
-   3.10.0-1062.el7.x86\_64
    
-   3.10.0-1127.10.1.el7.x86\_64
    
-   3.10.0-1127.13.1.el7.x86\_64
    
-   3.10.0-1127.18.2.el7.x86\_64
    
-   3.10.0-1127.19.1.el7.x86\_64
    
-   3.10.0-1127.8.2.el7.x86\_64
    
-   3.10.0-1127.el7.x86\_64
    
-   3.10.0-1160.11.1.el7.x86\_64
    
-   3.10.0-1160.15.2.el7.x86\_64
    
-   3.10.0-1160.2.2.el7.x86\_64
    
-   3.10.0-1160.21.1.el7.x86\_64
    
-   3.10.0-1160.24.1.el7.x86\_64
    
-   3.10.0-1160.25.1.el7.x86\_64
    
-   3.10.0-1160.31.1.el7.x86\_64
    
-   3.10.0-1160.36.2.el7.x86\_64
    
-   3.10.0-1160.41.1.el7.x86\_64
    
-   3.10.0-1160.42.2.el7.x86\_64
    
-   3.10.0-1160.45.1.el7.x86\_64
    
-   3.10.0-1160.49.1.el7.x86\_64
    
-   3.10.0-1160.53.1.el7.x86\_64
    
-   3.10.0-1160.59.1.el7.x86\_64
    
-   3.10.0-1160.6.1.el7.x86\_64
    
-   3.10.0-1160.62.1.el7.x86\_64
    
-   3.10.0-1160.66.1.el7.x86\_64
    
-   3.10.0-1160.el7.x86\_64
    
-   3.10.0-1160.71.1.el7.x86\_64
    
-   3.10.0-1160.76.1.el7.x86\_64
    
-   3.10.0-1160.80.1.el7.x86\_64
    
-   3.10.0-1160.83.1.el7.x86\_64
    
-   4.18.0-80.11.2.el8\_0.x86\_64
    
-   4.18.0-147.3.1.el8\_1.x86\_64
    
-   4.18.0-147.5.1.el8\_1.x86\_64
    
-   4.18.0-147.8.1.el8\_1.x86\_64
    
-   4.18.0-193.el8.x86\_64
    
-   4.18.0-193.1.2.el8\_2.x86\_64
    
-   4.18.0-193.6.3.el8\_2.x86\_64
    
-   4.18.0-193.14.2.el8\_2.x86\_64
    
-   4.18.0-193.19.1.el8\_2.x86\_64
    
-   4.18.0-193.28.1.el8\_2.x86\_64
    
-   4.18.0-240.1.1.el8\_3.x86\_64
    
-   4.18.0-240.10.1.el8\_3.x86\_64
    
-   4.18.0-240.15.1.el8\_3.x86\_64
    
-   4.18.0-240.22.1.el8\_3.x86\_64
    
-   4.18.0-305.3.1.el8.x86\_64
    
-   4.18.0-305.7.1.el8\_4.x86\_64
    
-   4.18.0-305.10.2.el8\_4.x86\_64
    
-   4.18.0-305.12.1.el8\_4.x86\_64
    
-   4.18.0-305.19.1.el8\_4.x86\_64
    
-   4.18.0-305.25.1.el8\_4.x86\_64
    
-   4.18.0-348.2.1.el8\_5.x86\_64
    
-   4.18.0-348.7.1.el8\_5.x86\_64
    
-   4.18.0-358.el8.x86\_64
    
-   4.18.0-365.el8.x86\_64
    

Alibaba Cloud Linux (64-bit)

-   4.4.95-1.al7.x86\_64
    
-   4.4.95-2.al7.x86\_64
    
-   4.4.95-3.al7.x86\_64
    
-   4.19.24-7.al7.x86\_64
    
-   4.19.24-7.14.al7.x86\_64
    
-   4.19.81-17.al7.x86\_64
    
-   4.19.81-17.1.al7.x86\_64
    
-   4.19.81-17.2.al7.x86\_64
    
-   4.19.91-18.al7.x86\_64
    
-   4.19.91-19.1.al7.x86\_64
    
-   4.19.91-21.al7.x86\_64
    
-   4.19.91-21.2.al7.x86\_64
    
-   4.19.91-22.1.al7.x86\_64
    
-   4.19.91-22.2.al7.x86\_64
    
-   4.19.91-23.al7.x86\_64
    
-   4.19.91-24.al7.x86\_64
    
-   4.19.91-24.1.al7.x86\_64
    
-   4.19.91-25.1.al7.x86\_64
    
-   4.19.91-25.3.al7.x86\_64
    
-   4.19.91-25.6.al7.x86\_64
    
-   4.19.91-25.7.al7.x86\_64
    
-   4.19.91-25.8.al7.x86\_64
    
-   4.19.91-26.al7.x86\_64
    
-   4.19.91-26.1.al7.x86\_64
    
-   4.19.91-26.4.al7.x86\_64
    
-   4.19.91-26.6.al7.x86\_64
    
-   4.19.91-26.5.al7.x86\_64
    
-   4.19.91-27.al7.x86\_64
    
-   5.10.23-5.al8.x86\_64
    
-   5.10.60-9.al8.x86\_64
    
-   5.10.84-10.2.al8.x86\_64
    
-   5.10.84-10.3.al8.x86\_64
    
-   5.10.84-10.4.al8.x86\_64
    
-   5.10.112-11.al8.x86\_64
    
-   5.10.112-11.1.al8.x86\_64
    
-   5.10.112-11.2.al8.x86\_64
    
-   5.10.134-12.al8.x86\_64
    
-   5.10.134-12.1.al8.x86\_64
    
-   5.10.134-12.2.al8.x86\_64
    
-   5.10.134-13.al8.x86\_64
    

Ubuntu (64-bit)

-   3.13.0-32-generic
    
-   3.13.0-65-generic
    
-   3.13.0-86-generic
    
-   3.13.0-145-generic
    
-   3.13.0-164-generic
    
-   3.13.0-170-generic
    
-   3.19.0-80-generic
    
-   4.4.0-62-generic
    
-   4.4.0-63-generic
    
-   4.4.0-79-generic
    
-   4.4.0-93-generic
    
-   4.4.0-96-generic
    
-   4.4.0-104-generic
    
-   4.4.0-117-generic
    
-   4.4.0-124-generic
    
-   4.4.0-142-generic
    
-   4.4.0-146-generic
    
-   4.4.0-148-generic
    
-   4.4.0-151-generic
    
-   4.4.0-154-generic
    
-   4.4.0-157-generic
    
-   4.4.0-161-generic
    
-   4.4.0-170-generic
    
-   4.4.0-174-generic
    
-   4.4.0-176-generic
    
-   4.4.0-177-generic
    
-   4.4.0-178-generic
    
-   4.4.0-179-generic
    
-   4.4.0-184-generic
    
-   4.4.0-194-generic
    
-   4.4.0-198-generic
    
-   4.4.0-210-generic
    
-   4.15.0-23-generic
    
-   4.15.0-42-generic
    
-   4.15.0-45-generic
    
-   4.15.0-48-generic
    
-   4.15.0-52-generic
    
-   4.15.0-54-generic
    
-   4.15.0-62-generic
    
-   4.15.0-66-generic
    
-   4.15.0-70-generic
    
-   4.15.0-72-generic
    
-   4.15.0-88-generic
    
-   4.15.0-91-generic
    
-   4.15.0-96-generic
    
-   4.15.0-101-generic
    
-   4.15.0-106-generic
    
-   4.15.0-109-generic
    
-   4.15.0-112-generic
    
-   4.15.0-117-generic
    
-   4.15.0-118-generic
    
-   4.15.0-121-generic
    
-   4.15.0-122-generic
    
-   4.15.0-124-generic
    
-   4.15.0-128-generic
    
-   4.15.0-135-generic
    
-   4.15.0-145-generic
    
-   4.15.0-147-generic
    
-   4.15.0-143-generic
    
-   4.15.0-151-generic
    
-   4.15.0-162-generic
    
-   4.15.0-166-generic
    
-   4.15.0-169-generic
    
-   4.15.0-170-generic
    
-   4.15.0-173-generic
    
-   4.15.0-175-generic
    
-   4.15.0-177-generic
    
-   4.15.0-181-generic
    
-   4.15.0-189-generic
    
-   4.15.0-190-generic
    
-   4.15.0-192-generic
    
-   4.15.0-193-generic
    
-   4.15.0-196-generic
    
-   4.15.0-197-generic
    
-   4.15.0-200-generic
    
-   4.15.0-202-generic
    
-   5.4.0-31-generic
    
-   5.4.0-47-generic
    
-   5.4.0-70-generic
    
-   5.4.0-77-generic
    
-   5.4.0-86-generic
    
-   5.4.0-90-generic
    
-   5.4.0-92-generic
    
-   5.4.0-94-generic
    
-   5.4.0-100-generic
    
-   5.4.0-102-generic
    
-   5.4.0-106-generic
    
-   5.4.0-108-generic
    
-   5.4.0-110-generic
    
-   5.4.0-113-generic
    
-   5.4.0-122-generic
    
-   5.4.0-123-generic
    
-   5.4.0-125-generic
    
-   5.4.0-131-generic
    
-   5.4.0-132-generic
    
-   5.4.0-135-generic
    

Anolis OS (64-bit)

-   3.10.0-1062.an7.x86\_64
    
-   3.10.0-1160.an7.x86\_64
    
-   3.10.0-1160.59.1.0.1.an7.x86\_64
    
-   3.10.0-1160.62.1.0.1.an7.x86\_64
    
-   3.10.0-1160.66.1.0.1.an7.x86\_64
    
-   3.10.0-1160.71.1.0.1.an7.x86\_64
    
-   3.10.0-1160.76.1.0.1.an7.x86\_64
    
-   3.10.0-1160.80.1.0.1.an7.x86\_64
    
-   3.10.0-1160.81.1.0.1.an7.x86\_64
    
-   4.19.91-25.2.an7.x86\_64
    
-   4.19.91-25.7.an7.x86\_64
    
-   4.19.91-26.an7.x86\_64
    
-   4.19.91-26.4.an7.x86\_64
    
-   4.19.91-26.5.an7.x86\_64
    
-   4.19.91-26.6.an7.x86\_64
    
-   4.19.91-27.an7.x86\_64
    
-   4.18.0-348.2.1.an8\_4.x86\_64
    
-   4.18.0-348.12.2.an8.x86\_64
    
-   4.18.0-348.20.1.an8\_5.x86\_64
    
-   4.18.0-348.23.1.an8\_5.x86\_64
    
-   4.18.0-372.9.1.an8.x86\_64
    
-   4.18.0-372.16.1.an8\_6.x86\_64
    
-   4.18.0-372.19.1.an8\_6.x86\_64
    
-   4.18.0-372.26.1.an8\_6.x86\_64
    
-   4.18.0-372.32.1.an8\_6.x86\_64
    
-   4.19.91-25.7.an8.x86\_64
    
-   4.19.91-25.8.an8.x86\_64
    
-   4.19.91-26.an8.x86\_64
    
-   4.19.91-26.1.an8.x86\_64
    
-   4.19.91-26.4.an8.x86\_64
    
-   4.19.91-26.5.an8.x86\_64
    
-   4.19.91-26.6.an8.x86\_64
    

Red Hat Enterprise Linux (RHEL) (64-bit)

-   3.10.0-1062.el7.x86\_64
    
-   3.10.0-1127.el7.x86\_64
    
-   3.10.0-1160.71.1.el7.x86\_64
    
-   4.18.0-80.el8.x86\_64
    
-   4.18.0-372.9.1.el8.x86\_64
