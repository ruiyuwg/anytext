-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application hosting](https://docs.cloud.google.com/docs/application-hosting)
-   [Google Kubernetes Engine (GKE)](https://docs.cloud.google.com/kubernetes-engine/docs)
-   [Reference](https://docs.cloud.google.com/kubernetes-engine/docs/authentication)

Send feedback

# UpgradeSettings Stay organized with collections Save and categorize content based on your preferences.

 

These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade.

maxUnavailable controls the number of nodes that can be simultaneously unavailable.

maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes.

(maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time).

Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.)

Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available.

These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool.

If the strategy is SURGE, use maxSurge and maxUnavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time).

If the strategy is BLUE\_GREEN, use blueGreenSettings to configure the blue-green upgrade related settings. 1. standardRolloutPolicy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batchSoakDuration is the soak time after each batch gets drained. 2. nodePoolSoakDuration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted.

JSON representation

{
  "maxSurge": integer,
  "maxUnavailable": integer,
  "strategy": enum (`[NodePoolUpdateStrategy](/kubernetes-engine/docs/reference/rest/v1beta1/UpgradeSettings#NodePoolUpdateStrategy)`),
  "blueGreenSettings": {
    object (`[BlueGreenSettings](/kubernetes-engine/docs/reference/rest/v1beta1/UpgradeSettings#BlueGreenSettings)`)
  }
}

 

Fields

`maxSurge`

`integer`

The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.

`maxUnavailable`

`integer`

The maximum number of nodes that can be simultaneously unavailable during the upgrade process. A node is considered available if its status is Ready.

`strategy`

``enum (`[NodePoolUpdateStrategy](/kubernetes-engine/docs/reference/rest/v1beta1/UpgradeSettings#NodePoolUpdateStrategy)`)``

Update strategy of the node pool.

`blueGreenSettings`

``object (`[BlueGreenSettings](/kubernetes-engine/docs/reference/rest/v1beta1/UpgradeSettings#BlueGreenSettings)`)``

Settings for blue-green upgrade strategy.

## NodePoolUpdateStrategy

Strategy used for node pool update.

 

Enums

`NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED`

Default value if unset. GKE internally defaults the update strategy to SURGE for unspecified strategies.

`BLUE_GREEN`

blue-green upgrade.

`SURGE`

SURGE is the traditional way of upgrading a node pool. maxSurge and maxUnavailable determines the level of upgrade parallelism.

## BlueGreenSettings

Settings for blue-green upgrade.

JSON representation

{

  // Union field `rollout_policy` can be only one of the following:
  "standardRolloutPolicy": {
    object (`[StandardRolloutPolicy](/kubernetes-engine/docs/reference/rest/v1beta1/UpgradeSettings#StandardRolloutPolicy)`)
  },
  "autoscaledRolloutPolicy": {
    object (`[AutoscaledRolloutPolicy](/kubernetes-engine/docs/reference/rest/v1beta1/UpgradeSettings#AutoscaledRolloutPolicy)`)
  }
  // End of list of possible types for union field `rollout_policy`.
  "nodePoolSoakDuration": string
}

 

Fields

Union field `rollout_policy`. The rollout policy controls the general rollout progress of blue-green. `rollout_policy` can be only one of the following:

`standardRolloutPolicy`

``object (`[StandardRolloutPolicy](/kubernetes-engine/docs/reference/rest/v1beta1/UpgradeSettings#StandardRolloutPolicy)`)``

Standard policy for the blue-green upgrade.

`autoscaledRolloutPolicy`

``object (`[AutoscaledRolloutPolicy](/kubernetes-engine/docs/reference/rest/v1beta1/UpgradeSettings#AutoscaledRolloutPolicy)`)``

Autoscaled policy for cluster autoscaler enabled blue-green upgrade.

`nodePoolSoakDuration`

``string (`[Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration)` format)``

Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.

A duration in seconds with up to nine fractional digits, ending with '`s`'. Example: `"3.5s"`.

## StandardRolloutPolicy

Standard rollout policy is the default policy for blue-green.

JSON representation

{

  // Union field `update_batch_size` can be only one of the following:
  "batchPercentage": number,
  "batchNodeCount": integer
  // End of list of possible types for union field `update_batch_size`.
  "batchSoakDuration": string
}

 

Fields

Union field `update_batch_size`. Blue pool size to drain in a batch. `update_batch_size` can be only one of the following:

`batchPercentage`

`number`

Percentage of the blue pool nodes to drain in a batch. The range of this field should be (0.0, 1.0\].

`batchNodeCount`

`integer`

Number of blue nodes to drain in a batch.

`batchSoakDuration`

``string (`[Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration)` format)``

Soak time after each batch gets drained. Default to zero.

A duration in seconds with up to nine fractional digits, ending with '`s`'. Example: `"3.5s"`.

## AutoscaledRolloutPolicy

Autoscaled rollout policy utilizes the cluster autoscaler during blue-green upgrade to scale both the blue and green pools.

JSON representation

{
  "waitForDrainDuration": string
}

 

Fields

`waitForDrainDuration`

``string (`[Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration)` format)``

Optional. Time to wait after cordoning the blue pool before draining the nodes. Defaults to 3 days. The value can be set between 0 and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with '`s`'. Example: `"3.5s"`.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-22 UTC.
