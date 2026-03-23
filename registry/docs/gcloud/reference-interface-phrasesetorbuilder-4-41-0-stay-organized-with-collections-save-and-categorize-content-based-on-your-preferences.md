-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface PhraseSetOrBuilder (4.41.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public interface PhraseSetOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBoost()

```
public abstract float getBoost()
```

Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 (exclusive) and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests.

`float boost = 4;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The boost.

### getName()

```
public abstract String getName()
```

The resource name of the phrase set.

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

The resource name of the phrase set.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPhrases(int index)

```
public abstract PhraseSet.Phrase getPhrases(int index)
```

A list of word and phrases.

`repeated .google.cloud.speech.v1p1beta1.PhraseSet.Phrase phrases = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[PhraseSet.Phrase](/java/docs/reference/google-cloud-speech/4.41.0/com.google.cloud.speech.v1p1beta1.PhraseSet.Phrase)`

### getPhrasesCount()

```
public abstract int getPhrasesCount()
```

A list of word and phrases.

`repeated .google.cloud.speech.v1p1beta1.PhraseSet.Phrase phrases = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getPhrasesList()

```
public abstract List<PhraseSet.Phrase> getPhrasesList()
```

A list of word and phrases.

`repeated .google.cloud.speech.v1p1beta1.PhraseSet.Phrase phrases = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Phrase](/java/docs/reference/google-cloud-speech/4.41.0/com.google.cloud.speech.v1p1beta1.PhraseSet.Phrase)>`

### getPhrasesOrBuilder(int index)

```
public abstract PhraseSet.PhraseOrBuilder getPhrasesOrBuilder(int index)
```

A list of word and phrases.

`repeated .google.cloud.speech.v1p1beta1.PhraseSet.Phrase phrases = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[PhraseSet.PhraseOrBuilder](/java/docs/reference/google-cloud-speech/4.41.0/com.google.cloud.speech.v1p1beta1.PhraseSet.PhraseOrBuilder)`

### getPhrasesOrBuilderList()

```
public abstract List<? extends PhraseSet.PhraseOrBuilder> getPhrasesOrBuilderList()
```

A list of word and phrases.

`repeated .google.cloud.speech.v1p1beta1.PhraseSet.Phrase phrases = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.speech.v1p1beta1.PhraseSet.PhraseOrBuilder>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
