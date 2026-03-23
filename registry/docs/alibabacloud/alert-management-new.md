The Alert Management sub-service of Managed Service for Prometheus provides features such as alert convergence, notification, and automatic escalation to quickly detect and clear business alerts. The details of these features are as follows:

-   [Prometheus Alert Rules](/help/en/prometheus/user-guide/create-an-alert-rule-for-a-prometheus-instance) page: Create and view Prometheus alert rules, including the alert name, tag, and status.
    
-   [Prometheus Alert Rule Templates](/help/en/prometheus/user-guide/create-and-manage-an-alert-rule-template) page: Create and view Prometheus alert rule templates for multiple Prometheus instances across regions, including the template name, detection type, and alert level.
    
-   Alert management:
    
    -   [Alert Sending History](/help/en/prometheus/user-guide/view-historical-alerts) page: Filter, view, and manage the alerts that are dispatched based on notification policies.
        
    -   [Alert Event History](/help/en/prometheus/user-guide/view-historical-alert-events) page: Filter and view all alert events.
        
    -   **Alert Event Analysis** page: Customize filter conditions for analyzing existing alert events in real time in various scenarios.
        
    -   [Notification Objects](/help/en/prometheus/user-guide/manage-notification-objects/) page: Send notifications to your contacts through phone, text message, email, DingTalk, WeCom, and Webhook.
        
    -   [Notification Policy](/help/en/prometheus/user-guide/create-a-notification-policy) page: Set notification policies for alert events. When the matching rules in a policy are triggered, the system sends an alert notification to the object using the specified method.
        
    -   **Silence Policies** page: Set silence policies for alert events. When the matching rules in a policy are triggered, the events are silenced and are not matched by a notification policy. This feature can converge alerts and minimize alert storms.
        
    -   [Escalation Policies](/help/en/prometheus/user-guide/configure-an-escalation-policy) page: Set escalation policies in a notification policy for escalating long-standing unresolved alerts to the contacts using the methods that you specify.
