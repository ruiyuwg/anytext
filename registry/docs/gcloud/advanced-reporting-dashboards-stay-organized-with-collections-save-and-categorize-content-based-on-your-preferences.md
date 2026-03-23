-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Google Cloud CCaaS](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
-   [User Guides](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)

Send feedback

# Advanced reporting dashboards Stay organized with collections Save and categorize content based on your preferences.

With Contact Center AI Platform (CCAI Platform), you can use a variety of advanced reporting dashboards to gain insights into the performance of your contact center. You can quickly access the dashboards using the **Dashboard** menu. To access the advanced capabilities of the dashboards, however, you need to access them from the **Advanced Reporting Landing Page**.

Advanced reporting dashboards are available only in the following regions: `us-east1`, `us-central1`, `us-west1`, `europe-west2`, `asia-northeast1`, `northamerica-northeast1` and `australia-southeast1`. You can't turn on the advanced reporting extension unless your instance is in one of these regions. For more information, see [Before you begin](#before-you-begin).

## Before you begin

Before you can use advanced reporting dashboards, you need to turn on the advanced reporting extension.

**Important:** When you turn on the advanced reporting extension, the advanced reporting dashboards become available and the legacy CCAI Platform dashboards are no longer available.

To turn on the advanced reporting extension, follow these steps:

1.  In the Google Cloud console, go to the project selector dashboard and select the project that contains your instance.
    
    [Project selector dashboard](https://console.cloud.google.com/projectselector2/home/dashboard)
    
2.  In the navigation menu, click **CCAI Platform**.
    
    [CCAI Platform instances](https://console.cloud.google.com/contact-center-ai-platform)
    
    The **CCAI Platform instances** page appears.
    
3.  Click the instance that you want to edit. The **CCAI Platform instance Detail** page appears.
    
4.  Click **Edit \> Configure extensions**.
    
5.  For **Extensions**, select the **Advanced reporting** checkbox, and then click **Save**.
    

If the **Advanced reporting** checkbox is inactive, advanced reporting isn't available in this region.

## Open a dashboard using the Dashboard menu

You can quickly access all of the dashboards from the **Dashboard** menu of the CCAI Platform portal. When you access dashboards this way, you can change filter settings and view the results. However, you can't edit the dashboards or create custom dashboards. To use advanced dashboard capabilities, see [Get access to advanced capabilities](#get-access-to-advanced-capabilities).

To open a dashboard using the **Dashboard** menu, follow these steps:

1.  In the CCAI Platform portal, click **Dashboard**, and then click the dashboard that you want. If you don't see the **Settings** menu, click menu **Menu**.
    
2.  Optional: Change the filter settings, and then click ![Click the update icon to update.](/static/contact-center/ccai-platform/docs/images/icon-update.png) **Update**.
    

## Get access to advanced capabilities

You get access to [advanced capabilities](/contact-center/ccai-platform/docs/dashboards-advanced-capabilities) when you start from the **Advanced Reporting Landing Page**. From here you can create new custom dashboards based on tiles from other dashboards, create Looks and link them to dashboards, and use powerful editing capabilities to customize dashboards to suit your business needs.

The following is a list of the advanced reporting dashboards. Click a link to get details about a dashboard and instructions for opening the dashboard from the **Advanced Reporting Landing Page**.

-   [**Performance overview**](/contact-center/ccai-platform/docs/dashboards-perf-overview): get high-level performance information for your channels. Quickly assess performance and identify potential issues that might require attention, such as SLA degradation or queue jams.
    
-   [**Real-time channel performance**](/contact-center/ccai-platform/docs/dashboards-real-time-channel-perf): get key performance indicators (KPIs) that provide a real-time overview of call and chat performance.
    
-   [**Queue monitoring**](/contact-center/ccai-platform/docs/dashboards-real-time-queue-monitor): monitor the performance of your queues in real time. Identify when an incident occurs and the time of resolution. Monitor talk time, wrap-up time, and historical trends.
    
-   [**Agent monitoring**](/contact-center/ccai-platform/docs/dashboards-real-time-agent-monitoring): get instant visibility into the status and performance of agents on your platform. See who is on a call or chat and who is available. Evaluate agent performance during interactions to provide immediate feedback in the moment. Get individual performance metrics.
    
-   [**Connected calls status**](/contact-center/ccai-platform/docs/dashboards-calls-connected): see call durations, hold times, current sentiment scores, and which agents are handling interactions.
    
-   [**Connected chats status**](/contact-center/ccai-platform/docs/dashboards-chats-connected): see chat durations, hold times, current sentiment scores, and which agents are handling interactions.
    
-   [**Channel interval**](/contact-center/ccai-platform/docs/dashboards-channel-interval): see important contact center KPIs for call and chat interactions. View channel data in 30 minute intervals for the current week or by date for data older than a week. Use dashboard data for trend reporting, comparison studies, resourcing, and forecasting.
    
-   [**Transfer**](/contact-center/ccai-platform/docs/dashboards-transfers): get an overview of transfer interactions, including queue name, agent name, time spent in third-party interactions, and whether transfers are warm or cold.
    
-   [**Queue group**](/contact-center/ccai-platform/docs/dashboards-queue-group-perf): see an overview of real-time and historical data for queue groups. See the number of calls waiting in queues and the rate at which customers are hanging up before reaching an agent. Use data on underperforming and overperforming queues to make adjustments in routing or staffing.
    
-   [**Queue performance**](/contact-center/ccai-platform/docs/dashboards-queue-performance): get performance metrics by queue for your call and chat sessions. This includes queue interaction volume, abandons, handle time, callbacks, sentiment, and CSAT.
    
-   [**Queue interval**](/contact-center/ccai-platform/docs/dashboards-queue-interval): see how successfully queues are meeting service level agreement (SLA) targets over 30-minute intervals for a full day. See the total number of calls handled, handle times, and abandoned contacts by interval.
    
-   [**All interactions**](/contact-center/ccai-platform/docs/dashboards-all-interactions): see data on a wide variety of interaction types for calls and chats.
    
-   [**Abandons**](/contact-center/ccai-platform/docs/dashboards-abandons): get insights into abandons that occur for calls and chats, including the number and type of abandons.
    
-   [**Agent performance**](/contact-center/ccai-platform/docs/dashboards-agent-performance): get a summary of the overall performance of your contact center without having to run performance reports. See what's in-queue, maximum wait times, call or chat volumes, response times, agent statuses, virtual agent performance, and more. Use this data to evaluate agent performance and identify areas for improvement.
    
-   [**Agent availability**](/contact-center/ccai-platform/docs/dashboards-agent-availability): see information about agents logging in and logging out of the agent adapter, including the log out reason. You can also track when agents change their availability preferences.
    
-   [**Agent activity timeline**](/contact-center/ccai-platform/docs/dashboards-agent-activity-timeline): track an agent's activities based on how their status changes over time.
    
-   [**Virtual agent**](/contact-center/ccai-platform/docs/dashboards-virtual-agent): evaluate the performance of your virtual agents to find areas for improvement.
    
-   [**Email performance**](/contact-center/ccai-platform/docs/dashboards-email-performance): get insights into email operations with metrics like sessions completed, sessions unopened, and average first time to respond.
    
-   [**Campaigns**](/contact-center/ccai-platform/docs/dashboards-campaigns): get real-time and historical performance metrics for call campaigns, including call outcomes, campaign volumes, and agent metrics. Managers can use this information to monitor call campaigns and make data-driven decisions to improve campaign performance.
    
-   [**Voicemails**](/contact-center/ccai-platform/docs/dashboards-voicemails): get insights into the volume of voicemails received by your contact center and the performance of your agents in responding to them.
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
