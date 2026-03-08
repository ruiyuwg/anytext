# Errors

[]()

## Errors[​](#errors "Direct link to Errors")

[]()

### Error Handling[​](#error-handling "Direct link to Error Handling")

Uncaught errors are likely to cause memory leaks, file descriptor leaks and other major production issues. [Domains](https://nodejs.org/en/docs/guides/domain-postmortem/) were introduced to try fixing this issue, but they did not. Given the fact that it is not possible to process all uncaught errors sensibly, the best way to deal with them at the moment is to [crash](https://nodejs.org/api/process.html#process_warning_using_uncaughtexception_correctly). In case of promises, make sure to [handle](https://nodejs.org/dist/latest-v8.x/docs/api/deprecations.html#deprecations_dep0018_unhandled_promise_rejections) errors [correctly](https://github.com/mcollina/make-promises-safe).

Fastify follows an all-or-nothing approach and aims to be lean and optimal as much as possible. Thus, the developer is responsible for making sure that the errors are handled properly. Most of the errors are usually a result of unexpected input data, so we recommend specifying a [JSON.schema validation](https://github.com/fastify/fastify/blob/master/docs/Validation-and-Serialization.md) for your input data.

Note that Fastify doesn't catch uncaught errors within callback-based routes for you, so any uncaught errors will result in a crash. If routes are declared as `async` though - the error will safely be caught by the promise and routed to the default error handler of Fastify for a generic `Internal Server Error` response. For customizing this behaviour, you should use [setErrorHandler](https://github.com/fastify/fastify/blob/master/docs/Server.md#seterrorhandler).

[]()

### Fastify Error Codes[​](#fastify-error-codes "Direct link to Fastify Error Codes")

[]()

#### FST\_ERR\_BAD\_URL[​](#fst_err_bad_url "Direct link to FST_ERR_BAD_URL")

The router received an invalid url.

[]()

#### FST\_ERR\_CTP\_ALREADY\_PRESENT[​](#fst_err_ctp_already_present "Direct link to FST_ERR_CTP_ALREADY_PRESENT")

The parser for this content type was already registered.

[]()

#### FST\_ERR\_CTP\_INVALID\_TYPE[​](#fst_err_ctp_invalid_type "Direct link to FST_ERR_CTP_INVALID_TYPE")

The `Content-Type` should be a string.

[]()

#### FST\_ERR\_CTP\_EMPTY\_TYPE[​](#fst_err_ctp_empty_type "Direct link to FST_ERR_CTP_EMPTY_TYPE")

The content type cannot be an empty string.

[]()

#### FST\_ERR\_CTP\_INVALID\_HANDLER[​](#fst_err_ctp_invalid_handler "Direct link to FST_ERR_CTP_INVALID_HANDLER")

An invalid handler was passed for the content type.

[]()

#### FST\_ERR\_CTP\_INVALID\_PARSE\_TYPE[​](#fst_err_ctp_invalid_parse_type "Direct link to FST_ERR_CTP_INVALID_PARSE_TYPE")

The provided parse type is not supported. Accepted values are `string` or `buffer`.

[]()

#### FST\_ERR\_CTP\_BODY\_TOO\_LARGE[​](#fst_err_ctp_body_too_large "Direct link to FST_ERR_CTP_BODY_TOO_LARGE")

The request body is larger than the provided limit.

[]()

#### FST\_ERR\_CTP\_INVALID\_MEDIA\_TYPE[​](#fst_err_ctp_invalid_media_type "Direct link to FST_ERR_CTP_INVALID_MEDIA_TYPE")

The received media type is not supported (i.e. there is no suitable `Content-Type` parser for it).

[]()

#### FST\_ERR\_CTP\_INVALID\_CONTENT\_LENGTH[​](#fst_err_ctp_invalid_content_length "Direct link to FST_ERR_CTP_INVALID_CONTENT_LENGTH")

Request body size did not match Content-Length.

[]()

#### FST\_ERR\_DEC\_ALREADY\_PRESENT[​](#fst_err_dec_already_present "Direct link to FST_ERR_DEC_ALREADY_PRESENT")

A decorator with the same name is already registered.

[]()

#### FST\_ERR\_DEC\_MISSING\_DEPENDENCY[​](#fst_err_dec_missing_dependency "Direct link to FST_ERR_DEC_MISSING_DEPENDENCY")

The decorator cannot be registered due to a missing dependency.

[]()

#### FST\_ERR\_HOOK\_INVALID\_TYPE[​](#fst_err_hook_invalid_type "Direct link to FST_ERR_HOOK_INVALID_TYPE")

The hook name must be a string.

[]()

#### FST\_ERR\_HOOK\_INVALID\_HANDLER[​](#fst_err_hook_invalid_handler "Direct link to FST_ERR_HOOK_INVALID_HANDLER")

The hook callback must be a function.

[]()

#### FST\_ERR\_LOG\_INVALID\_DESTINATION[​](#fst_err_log_invalid_destination "Direct link to FST_ERR_LOG_INVALID_DESTINATION")

The logger accepts either a `'stream'` or a `'file'` as the destination.

[]()

### FST\_ERR\_REP\_ALREADY\_SENT[​](#fst_err_rep_already_sent "Direct link to FST_ERR_REP_ALREADY_SENT")

A response was already sent.

[]()

#### FST\_ERR\_SEND\_INSIDE\_ONERR[​](#fst_err_send_inside_onerr "Direct link to FST_ERR_SEND_INSIDE_ONERR")

You cannot use `send` inside the `onError` hook.

[]()

#### FST\_ERR\_REP\_INVALID\_PAYLOAD\_TYPE[​](#fst_err_rep_invalid_payload_type "Direct link to FST_ERR_REP_INVALID_PAYLOAD_TYPE")

Reply payload can either be a `string` or a `Buffer`.

[]()

#### FST\_ERR\_SCH\_MISSING\_ID[​](#fst_err_sch_missing_id "Direct link to FST_ERR_SCH_MISSING_ID")

The schema provided does not have `$id` property.

[]()

#### FST\_ERR\_SCH\_ALREADY\_PRESENT[​](#fst_err_sch_already_present "Direct link to FST_ERR_SCH_ALREADY_PRESENT")

A schema with the same `$id` already exists.

[]()

#### FST\_ERR\_SCH\_NOT\_PRESENT[​](#fst_err_sch_not_present "Direct link to FST_ERR_SCH_NOT_PRESENT")

No schema with the provided `$id` exists.

[]()

#### FST\_ERR\_SCH\_BUILD[​](#fst_err_sch_build "Direct link to FST_ERR_SCH_BUILD")

The JSON schema provided to one route is not valid.

[]()

#### FST\_ERR\_PROMISE\_NOT\_FULLFILLED[​](#fst_err_promise_not_fullfilled "Direct link to FST_ERR_PROMISE_NOT_FULLFILLED")

A promise may not be fulfilled with 'undefined' when statusCode is not 204.

[]()

#### FST\_ERR\_SEND\_UNDEFINED\_ERR[​](#fst_err_send_undefined_err "Direct link to FST_ERR_SEND_UNDEFINED_ERR")

Undefined error has occured.

***
