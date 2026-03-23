-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class DomainsClient (2.30.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0

The Cloud Domains API enables management and configuration of domain names.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### DomainsClient(DomainsClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`DomainsClient const &`  

### DomainsClient(DomainsClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`DomainsClient &&`  

### DomainsClient(std::shared\_ptr< DomainsConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< DomainsConnection >`  

`opts`

`Options`  

## Operators

### operator=(DomainsClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`DomainsClient const &`  

**Returns**

**Type**

**Description**

`DomainsClient &`

### operator=(DomainsClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`DomainsClient &&`  

**Returns**

**Type**

**Description**

`DomainsClient &`

## Functions

### SearchDomains(std::string const &, std::string const &, Options)

Searches for available domain names similar to the provided query.

Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.

**Parameters**

**Name**

**Description**

`location`

`std::string const &`  

Required. The location. Must be in the format `projects/*/locations/*`.

`query`

`std::string const &`  

Required. String used to search for available domain names.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::domains::v1::SearchDomainsResponse >`

the result of the RPC. The response message type ([google.cloud.domains.v1.SearchDomainsResponse](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L682)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SearchDomains(google::cloud::domains::v1::SearchDomainsRequest const &, Options)

Searches for available domain names similar to the provided query.

Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::SearchDomainsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.SearchDomainsRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L668). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::domains::v1::SearchDomainsResponse >`

the result of the RPC. The response message type ([google.cloud.domains.v1.SearchDomainsResponse](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L682)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### RetrieveRegisterParameters(std::string const &, std::string const &, Options)

Gets parameters needed to register a new domain name, including price and up-to-date availability.

Use the returned values to call `RegisterDomain`.

**Parameters**

**Name**

**Description**

`location`

`std::string const &`  

Required. The location. Must be in the format `projects/*/locations/*`.

`domain_name`

`std::string const &`  

Required. The domain name. Unicode domain names must be expressed in Punycode format.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::domains::v1::RetrieveRegisterParametersResponse >`

the result of the RPC. The response message type ([google.cloud.domains.v1.RetrieveRegisterParametersResponse](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L702)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### RetrieveRegisterParameters(google::cloud::domains::v1::RetrieveRegisterParametersRequest const &, Options)

Gets parameters needed to register a new domain name, including price and up-to-date availability.

Use the returned values to call `RegisterDomain`.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::RetrieveRegisterParametersRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.RetrieveRegisterParametersRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L688). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::domains::v1::RetrieveRegisterParametersResponse >`

the result of the RPC. The response message type ([google.cloud.domains.v1.RetrieveRegisterParametersResponse](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L702)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### RegisterDomain(std::string const &, google::cloud::domains::v1::Registration const &, google::type::Money const &, Options)

Registers a new domain name and creates a corresponding `Registration` resource.

Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method.

A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent resource of the `Registration`. Must be in the format `projects/*/locations/*`.

`registration`

`google::cloud::domains::v1::Registration const &`  

Required. The complete `Registration` resource to be created.

`yearly_price`

`google::type::Money const &`  

Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from RetrieveRegisterParameters or SearchDomains calls.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### RegisterDomain(NoAwaitTag, std::string const &, google::cloud::domains::v1::Registration const &, google::type::Money const &, Options)

Registers a new domain name and creates a corresponding `Registration` resource.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`parent`

`std::string const &`  

`registration`

`google::cloud::domains::v1::Registration const &`  

`yearly_price`

`google::type::Money const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### RegisterDomain(google::cloud::domains::v1::RegisterDomainRequest const &, Options)

Registers a new domain name and creates a corresponding `Registration` resource.

Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method.

A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::RegisterDomainRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.RegisterDomainRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L708). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### RegisterDomain(NoAwaitTag, google::cloud::domains::v1::RegisterDomainRequest const &, Options)

Registers a new domain name and creates a corresponding `Registration` resource.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::domains::v1::RegisterDomainRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### RegisterDomain(google::longrunning::Operation const &, Options)

Registers a new domain name and creates a corresponding `Registration` resource.

This method accepts a `google::longrunning::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

### RetrieveTransferParameters(std::string const &, std::string const &, Options)

Gets parameters needed to transfer a domain name from another registrar to Cloud Domains.

For domains managed by Google Domains, transferring to Cloud Domains is not supported.

Use the returned values to call `TransferDomain`.

**Parameters**

**Name**

**Description**

`location`

`std::string const &`  

Required. The location. Must be in the format `projects/*/locations/*`.

`domain_name`

`std::string const &`  

Required. The domain name. Unicode domain names must be expressed in Punycode format.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::domains::v1::RetrieveTransferParametersResponse >`

the result of the RPC. The response message type ([google.cloud.domains.v1.RetrieveTransferParametersResponse](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L756)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### RetrieveTransferParameters(google::cloud::domains::v1::RetrieveTransferParametersRequest const &, Options)

Gets parameters needed to transfer a domain name from another registrar to Cloud Domains.

For domains managed by Google Domains, transferring to Cloud Domains is not supported.

Use the returned values to call `TransferDomain`.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::RetrieveTransferParametersRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.RetrieveTransferParametersRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L742). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::domains::v1::RetrieveTransferParametersResponse >`

the result of the RPC. The response message type ([google.cloud.domains.v1.RetrieveTransferParametersResponse](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L756)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### TransferDomain(std::string const &, google::cloud::domains::v1::Registration const &, google::type::Money const &, google::cloud::domains::v1::AuthorizationCode const &, Options)

Transfers a domain name from another registrar to Cloud Domains.

For domains managed by Google Domains, transferring to Cloud Domains is not supported.

Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method.

A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website.

A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent resource of the `Registration`. Must be in the format `projects/*/locations/*`.

`registration`

`google::cloud::domains::v1::Registration const &`  

Required. The complete `Registration` resource to be created.  
You can leave `registration.dns_settings` unset to import the domain's current DNS configuration from its current registrar. Use this option only if you are sure that the domain's current DNS service does not cease upon transfer, as is often the case for DNS services provided for free by the registrar.

`yearly_price`

`google::type::Money const &`  

Required. Acknowledgement of the price to transfer or renew the domain for one year. Call `RetrieveTransferParameters` to obtain the price, which you must acknowledge.

`authorization_code`

`google::cloud::domains::v1::AuthorizationCode const &`  

The domain's transfer authorization code. You can obtain this from the domain's current registrar.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### TransferDomain(NoAwaitTag, std::string const &, google::cloud::domains::v1::Registration const &, google::type::Money const &, google::cloud::domains::v1::AuthorizationCode const &, Options)

Transfers a domain name from another registrar to Cloud Domains.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`parent`

`std::string const &`  

`registration`

`google::cloud::domains::v1::Registration const &`  

`yearly_price`

`google::type::Money const &`  

`authorization_code`

`google::cloud::domains::v1::AuthorizationCode const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### TransferDomain(google::cloud::domains::v1::TransferDomainRequest const &, Options)

Transfers a domain name from another registrar to Cloud Domains.

For domains managed by Google Domains, transferring to Cloud Domains is not supported.

Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method.

A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website.

A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::TransferDomainRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.TransferDomainRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L762). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### TransferDomain(NoAwaitTag, google::cloud::domains::v1::TransferDomainRequest const &, Options)

Transfers a domain name from another registrar to Cloud Domains.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::domains::v1::TransferDomainRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### TransferDomain(google::longrunning::Operation const &, Options)

Transfers a domain name from another registrar to Cloud Domains.

This method accepts a `google::longrunning::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

### ListRegistrations(std::string const &, Options)

Lists the `Registration` resources in a project.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The project and location from which to list `Registration`s, specified in the format `projects/*/locations/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::domains::v1::Registration >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListRegistrations(google::cloud::domains::v1::ListRegistrationsRequest, Options)

Lists the `Registration` resources in a project.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::ListRegistrationsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.ListRegistrationsRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L800). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::domains::v1::Registration >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetRegistration(std::string const &, Options)

Gets the details of a `Registration` resource.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the `Registration` to get, in the format `projects/*/locations/*/registrations/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::domains::v1::Registration >`

the result of the RPC. The response message type ([google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetRegistration(google::cloud::domains::v1::GetRegistrationRequest const &, Options)

Gets the details of a `Registration` resource.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::GetRegistrationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.GetRegistrationRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L847). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::domains::v1::Registration >`

the result of the RPC. The response message type ([google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateRegistration(google::cloud::domains::v1::Registration const &, google::protobuf::FieldMask const &, Options)

Updates select fields of a `Registration` resource, notably `labels`.

To update other fields, use the appropriate custom update method:

-   To update management settings, see `ConfigureManagementSettings`
-   To update DNS configuration, see `ConfigureDnsSettings`
-   To update contact information, see `ConfigureContactSettings`

**Parameters**

**Name**

**Description**

`registration`

`google::cloud::domains::v1::Registration const &`  

Fields of the `Registration` to update.

`update_mask`

`google::protobuf::FieldMask const &`  

Required. The field mask describing which fields to update as a comma-separated list. For example, if only the labels are being updated, the `update_mask` is `"labels"`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateRegistration(NoAwaitTag, google::cloud::domains::v1::Registration const &, google::protobuf::FieldMask const &, Options)

Updates select fields of a `Registration` resource, notably `labels`.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`registration`

`google::cloud::domains::v1::Registration const &`  

`update_mask`

`google::protobuf::FieldMask const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### UpdateRegistration(google::cloud::domains::v1::UpdateRegistrationRequest const &, Options)

Updates select fields of a `Registration` resource, notably `labels`.

To update other fields, use the appropriate custom update method:

-   To update management settings, see `ConfigureManagementSettings`
-   To update DNS configuration, see `ConfigureDnsSettings`
-   To update contact information, see `ConfigureContactSettings`

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::UpdateRegistrationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.UpdateRegistrationRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L859). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateRegistration(NoAwaitTag, google::cloud::domains::v1::UpdateRegistrationRequest const &, Options)

Updates select fields of a `Registration` resource, notably `labels`.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::domains::v1::UpdateRegistrationRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### UpdateRegistration(google::longrunning::Operation const &, Options)

Updates select fields of a `Registration` resource, notably `labels`.

This method accepts a `google::longrunning::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

### ConfigureManagementSettings(std::string const &, google::cloud::domains::v1::ManagementSettings const &, google::protobuf::FieldMask const &, Options)

Updates a `Registration`'s management settings.

**Parameters**

**Name**

**Description**

`registration`

`std::string const &`  

Required. The name of the `Registration` whose management settings are being updated, in the format `projects/*/locations/*/registrations/*`.

`management_settings`

`google::cloud::domains::v1::ManagementSettings const &`  

Fields of the `ManagementSettings` to update.

`update_mask`

`google::protobuf::FieldMask const &`  

Required. The field mask describing which fields to update as a comma-separated list. For example, if only the transfer lock is being updated, the `update_mask` is `"transfer_lock_state"`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ConfigureManagementSettings(NoAwaitTag, std::string const &, google::cloud::domains::v1::ManagementSettings const &, google::protobuf::FieldMask const &, Options)

Updates a `Registration`'s management settings.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`registration`

`std::string const &`  

`management_settings`

`google::cloud::domains::v1::ManagementSettings const &`  

`update_mask`

`google::protobuf::FieldMask const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### ConfigureManagementSettings(google::cloud::domains::v1::ConfigureManagementSettingsRequest const &, Options)

Updates a `Registration`'s management settings.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::ConfigureManagementSettingsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.ConfigureManagementSettingsRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L870). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ConfigureManagementSettings(NoAwaitTag, google::cloud::domains::v1::ConfigureManagementSettingsRequest const &, Options)

Updates a `Registration`'s management settings.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::domains::v1::ConfigureManagementSettingsRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### ConfigureManagementSettings(google::longrunning::Operation const &, Options)

Updates a `Registration`'s management settings.

This method accepts a `google::longrunning::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

### ConfigureDnsSettings(std::string const &, google::cloud::domains::v1::DnsSettings const &, google::protobuf::FieldMask const &, Options)

Updates a `Registration`'s DNS settings.

**Parameters**

**Name**

**Description**

`registration`

`std::string const &`  

Required. The name of the `Registration` whose DNS settings are being updated, in the format `projects/*/locations/*/registrations/*`.

`dns_settings`

`google::cloud::domains::v1::DnsSettings const &`  

Fields of the `DnsSettings` to update.

`update_mask`

`google::protobuf::FieldMask const &`  

Required. The field mask describing which fields to update as a comma-separated list. For example, if only the name servers are being updated for an existing Custom DNS configuration, the `update_mask` is `"custom_dns.name_servers"`.  
When changing the DNS provider from one type to another, pass the new provider's field name as part of the field mask. For example, when changing from a Google Domains DNS configuration to a Custom DNS configuration, the `update_mask` is `"custom_dns"`. //

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ConfigureDnsSettings(NoAwaitTag, std::string const &, google::cloud::domains::v1::DnsSettings const &, google::protobuf::FieldMask const &, Options)

Updates a `Registration`'s DNS settings.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`registration`

`std::string const &`  

`dns_settings`

`google::cloud::domains::v1::DnsSettings const &`  

`update_mask`

`google::protobuf::FieldMask const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### ConfigureDnsSettings(google::cloud::domains::v1::ConfigureDnsSettingsRequest const &, Options)

Updates a `Registration`'s DNS settings.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::ConfigureDnsSettingsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.ConfigureDnsSettingsRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L890). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ConfigureDnsSettings(NoAwaitTag, google::cloud::domains::v1::ConfigureDnsSettingsRequest const &, Options)

Updates a `Registration`'s DNS settings.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::domains::v1::ConfigureDnsSettingsRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### ConfigureDnsSettings(google::longrunning::Operation const &, Options)

Updates a `Registration`'s DNS settings.

This method accepts a `google::longrunning::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

### ConfigureContactSettings(std::string const &, google::cloud::domains::v1::ContactSettings const &, google::protobuf::FieldMask const &, Options)

Updates a `Registration`'s contact settings.

Some changes require confirmation by the domain's registrant contact .

**Parameters**

**Name**

**Description**

`registration`

`std::string const &`  

Required. The name of the `Registration` whose contact settings are being updated, in the format `projects/*/locations/*/registrations/*`.

`contact_settings`

`google::cloud::domains::v1::ContactSettings const &`  

Fields of the `ContactSettings` to update.

`update_mask`

`google::protobuf::FieldMask const &`  

Required. The field mask describing which fields to update as a comma-separated list. For example, if only the registrant contact is being updated, the `update_mask` is `"registrant_contact"`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ConfigureContactSettings(NoAwaitTag, std::string const &, google::cloud::domains::v1::ContactSettings const &, google::protobuf::FieldMask const &, Options)

Updates a `Registration`'s contact settings.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`registration`

`std::string const &`  

`contact_settings`

`google::cloud::domains::v1::ContactSettings const &`  

`update_mask`

`google::protobuf::FieldMask const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### ConfigureContactSettings(google::cloud::domains::v1::ConfigureContactSettingsRequest const &, Options)

Updates a `Registration`'s contact settings.

Some changes require confirmation by the domain's registrant contact .

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::ConfigureContactSettingsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.ConfigureContactSettingsRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L919). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ConfigureContactSettings(NoAwaitTag, google::cloud::domains::v1::ConfigureContactSettingsRequest const &, Options)

Updates a `Registration`'s contact settings.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::domains::v1::ConfigureContactSettingsRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### ConfigureContactSettings(google::longrunning::Operation const &, Options)

Updates a `Registration`'s contact settings.

This method accepts a `google::longrunning::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

### ExportRegistration(std::string const &, Options)

Exports a `Registration` resource, such that it is no longer managed by Cloud Domains.

When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the `Registration` to export, in the format `projects/*/locations/*/registrations/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ExportRegistration(NoAwaitTag, std::string const &, Options)

Exports a `Registration` resource, such that it is no longer managed by Cloud Domains.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`name`

`std::string const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### ExportRegistration(google::cloud::domains::v1::ExportRegistrationRequest const &, Options)

Exports a `Registration` resource, such that it is no longer managed by Cloud Domains.

When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::ExportRegistrationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.ExportRegistrationRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L946). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.Registration](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L297) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ExportRegistration(NoAwaitTag, google::cloud::domains::v1::ExportRegistrationRequest const &, Options)

Exports a `Registration` resource, such that it is no longer managed by Cloud Domains.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::domains::v1::ExportRegistrationRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### ExportRegistration(google::longrunning::Operation const &, Options)

Exports a `Registration` resource, such that it is no longer managed by Cloud Domains.

This method accepts a `google::longrunning::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::Registration > >`

### DeleteRegistration(std::string const &, Options)

Deletes a `Registration` resource.

This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past.

For `Registration` resources using [Monthly billing](/domains/pricing#billing-models), this method works if:

-   `state` is `EXPORTED` with `expire_time` in the past
-   `state` is `REGISTRATION_FAILED`
-   `state` is `TRANSFER_FAILED`

When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the `Registration` to delete, in the format `projects/*/locations/*/registrations/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::OperationMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.OperationMetadata](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L1065) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteRegistration(NoAwaitTag, std::string const &, Options)

Deletes a `Registration` resource.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`name`

`std::string const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### DeleteRegistration(google::cloud::domains::v1::DeleteRegistrationRequest const &, Options)

Deletes a `Registration` resource.

This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past.

For `Registration` resources using [Monthly billing](/domains/pricing#billing-models), this method works if:

-   `state` is `EXPORTED` with `expire_time` in the past
-   `state` is `REGISTRATION_FAILED`
-   `state` is `TRANSFER_FAILED`

When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::DeleteRegistrationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.DeleteRegistrationRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L958). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::OperationMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.domains.v1.OperationMetadata](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L1065) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteRegistration(NoAwaitTag, google::cloud::domains::v1::DeleteRegistrationRequest const &, Options)

Deletes a `Registration` resource.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::domains::v1::DeleteRegistrationRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### DeleteRegistration(google::longrunning::Operation const &, Options)

Deletes a `Registration` resource.

This method accepts a `google::longrunning::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::domains::v1::OperationMetadata > >`

### RetrieveAuthorizationCode(std::string const &, Options)

Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar.

You can call this method only after 60 days have elapsed since the initial domain registration.

**Parameters**

**Name**

**Description**

`registration`

`std::string const &`  

Required. The name of the `Registration` whose authorization code is being retrieved, in the format `projects/*/locations/*/registrations/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::domains::v1::AuthorizationCode >`

the result of the RPC. The response message type ([google.cloud.domains.v1.AuthorizationCode](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L1058)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### RetrieveAuthorizationCode(google::cloud::domains::v1::RetrieveAuthorizationCodeRequest const &, Options)

Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar.

You can call this method only after 60 days have elapsed since the initial domain registration.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::RetrieveAuthorizationCodeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.RetrieveAuthorizationCodeRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L970). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::domains::v1::AuthorizationCode >`

the result of the RPC. The response message type ([google.cloud.domains.v1.AuthorizationCode](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L1058)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ResetAuthorizationCode(std::string const &, Options)

Resets the authorization code of the `Registration` to a new random string.

You can call this method only after 60 days have elapsed since the initial domain registration.

**Parameters**

**Name**

**Description**

`registration`

`std::string const &`  

Required. The name of the `Registration` whose authorization code is being reset, in the format `projects/*/locations/*/registrations/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::domains::v1::AuthorizationCode >`

the result of the RPC. The response message type ([google.cloud.domains.v1.AuthorizationCode](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L1058)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ResetAuthorizationCode(google::cloud::domains::v1::ResetAuthorizationCodeRequest const &, Options)

Resets the authorization code of the `Registration` to a new random string.

You can call this method only after 60 days have elapsed since the initial domain registration.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::domains::v1::ResetAuthorizationCodeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.domains.v1.ResetAuthorizationCodeRequest](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L982). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::domains::v1::AuthorizationCode >`

the result of the RPC. The response message type ([google.cloud.domains.v1.AuthorizationCode](https://github.com/googleapis/googleapis/blob/69e9dff10df4fa1e338712d38dc26b46791a6e94/google/cloud/domains/v1/domains.proto#L1058)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
