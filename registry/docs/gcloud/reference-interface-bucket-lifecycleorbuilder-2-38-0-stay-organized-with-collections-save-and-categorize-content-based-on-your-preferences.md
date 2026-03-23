-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface Bucket.LifecycleOrBuilder (2.38.0) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public static interface Bucket.LifecycleOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getRule(int index)

```
public abstract Bucket.Lifecycle.Rule getRule(int index)
```

A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.

`repeated .google.storage.v2.Bucket.Lifecycle.Rule rule = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule](/java/docs/reference/google-cloud-storage/2.38.0/com.google.storage.v2.Bucket.Lifecycle.Rule)`

### getRuleCount()

```
public abstract int getRuleCount()
```

A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.

`repeated .google.storage.v2.Bucket.Lifecycle.Rule rule = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getRuleList()

```
public abstract List<Bucket.Lifecycle.Rule> getRuleList()
```

A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.

`repeated .google.storage.v2.Bucket.Lifecycle.Rule rule = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Rule](/java/docs/reference/google-cloud-storage/2.38.0/com.google.storage.v2.Bucket.Lifecycle.Rule)>`

### getRuleOrBuilder(int index)

```
public abstract Bucket.Lifecycle.RuleOrBuilder getRuleOrBuilder(int index)
```

A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.

`repeated .google.storage.v2.Bucket.Lifecycle.Rule rule = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.RuleOrBuilder](/java/docs/reference/google-cloud-storage/2.38.0/com.google.storage.v2.Bucket.Lifecycle.RuleOrBuilder)`

### getRuleOrBuilderList()

```
public abstract List<? extends Bucket.Lifecycle.RuleOrBuilder> getRuleOrBuilderList()
```

A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.

`repeated .google.storage.v2.Bucket.Lifecycle.Rule rule = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.storage.v2.Bucket.Lifecycle.RuleOrBuilder>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
