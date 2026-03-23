# Errors

Source: https://resend.com/docs/api-reference/errors

Troubleshoot problems with this comprehensive breakdown of all error codes.

## Error schema

We use standard HTTP response codes for success and failure notifications, and our errors are further classified by type.

### `invalid_idempotency_key`

- **Status:** 400
- **Message:** The key must be between 1-256 chars.
- **Suggested action:** Retry with a valid idempotency key.

### `validation_error`

- **Status:** 400
- **Message:** We found an error with one or more fields in the request.
- **Suggested action:** The message will contain more details about what field and error were found.

### `missing_api_key`

- **Status:** 401
- **Message:** Missing API key in the authorization header.
- **Suggested action:** Include the following header in the request: `Authorization: Bearer YOUR_API_KEY`.

### `restricted_api_key`

- **Status:** 401
- **Message:** This API key is restricted to only send emails.
- **Suggested action:** Make sure the API key has `Full access` to perform actions other than sending emails.

### `invalid_api_key`

- **Status:** 403
- **Message:** API key is invalid.
- **Suggested action:** Make sure the API key is correct or generate a new [API key in the dashboard](https://resend.com/api-keys).

### `validation_error`

- **Status:** 403
- **Message:** You can only send testing emails to your own email address (`youremail@domain.com`). To send emails to other recipients, please verify a domain at resend.com/domains, and change the `from` address to an email using this domain.
- **Suggested action:** In [Resend's Domain page](https://resend.com/domains), add and verify a domain for which you have DNS access. This allows you to send emails to addresses beyond your own. [Learn more about resolving this error](/knowledge-base/403-error-resend-dev-domain).

### `validation_error`

- **Status:** 403
- **Message:** The `domain.com` domain is not verified. Please, add and verify your domain.
- **Suggested action:** Make sure the domain in your API request's `from` field matches a domain you've verified in Resend. Update your API request to use your verified domain, or add and verify the domain you're trying to use. [Learn more about resolving this error](/knowledge-base/403-error-domain-mismatch).

### `validation_error`

- **Status:** 403
- **Message:** The `example.com` domain has been registered already.
- **Suggested action:** Verify you are signed in to the correct Resend account and check whether a teammate already added the domain. If you still cannot access it, [contact support](https://resend.com/help). [Learn more about resolving this error](/knowledge-base/domain-already-registered).

### `not_found`

- **Status:** 404
- **Message:** The requested endpoint does not exist.
- **Suggested action:** Change your request URL to match a valid API endpoint.

### `method_not_allowed`

- **Status:** 405
- **Message:** Method is not allowed for the requested path.
- **Suggested action:** Change your API endpoint to use a valid method.

### `invalid_idempotent_request`

- **Status:** 409
- **Message:** Same idempotency key used with a different request payload.
- **Suggested action:** Change your idempotency key or payload.

### `concurrent_idempotent_requests`

- **Status:** 409
- **Message:** Same idempotency key used while original request is still in progress.
- **Suggested action:** Try the request again later.

### `invalid_attachment`

- **Status:** 422
- **Message:** Attachment must have either a `content` or `path`.
- **Suggested action:** Attachments must either have a `content` (strings, Buffer, or Stream contents) or `path` to a remote resource (better for larger attachments).

### `invalid_from_address`

- **Status:** 422
- **Message:** Invalid `from` field.
- **Suggested action:** Make sure the `from` field is valid. The email address needs to follow the `email@example.com` or `Name <email@example.com>` format.

### `invalid_access`

- **Status:** 422
- **Message:** Access must be "full\_access" | "sending\_access".
- **Suggested action:** Make sure the API key has necessary permissions.

### `invalid_parameter`

- **Status:** 422
- **Message:** The `parameter` must be a valid UUID.
- **Suggested action:** Check the value and make sure it's valid.

### `invalid_region`

- **Status:** 422
- **Message:** Region must be "us-east-1" | "eu-west-1" | "sa-east-1".
- **Suggested action:** Make sure the correct region is selected.

### `missing_required_field`

- **Status:** 422
- **Message:** The request body is missing one or more required fields.
- **Suggested action:** Check the error message to see the list of missing fields.

### `monthly_quota_exceeded`

- **Status:** 429
- **Message:** You have reached your monthly email quota.
- **Suggested action:** [Upgrade your plan](https://resend.com/settings/billing) to increase the monthly email quota. Both sent and received emails count towards this quota.

### `daily_quota_exceeded`

- **Status:** 429
- **Message:** You have reached your daily email quota.
- **Suggested action:** [Upgrade your plan](https://resend.com/settings/billing) to remove the daily quota limit or wait until 24 hours have passed. Both sent and received emails count towards this quota.

### `rate_limit_exceeded`

- **Status:** 429
- **Message:** Too many requests. Please limit the number of requests per second. Or [contact support](https://resend.com/contact) to increase rate limit.
- **Suggested action:** You should read the [response headers](./introduction#rate-limit) and reduce the rate at which you request the API. This can be done by introducing a queue mechanism or reducing the number of concurrent requests per second. If you have specific requirements, [contact support](https://resend.com/contact) to request a rate increase.

### `security_error`

- **Status:** 451
- **Message:** We may have found a security issue with the request.
- **Suggested action:** The message will contain more details. [Contact support](https://resend.com/contact) for more information.

### `application_error`

- **Status:** 500
- **Message:** An unexpected error occurred.
- **Suggested action:** Try the request again later. If the error does not resolve, check our [status page](https://resend-status.com) for service updates.

### `internal_server_error`

- **Status:** 500
- **Message:** An unexpected error occurred.
- **Suggested action:** Try the request again later. If the error does not resolve, check our [status page](https://resend-status.com) for service updates.
