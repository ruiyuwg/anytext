-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SecurityCenterSettingsServiceStub (0.51.0) Stay organized with collections Save and categorize content based on your preferences.

0.90.0 (latest) 0.88.0 0.86.0 0.85.0 0.83.0 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.73.0 0.71.0 0.70.0 0.67.0 0.66.0 0.65.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.6 0.5.13

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public abstract class SecurityCenterSettingsServiceStub implements BackgroundResource
```

Base stub class for the SecurityCenterSettingsService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> SecurityCenterSettingsServiceStub

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

### SecurityCenterSettingsServiceStub()

```
public SecurityCenterSettingsServiceStub()
```

## Methods

### batchCalculateEffectiveSettingsCallable()

```
public UnaryCallable<BatchCalculateEffectiveSettingsRequest,BatchCalculateEffectiveSettingsResponse> batchCalculateEffectiveSettingsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchCalculateEffectiveSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsRequest),[BatchCalculateEffectiveSettingsResponse](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsResponse)>`

### batchGetSettingsCallable()

```
public UnaryCallable<BatchGetSettingsRequest,BatchGetSettingsResponse> batchGetSettingsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchGetSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsRequest),[BatchGetSettingsResponse](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsResponse)>`

### calculateEffectiveComponentSettingsCallable()

```
public UnaryCallable<CalculateEffectiveComponentSettingsRequest,ComponentSettings> calculateEffectiveComponentSettingsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CalculateEffectiveComponentSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveComponentSettingsRequest),[ComponentSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings)>`

### calculateEffectiveSettingsCallable()

```
public UnaryCallable<CalculateEffectiveSettingsRequest,Settings> calculateEffectiveSettingsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CalculateEffectiveSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveSettingsRequest),[Settings](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.Settings)>`

### close()

```
public abstract void close()
```

### getComponentSettingsCallable()

```
public UnaryCallable<GetComponentSettingsRequest,ComponentSettings> getComponentSettingsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetComponentSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.GetComponentSettingsRequest),[ComponentSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings)>`

### getServiceAccountCallable()

```
public UnaryCallable<GetServiceAccountRequest,ServiceAccount> getServiceAccountCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetServiceAccountRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.GetServiceAccountRequest),[ServiceAccount](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.ServiceAccount)>`

### getSettingsCallable()

```
public UnaryCallable<GetSettingsRequest,Settings> getSettingsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.GetSettingsRequest),[Settings](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.Settings)>`

### listComponentsCallable()

```
public UnaryCallable<ListComponentsRequest,ListComponentsResponse> listComponentsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListComponentsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.ListComponentsRequest),[ListComponentsResponse](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.ListComponentsResponse)>`

### listComponentsPagedCallable()

```
public UnaryCallable<ListComponentsRequest,SecurityCenterSettingsServiceClient.ListComponentsPagedResponse> listComponentsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListComponentsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.ListComponentsRequest),[ListComponentsPagedResponse](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListComponentsPagedResponse)>`

### listDetectorsCallable()

```
public UnaryCallable<ListDetectorsRequest,ListDetectorsResponse> listDetectorsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListDetectorsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsRequest),[ListDetectorsResponse](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsResponse)>`

### listDetectorsPagedCallable()

```
public UnaryCallable<ListDetectorsRequest,SecurityCenterSettingsServiceClient.ListDetectorsPagedResponse> listDetectorsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListDetectorsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsRequest),[ListDetectorsPagedResponse](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListDetectorsPagedResponse)>`

### resetComponentSettingsCallable()

```
public UnaryCallable<ResetComponentSettingsRequest,Empty> resetComponentSettingsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ResetComponentSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.ResetComponentSettingsRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### resetSettingsCallable()

```
public UnaryCallable<ResetSettingsRequest,Empty> resetSettingsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ResetSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.ResetSettingsRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### updateComponentSettingsCallable()

```
public UnaryCallable<UpdateComponentSettingsRequest,ComponentSettings> updateComponentSettingsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateComponentSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.UpdateComponentSettingsRequest),[ComponentSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings)>`

### updateSettingsCallable()

```
public UnaryCallable<UpdateSettingsRequest,Settings> updateSettingsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.UpdateSettingsRequest),[Settings](/java/docs/reference/google-cloud-securitycenter-settings/0.51.0/com.google.cloud.securitycenter.settings.v1beta1.Settings)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
