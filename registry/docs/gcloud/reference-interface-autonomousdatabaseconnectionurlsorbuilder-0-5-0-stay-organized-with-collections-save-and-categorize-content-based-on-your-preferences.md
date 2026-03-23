-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AutonomousDatabaseConnectionUrlsOrBuilder (0.5.0) Stay organized with collections Save and categorize content based on your preferences.

0.36.0 (latest) 0.34.0 0.32.0 0.31.0 0.29.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.17.0 0.16.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface AutonomousDatabaseConnectionUrlsOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getApexUri()

```
public abstract String getApexUri()
```

Output only. Oracle Application Express (APEX) URL.

`string apex_uri = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The apexUri.

### getApexUriBytes()

```
public abstract ByteString getApexUriBytes()
```

Output only. Oracle Application Express (APEX) URL.

`string apex_uri = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for apexUri.

### getDatabaseTransformsUri()

```
public abstract String getDatabaseTransformsUri()
```

Output only. The URL of the Database Transforms for the Autonomous Database.

`string database_transforms_uri = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The databaseTransformsUri.

### getDatabaseTransformsUriBytes()

```
public abstract ByteString getDatabaseTransformsUriBytes()
```

Output only. The URL of the Database Transforms for the Autonomous Database.

`string database_transforms_uri = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for databaseTransformsUri.

### getGraphStudioUri()

```
public abstract String getGraphStudioUri()
```

Output only. The URL of the Graph Studio for the Autonomous Database.

`string graph_studio_uri = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The graphStudioUri.

### getGraphStudioUriBytes()

```
public abstract ByteString getGraphStudioUriBytes()
```

Output only. The URL of the Graph Studio for the Autonomous Database.

`string graph_studio_uri = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for graphStudioUri.

### getMachineLearningNotebookUri()

```
public abstract String getMachineLearningNotebookUri()
```

Output only. The URL of the Oracle Machine Learning (OML) Notebook for the Autonomous Database.

`string machine_learning_notebook_uri = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The machineLearningNotebookUri.

### getMachineLearningNotebookUriBytes()

```
public abstract ByteString getMachineLearningNotebookUriBytes()
```

Output only. The URL of the Oracle Machine Learning (OML) Notebook for the Autonomous Database.

`string machine_learning_notebook_uri = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for machineLearningNotebookUri.

### getMachineLearningUserManagementUri()

```
public abstract String getMachineLearningUserManagementUri()
```

Output only. The URL of Machine Learning user management the Autonomous Database.

`string machine_learning_user_management_uri = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The machineLearningUserManagementUri.

### getMachineLearningUserManagementUriBytes()

```
public abstract ByteString getMachineLearningUserManagementUriBytes()
```

Output only. The URL of Machine Learning user management the Autonomous Database.

`string machine_learning_user_management_uri = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for machineLearningUserManagementUri.

### getMongoDbUri()

```
public abstract String getMongoDbUri()
```

Output only. The URL of the MongoDB API for the Autonomous Database.

`string mongo_db_uri = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The mongoDbUri.

### getMongoDbUriBytes()

```
public abstract ByteString getMongoDbUriBytes()
```

Output only. The URL of the MongoDB API for the Autonomous Database.

`string mongo_db_uri = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for mongoDbUri.

### getOrdsUri()

```
public abstract String getOrdsUri()
```

Output only. The Oracle REST Data Services (ORDS) URL of the Web Access for the Autonomous Database.

`string ords_uri = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The ordsUri.

### getOrdsUriBytes()

```
public abstract ByteString getOrdsUriBytes()
```

Output only. The Oracle REST Data Services (ORDS) URL of the Web Access for the Autonomous Database.

`string ords_uri = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for ordsUri.

### getSqlDevWebUri()

```
public abstract String getSqlDevWebUri()
```

Output only. The URL of the Oracle SQL Developer Web for the Autonomous Database.

`string sql_dev_web_uri = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sqlDevWebUri.

### getSqlDevWebUriBytes()

```
public abstract ByteString getSqlDevWebUriBytes()
```

Output only. The URL of the Oracle SQL Developer Web for the Autonomous Database.

`string sql_dev_web_uri = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sqlDevWebUri.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
