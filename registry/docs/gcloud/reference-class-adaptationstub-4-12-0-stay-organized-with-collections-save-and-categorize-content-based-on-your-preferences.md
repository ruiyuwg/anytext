-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AdaptationStub (4.12.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public abstract class AdaptationStub implements BackgroundResource
```

Base stub class for the Adaptation service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> AdaptationStub

## Implements

[BackgroundResource](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.BackgroundResource.html)

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

## Constructors

### AdaptationStub()

```
public AdaptationStub()
```

## Methods

### close()

```
public abstract void close()
```

### createCustomClassCallable()

```
public UnaryCallable<CreateCustomClassRequest,CustomClass> createCustomClassCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.CreateCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.CustomClass)>`

### createPhraseSetCallable()

```
public UnaryCallable<CreatePhraseSetRequest,PhraseSet> createPhraseSetCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.CreatePhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.PhraseSet)>`

### deleteCustomClassCallable()

```
public UnaryCallable<DeleteCustomClassRequest,Empty> deleteCustomClassCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.DeleteCustomClassRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deletePhraseSetCallable()

```
public UnaryCallable<DeletePhraseSetRequest,Empty> deletePhraseSetCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeletePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.DeletePhraseSetRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getCustomClassCallable()

```
public UnaryCallable<GetCustomClassRequest,CustomClass> getCustomClassCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.GetCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.CustomClass)>`

### getPhraseSetCallable()

```
public UnaryCallable<GetPhraseSetRequest,PhraseSet> getPhraseSetCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.GetPhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.PhraseSet)>`

### listCustomClassesCallable()

```
public UnaryCallable<ListCustomClassesRequest,ListCustomClassesResponse> listCustomClassesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCustomClassesRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.ListCustomClassesRequest),[ListCustomClassesResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.ListCustomClassesResponse)>`

### listCustomClassesPagedCallable()

```
public UnaryCallable<ListCustomClassesRequest,AdaptationClient.ListCustomClassesPagedResponse> listCustomClassesPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCustomClassesRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.ListCustomClassesRequest),[ListCustomClassesPagedResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.AdaptationClient.ListCustomClassesPagedResponse)>`

### listPhraseSetCallable()

```
public UnaryCallable<ListPhraseSetRequest,ListPhraseSetResponse> listPhraseSetCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.ListPhraseSetRequest),[ListPhraseSetResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.ListPhraseSetResponse)>`

### listPhraseSetPagedCallable()

```
public UnaryCallable<ListPhraseSetRequest,AdaptationClient.ListPhraseSetPagedResponse> listPhraseSetPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.ListPhraseSetRequest),[ListPhraseSetPagedResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.AdaptationClient.ListPhraseSetPagedResponse)>`

### updateCustomClassCallable()

```
public UnaryCallable<UpdateCustomClassRequest,CustomClass> updateCustomClassCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.UpdateCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.CustomClass)>`

### updatePhraseSetCallable()

```
public UnaryCallable<UpdatePhraseSetRequest,PhraseSet> updatePhraseSetCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.UpdatePhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v1p1beta1.PhraseSet)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
