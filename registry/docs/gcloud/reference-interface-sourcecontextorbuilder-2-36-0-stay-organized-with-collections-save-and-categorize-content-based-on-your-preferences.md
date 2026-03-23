-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SourceContextOrBuilder (2.36.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.5 2.3.1 2.2.3 2.1.3

```
public interface SourceContextOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Labels with user defined metadata.

`map<string, string> labels = 4;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getCloudRepo()

```
public abstract CloudRepoSourceContext getCloudRepo()
```

A SourceContext referring to a revision in a Google Cloud Source Repo.

`.grafeas.v1.CloudRepoSourceContext cloud_repo = 1;`

**Returns**

**Type**

**Description**

`[CloudRepoSourceContext](/java/docs/reference/grafeas/2.36.0/io.grafeas.v1.CloudRepoSourceContext)`

The cloudRepo.

### getCloudRepoOrBuilder()

```
public abstract CloudRepoSourceContextOrBuilder getCloudRepoOrBuilder()
```

A SourceContext referring to a revision in a Google Cloud Source Repo.

`.grafeas.v1.CloudRepoSourceContext cloud_repo = 1;`

**Returns**

**Type**

**Description**

`[CloudRepoSourceContextOrBuilder](/java/docs/reference/grafeas/2.36.0/io.grafeas.v1.CloudRepoSourceContextOrBuilder)`

### getContextCase()

```
public abstract SourceContext.ContextCase getContextCase()
```

**Returns**

**Type**

**Description**

`[SourceContext.ContextCase](/java/docs/reference/grafeas/2.36.0/io.grafeas.v1.SourceContext.ContextCase)`

### getGerrit()

```
public abstract GerritSourceContext getGerrit()
```

A SourceContext referring to a Gerrit project.

`.grafeas.v1.GerritSourceContext gerrit = 2;`

**Returns**

**Type**

**Description**

`[GerritSourceContext](/java/docs/reference/grafeas/2.36.0/io.grafeas.v1.GerritSourceContext)`

The gerrit.

### getGerritOrBuilder()

```
public abstract GerritSourceContextOrBuilder getGerritOrBuilder()
```

A SourceContext referring to a Gerrit project.

`.grafeas.v1.GerritSourceContext gerrit = 2;`

**Returns**

**Type**

**Description**

`[GerritSourceContextOrBuilder](/java/docs/reference/grafeas/2.36.0/io.grafeas.v1.GerritSourceContextOrBuilder)`

### getGit()

```
public abstract GitSourceContext getGit()
```

A SourceContext referring to any third party Git repo (e.g., GitHub).

`.grafeas.v1.GitSourceContext git = 3;`

**Returns**

**Type**

**Description**

`[GitSourceContext](/java/docs/reference/grafeas/2.36.0/io.grafeas.v1.GitSourceContext)`

The git.

### getGitOrBuilder()

```
public abstract GitSourceContextOrBuilder getGitOrBuilder()
```

A SourceContext referring to any third party Git repo (e.g., GitHub).

`.grafeas.v1.GitSourceContext git = 3;`

**Returns**

**Type**

**Description**

`[GitSourceContextOrBuilder](/java/docs/reference/grafeas/2.36.0/io.grafeas.v1.GitSourceContextOrBuilder)`

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/grafeas/2.36.0/io.grafeas.v1.SourceContextOrBuilder#io_grafeas_v1_SourceContextOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Labels with user defined metadata.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Labels with user defined metadata.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Labels with user defined metadata.

`map<string, string> labels = 4;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getLabelsOrThrow(String key)

```
public abstract String getLabelsOrThrow(String key)
```

Labels with user defined metadata.

`map<string, string> labels = 4;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### hasCloudRepo()

```
public abstract boolean hasCloudRepo()
```

A SourceContext referring to a revision in a Google Cloud Source Repo.

`.grafeas.v1.CloudRepoSourceContext cloud_repo = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the cloudRepo field is set.

### hasGerrit()

```
public abstract boolean hasGerrit()
```

A SourceContext referring to a Gerrit project.

`.grafeas.v1.GerritSourceContext gerrit = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gerrit field is set.

### hasGit()

```
public abstract boolean hasGit()
```

A SourceContext referring to any third party Git repo (e.g., GitHub).

`.grafeas.v1.GitSourceContext git = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the git field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
