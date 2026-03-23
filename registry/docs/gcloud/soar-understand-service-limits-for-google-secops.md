-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Google Security Operations](https://docs.cloud.google.com/chronicle/docs)
-   [Guides](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

# Understand service limits for Google SecOps

Supported in:

Google secops [SOAR](/chronicle/docs/secops/google-secops-soar-toc)

This document provides details on the SOAR limits in Google SecOps.

## Ingestion limits

Type

Default amount

Maximum amount

Alerts per day

According to license

According to license

Alerts per case

20 alerts

90 alerts

Alert size

28 million characters (26.7 MB) per alert.

28 million characters (26.7 MB) per alert. Alerts that exceed this limit may be trimmed. For more information, see [Handle large alerts.](/chronicle/docs/soar/investigate/working-with-alerts/handle-large-alerts)

Events in alert

500 events

500 events (Events that exceed this amount are removed from the alert.)

Entities in alert or case

500 entities in the same case or alert.

500 entities in the same case or alert

Relations in alert or case

500 relations in the same case or alert

500 relations in the same case or alert. The same case or alert can contain both 500 entities and 500 relations.

Timeframe for grouping alerts

2 hours

24 hours (maximum).

Timeframe for overflow case grouping

2 hours

24 hours (maximum). For more information, see [Define alert overflow](/chronicle/docs/soar/investigate/working-with-alerts/define-alert-overflow-admin).

Alert grouping into overflow case

50

100

## Playbook limits

Type

Default amount

Maximum amount

Playbook import size

N/A

10 MB

Playbooks per day

Based on the amount of alerts according to your license. Each alert includes one playbook automatically attached.

Based on the amount of alerts according to your license

Playbooks per alert

10 in total - 1 automatically and 9 can be manually added

10 in total

Parallel actions

5 actions per step

5 actions per step. For more information, see [Using parallel actions.](/chronicle/docs/soar/respond/working-with-playbooks/using-parallel-actions)

Playbook sync actions run time

10 minutes

20 minutes

Playbook async actions runtime

-   10 minutes for script timeout
-   1 hour for async polling interval
-   1 day for async action timeout

-   20 minutes for script timeout
-   24 hours for async polling interval
-   1 day for async action timeout

Playbook JSON result

28 million characters (26.7 MB)

28 million characters (26.7 MB)

## Case and user management limits

Type

Default amount

Maximum amount

Case - entity properties

100 properties per entity

100 properties per entity

File size uploaded on case wall

50 MB

50 MB

Roles in platform

20 roles

20 roles

Case stages

20 stages

20 stages

## System limits

Type

Default amount

Maximum amount

Data retention

12 months

60 months

API rate

4000 requests per minute

N/A

Size of libraries added to IDE integration

N/A

500 MB

Manual Python execution: Run connector once, Run manual action, and IDE - Play item

5-minute timeout

5-minute timeout

## Gemini Case summary limits

Gemini Case summary feature supports case summary generation at a rate of 2 cases per minute, with a maximum of 100 cases per hour and is subject to Vertex capacity constraints.

**Need more help?** [Get answers from Community members and Google SecOps professionals.](https://security.googlecloudcommunity.com/google-security-operations-2)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
