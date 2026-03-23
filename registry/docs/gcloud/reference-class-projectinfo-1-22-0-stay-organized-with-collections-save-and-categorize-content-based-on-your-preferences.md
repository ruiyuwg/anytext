-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ProjectInfo (1.22.0) Stay organized with collections Save and categorize content based on your preferences.

1.89.0 (latest) 1.87.0 1.85.0 1.84.0 1.82.0 1.80.0 1.78.0 1.77.0 1.76.0 1.75.0 1.74.0 1.72.0 1.70.0 1.69.0 1.66.0 1.65.0 1.64.0 1.62.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.6 1.4.0 1.3.2 1.2.12

```
public class ProjectInfo implements Serializable
```

**Deprecated.** _v3 GAPIC client of ResourceManager is now available_

A Google Cloud Resource Manager project metadata object. A Project is a high-level Google Cloud Platform entity. It is a container for ACLs, APIs, AppEngine Apps, VMs, and other Google Cloud Platform resources.

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> ProjectInfo

## Implements

[Serializable](https://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html)

## Inherited Members

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

### DATE\_TIME\_FORMATTER (deprecated)

```
public static final DateTimeFormatter DATE_TIME_FORMATTER
```

**Field Value**

**Type**

**Description**

`org.threeten.bp.format.DateTimeFormatter`

## Static Methods

### newBuilder(String id) (deprecated)

```
public static ProjectInfo.Builder newBuilder(String id)
```

**Parameter**

**Name**

**Description**

`id`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[ProjectInfo.Builder](/java/docs/reference/google-cloud-resourcemanager/1.22.0/com.google.cloud.resourcemanager.ProjectInfo.Builder)`

## Methods

### equals(Object obj) (deprecated)

```
public boolean equals(Object obj)
```

**Parameter**

**Name**

**Description**

`obj`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

### getCreateTimeMillis() (deprecated)

```
public Long getCreateTimeMillis()
```

Get the project's creation time (in milliseconds).

This field is set by the server and is read-only.

**Returns**

**Type**

**Description**

`[Long](https://docs.oracle.com/javase/8/docs/api/java/lang/Long.html)`

### getLabels() (deprecated)

```
public Map<String,String> getLabels()
```

Get the immutable map of labels associated with this project.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getName() (deprecated)

```
public String getName()
```

Get the user-assigned name of the project.

This field is optional, can remain unset, and can be changed after project creation.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getProjectId() (deprecated)

```
public String getProjectId()
```

Get the unique, user-assigned ID of the project.

This field cannot be changed after the server creates the project.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getProjectNumber() (deprecated)

```
public Long getProjectNumber()
```

Get number uniquely identifying the project.

This field is set by the server and is read-only.

**Returns**

**Type**

**Description**

`[Long](https://docs.oracle.com/javase/8/docs/api/java/lang/Long.html)`

### getState() (deprecated)

```
public ProjectInfo.State getState()
```

Get the project's lifecycle state.

This is a read-only field. To change the lifecycle state of your project, use the `delete` or `undelete` method.

**Returns**

**Type**

**Description**

`[ProjectInfo.State](/java/docs/reference/google-cloud-resourcemanager/1.22.0/com.google.cloud.resourcemanager.ProjectInfo.State)`

### hashCode() (deprecated)

```
public int hashCode()
```

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

### toBuilder() (deprecated)

```
public ProjectInfo.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[ProjectInfo.Builder](/java/docs/reference/google-cloud-resourcemanager/1.22.0/com.google.cloud.resourcemanager.ProjectInfo.Builder)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
