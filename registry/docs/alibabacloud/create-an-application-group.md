The application group feature allows you to manage resources from different services and regions by group. You can create application groups based on your business requirements. You can add servers, databases, or other resources that are related to the same business to an application group. You can also manage alert rules by application group.

## Background information

The following table describes the methods that you can use to create application groups and the Alibaba Cloud services that are supported by each method.

**Creation method**

**Description**

**Supported Alibaba Cloud service**

**Create an application group based on tags**

If tags are attached to your instances, you can specify a tag-based matching rule to create an application group. All instances that match the rule are automatically added to the application group. If an existing instance has a tag that is specified in the matching rule, an application group is automatically created for the tag. If a new instance has a tag that is specified in the matching rule, the instance is automatically added to the application group. Up to 3,000 instances can match a rule at a time.

For more information about how to create and attach tags in the Resource Management console, see [Add a custom tag](/help/en/resource-management/add-a-custom-tag#task-2537588).

-   Elastic Compute Service (ECS)
    
-   ApsaraDB for Redis
    
-   ApsaraDB for MongoDB
    
-   ApsaraDB RDS
    
-   Server Load Balancer (SLB)
    
-   Elasticsearch
    
-   PolarDB for MySQL (New)
    
-   AnalyticDB for PostgreSQL
    
-   AnalyticDB for MySQL
    
-   Function Compute
    
-   E-MapReduce
    
-   Anti-DDoS Proxy
    
-   Alibaba Cloud CDN
    
-   VPC Peering Connection
    
-   Elastic IP Address (EIP)
    
-   Internet Shared Bandwidth
    
-   NAT Gateway
    
-   Object Storage Service (OSS)
    
-   File Storage NAS (NAS)
    
-   Application Load Balancer (ALB)
    
-   PolarDB for Xscale (PolarDB-X) 1.0
    
-   ApsaraDB for OceanBase
    
-   HybridDB for MySQL
    
-   VPN Gateway
    
-   IPv6 Internet Bandwidth
    
-   OpenSearch
    
-   ApsaraMQ for Kafka
    

**Manually create an application group**

You can create a standard application group to manage existing instances based on your business requirements.

[Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491)

**Create an application group based on instance names**

You can create an application group by specifying a matching rule based on instance names. All instances that match the rule are automatically added to the application group.

-   ECS
    
-   ApsaraDB RDS
    
-   SLB
    
-   ApsaraDB for Redis
    
-   Tair DRAM-based instances (read/write splitting architecture)
    
-   Tair DRAM-based instances (standard architecture)
    
-   Tair DRAM-based instances (cluster architecture)
    
-   ApsaraDB for MongoDB (sharded cluster architecture)
    
-   ApsaraDB for MongoDB (replica set architecture)
    
-   ApsaraDB for MongoDB (standalone architecture)
    
-   PolarDB for MySQL
    

**Create an application group from a resource group**

You can create an application group from a resource group that you configure. Then, you can add all instances in the resource group to the application group.

For information about how to create a resource group in the Resource Management console, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).

-   ECS
    
-   ApsaraDB for Redis
    
-   ApsaraDB for MongoDB
    
-   ApsaraDB RDS
    
-   SLB
    
-   Elasticsearch
    
-   PolarDB
    
-   Alibaba Cloud CDN
    
-   EIP
    
-   Internet Shared Bandwidth
    
-   ALB
    
-   WAF
    
-   Container Service for Kubernetes (ACK)
    
-   Anti-DDoS Proxy
    
-   Anti-DDoS Origin Basic
    

## Create an application group based on tags

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Application Groups**.
    
3.  On the **Application Groups** tab, click **Create Application Group** in the upper-left corner.
    
