-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface NFDeployStatusOrBuilder (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

0.57.0 (latest) 0.55.0 0.53.0 0.52.0 0.50.0 0.48.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.38.0 0.37.0 0.34.0 0.33.0 0.32.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface NFDeployStatusOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getReadyNfs()

```
public abstract int getReadyNfs()
```

Output only. Total number of NFs targeted by this deployment with a Ready Condition set.

`int32 ready_nfs = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The readyNfs.

### getSites(int index)

```
public abstract NFDeploySiteStatus getSites(int index)
```

Output only. Per-Site Status.

`repeated .google.cloud.telcoautomation.v1.NFDeploySiteStatus sites = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[NFDeploySiteStatus](/java/docs/reference/google-cloud-telcoautomation/0.6.0/com.google.cloud.telcoautomation.v1.NFDeploySiteStatus)`

### getSitesCount()

```
public abstract int getSitesCount()
```

Output only. Per-Site Status.

`repeated .google.cloud.telcoautomation.v1.NFDeploySiteStatus sites = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getSitesList()

```
public abstract List<NFDeploySiteStatus> getSitesList()
```

Output only. Per-Site Status.

`repeated .google.cloud.telcoautomation.v1.NFDeploySiteStatus sites = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[NFDeploySiteStatus](/java/docs/reference/google-cloud-telcoautomation/0.6.0/com.google.cloud.telcoautomation.v1.NFDeploySiteStatus)>`

### getSitesOrBuilder(int index)

```
public abstract NFDeploySiteStatusOrBuilder getSitesOrBuilder(int index)
```

Output only. Per-Site Status.

`repeated .google.cloud.telcoautomation.v1.NFDeploySiteStatus sites = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[NFDeploySiteStatusOrBuilder](/java/docs/reference/google-cloud-telcoautomation/0.6.0/com.google.cloud.telcoautomation.v1.NFDeploySiteStatusOrBuilder)`

### getSitesOrBuilderList()

```
public abstract List<? extends NFDeploySiteStatusOrBuilder> getSitesOrBuilderList()
```

Output only. Per-Site Status.

`repeated .google.cloud.telcoautomation.v1.NFDeploySiteStatus sites = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.telcoautomation.v1.NFDeploySiteStatusOrBuilder>`

### getTargetedNfs()

```
public abstract int getTargetedNfs()
```

Output only. Total number of NFs targeted by this deployment

`int32 targeted_nfs = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The targetedNfs.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
