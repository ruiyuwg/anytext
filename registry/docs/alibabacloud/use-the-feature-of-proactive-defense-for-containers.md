The feature of proactive defense for containers proactively detects risks when your containers start or run from the following dimensions: image security, runtime security, and running environment security. You can configure rules to block the running of at-risk images, stop untrusted processes, and block container escapes. This helps improve the runtime security of your containers. This topic describes how to configure rules of the at-risk image blocking, non-image program defense, and container escape prevention types.

## Rule description

The following table describes the rule types that you can select based on your business requirements.

**Rule type**

**Description**

**At-risk Image Blocking**

After you create a rule of the **At-risk Image Blocking** type, Security Center detects risks on images based on the rule when you use the images to create resources in the clusters that are specified in the rule. If an image hits the rule, Security Center performs the action that is specified in the rule on the image, and generates an alert for the risk detection result. The action can be Alert, Block, or Allow. This ensures that only images that meet your security requirements can be started in your clusters.

**Non-image Program Defense**

After you create a rule of the **Non-image Program Defense** type, Security Center detects and blocks the startup of programs that are not included in the images of specified clusters in the rule. This helps defend against malicious software intrusion and known and unknown attacks.

**Container Escape Prevention**

After you create a rule of the **Container Escape Prevention** type, Security Center detects risky operations from multiple dimensions, such as processes, files, and system calls, and establishes protection barriers between containers and hosts. This helps block escape behaviors and ensure the runtime security of containers in an efficient manner. You can also use this type of rule to block attacks that are launched by exploiting container vulnerabilities to take control over hosts. This helps improve the security of operating systems.

## Limits

Only the Ultimate edition of Security Center supports this feature. For more information about how to purchase and upgrade Security Center, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#task-lxj-3bc-zdb) and [Upgrade and downgrade Security Center](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#task-o55-wgb-b2b).

## At-risk image blocking

### Supported cluster types

The **At-risk Image Blocking** feature supports only Container Service for Kubernetes (ACK) clusters. The following table describes the support for ACK clusters.

**ACK cluster**

**Supported**

ACK managed cluster

Yes

ACK dedicated cluster

Yes

ACK Serverless cluster

No

Managed edge Kubernetes cluster

No

Registered cluster

No

### Principles

After you create a rule of the **At-risk Image Blocking** type for a cluster, a request is sent to Security Center to detect image risks when you use an image specified in the rule to create resources such as pods in the cluster. Security Center checks whether the image contains risks that you select in the rule. If the image hits the rule, Security Center handles the image based on the action that is specified in the rule, and generates a security event for the Alert and Block actions. The action can be Alert, Block, or Allow.

If multiple rules are created for a cluster, all rules take effect. If an image hits multiple rules, Security Center handles the image based on the actions that are specified in the rules, and generates multiple alerts.

If multiple policies are configured in a rule and a policy is hit, Security Center immediately handles the risks based on the action that is specified in the rule. Security Center no longer matches the image against other policies. Security Center detects the following types of risks on an image in sequence: unscanned images, baseline risks, malicious Internet images, malicious samples, vulnerabilities, sensitive files, and risks of image build commands.

### Prerequisites

