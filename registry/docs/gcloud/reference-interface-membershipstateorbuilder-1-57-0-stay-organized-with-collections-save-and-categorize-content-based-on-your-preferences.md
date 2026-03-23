-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface MembershipStateOrBuilder (1.57.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.81.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.6 1.2.1 1.1.0 1.0.1 0.5.4

```
public interface MembershipStateOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsComponentStates(String key)

```
public abstract boolean containsComponentStates(String key)
```

Currently these include (also serving as map keys):

1.  "admission"
2.  "audit"
3.  "mutation"

`map<string, .google.cloud.gkehub.policycontroller.v1beta.OnClusterState> component_states = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getComponentStates() (deprecated)

```
public abstract Map<String,OnClusterState> getComponentStates()
```

Use [#getComponentStatesMap()](/java/docs/reference/google-cloud-gkehub/1.57.0/com.google.cloud.gkehub.policycontroller.v1beta.MembershipStateOrBuilder#com_google_cloud_gkehub_policycontroller_v1beta_MembershipStateOrBuilder_getComponentStatesMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[OnClusterState](/java/docs/reference/google-cloud-gkehub/1.57.0/com.google.cloud.gkehub.policycontroller.v1beta.OnClusterState)>`

### getComponentStatesCount()

```
public abstract int getComponentStatesCount()
```

Currently these include (also serving as map keys):

1.  "admission"
2.  "audit"
3.  "mutation"

`map<string, .google.cloud.gkehub.policycontroller.v1beta.OnClusterState> component_states = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getComponentStatesMap()

```
public abstract Map<String,OnClusterState> getComponentStatesMap()
```

Currently these include (also serving as map keys):

1.  "admission"
2.  "audit"
3.  "mutation"

`map<string, .google.cloud.gkehub.policycontroller.v1beta.OnClusterState> component_states = 3;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[OnClusterState](/java/docs/reference/google-cloud-gkehub/1.57.0/com.google.cloud.gkehub.policycontroller.v1beta.OnClusterState)>`

### getComponentStatesOrDefault(String key, OnClusterState defaultValue)

```
public abstract OnClusterState getComponentStatesOrDefault(String key, OnClusterState defaultValue)
```

Currently these include (also serving as map keys):

1.  "admission"
2.  "audit"
3.  "mutation"

`map<string, .google.cloud.gkehub.policycontroller.v1beta.OnClusterState> component_states = 3;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[OnClusterState](/java/docs/reference/google-cloud-gkehub/1.57.0/com.google.cloud.gkehub.policycontroller.v1beta.OnClusterState)`  

**Returns**

**Type**

**Description**

`[OnClusterState](/java/docs/reference/google-cloud-gkehub/1.57.0/com.google.cloud.gkehub.policycontroller.v1beta.OnClusterState)`

### getComponentStatesOrThrow(String key)

```
public abstract OnClusterState getComponentStatesOrThrow(String key)
```

Currently these include (also serving as map keys):

1.  "admission"
2.  "audit"
3.  "mutation"

`map<string, .google.cloud.gkehub.policycontroller.v1beta.OnClusterState> component_states = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[OnClusterState](/java/docs/reference/google-cloud-gkehub/1.57.0/com.google.cloud.gkehub.policycontroller.v1beta.OnClusterState)`

### getPolicyContentState()

```
public abstract PolicyContentState getPolicyContentState()
```

The overall content state observed by the Hub Feature controller.

`.google.cloud.gkehub.policycontroller.v1beta.PolicyContentState policy_content_state = 6;`

**Returns**

**Type**

**Description**

`[PolicyContentState](/java/docs/reference/google-cloud-gkehub/1.57.0/com.google.cloud.gkehub.policycontroller.v1beta.PolicyContentState)`

The policyContentState.

### getPolicyContentStateOrBuilder()

```
public abstract PolicyContentStateOrBuilder getPolicyContentStateOrBuilder()
```

The overall content state observed by the Hub Feature controller.

`.google.cloud.gkehub.policycontroller.v1beta.PolicyContentState policy_content_state = 6;`

**Returns**

**Type**

**Description**

`[PolicyContentStateOrBuilder](/java/docs/reference/google-cloud-gkehub/1.57.0/com.google.cloud.gkehub.policycontroller.v1beta.PolicyContentStateOrBuilder)`

### getState()

```
public abstract MembershipState.LifecycleState getState()
```

The overall Policy Controller lifecycle state observed by the Hub Feature controller.

`.google.cloud.gkehub.policycontroller.v1beta.MembershipState.LifecycleState state = 4;`

**Returns**

**Type**

**Description**

`[MembershipState.LifecycleState](/java/docs/reference/google-cloud-gkehub/1.57.0/com.google.cloud.gkehub.policycontroller.v1beta.MembershipState.LifecycleState)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

The overall Policy Controller lifecycle state observed by the Hub Feature controller.

`.google.cloud.gkehub.policycontroller.v1beta.MembershipState.LifecycleState state = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### hasPolicyContentState()

```
public abstract boolean hasPolicyContentState()
```

The overall content state observed by the Hub Feature controller.

`.google.cloud.gkehub.policycontroller.v1beta.PolicyContentState policy_content_state = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the policyContentState field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
