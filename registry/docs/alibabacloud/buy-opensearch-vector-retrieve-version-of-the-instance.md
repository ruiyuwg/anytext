To use OpenSearch Vector Search Edition, purchase an instance through the OpenSearch console.

## Prerequisites

Before you begin, make sure that you have:

-   An [Alibaba Cloud account](https://account.aliyun.com/register/qr_register.htm) that has passed [real-name verification](https://account-console.alibabacloud.com/v2?spm=a2c4g.11186623.0.0.1fc23e06KwuG7c#/authc/types)
    
-   An AccessKey pair for your Alibaba Cloud account
    
    -   When you log on to the OpenSearch console for the first time, you are prompted to create an AccessKey pair before you proceed.
        
    -   An AccessKey pair is required to create and use an OpenSearch application.
        
    -   After you create an AccessKey pair for your Alibaba Cloud account, you can create an AccessKey pair for a Resource Access Management (RAM) user within the account. This allows you to access applications as the RAM user. For more information about how to grant permissions to a RAM user, see [RAM authorization](/help/en/open-search/developer-reference/api-searchengine-2021-10-25-ram).
        
-   A virtual private cloud (VPC). For more information, see [What is a VPC?](/help/en/vpc/what-is-vpc)
    

**Note**

-   To access OpenSearch Vector Search Edition instances as a RAM user, grant the `AliyunSearchEngineFullAccess` or `AliyunSearchEngineReadOnlyAccess` permission to the RAM user through your Alibaba Cloud account.
    

## Procedure

1.  Log on to the [OpenSearch console](https://opensearch.console.alibabacloud.com/cn-hangzhou/home). In the upper-left corner, switch to **OpenSearch Vector Search Edition**.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5300692471/p671810.png)

2.  In the left-side navigation pane, click **Instances**. On the **Instances** page, click **Create Instance**.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5300692471/p671809.png)

3.  On the buy page, select **Vector Search Edition** as the service edition and configure the following parameters:
    

**Parameter**

**Description**

**Region and Zone**

Select the region and zone for the instance.

**QRS Workers**

Set the number of Query Result Searcher (QRS) workers. For a single-worker instance, keep the default value of 0.

**QRS Worker Specifications**

Select the specifications for each QRS worker.

**Searcher Workers**

Set the number of Searcher workers.

**Searcher Worker Specifications**

Select the specifications for each Searcher worker.

**Total Storage Space of Single Searcher Worker**

Set the storage for each Searcher worker. Each worker includes a free storage quota. Purchase additional storage in increments of 50 GB. Storage that exceeds the free quota is billed separately.

**VPC**

Select the VPC. Use the same VPC as the Elastic Compute Service (ECS) instance that accesses OpenSearch Vector Search Edition.

**vSwitch**

Select the vSwitch. Use the same vSwitch as the ECS instance that accesses OpenSearch Vector Search Edition.

Specify a username and password for permission verification in queries. Do not use your Alibaba Cloud account credentials as the username and password. Click **Buy Now**.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5300692471/p671811.png)

**Note**

-   Specify the numbers and specifications of QRS workers and Searcher workers based on your business requirements. After you set the specifications, the fee is displayed on the [buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=opensearch_ha3post_public_cn).
    
-   If you select a different VPC or vSwitch from the ECS instance that accesses OpenSearch Vector Search Edition, the error `{'errors':{'code':'403','message':'Forbidden'}}` is returned.
    

4.  On the **Confirm Order** page, check the configurations, agree to the service agreement, and then click **Activate Now**.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5300692471/p671813.png)

5.  After the purchase completes, click **Console**. On the **Instances** page, verify that the new instance appears.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5254780371/p671815.png)

## Rename an instance

The instance name is assigned automatically. To rename the instance:

1.  On the **Instances** page, find the target instance and click **Manage** in the Actions column to open the instance details page.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5300692471/p671812.png)

2.  In the **Basic Information** section, click the Edit icon next to the instance name. In the dialog box, enter a new name and click **Confirm**.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5300692471/p671814.png)