Before you create a rule, make sure that the components that are required for policy management are installed in the ACK console. The required components are gatekeeper, policy-template-controller, and logtail-ds. For more information, see [Install or update the policy governance components](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/configure-and-enforce-ack-pod-security-policies#section-3k8-sl8-fi0).

### Create a rule

**Note**

You can create up to 40 rules for each cluster.

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Container Protection** > **Proactive Defense for Containers**.
    
3.  Select **At-risk Image Blocking** for Rule Type. Then, click **Create Rule**.
    
    If you created a rule for the cluster, find the rule and click **Copy** in the Actions column. In the **Copy Rule** panel, you can modify the parameters of the rule based on your business requirements and click **OK**.
    
4.  In the **Create Rule** panel, configure the parameters and click **Next**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Rule Name**
    
    Select a rule template from the drop-down list and enter a name for the rule. You can select Blank template to create a rule based on your business requirements. You can also select an existing template with preconfigured risk detection settings.
    
    **Rule Description**
    
    Enter a description for the rule.
    
    **Rule Configuration**
    
    Select the types of risks that Security Center detects on an image. If you select the check box next to a type of risks, Security Center detects the risks. If you clear the check box, Security Center does not detect the risks. The following list describes the supported types of risks:
    
    -   **Unscanned Image**
        
        If you select this type of risk, Security Center detects the startups of images that are not scanned by container image scan.
        
        **Important**
        
        If you select this type of risk, we recommend that you set Rule Action to Alert. If you have high requirements for security management, you can change the action to Block. Before you change the action, we recommend that you observe the alert events that are generated based on the existing settings for a period of time and check whether your business is affected. If your business is not affected, you can change the action of the rule.
        
    -   **Malicious Internet Image**
        
        If you select this type of risk, Security Center detects the startups of images that are marked as malicious on the Internet, such as the malicious images that are downloaded from public image repositories and the images that are pulled from Docker Hub repositories and contain malicious programs such as webshells and trojans.
        
    -   **Baseline**
        
        If you select this type of risk, Security Center checks the images against the predefined standard security configurations and best practices.
        
    -   **Vulnerability**
        
        If you select this type of risk, Security Center detects the vulnerabilities that may cause security risks to container environments, and detects the application-related vulnerabilities in images.
        
    -   **Malicious Sample**
        
        If you select this type of risk, Security Center detects the malicious files, code, and behaviors that may exist in container images and container runtime.
        
    -   **Sensitive File**
        
        If you select this type of risk, Security Center detects common sensitive files.
        
    -   **Built Risks Exist**
        
        If you select this type of risk, Security Center detects risks of image build commands.
        
    
    **Important**
    
    -   If an image hits the rule, Security Center generates an alert based on the rule and handles the risk based on the action specified in the rule.
        
    -   You can configure the detection parameters for the following types of risks based on your business requirements: baseline risks, vulnerabilities, malicious samples, sensitive files, and risks of image build commands.
        
    -   The conditions that you specify in the policy for a type of risk are evaluated by using a logical OR. For example, if you set Risk Level to High Risk and specify some **CVE ID** when you configure a policy for vulnerabilities, the rule is hit if a started image contains high-risk vulnerabilities or vulnerabilities with specified CVE IDs.
        
    
    **Rule Action**
    
    Specify the action that you want Security Center to perform when the rule is hit. Valid values:
    
    -   **Alert**: If an image is started and hits the rule, an alert whose **Rule Action** is **Alert** is generated on the **Alerts** page.
        
    -   **Block**: If an image is started and hits the rule, the image is blocked, and an alert whose **Rule Action** is **Block** is generated on the **Alerts** page.
        
    -   **Allow**: If an image is started and hits the rule, the image is allowed, and an alert whose **Rule Action** is **Allow** is generated on the **Alerts** page.
        
    
    **Add to Whitelist**
    
    Click **Create Rule** and enter the tag of the image that you want to add to the whitelist. You can add up to 20 images to the whitelist. After you add an image to the whitelist, Security Center no longer detects risks on the image when the image is started.
    
    Fuzzy match is supported by using keywords. For example, if you want to add the image whose address is `yundun-example-registry.cn-hangzhou.aliyuncs.com/yundun-example/yun-repo:test` to the whitelist, you can enter one of the following keywords:
    
    -   `yun-repo`
        
    -   `test`
        
    -   `yun-repo:test`
        
    -   `repo:test`
        
    
5.  Configure the protection scope and click **OK**.
    
    Click the **Cluster**, **Image**, or **Tag** tab to select the assets that you want to protect.
    

### View the alerts that are generated

After you create a rule of the at-risk image blocking type, you can perform the following operations to view and handle the alerts that are generated: Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the left-side navigation pane, choose **Detection and Response** > **Alerts**. On the Alerts page, select **Risk Image Blocking** for Alert Type. Find the alert that you want to manage and click **Details** in the **Actions** column. On the Details tab of the details panel that appears, you can handle the alert based on **Suggestions**.

![风险镜像阻断告警](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7095155861/p653487.png)

### Manage a rule

After you create a rule of the at-risk image blocking type, you can perform the following operations:

-   View the protection scope of the rule
    
    Find the rule whose protection scope you want to view and click the number in the **Protection Scope** column. In the **Protection Scope** panel, view the clusters, images, and tags that are protected by the rule.
    
-   Modify the rule
    
    Find the rule that you want to modify and click **Edit** in the Actions column. In the **Edit Rule** panel, modify the parameters and protection scope.
    
-   Copy the rule
    
    Find the rule that you want to copy and click **Copy** in the Actions column. In the **Copy Rule** panel, modify the parameters and protection scope of the rule to create another rule.
    
-   Delete the rule
    
    **Important**
    
    After you delete a rule, the assets that are protected by the rule are no longer protected, and the rule cannot be restored. Proceed with caution.
    
    Find the rule that you want to delete and click **Delete** in the Actions column. In the message that appears, click **OK**.
    

## Non-image program defense

In a container environment, basic software is included in the image of a container. You do not need to install or modify software when the container is running. The startup of a program that is not included in the image during the running of the container is considered an abnormal behavior. The behavior may be caused by malicious software such as trojans that are inserted by attackers. The non-image program defense feature can detect and block such a behavior, which helps ensure the runtime security of containers.

### Limits on container image

Container images must meet the following criteria to successfully activate the corresponding defense rules and whitelist rules:

-   The path length of the program running in the container must not exceed 1,023 characters.
    
-   The namespace length of the container cluster must not exceed 287 characters.
    
-   The processes of the Security Center agent within the container must have the following minimum versions:
    
    -   AliYunDun: aegis\_12\_13 or higher
        
    -   AliHips: 00\_43 or higher
        
-   For container images included in the whitelist rules, ensure that the corresponding container image name does not exceed 287 characters in length.
    

### Manage the system rule

-   **Enable the rule**
    
    -   By default, Security Center provides the system rule for non-image program defense. The system rule is automatically enabled for users who do not configure custom rules for non-image program defense. The system rule generates alerts for the startups of non-image programs in all clusters that are added to Security Center.
        
    -   You can manually enable or disable the system rule.
        
-   **Rule action**
    
    The action that is specified in the system rule is Alert. When the startup of a non-image program is detected, Security Center generates an alert and does not block the startup of the non-image program.
    
-   **View the rule**
    
    You can perform the following operations to view the system rule for non-image program defense: Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas) and choose **Protection Configuration** > **Container Protection** > ******Proactive Defense for Containers******. Then, select **Non-image Program Defense** for Rule Type and view the system rule on the **System Rules** tab.
    
