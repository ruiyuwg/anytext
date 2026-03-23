-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GSuiteAddOnsStub (2.34.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.1 2.1.12

```
public abstract class GSuiteAddOnsStub implements BackgroundResource
```

Base stub class for the GSuiteAddOns service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> GSuiteAddOnsStub

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

### GSuiteAddOnsStub()

```
public GSuiteAddOnsStub()
```

## Methods

### close()

```
public abstract void close()
```

### createDeploymentCallable()

```
public UnaryCallable<CreateDeploymentRequest,Deployment> createDeploymentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateDeploymentRequest](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.CreateDeploymentRequest),[Deployment](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.Deployment)>`

### deleteDeploymentCallable()

```
public UnaryCallable<DeleteDeploymentRequest,Empty> deleteDeploymentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteDeploymentRequest](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.DeleteDeploymentRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getAuthorizationCallable()

```
public UnaryCallable<GetAuthorizationRequest,Authorization> getAuthorizationCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetAuthorizationRequest](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.GetAuthorizationRequest),[Authorization](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.Authorization)>`

### getDeploymentCallable()

```
public UnaryCallable<GetDeploymentRequest,Deployment> getDeploymentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetDeploymentRequest](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.GetDeploymentRequest),[Deployment](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.Deployment)>`

### getInstallStatusCallable()

```
public UnaryCallable<GetInstallStatusRequest,InstallStatus> getInstallStatusCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetInstallStatusRequest](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.GetInstallStatusRequest),[InstallStatus](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.InstallStatus)>`

### installDeploymentCallable()

```
public UnaryCallable<InstallDeploymentRequest,Empty> installDeploymentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[InstallDeploymentRequest](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.InstallDeploymentRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### listDeploymentsCallable()

```
public UnaryCallable<ListDeploymentsRequest,ListDeploymentsResponse> listDeploymentsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListDeploymentsRequest](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.ListDeploymentsRequest),[ListDeploymentsResponse](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.ListDeploymentsResponse)>`

### listDeploymentsPagedCallable()

```
public UnaryCallable<ListDeploymentsRequest,GSuiteAddOnsClient.ListDeploymentsPagedResponse> listDeploymentsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListDeploymentsRequest](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.ListDeploymentsRequest),[ListDeploymentsPagedResponse](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.GSuiteAddOnsClient.ListDeploymentsPagedResponse)>`

### replaceDeploymentCallable()

```
public UnaryCallable<ReplaceDeploymentRequest,Deployment> replaceDeploymentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ReplaceDeploymentRequest](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.ReplaceDeploymentRequest),[Deployment](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.Deployment)>`

### uninstallDeploymentCallable()

```
public UnaryCallable<UninstallDeploymentRequest,Empty> uninstallDeploymentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UninstallDeploymentRequest](/java/docs/reference/google-cloud-gsuite-addons/2.34.0/com.google.cloud.gsuiteaddons.v1.UninstallDeploymentRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
