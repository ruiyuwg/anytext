This topic describes how to configure alert notifications of System for Cross-domain Identity Management (SCIM) credential expiration and Security Assertion Markup Language (SAML) signing certificate expiration of CloudSSO by using Cloud Config and CloudMonitor.

## **Scenarios**

### **Expiration of a SCIM credential**

You must create a SCIM credential when you configure SCIM user synchronization between CloudSSO and an enterprise identity provider (IdP). For more information, see [Manage SCIM credentials](/help/en/cloudsso/user-guide/manage-scim-credentials).

The validity period of the SCIM credential is one year. After the SCIM credential expires, SCIM synchronization is disabled. You must create another SCIM credential in advance for rotation. To ensure that SCIM synchronization settings remain valid, you can configure a SCIM credential expiration rule in Cloud Config and use CloudMonitor to send notifications when SAML signing certificates expire. This way, you can rotate the SCIM credential in advance.

### **Expiration of a SAML signing certificate**

When you configure single sign-on (SSO) between CloudSSO and an enterprise IdP, you must upload the metadata file of the enterprise IdP. The metadata file contains the SAML signing certificate of the enterprise IdP. CloudSSO obtains the validity period of the certificate from the metadata file. For more information, see [Configure SSO](/help/en/cloudsso/user-guide/configure-sso).

If the SAML signing certificate expires, SSO fails and users cannot log on to Alibaba Cloud by using CloudSSO. You must create another SAML signing certificate in advance for rotation. You can configure a SAML signing certificate expiration rule in Cloud Config and use CloudMonitor to send notifications when SAML signing certificates expire. This way, you can rotate the SAML signing certificate in advance.

## **Procedure**

Perform the following operations as a CloudSSO administrator:

### **Step 1: Create a rule in Cloud Config**

1.  Log on to the [Cloud Config console](https://confignew.console.alibabacloud.com).
    
2.  Click **Activate Now** to activate Cloud Config.
    
    **Note**
    
    If you have activated Cloud Config, skip this step.
    
3.  Create a rule.
    
    1.  In the left-side navigation pane, choose **Compliance & Audit** > **Rules**.
        
    2.  On the **Rules** page, click **Create Rule**.
        
    3.  In the **Select Create Method** step, select **Based on managed rule**, select a rule, and then click **Next**.
        
        Select **cloudsso-scim-credential-expired-check** or **cloudsso-directory-saml-expired-check**.
        
    4.  In the **Set Basic Properties** step, configure the parameters and click **Next**.
        
        In the **Parameter Settings** section, specify a value in the Expect Value column. The value specifies the number of days before the expiration date during which expiration notifications are sent. The default value is 90 days. You can change the value based on your business requirements.
        
        Retain the default values for other parameters.
        
    5.  In the **Set Effective Scope** step, view the selected resource types and click **Next**.
        
    6.  In the **Set Remediation** step, click **Submit**.
        
        You can turn on ****Set Remediation**** and configure template remediation or custom remediation for the rule as prompted. For more information about how to configure remediation, see [Overview of remediation settings](/help/en/cloud-config/latest/remediation-settings-overview).
        

### **Step 2: Configure a system event-triggered alert rule in the CloudMonitor console**

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  Create an alert contact.
    
    For more information, see [Create an alert contact](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#section-7dm-181-iz7).
    
3.  Create an alert contact group.
    
    For more information, see [Create an alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#section-qf9-we7-4xn).
    
4.  Create an event subscription policy.
    
    After Cloud Config delivers all non-compliance events to CloudMonitor, you can create an event subscription policy based on your business requirements to receive alert notifications for non-compliance events in emails.
    
    1.  In the left-side navigation pane, choose **Event Center** > **Event Subscription**.
        
    2.  On the **Subscription Policy** tab, click **Create Subscription Policy**.
        
    3.  On the **Create Subscription Policy** page, configure the parameters.
        
        -   **Basic Information**: Enter a name for the subscription policy.
            
        -   **Alert Subscription**: Set the **Subscription Type** parameter to **System events**. In the **Subscription Scope** section, set the **Products** parameter to **CloudConfig**, the **Event Type** parameter to **Notifications**, the **Event name** parameter to **ConfigurationNonCompliantNotification**, and the **Event Level** parameter to **Notification (Info)**. Enter one or more keywords in the **Event Content** field or leave this parameter empty. Leave the **Application grouping** and **Event Resources** parameters empty.
            
            **Note**
            
            -   For more information about the system events supported by Cloud Config, see the events listed on the [CloudConfig](https://cloudmonitor.console.alibabacloud.com/metric-meta//config/event) page.
                
            -   The information that you enter in the **Event Content** field is used to match the events. For example, if you enter **Critical** in the Event Content field, only rules whose **Risk Level** is **High** in Cloud Config are matched. You can leave this parameter empty or enter one or more keywords based on your business requirements.
                
            
        -   **Noise Reduction**: Use the default settings.
            
        -   **Notification**: Select the alert contact group that you created in [Step 2](/help/en/cloud-config/latest/419303#step-mmc-czd-ytg) from the Notification Configuration drop-down list. Use the default settings for the **Custom Notification Method** parameter.
            
            **Note**
            
            -   For more information about how to create a notification configuration, see the [Create a notification configuration policy](/help/en/cms/cloudmonitor-1-0/user-guide/manage-escalation-policies#section-grp-u0t-equ) section of the "Manage notification configurations" topic.
                
            -   CloudMonitor automatically sends alert notifications based on the notification methods for the alert contacts in the specified **alert contact group** and the corresponding alert levels in the **custom notification method**.
                
            
        -   **Push and Integration**: No configuration is required.
            
    4.  Click **Submit**.
        

## **References**

-   [Create a rule based on a managed rule](/help/en/cloud-config/latest/create-a-rule-based-on-a-managed-rule)
    
-   [Use CloudMonitor to trigger alert notifications for non-compliance events](/help/en/cloud-config/latest/419303)
