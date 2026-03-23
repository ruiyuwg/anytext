Application Real-Time Monitoring Service (ARMS) sends alert notifications to DingTalk groups through chatbot webhooks. To configure a DingTalk group as a notification contact in ARMS, you first need the webhook URL of a custom chatbot in that group.

## Prerequisites

Before you begin, make sure that you have:

-   A DingTalk group for receiving alert notifications
    

## Add a custom chatbot and get the webhook URL

1.  Open the DingTalk desktop client and go to the group where you want to receive alerts. Click the **Group Settings** icon in the upper-right corner.
    
2.  In the **Group Settings** panel, click **Bot**.
    
3.  In the **Robot Management** panel, click **Add Robot**.
    
4.  In the **Robot** dialog box, click **Add Robot**, and then select **Custom**.
    
    ![Select Custom robot type](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5004259371/p740176.png)
    
5.  In the **Robot details** dialog box, click **Add**.
    
6.  In the **Add Robot** dialog box, configure the chatbot:
    
    ![Add Robot dialog box](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5004259371/p43303.png)
    
    1.  Set a profile picture and name for the chatbot.
        
    2.  Under **Security Setting**, select **Custom Keywords** and enter **alert** as a keyword.
        
    3.  Read the terms of service and select **I Acknowledge and Accept the DingTalk Custom Robot Service Terms of Service**.
        
    4.  Click **Finished**.
        
7.  Copy the webhook URL and click **OK**.
    
    ![Copy the webhook URL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2467758061/p43304.png)
    

## Next step

Configure the DingTalk group as a notification contact in ARMS to start receiving alert notifications. See [DingTalk chatbots](/help/en/arms/alarm-operation-center/dingtalk-chatbots).
