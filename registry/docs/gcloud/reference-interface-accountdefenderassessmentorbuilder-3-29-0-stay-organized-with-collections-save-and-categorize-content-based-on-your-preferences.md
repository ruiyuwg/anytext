-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AccountDefenderAssessmentOrBuilder (3.29.0) Stay organized with collections Save and categorize content based on your preferences.

3.84.0 (latest) 3.82.0 3.80.0 3.79.0 3.77.0 3.75.0 3.73.0 3.72.0 3.71.0 3.70.0 3.69.0 3.67.0 3.65.0 3.64.0 3.61.0 3.60.0 3.59.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.12 2.6.1 2.5.0 2.4.10 2.3.1

```
public interface AccountDefenderAssessmentOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getLabels(int index)

```
public abstract AccountDefenderAssessment.AccountDefenderLabel getLabels(int index)
```

Labels for this request.

`repeated .google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment.AccountDefenderLabel labels = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[AccountDefenderAssessment.AccountDefenderLabel](/java/docs/reference/google-cloud-recaptchaenterprise/3.29.0/com.google.recaptchaenterprise.v1beta1.AccountDefenderAssessment.AccountDefenderLabel)`

The labels at the given index.

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Labels for this request.

`repeated .google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment.AccountDefenderLabel labels = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of labels.

### getLabelsList()

```
public abstract List<AccountDefenderAssessment.AccountDefenderLabel> getLabelsList()
```

Labels for this request.

`repeated .google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment.AccountDefenderLabel labels = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[AccountDefenderLabel](/java/docs/reference/google-cloud-recaptchaenterprise/3.29.0/com.google.recaptchaenterprise.v1beta1.AccountDefenderAssessment.AccountDefenderLabel)>`

A list containing the labels.

### getLabelsValue(int index)

```
public abstract int getLabelsValue(int index)
```

Labels for this request.

`repeated .google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment.AccountDefenderLabel labels = 1;`

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

The enum numeric value on the wire of labels at the given index.

### getLabelsValueList()

```
public abstract List<Integer> getLabelsValueList()
```

Labels for this request.

`repeated .google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment.AccountDefenderLabel labels = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the enum numeric values on the wire for labels.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
