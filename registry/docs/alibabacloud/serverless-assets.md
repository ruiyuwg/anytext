If you deploy your business in a serverless environment on Alibaba Cloud, you can use the serverless security feature of Security Center to protect your serverless assets. This feature detects common threats, scans for vulnerabilities, and checks for baseline risks. This topic describes how to connect your serverless assets to Security Center and enable security protection for them.

## **Features**

### **Supported asset instances**

-   Elastic Container Instance (ECI) created from managed ACK clusters, dedicated ACK clusters, and ACK Serverless clusters.
    
-   ECI instances created from Container Compute Service (ACS).
    
-   Serverless App Engine (SAE) instances.
    
    **Important**
    
    For stability reasons, SAE instances with an instance type of 0.5 cores or less cannot be connected or scanned.
    
-   Lingjun resources of Platform for AI (PAI).
    

### **Supported security features**

Security Center provides the following security features for serverless assets.

-   Threat detection: Detects and handles common security threats in serverless assets, such as back door (WebShell) files, suspicious network connections, and abnormal process behaviors. For more information about supported checks, see [Overview of CWPP (cloud workload) security alerts](/help/en/security-center/user-guide/overview-6#p-m57-s8m-e9u).
    
-   Vulnerability scanning: On the **Risk Governance** > **Vulnerabilitys** page, you can click the number under **Disclosed Vulnerabilities** to open the **Detectable Vulnerabilities** panel and view the list of supported vulnerabilities.
    
    For application vulnerabilities, only scanning is supported. Fixing them is not supported. Application vulnerabilities are risks that are found by scanning the software installed on your servers. To eliminate security risks, you must manually upgrade or modify the software application configuration based on the fixing suggestions provided in the vulnerability details.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2640935071/p735698.png)
    
