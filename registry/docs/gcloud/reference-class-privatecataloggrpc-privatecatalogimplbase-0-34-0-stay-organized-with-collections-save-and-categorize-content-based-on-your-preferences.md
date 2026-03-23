-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class PrivateCatalogGrpc.PrivateCatalogImplBase (0.34.0) Stay organized with collections Save and categorize content based on your preferences.

0.89.0 (latest) 0.87.0 0.85.0 0.84.0 0.82.0 0.80.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.72.0 0.70.0 0.69.0 0.66.0 0.65.0 0.64.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.3.7

```
public abstract static class PrivateCatalogGrpc.PrivateCatalogImplBase implements BindableService, PrivateCatalogGrpc.AsyncService
```

Base class for the server implementation of the service PrivateCatalog.

`PrivateCatalog` allows catalog consumers to retrieve `Catalog`, `Product` and `Version` resources under a target resource context. `Catalog` is computed based on the \[Association\]\[\]s linked to the target resource and its ancestors. Each association's \[google.cloud.privatecatalogproducer.v1beta.Catalog\]\[\] is transformed into a `Catalog`. If multiple associations have the same parent \[google.cloud.privatecatalogproducer.v1beta.Catalog\]\[\], they are de-duplicated into one `Catalog`. Users must have `cloudprivatecatalog.catalogTargets.get` IAM permission on the resource context in order to access catalogs. `Catalog` contains the resource name and a subset of data of the original \[google.cloud.privatecatalogproducer.v1beta.Catalog\]\[\]. `Product` is child resource of the catalog. A `Product` contains the resource name and a subset of the data of the original \[google.cloud.privatecatalogproducer.v1beta.Product\]\[\]. `Version` is child resource of the product. A `Version` contains the resource name and a subset of the data of the original \[google.cloud.privatecatalogproducer.v1beta.Version\]\[\].

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> PrivateCatalogGrpc.PrivateCatalogImplBase

## Implements

io.grpc.BindableService, [PrivateCatalogGrpc.AsyncService](/java/docs/reference/google-cloud-private-catalog/0.34.0/com.google.cloud.privatecatalog.v1beta1.PrivateCatalogGrpc.AsyncService)

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

### PrivateCatalogImplBase()

```
public PrivateCatalogImplBase()
```

## Methods

### bindService()

```
public final ServerServiceDefinition bindService()
```

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