4.  In the **Create Application Group** panel, set the **Creation Method** parameter to **Create Based on Tags**, and then configure the other parameters as needed. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Application Group Name**
    
    Cloud Monitor automatically generates a name for the application group.
    
    **Region**
    
    The region where the application group resides.
    
    **Resource Tag Key**
    
    The tag key of the instance. To automatically add instances, you can specify a matching rule based on the tag key and the tag value of a resource.
    
    You can create up to three tags. The tags are in the logical AND relation. You can select a tag as the prefix of the application group name.
    
    The name is generated in the `<Tag name>-<Tag value>-<Random string>` format.
    
    **Tag Value**
    
    The tag value of the instance. To automatically add instances, you can specify a matching rule based on the tag key and the tag value of a resource.
    
    Instances whose tag values **contain**, **start with**, **end with**, **do not contain**, or are **equal to** the value that you specify are automatically added to the application group. If you set the Tag Value parameter to **All**, all instances with the specified tag are added to the application group. A new instance that matches the rule is also added to the application group.
    
    You can create up to three tags. The tags are in the logical AND relation. You can select a tag as the prefix of the application group name.
    
    The name is generated in the `<Tag name>-<Tag value>-<Random string>` format.
    
    **Initialize Agent Installation**
    
    After you turn on **Initialize Agent Installation**, Cloud Monitor automatically installs the Cloud Monitor agent on the instances in the application group to collect monitoring data from the instances.
    
    By default, **Initialize Agent Installation** is turned on.
    
    **Receive Event Notifications**
    
    After you turn on **Receive Event Notifications**, Cloud Monitor automatically sends alert notifications when critical or warning events occur on the instances that are added to the application group.
    
    By default, **Receive Event Notifications** is turned on.
    
    **Alert Contact Group**
    
    The contact group to which alert notifications are sent.
    
    For information about how to create an alert contact group, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#section-qf9-we7-4xn).
    
    **Alert Templates**
    
    You can use an alert template to initialize the alert rules of the application group.
    
    For information about how to create an alert template, see [Create an alert template](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-template#task-1919409).
    
5.  Click **OK**.
    
    On the **Application Groups** tab, you can view the application group that you created.
    

## Manually create an application group

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Application Groups**.
    
3.  On the **Application Groups** tab, click **Create Application Group** in the upper-left corner.
    
4.  In the **Create Application Group** panel, set the **Creation Method** parameter to **Manually Create**, and then configure the other parameters as needed. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Application Group Name**
    
    The name of the application group.
    
    **Initialize Agent Installation**
    
    After you turn on **Initialize Agent Installation**, Cloud Monitor automatically installs the Cloud Monitor agent on the instances in the application group to collect monitoring data from the instances.
    
    By default, **Initialize Agent Installation** is turned on.
    
    **Receive Event Notifications**
    
    After you turn on **Receive Event Notifications**, Cloud Monitor automatically sends alert notifications when critical or warning events occur on the instances that are added to the application group.
    
    By default, **Receive Event Notifications** is turned on.
    
    **Alert Contact Group**
    
    The contact group to which alert notifications are sent.
    
    For information about how to create an alert contact group, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#section-qf9-we7-4xn).
    
5.  Click **OK**.
    
6.  On the **Group Resources** page of the application group, click **Manage Services and Resources**.
    
7.  In the **Add/Modify Group Resources** panel, select the cloud services and instances that are associated with the application group.
    
8.  Click **OK**.
    
    On the **Group Resources** page of the application group, you can view the information about the cloud services and instances that you added.
    
9.  On the **Group Resources** page of the application group, click the ![返回](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1879389461/p375902.png) icon to return to the **Application Groups** tab.
    
    On the **Application Groups** tab, you can view the application group that you created.
    

## Create an application group based on instance names

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Application Groups**.
    
3.  On the **Application Groups** tab, click **Create Application Group** in the upper-left corner.
    
4.  In the **Create Application Group** panel, set the **Creation Method** parameter to **Create Based on Instance Name**, and then configure the other parameters as needed. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Application Group Name**
    
    The name of the application group.
    
    **Dynamically Add Instances**
    
    Specify the matching rule. Cloud Monitor automatically adds instances to the application group based on the names of the cloud services and instances.
    
    You can click **Add Rule** to configure multiple rules. Select **Match All Conditions** or **Match Any Condition** based on your business requirements.
    
    **Initialize Agent Installation**
    
    After you turn on **Initialize Agent Installation**, Cloud Monitor automatically installs the Cloud Monitor agent on the instances in the application group to collect monitoring data from the instances.
    
    By default, **Initialize Agent Installation** is turned on.
    
    **Receive Event Notifications**
    
    After you turn on **Receive Event Notifications**, Cloud Monitor automatically sends alert notifications when critical or warning events occur on the instances that are added to the application group.
    
    By default, **Receive Event Notifications** is turned on.
    
    **Alert Contact Group**
    
    The contact group to which alert notifications are sent.
    
    For information about how to create an alert contact group, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#section-qf9-we7-4xn).
    
5.  Click **OK**.
    
    On the **Group Resources** page of the application group, you can view the information about the cloud services and instances that you added.
    
6.  On the **Group Resources** page of the application group, click the ![返回](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1879389461/p375902.png) icon to return to the **Application Groups** tab.
    
    On the **Application Groups** tab, you can view the application group that you created.
    

## Create an application group from a resource group

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Application Groups**.
    
3.  On the **Application Groups** tab, click **Create Application Group** in the upper-left corner.
    
4.  In the **Create Application Group** panel, set the **Creation Method** parameter to **Create from Resource Group** and configure the other parameters as needed. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Resource Group Name**
    
    Select a resource group in the Resource Management console.
    
    For information about how to create a resource group in the Resource Management console, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
    **Alert Contact Group**
    
    The contact group to which alert notifications are sent.
    
    For information about how to create an alert contact group, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#section-qf9-we7-4xn).
    
    **Initialize Agent Installation**
    
    After you turn on **Initialize Agent Installation**, Cloud Monitor automatically installs the Cloud Monitor agent on the instances in the application group to collect monitoring data from the instances.
    
    By default, **Initialize Agent Installation** is turned on.
    
    **Receive Event Notifications**
    
    After you turn on **Receive Event Notifications**, Cloud Monitor automatically sends alert notifications when critical or warning events occur on the instances that are added to the application group.
    
    By default, **Receive Event Notifications** is turned on.
    
5.  Click **OK**.
    
    On the **Application Groups** tab, you can view the application group that you created.
