-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListInputsResponseOrBuilder (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

0.89.0 (latest) 0.87.0 0.85.0 0.84.0 0.82.0 0.80.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.72.0 0.70.0 0.69.0 0.66.0 0.65.0 0.64.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.8 0.3.0

```
public interface ListInputsResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getInputs(int index)

```
public abstract Input getInputs(int index)
```

A list of inputs.

`repeated .google.cloud.video.livestream.v1.Input inputs = 1;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[Input](/java/docs/reference/google-cloud-live-stream/0.6.0/com.google.cloud.video.livestream.v1.Input)

### getInputsCount()

```
public abstract int getInputsCount()
```

A list of inputs.

`repeated .google.cloud.video.livestream.v1.Input inputs = 1;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getInputsList()

```
public abstract List<Input> getInputsList()
```

A list of inputs.

`repeated .google.cloud.video.livestream.v1.Input inputs = 1;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Input](/java/docs/reference/google-cloud-live-stream/0.6.0/com.google.cloud.video.livestream.v1.Input)\>

### getInputsOrBuilder(int index)

```
public abstract InputOrBuilder getInputsOrBuilder(int index)
```

A list of inputs.

`repeated .google.cloud.video.livestream.v1.Input inputs = 1;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[InputOrBuilder](/java/docs/reference/google-cloud-live-stream/0.6.0/com.google.cloud.video.livestream.v1.InputOrBuilder)

### getInputsOrBuilderList()

```
public abstract List<? extends InputOrBuilder> getInputsOrBuilderList()
```

A list of inputs.

`repeated .google.cloud.video.livestream.v1.Input inputs = 1;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.video.livestream.v1.InputOrBuilder\>

### getNextPageToken()

```
public abstract String getNextPageToken()
```

Token to retrieve the next page of results, or empty if there are no more results in the list.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The nextPageToken.

### getNextPageTokenBytes()

```
public abstract ByteString getNextPageTokenBytes()
```

Token to retrieve the next page of results, or empty if there are no more results in the list.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for nextPageToken.

### getUnreachable(int index)

```
public abstract String getUnreachable(int index)
```

Locations that could not be reached.

`repeated string unreachable = 3;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The unreachable at the given index.

### getUnreachableBytes(int index)

```
public abstract ByteString getUnreachableBytes(int index)
```

Locations that could not be reached.

`repeated string unreachable = 3;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the unreachable at the given index.

### getUnreachableCount()

```
public abstract int getUnreachableCount()
```

Locations that could not be reached.

`repeated string unreachable = 3;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of unreachable.

### getUnreachableList()

```
public abstract List<String> getUnreachableList()
```

Locations that could not be reached.

`repeated string unreachable = 3;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

A list containing the unreachable.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
