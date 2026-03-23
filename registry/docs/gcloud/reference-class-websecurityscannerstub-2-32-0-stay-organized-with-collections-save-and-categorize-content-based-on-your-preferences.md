-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class WebSecurityScannerStub (2.32.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.4 2.1.1 2.0.15

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public abstract class WebSecurityScannerStub implements BackgroundResource
```

Base stub class for the WebSecurityScanner service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> WebSecurityScannerStub

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

### WebSecurityScannerStub()

```
public WebSecurityScannerStub()
```

## Methods

### close()

```
public abstract void close()
```

### createScanConfigCallable()

```
public UnaryCallable<CreateScanConfigRequest,ScanConfig> createScanConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.CreateScanConfigRequest),[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ScanConfig)>`

### deleteScanConfigCallable()

```
public UnaryCallable<DeleteScanConfigRequest,Empty> deleteScanConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.DeleteScanConfigRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getFindingCallable()

```
public UnaryCallable<GetFindingRequest,Finding> getFindingCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetFindingRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.GetFindingRequest),[Finding](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.Finding)>`

### getScanConfigCallable()

```
public UnaryCallable<GetScanConfigRequest,ScanConfig> getScanConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.GetScanConfigRequest),[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ScanConfig)>`

### getScanRunCallable()

```
public UnaryCallable<GetScanRunRequest,ScanRun> getScanRunCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.GetScanRunRequest),[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ScanRun)>`

### listCrawledUrlsCallable()

```
public UnaryCallable<ListCrawledUrlsRequest,ListCrawledUrlsResponse> listCrawledUrlsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCrawledUrlsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListCrawledUrlsRequest),[ListCrawledUrlsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListCrawledUrlsResponse)>`

### listCrawledUrlsPagedCallable()

```
public UnaryCallable<ListCrawledUrlsRequest,WebSecurityScannerClient.ListCrawledUrlsPagedResponse> listCrawledUrlsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCrawledUrlsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListCrawledUrlsRequest),[ListCrawledUrlsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.WebSecurityScannerClient.ListCrawledUrlsPagedResponse)>`

### listFindingTypeStatsCallable()

```
public UnaryCallable<ListFindingTypeStatsRequest,ListFindingTypeStatsResponse> listFindingTypeStatsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFindingTypeStatsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsRequest),[ListFindingTypeStatsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsResponse)>`

### listFindingsCallable()

```
public UnaryCallable<ListFindingsRequest,ListFindingsResponse> listFindingsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFindingsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListFindingsRequest),[ListFindingsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListFindingsResponse)>`

### listFindingsPagedCallable()

```
public UnaryCallable<ListFindingsRequest,WebSecurityScannerClient.ListFindingsPagedResponse> listFindingsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFindingsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListFindingsRequest),[ListFindingsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.WebSecurityScannerClient.ListFindingsPagedResponse)>`

### listScanConfigsCallable()

```
public UnaryCallable<ListScanConfigsRequest,ListScanConfigsResponse> listScanConfigsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListScanConfigsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListScanConfigsRequest),[ListScanConfigsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListScanConfigsResponse)>`

### listScanConfigsPagedCallable()

```
public UnaryCallable<ListScanConfigsRequest,WebSecurityScannerClient.ListScanConfigsPagedResponse> listScanConfigsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListScanConfigsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListScanConfigsRequest),[ListScanConfigsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.WebSecurityScannerClient.ListScanConfigsPagedResponse)>`

### listScanRunsCallable()

```
public UnaryCallable<ListScanRunsRequest,ListScanRunsResponse> listScanRunsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListScanRunsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListScanRunsRequest),[ListScanRunsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListScanRunsResponse)>`

### listScanRunsPagedCallable()

```
public UnaryCallable<ListScanRunsRequest,WebSecurityScannerClient.ListScanRunsPagedResponse> listScanRunsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListScanRunsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ListScanRunsRequest),[ListScanRunsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.WebSecurityScannerClient.ListScanRunsPagedResponse)>`

### startScanRunCallable()

```
public UnaryCallable<StartScanRunRequest,ScanRun> startScanRunCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[StartScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.StartScanRunRequest),[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ScanRun)>`

### stopScanRunCallable()

```
public UnaryCallable<StopScanRunRequest,ScanRun> stopScanRunCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[StopScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.StopScanRunRequest),[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ScanRun)>`

### updateScanConfigCallable()

```
public UnaryCallable<UpdateScanConfigRequest,ScanConfig> updateScanConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.UpdateScanConfigRequest),[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.32.0/com.google.cloud.websecurityscanner.v1beta.ScanConfig)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
