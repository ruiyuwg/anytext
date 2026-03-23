-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class InstanceGroupManagersApplyUpdatesRequest (1.27.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class InstanceGroupManagersApplyUpdatesRequest.

InstanceGroupManagers.applyUpdatesToInstances

Generated from protobuf message `google.cloud.compute.v1.InstanceGroupManagersApplyUpdatesRequest`

## Namespace

Google \\ Cloud \\ Compute \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ all_instances`

`bool`  

Flag to update all instances instead of specified list of “instances”. If the flag is set to true then the instances may not be specified in the request.

`↳ instances`

`array`  

The list of URLs of one or more instances for which you want to apply updates. Each URL can be a full URL or a partial URL, such as zones/\[ZONE\]/instances/\[INSTANCE\_NAME\].

`↳ minimal_action`

`string`  

The minimal action that you want to perform on each instance during the update: - REPLACE: At minimum, delete the instance and create it again. - RESTART: Stop the instance and start it again. - REFRESH: Do not stop the instance and limit disruption as much as possible. - NONE: Do not disrupt the instance at all. By default, the minimum action is NONE. If your update requires a more disruptive action than you set with this flag, the necessary action is performed to execute the update. Check the MinimalAction enum for the list of possible values.

`↳ most_disruptive_allowed_action`

`string`  

The most disruptive action that you want to perform on each instance during the update: - REPLACE: Delete the instance and create it again. - RESTART: Stop the instance and start it again. - REFRESH: Do not stop the instance and limit disruption as much as possible. - NONE: Do not disrupt the instance at all. By default, the most disruptive allowed action is REPLACE. If your update requires a more disruptive action than you set with this flag, the update request will fail. Check the MostDisruptiveAllowedAction enum for the list of possible values.

### getAllInstances

Flag to update all instances instead of specified list of “instances”. If the flag is set to true then the instances may not be specified in the request.

**Returns**

**Type**

**Description**

`bool`

### hasAllInstances

### clearAllInstances

### setAllInstances

Flag to update all instances instead of specified list of “instances”. If the flag is set to true then the instances may not be specified in the request.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getInstances

The list of URLs of one or more instances for which you want to apply updates. Each URL can be a full URL or a partial URL, such as zones/\[ZONE\]/instances/\[INSTANCE\_NAME\].

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setInstances

The list of URLs of one or more instances for which you want to apply updates. Each URL can be a full URL or a partial URL, such as zones/\[ZONE\]/instances/\[INSTANCE\_NAME\].

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getMinimalAction

The minimal action that you want to perform on each instance during the update: - REPLACE: At minimum, delete the instance and create it again. - RESTART: Stop the instance and start it again. - REFRESH: Do not stop the instance and limit disruption as much as possible. - NONE: Do not disrupt the instance at all. By default, the minimum action is NONE. If your update requires a more disruptive action than you set with this flag, the necessary action is performed to execute the update.

Check the MinimalAction enum for the list of possible values.

**Returns**

**Type**

**Description**

`string`

### hasMinimalAction

### clearMinimalAction

### setMinimalAction

The minimal action that you want to perform on each instance during the update: - REPLACE: At minimum, delete the instance and create it again. - RESTART: Stop the instance and start it again. - REFRESH: Do not stop the instance and limit disruption as much as possible. - NONE: Do not disrupt the instance at all. By default, the minimum action is NONE. If your update requires a more disruptive action than you set with this flag, the necessary action is performed to execute the update.

Check the MinimalAction enum for the list of possible values.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getMostDisruptiveAllowedAction

The most disruptive action that you want to perform on each instance during the update: - REPLACE: Delete the instance and create it again. - RESTART: Stop the instance and start it again. - REFRESH: Do not stop the instance and limit disruption as much as possible. - NONE: Do not disrupt the instance at all. By default, the most disruptive allowed action is REPLACE. If your update requires a more disruptive action than you set with this flag, the update request will fail.

Check the MostDisruptiveAllowedAction enum for the list of possible values.

**Returns**

**Type**

**Description**

`string`

### hasMostDisruptiveAllowedAction

### clearMostDisruptiveAllowedAction

### setMostDisruptiveAllowedAction

The most disruptive action that you want to perform on each instance during the update: - REPLACE: Delete the instance and create it again. - RESTART: Stop the instance and start it again. - REFRESH: Do not stop the instance and limit disruption as much as possible. - NONE: Do not disrupt the instance at all. By default, the most disruptive allowed action is REPLACE. If your update requires a more disruptive action than you set with this flag, the update request will fail.

Check the MostDisruptiveAllowedAction enum for the list of possible values.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
