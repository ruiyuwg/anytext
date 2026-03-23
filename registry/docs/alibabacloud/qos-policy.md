Use Quality of Service (QoS) policies to prioritize traffic on dedicated Express Connect circuits. High-priority traffic, such as voice and video, is scheduled first, ensuring critical services receive bandwidth even during congestion.

## **Before you begin**

-   You've enabled [outbound data transfer fees](/help/en/express-connect/product-overview/outbound-data-transfer-fees).
    
-   Ensure the target resource is a dedicated Express Connect circuit port. Shared ports or virtual border routers (VBRs) are not supported.
    
-   QoS policies apply to outbound traffic only. Configure inbound QoS on your on-premises gateway.
    

## **Core concepts**

Express Connect QoS policies support two priority levels: high-priority queues and standard queues. Add one or more traffic classification rules to each queue and a QoS policy schedules traffic by matching it to a priority queue. See the following table for key concepts:

**Term**

**Description**

High-priority queue

Traffic in this queue is forwarded first. You can create only one high-priority queue per policy.

Standard queue

Receives remaining bandwidth after high-priority traffic. Multiple standard queues share bandwidth based on their configured percentages. Unused bandwidth is redistributed automatically.

Traffic classification rule

Matches packets using a six-tuple: protocol, source/destination CIDR, source/destination port, and Differentiated Services Code Point (DSCP) value.

## **Use cases**

**Use case**

**Why use QoS**

Voice and video

Voice over IP (VoIP) and video conferencing are latency-sensitive. Use QoS policies to set priority queues and classify traffic rules to prevent dropped calls and image degradation.

Streaming media

Ensure continuous playback without buffering by allocating sufficient bandwidth.

Remote office (VPN)

Guarantee stable VPN connections for remote workers accessing corporate resources.

Data backup

Large backup jobs require low packet loss. Prioritize to reduce congestion-related failures.

## **Limits and quotas**

-   Maximum one high-priority queue per QoS policy.
    
-   Each Express Connect circuit port can associate with one QoS policy.
    
-   For quota details, see [Quotas](/help/en/express-connect/user-guide/quotas/).
    

## **Workflow**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0109669671/CAEQUxiBgMCi5Pye4BkiIDQ0OWI1OTM0Zjc1MTQ1Mzc5OTgyYjg1NTY4MTA4NTc04176414_20240123102429.660.svg)

## **Create a QoS policy**

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the destination region.
    
3.  In the navigation pane on the left, choose **QoS Policies**.
    
4.  On the **QoS Policies** page, click **Create QoS Policy**.
    
5.  On the **Create QoS Policy** page, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    Enter a name for the QoS policy.
    
    **Policy Description**
    
    (Optional) Enter a description.
    
    **Queue Information**
    
    -   **Queue Name**: Enter a name for the queue.
        
    -   **Queue Priority**: Select one of the following values:
        
        -   **High**: One per policy
            
        -   **Standard**: Two per policy.
            
    -   **Allocated Bandwidth**: For standard queues only. Set the percentage, which cannot exceed 100%.
        
    -   **Queue Description**: Enter a description.
        
    
    **Traffic Classification Rule**
    
    Add a traffic classification rule to the queue.
    
    -   **Rule Name**: Enter a name for the rule.
        
    -   **Priority**: 1-9000. A higher number indicates a higher priority. Priorities must be unique within the same policy.
        
    -   **Protocol Type**: Select the protocol type from the drop-down list.
        
    -   **CIDR Block Type**: IPv4 or IPv6.
        
    -   **Source CIDR Block**: The CIDR block of the traffic source.
        
    -   **Destination CIDR Block**: The CIDR block of the traffic destination.
        
    -   **Source Port**: The source port of the traffic packet.
        
        The value can be -1 or a number from 1 to 65535.
        
        Only single ports are supported, for example, **80/80**. Enter **\-1/-1** to specify all ports.
        
    -   **Destination Port**: The destination port of the traffic packet.
        
        The value can be -1 or a number from 1 to 65535.
        
        Only single ports are supported, for example, **80/80**. Enter **\-1/-1** to specify all ports.
        
    -   **DSCP**: 0–63. Leave blank (shows as -1) to ignore this field.
        
    -   **Remark DSCP**: Enable to modify the DSCP value of matched packets.
        
    -   **Rule Description**: Enter a description.
        
    

## **Add a queue to a QoS policy**

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com/physicalconnection).
    
2.  In the top navigation bar, select the destination region.
    
3.  In the navigation pane, choose **QoS Policies**.
    
4.  On the **QoS Policies** page, click the policy ID.
    
5.  On the **Queue** tab, click **Create Queue**.
    
6.  In the **Create Queue** dialog box, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Queue Name**
    
    Enter a name for the queue.
    
    **Queue Priority**
    
    Select **High** or **Standard**. If a high-priority queue exists, only standard is available.
    
    **Allocated Bandwidth**
    
    For standard queues, enter the bandwidth percentage. The sum cannot exceed 100%.
    
    **Queue Description**
    
    Enter a description.
    

## **Add a traffic classification rule to a queue**

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the destination region.
    
3.  In the navigation pane on the left, choose **QoS Policies**.
    
4.  On the **QoS Policies** page, click the policy ID.
    
5.  On the **Queue** tab, click the ID of the target queue. In the **Traffic Classification Rules** section, click **Create Rule**.
    
6.  In the **Create Rule** dialog box, configure the parameters and click **OK**. For parameter details, see [traffic classification rule](#524735f4d0k4g).
    

## Associate a QoS policy with a circuit

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com/).
    
2.  In the top navigation bar, select the destination region.
    
3.  In the navigation pane on the left, choose **QoS Policies**.
    
4.  On the **QoS Policies** page, find the target policy and do one of the following:
    
    -   Method 1: Click **Add Instance** in the **Actions** column.
        
    -   Method 2: Click the policy ID, go to **Associated Instances**, and click **Associate Instance**.
        
5.  Select the Express Connect circuit and click **OK**.
    

## **Manage QoS policies**

### **Detach an Express Connect circuit**

1.  In the navigation pane on the left, choose **QoS Policies**.
    
2.  On the **QoS Policies** page, click the ID of the target QoS policy.
    
3.  On the **Associated Instances** tab, find the target circuit. In the **Actions** column, click **Disassociate**.
    

### **Delete a QoS policy**

1.  In the navigation pane on the left, choose **QoS Policies**.
    
2.  On the **QoS Policies** page, find the target QoS policy. In the **Actions** column, click **Delete**.
    
3.  In the dialog box that appears, click **OK**.
