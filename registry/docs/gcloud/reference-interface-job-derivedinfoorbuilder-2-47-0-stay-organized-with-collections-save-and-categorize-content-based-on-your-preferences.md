-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface Job.DerivedInfoOrBuilder (2.47.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

```
public static interface Job.DerivedInfoOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getJobCategories(int index)

```
public abstract JobCategory getJobCategories(int index)
```

Job categories derived from Job.title and Job.description.

`repeated .google.cloud.talent.v4beta1.JobCategory job_categories = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[JobCategory](/java/docs/reference/google-cloud-talent/2.47.0/com.google.cloud.talent.v4beta1.JobCategory)`

The jobCategories at the given index.

### getJobCategoriesCount()

```
public abstract int getJobCategoriesCount()
```

Job categories derived from Job.title and Job.description.

`repeated .google.cloud.talent.v4beta1.JobCategory job_categories = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of jobCategories.

### getJobCategoriesList()

```
public abstract List<JobCategory> getJobCategoriesList()
```

Job categories derived from Job.title and Job.description.

`repeated .google.cloud.talent.v4beta1.JobCategory job_categories = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[JobCategory](/java/docs/reference/google-cloud-talent/2.47.0/com.google.cloud.talent.v4beta1.JobCategory)>`

A list containing the jobCategories.

### getJobCategoriesValue(int index)

```
public abstract int getJobCategoriesValue(int index)
```

Job categories derived from Job.title and Job.description.

`repeated .google.cloud.talent.v4beta1.JobCategory job_categories = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire of jobCategories at the given index.

### getJobCategoriesValueList()

```
public abstract List<Integer> getJobCategoriesValueList()
```

Job categories derived from Job.title and Job.description.

`repeated .google.cloud.talent.v4beta1.JobCategory job_categories = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the enum numeric values on the wire for jobCategories.

### getLocations(int index)

```
public abstract Location getLocations(int index)
```

Structured locations of the job, resolved from Job.addresses.

locations are exactly matched to Job.addresses in the same order.

`repeated .google.cloud.talent.v4beta1.Location locations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Location](/java/docs/reference/google-cloud-talent/2.47.0/com.google.cloud.talent.v4beta1.Location)`

### getLocationsCount()

```
public abstract int getLocationsCount()
```

Structured locations of the job, resolved from Job.addresses.

locations are exactly matched to Job.addresses in the same order.

`repeated .google.cloud.talent.v4beta1.Location locations = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLocationsList()

```
public abstract List<Location> getLocationsList()
```

Structured locations of the job, resolved from Job.addresses.

locations are exactly matched to Job.addresses in the same order.

`repeated .google.cloud.talent.v4beta1.Location locations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Location](/java/docs/reference/google-cloud-talent/2.47.0/com.google.cloud.talent.v4beta1.Location)>`

### getLocationsOrBuilder(int index)

```
public abstract LocationOrBuilder getLocationsOrBuilder(int index)
```

Structured locations of the job, resolved from Job.addresses.

locations are exactly matched to Job.addresses in the same order.

`repeated .google.cloud.talent.v4beta1.Location locations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[LocationOrBuilder](/java/docs/reference/google-cloud-talent/2.47.0/com.google.cloud.talent.v4beta1.LocationOrBuilder)`

### getLocationsOrBuilderList()

```
public abstract List<? extends LocationOrBuilder> getLocationsOrBuilderList()
```

Structured locations of the job, resolved from Job.addresses.

locations are exactly matched to Job.addresses in the same order.

`repeated .google.cloud.talent.v4beta1.Location locations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.talent.v4beta1.LocationOrBuilder>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