-   **Modify the rule**
    
    You can modify the clusters on which the system rule takes effect. If the clusters are changed or new clusters are added, the system automatically adds the new clusters to the protection scope.
    
-   **Use the rule**
    
    -   The first time you use the non-image program defense feature, we recommend that you check whether false positive alerts are generated by the system rule.
        
    -   You cannot configure whitelists in the system rule or block the risky behavior detected by the system rule. If you want to configure a whitelist or block a risky behavior, you can create a custom rule.
        
    -   After you create a custom rule, the system rule is automatically disabled and cannot be re-enabled. If you want to enable the system rule, you must delete all custom rules.
        

### Create a custom rule

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Container Protection** > **Proactive Defense for Containers**.
    
3.  In the Rule Type section, click **Non-image Program Defense**.
    
4.  On the **Custom Rules** tab, click **Create Rule**.
    
5.  In the **Create Rule** panel, configure the parameters and click **Next**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Rule Name**
    
    Enter a name for the rule.
    
    **Rule Description**
    
    Enter a description for the rule.
    
    **Status**
    
    Turn on or turn off the switch to enable or disable the rule. Valid values:
    
    -   On: If you turn on the switch, the rule is enabled after it is created and is automatically applied to protect the clusters within the protection scope.
        
    -   Off: If you turn off the switch, the rule is disabled and does not take effect after it is created.
        
    
    **Defense Action**
    
    Specify the action that is performed after the rule is triggered. Valid values:
    
    -   **Alert**: If an untrusted process is detected, Security Center generates an alert.
        
    -   **Block**: If an untrusted process is detected, Security Center generates an alert and blocks the process.
        
        **Note**
        
        We recommend that you first set the Defense Action parameter to Alert. If no executable programs that are not included in container images are installed and started during the running of your container, change the value of the Defense Action parameter to Block. This helps prevent false positives.
        
    
    **Create File Directory Whitelist**
    
    Click **Create Rule** and enter the file directory that you want to add to the whitelist. Example: `/user/name1`.
    
    **Create Image Whitelist**
    
    Click **Create Rule** and enter the image that you want to add to the whitelist. Fuzzy match is supported by using keywords. For example, if you want to add the image whose address is `yundun-example-registry.cn-hangzhou.aliyuncs.com/yundun-example/yun-repo:test` to the whitelist, you can enter one of the following keywords:
    
    -   `yun-repo`
        
    -   `test`
        
    -   `yun-repo:test`
        
    -   `repo:test`
        
    
