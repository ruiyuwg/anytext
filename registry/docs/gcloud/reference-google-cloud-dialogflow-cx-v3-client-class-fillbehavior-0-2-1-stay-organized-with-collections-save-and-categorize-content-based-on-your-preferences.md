-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow Cx V3 Client - Class FillBehavior (0.2.1) Stay organized with collections Save and categorize content based on your preferences.

0.10.2 (latest) 0.10.1 0.9.2 0.8.1 0.7.2 0.6.0 0.5.2 0.4.1 0.3.4 0.2.1 0.1.1

Reference documentation and code samples for the Google Cloud Dialogflow Cx V3 Client class FillBehavior.

Configuration for how the filling of a parameter should be handled.

Generated from protobuf message `google.cloud.dialogflow.cx.v3.Form.Parameter.FillBehavior`

## Namespace

Google \\ Cloud \\ Dialogflow \\ Cx \\ V3 \\ Form \\ Parameter

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ initial_prompt_fulfillment`

`[Google\Cloud\Dialogflow\Cx\V3\Fulfillment](/php/docs/reference/cloud-dialogflow-cx/0.2.1/V3.Fulfillment)`  

Required. The fulfillment to provide the initial prompt that the agent can present to the user in order to fill the parameter.

`↳ reprompt_event_handlers`

`array<[Google\Cloud\Dialogflow\Cx\V3\EventHandler](/php/docs/reference/cloud-dialogflow-cx/0.2.1/V3.EventHandler)>`  

The handlers for parameter-level events, used to provide reprompt for the parameter or transition to a different page/flow. The supported events are: \* `sys.no-match-<N>`, where N can be from 1 to 6 \* `sys.no-match-default` \* `sys.no-input-<N>`, where N can be from 1 to 6 \* `sys.no-input-default` \* `sys.invalid-parameter` `initial_prompt_fulfillment` provides the first prompt for the parameter. If the user's response does not fill the parameter, a no-match/no-input event will be triggered, and the fulfillment associated with the `sys.no-match-1`/`sys.no-input-1` handler (if defined) will be called to provide a prompt. The `sys.no-match-2`/`sys.no-input-2` handler (if defined) will respond to the next no-match/no-input event, and so on. A `sys.no-match-default` or `sys.no-input-default` handler will be used to handle all following no-match/no-input events after all numbered no-match/no-input handlers for the parameter are consumed. A `sys.invalid-parameter` handler can be defined to handle the case where the parameter values have been `invalidated` by webhook. For example, if the user's response fill the parameter, however the parameter was invalidated by webhook, the fulfillment associated with the `sys.invalid-parameter` handler (if defined) will be called to provide a prompt. If the event handler for the corresponding event can't be found on the parameter, `initial_prompt_fulfillment` will be re-prompted.

### getInitialPromptFulfillment

Required. The fulfillment to provide the initial prompt that the agent can present to the user in order to fill the parameter.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\Cx\V3\Fulfillment](/php/docs/reference/cloud-dialogflow-cx/0.2.1/V3.Fulfillment)|null`

### hasInitialPromptFulfillment

### clearInitialPromptFulfillment

### setInitialPromptFulfillment

Required. The fulfillment to provide the initial prompt that the agent can present to the user in order to fill the parameter.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dialogflow\Cx\V3\Fulfillment](/php/docs/reference/cloud-dialogflow-cx/0.2.1/V3.Fulfillment)`  

**Returns**

**Type**

**Description**

`$this`

### getRepromptEventHandlers

The handlers for parameter-level events, used to provide reprompt for the parameter or transition to a different page/flow. The supported events are:

-   `sys.no-match-<N>`, where N can be from 1 to 6
-   `sys.no-match-default`
-   `sys.no-input-<N>`, where N can be from 1 to 6
-   `sys.no-input-default`
-   `sys.invalid-parameter` `initial_prompt_fulfillment` provides the first prompt for the parameter.

If the user's response does not fill the parameter, a no-match/no-input event will be triggered, and the fulfillment associated with the `sys.no-match-1`/`sys.no-input-1` handler (if defined) will be called to provide a prompt. The `sys.no-match-2`/`sys.no-input-2` handler (if defined) will respond to the next no-match/no-input event, and so on. A `sys.no-match-default` or `sys.no-input-default` handler will be used to handle all following no-match/no-input events after all numbered no-match/no-input handlers for the parameter are consumed. A `sys.invalid-parameter` handler can be defined to handle the case where the parameter values have been `invalidated` by webhook. For example, if the user's response fill the parameter, however the parameter was invalidated by webhook, the fulfillment associated with the `sys.invalid-parameter` handler (if defined) will be called to provide a prompt. If the event handler for the corresponding event can't be found on the parameter, `initial_prompt_fulfillment` will be re-prompted.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setRepromptEventHandlers

The handlers for parameter-level events, used to provide reprompt for the parameter or transition to a different page/flow. The supported events are:

-   `sys.no-match-<N>`, where N can be from 1 to 6
-   `sys.no-match-default`
-   `sys.no-input-<N>`, where N can be from 1 to 6
-   `sys.no-input-default`
-   `sys.invalid-parameter` `initial_prompt_fulfillment` provides the first prompt for the parameter.

If the user's response does not fill the parameter, a no-match/no-input event will be triggered, and the fulfillment associated with the `sys.no-match-1`/`sys.no-input-1` handler (if defined) will be called to provide a prompt. The `sys.no-match-2`/`sys.no-input-2` handler (if defined) will respond to the next no-match/no-input event, and so on. A `sys.no-match-default` or `sys.no-input-default` handler will be used to handle all following no-match/no-input events after all numbered no-match/no-input handlers for the parameter are consumed. A `sys.invalid-parameter` handler can be defined to handle the case where the parameter values have been `invalidated` by webhook. For example, if the user's response fill the parameter, however the parameter was invalidated by webhook, the fulfillment associated with the `sys.invalid-parameter` handler (if defined) will be called to provide a prompt. If the event handler for the corresponding event can't be found on the parameter, `initial_prompt_fulfillment` will be re-prompted.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Dialogflow\Cx\V3\EventHandler](/php/docs/reference/cloud-dialogflow-cx/0.2.1/V3.EventHandler)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
