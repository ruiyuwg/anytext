You can deliver resource change logs and resource non-compliance events as messages to a specific Simple Message Queue (formerly MNS) topic in Cloud Config. You can also specify the push method and content of the topic based on your business requirements.

## Prerequisites

-   SMQ is activated. For more information, see [Activate SMQ and authorize RAM users to access SMQ](/help/en/mns/getting-started/activate-message-service-and-grant-permissions#task234).
    
    **Important**
    
    You are not charged for activating SMQ. You are charged when Cloud Config delivers resource data to an SMQ topic. For more information, see [Billing](/help/en/mns/product-overview/billing-overview).
    
-   Object Storage Service (OSS) is activated and an OSS bucket is created. This prerequisite must be met if you want to deliver large files to an OSS bucket. For more information, see [Get started by using the OSS console](/help/en/oss/user-guide/console-quick-start).
    
    **Note**
    
    Make sure that the settings of the **Region**, **Account**, and **Bucket Name** parameters in the Recipient Address For Large Files section are the same as those of the recipient address for regular files.
    

## **Background information**

If you do not want SMQ to generate fees, you can delete the SMQ topic to which Cloud Config delivers resource data in the SMQ console. After you delete the SMQ topic, the delivery task in Cloud Config becomes invalid and the resource data is no longer delivered to the SMQ topic. For more information, see [Delete a topic](/help/en/mns/user-guide/manage-topics-in-the-console#section-xpw-jt5-kzw).

## **Procedure**

1.  Log on to the [Cloud Config console](https://confignew.console.alibabacloud.com).
    
2.  Optional. In the upper-left corner, select an account group.
    
    This operation is required only if you are using a management account of a resource directory. Otherwise, you do not need to perform the operation.
    
3.  In the left-side navigation pane, click **Deliveries**.
    
4.  On the **Deliveries** page, click **Create Delivery** in the upper-left corner.
    
5.  On the **Create Delivery** page, configure the **Delivery Name** parameter, set **Channel Type** to **Simple Message Queue (formerly MNS)**, and then configure the parameters.
    
    The following table describes the parameters for resource data delivery.
    
    **Parameter**
    
    **Description**
    
    **Content**
    
    The type of resource data that you want to deliver to the SMQ topic. Valid values:
    
    -   **Historical Configuration Changes**: resource change logs. When the configuration of a resource changes, Cloud Config delivers the resource change log to the SMQ topic.
        
    -   **Noncompliance Resource Events**: resource non-compliance events. If a resource is evaluated as non-compliant, Cloud Config delivers the resource non-compliance event to the SMQ topic.
        
    
    **Topic Source**
    
    The source of the SMQ topic. Valid values:
    
    -   **Create a topic in the account**: Creates a topic in the Cloud Config console. If this value is selected for this parameter, you must specify a topic name, region, and maximum message length, and then enable logging. The topic name must be unique within the account in the specified region.
        
    -   **Select an existing topic from the account**: Selects an existing SMQ topic. If you select this value for this parameter, you must select the topic name and region, specify the maximum message length, and then enable logging.
        
    -   **Select an existing topic from other enterprise management accounts or delegated accounts**: the Alibaba Cloud Resource Name (ARN) of the Logstore in the destination account. This parameter is displayed only if you log on to the SQM console by using a management account or delegated management account. The ARN contains the following information: **region**, **member account**, and **topic name**.
        
        You can deliver the resource data of your account and all member accounts in the resource directory to a topic within a specific member account. You can use only management accounts to configure the settings to deliver resource data. Member accounts do not have the permissions to configure the settings.
        
        **Note**
        
        If a delegated administrator account is configured by using a management account, the administrator account can be used to configure resource data delivery. For more information, see [Add a delegated administrator account](/help/en/cloud-config/latest/424945#section-z5n-yty-urd).
        
    
    **Minimum Risk Level of the Events to Subscribe**
    
    The lowest risk level of the events to which you want to subscribe. Valid values:
    
    -   **All Levels**
        
    -   **High**
        
    -   **Medium**
        
    -   **Low**
        
    
    For example, if you set this parameter to **Medium**, Cloud Config delivers non-compliance events at the **Medium** and **High** levels. Non-compliance events at the **Low** level are ignored.
    
    **Events Of Specified Resource Type**
    
    The resource type of the data that you want to deliver. For more information about the resource types supported by Cloud Config, see [Supported resource types and relationships in Cloud Config](/help/en/cloud-config/latest/alibaba-cloud-services-that-are-supported-by-cloud-config#concept-127411-zh).
    
    **Recipient Address For Large Files**
    
    The OSS bucket that is used to receive the large messages that Cloud Config delivers to the SMQ topic.
    
    -   If you configure this parameter, a message that Cloud Config delivers to the SMQ topic is automatically transferred to the specified OSS bucket when the message size exceeds 64 KB.
        
    -   If you leave this parameter empty, the excess part of a message that Cloud Config delivers to the SMQ topic is automatically discarded when the message size exceeds 64 KB.
        
    
6.  Click **OK**.
    
7.  Optional. In the **Confirm Operation** dialog box, click **OK**.
    
    This operation is required only if you are using a management account of a resource directory. Otherwise, you do not need to perform the operation.
    
    **Note**
    
    The newly created delivery task takes effect only on all members in the account group.
    

## What to do next

View the result of resource data delivery and download the JSON file that contains the delivered data.

1.  On the **Deliveries** page, click the newly created delivery ID.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5420429371/p914523.png)
    
2.  In the **Extended Information** section of the delivery details page, click the topic name.
    
    You are redirected to the Topics page in the SMQ console. On the Topics page, you can specify the push method and content of the topic. For more information, see [Publish a message](/help/en/mns/user-guide/manage-topics-in-the-console#section-4c1-pl8-g1d).
    
    For more information about sample files in the JSON format, see [Examples of resource change logs](/help/en/cloud-config/latest/events-examples-of-resource-change-logs#concept-1995688) and [Example of resource non-compliance events](/help/en/cloud-config/latest/events-example-of-resource-non-compliance-events#concept-2108211).