6.  In the message that appears, click **OK**. After you create the custom rule, the system rule is automatically disabled.
    
7.  Select the clusters to which you want to apply the rule and click **OK**.
    
    You can select the clusters that are connected to Security Center. You can configure only one rule for a cluster. If a rule is already configured for a cluster, you cannot select the cluster in this step.
    

### View the alerts that are generated

After you create and enable a rule of the non-image program defense type, you can perform the following operations to view the alerts that are generated: Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas), choose **Detection and Response** > **Alerts**, and then select **Container Active Defense** for Alert Type. The names of the alerts are **Non mirror native program startup**. The alerts that are generated based on the non-image program defense feature are divided into the following types based on the value of the Defense Action parameter in the rule:

-   If the Defense Action parameter is set to **Alert** in a rule, an alert in the **Unhandled** state is generated when the rule is triggered. We recommend that you handle the alert at the earliest opportunity. For more information, see [View and handle alerts](/help/en/security-center/user-guide/view-and-handle-alert-events).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7956021861/p608225.png)
    
-   If the Defense Action parameter is set to **Block** in the rule, an alert in the **Process Not Exists** or **Process Terminated** state is generated when the rule is triggered. You can view the alert of this type in the handled alert list. The following list describes the Process Not Exists state and the Process Terminated state:
    
    -   **Process Not Exists**: The process exists for a short period of time and is stopped before Security Center handles the process. You do not need to handle the alert in this state.
        
    -   **Process Terminated**: Security Center blocks the process. You do not need to handle the alert in this state.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7956021861/p608228.png)
    

### Manage a rule

After you create a rule of the non-image program defense type, you can perform the following operations in the rule list:

-   View the protection scope of the rule
    
    Find the rule whose protection scope you want to view and click the number in the **Protection Scope** column. In the **Protection Scope** panel, view the clusters that are protected by the rule.
    
-   Enable or disable the rule
    
    Find the rule that you want to manage and click the switch in the **Enable** column to enable or disable the rule.
    
-   Modify the rule
    
    Find the rule that you want to modify and click **Edit** in the **Actions** column to modify the name, description, status, action, whitelist settings, and protection scope of the rule.
    
