-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface Committer (1.9.4) Stay organized with collections Save and categorize content based on your preferences.

1.16.2 (latest) 1.16.1 1.15.21 1.14.8 1.13.8 1.12.22 1.11.2 1.10.0 1.9.4 1.8.0 1.7.1 1.6.3 1.5.5 1.4.12

```
public interface Committer extends ApiService
```

## Implements

[ApiService](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiService.html)

## Methods

### commitOffset(Offset offset)

```
public abstract ApiFuture<Void> commitOffset(Offset offset)
```

**Parameter**

**Name**

**Description**

`offset`

`[Offset](/java/docs/reference/google-cloud-pubsublite/1.9.4/com.google.cloud.pubsublite.Offset)`  

**Returns**

**Type**

**Description**

`[ApiFuture](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[Void](https://docs.oracle.com/javase/8/docs/api/java/lang/Void.html)>`

### waitUntilEmpty()

```
public abstract void waitUntilEmpty()
```

**Exceptions**

**Type**

**Description**

`[CheckedApiException](/java/docs/reference/google-cloud-pubsublite/1.9.4/com.google.cloud.pubsublite.internal.CheckedApiException)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
