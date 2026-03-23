-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow Cx V3 Client - Class Transition (0.1.1) Stay organized with collections Save and categorize content based on your preferences.

0.10.2 (latest) 0.10.1 0.9.2 0.8.1 0.7.2 0.6.0 0.5.2 0.4.1 0.3.4 0.2.1 0.1.1

Reference documentation and code samples for the Google Cloud Dialogflow Cx V3 Client class Transition.

A transition coverage in a transition route group.

Generated from protobuf message `google.cloud.dialogflow.cx.v3.TransitionRouteGroupCoverage.Coverage.Transition`

## Namespace

Google \\ Cloud \\ Dialogflow \\ Cx \\ V3 \\ TransitionRouteGroupCoverage \\ Coverage

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ transition_route`

`[Google\Cloud\Dialogflow\Cx\V3\TransitionRoute](/php/docs/reference/cloud-dialogflow-cx/0.1.1/V3.TransitionRoute)`  

Intent route or condition route.

`↳ covered`

`bool`  

Whether the transition route is covered by at least one of the agent's test cases.

### getTransitionRoute

Intent route or condition route.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\Cx\V3\TransitionRoute](/php/docs/reference/cloud-dialogflow-cx/0.1.1/V3.TransitionRoute)|null`

### hasTransitionRoute

### clearTransitionRoute

### setTransitionRoute

Intent route or condition route.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dialogflow\Cx\V3\TransitionRoute](/php/docs/reference/cloud-dialogflow-cx/0.1.1/V3.TransitionRoute)`  

**Returns**

**Type**

**Description**

`$this`

### getCovered

Whether the transition route is covered by at least one of the agent's test cases.

**Returns**

**Type**

**Description**

`bool`

### setCovered

Whether the transition route is covered by at least one of the agent's test cases.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