-   Baseline risk checks: Detects and handles baseline risks in serverless assets. Examples include the **Restrict containers from running as root** and **Prohibit containers with kernel capabilities** checks in the **Kubernetes (ECI) Pod General International Security Best Practices Baseline**. For more information about supported baseline checks, see [Baseline check items](/help/en/security-center/user-guide/baseline-check/#section-22c-wk3-yyo).
    

Security Center classifies connected serverless assets into different instance types based on the container runtime status. The supported security features vary by instance type.

**Instance type**

**Supported security features**

Elastic Container Instance

-   Threat detection
    
-   Vulnerability scanning
    
-   Baseline risk checks
    

RunD container instance

Threat detection

## Billing

Starting July 31, 2024 (UTC+8), the public preview of the serverless security protection feature will end, and the free trial will no longer be available. To continue using the serverless security protection feature, you must enable **pay-as-you-go for Serverless Assets** in the console. For more information, see **_2\. Enable pay-as-you-go_** in this topic.

### **Billing start**

After you enable and authorize serverless assets, the serverless protection feature is billed using a pay-as-you-go, tiered pricing model based on monthly cumulative usage.

-   Billing method: Number of authorized vCores × Actual protection duration. The protection duration is measured in seconds and accumulated only when the client is online.
    
-   Billing cycle: Bills are settled daily and generated on the next day (T+1).
    
-   Price: Tiered pricing is used based on cumulative monthly usage. The prices are listed in the following table.
    
    **Important**
    
    The billing cycle for the first month starts from the day the feature is enabled to the end of that month. Subsequent billing cycles are calendar months, from the first day to the last day of the month.
    
    **Cumulative monthly usage (core-seconds, calculated per billing cycle)**
    
    **Price (****USD****/core/second)**
    
    **Fee calculation formula (U is the daily usage in core-seconds)**
    
    Tier 1: 0 to 200,000,000
    
    0.000003
    
    0.000003 × U (USD)
    
    Tier 2: 200,000,001 to 1,000,000,000
    
    0.000002
    
    0.000002 × (U - 200,000,000) + 0.000003 × 200,000,000 (USD)
    
    Tier 3: 1,000,000,001 to 9,999,999,999,999
    
    0.0000015
    
    0.0000015×(U-1,000,000,000)+0.000002×800,000,000+0.000003×200,000,000 (USD)
    
    For example, if your account has 20,000 cores of Serverless assets with the Security Center client attached, the daily fee is calculated as follows:
    
-   On the first day of the billing cycle, the cumulative monthly usage is 20,000 × 86,400 = 1,728,000,000 core-seconds. The usage from 0 to 200,000,000 core-seconds falls into **Tier 1**. The usage from 200,000,001 to 1,000,000,000 core-seconds falls into **Tier 2**. The usage from 1,000,000,001 to 1,728,000,000 core-seconds falls into **Tier 3**.
    
    Tiered billing is applied based on the unit price of the applicable tiers. The billing formula for the day is: **0.000003** (Unit price for Tier 1) × 200,000,000 + **0.000002** (Unit price for Tier 2) × 800,000,000 + **0.0000015** (Unit price for Tier 3) × (1,728,000,000 - 1,000,000,000) = **3,292** (USD).
    
-   From the second day of the billing cycle to the end of the cycle (the end of the month), the price for **Tier 3** is used.
    
    The daily billing formula is: **0.0000015** (Tier 3 unit price) × (20,000 × 86400) = **2,592** (USD).
    

### **Billing stop**

In the following scenarios, Alibaba Cloud immediately stops security detection and billing for the authorized serverless assets.

-   Stop billing for all serverless assets:
    
    -   On the **Overview** page of the Security Center console, in the **Pay-as-you-go Services** area, turn off the switch for **Serverless Assets**.
        
    -   At the top of the **Asset Center** > **Serverless Assets** page in the Security Center console, click **Stop Service**.
        
    -   Your Alibaba Cloud account has an overdue payment.
        
-   Stop billing for a specific serverless asset:
    
    On the **Assets** > **Serverless Asset** page of the Security Center console, you can detach the authorization for a specific asset. For more information, see **_3.2. Attach or detach authorization for assets_** in this topic.
    

## **1\. Install and start the Security Center client on ECI pods**

For ECI assets created from managed ACK clusters, dedicated ACK clusters, ACK Serverless clusters, and ACS clusters, you must install and start the Security Center client to use the serverless security protection features provided by Security Center.

You can install and start the Security Center client on ECI pods in the following ways.

#### Start the client on ECI pods in an ACK Serverless cluster

In the [Container Service for Kubernetes (ACK) console](https://cs.console.alibabacloud.com), go to the management page of the target cluster. In the navigation pane on the left, choose **Workloads** > **Pods**. Click **Create From YAML**. In the YAML template, add the `annotations` parameter under `spec > template > metadata` and set it to `k8s.aliyun.com/eci-aliyundun-enabled: "true"`.

The following is a sample YAML template:

```
apiVersion: apps/v1 # for versions before 1.8.0 use apps/v1beta1
kind: Deployment
metadata:
  name: nginx-deployment-basic
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      annotations:
        k8s.aliyun.com/eci-aliyundun-enabled: 'true'
      labels:
        app: nginx
    spec:
    #  nodeSelector:
    #    env: test-team
      containers:
      - name: nginx
        image: nginx:1.7.9 # replace it with your exactly <image_name:tags>
        ports:
        - containerPort: 80
        resources:
          limits:
            cpu: "500m"
```

If you create a resource from an image, you can add the pod annotation `k8s.aliyun.com/eci-aliyundun-enabled=true` in the **Advanced** section. For more information about how to create a resource, see [Create a stateless application from an image](/help/en/ack/serverless-kubernetes/user-guide/create-an-application-from-an-image).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2791234271/p822765.png)

#### Start the client on ECI pods in a managed or dedicated ACK cluster

#### Start the client on ECI pods in a managed or dedicated ACK cluster

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com), go to the management page of the cluster, and deploy the **ack-virtual-node** component to schedule pods to ECI. For more information, see [Schedule a pod to an ECI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods#section-nao-vu3-t7v).
    
2.  In the [ACK console](https://cs.console.alibabacloud.com), in the navigation pane on the left of the cluster management page, choose **Workloads** > **Pods**. Then, click **Create From YAML**. In the YAML template, add the `annotations` parameter under `metadata` and set it to `k8s.aliyun.com/eci-aliyundun-enabled: "true"`. Configure the `env` environment variable under `spec > containers` and set the container type to `ECI_CONTAINER_TYPE = sidecar`.
    
    The following is a sample YAML template:
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: test-aegis-alinux2-lifsea-x86
      labels:
        eci: "true"
      annotations:
        k8s.aliyun.com/eci-aliyundun-enabled: "true"
    spec:
      containers:
      - name: sidecar
        image: registry-vpc.cn-shanghai.aliyuncs.com/eci_open/centos:7
        command:
        - /bin/sh
        - -c
        args:
        - sleep inf
        env:
        - name: ECI_CONTAINER_TYPE
          value: sidecar
      - name: nginx
        image: registry-vpc.cn-shanghai.aliyuncs.com/eci_open/centos:7
        command:
        - /bin/sh
        - -c
        args:
        - sleep inf
    ```
    

#### **Start the client on ECI pods in an ACS cluster**

In the [Container Compute Service console](https://acs.console.alibabacloud.com), go to the management page of the target cluster. In the navigation pane on the left, choose **Workloads** > **Stateless**. Click **Create From YAML**. In the YAML template, add the `annotations` parameter under `spec > template > metadata` and set it to `security.alibabacloud.com/aliyundun-enabled: 'true'`. For more information, see [Overview of ACS pods](/help/en/cs/user-guide/acs-pod-instance-overview) and [Create a resource from a YAML file](/help/en/cs/user-guide/create-a-stateless-workload-deployment#6b79eb64733jl).

The following is a sample YAML template:

```
apiVersion: apps/v1 # for versions before 1.8.0 use apps/v1beta1
kind: Deployment
metadata:
  name: nginx-deployment-basic
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
        alibabacloud.com/compute-class: general-purpose
        alibabacloud.com/compute-qos: default
      annotations:
         security.alibabacloud.com/aliyundun-enabled: 'true'
    spec:
    #  nodeSelector:
    #    env: test-team
      containers:
      - name: nginx
        image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6 # replace it with your exactly <image_name:tags>
        ports:
        - containerPort: 80
        resources:
          limits:
            cpu: "500m"
```

If you create a resource from an image, you can add the pod annotation `security.alibabacloud.com/aliyundun-enabled=true` in the **Advanced Configuration** section. For more information about how to create a resource, see [Create a resource from an image](/help/en/cs/user-guide/create-a-stateless-workload-deployment#6b79eb64733jl).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6909034471/p928633.png)

## **2\. Enable pay-as-you-go**

#### **Enable serverless asset protection during purchase**

Users of the **Free Edition** and users who are on a **free trial** can enable serverless asset protection by purchasing a pay-as-you-go Security Center instance.

1.  Go to the [Security Center purchase page](https://yundun.console.aliyun.com/?spm=a3c0i.29460438.5478111640.5.50e7658bi51HlG&p=sas_buy#/standardBuy/ap-southeast-1) and log on with your Alibaba Cloud account.
    
2.  On the purchase page, set **Billing Method** to **Pay-as-you-go**. For **Serverless Asset Protection**, select **Yes**.
    
3.  Click **Custom Quota Binding**. In the **Custom Quota Binding** dialog box, you can select **All Servers** or **Specific Servers** to configure protection authorization for your target serverless assets.
    
    **Important**
    
    **If you do not configure custom binding, all assets are bound by default, and authorization is automatically attached to new assets.**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2422234271/p822600.png)
    
4.  Read Security Center Terms of Service, and then click **Order Now**.
    

Security Center automatically connects to the serverless assets (ECI instances and SAE applications) that are in the **Running** state under your Alibaba Cloud account. It then attaches authorization to the target serverless assets based on the **Authorization Management** configuration.

#### **Enable serverless asset protection for existing instances**

If you have purchased a paid edition of Security Center (Anti-virus, Premium, Enterprise, or Ultimate), you can enable the serverless asset protection feature.

1.  Log in to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Serverless Asset**. In the upper-left corner of the console, select the region where the assets that you want to protect are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Serverless Asset** page, click Activate Now.
    
    You can also turn on the **Serverless Asset Protection**switch in the **Pay-as-you-go** area on the right side of the **Overview** page.
    
4.  In the confirmation dialog box, you can click **Custom Quota Binding** to configure protection authorization for your target serverless assets, and then click **OK**.
    
    **Important**
    
    **If you do not configure custom binding,** serverless assets are authorized based on the following logic:
    
    -   If this is the first time you are enabling the feature, all assets are bound by default, and authorization is automatically attached to new assets.
        
    -   If you have enabled this feature before, authorization is automatically attached to the serverless assets that were previously authorized. If no ECI instances or SAE applications were authorized the last time, all assets are bound by default, and authorization is automatically attached to new assets.
        
    -   If your account has an overdue payment and you had the serverless asset feature enabled before the payment became overdue, the previously authorized serverless assets are automatically bound after you clear the overdue payment.
        
    
5.  In the confirmation dialog box, select **Security Center Service Level Agreement.**, and then click **Activate Now**.
    

## **3\. Manage authorized assets**

-   **Attach authorization**: To use the serverless security protection features, the Security Center client must be online, and authorization must be attached to the serverless asset.
    
-   **Detach authorization**: You can detach authorization from serverless assets that do not require protection.
    

### **3.1. Sync latest assets**

After you enable protection for serverless assets, you must sync the latest serverless asset information for both existing and new assets. This ensures that the Security Center client is installed and running on the assets that you want to protect.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  On the **Asset**
    
3.  **Serverless Asset** page, click **Synchronize Assets**.
    
    Security Center pulls the latest serverless asset information and refreshes the asset list.
    
    **Note**
    
    Syncing the latest asset information takes about one minute. Please wait.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6909034471/p928739.png)
    
4.  On the **Assets** > **Serverless Asset** page, find the target serverless asset in the asset list and check the color of the icon in the **Agent** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6909034471/p928821.png)
    
    -   **Green:** The client is online and **running**. After you attach authorization, you can use the serverless security protection features.
        
    -   **Gray:** The client is **offline** because it is not installed, the network is unstable, or for other reasons. After you attach authorization, security protection features are not supported.
        
        For more information, see **_1\. Install and start the Security Center client on ECI pods_** in this topic to check and install the Security Center client for the corresponding asset, and then restart the asset instance.
        
5.  After you create or restart a serverless asset instance, go to the **Assets** > **Serverless Asset** page and click **Synchronize Assets** to sync the latest asset information to Security Center.
    

### **3.2. Attach or detach authorization for assets**

After you start the Security Center client on a target asset instance and it is online, you can attach authorization to the asset to use the serverless security protection features. If you chose to bind all assets when you enabled the feature, you can also detach authorization from assets that do not require protection.

1.  On the **Assets** > **Serverless Asset** page, above the asset list, click **AInstances That Do Not Consume Quota** under **Quota Management**.
    
2.  In the **Quota Management** dialog box, select an operation type (**Add** or **Remove**). Select the target serverless assets as prompted, and then click **OK**.
    
    To automatically attach authorization to new serverless assets, select **Automatically Add New Assets**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6251494471/p825677.png)
    

## **4\. View and handle security risks**

After a serverless asset is connected to Security Center and authorization is attached, Security Center starts real-time security threat detection for the instance. Vulnerability scans and baseline risk checks are performed according to their respective scan cycles. You can go to the **Vulnerability Management** or **Baseline Check** page to view the latest check time.

The following steps describe how to view the security risk status of a serverless asset.

1.  On the **Assets** > **Serverless Asset** page, find the target asset in the asset list. If the **Risk Status** column shows **At-risk Instance**, it means that alerts, vulnerabilities, or baseline risks have been detected on the asset.
    
2.  Click the name of the target asset or click **View** in the **Actions** column for that asset to view its detailed risk information.
    
    Click the **Alerts**, **Vulnerabilities**, or **Configuration Risks** card to view the corresponding list of risk items.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0934491071/p735738.png)
    
3.  Handle security alerts.
    
    Click **Details** in the **Actions** column for the target alert to view its details and determine if it is a real risk.
    
    After your assessment, click **Handle** in the Actions column for the alert. If it is a real risk, choose to isolate it. If the alert does not need to be handled or can be ignored, you can add it to the whitelist, ignore it, or mark it as manually handled.
    
4.  Handle vulnerability risks.
    
    Click the **Vulnerabilities** card to view the vulnerabilities detected on the asset.
    
    Vulnerabilities are weaknesses that can be exploited by hackers. We recommend that you promptly handle all detected vulnerabilities. One-click fixing is not supported for application vulnerabilities. We recommend that you fix them manually based on the instructions in the vulnerability details. For more information, see [View and handle vulnerabilities](/help/en/security-center/user-guide/view-and-handle-vulnerabilities#section-hdc-igi-qob).
    
5.  Handle baseline risks.
    
    Click the **Configuration Risks** card to view the baseline risks detected on the asset. Click **Details** in the Actions column for the target risk to view its details and hardening suggestions. Decide whether to handle the baseline risk. Based on your decision, you can handle the risk or add it to the whitelist.
    
    Security Center supports fixing only some baseline risk items. If the **Fix** button is displayed in the **Risk Handling list** on the risk details page, it means that the risk item can be fixed in Security Center. You can then fix the baseline risk directly in Security Center.
