-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class ExactlyOnceAckHandler (2.15.1) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

Defines the interface to acknowledge and reject messages.

When applications register a callback to receive Pub/Sub messages the callback must be able to receive both a [`pubsub::Message`](/cpp/docs/reference/pubsub/2.15.1/classgoogle_1_1cloud_1_1pubsub_1_1Message) and its associated [`pubsub::ExactlyOnceAckHandler`](/cpp/docs/reference/pubsub/2.15.1/classgoogle_1_1cloud_1_1pubsub_1_1ExactlyOnceAckHandler). Actions on a [`pubsub::ExactlyOnceAckHandler`](/cpp/docs/reference/pubsub/2.15.1/classgoogle_1_1cloud_1_1pubsub_1_1ExactlyOnceAckHandler) always affect the same message received in the callback. Applications cannot create standalone handlers (except in unit tests via mocks).

This interface allows applications to acknowledge and reject messages that are provided by the Cloud Pub/Sub C++ client library to the application. Note that this class is move-able, to support applications that process messages asynchronously. However, this class is _not_ copy-able, because messages can only be acknowledged or rejected exactly once.

###### Thread Safety

This class is _thread compatible_, only one thread should call non-const member functions of this class at a time. Note that because the non-const member functions are `&&` overloads the application can only call [`ack()`](/cpp/docs/reference/pubsub/2.15.1/classgoogle_1_1cloud_1_1pubsub_1_1ExactlyOnceAckHandler#classgoogle_1_1cloud_1_1pubsub_1_1ExactlyOnceAckHandler_1a3dfe5c2b5139fbe207a6436202423e53) or [`nack()`](/cpp/docs/reference/pubsub/2.15.1/classgoogle_1_1cloud_1_1pubsub_1_1ExactlyOnceAckHandler#classgoogle_1_1cloud_1_1pubsub_1_1ExactlyOnceAckHandler_1a13f98c7dc62d0aaa5bcd34d624d9797d) exactly once, and only one of them.

## Constructors

### ExactlyOnceAckHandler(ExactlyOnceAckHandler &&)

**Parameter**

**Name**

**Description**

`ExactlyOnceAckHandler &&`  

### ExactlyOnceAckHandler(std::unique\_ptr< Impl >)

Applications may use this constructor in their mocks.

**Parameter**

**Name**

**Description**

`impl`

`std::unique_ptr< Impl >`  

## Operators

### operator=(ExactlyOnceAckHandler &&)

**Parameter**

**Name**

**Description**

`ExactlyOnceAckHandler &&`  

**Returns**

**Type**

**Description**

`ExactlyOnceAckHandler &`

## Functions

### ack() &&

Acknowledges the message associated with this handler.

###### Idempotency

If exactly-once is enabled in the subscription, the client library will retry this operation in the background until it succeeds, fails with a permanent error, or the ack id has become unusable (all ack ids are unusable after 10 minutes). The returned future is satisfied when the retry loop completes. If exactly-once is not enabled, the request is handled on a best-effort basis.

If the future is satisfied with an Okay [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html)**and** exactly-once delivery is enabled in the subscription, then the message will not be resent by Cloud Pub/Sub. We remind the reader that Cloud Pub/Sub defaults to "at least once" delivery, that is, without exactly-once delivery, the message _may_ be resent even after the future is satisfied with an Okay [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html).

If the future is satisfied with an error, it is possible that Cloud Pub/Sub never received the acknowledgement, and will resend the message.

**Returns**

**Type**

**Description**

`future< Status >`

### nack() &&

Rejects the message associated with this handler.

###### Idempotency

If exactly-once is enabled in the subscription, the client library will retry this operation in the background until it succeeds, fails with a permanent error, or the ack id has become unusable (all ack ids are unusable after 10 minutes). The returned future is satisfied when the retry loop completes. If exactly-once is not enabled, the request is handled on a best-effort basis.

In any case, Cloud Pub/Sub will eventually resend the message. It might do so sooner if the operation succeeds.

**Returns**

**Type**

**Description**

`future< Status >`

### delivery\_attempt() const

Returns the approximate number of times that Cloud Pub/Sub has attempted to deliver the associated message to a subscriber.

**Returns**

**Type**

**Description**

`std::int32_t`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
