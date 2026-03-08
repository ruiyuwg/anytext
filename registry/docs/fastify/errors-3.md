# Errors

## Errors[​](#errors "Direct link to Errors")

[]()

### Error Handling In Node.js[​](#error-handling-in-nodejs "Direct link to Error Handling In Node.js")

[]()

#### Uncaught Errors[​](#uncaught-errors "Direct link to Uncaught Errors")

In Node.js, uncaught errors are likely to cause memory leaks, file descriptor leaks, and other major production issues. [Domains](https://nodejs.org/en/docs/guides/domain-postmortem/) were a failed attempt to fix this.

Given that it is not possible to process all uncaught errors sensibly, the best way to deal with them is to [crash](https://nodejs.org/api/process.html#process_warning_using_uncaughtexception_correctly).

#### Catching Errors In Promises[​](#catching-errors-in-promises "Direct link to Catching Errors In Promises")

In Node.js, unhandled promise rejections (that is, without a `.catch()` handler) can also cause memory and file descriptor leaks. While `unhandledRejection` is deprecated in Node.js, unhandled rejections will not throw, and still potentially leak. You should use a module like [`make-promises-safe`](https://github.com/mcollina/make-promises-safe) to ensure unhandled rejections *always* throw.

If you are using promises, you should attach a `.catch()` handler synchronously.

### Errors In Fastify[​](#errors-in-fastify "Direct link to Errors In Fastify")

Fastify follows an all-or-nothing approach and aims to be lean and optimal as much as possible. The developer is responsible for making sure that the errors are handled properly.

#### Errors In Input Data[​](#errors-in-input-data "Direct link to Errors In Input Data")

Most errors are a result of unexpected input data, so we recommend [validating your input data against a JSON schema](/docs/v3.29.x/Reference/Validation-and-Serialization/.md).

#### Catching Uncaught Errors In Fastify[​](#catching-uncaught-errors-in-fastify "Direct link to Catching Uncaught Errors In Fastify")

Fastify tries to catch as many uncaught errors as it can without hindering performance. This includes:

1. synchronous routes, e.g. `app.get('/', () => { throw new Error('kaboom') })`
2. `async` routes, e.g. `app.get('/', async () => { throw new Error('kaboom') })`

The error in both cases will be caught safely and routed to Fastify's default error handler for a generic `500 Internal Server Error` response.

To customize this behavior you should use [`setErrorHandler`](/docs/v3.29.x/Reference/Server/.md#seterrorhandler).

### Errors In Fastify Lifecycle Hooks And A Custom Error Handler[​](#errors-in-fastify-lifecycle-hooks-and-a-custom-error-handler "Direct link to Errors In Fastify Lifecycle Hooks And A Custom Error Handler")

From the [Hooks documentation](/docs/v3.29.x/Reference/Hooks/.md#manage-errors-from-a-hook):

> If you get an error during the execution of your hook, just pass it to `done()` and Fastify will automatically close the request and send the appropriate error code to the user.

If you have defined a custom error handler for using `setErrorHandler` the error will be routed there. otherwise, it will be routed to Fastify’s generic error handler.

Some things to consider in your custom error handler:

- you can `reply.send(data)`, which will behave as it would in [regular route handlers](/docs/v3.29.x/Reference/Reply/.md#senddata)

  - objects are serialized, triggering the `preSerialization` lifecycle hook if you have one defined
  - strings, buffers, and streams are sent to the client, with appropriate headers (no serialization)

- You can throw a new error in your custom error handler

  - errors (new error or the received error parameter re-thrown) - will trigger the `onError` lifecycle hook and send the error to the user
  - an error will not be triggered twice from a lifecycle hook - Fastify internally monitors the error invocation to avoid infinite loops for errors thrown in the reply phases of the lifecycle. (those after the route handler)

### Fastify Error Codes[​](#fastify-error-codes "Direct link to Fastify Error Codes")

[]()

#### FST\_ERR\_BAD\_URL[​](#fst_err_bad_url "Direct link to FST_ERR_BAD_URL")

[]()

The router received an invalid url.

#### FST\_ERR\_CTP\_ALREADY\_PRESENT[​](#fst_err_ctp_already_present "Direct link to FST_ERR_CTP_ALREADY_PRESENT")

[]()

The parser for this content type was already registered.

#### FST\_ERR\_CTP\_BODY\_TOO\_LARGE[​](#fst_err_ctp_body_too_large "Direct link to FST_ERR_CTP_BODY_TOO_LARGE")

[]()

The request body is larger than the provided limit.

This setting can be defined in the Fastify server instance: [`bodyLimit`](/docs/v3.29.x/Reference/Server/.md#bodylimit)

#### FST\_ERR\_CTP\_EMPTY\_TYPE[​](#fst_err_ctp_empty_type "Direct link to FST_ERR_CTP_EMPTY_TYPE")

[]()

The content type cannot be an empty string.

#### FST\_ERR\_CTP\_INVALID\_CONTENT\_LENGTH[​](#fst_err_ctp_invalid_content_length "Direct link to FST_ERR_CTP_INVALID_CONTENT_LENGTH")

[]()

Request body size did not match Content-Length.

#### FST\_ERR\_CTP\_INVALID\_HANDLER[​](#fst_err_ctp_invalid_handler "Direct link to FST_ERR_CTP_INVALID_HANDLER")

[]()

An invalid handler was passed for the content type.

#### FST\_ERR\_CTP\_INVALID\_MEDIA\_TYPE[​](#fst_err_ctp_invalid_media_type "Direct link to FST_ERR_CTP_INVALID_MEDIA_TYPE")

[]()

The received media type is not supported (i.e. there is no suitable `Content-Type` parser for it).

#### FST\_ERR\_CTP\_INVALID\_PARSE\_TYPE[​](#fst_err_ctp_invalid_parse_type "Direct link to FST_ERR_CTP_INVALID_PARSE_TYPE")

[]()

The provided parse type is not supported. Accepted values are `string` or `buffer`.

#### FST\_ERR\_CTP\_INVALID\_TYPE[​](#fst_err_ctp_invalid_type "Direct link to FST_ERR_CTP_INVALID_TYPE")

[]()

The `Content-Type` should be a string.

#### FST\_ERR\_DEC\_ALREADY\_PRESENT[​](#fst_err_dec_already_present "Direct link to FST_ERR_DEC_ALREADY_PRESENT")

[]()

A decorator with the same name is already registered.

#### FST\_ERR\_DEC\_MISSING\_DEPENDENCY[​](#fst_err_dec_missing_dependency "Direct link to FST_ERR_DEC_MISSING_DEPENDENCY")

[]()

The decorator cannot be registered due to a missing dependency.

#### FST\_ERR\_HOOK\_INVALID\_HANDLER[​](#fst_err_hook_invalid_handler "Direct link to FST_ERR_HOOK_INVALID_HANDLER")

[]()

The hook callback must be a function.

#### FST\_ERR\_HOOK\_INVALID\_TYPE[​](#fst_err_hook_invalid_type "Direct link to FST_ERR_HOOK_INVALID_TYPE")

[]()

The hook name must be a string.

#### FST\_ERR\_LOG\_INVALID\_DESTINATION[​](#fst_err_log_invalid_destination "Direct link to FST_ERR_LOG_INVALID_DESTINATION")

[]()

The logger accepts either a `'stream'` or a `'file'` as the destination.

#### FST\_ERR\_PROMISE\_NOT\_FULFILLED[​](#fst_err_promise_not_fulfilled "Direct link to FST_ERR_PROMISE_NOT_FULFILLED")

[]()

A promise may not be fulfilled with 'undefined' when statusCode is not 204.

#### FST\_ERR\_REP\_ALREADY\_SENT[​](#fst_err_rep_already_sent "Direct link to FST_ERR_REP_ALREADY_SENT")

[]()

A response was already sent.

#### FST\_ERR\_REP\_INVALID\_PAYLOAD\_TYPE[​](#fst_err_rep_invalid_payload_type "Direct link to FST_ERR_REP_INVALID_PAYLOAD_TYPE")

[]()

Reply payload can be either a `string` or a `Buffer`.

#### FST\_ERR\_SCH\_ALREADY\_PRESENT[​](#fst_err_sch_already_present "Direct link to FST_ERR_SCH_ALREADY_PRESENT")

[]()

A schema with the same `$id` already exists.

#### FST\_ERR\_SCH\_MISSING\_ID[​](#fst_err_sch_missing_id "Direct link to FST_ERR_SCH_MISSING_ID")

[]()

The schema provided does not have `$id` property.

#### FST\_ERR\_SCH\_SERIALIZATION\_BUILD[​](#fst_err_sch_serialization_build "Direct link to FST_ERR_SCH_SERIALIZATION_BUILD")

[]()

The JSON schema provided for serialization of a route response is not valid.

#### FST\_ERR\_SCH\_VALIDATION\_BUILD[​](#fst_err_sch_validation_build "Direct link to FST_ERR_SCH_VALIDATION_BUILD")

[]()

The JSON schema provided for validation to a route is not valid.

#### FST\_ERR\_SEND\_INSIDE\_ONERR[​](#fst_err_send_inside_onerr "Direct link to FST_ERR_SEND_INSIDE_ONERR")

[]()

You cannot use `send` inside the `onError` hook.

#### FST\_ERR\_SEND\_UNDEFINED\_ERR[​](#fst_err_send_undefined_err "Direct link to FST_ERR_SEND_UNDEFINED_ERR")

[]()

Undefined error has occurred.

***
