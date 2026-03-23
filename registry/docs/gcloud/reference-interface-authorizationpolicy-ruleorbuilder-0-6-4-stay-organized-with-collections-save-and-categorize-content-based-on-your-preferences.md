-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AuthorizationPolicy.RuleOrBuilder (0.6.4) Stay organized with collections Save and categorize content based on your preferences.

0.90.0 (latest) 0.88.0 0.86.0 0.85.0 0.83.0 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.73.0 0.71.0 0.70.0 0.67.0 0.66.0 0.65.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.4 0.5.1 0.4.4

```
public static interface AuthorizationPolicy.RuleOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDestinations(int index)

```
public abstract AuthorizationPolicy.Rule.Destination getDestinations(int index)
```

Optional. List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers. If not set, the action specified in the 'action' field will be applied without any rule checks for the destination.

`repeated .google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination destinations = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[AuthorizationPolicy.Rule.Destination](/java/docs/reference/google-cloud-network-security/0.6.4/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination)

### getDestinationsCount()

```
public abstract int getDestinationsCount()
```

Optional. List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers. If not set, the action specified in the 'action' field will be applied without any rule checks for the destination.

`repeated .google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination destinations = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getDestinationsList()

```
public abstract List<AuthorizationPolicy.Rule.Destination> getDestinationsList()
```

Optional. List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers. If not set, the action specified in the 'action' field will be applied without any rule checks for the destination.

`repeated .google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination destinations = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Destination](/java/docs/reference/google-cloud-network-security/0.6.4/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination)\>

### getDestinationsOrBuilder(int index)

```
public abstract AuthorizationPolicy.Rule.DestinationOrBuilder getDestinationsOrBuilder(int index)
```

Optional. List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers. If not set, the action specified in the 'action' field will be applied without any rule checks for the destination.

`repeated .google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination destinations = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[AuthorizationPolicy.Rule.DestinationOrBuilder](/java/docs/reference/google-cloud-network-security/0.6.4/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.DestinationOrBuilder)

### getDestinationsOrBuilderList()

```
public abstract List<? extends AuthorizationPolicy.Rule.DestinationOrBuilder> getDestinationsOrBuilderList()
```

Optional. List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers. If not set, the action specified in the 'action' field will be applied without any rule checks for the destination.

`repeated .google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination destinations = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.DestinationOrBuilder\>

### getSources(int index)

```
public abstract AuthorizationPolicy.Rule.Source getSources(int index)
```

Optional. List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ip\_blocks match. If not set, the action specified in the 'action' field will be applied without any rule checks for the source.

`repeated .google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source sources = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[AuthorizationPolicy.Rule.Source](/java/docs/reference/google-cloud-network-security/0.6.4/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source)

### getSourcesCount()

```
public abstract int getSourcesCount()
```

Optional. List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ip\_blocks match. If not set, the action specified in the 'action' field will be applied without any rule checks for the source.

`repeated .google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source sources = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getSourcesList()

```
public abstract List<AuthorizationPolicy.Rule.Source> getSourcesList()
```

Optional. List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ip\_blocks match. If not set, the action specified in the 'action' field will be applied without any rule checks for the source.

`repeated .google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source sources = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Source](/java/docs/reference/google-cloud-network-security/0.6.4/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source)\>

### getSourcesOrBuilder(int index)

```
public abstract AuthorizationPolicy.Rule.SourceOrBuilder getSourcesOrBuilder(int index)
```

Optional. List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ip\_blocks match. If not set, the action specified in the 'action' field will be applied without any rule checks for the source.

`repeated .google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source sources = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[AuthorizationPolicy.Rule.SourceOrBuilder](/java/docs/reference/google-cloud-network-security/0.6.4/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.SourceOrBuilder)

### getSourcesOrBuilderList()

```
public abstract List<? extends AuthorizationPolicy.Rule.SourceOrBuilder> getSourcesOrBuilderList()
```

Optional. List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ip\_blocks match. If not set, the action specified in the 'action' field will be applied without any rule checks for the source.

`repeated .google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source sources = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.SourceOrBuilder\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
