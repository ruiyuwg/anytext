## Errors[​](#errors "Direct link to Errors")

[]()

**Table of contents**

- [Errors](#errors)

  - [Error Handling In Node.js](#error-handling-in-nodejs)

    - [Uncaught Errors](#uncaught-errors)
    - [Catching Errors In Promises](#catching-errors-in-promises)

  - [Errors In Fastify](#errors-in-fastify)

    - [Errors In Input Data](#errors-in-input-data)
    - [Catching Uncaught Errors In Fastify](#catching-uncaught-errors-in-fastify)

  - [Errors In Fastify Lifecycle Hooks And A Custom Error Handler](#errors-in-fastify-lifecycle-hooks-and-a-custom-error-handler)

  - [Fastify Error Codes](#fastify-error-codes)

    - [FST\_ERR\_NOT\_FOUND](#fst_err_not_found)
    - [FST\_ERR\_OPTIONS\_NOT\_OBJ](#fst_err_options_not_obj)
    - [FST\_ERR\_QSP\_NOT\_FN](#fst_err_qsp_not_fn)
    - [FST\_ERR\_SCHEMA\_CONTROLLER\_BUCKET\_OPT\_NOT\_FN](#fst_err_schema_controller_bucket_opt_not_fn)
    - [FST\_ERR\_SCHEMA\_ERROR\_FORMATTER\_NOT\_FN](#fst_err_schema_error_formatter_not_fn)
    - [FST\_ERR\_AJV\_CUSTOM\_OPTIONS\_OPT\_NOT\_OBJ](#fst_err_ajv_custom_options_opt_not_obj)
    - [FST\_ERR\_AJV\_CUSTOM\_OPTIONS\_OPT\_NOT\_ARR](#fst_err_ajv_custom_options_opt_not_arr)
    - [FST\_ERR\_CTP\_ALREADY\_PRESENT](#fst_err_ctp_already_present)
    - [FST\_ERR\_CTP\_INVALID\_TYPE](#fst_err_ctp_invalid_type)
    - [FST\_ERR\_CTP\_EMPTY\_TYPE](#fst_err_ctp_empty_type)
    - [FST\_ERR\_CTP\_INVALID\_HANDLER](#fst_err_ctp_invalid_handler)
    - [FST\_ERR\_CTP\_INVALID\_PARSE\_TYPE](#fst_err_ctp_invalid_parse_type)
    - [FST\_ERR\_CTP\_BODY\_TOO\_LARGE](#fst_err_ctp_body_too_large)
    - [FST\_ERR\_CTP\_INVALID\_MEDIA\_TYPE](#fst_err_ctp_invalid_media_type)
    - [FST\_ERR\_CTP\_INVALID\_CONTENT\_LENGTH](#fst_err_ctp_invalid_content_length)
    - [FST\_ERR\_CTP\_EMPTY\_JSON\_BODY](#fst_err_ctp_empty_json_body)
    - [FST\_ERR\_CTP\_INVALID\_JSON\_BODY](#fst_err_ctp_invalid_json_body)
    - [FST\_ERR\_CTP\_INSTANCE\_ALREADY\_STARTED](#fst_err_ctp_instance_already_started)
    - [FST\_ERR\_INSTANCE\_ALREADY\_LISTENING](#fst_err_instance_already_listening)
    - [FST\_ERR\_DEC\_ALREADY\_PRESENT](#fst_err_dec_already_present)
    - [FST\_ERR\_DEC\_DEPENDENCY\_INVALID\_TYPE](#fst_err_dec_dependency_invalid_type)
    - [FST\_ERR\_DEC\_MISSING\_DEPENDENCY](#fst_err_dec_missing_dependency)
    - [FST\_ERR\_DEC\_AFTER\_START](#fst_err_dec_after_start)
    - [FST\_ERR\_DEC\_REFERENCE\_TYPE](#fst_err_dec_reference_type)
    - [FST\_ERR\_DEC\_UNDECLARED](#fst_err_dec_undeclared)
    - [FST\_ERR\_HOOK\_INVALID\_TYPE](#fst_err_hook_invalid_type)
    - [FST\_ERR\_HOOK\_INVALID\_HANDLER](#fst_err_hook_invalid_handler)
    - [FST\_ERR\_HOOK\_INVALID\_ASYNC\_HANDLER](#fst_err_hook_invalid_async_handler)
    - [FST\_ERR\_HOOK\_NOT\_SUPPORTED](#fst_err_hook_not_supported)
    - [FST\_ERR\_MISSING\_MIDDLEWARE](#fst_err_missing_middleware)
    - [FST\_ERR\_HOOK\_TIMEOUT](#fst_err_hook_timeout)
    - [FST\_ERR\_LOG\_INVALID\_DESTINATION](#fst_err_log_invalid_destination)
    - [FST\_ERR\_LOG\_INVALID\_LOGGER](#fst_err_log_invalid_logger)
    - [FST\_ERR\_LOG\_INVALID\_LOGGER\_INSTANCE](#fst_err_log_invalid_logger_instance)
    - [FST\_ERR\_LOG\_INVALID\_LOGGER\_CONFIG](#fst_err_log_invalid_logger_config)
    - [FST\_ERR\_LOG\_LOGGER\_AND\_LOGGER\_INSTANCE\_PROVIDED](#fst_err_log_logger_and_logger_instance_provided)
    - [FST\_ERR\_REP\_INVALID\_PAYLOAD\_TYPE](#fst_err_rep_invalid_payload_type)
    - [FST\_ERR\_REP\_RESPONSE\_BODY\_CONSUMED](#fst_err_rep_response_body_consumed)
    - [FST\_ERR\_REP\_READABLE\_STREAM\_LOCKED](#fst_err_rep_readable_stream_locked)
    - [FST\_ERR\_REP\_ALREADY\_SENT](#fst_err_rep_already_sent)
    - [FST\_ERR\_REP\_SENT\_VALUE](#fst_err_rep_sent_value)
    - [FST\_ERR\_SEND\_INSIDE\_ONERR](#fst_err_send_inside_onerr)
    - [FST\_ERR\_SEND\_UNDEFINED\_ERR](#fst_err_send_undefined_err)
    - [FST\_ERR\_BAD\_STATUS\_CODE](#fst_err_bad_status_code)
    - [FST\_ERR\_BAD\_TRAILER\_NAME](#fst_err_bad_trailer_name)
    - [FST\_ERR\_BAD\_TRAILER\_VALUE](#fst_err_bad_trailer_value)
    - [FST\_ERR\_FAILED\_ERROR\_SERIALIZATION](#fst_err_failed_error_serialization)
    - [FST\_ERR\_MISSING\_SERIALIZATION\_FN](#fst_err_missing_serialization_fn)
    - [FST\_ERR\_MISSING\_CONTENTTYPE\_SERIALIZATION\_FN](#fst_err_missing_contenttype_serialization_fn)
    - [FST\_ERR\_REQ\_INVALID\_VALIDATION\_INVOCATION](#fst_err_req_invalid_validation_invocation)
    - [FST\_ERR\_SCH\_MISSING\_ID](#fst_err_sch_missing_id)
    - [FST\_ERR\_SCH\_ALREADY\_PRESENT](#fst_err_sch_already_present)
    - [FST\_ERR\_SCH\_CONTENT\_MISSING\_SCHEMA](#fst_err_sch_content_missing_schema)
    - [FST\_ERR\_SCH\_DUPLICATE](#fst_err_sch_duplicate)
    - [FST\_ERR\_SCH\_VALIDATION\_BUILD](#fst_err_sch_validation_build)
    - [FST\_ERR\_SCH\_SERIALIZATION\_BUILD](#fst_err_sch_serialization_build)
    - [FST\_ERR\_SCH\_RESPONSE\_SCHEMA\_NOT\_NESTED\_2XX](#fst_err_sch_response_schema_not_nested_2xx)
    - [FST\_ERR\_INIT\_OPTS\_INVALID](#fst_err_init_opts_invalid)
    - [FST\_ERR\_FORCE\_CLOSE\_CONNECTIONS\_IDLE\_NOT\_AVAILABLE](#fst_err_force_close_connections_idle_not_available)
    - [FST\_ERR\_DUPLICATED\_ROUTE](#fst_err_duplicated_route)
    - [FST\_ERR\_BAD\_URL](#fst_err_bad_url)
    - [FST\_ERR\_ASYNC\_CONSTRAINT](#fst_err_async_constraint)
    - [FST\_ERR\_INVALID\_URL](#fst_err_invalid_url)
    - [FST\_ERR\_ROUTE\_OPTIONS\_NOT\_OBJ](#fst_err_route_options_not_obj)
    - [FST\_ERR\_ROUTE\_DUPLICATED\_HANDLER](#fst_err_route_duplicated_handler)
    - [FST\_ERR\_ROUTE\_HANDLER\_NOT\_FN](#fst_err_route_handler_not_fn)
    - [FST\_ERR\_ROUTE\_MISSING\_HANDLER](#fst_err_route_missing_handler)
    - [FST\_ERR\_ROUTE\_METHOD\_INVALID](#fst_err_route_method_invalid)
    - [FST\_ERR\_ROUTE\_METHOD\_NOT\_SUPPORTED](#fst_err_route_method_not_supported)
    - [FST\_ERR\_ROUTE\_BODY\_VALIDATION\_SCHEMA\_NOT\_SUPPORTED](#fst_err_route_body_validation_schema_not_supported)
    - [FST\_ERR\_ROUTE\_BODY\_LIMIT\_OPTION\_NOT\_INT](#fst_err_route_body_limit_option_not_int)
    - [FST\_ERR\_ROUTE\_REWRITE\_NOT\_STR](#fst_err_route_rewrite_not_str)
    - [FST\_ERR\_REOPENED\_CLOSE\_SERVER](#fst_err_reopened_close_server)
    - [FST\_ERR\_REOPENED\_SERVER](#fst_err_reopened_server)
    - [FST\_ERR\_PLUGIN\_VERSION\_MISMATCH](#fst_err_plugin_version_mismatch)
    - [FST\_ERR\_PLUGIN\_CALLBACK\_NOT\_FN](#fst_err_plugin_callback_not_fn)
    - [FST\_ERR\_PLUGIN\_NOT\_VALID](#fst_err_plugin_not_valid)
    - [FST\_ERR\_ROOT\_PLG\_BOOTED](#fst_err_root_plg_booted)
    - [FST\_ERR\_PARENT\_PLUGIN\_BOOTED](#fst_err_parent_plugin_booted)
    - [FST\_ERR\_PLUGIN\_TIMEOUT](#fst_err_plugin_timeout)
    - [FST\_ERR\_PLUGIN\_NOT\_PRESENT\_IN\_INSTANCE](#fst_err_plugin_not_present_in_instance)
    - [FST\_ERR\_PLUGIN\_INVALID\_ASYNC\_HANDLER](#fst_err_plugin_invalid_async_handler)
    - [FST\_ERR\_VALIDATION](#fst_err_validation)
    - [FST\_ERR\_LISTEN\_OPTIONS\_INVALID](#fst_err_listen_options_invalid)
    - [FST\_ERR\_ERROR\_HANDLER\_NOT\_FN](#fst_err_error_handler_not_fn)
    - [FST\_ERR\_ERROR\_HANDLER\_ALREADY\_SET](#fst_err_error_handler_already_set)

### Error Handling In Node.js[​](#error-handling-in-nodejs "Direct link to Error Handling In Node.js")

[]()

#### Uncaught Errors[​](#uncaught-errors "Direct link to Uncaught Errors")

In Node.js, uncaught errors can cause memory leaks, file descriptor leaks, and other major production issues. [Domains](https://nodejs.org/en/docs/guides/domain-postmortem/) were a failed attempt to fix this.

Given that it is not possible to process all uncaught errors sensibly, the best way to deal with them is to [crash](https://nodejs.org/api/process.html#process_warning_using_uncaughtexception_correctly).

#### Catching Errors In Promises[​](#catching-errors-in-promises "Direct link to Catching Errors In Promises")

When using promises, attach a `.catch()` handler synchronously.

### Errors In Fastify[​](#errors-in-fastify "Direct link to Errors In Fastify")

Fastify follows an all-or-nothing approach and aims to be lean and optimal. The developer is responsible for ensuring errors are handled properly.

#### Errors In Input Data[​](#errors-in-input-data "Direct link to Errors In Input Data")

Most errors result from unexpected input data, so it is recommended to [validate input data against a JSON schema](/docs/v5.7.x/Reference/Validation-and-Serialization/.md).

#### Catching Uncaught Errors In Fastify[​](#catching-uncaught-errors-in-fastify "Direct link to Catching Uncaught Errors In Fastify")

Fastify tries to catch as many uncaught errors as possible without hindering performance. This includes:

1. synchronous routes, e.g. `app.get('/', () => { throw new Error('kaboom') })`
2. `async` routes, e.g. `app.get('/', async () => { throw new Error('kaboom') })`

In both cases, the error will be caught safely and routed to Fastify's default error handler, resulting in a generic `500 Internal Server Error` response.

To customize this behavior, use [`setErrorHandler`](/docs/v5.7.x/Reference/Server/.md#seterrorhandler).
