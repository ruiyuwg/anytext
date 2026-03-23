-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TransactionOptions.ReadWriteOrBuilder (2.36.0) Stay organized with collections Save and categorize content based on your preferences.

2.36.0 (latest) 2.34.0 2.33.3 2.32.3 2.31.4 2.30.0 2.29.1 2.28.2 2.27.1 2.26.4 2.25.2 2.24.3 2.23.0 2.22.0 2.21.3 2.20.2 2.19.2 2.18.5 2.17.6

```
public static interface TransactionOptions.ReadWriteOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getPreviousTransaction()

```
public abstract ByteString getPreviousTransaction()
```

The transaction identifier of the transaction being retried.

`bytes previous_transaction = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The previousTransaction.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
