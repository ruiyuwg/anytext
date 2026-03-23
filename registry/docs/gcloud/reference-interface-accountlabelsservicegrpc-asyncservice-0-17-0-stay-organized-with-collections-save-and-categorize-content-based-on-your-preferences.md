-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AccountLabelsServiceGrpc.AsyncService (0.17.0) Stay organized with collections Save and categorize content based on your preferences.

0.55.0 (latest) 0.53.0 0.51.0 0.50.0 0.48.0 0.46.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.38.0 0.36.0 0.35.0 0.32.0 0.31.0 0.30.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static interface AccountLabelsServiceGrpc.AsyncService
```

Manages Merchant Center and CSS accounts labels.

## Methods

### createAccountLabel(CreateAccountLabelRequest request, StreamObserver<AccountLabel> responseObserver)

```
public default void createAccountLabel(CreateAccountLabelRequest request, StreamObserver<AccountLabel> responseObserver)
```

Creates a new label, not assigned to any account.

**Parameters**

**Name**

**Description**

`request`

`[CreateAccountLabelRequest](/java/docs/reference/google-shopping-css/0.17.0/com.google.shopping.css.v1.CreateAccountLabelRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[AccountLabel](/java/docs/reference/google-shopping-css/0.17.0/com.google.shopping.css.v1.AccountLabel)>`  

### deleteAccountLabel(DeleteAccountLabelRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteAccountLabel(DeleteAccountLabelRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a label and removes it from all accounts to which it was assigned.

**Parameters**

**Name**

**Description**

`request`

`[DeleteAccountLabelRequest](/java/docs/reference/google-shopping-css/0.17.0/com.google.shopping.css.v1.DeleteAccountLabelRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### listAccountLabels(ListAccountLabelsRequest request, StreamObserver<ListAccountLabelsResponse> responseObserver)

```
public default void listAccountLabels(ListAccountLabelsRequest request, StreamObserver<ListAccountLabelsResponse> responseObserver)
```

Lists the labels assigned to an account.

**Parameters**

**Name**

**Description**

`request`

`[ListAccountLabelsRequest](/java/docs/reference/google-shopping-css/0.17.0/com.google.shopping.css.v1.ListAccountLabelsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListAccountLabelsResponse](/java/docs/reference/google-shopping-css/0.17.0/com.google.shopping.css.v1.ListAccountLabelsResponse)>`  

### updateAccountLabel(UpdateAccountLabelRequest request, StreamObserver<AccountLabel> responseObserver)

```
public default void updateAccountLabel(UpdateAccountLabelRequest request, StreamObserver<AccountLabel> responseObserver)
```

Updates a label.

**Parameters**

**Name**

**Description**

`request`

`[UpdateAccountLabelRequest](/java/docs/reference/google-shopping-css/0.17.0/com.google.shopping.css.v1.UpdateAccountLabelRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[AccountLabel](/java/docs/reference/google-shopping-css/0.17.0/com.google.shopping.css.v1.AccountLabel)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