-   Delete the rule
    
    **Important**
    
    -   The system rule cannot be deleted.
        
    -   After a rule is deleted, the rule cannot be restored. Before you delete a rule, make sure that you no longer require the rule.
        
    
    Find the rule that you want to delete and click **Delete** in the **Actions** column. In the message that appears, click **OK**.
    

## Container escape prevention

A container, except for a security container, that resides on a host uses the kernel of the operating system that runs on the host. In this case, attackers can exploit the vulnerabilities in the container to implement privilege escalation and control the operating system of the host or the other containers that reside on the host. Security Center provides the feature of container escape prevention that blocks container escapes to ensure the runtime security of containers. You must configure rules to use the feature.

### **Supported clusters**

The feature of container escape prevention supports clusters that meet the following conditions:

-   The servers on which the clusters are deployed are added to Security Center.
    
-   The clusters are ACK managed clusters, ACK dedicated clusters, or self-managed Kubernetes clusters that are connected to Security Center.
    

### **Prerequisites**

-   The switch for **Malicious Host Behavior Prevention** or **Webshell Prevention** is turned on. For more information, see [Proactive Defense](/help/en/security-center/user-guide/enable-features-on-the-host-protection-settings-tab#section-8ad-fnl-sb4).
    
-   The switch for **Container Escape Prevention** is turned on. For more information, see [Container Escape Prevention](/help/en/security-center/user-guide/enable-features-on-the-container-protection-settings-tab#section-dcp-zkb-zmo).
    

### Manage a system rule

-   **Enable a rule**
    
    -   Security Center provides various rules of the container escape prevention type. By default, the rules are enabled for all clusters that are protected by Security Center. The rules are referred to as system rules.
        
    -   You can manually enable or disable a system rule.
        
-   **Rule action**
    
    The action that is specified in a system rule is Alert. When an escape behavior is detected, Security Center generates an alert and does not block the behavior.
    
-   **View a rule**
    
    You can perform the following operations to view the details of the system rules: Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas) and choose **Protection Configuration** > **Container Protection** > **Proactive Defense for Containers** in the left-side navigation pane. In the Rule Type section, click **Container Escape Prevention**. Then, click the **System Rules** tab.
    
-   **Modify a rule**
    
    You can modify the clusters on which a system rule takes effect. If the clusters are changed or new clusters are added, the system automatically adds the new clusters to the protection scope.
    
-   **Use a rule**
    
    -   The first time you use the container escape prevention feature, we recommend that you check whether false positive alerts are generated by the system rules. If no false positive alert is generated, you can change the rule action that is specified in the rules to Block.
        
    -   You cannot configure whitelists in the system rules or block the risky behavior detected by the system rules. If you want to configure a whitelist or block a risky behavior, you can create a custom rule.
        
    -   After you create a custom rule of a specific type, the system rule of the same type is automatically disabled.
        

### Create a custom rule

Security Center provides the same types of custom rules and system rules. You can configure whitelists and set Defense Action to Block for custom rules.

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Container Protection** > **Proactive Defense for Containers**.
    
3.  In the Rule Type section, click **Container Escape Prevention**.
    
4.  On the **Custom Rules** tab, click **Create Rule**.
    
5.  In the **Create Rule** panel, configure the parameters and click **Next**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Rule Name**
    
    Enter a name for the rule.
    
    **Rule Type**
    
    Select a rule type from the drop-down list.
    
    You can select a rule type based on your security requirements.
    
    After you select a type, all check items that are supported for the type are selected. If you do not require specific check items, you can clear the check items.
    
    You can view the supported rule types and check items in the Security Center console.
    
    **Defense Action**
    
    Specify the action that is performed after the rule is triggered. Valid values:
    
    -   **Alert**: Security Center only generates alerts when risks specified in the rule are detected.
        
    -   **Block**: Security Center generates alerts and blocks the related processes or operations when risks specified in the rule are detected.
        
    
    **Important**
    
    A rule may be triggered in some normal business scenarios. When you configure a rule, we recommend that you set the Defense Action parameter to Alert and check whether false positive alerts are generated within a period of time. If no false positive alerts are generated, change the value of the Defense Action parameter to Block.
    
    **Add to Whitelist**
    
    Click **Create Rule** and enter the tag name of the image that you want to add to the whitelist. You can add up to 20 images to the whitelist.
    
    Fuzzy match is supported by using keywords. For example, if you want to add the image whose address is `yundun-example-registry.cn-hangzhou.aliyuncs.com/yundun-example/yun-repo:test` to the whitelist, you can enter one of the following keywords:
    
    -   `yun-repo`
        
    -   `test`
        
    -   `yun-repo:test`
        
    -   `repo:test`
        
    
    **Important**
    
    After you add an image to the whitelist, Security Center does not detect escape behaviors on the image. Proceed with caution.
    
    After you complete this step, the rule is displayed in the rule list.
    
6.  Select the clusters that you want to protect and click **OK**.
    
    You can select only clusters that are connected to Security Center. If you want Security Center to protect a self-managed Kubernetes cluster, you must connect the cluster to Security Center. For more information, see [Add a self-managed Kubernetes cluster to Security Center](/help/en/security-center/user-guide/connect-a-self-managed-kubernetes-cluster-to-security-center#task-2066813).
    

### View the alerts that are generated

After you create and enable a rule of the container escape prevention type, you can perform the following operations to view the alerts that are generated: Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas), choose Detection and Response > Alerts, and then select **Container Escape Prevention** for Alert Type. The alerts that are generated based on the container escape prevention feature are divided into the following types based on the value of the Defense Action parameter in the rule:

-   If the Defense Action parameter is set to **Alert** in a rule, an alert in the **Unhandled** state is generated when the rule is triggered. We recommend that you handle the alert at the earliest opportunity. For more information, see [View and handle alerts](/help/en/security-center/user-guide/view-and-handle-alert-events#concept-rlc-rts-sfb).![未处理告警](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4696610861/p595810.png)
    
-   If the Defense Action parameter is set to **Block** in a rule, an alert in the **Blocked** state is generated when the rule is triggered. This indicates that Security Center blocked container escapes. You do not need to handle the alert.![拦截成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4696610861/p595807.png)
    

### Manage a rule

-   View the protection scope of a rule
    
    Find the rule whose protection scope you want to view and click the number in the **Protection Scope** column. In the **Protection Scope** panel, view the clusters that are protected by the rule. The value in the **Interceptable Status** column indicates the status of the Security Center agent installed on the servers on which the clusters are deployed. The rule takes effect on the clusters only when the agent is in the Normal state. If the agent is in the Abnormal state, turn on the switch for **Malicious Host Behavior Prevention** or **Webshell Prevention** for the servers on which the clusters are deployed on the **Feature Settings** page. For more information about how to turn on the switches, see [Enable features on the Host Protection Settings tab](/help/en/security-center/user-guide/enable-features-on-the-host-protection-settings-tab).
    
-   Enable or disable a rule
    
    Find the rule that you want to manage and click the switch in the **Enable** column to enable or disable the rule.
    
-   Modify a rule
    
    Find the rule that you want to modify and click **Edit** in the **Actions** column to modify the name, type, status, action, and protection scope of the rule. The modifications take effect in 10 minutes.
    
-   Delete a rule
    
    **Important**
    
    -   A system rule cannot be deleted.
        
    -   After a rule is deleted, the rule cannot be restored. Before you delete a rule, make sure that you no longer require the rule.
        
    
    Find the rule that you want to delete and click **Delete** in the **Actions** column. In the message that appears, click **OK**.
    

## References

-   [View and handle alerts](/help/en/security-center/user-guide/view-and-handle-alert-events#concept-rlc-rts-sfb)
    
-   [Manage container assets](/help/en/security-center/user-guide/view-security-information-about-containers#task-2424021)
