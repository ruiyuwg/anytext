On-call schedules define which O&M engineers receive alert notifications and when. Each schedule assigns shifts to engineers in a defined rotation. When an alert fires, ARMS sends notifications only to the engineer currently on duty -- by phone call, text message, email, or DingTalk message -- rather than the entire team.

**Important**

A schedule does not trigger notifications on its own. You must link it to a notification policy or escalation policy for alerts to reach on-duty engineers. See Next steps.

## How schedules work

A schedule contains one or more shifts. Each shift defines:

-   **Who** is on duty -- one or more contacts rotating in a set order
    
-   **When** the shift starts and what hours it covers each day
    
-   **How often** contacts rotate -- daily, weekly, or a custom interval
    

**Note**

On-duty time ranges across shifts within the same schedule cannot overlap.

## Prerequisites

Before you begin, make sure that you have:

-   A DingTalk, Lark, or WeCom group for shift change notifications, with all participating O&M engineers added to the group
    
-   All participating O&M engineers added as contacts in ARMS. See [Contacts](/help/en/arms/alarm-operation-center/contacts#concept-42953-zh)
    
-   A chatbot created for the DingTalk or WeCom group to receive notifications. See [DingTalk chatbots](/help/en/arms/alarm-operation-center/dingtalk-chatbots#concept-42953-zh)
    

## Create a schedule

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
2.  Click the **Schedule Management** tab, and then click **Create Schedule**.
    
3.  Enter a name for the schedule in the text box at the top of the right section.
    
4.  In the **Shift 1** section, configure the following parameters:
    
    **Parameter**
    
    **Description**
    
    Person on Duty
    
    Select the contacts who rotate through this shift. After selecting contacts, drag them to set the rotation order. Contacts rotate in the order shown. Only O&M engineers already added as contacts appear in this list.
    
    Start Time
    
    The date when the shift rotation begins.
    
    Set On-duty Time
    
    The daily time range during which this shift is active, for example, 09:00--18:00.
    
    Shift Change Cycle
    
    How often contacts rotate: **Every Day** -- each contact covers one day, then hands off to the next. **Weekly** -- each contact covers one full week. **Custom** -- each contact covers a specified number of hours.
    
5.  (Optional) Click **\+ Add Shift** to add more shifts. Use multiple shifts to cover different time ranges within the same day -- for example, one shift for business hours and another for after-hours coverage.
    
6.  Click **Preview** to verify the schedule.
    
    ![Schedule preview](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1059805461/p341376.png)
    
7.  From the **Shift Change Notification** drop-down list, select the chatbot for the group that receives shift change notifications.
    
8.  Click **Save**.
    

The new schedule appears in the left section of the **Shift Management** tab.

## Assign a substitute

If an O&M engineer is unavailable for a scheduled shift, assign a substitute to cover it. This reassigns only the specific shift without changing the underlying schedule.

1.  In the left section of the **Shift Management** tab, click the schedule name. In the right section, click **Create Substitute**.
    
2.  In the **Create Substitute** dialog box, set the Shift Time and Substitute parameters, and then click **OK**. The updated assignment is reflected in the schedule.
    
    ![Create Substitute dialog box](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2059805461/p341419.png)
    
    ![Schedule after substitute assignment](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2059805461/p341420.png)
    
3.  (Optional) To replace an existing substitute, click **Current Substitute** in the upper-right corner of the tab, delete the current substitute, and then assign a new one.
    
    ![Delete substitute](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2059805461/p341422.png)
    

## Manage schedules

The **Shift Management** tab supports the following operations:

**Action**

**Steps**

View engineers in a schedule

Click the expand icon to the left of the schedule name, and then click an engineer's name to view their assigned shifts.

Edit or delete a schedule

Click the more icon to the right of the schedule name, and then click **Edit** or **Delete**.

Edit, refresh, or delete from the detail view

Click the schedule name. In the upper-right corner, use the corresponding icons.

![Schedule management icons](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2059805461/p342323.png)

## Next steps

A schedule takes effect only after you link it to a policy. Choose one of the following:

-   **Notification policy:** Add the schedule so that alert notifications go directly to the on-duty engineer. See [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies#concept-rr3-55h-hhb).
    
-   **Escalation policy:** Add the schedule to an escalation level so that unresolved alerts are routed to the on-duty engineer at that level. See [Configure an escalation policy](/help/en/arms/alarm-operation-center/configure-an-escalation-policy#concept-rr3-55h-hhb).
